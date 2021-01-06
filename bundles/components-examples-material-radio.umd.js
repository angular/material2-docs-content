(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/radio')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/radio', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/radio'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.radio = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.radio));
}(this, (function (exports, i3, i0, i2, i1) { 'use strict';

    function RadioNgModelExample_mat_radio_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-radio-button", 3);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var season_r1 = ctx.$implicit;
            i0.ɵɵproperty("value", season_r1);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", season_r1, " ");
        }
    }
    /**
     * @title Radios with ngModel
     */
    var RadioNgModelExample = /** @class */ (function () {
        function RadioNgModelExample() {
            this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        }
        return RadioNgModelExample;
    }());
    RadioNgModelExample.ɵfac = function RadioNgModelExample_Factory(t) { return new (t || RadioNgModelExample)(); };
    RadioNgModelExample.ɵcmp = i0.ɵɵdefineComponent({ type: RadioNgModelExample, selectors: [["radio-ng-model-example"]], decls: 6, vars: 3, consts: [["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value"]], template: function RadioNgModelExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "label", 0);
                i0.ɵɵtext(1, "Pick your favorite season");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-radio-group", 1);
                i0.ɵɵlistener("ngModelChange", function RadioNgModelExample_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.favoriteSeason = $event; });
                i0.ɵɵtemplate(3, RadioNgModelExample_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.favoriteSeason);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.seasons);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Your favorite season is: ", ctx.favoriteSeason, "");
            }
        }, directives: [i1.MatRadioGroup, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i1.MatRadioButton], styles: [".example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RadioNgModelExample, [{
                type: i0.Component,
                args: [{
                        selector: 'radio-ng-model-example',
                        templateUrl: 'radio-ng-model-example.html',
                        styleUrls: ['radio-ng-model-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic radios
     */
    var RadioOverviewExample = /** @class */ (function () {
        function RadioOverviewExample() {
        }
        return RadioOverviewExample;
    }());
    RadioOverviewExample.ɵfac = function RadioOverviewExample_Factory(t) { return new (t || RadioOverviewExample)(); };
    RadioOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: RadioOverviewExample, selectors: [["radio-overview-example"]], decls: 5, vars: 0, consts: [["aria-label", "Select an option"], ["value", "1"], ["value", "2"]], template: function RadioOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-radio-group", 0);
                i0.ɵɵelementStart(1, "mat-radio-button", 1);
                i0.ɵɵtext(2, "Option 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-radio-button", 2);
                i0.ɵɵtext(4, "Option 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatRadioGroup, i1.MatRadioButton], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RadioOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'radio-overview-example',
                        templateUrl: 'radio-overview-example.html',
                        styleUrls: ['radio-overview-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatRadioHarness
     */
    var RadioHarnessExample = /** @class */ (function () {
        function RadioHarnessExample() {
        }
        return RadioHarnessExample;
    }());
    RadioHarnessExample.ɵfac = function RadioHarnessExample_Factory(t) { return new (t || RadioHarnessExample)(); };
    RadioHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: RadioHarnessExample, selectors: [["radio-harness-example"]], decls: 7, vars: 0, consts: [["name", "flavors"], ["value", "chocolate", "checked", "true"], ["value", "vanilla"], ["value", "strawberry"]], template: function RadioHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-radio-group", 0);
                i0.ɵɵelementStart(1, "mat-radio-button", 1);
                i0.ɵɵtext(2, "Chocolate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-radio-button", 2);
                i0.ɵɵtext(4, "Vanilla");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-radio-button", 3);
                i0.ɵɵtext(6, "Strawberry");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatRadioGroup, i1.MatRadioButton], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RadioHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'radio-harness-example',
                        templateUrl: 'radio-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample,
    ];
    var RadioExamplesModule = /** @class */ (function () {
        function RadioExamplesModule() {
        }
        return RadioExamplesModule;
    }());
    RadioExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: RadioExamplesModule });
    RadioExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RadioExamplesModule_Factory(t) { return new (t || RadioExamplesModule)(); }, imports: [[
                i2.ReactiveFormsModule,
                i3.CommonModule,
                i1.MatRadioModule,
                i2.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RadioExamplesModule, { declarations: [RadioHarnessExample,
                RadioNgModelExample,
                RadioOverviewExample], imports: [i2.ReactiveFormsModule,
                i3.CommonModule,
                i1.MatRadioModule,
                i2.FormsModule], exports: [RadioHarnessExample,
                RadioNgModelExample,
                RadioOverviewExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RadioExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.ReactiveFormsModule,
                            i3.CommonModule,
                            i1.MatRadioModule,
                            i2.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RadioExamplesModule = RadioExamplesModule;
    exports.RadioHarnessExample = RadioHarnessExample;
    exports.RadioNgModelExample = RadioNgModelExample;
    exports.RadioOverviewExample = RadioOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-radio.umd.js.map
