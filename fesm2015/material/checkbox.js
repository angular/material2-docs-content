import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';

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
CheckboxConfigurableExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
        ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.checked = $event; })("indeterminateChange", function CheckboxConfigurableExample_Template_mat_checkbox_indeterminateChange_25_listener($event) { return ctx.indeterminate = $event; });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CheckboxConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-configurable-example',
                templateUrl: 'checkbox-configurable-example.html',
                styleUrls: ['checkbox-configurable-example.css'],
            }]
    }], null, null); })();

function CheckboxOverviewExample_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li");
    ɵɵelementStart(1, "mat-checkbox", 6);
    ɵɵlistener("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener($event) { const subtask_r1 = ctx.$implicit; return subtask_r1.completed = $event; })("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.updateAllComplete(); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const subtask_r1 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngModel", subtask_r1.completed)("color", subtask_r1.color);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", subtask_r1.name, " ");
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
CheckboxOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-section"], [1, "example-margin"], [1, "example-margin", 3, "disabled"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "color", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]], template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵelementStart(1, "mat-checkbox", 1);
        ɵɵtext(2, "Check me!");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-checkbox", 2);
        ɵɵtext(4, "Disabled");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "section", 0);
        ɵɵelementStart(6, "span", 3);
        ɵɵelementStart(7, "mat-checkbox", 4);
        ɵɵlistener("change", function CheckboxOverviewExample_Template_mat_checkbox_change_7_listener($event) { return ctx.setAll($event.checked); });
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "span", 3);
        ɵɵelementStart(10, "ul");
        ɵɵtemplate(11, CheckboxOverviewExample_li_11_Template, 3, 3, "li", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("disabled", true);
        ɵɵadvance(4);
        ɵɵproperty("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.task.name, " ");
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.task.subtasks);
    } }, directives: [MatCheckbox, NgForOf, NgControlStatus, NgModel], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CheckboxOverviewExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-overview-example',
                templateUrl: 'checkbox-overview-example.html',
                styleUrls: ['checkbox-overview-example.css'],
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
CheckboxHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CheckboxHarnessExample, selectors: [["checkbox-harness-example"]], decls: 4, vars: 2, consts: [["required", "", "name", "first-name", "value", "first-value", "aria-label", "First checkbox", 3, "checked"], ["indeterminate", "true", "aria-label", "Second checkbox", 3, "disabled"]], template: function CheckboxHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-checkbox", 0);
        ɵɵtext(1, " First\n");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-checkbox", 1);
        ɵɵtext(3, " Second\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("checked", true);
        ɵɵadvance(2);
        ɵɵproperty("disabled", ctx.disabled);
    } }, directives: [MatCheckbox], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CheckboxHarnessExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-harness-example',
                templateUrl: 'checkbox-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    CheckboxHarnessExample,
];
class CheckboxExamplesModule {
}
CheckboxExamplesModule.ɵfac = function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); };
CheckboxExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CheckboxExamplesModule });
CheckboxExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CheckboxExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample], imports: [CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxConfigurableExample, CheckboxExamplesModule, CheckboxHarnessExample, CheckboxOverviewExample };
//# sourceMappingURL=checkbox.js.map
