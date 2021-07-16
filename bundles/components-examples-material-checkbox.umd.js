(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/radio')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/checkbox', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/checkbox', '@angular/material/radio'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.checkbox = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.checkbox, global.ng.material.radio));
}(this, (function (exports, i2, i0, i1$2, i1, i1$1, i4) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

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
    CheckboxConfigurableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card");
                i0__namespace.ɵɵelementStart(1, "mat-card-content");
                i0__namespace.ɵɵelementStart(2, "h2", 0);
                i0__namespace.ɵɵtext(3, "Checkbox configuration");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "section", 1);
                i0__namespace.ɵɵelementStart(5, "mat-checkbox", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.checked = $event; });
                i0__namespace.ɵɵtext(6, "Checked");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-checkbox", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_7_listener($event) { return ctx.indeterminate = $event; });
                i0__namespace.ɵɵtext(8, "Indeterminate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "section", 1);
                i0__namespace.ɵɵelementStart(10, "label", 3);
                i0__namespace.ɵɵtext(11, "Align:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-radio-group", 4);
                i0__namespace.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_radio_group_ngModelChange_12_listener($event) { return ctx.labelPosition = $event; });
                i0__namespace.ɵɵelementStart(13, "mat-radio-button", 5);
                i0__namespace.ɵɵtext(14, "After");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "mat-radio-button", 6);
                i0__namespace.ɵɵtext(16, "Before");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "section", 1);
                i0__namespace.ɵɵelementStart(18, "mat-checkbox", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
                i0__namespace.ɵɵtext(19, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "mat-card", 7);
                i0__namespace.ɵɵelementStart(21, "mat-card-content");
                i0__namespace.ɵɵelementStart(22, "h2", 0);
                i0__namespace.ɵɵtext(23, "Result");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "section", 1);
                i0__namespace.ɵɵelementStart(25, "mat-checkbox", 8);
                i0__namespace.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.checked = $event; })("indeterminateChange", function CheckboxConfigurableExample_Template_mat_checkbox_indeterminateChange_25_listener($event) { return ctx.indeterminate = $event; });
                i0__namespace.ɵɵtext(26, " I'm a checkbox ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngModel", ctx.checked);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngModel", ctx.indeterminate);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngModel", ctx.labelPosition);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("ngModel", ctx.disabled);
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("ngModel", ctx.checked)("indeterminate", ctx.indeterminate)("labelPosition", ctx.labelPosition)("disabled", ctx.disabled);
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardContent, i1__namespace$1.MatCheckbox, i1__namespace$2.NgControlStatus, i1__namespace$2.NgModel, i4__namespace.MatRadioGroup, i4__namespace.MatRadioButton], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CheckboxConfigurableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'checkbox-configurable-example',
                        templateUrl: 'checkbox-configurable-example.html',
                        styleUrls: ['checkbox-configurable-example.css'],
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
    CheckboxHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CheckboxHarnessExample, selectors: [["checkbox-harness-example"]], decls: 4, vars: 2, consts: [["required", "", "name", "first-name", "value", "first-value", "aria-label", "First checkbox", 3, "checked"], ["indeterminate", "true", "aria-label", "Second checkbox", 3, "disabled"]], template: function CheckboxHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-checkbox", 0);
                i0__namespace.ɵɵtext(1, " First\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-checkbox", 1);
                i0__namespace.ɵɵtext(3, " Second\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("checked", true);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("disabled", ctx.disabled);
            }
        }, directives: [i1__namespace$1.MatCheckbox], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CheckboxHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'checkbox-harness-example',
                        templateUrl: 'checkbox-harness-example.html',
                    }]
            }], null, null);
    })();

    function CheckboxOverviewExample_li_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵelementStart(1, "mat-checkbox", 6);
            i0__namespace.ɵɵlistener("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var subtask_r1 = restoredCtx.$implicit; return subtask_r1.completed = $event; })("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.updateAllComplete(); });
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var subtask_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", subtask_r1.completed)("color", subtask_r1.color);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", subtask_r1.name, " ");
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
    CheckboxOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-section"], [1, "example-margin"], [1, "example-margin", 3, "disabled"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "color", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]], template: function CheckboxOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section", 0);
                i0__namespace.ɵɵelementStart(1, "mat-checkbox", 1);
                i0__namespace.ɵɵtext(2, "Check me!");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-checkbox", 2);
                i0__namespace.ɵɵtext(4, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "section", 0);
                i0__namespace.ɵɵelementStart(6, "span", 3);
                i0__namespace.ɵɵelementStart(7, "mat-checkbox", 4);
                i0__namespace.ɵɵlistener("change", function CheckboxOverviewExample_Template_mat_checkbox_change_7_listener($event) { return ctx.setAll($event.checked); });
                i0__namespace.ɵɵtext(8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "span", 3);
                i0__namespace.ɵɵelementStart(10, "ul");
                i0__namespace.ɵɵtemplate(11, CheckboxOverviewExample_li_11_Template, 3, 3, "li", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("disabled", true);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.task.name, " ");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.task.subtasks);
            }
        }, directives: [i1__namespace$1.MatCheckbox, i2__namespace.NgForOf, i1__namespace$2.NgControlStatus, i1__namespace$2.NgModel], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CheckboxOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'checkbox-overview-example',
                        templateUrl: 'checkbox-overview-example.html',
                        styleUrls: ['checkbox-overview-example.css'],
                    }]
            }], null, null);
    })();

    /** @title Checkboxes with reactive forms */
    var CheckboxReactiveFormsExample = /** @class */ (function () {
        function CheckboxReactiveFormsExample(fb) {
            this.toppings = fb.group({
                pepperoni: false,
                extracheese: false,
                mushroom: false
            });
        }
        return CheckboxReactiveFormsExample;
    }());
    CheckboxReactiveFormsExample.ɵfac = function CheckboxReactiveFormsExample_Factory(t) { return new (t || CheckboxReactiveFormsExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.FormBuilder)); };
    CheckboxReactiveFormsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CheckboxReactiveFormsExample, selectors: [["checkbox-reactive-forms-example"]], decls: 17, vars: 5, consts: [[1, "example-section", 3, "formGroup"], ["formControlName", "pepperoni"], ["formControlName", "extracheese"], ["formControlName", "mushroom"]], template: function CheckboxReactiveFormsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section", 0);
                i0__namespace.ɵɵelementStart(1, "h4");
                i0__namespace.ɵɵtext(2, "Select your toppings:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "p");
                i0__namespace.ɵɵelementStart(4, "mat-checkbox", 1);
                i0__namespace.ɵɵtext(5, "Pepperoni");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "p");
                i0__namespace.ɵɵelementStart(7, "mat-checkbox", 2);
                i0__namespace.ɵɵtext(8, "Extra Cheese");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "p");
                i0__namespace.ɵɵelementStart(10, "mat-checkbox", 3);
                i0__namespace.ɵɵtext(11, "Mushroom");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "section", 0);
                i0__namespace.ɵɵelementStart(13, "h4");
                i0__namespace.ɵɵtext(14, "You chose:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtext(15);
                i0__namespace.ɵɵpipe(16, "json");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formGroup", ctx.toppings);
                i0__namespace.ɵɵadvance(12);
                i0__namespace.ɵɵproperty("formGroup", ctx.toppings);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(16, 3, ctx.toppings.value), "\n");
            }
        }, directives: [i1__namespace$2.NgControlStatusGroup, i1__namespace$2.FormGroupDirective, i1__namespace$1.MatCheckbox, i1__namespace$2.NgControlStatus, i1__namespace$2.FormControlName], pipes: [i2__namespace.JsonPipe], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CheckboxReactiveFormsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'checkbox-reactive-forms-example',
                        templateUrl: 'checkbox-reactive-forms-example.html',
                        styleUrls: ['checkbox-reactive-forms-example.css']
                    }]
            }], function () { return [{ type: i1__namespace$2.FormBuilder }]; }, null);
    })();

    var EXAMPLES = [
        CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample,
    ];
    var CheckboxExamplesModule = /** @class */ (function () {
        function CheckboxExamplesModule() {
        }
        return CheckboxExamplesModule;
    }());
    CheckboxExamplesModule.ɵfac = function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); };
    CheckboxExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CheckboxExamplesModule });
    CheckboxExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule,
                i1.MatCardModule,
                i1$1.MatCheckboxModule,
                i4.MatRadioModule,
                i1$2.FormsModule,
                i1$2.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CheckboxExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i1.MatCardModule,
                            i1$1.MatCheckboxModule,
                            i4.MatRadioModule,
                            i1$2.FormsModule,
                            i1$2.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CheckboxExamplesModule, { declarations: [CheckboxConfigurableExample,
                CheckboxOverviewExample,
                CheckboxHarnessExample,
                CheckboxReactiveFormsExample], imports: [i2.CommonModule,
                i1.MatCardModule,
                i1$1.MatCheckboxModule,
                i4.MatRadioModule,
                i1$2.FormsModule,
                i1$2.ReactiveFormsModule], exports: [CheckboxConfigurableExample,
                CheckboxOverviewExample,
                CheckboxHarnessExample,
                CheckboxReactiveFormsExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CheckboxConfigurableExample = CheckboxConfigurableExample;
    exports.CheckboxExamplesModule = CheckboxExamplesModule;
    exports.CheckboxHarnessExample = CheckboxHarnessExample;
    exports.CheckboxOverviewExample = CheckboxOverviewExample;
    exports.CheckboxReactiveFormsExample = CheckboxReactiveFormsExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-checkbox.umd.js.map
