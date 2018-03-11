import { Component } from '@angular/core';
import { CompoService } from '../services/compo.service';

@Component({
	selector: 'comp2',
	template: `
		<div>Received message in Component1:  {{comp2Val}}</div>
	`
})
export class Comp2 {
	private comp2Val: string;
	
	constructor(private svc: CompoService) {
		this.svc.subj.subscribe(
			mesg => {this.comp2Val = mesg;}
		);
	}
}