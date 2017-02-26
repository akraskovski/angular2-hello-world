import {Component, OnInit} from "@angular/core";
import {MyFirstService} from "./my-first.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export default class AppComponent implements OnInit{
    startText: string = 'Hello World';
    author: string = 'Artem';
    temp: string = 'test string';
    twoSideStr: string;
    age: number = 20;
    arrayFromService: string[];

    constructor(private myFirstService: MyFirstService) { }

    ngOnInit(): void {
        this.arrayFromService = this.myFirstService.getNames();
    }

    showTempString(): void {
        alert(this.temp);
    }
}