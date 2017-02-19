import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export default class AppComponent {
    startText: string = 'Hello World';
    author: string = 'Artem';
    temp: string = 'test string';
    twoSideStr: string;

    showTempString(): void {
        alert(this.temp);
    }
}