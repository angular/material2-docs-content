import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

/**
 * @title Elevation CSS classes
 */
var ElevationOverviewExample = /** @class */ (function () {
    function ElevationOverviewExample() {
        this.isActive = false;
    }
    ElevationOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'elevation-overview-example',
                    template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n",
                    styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"]
                }] }
    ];
    return ElevationOverviewExample;
}());

/**
 * @title MatRipple basic usage
 */
var RippleOverviewExample = /** @class */ (function () {
    function RippleOverviewExample() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    RippleOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'ripple-overview-example',
                    template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n",
                    styles: [".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n"]
                }] }
    ];
    return RippleOverviewExample;
}());

var EXAMPLES = [
    ElevationOverviewExample,
    RippleOverviewExample,
];
var CoreExamplesModule = /** @class */ (function () {
    function CoreExamplesModule() {
    }
    CoreExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatRippleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CoreExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ElevationOverviewExample, RippleOverviewExample, CoreExamplesModule };
//# sourceMappingURL=core.js.map
