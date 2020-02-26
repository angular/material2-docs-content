(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material-experimental/mdc-form-field'), require('@angular/material/icon'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/mdc-form-field', ['exports', 'tslib', '@angular/common', '@angular/core', '@angular/forms', '@angular/material-experimental/mdc-form-field', '@angular/material/icon', '@angular/cdk/a11y', '@angular/cdk/coercion', 'rxjs'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.mdcFormField = {}), global.tslib, global.ng.common, global.ng.core, global.ng.forms, global.ng.materialExperimental.mdcFormField, global.ng.material.icon, global.ng.cdk.a11y, global.ng.cdk.coercion, global.rxjs));
}(this, (function (exports, tslib, common, i0, i3, i1, i2, i4, coercion, rxjs) { 'use strict';

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
        FormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Phone number");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "example-tel-input", 0);
                i0.ɵɵelementStart(4, "mat-icon", 1);
                i0.ɵɵtext(5, "phone");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-hint");
                i0.ɵɵtext(7, "Include area code");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: function () { return [i1.MatFormField, i1.MatLabel, MyTelInput, i2.MatIcon, i1.MatSuffix, i1.MatHint]; }, styles: [""] });
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
            this.onChange(this.value);
        };
        MyTelInput.nextId = 0;
        MyTelInput.decorators = [
            { type: i0.Component, args: [{
                        selector: 'example-tel-input',
                        templateUrl: 'example-tel-input-example.html',
                        styleUrls: ['example-tel-input-example.css'],
                        providers: [{ provide: i1.MatFormFieldControl, useExisting: MyTelInput }],
                        host: {
                            '[class.example-floating]': 'shouldLabelFloat',
                            '[id]': 'id',
                            '[attr.aria-describedby]': 'describedBy',
                        }
                    },] },
        ];
        /** @nocollapse */
        MyTelInput.ctorParameters = function () { return [
            { type: i3.FormBuilder },
            { type: i4.FocusMonitor },
            { type: i0.ElementRef },
            { type: i3.NgControl, decorators: [{ type: i0.Optional }, { type: i0.Self }] }
        ]; };
        MyTelInput.propDecorators = {
            placeholder: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.NgControl, 10)); };
        MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostVars: 4, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
                i0.ɵɵhostProperty("id", ctx.id);
                i0.ɵɵattribute("aria-describedby", ctx.describedBy);
                i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
            } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: i1.MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 1, consts: [[1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
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
            } }, directives: [i3.NgControlStatusGroup, i3.FormGroupDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
        return MyTelInput;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyTelInput, [{
            type: i0.Component,
            args: [{
                    selector: 'example-tel-input',
                    templateUrl: 'example-tel-input-example.html',
                    styleUrls: ['example-tel-input-example.css'],
                    providers: [{ provide: i1.MatFormFieldControl, useExisting: MyTelInput }],
                    host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                        '[attr.aria-describedby]': 'describedBy',
                    }
                }]
        }], function () { return [{ type: i3.FormBuilder }, { type: i4.FocusMonitor }, { type: i0.ElementRef }, { type: i3.NgControl, decorators: [{
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

    var EXAMPLES = [
        FormFieldCustomControlExample,
    ];
    var MdcFormFieldExamplesModule = /** @class */ (function () {
        function MdcFormFieldExamplesModule() {
        }
        MdcFormFieldExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i1.MatFormFieldModule,
                            i2.MatIconModule,
                            i3.ReactiveFormsModule,
                        ],
                        declarations: tslib.__spread(EXAMPLES, [MyTelInput]),
                        exports: tslib.__spread(EXAMPLES, [MyTelInput]),
                        entryComponents: EXAMPLES,
                    },] },
        ];
        MdcFormFieldExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MdcFormFieldExamplesModule });
        MdcFormFieldExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MdcFormFieldExamplesModule_Factory(t) { return new (t || MdcFormFieldExamplesModule)(); }, imports: [[
                    common.CommonModule,
                    i1.MatFormFieldModule,
                    i2.MatIconModule,
                    i3.ReactiveFormsModule,
                ]] });
        return MdcFormFieldExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdcFormFieldExamplesModule, { declarations: [FormFieldCustomControlExample,
            MyTelInput], imports: [common.CommonModule,
            i1.MatFormFieldModule,
            i2.MatIconModule,
            i3.ReactiveFormsModule], exports: [FormFieldCustomControlExample,
            MyTelInput] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MdcFormFieldExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        i1.MatFormFieldModule,
                        i2.MatIconModule,
                        i3.ReactiveFormsModule,
                    ],
                    declarations: tslib.__spread(EXAMPLES, [MyTelInput]),
                    exports: tslib.__spread(EXAMPLES, [MyTelInput]),
                    entryComponents: EXAMPLES,
                }]
        }], null, null); })();

    exports.FormFieldCustomControlExample = FormFieldCustomControlExample;
    exports.MdcFormFieldExamplesModule = MdcFormFieldExamplesModule;
    exports.MyTelInput = MyTelInput;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-mdc-form-field.umd.js.map
