import {Component} from "@angular/core";

@Component({
    selector: 'test-component',
    template: `
    <h1>Test component</h1>
    <ul>
        <li *ngFor="let str of stringArray">{{str}}</li>
    </ul>
    `
})
export class TestComponent {
    stringArray: string[] = ['First', 'Second', 'Third', 'Fourth'];
}