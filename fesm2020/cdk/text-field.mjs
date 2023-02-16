import * as i1$1 from '@angular/cdk/text-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ElementRef, ViewChild, NgModule } from '@angular/core';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/material/form-field';
import { take } from 'rxjs/operators';
import * as i5$1 from '@angular/material/core';

/** @title Monitoring autofill state with cdkAutofill */
class TextFieldAutofillDirectiveExample {
}
TextFieldAutofillDirectiveExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: TextFieldAutofillDirectiveExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextFieldAutofillDirectiveExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: TextFieldAutofillDirectiveExample, selector: "text-field-autofill-directive-example", ngImport: i0, template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.CdkAutofill, selector: "[cdkAutofill]", outputs: ["cdkAutofill"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: TextFieldAutofillDirectiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autofill-directive-example', template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });

/** @title Monitoring autofill state with AutofillMonitor */
class TextFieldAutofillMonitorExample {
    constructor(_autofill) {
        this._autofill = _autofill;
    }
    ngAfterViewInit() {
        this._autofill
            .monitor(this.firstName)
            .subscribe(e => (this.firstNameAutofilled = e.isAutofilled));
        this._autofill
            .monitor(this.lastName)
            .subscribe(e => (this.lastNameAutofilled = e.isAutofilled));
    }
    ngOnDestroy() {
        this._autofill.stopMonitoring(this.firstName);
        this._autofill.stopMonitoring(this.lastName);
    }
}
TextFieldAutofillMonitorExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: TextFieldAutofillMonitorExample, deps: [{ token: i1$1.AutofillMonitor }], target: i0.ɵɵFactoryTarget.Component });
TextFieldAutofillMonitorExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: TextFieldAutofillMonitorExample, selector: "text-field-autofill-monitor-example", viewQueries: [{ propertyName: "firstName", first: true, predicate: ["first"], descendants: true, read: ElementRef }, { propertyName: "lastName", first: true, predicate: ["last"], descendants: true, read: ElementRef }], ngImport: i0, template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: TextFieldAutofillMonitorExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autofill-monitor-example', template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.AutofillMonitor }]; }, propDecorators: { firstName: [{
                type: ViewChild,
                args: ['first', { read: ElementRef }]
            }], lastName: [{
                type: ViewChild,
                args: ['last', { read: ElementRef }]
            }] } });

/** @title Auto-resizing textarea */
class TextFieldAutosizeTextareaExample {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    }
}
TextFieldAutosizeTextareaExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TextFieldAutosizeTextareaExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: TextFieldAutosizeTextareaExample, selector: "text-field-autosize-textarea-example", viewQueries: [{ propertyName: "autosize", first: true, predicate: ["autosize"], descendants: true }], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\" appearance=\"fill\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1$1.CdkTextareaAutosize, selector: "textarea[cdkTextareaAutosize]", inputs: ["cdkAutosizeMinRows", "cdkAutosizeMaxRows", "cdkTextareaAutosize", "placeholder"], exportAs: ["cdkTextareaAutosize"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "component", type: i4$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i5$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autosize-textarea-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\" appearance=\"fill\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { autosize: [{
                type: ViewChild,
                args: ['autosize']
            }] } });

const EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
class CdkTextFieldExamplesModule {
}
CdkTextFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkTextFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTextFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkTextFieldExamplesModule, declarations: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample], imports: [CommonModule, TextFieldModule, MatButtonModule, MatInputModule, MatSelectModule], exports: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample] });
CdkTextFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkTextFieldExamplesModule, imports: [CommonModule, TextFieldModule, MatButtonModule, MatInputModule, MatSelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkTextFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TextFieldModule, MatButtonModule, MatInputModule, MatSelectModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkTextFieldExamplesModule, TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample };
//# sourceMappingURL=text-field.mjs.map
