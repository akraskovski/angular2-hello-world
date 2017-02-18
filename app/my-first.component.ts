import {Component, Input} from "@angular/core";

@Component({
    selector: "my-first-component",
    template: `<h3>Component 2</h3>
                <br/>
                <div>{{data}}</div>
`
})
export class MyFirstComponent {
    @Input()
    data: string
}