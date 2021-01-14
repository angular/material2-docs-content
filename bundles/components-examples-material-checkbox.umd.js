(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/radio')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/checkbox', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/checkbox', '@angular/material/radio'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.checkbox = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.checkbox, global.ng.material.radio));
}(this, (function (exports, i2, i0, i3, i1, i1$1, i4) { 'use strict';

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
        return CheckboxConfigurableExample;
    }());
    CheckboxConfigurableExample.ɵfac = function CheckboxConfigurableExample_Factory(t) { return new (t || CheckboxConfigurableExample)(); };
    CheckboxConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
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
            }
        }, directives: [i1.MatCard, i1.MatCardContent, i1$1.MatCheckbox, i3.NgControlStatus, i3.NgModel, i4.MatRadioGroup, i4.MatRadioButton], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxConfigurableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'checkbox-configurable-example',
                        templateUrl: 'checkbox-configurable-example.html',
                        styleUrls: ['checkbox-configurable-example.css'],
                    }]
            }], null, null);
    })();

    function CheckboxOverviewExample_li_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵelementStart(1, "mat-checkbox", 6);
            i0.ɵɵlistener("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener($event) { var subtask_r1 = ctx.$implicit; return subtask_r1.completed = $event; })("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.updateAllComplete(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var subtask_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", subtask_r1.completed)("color", subtask_r1.color);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", subtask_r1.name, " ");
        }
    }
    /**
     * @title Basic checkboxes
     */
    var CheckboxOverviewExample = /** @class */ (function () {
        function CheckboxOverviewExample() {
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
        CheckboxOverviewExample.prototype.updateAllComplete = function () {
            this.allComplete = this.task.subtasks != null && this.task.subtasks.every(function (t) { return t.completed; });
        };
        CheckboxOverviewExample.prototype.someComplete = function () {
            if (this.task.subtasks == null) {
                return false;
            }
            return this.task.subtasks.filter(function (t) { return t.completed; }).length > 0 && !this.allComplete;
        };
        CheckboxOverviewExample.prototype.setAll = function (completed) {
            this.allComplete = completed;
            if (this.task.subtasks == null) {
                return;
            }
            this.task.subtasks.forEach(function (t) { return t.completed = completed; });
        };
        return CheckboxOverviewExample;
    }());
    CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) { return new (t || CheckboxOverviewExample)(); };
    CheckboxOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-section"], [1, "example-margin"], [1, "example-margin", 3, "disabled"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "color", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]], template: function CheckboxOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("disabled", true);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.task.name, " ");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.task.subtasks);
            }
        }, directives: [i1$1.MatCheckbox, i2.NgForOf, i3.NgControlStatus, i3.NgModel], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'checkbox-overview-example',
                        templateUrl: 'checkbox-overview-example.html',
                        styleUrls: ['checkbox-overview-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatCheckboxHarness
     */
    var CheckboxHarnessExample = /** @class */ (function () {
        function CheckboxHarnessExample() {
            this.disabled = true;
        }
        return CheckboxHarnessExample;
    }());
    CheckboxHarnessExample.ɵfac = function CheckboxHarnessExample_Factory(t) { return new (t || CheckboxHarnessExample)(); };
    CheckboxHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxHarnessExample, selectors: [["checkbox-harness-example"]], decls: 4, vars: 2, consts: [["required", "", "name", "first-name", "value", "first-value", "aria-label", "First checkbox", 3, "checked"], ["indeterminate", "true", "aria-label", "Second checkbox", 3, "disabled"]], template: function CheckboxHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-checkbox", 0);
                i0.ɵɵtext(1, " First\n");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-checkbox", 1);
                i0.ɵɵtext(3, " Second\n");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("checked", true);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("disabled", ctx.disabled);
            }
        }, directives: [i1$1.MatCheckbox], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'checkbox-harness-example',
                        templateUrl: 'checkbox-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
    ];
    var CheckboxExamplesModule = /** @class */ (function () {
        function CheckboxExamplesModule() {
        }
        return CheckboxExamplesModule;
    }());
    CheckboxExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CheckboxExamplesModule });
    CheckboxExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); }, imports: [[
                i2.CommonModule,
                i1.MatCardModule,
                i1$1.MatCheckboxModule,
                i4.MatRadioModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
                CheckboxOverviewExample,
                CheckboxHarnessExample], imports: [i2.CommonModule,
                i1.MatCardModule,
                i1$1.MatCheckboxModule,
                i4.MatRadioModule,
                i3.FormsModule], exports: [CheckboxConfigurableExample,
                CheckboxOverviewExample,
                CheckboxHarnessExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i1.MatCardModule,
                            i1$1.MatCheckboxModule,
                            i4.MatRadioModule,
                            i3.FormsModule,
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

    exports.CheckboxConfigurableExample = CheckboxConfigurableExample;
    exports.CheckboxExamplesModule = CheckboxExamplesModule;
    exports.CheckboxHarnessExample = CheckboxHarnessExample;
    exports.CheckboxOverviewExample = CheckboxOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-checkbox.umd.js.map
