interface IPriceEstimationList {
  count: number;
  results: Array<IPriceEstimation>;
}

interface IPriceEstimation {
  priceEstimationId: string;
  state: string;
  suburb: string;
  postcode: string;
  estimate: number;
  term: string;
}

export { IPriceEstimationList, IPriceEstimation };