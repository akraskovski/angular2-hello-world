import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import AppComponent from "./app.component";
import MyFirstComponent from "./my-first.component";
import ArrayExampleComponent from "./array-example.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, MyFirstComponent, ArrayExampleComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}