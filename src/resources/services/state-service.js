import { inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class StateService
{
	httpClient;
	logger;
	
	static applyAutoStateToAllFunctions(someService)
	{
		let functionNames = Reflect.ownKeys(Reflect.getPrototypeOf(someService)).filter(name => name !== 'constructor');
		
		functionNames.forEach(name =>
		{
			let oldFuncname = `${name}_old`;
			let busy = `${name}_isBusy`;
			let error = `${name}_hasError`;
			
			someService[oldFuncname] = someService[name];
			
			someService[name] = function(...params)
			{
				someService[busy] = true;
				someService[error] = false;
				
				return someService[oldFuncname](...params)
					.then(data =>
					{
						someService[busy] = false;
						return data;
					})
					.catch(e =>
					{
						someService[busy] = false;
						someService[error] = e;
						throw e;
					})
			};
		});
	}
	constructor(httpClient)
	{
		this.httpClient = httpClient;
		this.logger = getLogger(this.constructor.name);
		
		StateService.applyAutoStateToAllFunctions(this);
		
		this.logger.info('State Service Initialized');
	}
}
