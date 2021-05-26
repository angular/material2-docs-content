import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1$2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i4 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

/**
 * @title Configurable checkbox
 */
class CheckboxConfigurableExample {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
}
CheckboxConfigurableExample.ɵfac = function CheckboxConfigurableExample_Factory(t) { return new (t || CheckboxConfigurableExample)(); };
CheckboxConfigurableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.checked = $event; })("indeterminateChange", function CheckboxConfigurableExample_Template_mat_checkbox_indeterminateChange_25_listener($event) { return ctx.indeterminate = $event; });
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
    } }, directives: [i1.MatCard, i1.MatCardContent, i1$1.MatCheckbox, i1$2.NgControlStatus, i1$2.NgModel, i4.MatRadioGroup, i4.MatRadioButton], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-configurable-example',
                templateUrl: 'checkbox-configurable-example.html',
                styleUrls: ['checkbox-configurable-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatCheckboxHarness
 */
class CheckboxHarnessExample {
    constructor() {
        this.disabled = true;
    }
}
CheckboxHarnessExample.ɵfac = function CheckboxHarnessExample_Factory(t) { return new (t || CheckboxHarnessExample)(); };
CheckboxHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxHarnessExample, selectors: [["checkbox-harness-example"]], decls: 4, vars: 2, consts: [["required", "", "name", "first-name", "value", "first-value", "aria-label", "First checkbox", 3, "checked"], ["indeterminate", "true", "aria-label", "Second checkbox", 3, "disabled"]], template: function CheckboxHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-checkbox", 0);
        i0.ɵɵtext(1, " First\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-checkbox", 1);
        i0.ɵɵtext(3, " Second\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("checked", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled);
    } }, directives: [i1$1.MatCheckbox], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxHarnessExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-harness-example',
                templateUrl: 'checkbox-harness-example.html',
            }]
    }], null, null); })();

function CheckboxOverviewExample_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "mat-checkbox", 6);
    i0.ɵɵlistener("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener($event) { const subtask_r1 = ctx.$implicit; return subtask_r1.completed = $event; })("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.updateAllComplete(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subtask_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", subtask_r1.completed)("color", subtask_r1.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", subtask_r1.name, " ");
} }
/**
 * @title Basic checkboxes
 */
class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' }
            ]
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => t.completed = completed);
    }
}
CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) { return new (t || CheckboxOverviewExample)(); };
CheckboxOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-section"], [1, "example-margin"], [1, "example-margin", 3, "disabled"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "color", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]], template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "mat-checkbox", 1);
        i0.ɵɵtext(2, "Check me!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-checkbox", 2);
        i0.ɵɵtext(4, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "section", 0);
        i0.ɵɵelementStart(6, "span", 3);
        i0.ɵɵelementStart(7, "mat-checkbox", 4);
        i0.ɵɵlistener("change", function CheckboxOverviewExample_Template_mat_checkbox_change_7_listener($event) { return ctx.setAll($event.checked); });
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "span", 3);
        i0.ɵɵelementStart(10, "ul");
        i0.ɵɵtemplate(11, CheckboxOverviewExample_li_11_Template, 3, 3, "li", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", true);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.task.name, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.task.subtasks);
    } }, directives: [i1$1.MatCheckbox, i2.NgForOf, i1$2.NgControlStatus, i1$2.NgModel], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxOverviewExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-overview-example',
                templateUrl: 'checkbox-overview-example.html',
                styleUrls: ['checkbox-overview-example.css'],
            }]
    }], null, null); })();

/** @title Checkboxes with reactive forms */
class CheckboxReactiveFormsExample {
    constructor(fb) {
        this.toppings = fb.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false
        });
    }
}
CheckboxReactiveFormsExample.ɵfac = function CheckboxReactiveFormsExample_Factory(t) { return new (t || CheckboxReactiveFormsExample)(i0.ɵɵdirectiveInject(i1$2.FormBuilder)); };
CheckboxReactiveFormsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxReactiveFormsExample, selectors: [["checkbox-reactive-forms-example"]], decls: 17, vars: 5, consts: [[1, "example-section", 3, "formGroup"], ["formControlName", "pepperoni"], ["formControlName", "extracheese"], ["formControlName", "mushroom"]], template: function CheckboxReactiveFormsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "Select your toppings:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵelementStart(4, "mat-checkbox", 1);
        i0.ɵɵtext(5, "Pepperoni");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵelementStart(7, "mat-checkbox", 2);
        i0.ɵɵtext(8, "Extra Cheese");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵelementStart(10, "mat-checkbox", 3);
        i0.ɵɵtext(11, "Mushroom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "section", 0);
        i0.ɵɵelementStart(13, "h4");
        i0.ɵɵtext(14, "You chose:");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "json");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.toppings);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("formGroup", ctx.toppings);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 3, ctx.toppings.value), "\n");
    } }, directives: [i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i1$1.MatCheckbox, i1$2.NgControlStatus, i1$2.FormControlName], pipes: [i2.JsonPipe], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxReactiveFormsExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-reactive-forms-example',
                templateUrl: 'checkbox-reactive-forms-example.html',
                styleUrls: ['checkbox-reactive-forms-example.css']
            }]
    }], function () { return [{ type: i1$2.FormBuilder }]; }, null); })();

const EXAMPLES = [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    CheckboxHarnessExample,
    CheckboxReactiveFormsExample,
];
class CheckboxExamplesModule {
}
CheckboxExamplesModule.ɵfac = function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); };
CheckboxExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CheckboxExamplesModule });
CheckboxExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample], imports: [CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxConfigurableExample, CheckboxExamplesModule, CheckboxHarnessExample, CheckboxOverviewExample, CheckboxReactiveFormsExample };
//# sourceMappingURL=checkbox.js.map
