import { NgIf, CommonModule } from '@angular/common';
import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, Component, ɵɵproperty, ɵɵdirectiveInject, ElementRef, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵhostProperty, ɵɵclassProp, ɵɵProvidersFeature, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵattribute, Optional, Inject, Self, ViewChild, Input, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵtextInterpolate1, ɵɵstyleProp, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormGroup, FormControl, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, RequiredValidator, Validators, FormBuilder, NgControl, DefaultValueAccessor, FormControlDirective, ɵangular_packages_forms_forms_y, NumberValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatLabel, MatSuffix, MatHint, MAT_FORM_FIELD, MatFormFieldControl, MatError, MatPrefix, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { MatOption } from '@angular/material/core';

/** @title Form field appearance variants */
class FormFieldAppearanceExample {
}
FormFieldAppearanceExample.ɵfac = function FormFieldAppearanceExample_Factory(t) { return new (t || FormFieldAppearanceExample)(); };
FormFieldAppearanceExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldAppearanceExample, selectors: [["form-field-appearance-example"]], decls: 36, vars: 0, consts: [["appearance", "legacy"], ["matInput", "", "placeholder", "Placeholder"], ["matSuffix", ""], ["appearance", "standard"], ["appearance", "fill"], ["appearance", "outline"]], template: function FormFieldAppearanceExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵelementStart(1, "mat-form-field", 0);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Legacy form field");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 1);
        ɵɵelementStart(5, "mat-icon", 2);
        ɵɵtext(6, "sentiment_very_satisfied");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-hint");
        ɵɵtext(8, "Hint");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "p");
        ɵɵelementStart(10, "mat-form-field", 3);
        ɵɵelementStart(11, "mat-label");
        ɵɵtext(12, "Standard form field");
        ɵɵelementEnd();
        ɵɵelement(13, "input", 1);
        ɵɵelementStart(14, "mat-icon", 2);
        ɵɵtext(15, "sentiment_very_satisfied");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-hint");
        ɵɵtext(17, "Hint");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "p");
        ɵɵelementStart(19, "mat-form-field", 4);
        ɵɵelementStart(20, "mat-label");
        ɵɵtext(21, "Fill form field");
        ɵɵelementEnd();
        ɵɵelement(22, "input", 1);
        ɵɵelementStart(23, "mat-icon", 2);
        ɵɵtext(24, "sentiment_very_satisfied");
        ɵɵelementEnd();
        ɵɵelementStart(25, "mat-hint");
        ɵɵtext(26, "Hint");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(27, "p");
        ɵɵelementStart(28, "mat-form-field", 5);
        ɵɵelementStart(29, "mat-label");
        ɵɵtext(30, "Outline form field");
        ɵɵelementEnd();
        ɵɵelement(31, "input", 1);
        ɵɵelementStart(32, "mat-icon", 2);
        ɵɵtext(33, "sentiment_very_satisfied");
        ɵɵelementEnd();
        ɵɵelementStart(34, "mat-hint");
        ɵɵtext(35, "Hint");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatFormField, MatLabel, MatInput, MatIcon, MatSuffix, MatHint], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldAppearanceExample, [{
        type: Component,
        args: [{
                selector: 'form-field-appearance-example',
                templateUrl: 'form-field-appearance-example.html',
            }]
    }], null, null); })();

const _c0 = ["area"];
const _c1 = ["exchange"];
const _c2 = ["subscriber"];
/** @title Form field with custom telephone number input control. */
class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(new MyTel('', '', ''))
        });
    }
}
FormFieldCustomControlExample.ɵfac = function FormFieldCustomControlExample_Factory(t) { return new (t || FormFieldCustomControlExample)(); };
FormFieldCustomControlExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 9, vars: 1, consts: [[3, "formGroup"], ["appearance", "fill"], ["formControlName", "tel", "required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Phone number");
        ɵɵelementEnd();
        ɵɵelement(4, "example-tel-input", 2);
        ɵɵelementStart(5, "mat-icon", 3);
        ɵɵtext(6, "phone");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-hint");
        ɵɵtext(8, "Include area code");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
    } }, directives: function () { return [NgControlStatusGroup, FormGroupDirective, MatFormField, MatLabel, MyTelInput, NgControlStatus, FormControlName, RequiredValidator, MatIcon, MatSuffix, MatHint]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldCustomControlExample, [{
        type: Component,
        args: [{
                selector: 'form-field-custom-control-example',
                templateUrl: 'form-field-custom-control-example.html',
            }]
    }], null, null); })();
