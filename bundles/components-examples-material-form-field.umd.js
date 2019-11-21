(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('rxjs'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/form-field', ['exports', 'tslib', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/radio', '@angular/material/select', '@angular/cdk/a11y', '@angular/cdk/coercion', 'rxjs', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.formField = {}), global.tslib, global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.radio, global.ng.material.select, global.ng.cdk.a11y, global.ng.cdk.coercion, global.rxjs, global.ng.material.core));
}(this, (function (exports, tslib, i4, i0, i1, i3, i2, i1$1, i3$1, i2$1, i3$2, i3$3, i4$1, coercion, rxjs, i4$2) { 'use strict';

    /** @title Form field appearance variants */
    var FormFieldAppearanceExample = /** @class */ (function () {
        function FormFieldAppearanceExample() {
        }
        FormFieldAppearanceExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'form-field-appearance-example',
                        templateUrl: 'form-field-appearance-example.html',
                        styleUrls: ['form-field-appearance-example.css'],
                    },] },
        ];
        FormFieldAppearanceExample.ɵfac = function FormFieldAppearanceExample_Factory(t) { return new (t || FormFieldAppearanceExample)(); };
        FormFieldAppearanceExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldAppearanceExample, selectors: [["form-field-appearance-example"]], decls: 36, vars: 0, consts: [["appearance", "legacy"], ["matInput", "", "placeholder", "Placeholder"], ["matSuffix", ""], ["appearance", "standard"], ["appearance", "fill"], ["appearance", "outline"]], template: function FormFieldAppearanceExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵelementStart(1, "mat-form-field", 0);
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "Legacy form field");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 1);
                i0.ɵɵelementStart(5, "mat-icon", 2);
                i0.ɵɵtext(6, "sentiment_very_satisfied");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-hint");
                i0.ɵɵtext(8, "Hint");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "p");
                i0.ɵɵelementStart(10, "mat-form-field", 3);
                i0.ɵɵelementStart(11, "mat-label");
                i0.ɵɵtext(12, "Standard form field");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(13, "input", 1);
                i0.ɵɵelementStart(14, "mat-icon", 2);
                i0.ɵɵtext(15, "sentiment_very_satisfied");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-hint");
                i0.ɵɵtext(17, "Hint");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "p");
                i0.ɵɵelementStart(19, "mat-form-field", 4);
                i0.ɵɵelementStart(20, "mat-label");
                i0.ɵɵtext(21, "Fill form field");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(22, "input", 1);
                i0.ɵɵelementStart(23, "mat-icon", 2);
                i0.ɵɵtext(24, "sentiment_very_satisfied");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "mat-hint");
                i0.ɵɵtext(26, "Hint");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "p");
                i0.ɵɵelementStart(28, "mat-form-field", 5);
                i0.ɵɵelementStart(29, "mat-label");
                i0.ɵɵtext(30, "Outline form field");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(31, "input", 1);
                i0.ɵɵelementStart(32, "mat-icon", 2);
                i0.ɵɵtext(33, "sentiment_very_satisfied");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(34, "mat-hint");
                i0.ɵɵtext(35, "Hint");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatInput, i3$1.MatIcon, i1$1.MatSuffix, i1$1.MatHint], styles: [""] });
        return FormFieldAppearanceExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldAppearanceExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'form-field-custom-control-example',
                        templateUrl: 'form-field-custom-control-example.html',
                        styleUrls: ['form-field-custom-control-example.css'],
                    },] },
        ];
        FormFieldCustomControlExample.ɵfac = function FormFieldCustomControlExample_Factory(t) { return new (t || FormFieldCustomControlExample)(); };
        FormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 6, vars: 0, consts: [["placeholder", "Phone number", "required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "example-tel-input", 0);
                i0.ɵɵelementStart(2, "mat-icon", 1);
                i0.ɵɵtext(3, "phone");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-hint");
                i0.ɵɵtext(5, "Include area code");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: function () { return [i1$1.MatFormField, MyTelInput, i3$1.MatIcon, i1$1.MatSuffix, i1$1.MatHint]; }, styles: [""] });
        return FormFieldCustomControlExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldCustomControlExample, [{
            type: i0.Component,
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
            this.stateChanges = new rxjs.Subject();
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
                this._required = coercion.coerceBooleanProperty(value);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "disabled", {
            get: function () { return this._disabled; },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
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
            { type: i0.Component, args: [{
                        selector: 'example-tel-input',
                        templateUrl: 'example-tel-input-example.html',
                        styleUrls: ['example-tel-input-example.css'],
                        providers: [{ provide: i1$1.MatFormFieldControl, useExisting: MyTelInput }],
                        host: {
                            '[class.example-floating]': 'shouldLabelFloat',
                            '[id]': 'id',
                            '[attr.aria-describedby]': 'describedBy',
                        }
                    },] },
        ];
        /** @nocollapse */
        MyTelInput.ctorParameters = function () { return [
            { type: i1.FormBuilder },
            { type: i4$1.FocusMonitor },
            { type: i0.ElementRef },
            { type: i1.NgControl, decorators: [{ type: i0.Optional }, { type: i0.Self }] }
        ]; };
        MyTelInput.propDecorators = {
            placeholder: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i4$1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NgControl, 10)); };
        MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostBindings: function MyTelInput_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                i0.ɵɵallocHostVars(3);
            } if (rf & 2) {
                i0.ɵɵhostProperty("id", ctx.id);
                i0.ɵɵattribute("aria-describedby", ctx.describedBy);
                i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
            } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: i1$1.MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 1, consts: [[1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "input", 1);
                i0.ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener($event) { return ctx._handleInput(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "span", 2);
                i0.ɵɵtext(3, "\u2013");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "input", 3);
                i0.ɵɵlistener("input", function MyTelInput_Template_input_input_4_listener($event) { return ctx._handleInput(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "span", 2);
                i0.ɵɵtext(6, "\u2013");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "input", 4);
                i0.ɵɵlistener("input", function MyTelInput_Template_input_input_7_listener($event) { return ctx._handleInput(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.parts);
            } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
        return MyTelInput;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyTelInput, [{
            type: i0.Component,
            args: [{
                    selector: 'example-tel-input',
                    templateUrl: 'example-tel-input-example.html',
                    styleUrls: ['example-tel-input-example.css'],
                    providers: [{ provide: i1$1.MatFormFieldControl, useExisting: MyTelInput }],
                    host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                        '[attr.aria-describedby]': 'describedBy',
                    }
                }]
        }], function () { return [{ type: i1.FormBuilder }, { type: i4$1.FocusMonitor }, { type: i0.ElementRef }, { type: i1.NgControl, decorators: [{
                    type: i0.Optional
                }, {
                    type: i0.Self
                }] }]; }, { placeholder: [{
                type: i0.Input
            }], required: [{
                type: i0.Input
            }], disabled: [{
                type: i0.Input
            }], value: [{
                type: i0.Input
            }] }); })();

    function FormFieldErrorExample_mat_error_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.getErrorMessage());
    } }
    /** @title Form field with error messages */
    var FormFieldErrorExample = /** @class */ (function () {
        function FormFieldErrorExample() {
            this.email = new i1.FormControl('', [i1.Validators.required, i1.Validators.email]);
        }
        FormFieldErrorExample.prototype.getErrorMessage = function () {
            return this.email.hasError('required') ? 'You must enter a value' :
                this.email.hasError('email') ? 'Not a valid email' :
                    '';
        };
        FormFieldErrorExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'form-field-error-example',
                        templateUrl: 'form-field-error-example.html',
                        styleUrls: ['form-field-error-example.css'],
                    },] },
        ];
        FormFieldErrorExample.ɵfac = function FormFieldErrorExample_Factory(t) { return new (t || FormFieldErrorExample)(); };
        FormFieldErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldErrorExample, selectors: [["form-field-error-example"]], decls: 4, vars: 2, consts: [[1, "example-container"], ["matInput", "", "placeholder", "Enter your email", "required", "", 3, "formControl"], [4, "ngIf"]], template: function FormFieldErrorExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field");
                i0.ɵɵelement(2, "input", 1);
                i0.ɵɵtemplate(3, FormFieldErrorExample_mat_error_3_Template, 2, 1, "mat-error", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("formControl", ctx.email);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.email.invalid);
            } }, directives: [i1$1.MatFormField, i2$1.MatInput, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.FormControlDirective, i4.NgIf, i1$1.MatError], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return FormFieldErrorExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldErrorExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'form-field-hint-example',
                        templateUrl: 'form-field-hint-example.html',
                        styleUrls: ['form-field-hint-example.css'],
                    },] },
        ];
        FormFieldHintExample.ɵfac = function FormFieldHintExample_Factory(t) { return new (t || FormFieldHintExample)(); };
        FormFieldHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldHintExample, selectors: [["form-field-hint-example"]], decls: 12, vars: 1, consts: [[1, "example-container"], ["hintLabel", "Max 10 characters"], ["matInput", "", "maxlength", "10", "placeholder", "Enter some input"], ["input", ""], ["align", "end"], ["placeholder", "Select me"], ["value", "option"]], template: function FormFieldHintExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelement(2, "input", 2, 3);
                i0.ɵɵelementStart(4, "mat-hint", 4);
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-form-field");
                i0.ɵɵelementStart(7, "mat-select", 5);
                i0.ɵɵelementStart(8, "mat-option", 6);
                i0.ɵɵtext(9, "Option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-hint", 4);
                i0.ɵɵtext(11, "Here's the dropdown arrow ^");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r1 = i0.ɵɵreference(3);
                i0.ɵɵadvance(5);
                i0.ɵɵtextInterpolate1("", (_r1.value == null ? null : _r1.value.length) || 0, "/10");
            } }, directives: [i1$1.MatFormField, i2$1.MatInput, i1$1.MatHint, i3$3.MatSelect, i4$2.MatOption], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return FormFieldHintExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldHintExample, [{
            type: i0.Component,
            args: [{
                    selector: 'form-field-hint-example',
                    templateUrl: 'form-field-hint-example.html',
                    styleUrls: ['form-field-hint-example.css'],
                }]
        }], null, null); })();

    /** @title Form field with label */
    var FormFieldLabelExample = /** @class */ (function () {
        function FormFieldLabelExample(fb) {
            this.options = fb.group({
                hideRequired: false,
                floatLabel: 'auto',
            });
        }
        FormFieldLabelExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'form-field-label-example',
                        templateUrl: 'form-field-label-example.html',
                        styleUrls: ['form-field-label-example.css'],
                    },] },
        ];
        /** @nocollapse */
        FormFieldLabelExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        FormFieldLabelExample.ɵfac = function FormFieldLabelExample_Factory(t) { return new (t || FormFieldLabelExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        FormFieldLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 33, vars: 6, consts: [[1, "example-container"], [1, "example-container", 3, "formGroup"], ["formControlName", "hideRequired"], ["formControlName", "floatLabel"], ["value", "auto"], ["value", "always"], ["value", "never"], [3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], [3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "form", 1);
                i0.ɵɵelementStart(2, "mat-checkbox", 2);
                i0.ɵɵtext(3, "Hide required marker");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵelementStart(5, "label");
                i0.ɵɵtext(6, "Float label: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-radio-group", 3);
                i0.ɵɵelementStart(8, "mat-radio-button", 4);
                i0.ɵɵtext(9, "Auto");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-radio-button", 5);
                i0.ɵɵtext(11, "Always");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-radio-button", 6);
                i0.ɵɵtext(13, "Never");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-form-field", 7);
                i0.ɵɵelement(15, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-form-field", 9);
                i0.ɵɵelementStart(17, "mat-label");
                i0.ɵɵtext(18, "Both a label and a placeholder");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(19, "input", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-form-field", 7);
                i0.ɵɵelementStart(21, "mat-select", 11);
                i0.ɵɵelementStart(22, "mat-option");
                i0.ɵɵtext(23, "-- None --");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "mat-option", 12);
                i0.ɵɵtext(25, "Option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "mat-label");
                i0.ɵɵelementStart(27, "mat-icon");
                i0.ɵɵtext(28, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "b");
                i0.ɵɵtext(30, " Fancy");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "i");
                i0.ɵɵtext(32, " label");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.options);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("hideRequiredMarker", ctx.options.value.hideRequired)("floatLabel", ctx.options.value.floatLabel);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("floatLabel", ctx.options.value.floatLabel);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("hideRequiredMarker", ctx.options.value.hideRequired)("floatLabel", ctx.options.value.floatLabel);
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatCheckbox, i1.NgControlStatus, i1.FormControlName, i3$2.MatRadioGroup, i3$2.MatRadioButton, i1$1.MatFormField, i2$1.MatInput, i1$1.MatLabel, i3$3.MatSelect, i4$2.MatOption, i3$1.MatIcon], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
        return FormFieldLabelExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldLabelExample, [{
            type: i0.Component,
            args: [{
                    selector: 'form-field-label-example',
                    templateUrl: 'form-field-label-example.html',
                    styleUrls: ['form-field-label-example.css'],
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

    /** @title Simple form field */
    var FormFieldOverviewExample = /** @class */ (function () {
        function FormFieldOverviewExample() {
        }
        FormFieldOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'form-field-overview-example',
                        templateUrl: 'form-field-overview-example.html',
                        styleUrls: ['form-field-overview-example.css'],
                    },] },
        ];
        FormFieldOverviewExample.ɵfac = function FormFieldOverviewExample_Factory(t) { return new (t || FormFieldOverviewExample)(); };
        FormFieldOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldOverviewExample, selectors: [["form-field-overview-example"]], decls: 9, vars: 0, consts: [[1, "example-container"], ["matInput", "", "placeholder", "Input"], ["matInput", "", "placeholder", "Textarea"], ["placeholder", "Select"], ["value", "option"]], template: function FormFieldOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field");
                i0.ɵɵelement(2, "input", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field");
                i0.ɵɵelement(4, "textarea", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelementStart(6, "mat-select", 3);
                i0.ɵɵelementStart(7, "mat-option", 4);
                i0.ɵɵtext(8, "Option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$1.MatFormField, i2$1.MatInput, i3$3.MatSelect, i4$2.MatOption], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return FormFieldOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldOverviewExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'form-field-prefix-suffix-example',
                        templateUrl: 'form-field-prefix-suffix-example.html',
                        styleUrls: ['form-field-prefix-suffix-example.css'],
                    },] },
        ];
        FormFieldPrefixSuffixExample.ɵfac = function FormFieldPrefixSuffixExample_Factory(t) { return new (t || FormFieldPrefixSuffixExample)(); };
        FormFieldPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldPrefixSuffixExample, selectors: [["form-field-prefix-suffix-example"]], decls: 12, vars: 4, consts: [[1, "example-container"], ["matInput", "", "placeholder", "Enter your password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Amount", "type", "number", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""]], template: function FormFieldPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field");
                i0.ɵɵelement(2, "input", 1);
                i0.ɵɵelementStart(3, "button", 2);
                i0.ɵɵlistener("click", function FormFieldPrefixSuffixExample_Template_button_click_3_listener($event) { return ctx.hide = !ctx.hide; });
                i0.ɵɵelementStart(4, "mat-icon");
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-form-field");
                i0.ɵɵelement(7, "input", 3);
                i0.ɵɵelementStart(8, "span", 4);
                i0.ɵɵtext(9, "$\u00A0");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "span", 5);
                i0.ɵɵtext(11, ".00");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("type", ctx.hide ? "password" : "text");
                i0.ɵɵadvance(1);
                i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hide);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.hide ? "visibility_off" : "visibility");
            } }, directives: [i1$1.MatFormField, i2$1.MatInput, i3.MatButton, i1$1.MatSuffix, i3$1.MatIcon, i1$1.MatPrefix], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}"] });
        return FormFieldPrefixSuffixExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldPrefixSuffixExample, [{
            type: i0.Component,
            args: [{
                    selector: 'form-field-prefix-suffix-example',
                    templateUrl: 'form-field-prefix-suffix-example.html',
                    styleUrls: ['form-field-prefix-suffix-example.css'],
                }]
        }], null, null); })();

    function FormFieldThemingExample_mat_error_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, "Min size: 10px");
        i0.ɵɵelementEnd();
    } }
    /** @title Form field theming */
    var FormFieldThemingExample = /** @class */ (function () {
        function FormFieldThemingExample(fb) {
            this.options = fb.group({
                color: 'primary',
                fontSize: [16, i1.Validators.min(10)],
            });
        }
        FormFieldThemingExample.prototype.getFontSize = function () {
            return Math.max(10, this.options.value.fontSize);
        };
        FormFieldThemingExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'form-field-theming-example',
                        templateUrl: 'form-field-theming-example.html',
                        styleUrls: ['form-field-theming-example.css'],
                    },] },
        ];
        /** @nocollapse */
        FormFieldThemingExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        FormFieldThemingExample.ɵfac = function FormFieldThemingExample_Factory(t) { return new (t || FormFieldThemingExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        FormFieldThemingExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 12, vars: 5, consts: [[1, "example-container", 3, "formGroup"], [3, "color"], ["placeholder", "Color", "formControlName", "color"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Font size (px)", "formControlName", "fontSize", "min", "10"], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelementStart(2, "mat-select", 2);
                i0.ɵɵelementStart(3, "mat-option", 3);
                i0.ɵɵtext(4, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-option", 4);
                i0.ɵɵtext(6, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-option", 5);
                i0.ɵɵtext(8, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-form-field", 1);
                i0.ɵɵelement(10, "input", 6);
                i0.ɵɵtemplate(11, FormFieldThemingExample_mat_error_11_Template, 2, 0, "mat-error", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var tmp_4_0 = null;
                var currVal_4 = (tmp_4_0 = ctx.options.get("fontSize")) == null ? null : tmp_4_0.invalid;
                i0.ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
                i0.ɵɵproperty("formGroup", ctx.options);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.options.value.color);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("color", ctx.options.value.color);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", currVal_4);
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1$1.MatFormField, i3$3.MatSelect, i1.NgControlStatus, i1.FormControlName, i4$2.MatOption, i2$1.MatInput, i1.NumberValueAccessor, i1.DefaultValueAccessor, i4.NgIf, i1$1.MatError], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return FormFieldThemingExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldThemingExample, [{
            type: i0.Component,
            args: [{
                    selector: 'form-field-theming-example',
                    templateUrl: 'form-field-theming-example.html',
                    styleUrls: ['form-field-theming-example.css'],
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

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
            { type: i0.NgModule, args: [{
                        imports: [
                            i4.CommonModule,
                            i3.MatButtonModule,
                            i2.MatCheckboxModule,
                            i1$1.MatFormFieldModule,
                            i3$1.MatIconModule,
                            i2$1.MatInputModule,
                            i3$2.MatRadioModule,
                            i3$3.MatSelectModule,
                            i1.ReactiveFormsModule,
                        ],
                        declarations: tslib.__spread(EXAMPLES, [MyTelInput]),
                        exports: EXAMPLES,
                    },] },
        ];
        FormFieldExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormFieldExamplesModule });
        FormFieldExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormFieldExamplesModule_Factory(t) { return new (t || FormFieldExamplesModule)(); }, imports: [[
                    i4.CommonModule,
                    i3.MatButtonModule,
                    i2.MatCheckboxModule,
                    i1$1.MatFormFieldModule,
                    i3$1.MatIconModule,
                    i2$1.MatInputModule,
                    i3$2.MatRadioModule,
                    i3$3.MatSelectModule,
                    i1.ReactiveFormsModule,
                ]] });
        return FormFieldExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormFieldExamplesModule, { declarations: [FormFieldAppearanceExample,
            FormFieldCustomControlExample,
            FormFieldErrorExample,
            FormFieldHintExample,
            FormFieldLabelExample,
            FormFieldOverviewExample,
            FormFieldPrefixSuffixExample,
            FormFieldThemingExample,
            MyTelInput], imports: [i4.CommonModule,
            i3.MatButtonModule,
            i2.MatCheckboxModule,
            i1$1.MatFormFieldModule,
            i3$1.MatIconModule,
            i2$1.MatInputModule,
            i3$2.MatRadioModule,
            i3$3.MatSelectModule,
            i1.ReactiveFormsModule], exports: [FormFieldAppearanceExample,
            FormFieldCustomControlExample,
            FormFieldErrorExample,
            FormFieldHintExample,
            FormFieldLabelExample,
            FormFieldOverviewExample,
            FormFieldPrefixSuffixExample,
            FormFieldThemingExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i4.CommonModule,
                        i3.MatButtonModule,
                        i2.MatCheckboxModule,
                        i1$1.MatFormFieldModule,
                        i3$1.MatIconModule,
                        i2$1.MatInputModule,
                        i3$2.MatRadioModule,
                        i3$3.MatSelectModule,
                        i1.ReactiveFormsModule,
                    ],
                    declarations: tslib.__spread(EXAMPLES, [MyTelInput]),
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.FormFieldAppearanceExample = FormFieldAppearanceExample;
    exports.FormFieldCustomControlExample = FormFieldCustomControlExample;
    exports.FormFieldErrorExample = FormFieldErrorExample;
    exports.FormFieldExamplesModule = FormFieldExamplesModule;
    exports.FormFieldHintExample = FormFieldHintExample;
    exports.FormFieldLabelExample = FormFieldLabelExample;
    exports.FormFieldOverviewExample = FormFieldOverviewExample;
    exports.FormFieldPrefixSuffixExample = FormFieldPrefixSuffixExample;
    exports.FormFieldThemingExample = FormFieldThemingExample;
    exports.MyTelInput = MyTelInput;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-form-field.umd.js.map
