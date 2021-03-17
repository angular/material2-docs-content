import { CdkAutofill, AutofillMonitor, CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { NgIf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵdirectiveInject, ɵɵviewQuery, ElementRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelement, ViewChild, NgZone, ɵɵreference, ɵɵstyleProp, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
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
class TextFieldAutofillDirectiveExample {
}
TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
TextFieldAutofillDirectiveExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [[3, "submit"], ["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵlistener("submit", function TextFieldAutofillDirectiveExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
        ɵɵelementStart(1, "mat-form-field");
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "First name");
        ɵɵelementEnd();
        ɵɵelementStart(4, "input", 1);
        ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_4_listener($event) { return ctx.firstNameAutofilled = $event.isAutofilled; });
        ɵɵelementEnd();
        ɵɵtemplate(5, TextFieldAutofillDirectiveExample_mat_hint_5_Template, 2, 0, "mat-hint", 2);
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-form-field");
        ɵɵelementStart(7, "mat-label");
        ɵɵtext(8, "Last name");
        ɵɵelementEnd();
        ɵɵelementStart(9, "input", 1);
        ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_9_listener($event) { return ctx.lastNameAutofilled = $event.isAutofilled; });
        ɵɵelementEnd();
        ɵɵtemplate(10, TextFieldAutofillDirectiveExample_mat_hint_10_Template, 2, 0, "mat-hint", 2);
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 3);
        ɵɵtext(12, "Submit");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [MatFormField, MatLabel, MatInput, CdkAutofill, NgIf, MatButton, MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-directive-example',
                templateUrl: './text-field-autofill-directive-example.html',
                styleUrls: ['./text-field-autofill-directive-example.css'],
            }]
    }], null, null); })();

const _c0 = ["first"];
const _c1 = ["last"];
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
TextFieldAutofillMonitorExample.ɵfac = function TextFieldAutofillMonitorExample_Factory(t) { return new (t || TextFieldAutofillMonitorExample)(ɵɵdirectiveInject(AutofillMonitor)); };
TextFieldAutofillMonitorExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TextFieldAutofillMonitorExample, selectors: [["text-field-autofill-monitor-example"]], viewQuery: function TextFieldAutofillMonitorExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 5, ElementRef);
        ɵɵviewQuery(_c1, 5, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstName = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastName = _t.first);
    } }, decls: 15, vars: 2, consts: [[3, "submit"], ["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵlistener("submit", function TextFieldAutofillMonitorExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
        ɵɵelementStart(1, "mat-form-field");
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "First name");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 1, 2);
        ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 3);
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Last name");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 1, 4);
        ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 3);
        ɵɵelementEnd();
        ɵɵelementStart(13, "button", 5);
        ɵɵtext(14, "Submit");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [MatFormField, MatLabel, MatInput, NgIf, MatButton, MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
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

const _c0$1 = ["autosize"];
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
TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(ɵɵdirectiveInject(NgZone)); };
TextFieldAutosizeTextareaExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 5);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.autosize = _t.first);
    } }, decls: 22, vars: 2, consts: [["value", "16px", 3, "selectionChange"], ["fontSize", ""], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Font size");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-select", 0, 1);
        ɵɵlistener("selectionChange", function TextFieldAutosizeTextareaExample_Template_mat_select_selectionChange_3_listener() { return ctx.triggerResize(); });
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
        const _r0 = ɵɵreference(4);
        ɵɵadvance(17);
        ɵɵstyleProp("font-size", _r0.value);
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption, MatInput, CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
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

const EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
class CdkTextFieldExamplesModule {
}
CdkTextFieldExamplesModule.ɵfac = function CdkTextFieldExamplesModule_Factory(t) { return new (t || CdkTextFieldExamplesModule)(); };
CdkTextFieldExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CdkTextFieldExamplesModule });
CdkTextFieldExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            CommonModule,
            TextFieldModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkTextFieldExamplesModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkTextFieldExamplesModule, { declarations: [TextFieldAutofillDirectiveExample,
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
