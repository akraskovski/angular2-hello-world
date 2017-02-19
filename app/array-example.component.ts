import {Component} from "@angular/core";

@Component({
    selector: 'array-example-component',
    template: `
                <h1>NgFor example component:</h1>
                <ul>
                    <li *ngFor="let user of users">{{user}}</li>
                </ul>
`
})
export default class ArrayExampleComponent {
    users: string[] = ['Inna', 'Tatiana', 'Igor', 'Alexandr'];
}