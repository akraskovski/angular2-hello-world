import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
                <h1>{{text}}</h1>
                <my-first-component [data]=author></my-first-component>
              `
})
export class AppComponent {
    text: string = 'Hello World';
    author: string = 'Artem';
}