interface IEAVAttribute {
  id: string;
  entityTypeId: string;
  attributeCode: string;
  frontendInput: string;
  frontendLabel: string;
  backendType: string;
  backendModel: string;
  isRequired: boolean;
}

export { IEAVAttribute };
