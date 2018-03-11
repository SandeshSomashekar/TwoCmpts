import { Component } from '@angular/core';
import { CompoService } from '../services/compo.service';

@Component({
	selector: 'comp1',
	template: `
		<div>Received message in Component1: {{comp1Val}}</div>
	`
})
export class Comp1 {
	private comp1Val: string;
	
	constructor(private svc: CompoService) {
		this.svc.subj.subscribe(
			mesg => {this.comp1Val = mesg;}
		);
	}
}