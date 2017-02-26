import {Component} from "@angular/core";

@Component({
    selector: 'array-example-component',
    templateUrl: 'app/array-example.html'
})
export default class ArrayExampleComponent {
    users: string[] = ['Inna', 'Tatiana', 'Igor', 'Alexandr'];
}