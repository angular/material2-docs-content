import { __spread } from 'tslib';
import { NgIf, CommonModule } from '@angular/common';
import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, ElementRef, Optional, Self, Input, ɵɵdirectiveInject, ɵɵhostProperty, ɵɵattribute, ɵɵclassProp, ɵɵProvidersFeature, ɵɵlistener, ɵɵproperty, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵreference, ɵɵtextInterpolate1, ɵɵstyleProp, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormBuilder, NgControl, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, FormControl, Validators, RequiredValidator, FormControlDirective, ɵangular_packages_forms_forms_y, NumberValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatLabel, MatSuffix, MatHint, MatFormFieldControl, MatError, MatPrefix, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { MatOption } from '@angular/material/core';

/** @title Form field appearance variants */
var FormFieldAppearanceExample = /** @class */ (function () {
    function FormFieldAppearanceExample() {
    }
    FormFieldAppearanceExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-appearance-example',
                    templateUrl: 'form-field-appearance-example.html',
                    styleUrls: ['form-field-appearance-example.css'],
                },] },
    ];
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
        } }, directives: [MatFormField, MatLabel, MatInput, MatIcon, MatSuffix, MatHint], styles: [""] });
    return FormFieldAppearanceExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldAppearanceExample, [{
        type: Component,
        args: [{
                selector: 'form-field-appearance-example',
                templateUrl: 'form-field-appearance-example.html',
                styleUrls: ['form-field-appearance-example.css'],
            }]
    }], null, null); })();

/** @title Form field with custom telephone number input control. */
var FormFieldCustomControlExample = /** @class */ (function () {
    function FormFieldCustomControlExample() {
    }
    FormFieldCustomControlExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-custom-control-example',
                    templateUrl: 'form-field-custom-control-example.html',
                    styleUrls: ['form-field-custom-control-example.css'],
                },] },
    ];
    FormFieldCustomControlExample.ɵfac = function FormFieldCustomControlExample_Factory(t) { return new (t || FormFieldCustomControlExample)(); };
    FormFieldCustomControlExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["appearance", "fill"], ["required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Phone number");
            ɵɵelementEnd();
            ɵɵelement(3, "example-tel-input", 1);
            ɵɵelementStart(4, "mat-icon", 2);
            ɵɵtext(5, "phone");
            ɵɵelementEnd();
            ɵɵelementStart(6, "mat-hint");
            ɵɵtext(7, "Include area code");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: function () { return [MatFormField, MatLabel, MyTelInput, MatIcon, MatSuffix, MatHint]; }, styles: [""] });
    return FormFieldCustomControlExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldCustomControlExample, [{
        type: Component,
        args: [{
                selector: 'form-field-custom-control-example',
                templateUrl: 'form-field-custom-control-example.html',
                styleUrls: ['form-field-custom-control-example.css'],
            }]
    }], null, null); })();
