import {Component, Input} from "@angular/core";

@Component({
    selector: "my-first-component",
    template: `
                <h1>Component with input data from another component</h1>
                <div>data: {{data}}</div>
                <p>Age from main component: {{userAge}}</p>
`
})
export default class MyFirstComponent {
    @Input()
    data: string;
    _userAge: number;

    @Input()
    set userAge(age: number) {
        if (age < 0 || age > 100)
            this._userAge = 18;
        else
            this._userAge = age;
    }

    get userAge() {
        return this._userAge;
    }
}