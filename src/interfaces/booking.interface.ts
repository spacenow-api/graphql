interface IBooking {
	listingId: number,
	quantity: number,
	currency: string,
	totalPrice: number,
	bookingType: string,
	basePrice: number,
	createdAt: number,
	period: number,
	sourceId: string,
	bookingState: string,
	chargeId: string,
	hostServiceFee: number,
	confirmationCode: number,
	bookingId: string,
	guestServiceFee: number,
	hostId: string,
	paymentState: string,
	updatedAt: number,
	priceType: string,
	guestId: string,
	isAbsorvedFee: boolean,
	checkInHour: string,
	checkOutHour: string,
	message: string
}

export default IBooking;