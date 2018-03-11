import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CompoService {
	private _subj: BehaviorSubject<string>;

	constructor() {
		this._subj = new BehaviorSubject('ran');
	}

	public emit(mesg): void {
	console.log(mesg);
		this._subj.next(mesg);
	}

	get subj(): BehaviorSubject<string>{
		return this._subj;
	}
}