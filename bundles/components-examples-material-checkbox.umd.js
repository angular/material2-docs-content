(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/radio')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/checkbox', ['exports', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/checkbox', '@angular/material/radio'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.checkbox = {}), global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.checkbox, global.ng.material.radio));
}(this, (function (exports, i0, i3, i1, i2, i4) { 'use strict';

    /**
     * @title Configurable checkbox
     */
    var CheckboxConfigurableExample = /** @class */ (function () {
        function CheckboxConfigurableExample() {
            this.checked = false;
            this.indeterminate = false;
            this.labelPosition = 'after';
            this.disabled = false;
        }
        CheckboxConfigurableExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'checkbox-configurable-example',
                        templateUrl: 'checkbox-configurable-example.html',
                        styleUrls: ['checkbox-configurable-example.css'],
                    },] },
        ];
        CheckboxConfigurableExample.ɵfac = function CheckboxConfigurableExample_Factory(t) { return new (t || CheckboxConfigurableExample)(); };
        CheckboxConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-card");
                i0.ɵɵelementStart(1, "mat-card-content");
                i0.ɵɵelementStart(2, "h2", 0);
                i0.ɵɵtext(3, "Checkbox configuration");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "section", 1);
                i0.ɵɵelementStart(5, "mat-checkbox", 2);
                i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.checked = $event; });
                i0.ɵɵtext(6, "Checked");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-checkbox", 2);
                i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_7_listener($event) { return ctx.indeterminate = $event; });
                i0.ɵɵtext(8, "Indeterminate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "section", 1);
                i0.ɵɵelementStart(10, "label", 3);
                i0.ɵɵtext(11, "Align:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-radio-group", 4);
                i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_radio_group_ngModelChange_12_listener($event) { return ctx.labelPosition = $event; });
                i0.ɵɵelementStart(13, "mat-radio-button", 5);
                i0.ɵɵtext(14, "After");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "mat-radio-button", 6);
                i0.ɵɵtext(16, "Before");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "section", 1);
                i0.ɵɵelementStart(18, "mat-checkbox", 2);
                i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
                i0.ɵɵtext(19, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-card", 7);
                i0.ɵɵelementStart(21, "mat-card-content");
                i0.ɵɵelementStart(22, "h2", 0);
                i0.ɵɵtext(23, "Result");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "section", 1);
                i0.ɵɵelementStart(25, "mat-checkbox", 8);
                i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.checked = $event; });
                i0.ɵɵlistener("indeterminateChange", function CheckboxConfigurableExample_Template_mat_checkbox_indeterminateChange_25_listener($event) { return ctx.indeterminate = $event; });
                i0.ɵɵtext(26, " I'm a checkbox ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngModel", ctx.checked);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.indeterminate);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngModel", ctx.labelPosition);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngModel", ctx.disabled);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngModel", ctx.checked)("indeterminate", ctx.indeterminate)("labelPosition", ctx.labelPosition)("disabled", ctx.disabled);
            } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatCheckbox, i3.NgControlStatus, i3.NgModel, i4.MatRadioGroup, i4.MatRadioButton], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
        return CheckboxConfigurableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxConfigurableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'checkbox-configurable-example',
                    templateUrl: 'checkbox-configurable-example.html',
                    styleUrls: ['checkbox-configurable-example.css'],
                }]
        }], null, null); })();

    /**
     * @title Basic checkboxes
     */
    var CheckboxOverviewExample = /** @class */ (function () {
        function CheckboxOverviewExample() {
        }
        CheckboxOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'checkbox-overview-example',
                        templateUrl: 'checkbox-overview-example.html',
                        styleUrls: ['checkbox-overview-example.css'],
                    },] },
        ];
        CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) { return new (t || CheckboxOverviewExample)(); };
        CheckboxOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 2, vars: 0, template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-checkbox");
                i0.ɵɵtext(1, "Check me!");
                i0.ɵɵelementEnd();
            } }, directives: [i2.MatCheckbox], styles: [""] });
        return CheckboxOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'checkbox-overview-example',
                    templateUrl: 'checkbox-overview-example.html',
                    styleUrls: ['checkbox-overview-example.css'],
                }]
        }], null, null); })();

    var EXAMPLES = [
        CheckboxConfigurableExample,
        CheckboxOverviewExample,
    ];
    var CheckboxExamplesModule = /** @class */ (function () {
        function CheckboxExamplesModule() {
        }
        CheckboxExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.MatCardModule,
                            i2.MatCheckboxModule,
                            i4.MatRadioModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        CheckboxExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CheckboxExamplesModule });
        CheckboxExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); }, imports: [[
                    i1.MatCardModule,
                    i2.MatCheckboxModule,
                    i4.MatRadioModule,
                    i3.FormsModule,
                ]] });
        return CheckboxExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
            CheckboxOverviewExample], imports: [i1.MatCardModule,
            i2.MatCheckboxModule,
            i4.MatRadioModule,
            i3.FormsModule], exports: [CheckboxConfigurableExample,
            CheckboxOverviewExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatCardModule,
                        i2.MatCheckboxModule,
                        i4.MatRadioModule,
                        i3.FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.CheckboxConfigurableExample = CheckboxConfigurableExample;
    exports.CheckboxExamplesModule = CheckboxExamplesModule;
    exports.CheckboxOverviewExample = CheckboxOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-checkbox.umd.js.map