/** Data structure for holding telephone number. */
class MyTel {
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/** Custom `MatFormFieldControl` for telephone number input. */
class MyTelInput {
    constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._required = false;
        this._disabled = false;
        this.parts = formBuilder.group({
            area: [
                null,
                [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
            ],
            exchange: [
                null,
                [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
            ],
            subscriber: [
                null,
                [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
            ]
        });
        _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
            if (this.focused && !origin) {
                this.onTouched();
            }
            this.focused = !!origin;
            this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    get empty() {
        const { value: { area, exchange, subscriber } } = this.parts;
        return !area && !exchange && !subscriber;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._disabled ? this.parts.disable() : this.parts.enable();
        this.stateChanges.next();
    }
    get value() {
        if (this.parts.valid) {
            const { value: { area, exchange, subscriber } } = this.parts;
            return new MyTel(area, exchange, subscriber);
        }
        return null;
    }
    set value(tel) {
        const { area, exchange, subscriber } = tel || new MyTel('', '', '');
        this.parts.setValue({ area, exchange, subscriber });
        this.stateChanges.next();
    }
    get errorState() {
        return this.parts.invalid && this.parts.dirty;
    }
    autoFocusNext(control, nextElement) {
        if (!control.errors && nextElement) {
            this._focusMonitor.focusVia(nextElement, 'program');
        }
    }
    autoFocusPrev(control, prevElement) {
        if (control.value.length < 1) {
            this._focusMonitor.focusVia(prevElement, 'program');
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    setDescribedByIds(ids) {
        const controlElement = this._elementRef.nativeElement
            .querySelector('.example-tel-input-container');
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
    onContainerClick() {
        if (this.parts.controls.subscriber.valid) {
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.exchange.valid) {
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.area.valid) {
            this._focusMonitor.focusVia(this.exchangeInput, 'program');
        }
        else {
            this._focusMonitor.focusVia(this.areaInput, 'program');
        }
    }
    writeValue(tel) {
        this.value = tel;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _handleInput(control, nextElement) {
        this.autoFocusNext(control, nextElement);
        this.onChange(this.value);
    }
}
MyTelInput.nextId = 0;
MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MAT_FORM_FIELD, 8), ɵɵdirectiveInject(NgControl, 10)); };
MyTelInput.ɵcmp = ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], viewQuery: function MyTelInput_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.areaInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.exchangeInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.subscriberInput = _t.first);
    } }, hostVars: 3, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵhostProperty("id", ctx.id);
        ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
    } }, inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MyTelInput }])], decls: 11, vars: 2, consts: [["role", "group", 1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "maxLength", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], ["area", ""], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "maxLength", "3", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["exchange", ""], ["formControlName", "subscriber", "maxLength", "4", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["subscriber", ""]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
        const _r3 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "input", 1, 2);
        ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener() { ɵɵrestoreView(_r3); const _r1 = ɵɵreference(6); return ctx._handleInput(ctx.parts.controls.area, _r1); });
        ɵɵelementEnd();
        ɵɵelementStart(3, "span", 3);
        ɵɵtext(4, "\u2013");
        ɵɵelementEnd();
        ɵɵelementStart(5, "input", 4, 5);
        ɵɵlistener("input", function MyTelInput_Template_input_input_5_listener() { ɵɵrestoreView(_r3); const _r2 = ɵɵreference(10); return ctx._handleInput(ctx.parts.controls.exchange, _r2); })("keyup.backspace", function MyTelInput_Template_input_keyup_backspace_5_listener() { ɵɵrestoreView(_r3); const _r0 = ɵɵreference(2); return ctx.autoFocusPrev(ctx.parts.controls.exchange, _r0); });
        ɵɵelementEnd();
        ɵɵelementStart(7, "span", 3);
        ɵɵtext(8, "\u2013");
        ɵɵelementEnd();
        ɵɵelementStart(9, "input", 6, 7);
        ɵɵlistener("input", function MyTelInput_Template_input_input_9_listener() { return ctx._handleInput(ctx.parts.controls.subscriber); })("keyup.backspace", function MyTelInput_Template_input_keyup_backspace_9_listener() { ɵɵrestoreView(_r3); const _r1 = ɵɵreference(6); return ctx.autoFocusPrev(ctx.parts.controls.subscriber, _r1); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.parts);
        ɵɵattribute("aria-labelledby", ctx._formField == null ? null : ctx._formField.getLabelId());
    } }, directives: [NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyTelInput, [{
        type: Component,
        args: [{
                selector: 'example-tel-input',
                templateUrl: 'example-tel-input-example.html',
                styleUrls: ['example-tel-input-example.css'],
                providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                host: {
                    '[class.example-floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                }
            }]
    }], function () { return [{ type: FormBuilder }, { type: FocusMonitor }, { type: ElementRef }, { type: MatFormField, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_FORM_FIELD]
            }] }, { type: NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { areaInput: [{
            type: ViewChild,
            args: ['area']
        }], exchangeInput: [{
            type: ViewChild,
            args: ['exchange']
        }], subscriberInput: [{
            type: ViewChild,
            args: ['subscriber']
        }], userAriaDescribedBy: [{
            type: Input,
            args: ['aria-describedby']
        }], placeholder: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

function FormFieldErrorExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.getErrorMessage());
} }
/** @title Form field with error messages */
class FormFieldErrorExample {
    constructor() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}
