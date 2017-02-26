import {Injectable} from "@angular/core";

@Injectable()
export class MyFirstService {

    getNames(): string[] {
        return ['First', 'Second', 'Third'];
    }

    getRandomNumber(): number {
        return Math.random();
    }
}