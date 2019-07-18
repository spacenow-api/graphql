import PersonalizationAPI from '../interfaces/personalization.inteface';

class PostsAPI extends PersonalizationAPI {
  private path = '/posts';

  constructor(apiAddress: string) {
    super();
    this.baseURL = apiAddress;
  }

  getAllPosts = async () => {
    return this.get(`${this.path}`);
  };

  getPost = async (id: string) => {
    return this.get(`${this.path}/${id}`);
  };
}

export default PostsAPI;