/** Data structure for holding telephone number. */
var MyTel = /** @class */ (function () {
    function MyTel(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
    return MyTel;
}());
/** Custom `MatFormFieldControl` for telephone number input. */
var MyTelInput = /** @class */ (function () {
    function MyTelInput(formBuilder, _focusMonitor, _elementRef, ngControl) {
        var _this = this;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = "example-tel-input-" + MyTelInput.nextId++;
        this.describedBy = '';
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._required = false;
        this._disabled = false;
        this.parts = formBuilder.group({
            area: '',
            exchange: '',
            subscriber: '',
        });
        _focusMonitor.monitor(_elementRef, true).subscribe(function (origin) {
            if (_this.focused && !origin) {
                _this.onTouched();
            }
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(MyTelInput.prototype, "empty", {
        get: function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            return !area && !exchange && !subscriber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "shouldLabelFloat", {
        get: function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._disabled ? this.parts.disable() : this.parts.enable();
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "value", {
        get: function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
                return new MyTel(area, exchange, subscriber);
            }
            return null;
        },
        set: function (tel) {
            var _a = tel || new MyTel('', '', ''), area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            this.parts.setValue({ area: area, exchange: exchange, subscriber: subscriber });
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    MyTelInput.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    MyTelInput.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    MyTelInput.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() != 'input') {
            this._elementRef.nativeElement.querySelector('input').focus();
        }
    };
    MyTelInput.prototype.writeValue = function (tel) {
        this.value = tel;
    };
    MyTelInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MyTelInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    MyTelInput.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MyTelInput.prototype._handleInput = function () {
        this.onChange(this.parts.value);
    };
    MyTelInput.nextId = 0;
    MyTelInput.decorators = [
        { type: Component, args: [{
                    selector: 'example-tel-input',
                    templateUrl: 'example-tel-input-example.html',
                    styleUrls: ['example-tel-input-example.css'],
                    providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                    host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                        '[attr.aria-describedby]': 'describedBy',
                    }
                },] },
    ];
    /** @nocollapse */
    MyTelInput.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: FocusMonitor },
        { type: ElementRef },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    MyTelInput.propDecorators = {
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }]
    };
    MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgControl, 10)); };
    MyTelInput.ɵcmp = ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostVars: 4, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵhostProperty("id", ctx.id);
            ɵɵattribute("aria-describedby", ctx.describedBy);
            ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
        } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [ɵɵProvidersFeature([{ provide: MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 1, consts: [[1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "input", 1);
            ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener($event) { return ctx._handleInput(); });
            ɵɵelementEnd();
            ɵɵelementStart(2, "span", 2);
            ɵɵtext(3, "\u2013");
            ɵɵelementEnd();
            ɵɵelementStart(4, "input", 3);
            ɵɵlistener("input", function MyTelInput_Template_input_input_4_listener($event) { return ctx._handleInput(); });
            ɵɵelementEnd();
            ɵɵelementStart(5, "span", 2);
            ɵɵtext(6, "\u2013");
            ɵɵelementEnd();
            ɵɵelementStart(7, "input", 4);
            ɵɵlistener("input", function MyTelInput_Template_input_input_7_listener($event) { return ctx._handleInput(); });
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("formGroup", ctx.parts);
        } }, directives: [NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
    return MyTelInput;
}());
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
                    '[attr.aria-describedby]': 'describedBy',
                }
            }]
    }], function () { return [{ type: FormBuilder }, { type: FocusMonitor }, { type: ElementRef }, { type: NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { placeholder: [{
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
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.getErrorMessage());
} }
/** @title Form field with error messages */
var FormFieldErrorExample = /** @class */ (function () {
    function FormFieldErrorExample() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    FormFieldErrorExample.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormFieldErrorExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-error-example',
                    templateUrl: 'form-field-error-example.html',
                    styleUrls: ['form-field-error-example.css'],
                },] },
    ];
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
    return FormFieldErrorExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldErrorExample, [{
        type: Component,
        args: [{
                selector: 'form-field-error-example',
                templateUrl: 'form-field-error-example.html',
                styleUrls: ['form-field-error-example.css'],
            }]
    }], null, null); })();

/** @title Form field with hints */
var FormFieldHintExample = /** @class */ (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-hint-example',
                    templateUrl: 'form-field-hint-example.html',
                    styleUrls: ['form-field-hint-example.css'],
                },] },
    ];
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
            var _r1 = ɵɵreference(5);
            ɵɵadvance(7);
            ɵɵtextInterpolate1("", (_r1.value == null ? null : _r1.value.length) || 0, "/10");
        } }, directives: [MatFormField, MatLabel, MatInput, MatHint, MatSelect, MatOption], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return FormFieldHintExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldHintExample, [{
        type: Component,
        args: [{
                selector: 'form-field-hint-example',
                templateUrl: 'form-field-hint-example.html',
                styleUrls: ['form-field-hint-example.css'],
            }]
    }], null, null); })();

