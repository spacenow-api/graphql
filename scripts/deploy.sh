#!/usr/bin/env bash

function get_ssm_parameter() {
    SSM_VALUE=`aws ssm get-parameters --with-decryption --names "${1}"  --query 'Parameters[*].Value' --output text`
    echo "${SSM_VALUE}"

}

usage="Usage: $(basename "$0") region environment
where:
  region       - the AWS region
  stack-name   - AWS Environment (dev,test,prod)
  image-url
  slice-name   - git branch

"

if [ "$1" == "-h" ] || [ "$1" == "--help" ] || [ "$1" == "help" ] || [ "$1" == "usage" ] ; then
  echo "$usage"
  exit -1
fi

if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ] ; then
  echo "$usage"
  exit -1
fi
set -eo pipefail
# region=ap-southeast-2
region=$1
stack_name=$(echo "$2-SPACENOW-GRAPHQL-${4:-master}" | tr '[:lower:]' '[:upper:]')
HostedZoneName=$(echo "$2.cloud.spacenow.com" | tr '[:upper:]' '[:lower:]')

# get ssm parameters from env
echo "Getting SSM Parameters "

ACM_CERTIFICATE=$(get_ssm_parameter /$2/SPACENOW/ACM_CERTIFICATE)
ASSETS_API_HOST=$(get_ssm_parameter /$2/SPACENOW/ASSETS_API_HOST)
CATEGORIES_API_HOST=$(get_ssm_parameter /$2/SPACENOW/CATEGORIES_API_HOST)
LOCATIONS_API_HOST=$(get_ssm_parameter /$2/SPACENOW/LOCATIONS_API_HOST)
SPACES_API_HOST=$(get_ssm_parameter /$2/SPACENOW/SPACES_API_HOST)
USERS_API_HOST=$(get_ssm_parameter /$2/SPACENOW/USERS_API_HOST)
API_AVAILABILITIES=$(get_ssm_parameter /$2/SPACENOW/API_AVAILABILITIES)
BOOKINGS_API_HOST=$(get_ssm_parameter /$2/SPACENOW/API_BOOKINGS)
PLAYGROUND=$(get_ssm_parameter /$2/SPACENOW/PLAYGROUND)
API_CAMPAIGNS=$(get_ssm_parameter /$2/SPACENOW/API_CAMPAIGNS)
echo "ENV ${2}"
CF_PARAMS="ParameterKey=ImageUrl,ParameterValue=$3 \
          ParameterKey=ContainerPort,ParameterValue=4000 \
          ParameterKey=StackName,ParameterValue=$2 \
          ParameterKey=SliceName,ParameterValue=$4 \
          ParameterKey=Certificate,ParameterValue=$ACM_CERTIFICATE \
          ParameterKey=AssetsApiHost,ParameterValue=$ASSETS_API_HOST \
          ParameterKey=CategoriesApiHost,ParameterValue=$CATEGORIES_API_HOST \
          ParameterKey=LocationsApiHost,ParameterValue=$LOCATIONS_API_HOST \
          ParameterKey=SpacesApiHost,ParameterValue=$SPACES_API_HOST \
          ParameterKey=UsersApiHost,ParameterValue=$USERS_API_HOST \
          ParameterKey=AvailabilitiesApiHost,ParameterValue=$API_AVAILABILITIES \
          ParameterKey=BookingsApiHost,ParameterValue=$BOOKINGS_API_HOST \
          ParameterKey=Playground,ParameterValue=$PLAYGROUND \
          ParameterKey=ApiCampaings,ParameterValue=$API_CAMPAIGNS \
          ParameterKey=HostedZoneName,ParameterValue=$HostedZoneName"
echo "Checking if stack exists ..."
if ! aws cloudformation describe-stacks --region $region --stack-name $stack_name ; then

echo -e "\nStack does not exist, creating ..."
  aws cloudformation create-stack \
    --region $region \
    --stack-name $stack_name \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
    --template-body file:///$PWD/scripts/spacenow-graphql-cf.yml \
    --parameters $CF_PARAMS \

echo "Waiting for stack to be created ..."
  aws cloudformation wait stack-create-complete \
    --region $region \
    --stack-name $stack_name
else
echo -e "\nStack exists, attempting update ..."

  set +e
  update_output=$( aws cloudformation update-stack \
    --region $region \
    --stack-name $stack_name \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
    --template-body=file:///$PWD/scripts/spacenow-graphql-cf.yml \
    --parameters $CF_PARAMS  2>&1)
  status=$?
  set -e

  echo "$update_output"

  if [ $status -ne 0 ] ; then

    # Don't fail for no-op update
    if [[ $update_output == *"ValidationError"* && $update_output == *"No updates"* ]] ; then
      echo -e "\nFinished create/update - no updates to be performed"
      exit 0
    else
      exit $status
    fi

  fi

  echo "Waiting for stack update to complete ..."
  aws cloudformation wait stack-update-complete \
    --region $region \
    --stack-name $stack_name \

fi

echo "Finished create/update successfully!"
