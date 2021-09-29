(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/text-field'), require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/form-field'), require('rxjs/operators'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/text-field', ['exports', '@angular/cdk/text-field', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/input', '@angular/material/select', '@angular/material/form-field', 'rxjs/operators', '@angular/material/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.textField = {}), global.ng.cdk.textField, global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.input, global.ng.material.select, global.ng.material.formField, global.rxjs.operators, global.ng.material.core));
}(this, (function (exports, i1$1, i4, i0, i5, i2, i2$1, i1, operators, i3) { 'use strict';

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

    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    function TextFieldAutofillDirectiveExample_mat_hint_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-hint");
            i0__namespace.ɵɵtext(1, "Autofilled!");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TextFieldAutofillDirectiveExample_mat_hint_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-hint");
            i0__namespace.ɵɵtext(1, "Autofilled!");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Monitoring autofill state with cdkAutofill */
    var TextFieldAutofillDirectiveExample = /** @class */ (function () {
        function TextFieldAutofillDirectiveExample() {
        }
        return TextFieldAutofillDirectiveExample;
    }());
    TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
    TextFieldAutofillDirectiveExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [[3, "submit"], ["appearance", "fill"], ["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵlistener("submit", function TextFieldAutofillDirectiveExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "First name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "input", 2);
                i0__namespace.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_4_listener($event) { return ctx.firstNameAutofilled = $event.isAutofilled; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(5, TextFieldAutofillDirectiveExample_mat_hint_5_Template, 2, 0, "mat-hint", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(7, "mat-label");
                i0__namespace.ɵɵtext(8, "Last name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "input", 2);
                i0__namespace.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_9_listener($event) { return ctx.lastNameAutofilled = $event.isAutofilled; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(10, TextFieldAutofillDirectiveExample_mat_hint_10_Template, 2, 0, "mat-hint", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 4);
                i0__namespace.ɵɵtext(12, "Submit");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i1__namespace$1.CdkAutofill, i4__namespace.NgIf, i5__namespace.MatButton, i1__namespace.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
                type: i0.Component,
                args: [{ selector: 'text-field-autofill-directive-example', template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], null, null);
    })();

    var _c0$1 = ["first"];
    var _c1 = ["last"];
    function TextFieldAutofillMonitorExample_mat_hint_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-hint");
            i0__namespace.ɵɵtext(1, "Autofilled!");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TextFieldAutofillMonitorExample_mat_hint_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-hint");
            i0__namespace.ɵɵtext(1, "Autofilled!");
            i0__namespace.ɵɵelementEnd();
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
    TextFieldAutofillMonitorExample.ɵfac = function TextFieldAutofillMonitorExample_Factory(t) { return new (t || TextFieldAutofillMonitorExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.AutofillMonitor)); };
    TextFieldAutofillMonitorExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TextFieldAutofillMonitorExample, selectors: [["text-field-autofill-monitor-example"]], viewQuery: function TextFieldAutofillMonitorExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 5, i0.ElementRef);
                i0__namespace.ɵɵviewQuery(_c1, 5, i0.ElementRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.firstName = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.lastName = _t.first);
            }
        }, decls: 15, vars: 2, consts: [[3, "submit"], ["appearance", "fill"], ["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵlistener("submit", function TextFieldAutofillMonitorExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "First name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2, 3);
                i0__namespace.ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Last name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "input", 2, 5);
                i0__namespace.ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "button", 6);
                i0__namespace.ɵɵtext(14, "Submit");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i4__namespace.NgIf, i5__namespace.MatButton, i1__namespace.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
                type: i0.Component,
                args: [{ selector: 'text-field-autofill-monitor-example', template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], function () { return [{ type: i1__namespace$1.AutofillMonitor }]; }, { firstName: [{
                    type: i0.ViewChild,
                    args: ['first', { read: i0.ElementRef }]
                }], lastName: [{
                    type: i0.ViewChild,
                    args: ['last', { read: i0.ElementRef }]
                }] });
    })();

    var _c0 = ["autosize"];
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
    TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    TextFieldAutosizeTextareaExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.autosize = _t.first);
            }
        }, decls: 22, vars: 2, consts: [["appearance", "fill"], ["value", "16px", 3, "selectionChange"], ["fontSize", ""], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Font size");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-select", 1, 2);
                i0__namespace.ɵɵlistener("selectionChange", function TextFieldAutosizeTextareaExample_Template_mat_select_selectionChange_3_listener() { return ctx.triggerResize(); });
                i0__namespace.ɵɵelementStart(5, "mat-option", 3);
                i0__namespace.ɵɵtext(6, "10px");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-option", 4);
                i0__namespace.ɵɵtext(8, "12px");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-option", 5);
                i0__namespace.ɵɵtext(10, "14px");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "mat-option", 6);
                i0__namespace.ɵɵtext(12, "16px");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "mat-option", 7);
                i0__namespace.ɵɵtext(14, "18px");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "mat-option", 8);
                i0__namespace.ɵɵtext(16, "20px");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Autosize textarea");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(20, "textarea", 9, 10);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(4);
                i0__namespace.ɵɵadvance(17);
                i0__namespace.ɵɵstyleProp("font-size", _r0.value);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace$1.MatSelect, i3__namespace.MatOption, i2__namespace.MatInput, i1__namespace$1.CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
                type: i0.Component,
                args: [{ selector: 'text-field-autosize-textarea-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\" appearance=\"fill\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], function () { return [{ type: i0__namespace.NgZone }]; }, { autosize: [{
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
    CdkTextFieldExamplesModule.ɵfac = function CdkTextFieldExamplesModule_Factory(t) { return new (t || CdkTextFieldExamplesModule)(); };
    CdkTextFieldExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkTextFieldExamplesModule });
    CdkTextFieldExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i1$1.TextFieldModule,
                i5.MatButtonModule,
                i2.MatInputModule,
                i2$1.MatSelectModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTextFieldExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1$1.TextFieldModule,
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
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkTextFieldExamplesModule, { declarations: [TextFieldAutofillDirectiveExample,
                TextFieldAutofillMonitorExample,
                TextFieldAutosizeTextareaExample], imports: [i4.CommonModule,
                i1$1.TextFieldModule,
                i5.MatButtonModule,
                i2.MatInputModule,
                i2$1.MatSelectModule], exports: [TextFieldAutofillDirectiveExample,
                TextFieldAutofillMonitorExample,
                TextFieldAutosizeTextareaExample] });
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
