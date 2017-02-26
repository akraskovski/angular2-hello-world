import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import AppComponent from "./app.component";
import MyFirstComponent from "./my-first.component";
import ArrayExampleComponent from "./array-example.component";
import DirectiveExampleComponent from "./directive-example.component";
import {TestComponent} from "./test.component";
import {MyFirstService} from "./my-first.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, MyFirstComponent, ArrayExampleComponent, DirectiveExampleComponent, TestComponent],
    bootstrap: [AppComponent],
    providers: [MyFirstService]
})
export class AppModule { }