/** @title Form field with label */
var FormFieldLabelExample = /** @class */ (function () {
    function FormFieldLabelExample(fb) {
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
    FormFieldLabelExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-label-example',
                    templateUrl: 'form-field-label-example.html',
                    styleUrls: ['form-field-label-example.css'],
                },] },
    ];
    /** @nocollapse */
    FormFieldLabelExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
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
    return FormFieldLabelExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldLabelExample, [{
        type: Component,
        args: [{
                selector: 'form-field-label-example',
                templateUrl: 'form-field-label-example.html',
                styleUrls: ['form-field-label-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

/** @title Simple form field */
var FormFieldOverviewExample = /** @class */ (function () {
    function FormFieldOverviewExample() {
    }
    FormFieldOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-overview-example',
                    templateUrl: 'form-field-overview-example.html',
                    styleUrls: ['form-field-overview-example.css'],
                },] },
    ];
    FormFieldOverviewExample.ɵfac = function FormFieldOverviewExample_Factory(t) { return new (t || FormFieldOverviewExample)(); };
    FormFieldOverviewExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldOverviewExample, selectors: [["form-field-overview-example"]], decls: 17, vars: 0, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", ""], ["value", "option"]], template: function FormFieldOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "Input");
            ɵɵelementEnd();
            ɵɵelement(4, "input", 2);
            ɵɵelementEnd();
            ɵɵelement(5, "br");
            ɵɵelementStart(6, "mat-form-field", 1);
            ɵɵelementStart(7, "mat-label");
            ɵɵtext(8, "Select");
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-select");
            ɵɵelementStart(10, "mat-option", 3);
            ɵɵtext(11, "Option");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(12, "br");
            ɵɵelementStart(13, "mat-form-field", 1);
            ɵɵelementStart(14, "mat-label");
            ɵɵtext(15, "Textarea");
            ɵɵelementEnd();
            ɵɵelement(16, "textarea", 2);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatFormField, MatLabel, MatInput, MatSelect, MatOption], styles: [""] });
    return FormFieldOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldOverviewExample, [{
        type: Component,
        args: [{
                selector: 'form-field-overview-example',
                templateUrl: 'form-field-overview-example.html',
                styleUrls: ['form-field-overview-example.css'],
            }]
    }], null, null); })();

/** @title Form field with prefix & suffix */
var FormFieldPrefixSuffixExample = /** @class */ (function () {
    function FormFieldPrefixSuffixExample() {
        this.hide = true;
    }
    FormFieldPrefixSuffixExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-prefix-suffix-example',
                    templateUrl: 'form-field-prefix-suffix-example.html',
                    styleUrls: ['form-field-prefix-suffix-example.css'],
                },] },
    ];
    FormFieldPrefixSuffixExample.ɵfac = function FormFieldPrefixSuffixExample_Factory(t) { return new (t || FormFieldPrefixSuffixExample)(); };
    FormFieldPrefixSuffixExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldPrefixSuffixExample, selectors: [["form-field-prefix-suffix-example"]], decls: 16, vars: 4, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "type", "number", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""]], template: function FormFieldPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "Enter your password");
            ɵɵelementEnd();
            ɵɵelement(4, "input", 2);
            ɵɵelementStart(5, "button", 3);
            ɵɵlistener("click", function FormFieldPrefixSuffixExample_Template_button_click_5_listener($event) { return ctx.hide = !ctx.hide; });
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
    return FormFieldPrefixSuffixExample;
}());
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
var FormFieldThemingExample = /** @class */ (function () {
    function FormFieldThemingExample(fb) {
        this.colorControl = new FormControl('primary');
        this.fontSizeControl = new FormControl(16, Validators.min(10));
        this.options = fb.group({
            color: this.colorControl,
            fontSize: this.fontSizeControl,
        });
    }
    FormFieldThemingExample.prototype.getFontSize = function () {
        return Math.max(10, this.fontSizeControl.value);
    };
    FormFieldThemingExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-theming-example',
                    templateUrl: 'form-field-theming-example.html',
                    styleUrls: ['form-field-theming-example.css'],
                },] },
    ];
    /** @nocollapse */
    FormFieldThemingExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
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
    return FormFieldThemingExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormFieldThemingExample, [{
        type: Component,
        args: [{
                selector: 'form-field-theming-example',
                templateUrl: 'form-field-theming-example.html',
                styleUrls: ['form-field-theming-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

var EXAMPLES = [
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
];
var FormFieldExamplesModule = /** @class */ (function () {
    function FormFieldExamplesModule() {
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
                    declarations: __spread(EXAMPLES, [MyTelInput]),
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
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
    return FormFieldExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormFieldExamplesModule, { declarations: [FormFieldAppearanceExample,
        FormFieldCustomControlExample,
        FormFieldErrorExample,
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample,
        MyTelInput], imports: [CommonModule,
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
                declarations: __spread(EXAMPLES, [MyTelInput]),
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldExamplesModule, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput };
//# sourceMappingURL=form-field.js.map
