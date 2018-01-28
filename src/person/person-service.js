import { StateService } from 'resources/services/state-service';

export class PersonService extends StateService
{
    getPersonAfter3()
    {
        let persons = [
            { id: 1, name: "avraham" },
            { id: 2, name: "nick" }
        ];

        return new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                resolve(persons);
            }, 3000);
        });
    }
  
  createSomeErrorAfter2()
  {
    return new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                reject(new Error('Some error'));
            }, 2000);
        });
  }
}
