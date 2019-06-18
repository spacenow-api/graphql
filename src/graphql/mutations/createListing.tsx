import Listing from '../types/listing';

const createListing = {

  type: Listing,

  args: {},

  async resolve() {
    return 'hello world'
  },
};

export default createListing;
