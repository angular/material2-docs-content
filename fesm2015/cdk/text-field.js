import * as i1$1 from '@angular/cdk/text-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ElementRef, ViewChild, NgModule } from '@angular/core';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/form-field';
import { take } from 'rxjs/operators';
import * as i3 from '@angular/material/core';

function TextFieldAutofillDirectiveExample_mat_hint_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
function TextFieldAutofillDirectiveExample_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
/** @title Monitoring autofill state with cdkAutofill */
class TextFieldAutofillDirectiveExample {
}
TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
TextFieldAutofillDirectiveExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [[3, "submit"], ["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i1$1.CdkAutofill, i4.NgIf, i5.MatButton, i1.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-directive-example',
                templateUrl: './text-field-autofill-directive-example.html',
                styleUrls: ['./text-field-autofill-directive-example.css'],
            }]
    }], null, null); })();

const _c0$1 = ["first"];
const _c1 = ["last"];
function TextFieldAutofillMonitorExample_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
function TextFieldAutofillMonitorExample_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
/** @title Monitoring autofill state with AutofillMonitor */
class TextFieldAutofillMonitorExample {
    constructor(_autofill) {
        this._autofill = _autofill;
    }
    ngAfterViewInit() {
        this._autofill.monitor(this.firstName)
            .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
        this._autofill.monitor(this.lastName)
            .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
    }
    ngOnDestroy() {
        this._autofill.stopMonitoring(this.firstName);
        this._autofill.stopMonitoring(this.lastName);
    }
}
TextFieldAutofillMonitorExample.ɵfac = function TextFieldAutofillMonitorExample_Factory(t) { return new (t || TextFieldAutofillMonitorExample)(i0.ɵɵdirectiveInject(i1$1.AutofillMonitor)); };
TextFieldAutofillMonitorExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextFieldAutofillMonitorExample, selectors: [["text-field-autofill-monitor-example"]], viewQuery: function TextFieldAutofillMonitorExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 5, ElementRef);
        i0.ɵɵviewQuery(_c1, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.firstName = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lastName = _t.first);
    } }, decls: 15, vars: 2, consts: [[3, "submit"], ["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i4.NgIf, i5.MatButton, i1.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-monitor-example',
                templateUrl: './text-field-autofill-monitor-example.html',
                styleUrls: ['./text-field-autofill-monitor-example.css'],
            }]
    }], function () { return [{ type: i1$1.AutofillMonitor }]; }, { firstName: [{
            type: ViewChild,
            args: ['first', { read: ElementRef }]
        }], lastName: [{
            type: ViewChild,
            args: ['last', { read: ElementRef }]
        }] }); })();

const _c0 = ["autosize"];
/** @title Auto-resizing textarea */
class TextFieldAutosizeTextareaExample {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
}
TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(i0.ɵɵdirectiveInject(i0.NgZone)); };
TextFieldAutosizeTextareaExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autosize = _t.first);
    } }, decls: 22, vars: 2, consts: [["value", "16px", 3, "selectionChange"], ["fontSize", ""], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵadvance(17);
        i0.ɵɵstyleProp("font-size", _r0.value);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2$1.MatSelect, i3.MatOption, i2.MatInput, i1$1.CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autosize-textarea-example',
                templateUrl: './text-field-autosize-textarea-example.html',
                styleUrls: ['./text-field-autosize-textarea-example.css'],
            }]
    }], function () { return [{ type: i0.NgZone }]; }, { autosize: [{
            type: ViewChild,
            args: ['autosize']
        }] }); })();

const EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
class CdkTextFieldExamplesModule {
}
CdkTextFieldExamplesModule.ɵfac = function CdkTextFieldExamplesModule_Factory(t) { return new (t || CdkTextFieldExamplesModule)(); };
CdkTextFieldExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkTextFieldExamplesModule });
CdkTextFieldExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            TextFieldModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTextFieldExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    TextFieldModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTextFieldExamplesModule, { declarations: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample], imports: [CommonModule,
        TextFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule], exports: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkTextFieldExamplesModule, TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample };
//# sourceMappingURL=text-field.js.map
