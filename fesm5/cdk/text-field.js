import { CdkAutofill, AutofillMonitor, CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { NgIf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ViewChild, ElementRef, ɵɵdirectiveInject, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelement, NgZone, ɵɵreference, ɵɵstyleProp, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { take } from 'rxjs/operators';
import { MatOption } from '@angular/material/core';

function TextFieldAutofillDirectiveExample_mat_hint_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint");
    ɵɵtext(1, "Autofilled!");
    ɵɵelementEnd();
} }
function TextFieldAutofillDirectiveExample_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint");
    ɵɵtext(1, "Autofilled!");
    ɵɵelementEnd();
} }
/** @title Monitoring autofill state with cdkAutofill */
var TextFieldAutofillDirectiveExample = /** @class */ (function () {
    function TextFieldAutofillDirectiveExample() {
    }
    TextFieldAutofillDirectiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autofill-directive-example',
                    templateUrl: './text-field-autofill-directive-example.html',
                    styleUrls: ['./text-field-autofill-directive-example.css'],
                },] },
    ];
    TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
    TextFieldAutofillDirectiveExample.ɵcmp = ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form");
            ɵɵelementStart(1, "mat-form-field");
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "First name");
            ɵɵelementEnd();
            ɵɵelementStart(4, "input", 0);
            ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_4_listener($event) { return ctx.firstNameAutofilled = $event.isAutofilled; });
            ɵɵelementEnd();
            ɵɵtemplate(5, TextFieldAutofillDirectiveExample_mat_hint_5_Template, 2, 0, "mat-hint", 1);
            ɵɵelementEnd();
            ɵɵelementStart(6, "mat-form-field");
            ɵɵelementStart(7, "mat-label");
            ɵɵtext(8, "Last name");
            ɵɵelementEnd();
            ɵɵelementStart(9, "input", 0);
            ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_9_listener($event) { return ctx.lastNameAutofilled = $event.isAutofilled; });
            ɵɵelementEnd();
            ɵɵtemplate(10, TextFieldAutofillDirectiveExample_mat_hint_10_Template, 2, 0, "mat-hint", 1);
            ɵɵelementEnd();
            ɵɵelementStart(11, "button", 2);
            ɵɵtext(12, "Submit");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.firstNameAutofilled);
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.lastNameAutofilled);
        } }, directives: [MatFormField, MatLabel, MatInput, CdkAutofill, NgIf, MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return TextFieldAutofillDirectiveExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-directive-example',
                templateUrl: './text-field-autofill-directive-example.html',
                styleUrls: ['./text-field-autofill-directive-example.css'],
            }]
    }], null, null); })();

var _c0 = ["first"];
var _c1 = ["last"];
function TextFieldAutofillMonitorExample_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint");
    ɵɵtext(1, "Autofilled!");
    ɵɵelementEnd();
} }
function TextFieldAutofillMonitorExample_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-hint");
    ɵɵtext(1, "Autofilled!");
    ɵɵelementEnd();
} }
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
    TextFieldAutofillMonitorExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autofill-monitor-example',
                    templateUrl: './text-field-autofill-monitor-example.html',
                    styleUrls: ['./text-field-autofill-monitor-example.css'],
                },] },
    ];
    /** @nocollapse */
    TextFieldAutofillMonitorExample.ctorParameters = function () { return [
        { type: AutofillMonitor }
    ]; };
    TextFieldAutofillMonitorExample.propDecorators = {
        firstName: [{ type: ViewChild, args: ['first', { read: ElementRef },] }],
        lastName: [{ type: ViewChild, args: ['last', { read: ElementRef },] }]
    };
    TextFieldAutofillMonitorExample.ɵfac = function TextFieldAutofillMonitorExample_Factory(t) { return new (t || TextFieldAutofillMonitorExample)(ɵɵdirectiveInject(AutofillMonitor)); };
    TextFieldAutofillMonitorExample.ɵcmp = ɵɵdefineComponent({ type: TextFieldAutofillMonitorExample, selectors: [["text-field-autofill-monitor-example"]], viewQuery: function TextFieldAutofillMonitorExample_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true, ElementRef);
            ɵɵviewQuery(_c1, true, ElementRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstName = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastName = _t.first);
        } }, decls: 15, vars: 2, consts: [["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form");
            ɵɵelementStart(1, "mat-form-field");
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "First name");
            ɵɵelementEnd();
            ɵɵelement(4, "input", 0, 1);
            ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 2);
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-form-field");
            ɵɵelementStart(8, "mat-label");
            ɵɵtext(9, "Last name");
            ɵɵelementEnd();
            ɵɵelement(10, "input", 0, 3);
            ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 2);
            ɵɵelementEnd();
            ɵɵelementStart(13, "button", 4);
            ɵɵtext(14, "Submit");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(6);
            ɵɵproperty("ngIf", ctx.firstNameAutofilled);
            ɵɵadvance(6);
            ɵɵproperty("ngIf", ctx.lastNameAutofilled);
        } }, directives: [MatFormField, MatLabel, MatInput, NgIf, MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return TextFieldAutofillMonitorExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-monitor-example',
                templateUrl: './text-field-autofill-monitor-example.html',
                styleUrls: ['./text-field-autofill-monitor-example.css'],
            }]
    }], function () { return [{ type: AutofillMonitor }]; }, { firstName: [{
            type: ViewChild,
            args: ['first', { read: ElementRef }]
        }], lastName: [{
            type: ViewChild,
            args: ['last', { read: ElementRef }]
        }] }); })();

