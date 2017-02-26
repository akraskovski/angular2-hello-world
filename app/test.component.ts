import {Component} from "@angular/core";
import {MyFirstService} from "./my-first.service";

@Component({
    selector: 'test-component',
    template: `
    <ul>
        <li *ngFor="let str of stringArray">{{str}}</li>
    </ul>
    <p>Random number from service: {{digit}}</p>
    `
})
export class TestComponent {
    stringArray: string[] = ['First', 'Second', 'Third', 'Fourth'];
    digit: number;

    constructor(private myFirstService: MyFirstService) {
        this.digit = myFirstService.getRandomNumber();
    }
}