(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/text-field'), require('@angular/common'), require('@angular/core'), require('@angular/material/input'), require('@angular/material/select'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/text-field', ['exports', '@angular/cdk/text-field', '@angular/common', '@angular/core', '@angular/material/input', '@angular/material/select', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.textField = {}), global.ng.cdk.textField, global.ng.common, global.ng.core, global.ng.material.input, global.ng.material.select, global.rxjs.operators));
}(this, function (exports, textField, common, core, input, select, operators) { 'use strict';

    /** @title Monitoring autofill state with cdkAutofill */
    var TextFieldAutofillDirectiveExample = /** @class */ (function () {
        function TextFieldAutofillDirectiveExample() {
        }
        TextFieldAutofillDirectiveExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'text-field-autofill-directive-example',
                        template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        return TextFieldAutofillDirectiveExample;
    }());

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
            { type: core.Component, args: [{
                        selector: 'text-field-autofill-monitor-example',
                        template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        TextFieldAutofillMonitorExample.ctorParameters = function () { return [
            { type: textField.AutofillMonitor }
        ]; };
        TextFieldAutofillMonitorExample.propDecorators = {
            firstName: [{ type: core.ViewChild, args: ['first', { read: core.ElementRef, static: false },] }],
            lastName: [{ type: core.ViewChild, args: ['last', { read: core.ElementRef, static: false },] }]
        };
        return TextFieldAutofillMonitorExample;
    }());

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
        TextFieldAutosizeTextareaExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'text-field-autosize-textarea-example',
                        template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n",
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        TextFieldAutosizeTextareaExample.ctorParameters = function () { return [
            { type: core.NgZone }
        ]; };
        TextFieldAutosizeTextareaExample.propDecorators = {
            autosize: [{ type: core.ViewChild, args: ['autosize', { static: false },] }]
        };
        return TextFieldAutosizeTextareaExample;
    }());

    var EXAMPLES = [
        TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample,
    ];
    var CdkTextFieldExamplesModule = /** @class */ (function () {
        function CdkTextFieldExamplesModule() {
        }
        CdkTextFieldExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            textField.TextFieldModule,
                            input.MatInputModule,
                            select.MatSelectModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkTextFieldExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TextFieldAutofillDirectiveExample = TextFieldAutofillDirectiveExample;
    exports.TextFieldAutofillMonitorExample = TextFieldAutofillMonitorExample;
    exports.TextFieldAutosizeTextareaExample = TextFieldAutosizeTextareaExample;
    exports.CdkTextFieldExamplesModule = CdkTextFieldExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-text-field.umd.js.map
