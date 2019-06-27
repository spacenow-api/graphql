import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export default class PersonalizationAPI extends RESTDataSource {
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }
}
