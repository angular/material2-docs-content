import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2$1 from '@angular/material/slide-toggle';
import { MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import * as i4 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$1 from '@angular/forms';
import { FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import * as i2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Configurable slide-toggle
 */
class SlideToggleConfigurableExample {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: SlideToggleConfigurableExample, isStandalone: true, selector: "slide-toggle-configurable-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n          class=\"example-margin\"\n          [color]=\"color\"\n          [checked]=\"checked\"\n          [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i2.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i2.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i4.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-configurable-example', standalone: true, imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule], template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n          class=\"example-margin\"\n          [color]=\"color\"\n          [checked]=\"checked\"\n          [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n"] }]
        }] });

/**
 * @title Slide-toggle with forms
 */
class SlideToggleFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isChecked = true;
        this.formGroup = this._formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue],
        });
    }
    alertFormValues(formGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleFormsExample, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: SlideToggleFormsExample, isStandalone: true, selector: "slide-toggle-forms-example", ngImport: i0, template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n", styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "directive", type: i2$1.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: _MatSlideToggleRequiredValidatorModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-forms-example', standalone: true, imports: [
                        MatSlideToggleModule,
                        FormsModule,
                        _MatSlideToggleRequiredValidatorModule,
                        MatButtonModule,
                        ReactiveFormsModule,
                    ], template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n", styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }]; } });

/**
 * @title Basic slide-toggles
 */
class SlideToggleOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: SlideToggleOverviewExample, isStandalone: true, selector: "slide-toggle-overview-example", ngImport: i0, template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\n", dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-overview-example', standalone: true, imports: [MatSlideToggleModule], template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\n" }]
        }] });

/**
 * @title Testing with MatSlideToggleHarness
 */
class SlideToggleHarnessExample {
    constructor() {
        this.disabled = true;
        this.ctrl = new FormControl(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: SlideToggleHarnessExample, isStandalone: true, selector: "slide-toggle-harness-example", ngImport: i0, template: "<mat-slide-toggle\n    [formControl]=\"ctrl\"\n    name=\"first-name\">\n  First\n</mat-slide-toggle>\n<mat-slide-toggle [disabled]=\"disabled\">\n  Second\n</mat-slide-toggle>\n", dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2$1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SlideToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-harness-example', standalone: true, imports: [MatSlideToggleModule, FormsModule, ReactiveFormsModule], template: "<mat-slide-toggle\n    [formControl]=\"ctrl\"\n    name=\"first-name\">\n  First\n</mat-slide-toggle>\n<mat-slide-toggle [disabled]=\"disabled\">\n  Second\n</mat-slide-toggle>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleHarnessExample, SlideToggleOverviewExample };
//# sourceMappingURL=slide-toggle.mjs.map
