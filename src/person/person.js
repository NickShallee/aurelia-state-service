import { inject } from 'aurelia-framework';
import { PersonService } from './person-service';

@inject(PersonService)
export class Person
{
    personService;
    listOfPersons;

    constructor(personService)
    {
        this.personService = personService;
    }

    attached()
    {
        this.personService.getPersonAfter3()
          .then(persons => this.listOfPersons = persons);
      
      
        this.personService.createSomeErrorAfter2()
          .then(() =>
          {
            //will never get here.
          })
          .catch(e =>
          {
            //do whaterver?
          });
    }

    //add
    //remove
    //etc.
}
