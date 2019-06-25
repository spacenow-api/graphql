import PersonalizationAPI from '../interfaces/personalization.inteface';

class PostsAPI extends PersonalizationAPI {
  private path = '/posts';

  constructor(gatewayHost: string) {
    super();
    this.baseURL = gatewayHost;
  }

  getAllPosts = async () => {
    return this.get(`${this.path}`);
  };

  getPost = async (id: string) => {
    return this.get(`${this.path}/${id}`);
  };
}

export default PostsAPI;
