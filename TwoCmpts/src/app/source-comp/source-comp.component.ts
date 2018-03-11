import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompoService } from '../services/compo.service';

@Component({
	selector: 'source-comp',
	template: `
	<form>
		Source of the message: 
		<input
			type="text"
			[(ngModel)]="inputx"
			(input)="inputChanged()"
			[ngModelOptions]="{standalone: true}"/>
	</form>
	`
})
export class SourceComp {
	private inputx: string;
	
	constructor(private svc: CompoService) {
	}

	private inputChanged(){
		this.svc.emit(this.inputx);
	}
}