import {Component, Input} from "@angular/core";

@Component({
    selector: "my-first-component",
    template: `
                <h1>Component with input data from another component</h1>
                <div>data: {{data}}</div>
`
})
export default class MyFirstComponent {
    @Input()
    data: string;
}