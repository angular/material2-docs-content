import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, ElementRef, Optional, Self, Input, ɵɵdirectiveInject, ɵɵhostProperty, ɵɵattribute, ɵɵclassProp, ɵɵProvidersFeature, ɵɵlistener, ɵɵproperty, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormBuilder, NgControl, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatSuffix, MatHint, MatFormFieldControl, MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';

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
    FormFieldCustomControlExample.ɵcmp = ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field");
            ɵɵelementStart(1, "mat-label");
            ɵɵtext(2, "Phone number");
            ɵɵelementEnd();
            ɵɵelement(3, "example-tel-input", 0);
            ɵɵelementStart(4, "mat-icon", 1);
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

var EXAMPLES = [
    FormFieldCustomControlExample,
];
var MdcFormFieldExamplesModule = /** @class */ (function () {
    function MdcFormFieldExamplesModule() {
    }
    MdcFormFieldExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatFormFieldModule,
                        MatIconModule,
                        ReactiveFormsModule,
                    ],
                    declarations: __spread(EXAMPLES, [MyTelInput]),
                    exports: __spread(EXAMPLES, [MyTelInput]),
                    entryComponents: EXAMPLES,
                },] },
    ];
    MdcFormFieldExamplesModule.ɵmod = ɵɵdefineNgModule({ type: MdcFormFieldExamplesModule });
    MdcFormFieldExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function MdcFormFieldExamplesModule_Factory(t) { return new (t || MdcFormFieldExamplesModule)(); }, imports: [[
                CommonModule,
                MatFormFieldModule,
                MatIconModule,
                ReactiveFormsModule,
            ]] });
    return MdcFormFieldExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MdcFormFieldExamplesModule, { declarations: [FormFieldCustomControlExample,
        MyTelInput], imports: [CommonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule], exports: [FormFieldCustomControlExample,
        MyTelInput] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MdcFormFieldExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatFormFieldModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ],
                declarations: __spread(EXAMPLES, [MyTelInput]),
                exports: __spread(EXAMPLES, [MyTelInput]),
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { FormFieldCustomControlExample, MdcFormFieldExamplesModule, MyTelInput };
//# sourceMappingURL=mdc-form-field.js.map
