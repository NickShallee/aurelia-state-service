import { inject } from 'aurelia-framework';
import { PersonService } from './person-service';

@inject(PersonService)
export class Person {
  personService;
  listOfPersons;

  constructor(personService) {

    this.personService = personService;

  }

  attached() {

    this.personService.getPersons()
      .then(persons => this.listOfPersons = persons)
      .catch(e => {
        // Handle errors
      });

    this.personService.getPersonsError()
      .then(persons => this.listOfPersons = persons)
      .catch(e => {
        // Handle errors
      });
    
  }

  //add
  //remove
  //etc.
}
