"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MyFirstComponent = (function () {
    function MyFirstComponent() {
    }
    Object.defineProperty(MyFirstComponent.prototype, "userAge", {
        get: function () {
            return this._userAge;
        },
        set: function (age) {
            if (age < 0 || age > 100)
                this._userAge = 18;
            else
                this._userAge = age;
        },
        enumerable: true,
        configurable: true
    });
    return MyFirstComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyFirstComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MyFirstComponent.prototype, "userAge", null);
MyFirstComponent = __decorate([
    core_1.Component({
        selector: "my-first-component",
        template: "\n                <h1>Component with input data from another component</h1>\n                <div>data: {{data}}</div>\n                <p>Age from main component: {{userAge}}</p>\n"
    })
], MyFirstComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MyFirstComponent;
//# sourceMappingURL=my-first.component.js.map