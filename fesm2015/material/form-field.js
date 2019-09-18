import { CommonModule } from '@angular/common';
import { Component, ElementRef, Optional, Self, Input, NgModule } from '@angular/core';
import { FormBuilder, NgControl, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field appearance variants
 */
class FormFieldAppearanceExample {
}
FormFieldAppearanceExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-appearance-example',
                template: "<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with custom telephone number input control.
 */
class FormFieldCustomControlExample {
}
FormFieldCustomControlExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-custom-control-example',
                template: "<mat-form-field>\n  <example-tel-input placeholder=\"Phone number\" required></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/**
 * Data structure for holding telephone number.
 */
class MyTel {
    /**
     * @param {?} area
     * @param {?} exchange
     * @param {?} subscriber
     */
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
if (false) {
    /** @type {?} */
    MyTel.prototype.area;
    /** @type {?} */
    MyTel.prototype.exchange;
    /** @type {?} */
    MyTel.prototype.subscriber;
}
/**
 * Custom `MatFormFieldControl` for telephone number input.
 */
class MyTelInput {
    /**
     * @param {?} formBuilder
     * @param {?} _focusMonitor
     * @param {?} _elementRef
     * @param {?} ngControl
     */
    constructor(formBuilder, _focusMonitor, _elementRef, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.describedBy = '';
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._required = false;
        this._disabled = false;
        this.parts = formBuilder.group({
            area: '',
            exchange: '',
            subscriber: '',
        });
        _focusMonitor.monitor(_elementRef, true).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            if (this.focused && !origin) {
                this.onTouched();
            }
            this.focused = !!origin;
            this.stateChanges.next();
        }));
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    get empty() {
        const { value: { area, exchange, subscriber } } = this.parts;
        return !area && !exchange && !subscriber;
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() { return this.focused || !this.empty; }
    /**
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._disabled ? this.parts.disable() : this.parts.enable();
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get value() {
        const { value: { area, exchange, subscriber } } = this.parts;
        if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
            return new MyTel(area, exchange, subscriber);
        }
        return null;
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    set value(tel) {
        const { area, exchange, subscriber } = tel || new MyTel('', '', '');
        this.parts.setValue({ area, exchange, subscriber });
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() != 'input') {
            (/** @type {?} */ (this._elementRef.nativeElement.querySelector('input'))).focus();
        }
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    writeValue(tel) {
        this.value = tel;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */
    _handleInput() {
        this.onChange(this.parts.value);
    }
}
MyTelInput.nextId = 0;
MyTelInput.decorators = [
    { type: Component, args: [{
                selector: 'example-tel-input',
                template: "<div [formGroup]=\"parts\" class=\"example-tel-input-container\">\n  <input class=\"example-tel-input-element\" formControlName=\"area\" size=\"3\" aria-label=\"Area code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"exchange\" size=\"3\" aria-label=\"Exchange code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"subscriber\" size=\"4\" aria-label=\"Subscriber number\" (input)=\"_handleInput()\">\n</div>\n",
                providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                host: {
                    '[class.example-floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                    '[attr.aria-describedby]': 'describedBy',
                },
                styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"]
            }] }
];
/** @nocollapse */
MyTelInput.ctorParameters = () => [
    { type: FormBuilder },
    { type: FocusMonitor },
    { type: ElementRef },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
MyTelInput.propDecorators = {
    placeholder: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MyTelInput.nextId;
    /** @type {?} */
    MyTelInput.prototype.parts;
    /** @type {?} */
    MyTelInput.prototype.stateChanges;
    /** @type {?} */
    MyTelInput.prototype.focused;
    /** @type {?} */
    MyTelInput.prototype.errorState;
    /** @type {?} */
    MyTelInput.prototype.controlType;
    /** @type {?} */
    MyTelInput.prototype.id;
    /** @type {?} */
    MyTelInput.prototype.describedBy;
    /** @type {?} */
    MyTelInput.prototype.onChange;
    /** @type {?} */
    MyTelInput.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._required;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._elementRef;
    /** @type {?} */
    MyTelInput.prototype.ngControl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with error messages
 */
class FormFieldErrorExample {
    constructor() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
}
FormFieldErrorExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-error-example',
                template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    FormFieldErrorExample.prototype.email;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with hints
 */
class FormFieldHintExample {
}
FormFieldHintExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-hint-example',
                template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with label
 */
class FormFieldLabelExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
}
FormFieldLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-label-example',
                template: "<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n"]
            }] }
];
/** @nocollapse */
FormFieldLabelExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    FormFieldLabelExample.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Simple form field
 */
class FormFieldOverviewExample {
}
FormFieldOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-overview-example',
                template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field with prefix & suffix
 */
class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = true;
    }
}
FormFieldPrefixSuffixExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-prefix-suffix-example',
                template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\n    <span matPrefix>$&nbsp;</span>\n    <span matSuffix>.00</span>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    FormFieldPrefixSuffixExample.prototype.hide;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Form field theming
 */
class FormFieldThemingExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)],
        });
    }
    /**
     * @return {?}
     */
    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
    }
}
FormFieldThemingExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-theming-example',
                template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field [color]=\"options.value.color\">\n    <mat-select placeholder=\"Color\" formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field [color]=\"options.value.color\">\n    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\n    <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            }] }
];
/** @nocollapse */
FormFieldThemingExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    FormFieldThemingExample.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
];
class FormFieldExamplesModule {
}
FormFieldExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatRadioModule,
                    MatSelectModule,
                    ReactiveFormsModule,
                ],
                declarations: [...EXAMPLES, MyTelInput],
                exports: EXAMPLES,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput, FormFieldExamplesModule };
//# sourceMappingURL=form-field.js.map
