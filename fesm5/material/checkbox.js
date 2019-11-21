import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';

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
        { type: Component, args: [{
                    selector: 'checkbox-configurable-example',
                    templateUrl: 'checkbox-configurable-example.html',
                    styleUrls: ['checkbox-configurable-example.css'],
                },] },
    ];
    CheckboxConfigurableExample.ɵfac = function CheckboxConfigurableExample_Factory(t) { return new (t || CheckboxConfigurableExample)(); };
    CheckboxConfigurableExample.ɵcmp = ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-card");
            ɵɵelementStart(1, "mat-card-content");
            ɵɵelementStart(2, "h2", 0);
            ɵɵtext(3, "Checkbox configuration");
            ɵɵelementEnd();
            ɵɵelementStart(4, "section", 1);
            ɵɵelementStart(5, "mat-checkbox", 2);
            ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.checked = $event; });
            ɵɵtext(6, "Checked");
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-checkbox", 2);
            ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_7_listener($event) { return ctx.indeterminate = $event; });
            ɵɵtext(8, "Indeterminate");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "section", 1);
            ɵɵelementStart(10, "label", 3);
            ɵɵtext(11, "Align:");
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-radio-group", 4);
            ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_radio_group_ngModelChange_12_listener($event) { return ctx.labelPosition = $event; });
            ɵɵelementStart(13, "mat-radio-button", 5);
            ɵɵtext(14, "After");
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-radio-button", 6);
            ɵɵtext(16, "Before");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(17, "section", 1);
            ɵɵelementStart(18, "mat-checkbox", 2);
            ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
            ɵɵtext(19, "Disabled");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-card", 7);
            ɵɵelementStart(21, "mat-card-content");
            ɵɵelementStart(22, "h2", 0);
            ɵɵtext(23, "Result");
            ɵɵelementEnd();
            ɵɵelementStart(24, "section", 1);
            ɵɵelementStart(25, "mat-checkbox", 8);
            ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.checked = $event; });
            ɵɵlistener("indeterminateChange", function CheckboxConfigurableExample_Template_mat_checkbox_indeterminateChange_25_listener($event) { return ctx.indeterminate = $event; });
            ɵɵtext(26, " I'm a checkbox ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(5);
            ɵɵproperty("ngModel", ctx.checked);
            ɵɵadvance(2);
            ɵɵproperty("ngModel", ctx.indeterminate);
            ɵɵadvance(5);
            ɵɵproperty("ngModel", ctx.labelPosition);
            ɵɵadvance(6);
            ɵɵproperty("ngModel", ctx.disabled);
            ɵɵadvance(7);
            ɵɵproperty("ngModel", ctx.checked)("indeterminate", ctx.indeterminate)("labelPosition", ctx.labelPosition)("disabled", ctx.disabled);
        } }, directives: [MatCard, MatCardContent, MatCheckbox, NgControlStatus, NgModel, MatRadioGroup, MatRadioButton], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    return CheckboxConfigurableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxConfigurableExample, [{
        type: Component,
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
        { type: Component, args: [{
                    selector: 'checkbox-overview-example',
                    templateUrl: 'checkbox-overview-example.html',
                    styleUrls: ['checkbox-overview-example.css'],
                },] },
    ];
    CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) { return new (t || CheckboxOverviewExample)(); };
    CheckboxOverviewExample.ɵcmp = ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 2, vars: 0, template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-checkbox");
            ɵɵtext(1, "Check me!");
            ɵɵelementEnd();
        } }, directives: [MatCheckbox], styles: [""] });
    return CheckboxOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxOverviewExample, [{
        type: Component,
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
        { type: NgModule, args: [{
                    imports: [
                        MatCardModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CheckboxExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CheckboxExamplesModule });
    CheckboxExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); }, imports: [[
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                FormsModule,
            ]] });
    return CheckboxExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample], imports: [MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CheckboxConfigurableExample, CheckboxExamplesModule, CheckboxOverviewExample };
//# sourceMappingURL=checkbox.js.map
