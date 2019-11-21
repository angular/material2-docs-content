(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/snack-bar'), require('@angular/material/form-field'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/snack-bar', ['exports', 'tslib', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/input', '@angular/material/select', '@angular/material/snack-bar', '@angular/material/form-field', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.snackBar = {}), global.tslib, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.input, global.ng.material.select, global.ng.material.snackBar, global.ng.material.formField, global.ng.material.core));
}(this, (function (exports, tslib, i0, i3, i5, i4, i3$1, i1, i2, i4$1) { 'use strict';

    /**
     * @title Snack-bar with a custom component
     */
    var SnackBarComponentExample = /** @class */ (function () {
        function SnackBarComponentExample(_snackBar) {
            this._snackBar = _snackBar;
            this.durationInSeconds = 5;
        }
        SnackBarComponentExample.prototype.openSnackBar = function () {
            this._snackBar.openFromComponent(PizzaPartyComponent, {
                duration: this.durationInSeconds * 1000,
            });
        };
        SnackBarComponentExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snack-bar-component-example',
                        templateUrl: 'snack-bar-component-example.html',
                        styleUrls: ['snack-bar-component-example.css'],
                    },] },
        ];
        /** @nocollapse */
        SnackBarComponentExample.ctorParameters = function () { return [
            { type: i1.MatSnackBar }
        ]; };
        SnackBarComponentExample.ɵfac = function SnackBarComponentExample_Factory(t) { return new (t || SnackBarComponentExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
        SnackBarComponentExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarComponentExample, selectors: [["snack-bar-component-example"]], decls: 6, vars: 1, consts: [["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarComponentExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Snack bar duration (seconds)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "input", 0);
                i0.ɵɵlistener("ngModelChange", function SnackBarComponentExample_Template_input_ngModelChange_3_listener($event) { return ctx.durationInSeconds = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "button", 1);
                i0.ɵɵlistener("click", function SnackBarComponentExample_Template_button_click_4_listener($event) { return ctx.openSnackBar(); });
                i0.ɵɵtext(5, " Pizza party\n");
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.durationInSeconds);
            } }, directives: [i2.MatFormField, i2.MatLabel, i3.NumberValueAccessor, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i5.MatButton], styles: [""] });
        return SnackBarComponentExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarComponentExample, [{
            type: i0.Component,
            args: [{
                    selector: 'snack-bar-component-example',
                    templateUrl: 'snack-bar-component-example.html',
                    styleUrls: ['snack-bar-component-example.css'],
                }]
        }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
    var PizzaPartyComponent = /** @class */ (function () {
        function PizzaPartyComponent() {
        }
        PizzaPartyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snack-bar-component-example-snack',
                        templateUrl: 'snack-bar-component-example-snack.html',
                        styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "],
                    },] },
        ];
        PizzaPartyComponent.ɵfac = function PizzaPartyComponent_Factory(t) { return new (t || PizzaPartyComponent)(); };
        PizzaPartyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PizzaPartyComponent, selectors: [["snack-bar-component-example-snack"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function PizzaPartyComponent_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵtext(1, " Pizza party!!! \uD83C\uDF55\n");
                i0.ɵɵelementEnd();
            } }, styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"] });
        return PizzaPartyComponent;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PizzaPartyComponent, [{
            type: i0.Component,
            args: [{
                    selector: 'snack-bar-component-example-snack',
                    templateUrl: 'snack-bar-component-example-snack.html',
                    styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "],
                }]
        }], null, null); })();

    /**
     * @title Basic snack-bar
     */
    var SnackBarOverviewExample = /** @class */ (function () {
        function SnackBarOverviewExample(_snackBar) {
            this._snackBar = _snackBar;
        }
        SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
        };
        SnackBarOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snack-bar-overview-example',
                        templateUrl: 'snack-bar-overview-example.html',
                        styleUrls: ['snack-bar-overview-example.css'],
                    },] },
        ];
        /** @nocollapse */
        SnackBarOverviewExample.ctorParameters = function () { return [
            { type: i1.MatSnackBar }
        ]; };
        SnackBarOverviewExample.ɵfac = function SnackBarOverviewExample_Factory(t) { return new (t || SnackBarOverviewExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
        SnackBarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 8, vars: 0, consts: [["matInput", "", "value", "Disco party!", "placeholder", "Message"], ["message", ""], ["matInput", "", "value", "Dance", "placeholder", "Action"], ["action", ""], ["mat-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
                var _r2 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field");
                i0.ɵɵelement(4, "input", 2, 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 4);
                i0.ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(2); var _r1 = i0.ɵɵreference(5); return ctx.openSnackBar(_r0.value, _r1.value); });
                i0.ɵɵtext(7, "Show snack-bar");
                i0.ɵɵelementEnd();
            } }, directives: [i2.MatFormField, i4.MatInput, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return SnackBarOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'snack-bar-overview-example',
                    templateUrl: 'snack-bar-overview-example.html',
                    styleUrls: ['snack-bar-overview-example.css'],
                }]
        }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();

    /**
     * @title Snack-bar with configurable position
     */
    var SnackBarPositionExample = /** @class */ (function () {
        function SnackBarPositionExample(_snackBar) {
            this._snackBar = _snackBar;
            this.horizontalPosition = 'start';
            this.verticalPosition = 'bottom';
        }
        SnackBarPositionExample.prototype.openSnackBar = function () {
            this._snackBar.open('Canonball!!', 'End now', {
                duration: 500,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        };
        SnackBarPositionExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snack-bar-position-example',
                        templateUrl: 'snack-bar-position-example.html',
                        styleUrls: ['snack-bar-position-example.css'],
                    },] },
        ];
        /** @nocollapse */
        SnackBarPositionExample.ctorParameters = function () { return [
            { type: i1.MatSnackBar }
        ]; };
        SnackBarPositionExample.ɵfac = function SnackBarPositionExample_Factory(t) { return new (t || SnackBarPositionExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
        SnackBarPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 20, vars: 2, consts: [["placeholder", "Horizontal position", 3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["placeholder", "Vertical position", 3, "value", "valueChange"], ["value", "top"], ["value", "bottom"], ["mat-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "mat-select", 0);
                i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_1_listener($event) { return ctx.horizontalPosition = $event; });
                i0.ɵɵelementStart(2, "mat-option", 1);
                i0.ɵɵtext(3, "Start");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-option", 2);
                i0.ɵɵtext(5, "Center");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-option", 3);
                i0.ɵɵtext(7, "End");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-option", 4);
                i0.ɵɵtext(9, "Left");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-option", 5);
                i0.ɵɵtext(11, "Right");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-form-field");
                i0.ɵɵelementStart(13, "mat-select", 6);
                i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_13_listener($event) { return ctx.verticalPosition = $event; });
                i0.ɵɵelementStart(14, "mat-option", 7);
                i0.ɵɵtext(15, "Top");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-option", 8);
                i0.ɵɵtext(17, "Bottom");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "button", 9);
                i0.ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_18_listener($event) { return ctx.openSnackBar(); });
                i0.ɵɵtext(19, " Pool party!\n");
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("value", ctx.horizontalPosition);
                i0.ɵɵadvance(12);
                i0.ɵɵproperty("value", ctx.verticalPosition);
            } }, directives: [i2.MatFormField, i3$1.MatSelect, i4$1.MatOption, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return SnackBarPositionExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarPositionExample, [{
            type: i0.Component,
            args: [{
                    selector: 'snack-bar-position-example',
                    templateUrl: 'snack-bar-position-example.html',
                    styleUrls: ['snack-bar-position-example.css'],
                }]
        }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();

    var EXAMPLES = [
        SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
    ];
    var SnackBarExamplesModule = /** @class */ (function () {
        function SnackBarExamplesModule() {
        }
        SnackBarExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i3.FormsModule,
                            i5.MatButtonModule,
                            i4.MatInputModule,
                            i3$1.MatSelectModule,
                            i1.MatSnackBarModule,
                        ],
                        declarations: tslib.__spread(EXAMPLES, [PizzaPartyComponent]),
                        exports: EXAMPLES,
                        entryComponents: [PizzaPartyComponent],
                    },] },
        ];
        SnackBarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SnackBarExamplesModule });
        SnackBarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SnackBarExamplesModule_Factory(t) { return new (t || SnackBarExamplesModule)(); }, imports: [[
                    i3.FormsModule,
                    i5.MatButtonModule,
                    i4.MatInputModule,
                    i3$1.MatSelectModule,
                    i1.MatSnackBarModule,
                ]] });
        return SnackBarExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SnackBarExamplesModule, { declarations: [SnackBarComponentExample,
            SnackBarOverviewExample,
            SnackBarPositionExample,
            PizzaPartyComponent], imports: [i3.FormsModule,
            i5.MatButtonModule,
            i4.MatInputModule,
            i3$1.MatSelectModule,
            i1.MatSnackBarModule], exports: [SnackBarComponentExample,
            SnackBarOverviewExample,
            SnackBarPositionExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i3.FormsModule,
                        i5.MatButtonModule,
                        i4.MatInputModule,
                        i3$1.MatSelectModule,
                        i1.MatSnackBarModule,
                    ],
                    declarations: tslib.__spread(EXAMPLES, [PizzaPartyComponent]),
                    exports: EXAMPLES,
                    entryComponents: [PizzaPartyComponent],
                }]
        }], null, null); })();

    exports.PizzaPartyComponent = PizzaPartyComponent;
    exports.SnackBarComponentExample = SnackBarComponentExample;
    exports.SnackBarExamplesModule = SnackBarExamplesModule;
    exports.SnackBarOverviewExample = SnackBarOverviewExample;
    exports.SnackBarPositionExample = SnackBarPositionExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-snack-bar.umd.js.map
