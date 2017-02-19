import {Component} from "@angular/core";

@Component({
    selector: 'directive-example-component',
    template: `
                <h1>Directives example</h1>
                <p *ngIf="condition">Condition is true</p>
                <p *ngIf="!condition">Condition is false</p>
                <button (click)="toggle()">Toggle</button>
                <p>Switch (case) example</p>
                <select [ngModel]="count" (ngModelChange)="onChange($event)" name="sel2">
                    <option [value]="index" *ngFor="let index of numbers">{{index}}</option>
                </select>
                <div [ngSwitch]="count">
                    <div *ngSwitchCase="1">number = {{count}}</div>
                    <div *ngSwitchCase="2">number = {{count}}</div>
                    <div *ngSwitchCase="3">number = {{count}}</div>
                    <div *ngSwitchCase="4">number = {{count}}</div>
                </div>
`
})
export default class DirectiveExampleComponent {

    condition: boolean = true;
    count: number = 2;
    numbers: number[] = [1, 2, 3, 4];

    toggle(): void {
        this.condition = !this.condition;
    }

    onChange(newNumber): void {
        this.count = newNumber;
    }
}