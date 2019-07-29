import { gql } from 'apollo-server';

const typeDefs = gql`
	type Location {
		id: Int
		userId: String
		country: String
		address1: String
		address2: String
		buildingName: String
		city: String
		state: String
		zipcode: String
		lat: String
		lng: String
		createdAt: String
		updatedAt: String
	}

	type AssetSize {
		xs: String
		sm: String
		md: String
		lg: String
		original: String
	}

	type Asset {
		id: String
		title: String
		description: String
		fileType: String
		fileName: String
		sizes: AssetSize
		accessControl: String
		isActive: Boolean
		createdAt: String
		updatedAt: String
	}

	type Auth {
		email: String
		password: String
	}

	type Token {
		token: String
		expiresIn: Int
	}

	type Availabilities {
		bookingDates: [String]
		exceptionDates: [String]
	}

	type Booking {
		listingId: Int
		quantity: Int
		currency: String
		totalPrice: Float
		bookingType: String
		basePrice: Float
		createdAt: Int
		period: Int
		sourceId: String
		bookingState: String
		chargeId: String
		hostServiceFee: Float
		confirmationCode: Int
		bookingId: String
		guestServiceFee: Float
		hostId: String
		paymentState: String
		updatedAt: Int
		priceType: String
		guestId: String
	}

	type Category {
		id: String!
		name: String!
		slug: String!
		parentId: String
		order: Int!
		isActive: Boolean!
		children: [Category]
	}

	type BookingPeriodLegacy {
		id: Int
		listSettingsParentId: Int
		monthly: Int
		weekly: Int
		daily: Int
		hourly: Int
	}

	type SubCategoryLegacy {
		id: Int
		listSettingsParentId: Int
		listSettingsChildId: Int
		typeId: Int
		itemName: String
		otherItemName: String
		description: String
		maximum: Int
		minimum: Int
		startValue: Int
		endValue: Int
		step: String
		isEnable: String
		photo: String
		photoType: String
		isSpecification: Int
		specData: String
		bookingPeriod: BookingPeriodLegacy
	}

	type CategoryLegacy {
		id: Int
		typeId: Int
		itemName: String
		otherItemName: String
		description: String
		maximum: Int
		minimum: Int
		startValue: Int
		endValue: Int
		step: String
		isEnable: String
		photo: String
		photoType: String
		isSpecification: Int
		specData: String
		subCategories: [SubCategoryLegacy]
	}

	type Holidays {
		date: String
		description: String
	}

	type User {
		id: String!
		email: String!
		password: String!
		isEmailConfirmed: Boolean!
	}

	type UserProfile {
		status: String
		userId: String
		profileId: Int
		firstName: String
		lastName: String
		displayName: String
		dateOfBirth: String
		picture: String
		gender: String
		phoneNumber: String
		preferredLanguage: String
		preferredCurrency: String
		info: String
		location: String
		createdAt: String
		updatedAt: String
		stripeCusId: String
		country: Int
		verificationCode: Int
		countryCode: String
		customerId: String
		accountId: String
		userLocationId: Int
		profileType: String
		companyName: String
		companyId: String
		contactJobRole: String
	}

	type ListSettings {
		id: Int
		typeId: Int
		itemName: String
		otherItemName: String
		description: String
		maximum: String
		minimum: String
		startValue: String
		endValue: String
		step: String
		isEnable: String
		photo: String
		photoType: String
		isSpecification: Boolean
		createdAt: String
		updatedAt: String
		specData: String
	}

	type ListingRules {
		id: Int
		listingId: Int
		listSettingsId: Int
		createdAt: String
		updatedAt: String
		settingsData: ListSettings
	}

	type ListingAmenities {
		id: Int
		listingId: Int
		listSettingsId: Int
		amount: Int
		quantity: Int
		currency: String
		settings: String
		type: String
		createdAt: String
		updatedAt: String
		settingsData: ListSettings
	}

	type ListSettingsParent {
		id: Int
		category: ListSettings
		subcategory: ListSettings
		bookingPeriod: BookingPeriodLegacy
	}

	type ListingAccessHours {
		id: Int
		listingAccessDaysId: Int
		weekday: Int
		openHour: String
		closeHour: String
		allday: Boolean
		createdAt: String
		updatedAt: String
	}

	type ListingPhotos {
		id: Int
		listingId: Int
		name: String
		isCover: Boolean
		bucket: String
		region: String
		key: String
		type: String
		createdAt: String
		updatedAt: String
	}

	type ListingAccessDays {
		id: Int
		listingId: Int
		mon: Boolean
		tue: Boolean
		wed: Boolean
		thu: Boolean
		fri: Boolean
		sat: Boolean
		sun: Boolean
		all247: Boolean
		createdAt: String
		updatedAt: String
		listingAccessHours: [ListingAccessHours]
	}

	input ListingAccessHoursInput {
		weekday: Int
		openHour: String
		closeHour: String
		allday: Boolean
	}

	input ListingAccessDaysInput {
		listingId: Int
		mon: Boolean
		tue: Boolean
		wed: Boolean
		thu: Boolean
		fri: Boolean
		sat: Boolean
		sun: Boolean
		all247: Boolean
		listingAccessHours: [ListingAccessHoursInput]
	}

	type ListingData {
		listingId: Int
		accessType: String
		bookingNoticeTime: String
		minTerm: Float
		maxTerm: Float
		description: String
		basePrice: Float
		currency: String
		isAbsorvedFee: Boolean
		capacity: Int
		size: Int
		meetingRooms: Int
		isFurnished: Boolean
		carSpace: Int
		sizeOfVehicle: String
		maxEntranceHeight: String
		bookingType: String
		spaceType: String
		listingAmenities: [Int]
		listingExceptionDates: [String]
		listingRules: [Int]
		listingAccessDays: ListingAccessDays
		status: String
	}

	type Listing {
		id: Int
		userId: String
		title: String
		coverPhotoId: Int
		bookingPeriod: String
		isPublished: Boolean
		isReady: Boolean
		quantity: Int
		status: String
		createdAt: String
		updatedAt: String
		count: Int
		listingData: ListingData
		location: Location
		amenities: [ListingAmenities]
		rules: [ListingRules]
		photos: [ListingPhotos]
		accessDays: ListingAccessDays
		settingsParent: ListSettingsParent
	}

	type ListingAsset {
		listingId: Int
		assetId: String
		isCover: Boolean
		asset: Asset
	}

	type Success {
		status: String
	}

	type Query {
		getAvailabilitiesByListingId(listingId: Int!): Availabilities
		getAllBookings: [Booking]
		getBooking: Booking
		getCategoriesLegacy: [CategoryLegacy]
		getCategory(id: String!): Category
		getRootCategories: [Category]
		getAllHolidays(
			countryShortName: String
			year: Int
			state: String!
		): [Holidays]
		getListingById(id: Int!): Listing
		getPhotosByListingId(listingId: Int!): [ListingPhotos]
		getLocationById(id: Int!): Location
		getAllUsers: [User]
		getUser(id: String!): User
		getAllAmenitiesBySubCategoryId(subCategoryId: Int!): [ListSettings]
		getAllRules: [ListSettings]
		getAllAccessTypes: [ListSettings]
		getAllSpecificationsByParentId(listSettingsParentId: Int!): [ListSettings]
	}

	type Mutation {
		uploadPhoto(file: Upload, listingId: Int!): ListingPhotos
		deletePhoto(photoId: Int!, listingId: Int!): Success
		setCoverPhoto(photoId: Int!, listingId: Int!): Success
		login(email: String, password: String): Token
		createCategory(
			name: String
			parentId: String
			order: Int
			isActive: Boolean
		): Category
		createOrUpdateListing(
			locationId: Int!
			listSettingsParentId: Int!
			bookingPeriod: String
			title: String
			coverPhotoId: Int
			quantity: Int
			listingId: Int
			accessType: String
			bookingNoticeTime: String
			minTerm: Float
			maxTerm: Float
			description: String
			basePrice: Float
			currency: String
			isAbsorvedFee: Boolean
			capacity: Int
			size: Int
			meetingRooms: Int
			isFurnished: Boolean
			carSpace: Int
			sizeOfVehicle: String
			maxEntranceHeight: String
			spaceType: String
			bookingType: String
			bookingPeriod: String
			listingAmenities: [Int]
			listingAccessDays: ListingAccessDaysInput
			listingExceptionDates: [String]
			listingRules: [Int]
		): Listing
		getOrCreateLocation(suggestAddress: String!, unit: String): Location
		tokenValidate(token: String!): UserProfile
		publish(listingId: Int!, status: Boolean!): Listing
	}
`;

export default typeDefs;
