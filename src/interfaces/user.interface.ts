interface IUser {
	id: string;
	name: string;
	email: string;
	password: string;
}

interface IUserProfileLegancy {
	userId: string;
	profileId: number;
	firstName: string;
	lastName: string;
	displayName: string;
	dateOfBirth: string;
	picture: string;
	gender: string;
	phoneNumber: string;
	preferredLanguage: string;
	preferredCurrency: string;
	info: string;
	location: string;
	createdAt: Date;
	updatedAt: Date;
	stripeCusId: string;
	country: number;
	verificationCode: number;
	countryCode: string;
	customerId: string;
	accountId: string;
	userLocationId: number;
	profileType: string;
	companyName: string;
	companyId: string;
	contactJobRole: string;
}

export { IUser, IUserProfileLegancy };