var _c0$1 = ["autosize"];
/** @title Auto-resizing textarea */
var TextFieldAutosizeTextareaExample = /** @class */ (function () {
    function TextFieldAutosizeTextareaExample(_ngZone) {
        this._ngZone = _ngZone;
    }
    TextFieldAutosizeTextareaExample.prototype.triggerResize = function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    TextFieldAutosizeTextareaExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autosize-textarea-example',
                    templateUrl: './text-field-autosize-textarea-example.html',
                    styleUrls: ['./text-field-autosize-textarea-example.css'],
                },] },
    ];
    /** @nocollapse */
    TextFieldAutosizeTextareaExample.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    TextFieldAutosizeTextareaExample.propDecorators = {
        autosize: [{ type: ViewChild, args: ['autosize',] }]
    };
    TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(ɵɵdirectiveInject(NgZone)); };
    TextFieldAutosizeTextareaExample.ɵcmp = ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.autosize = _t.first);
        } }, decls: 22, vars: 1, consts: [["value", "16px", 3, "selectionChange"], ["fontSize", ""], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Font size");
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-select", 0, 1);
            ɵɵlistener("selectionChange", function TextFieldAutosizeTextareaExample_Template_mat_select_selectionChange_3_listener($event) { return ctx.triggerResize(); });
            ɵɵelementStart(5, "mat-option", 2);
            ɵɵtext(6, "10px");
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-option", 3);
            ɵɵtext(8, "12px");
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-option", 4);
            ɵɵtext(10, "14px");
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-option", 5);
            ɵɵtext(12, "16px");
            ɵɵelementEnd();
            ɵɵelementStart(13, "mat-option", 6);
            ɵɵtext(14, "18px");
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-option", 7);
            ɵɵtext(16, "20px");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(17, "mat-form-field");
            ɵɵelementStart(18, "mat-label");
            ɵɵtext(19, "Autosize textarea");
            ɵɵelementEnd();
            ɵɵelement(20, "textarea", 8, 9);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r6 = ɵɵreference(4);
            ɵɵadvance(17);
            ɵɵstyleProp("font-size", _r6.value);
        } }, directives: [MatFormField, MatLabel, MatSelect, MatOption, MatInput, CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return TextFieldAutosizeTextareaExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autosize-textarea-example',
                templateUrl: './text-field-autosize-textarea-example.html',
                styleUrls: ['./text-field-autosize-textarea-example.css'],
            }]
    }], function () { return [{ type: NgZone }]; }, { autosize: [{
            type: ViewChild,
            args: ['autosize']
        }] }); })();

var EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
var CdkTextFieldExamplesModule = /** @class */ (function () {
    function CdkTextFieldExamplesModule() {
    }
    CdkTextFieldExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        TextFieldModule,
                        MatInputModule,
                        MatSelectModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkTextFieldExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkTextFieldExamplesModule });
    CdkTextFieldExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkTextFieldExamplesModule_Factory(t) { return new (t || CdkTextFieldExamplesModule)(); }, imports: [[
                CommonModule,
                TextFieldModule,
                MatInputModule,
                MatSelectModule,
            ]] });
    return CdkTextFieldExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkTextFieldExamplesModule, { declarations: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample], imports: [CommonModule,
        TextFieldModule,
        MatInputModule,
        MatSelectModule], exports: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTextFieldExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    TextFieldModule,
                    MatInputModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CdkTextFieldExamplesModule, TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample };
//# sourceMappingURL=text-field.js.map
