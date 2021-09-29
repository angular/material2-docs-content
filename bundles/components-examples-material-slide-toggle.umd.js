(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/radio'), require('@angular/material/slide-toggle')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/slide-toggle', ['exports', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/radio', '@angular/material/slide-toggle'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.slideToggle = {}), global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.radio, global.ng.material.slideToggle));
}(this, (function (exports, i0, i1$1, i3, i1, i4, i2, i2$1) { 'use strict';

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

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);

    /**
     * @title Configurable slide-toggle
     */
    var SlideToggleConfigurableExample = /** @class */ (function () {
        function SlideToggleConfigurableExample() {
            this.color = 'accent';
            this.checked = false;
            this.disabled = false;
        }
        return SlideToggleConfigurableExample;
    }());
    SlideToggleConfigurableExample.ɵfac = function SlideToggleConfigurableExample_Factory(t) { return new (t || SlideToggleConfigurableExample)(); };
    SlideToggleConfigurableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SlideToggleConfigurableExample, selectors: [["slide-toggle-configurable-example"]], decls: 27, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "result"], [1, "example-margin", 3, "color", "checked", "disabled"]], template: function SlideToggleConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card");
                i0__namespace.ɵɵelementStart(1, "mat-card-content");
                i0__namespace.ɵɵelementStart(2, "h2", 0);
                i0__namespace.ɵɵtext(3, "Slider configuration");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "section", 1);
                i0__namespace.ɵɵelementStart(5, "label", 2);
                i0__namespace.ɵɵtext(6, "Color:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-radio-group", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
                i0__namespace.ɵɵelementStart(8, "mat-radio-button", 4);
                i0__namespace.ɵɵtext(9, " Primary ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-radio-button", 5);
                i0__namespace.ɵɵtext(11, " Accent ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-radio-button", 6);
                i0__namespace.ɵɵtext(13, " Warn ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "section", 1);
                i0__namespace.ɵɵelementStart(15, "mat-checkbox", 7);
                i0__namespace.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_15_listener($event) { return ctx.checked = $event; });
                i0__namespace.ɵɵtext(16, "Checked");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "section", 1);
                i0__namespace.ɵɵelementStart(18, "mat-checkbox", 7);
                i0__namespace.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
                i0__namespace.ɵɵtext(19, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "mat-card", 8);
                i0__namespace.ɵɵelementStart(21, "mat-card-content");
                i0__namespace.ɵɵelementStart(22, "h2", 0);
                i0__namespace.ɵɵtext(23, "Result");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "section", 1);
                i0__namespace.ɵɵelementStart(25, "mat-slide-toggle", 9);
                i0__namespace.ɵɵtext(26, " Slide me! ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("ngModel", ctx.color);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵproperty("ngModel", ctx.checked);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngModel", ctx.disabled);
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardContent, i2__namespace.MatRadioGroup, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel, i2__namespace.MatRadioButton, i4__namespace.MatCheckbox, i2__namespace$1.MatSlideToggle], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SlideToggleConfigurableExample, [{
                type: i0.Component,
                args: [{ selector: 'slide-toggle-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n          class=\"example-margin\"\n          [color]=\"color\"\n          [checked]=\"checked\"\n          [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Slide-toggle with forms
     */
    var SlideToggleFormsExample = /** @class */ (function () {
        function SlideToggleFormsExample(formBuilder) {
            this.isChecked = true;
            this.formGroup = formBuilder.group({
                enableWifi: '',
                acceptTerms: ['', i1$1.Validators.requiredTrue]
            });
        }
        SlideToggleFormsExample.prototype.onFormSubmit = function () {
            alert(JSON.stringify(this.formGroup.value, null, 2));
        };
        return SlideToggleFormsExample;
    }());
    SlideToggleFormsExample.ɵfac = function SlideToggleFormsExample_Factory(t) { return new (t || SlideToggleFormsExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.FormBuilder)); };
    SlideToggleFormsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SlideToggleFormsExample, selectors: [["slide-toggle-forms-example"]], decls: 25, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["ngNativeValidate", "", 1, "example-form", 3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "enableWifi"], ["ngModel", "", "name", "acceptTerms", "required", ""], ["mat-raised-button", "", "type", "submit"], ["ngNativeValidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["formControlName", "enableWifi"], ["formControlName", "acceptTerms"]], template: function SlideToggleFormsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, "Slide Toggle using a simple NgModel.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-slide-toggle", 0);
                i0__namespace.ɵɵlistener("ngModelChange", function SlideToggleFormsExample_Template_mat_slide_toggle_ngModelChange_2_listener($event) { return ctx.isChecked = $event; });
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "p");
                i0__namespace.ɵɵtext(5, "Slide Toggle inside of a Template-driven form");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "form", 1, 2);
                i0__namespace.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_6_listener() { return ctx.onFormSubmit(); });
                i0__namespace.ɵɵelementStart(8, "mat-slide-toggle", 3);
                i0__namespace.ɵɵtext(9, "Enable Wifi");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-slide-toggle", 4);
                i0__namespace.ɵɵtext(11, "Accept Terms of Service");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 5);
                i0__namespace.ɵɵtext(13, "Save Settings");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "p");
                i0__namespace.ɵɵtext(15, "Slide Toggle inside of a Reactive form");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "form", 6);
                i0__namespace.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_16_listener() { return ctx.onFormSubmit(); });
                i0__namespace.ɵɵelementStart(17, "mat-slide-toggle", 7);
                i0__namespace.ɵɵtext(18, "Enable Wifi");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "mat-slide-toggle", 8);
                i0__namespace.ɵɵtext(20, "Accept Terms of Service");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "p");
                i0__namespace.ɵɵtext(22);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "button", 5);
                i0__namespace.ɵɵtext(24, "Save Settings");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngModel", ctx.isChecked);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1("Slide Toggle Checked: ", ctx.isChecked, "");
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("formGroup", ctx.formGroup);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵtextInterpolate1("Form Group Status: ", ctx.formGroup.status, "");
            }
        }, directives: [i2__namespace$1.MatSlideToggle, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel, i1__namespace$1.NgControlStatusGroup, i1__namespace$1.NgForm, i2__namespace$1.MatSlideToggleRequiredValidator, i1__namespace$1.RequiredValidator, i3__namespace.MatButton, i1__namespace$1.FormGroupDirective, i1__namespace$1.FormControlName], styles: [".example-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  display: block;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SlideToggleFormsExample, [{
                type: i0.Component,
                args: [{ selector: 'slide-toggle-forms-example', template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n", styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"] }]
            }], function () { return [{ type: i1__namespace$1.FormBuilder }]; }, null);
    })();

    /**
     * @title Basic slide-toggles
     */
    var SlideToggleOverviewExample = /** @class */ (function () {
        function SlideToggleOverviewExample() {
        }
        return SlideToggleOverviewExample;
    }());
    SlideToggleOverviewExample.ɵfac = function SlideToggleOverviewExample_Factory(t) { return new (t || SlideToggleOverviewExample)(); };
    SlideToggleOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SlideToggleOverviewExample, selectors: [["slide-toggle-overview-example"]], decls: 2, vars: 0, template: function SlideToggleOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-slide-toggle");
                i0__namespace.ɵɵtext(1, "Slide me!");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i2__namespace$1.MatSlideToggle], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SlideToggleOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'slide-toggle-overview-example', template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\n" }]
            }], null, null);
    })();

    /**
     * @title Testing with MatSlideToggleHarness
     */
    var SlideToggleHarnessExample = /** @class */ (function () {
        function SlideToggleHarnessExample() {
            this.disabled = true;
            this.ctrl = new i1$1.FormControl(true);
        }
        return SlideToggleHarnessExample;
    }());
    SlideToggleHarnessExample.ɵfac = function SlideToggleHarnessExample_Factory(t) { return new (t || SlideToggleHarnessExample)(); };
    SlideToggleHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SlideToggleHarnessExample, selectors: [["slide-toggle-harness-example"]], decls: 4, vars: 2, consts: [["name", "first-name", 3, "formControl"], [3, "disabled"]], template: function SlideToggleHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-slide-toggle", 0);
                i0__namespace.ɵɵtext(1, " First\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-slide-toggle", 1);
                i0__namespace.ɵɵtext(3, " Second\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formControl", ctx.ctrl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("disabled", ctx.disabled);
            }
        }, directives: [i2__namespace$1.MatSlideToggle, i1__namespace$1.NgControlStatus, i1__namespace$1.FormControlDirective], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SlideToggleHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'slide-toggle-harness-example', template: "<mat-slide-toggle\n    [formControl]=\"ctrl\"\n    name=\"first-name\">\n  First\n</mat-slide-toggle>\n<mat-slide-toggle [disabled]=\"disabled\">\n  Second\n</mat-slide-toggle>\n" }]
            }], null, null);
    })();

    var EXAMPLES = [
        SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample,
    ];
    var SlideToggleExamplesModule = /** @class */ (function () {
        function SlideToggleExamplesModule() {
        }
        return SlideToggleExamplesModule;
    }());
    SlideToggleExamplesModule.ɵfac = function SlideToggleExamplesModule_Factory(t) { return new (t || SlideToggleExamplesModule)(); };
    SlideToggleExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: SlideToggleExamplesModule });
    SlideToggleExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.FormsModule,
                i3.MatButtonModule,
                i1.MatCardModule,
                i4.MatCheckboxModule,
                i2.MatRadioModule,
                i2$1.MatSlideToggleModule,
                i1$1.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SlideToggleExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.FormsModule,
                            i3.MatButtonModule,
                            i1.MatCardModule,
                            i4.MatCheckboxModule,
                            i2.MatRadioModule,
                            i2$1.MatSlideToggleModule,
                            i1$1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(SlideToggleExamplesModule, { declarations: [SlideToggleConfigurableExample,
                SlideToggleFormsExample,
                SlideToggleHarnessExample,
                SlideToggleOverviewExample], imports: [i1$1.FormsModule,
                i3.MatButtonModule,
                i1.MatCardModule,
                i4.MatCheckboxModule,
                i2.MatRadioModule,
                i2$1.MatSlideToggleModule,
                i1$1.ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
                SlideToggleFormsExample,
                SlideToggleHarnessExample,
                SlideToggleOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SlideToggleConfigurableExample = SlideToggleConfigurableExample;
    exports.SlideToggleExamplesModule = SlideToggleExamplesModule;
    exports.SlideToggleFormsExample = SlideToggleFormsExample;
    exports.SlideToggleHarnessExample = SlideToggleHarnessExample;
    exports.SlideToggleOverviewExample = SlideToggleOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-slide-toggle.umd.js.map
