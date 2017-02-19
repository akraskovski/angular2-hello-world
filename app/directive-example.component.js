"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DirectiveExampleComponent = (function () {
    function DirectiveExampleComponent() {
        this.condition = true;
        this.count = 2;
        this.numbers = [1, 2, 3, 4];
    }
    DirectiveExampleComponent.prototype.toggle = function () {
        this.condition = !this.condition;
    };
    DirectiveExampleComponent.prototype.onChange = function (newNumber) {
        this.count = newNumber;
    };
    return DirectiveExampleComponent;
}());
DirectiveExampleComponent = __decorate([
    core_1.Component({
        selector: 'directive-example-component',
        template: "\n                <h1>Directives example</h1>\n                <p *ngIf=\"condition\">Condition is true</p>\n                <p *ngIf=\"!condition\">Condition is false</p>\n                <button (click)=\"toggle()\">Toggle</button>\n                <p>Switch (case) example</p>\n                <select [ngModel]=\"count\" (ngModelChange)=\"onChange($event)\" name=\"sel2\">\n                    <option [value]=\"index\" *ngFor=\"let index of numbers\">{{index}}</option>\n                </select>\n                <div [ngSwitch]=\"count\">\n                    <div *ngSwitchCase=\"1\">number = {{count}}</div>\n                    <div *ngSwitchCase=\"2\">number = {{count}}</div>\n                    <div *ngSwitchCase=\"3\">number = {{count}}</div>\n                    <div *ngSwitchCase=\"4\">number = {{count}}</div>\n                </div>\n"
    })
], DirectiveExampleComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DirectiveExampleComponent;
//# sourceMappingURL=directive-example.component.js.map