(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/text-field'), require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/form-field'), require('rxjs/operators'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/text-field', ['exports', '@angular/cdk/text-field', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/input', '@angular/material/select', '@angular/material/form-field', 'rxjs/operators', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.textField = {}), global.ng.cdk.textField, global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.input, global.ng.material.select, global.ng.material.formField, global.rxjs.operators, global.ng.material.core));
}(this, (function (exports, i1, i4, i0, i5, i2, i2$1, i1$1, operators, i3) { 'use strict';

    function TextFieldAutofillDirectiveExample_mat_hint_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-hint");
            i0.ɵɵtext(1, "Autofilled!");
            i0.ɵɵelementEnd();
        }
    }
    function TextFieldAutofillDirectiveExample_mat_hint_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-hint");
            i0.ɵɵtext(1, "Autofilled!");
            i0.ɵɵelementEnd();
        }
    }
    /** @title Monitoring autofill state with cdkAutofill */
    var TextFieldAutofillDirectiveExample = /** @class */ (function () {
        function TextFieldAutofillDirectiveExample() {
        }
        return TextFieldAutofillDirectiveExample;
    }());
    TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
    TextFieldAutofillDirectiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [[3, "submit"], ["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵlistener("submit", function TextFieldAutofillDirectiveExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
                i0.ɵɵelementStart(1, "mat-form-field");
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "First name");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "input", 1);
                i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_4_listener($event) { return ctx.firstNameAutofilled = $event.isAutofilled; });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, TextFieldAutofillDirectiveExample_mat_hint_5_Template, 2, 0, "mat-hint", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-form-field");
                i0.ɵɵelementStart(7, "mat-label");
                i0.ɵɵtext(8, "Last name");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "input", 1);
                i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_9_listener($event) { return ctx.lastNameAutofilled = $event.isAutofilled; });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, TextFieldAutofillDirectiveExample_mat_hint_10_Template, 2, 0, "mat-hint", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "button", 3);
                i0.ɵɵtext(12, "Submit");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i1.CdkAutofill, i4.NgIf, i5.MatButton, i1$1.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
                type: i0.Component,
                args: [{
                        selector: 'text-field-autofill-directive-example',
                        templateUrl: './text-field-autofill-directive-example.html',
                        styleUrls: ['./text-field-autofill-directive-example.css'],
                    }]
            }], null, null);
    })();

    var _c0 = ["first"];
    var _c1 = ["last"];
    function TextFieldAutofillMonitorExample_mat_hint_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-hint");
            i0.ɵɵtext(1, "Autofilled!");
            i0.ɵɵelementEnd();
        }
    }
    function TextFieldAutofillMonitorExample_mat_hint_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-hint");
            i0.ɵɵtext(1, "Autofilled!");
            i0.ɵɵelementEnd();
        }
    }
    /** @title Monitoring autofill state with AutofillMonitor */
    var TextFieldAutofillMonitorExample = /** @class */ (function () {
        function TextFieldAutofillMonitorExample(_autofill) {
            this._autofill = _autofill;
        }
        TextFieldAutofillMonitorExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._autofill.monitor(this.firstName)
                .subscribe(function (e) { return _this.firstNameAutofilled = e.isAutofilled; });
            this._autofill.monitor(this.lastName)
                .subscribe(function (e) { return _this.lastNameAutofilled = e.isAutofilled; });
        };
        TextFieldAutofillMonitorExample.prototype.ngOnDestroy = function () {
            this._autofill.stopMonitoring(this.firstName);
            this._autofill.stopMonitoring(this.lastName);
        };
        return TextFieldAutofillMonitorExample;
    }());
    TextFieldAutofillMonitorExample.ɵfac = function TextFieldAutofillMonitorExample_Factory(t) { return new (t || TextFieldAutofillMonitorExample)(i0.ɵɵdirectiveInject(i1.AutofillMonitor)); };
    TextFieldAutofillMonitorExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutofillMonitorExample, selectors: [["text-field-autofill-monitor-example"]], viewQuery: function TextFieldAutofillMonitorExample_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 1, i0.ElementRef);
                i0.ɵɵviewQuery(_c1, 1, i0.ElementRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.firstName = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lastName = _t.first);
            }
        }, decls: 15, vars: 2, consts: [[3, "submit"], ["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵlistener("submit", function TextFieldAutofillMonitorExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
                i0.ɵɵelementStart(1, "mat-form-field");
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "First name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 1, 2);
                i0.ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Last name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 1, 4);
                i0.ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "button", 5);
                i0.ɵɵtext(14, "Submit");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i4.NgIf, i5.MatButton, i1$1.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
                type: i0.Component,
                args: [{
                        selector: 'text-field-autofill-monitor-example',
                        templateUrl: './text-field-autofill-monitor-example.html',
                        styleUrls: ['./text-field-autofill-monitor-example.css'],
                    }]
            }], function () { return [{ type: i1.AutofillMonitor }]; }, { firstName: [{
                    type: i0.ViewChild,
                    args: ['first', { read: i0.ElementRef }]
                }], lastName: [{
                    type: i0.ViewChild,
                    args: ['last', { read: i0.ElementRef }]
                }] });
    })();

    var _c0$1 = ["autosize"];
    /** @title Auto-resizing textarea */
    var TextFieldAutosizeTextareaExample = /** @class */ (function () {
        function TextFieldAutosizeTextareaExample(_ngZone) {
            this._ngZone = _ngZone;
        }
        TextFieldAutosizeTextareaExample.prototype.triggerResize = function () {
            var _this = this;
            // Wait for changes to be applied, then trigger textarea resize.
            this._ngZone.onStable.pipe(operators.take(1))
                .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
        };
        return TextFieldAutosizeTextareaExample;
    }());
    TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(i0.ɵɵdirectiveInject(i0.NgZone)); };
    TextFieldAutosizeTextareaExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autosize = _t.first);
            }
        }, decls: 22, vars: 2, consts: [["value", "16px", 3, "selectionChange"], ["fontSize", ""], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Font size");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 0, 1);
                i0.ɵɵlistener("selectionChange", function TextFieldAutosizeTextareaExample_Template_mat_select_selectionChange_3_listener() { return ctx.triggerResize(); });
                i0.ɵɵelementStart(5, "mat-option", 2);
                i0.ɵɵtext(6, "10px");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-option", 3);
                i0.ɵɵtext(8, "12px");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-option", 4);
                i0.ɵɵtext(10, "14px");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-option", 5);
                i0.ɵɵtext(12, "16px");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "mat-option", 6);
                i0.ɵɵtext(14, "18px");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "mat-option", 7);
                i0.ɵɵtext(16, "20px");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "mat-form-field");
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Autosize textarea");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(20, "textarea", 8, 9);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                i0.ɵɵadvance(17);
                i0.ɵɵstyleProp("font-size", _r0.value);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatSelect, i3.MatOption, i2.MatInput, i1.CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
                type: i0.Component,
                args: [{
                        selector: 'text-field-autosize-textarea-example',
                        templateUrl: './text-field-autosize-textarea-example.html',
                        styleUrls: ['./text-field-autosize-textarea-example.css'],
                    }]
            }], function () { return [{ type: i0.NgZone }]; }, { autosize: [{
                    type: i0.ViewChild,
                    args: ['autosize']
                }] });
    })();

    var EXAMPLES = [
        TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample,
    ];
    var CdkTextFieldExamplesModule = /** @class */ (function () {
        function CdkTextFieldExamplesModule() {
        }
        return CdkTextFieldExamplesModule;
    }());
    CdkTextFieldExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTextFieldExamplesModule });
    CdkTextFieldExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTextFieldExamplesModule_Factory(t) { return new (t || CdkTextFieldExamplesModule)(); }, imports: [[
                i4.CommonModule,
                i1.TextFieldModule,
                i5.MatButtonModule,
                i2.MatInputModule,
                i2$1.MatSelectModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTextFieldExamplesModule, { declarations: [TextFieldAutofillDirectiveExample,
                TextFieldAutofillMonitorExample,
                TextFieldAutosizeTextareaExample], imports: [i4.CommonModule,
                i1.TextFieldModule,
                i5.MatButtonModule,
                i2.MatInputModule,
                i2$1.MatSelectModule], exports: [TextFieldAutofillDirectiveExample,
                TextFieldAutofillMonitorExample,
                TextFieldAutosizeTextareaExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTextFieldExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.TextFieldModule,
                            i5.MatButtonModule,
                            i2.MatInputModule,
                            i2$1.MatSelectModule,
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

    exports.CdkTextFieldExamplesModule = CdkTextFieldExamplesModule;
    exports.TextFieldAutofillDirectiveExample = TextFieldAutofillDirectiveExample;
    exports.TextFieldAutofillMonitorExample = TextFieldAutofillMonitorExample;
    exports.TextFieldAutosizeTextareaExample = TextFieldAutosizeTextareaExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-text-field.umd.js.map