FormFieldErrorExample.ɵfac = function FormFieldErrorExample_Factory(t) { return new (t || FormFieldErrorExample)(); };
FormFieldErrorExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldErrorExample, selectors: [["form-field-error-example"]], decls: 6, vars: 2, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], [4, "ngIf"]], template: function FormFieldErrorExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Enter your email");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2);
        ɵɵtemplate(5, FormFieldErrorExample_mat_error_5_Template, 2, 1, "mat-error", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("formControl", ctx.email);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.email.invalid);
    } }, directives: [MatFormField, MatLabel, MatInput, DefaultValueAccessor, RequiredValidator, NgControlStatus, FormControlDirective, NgIf, MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldErrorExample, [{
        type: Component,
        args: [{
                selector: 'form-field-error-example',
                templateUrl: 'form-field-error-example.html',
                styleUrls: ['form-field-error-example.css'],
            }]
    }], null, null); })();

/** @title Form field with hints */
class FormFieldHintExample {
}
FormFieldHintExample.ɵfac = function FormFieldHintExample_Factory(t) { return new (t || FormFieldHintExample)(); };
FormFieldHintExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldHintExample, selectors: [["form-field-hint-example"]], decls: 16, vars: 1, consts: [[1, "example-container"], ["hintLabel", "Max 10 characters", "appearance", "fill"], ["matInput", "", "maxlength", "10", "placeholder", "Ex. Nougat"], ["input", ""], ["align", "end"], ["appearance", "fill"], ["value", "option"]], template: function FormFieldHintExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Enter some input");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2, 3);
        ɵɵelementStart(6, "mat-hint", 4);
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-form-field", 5);
        ɵɵelementStart(9, "mat-label");
        ɵɵtext(10, "Select me");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-select");
        ɵɵelementStart(12, "mat-option", 6);
        ɵɵtext(13, "Option");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-hint", 4);
        ɵɵtext(15, "Here's the dropdown arrow ^");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(5);
        ɵɵadvance(7);
        ɵɵtextInterpolate1("", (_r0.value == null ? null : _r0.value.length) || 0, "/10");
    } }, directives: [MatFormField, MatLabel, MatInput, MatHint, MatSelect, MatOption], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldHintExample, [{
        type: Component,
        args: [{
                selector: 'form-field-hint-example',
                templateUrl: 'form-field-hint-example.html',
                styleUrls: ['form-field-hint-example.css'],
            }]
    }], null, null); })();

