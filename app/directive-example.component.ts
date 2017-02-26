import {Component} from "@angular/core";

@Component({
    selector: 'directive-example-component',
    templateUrl: 'app/directive-example.html'
})
export default class DirectiveExampleComponent {

    condition: boolean = true;
    count: number = 2;
    numbers: number[] = [1, 2, 3, 4];

    toggle(): void {
        this.condition = !this.condition;
    }

    onChange(newNumber): void {
        this.count = newNumber;
    }
}