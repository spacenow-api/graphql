import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export default class PersonalizationAPI extends RESTDataSource {

  willSendRequest(request: RequestOptions) {
    const { headers } = request;
    headers.set('Authorization', this.context.token);
    headers.set('Accept-Encoding', 'br,gzip,deflate');
    headers.set('Cache-Control', 'private, max-age=1195723');
  }
}
