import { StateService } from 'resources/services/state-service';

export class PersonService extends StateService {

  getPersons() {

    return this.httpClient.fetch('persons.json')
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(e => {
        this.logger.error(e.message);
        throw e;
      });

  }
  
  getPersonsError() {

    return this.httpClient.fetch('no-file.json')
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(e => {
        this.logger.error(e.message);
        throw e;
      });

  }

}
