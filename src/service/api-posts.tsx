import { RESTDataSource } from 'apollo-datasource-rest';

class PostsAPI extends RESTDataSource {

  private path = '/posts';

  constructor() {
    super();
    this.baseURL = 'http://localhost:4001';
  }

  getAllPosts = async () => {
    return this.get(`${this.path}`);
  }

  getPost = async (id: string) => {
    return this.get(`${this.path}/${id}`);
  }
}

export default PostsAPI;