/** @title Form field with label */
class FormFieldLabelExample {
    constructor(fb) {
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
}
FormFieldLabelExample.ɵfac = function FormFieldLabelExample_Factory(t) { return new (t || FormFieldLabelExample)(ɵɵdirectiveInject(FormBuilder)); };
FormFieldLabelExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 31, vars: 8, consts: [[1, "example-container"], [3, "formGroup"], [3, "formControl"], ["value", "auto"], ["value", "always"], ["appearance", "fill", 3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], ["appearance", "fill", 3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "form", 1);
        ɵɵelementStart(2, "mat-checkbox", 2);
        ɵɵtext(3, "Hide required marker");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵelementStart(5, "label");
        ɵɵtext(6, "Float label: ");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-radio-group", 2);
        ɵɵelementStart(8, "mat-radio-button", 3);
        ɵɵtext(9, "Auto");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-radio-button", 4);
        ɵɵtext(11, "Always");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-form-field", 5);
        ɵɵelement(13, "input", 6);
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-form-field", 7);
        ɵɵelementStart(15, "mat-label");
        ɵɵtext(16, "Both a label and a placeholder");
        ɵɵelementEnd();
        ɵɵelement(17, "input", 8);
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-form-field", 5);
        ɵɵelementStart(19, "mat-select", 9);
        ɵɵelementStart(20, "mat-option");
        ɵɵtext(21, "-- None --");
        ɵɵelementEnd();
        ɵɵelementStart(22, "mat-option", 10);
        ɵɵtext(23, "Option");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(24, "mat-label");
        ɵɵelementStart(25, "mat-icon");
        ɵɵtext(26, "favorite");
        ɵɵelementEnd();
        ɵɵelementStart(27, "b");
        ɵɵtext(28, " Fancy");
        ɵɵelementEnd();
        ɵɵelementStart(29, "i");
        ɵɵtext(30, " label");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.options);
        ɵɵadvance(1);
        ɵɵproperty("formControl", ctx.hideRequiredControl);
        ɵɵadvance(5);
        ɵɵproperty("formControl", ctx.floatLabelControl);
        ɵɵadvance(5);
        ɵɵproperty("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", ctx.floatLabelControl.value);
        ɵɵadvance(2);
        ɵɵproperty("floatLabel", ctx.floatLabelControl.value);
        ɵɵadvance(4);
        ɵɵproperty("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", ctx.floatLabelControl.value);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatCheckbox, NgControlStatus, FormControlDirective, MatRadioGroup, MatRadioButton, MatFormField, MatInput, MatLabel, MatSelect, MatOption, MatIcon], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

/** @title Simple form field */
class FormFieldOverviewExample {
}
FormFieldOverviewExample.ɵfac = function FormFieldOverviewExample_Factory(t) { return new (t || FormFieldOverviewExample)(); };
FormFieldOverviewExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldOverviewExample, selectors: [["form-field-overview-example"]], decls: 16, vars: 0, consts: [["appearance", "fill"], ["matInput", ""], ["value", "one"], ["value", "two"]], template: function FormFieldOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Input");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-form-field", 0);
        ɵɵelementStart(5, "mat-label");
        ɵɵtext(6, "Select");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-select");
        ɵɵelementStart(8, "mat-option", 2);
        ɵɵtext(9, "First option");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-option", 3);
        ɵɵtext(11, "Second option");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-form-field", 0);
        ɵɵelementStart(13, "mat-label");
        ɵɵtext(14, "Textarea");
        ɵɵelementEnd();
        ɵɵelement(15, "textarea", 1);
        ɵɵelementEnd();
    } }, directives: [MatFormField, MatLabel, MatInput, MatSelect, MatOption], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldOverviewExample, [{
        type: Component,
        args: [{
                selector: 'form-field-overview-example',
                templateUrl: 'form-field-overview-example.html',
                styleUrls: ['form-field-overview-example.css']
            }]
    }], null, null); })();

/** @title Form field with prefix & suffix */
class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = true;
    }
}
FormFieldPrefixSuffixExample.ɵfac = function FormFieldPrefixSuffixExample_Factory(t) { return new (t || FormFieldPrefixSuffixExample)(); };
FormFieldPrefixSuffixExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldPrefixSuffixExample, selectors: [["form-field-prefix-suffix-example"]], decls: 16, vars: 4, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "type", "number", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""]], template: function FormFieldPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Enter your password");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2);
        ɵɵelementStart(5, "button", 3);
        ɵɵlistener("click", function FormFieldPrefixSuffixExample_Template_button_click_5_listener() { return ctx.hide = !ctx.hide; });
        ɵɵelementStart(6, "mat-icon");
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-form-field", 1);
        ɵɵelementStart(9, "mat-label");
        ɵɵtext(10, "Amount");
        ɵɵelementEnd();
        ɵɵelement(11, "input", 4);
        ɵɵelementStart(12, "span", 5);
        ɵɵtext(13, "$\u00A0");
        ɵɵelementEnd();
        ɵɵelementStart(14, "span", 6);
        ɵɵtext(15, ".00");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("type", ctx.hide ? "password" : "text");
        ɵɵadvance(1);
        ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hide);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [MatFormField, MatLabel, MatInput, MatButton, MatSuffix, MatIcon, MatPrefix], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'form-field-prefix-suffix-example',
                templateUrl: 'form-field-prefix-suffix-example.html',
                styleUrls: ['form-field-prefix-suffix-example.css'],
            }]
    }], null, null); })();

function FormFieldThemingExample_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "Min size: 10px");
    ɵɵelementEnd();
} }
/** @title Form field theming */
class FormFieldThemingExample {
    constructor(fb) {
        this.colorControl = new FormControl('primary');
        this.fontSizeControl = new FormControl(16, Validators.min(10));
        this.options = fb.group({
            color: this.colorControl,
            fontSize: this.fontSizeControl,
        });
    }
    getFontSize() {
        return Math.max(10, this.fontSizeControl.value);
    }
}
FormFieldThemingExample.ɵfac = function FormFieldThemingExample_Factory(t) { return new (t || FormFieldThemingExample)(ɵɵdirectiveInject(FormBuilder)); };
FormFieldThemingExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 18, vars: 8, consts: [[1, "example-container", 3, "formGroup"], ["appearance", "fill", 3, "color"], [3, "formControl"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Ex. 12", "min", "10", 3, "formControl"], ["matSuffix", ""], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Color");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-select", 2);
        ɵɵelementStart(5, "mat-option", 3);
        ɵɵtext(6, "Primary");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-option", 4);
        ɵɵtext(8, "Accent");
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-option", 5);
        ɵɵtext(10, "Warn");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-form-field", 1);
        ɵɵelementStart(12, "mat-label");
        ɵɵtext(13, "Font size");
        ɵɵelementEnd();
        ɵɵelement(14, "input", 6);
        ɵɵelementStart(15, "span", 7);
        ɵɵtext(16, "px");
        ɵɵelementEnd();
        ɵɵtemplate(17, FormFieldThemingExample_mat_error_17_Template, 2, 0, "mat-error", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
        ɵɵproperty("formGroup", ctx.options);
        ɵɵadvance(1);
        ɵɵproperty("color", ctx.colorControl.value);
        ɵɵadvance(3);
        ɵɵproperty("formControl", ctx.colorControl);
        ɵɵadvance(7);
        ɵɵproperty("color", ctx.colorControl.value);
        ɵɵadvance(3);
        ɵɵproperty("formControl", ctx.fontSizeControl);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.fontSizeControl.invalid);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlDirective, MatOption, MatInput, NumberValueAccessor, DefaultValueAccessor, MatSuffix, NgIf, MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

/**
 * @title Testing with MatFormFieldHarness
 */
class FormFieldHarnessExample {
    constructor() {
        this.requiredControl = new FormControl('Initial value', [Validators.required]);
    }
}
FormFieldHarnessExample.ɵfac = function FormFieldHarnessExample_Factory(t) { return new (t || FormFieldHarnessExample)(); };
FormFieldHarnessExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldHarnessExample, selectors: [["form-field-harness-example"]], decls: 8, vars: 1, consts: [["id", "with-errors"], [1, "custom-control"], ["matInput", "", 3, "formControl"], ["align", "start"]], template: function FormFieldHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵtext(2, "Custom control harness");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 2);
        ɵɵelementStart(4, "mat-error");
        ɵɵtext(5, "Error");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-hint", 3);
        ɵɵtext(7, "Hint");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("formControl", ctx.requiredControl);
    } }, directives: [MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatError, MatHint], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldHarnessExample, [{
        type: Component,
        args: [{
                selector: 'form-field-harness-example',
                templateUrl: 'form-field-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    FormFieldErrorExample,
    FormFieldHarnessExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
];
class FormFieldExamplesModule {
}
FormFieldExamplesModule.ɵmod = ɵɵdefineNgModule({ type: FormFieldExamplesModule });
FormFieldExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function FormFieldExamplesModule_Factory(t) { return new (t || FormFieldExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormFieldExamplesModule, { declarations: [FormFieldAppearanceExample,
        FormFieldCustomControlExample,
        FormFieldErrorExample,
        FormFieldHarnessExample,
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample, MyTelInput], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        ReactiveFormsModule], exports: [FormFieldAppearanceExample,
        FormFieldCustomControlExample,
        FormFieldErrorExample,
        FormFieldHarnessExample,
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldExamplesModule, [{
        type: NgModule,
        args: [{
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldExamplesModule, FormFieldHarnessExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput };
//# sourceMappingURL=form-field.js.map
