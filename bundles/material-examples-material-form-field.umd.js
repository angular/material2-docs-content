(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/form-field', ['exports', 'tslib', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/radio', '@angular/material/select', '@angular/cdk/a11y', '@angular/cdk/coercion', 'rxjs'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.formField = {}), global.tslib, global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.radio, global.ng.material.select, global.ng.cdk.a11y, global.ng.cdk.coercion, global.rxjs));
}(this, function (exports, tslib_1, common, core, forms, button, checkbox, formField, icon, input, radio, select, a11y, coercion, rxjs) { 'use strict';

    /** @title Form field appearance variants */
    var FormFieldAppearanceExample = /** @class */ (function () {
        function FormFieldAppearanceExample() {
        }
        FormFieldAppearanceExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-appearance-example',
                        template: "<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return FormFieldAppearanceExample;
    }());

    /** @title Form field with custom telephone number input control. */
    var FormFieldCustomControlExample = /** @class */ (function () {
        function FormFieldCustomControlExample() {
        }
        FormFieldCustomControlExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-custom-control-example',
                        template: "<mat-form-field>\n  <example-tel-input placeholder=\"Phone number\" required></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return FormFieldCustomControlExample;
    }());
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
            { type: core.Component, args: [{
                        selector: 'example-tel-input',
                        template: "<div [formGroup]=\"parts\" class=\"example-tel-input-container\">\n  <input class=\"example-tel-input-element\" formControlName=\"area\" size=\"3\" aria-label=\"Area code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"exchange\" size=\"3\" aria-label=\"Exchange code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"subscriber\" size=\"4\" aria-label=\"Subscriber number\" (input)=\"_handleInput()\">\n</div>\n",
                        providers: [{ provide: formField.MatFormFieldControl, useExisting: MyTelInput }],
                        host: {
                            '[class.example-floating]': 'shouldLabelFloat',
                            '[id]': 'id',
                            '[attr.aria-describedby]': 'describedBy',
                        },
                        styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        MyTelInput.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: a11y.FocusMonitor },
            { type: core.ElementRef },
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
        ]; };
        MyTelInput.propDecorators = {
            placeholder: [{ type: core.Input }],
            required: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return MyTelInput;
    }());

    /** @title Form field with error messages */
    var FormFieldErrorExample = /** @class */ (function () {
        function FormFieldErrorExample() {
            this.email = new forms.FormControl('', [forms.Validators.required, forms.Validators.email]);
        }
        FormFieldErrorExample.prototype.getErrorMessage = function () {
            return this.email.hasError('required') ? 'You must enter a value' :
                this.email.hasError('email') ? 'Not a valid email' :
                    '';
        };
        FormFieldErrorExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-error-example',
                        template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>\n",
                        styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return FormFieldErrorExample;
    }());

    /** @title Form field with hints */
    var FormFieldHintExample = /** @class */ (function () {
        function FormFieldHintExample() {
        }
        FormFieldHintExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-hint-example',
                        template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n",
                        styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return FormFieldHintExample;
    }());

    /** @title Form field with label */
    var FormFieldLabelExample = /** @class */ (function () {
        function FormFieldLabelExample(fb) {
            this.options = fb.group({
                hideRequired: false,
                floatLabel: 'auto',
            });
        }
        FormFieldLabelExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-label-example',
                        template: "<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n  </mat-form-field>\n</div>\n",
                        styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        FormFieldLabelExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return FormFieldLabelExample;
    }());

    /** @title Simple form field */
    var FormFieldOverviewExample = /** @class */ (function () {
        function FormFieldOverviewExample() {
        }
        FormFieldOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-overview-example',
                        template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n",
                        styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
                    }] }
        ];
        return FormFieldOverviewExample;
    }());

    /** @title Form field with prefix & suffix */
    var FormFieldPrefixSuffixExample = /** @class */ (function () {
        function FormFieldPrefixSuffixExample() {
            this.hide = true;
        }
        FormFieldPrefixSuffixExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-prefix-suffix-example',
                        template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\n    <span matPrefix>$&nbsp;</span>\n    <span matSuffix>.00</span>\n  </mat-form-field>\n</div>\n",
                        styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"]
                    }] }
        ];
        return FormFieldPrefixSuffixExample;
    }());

    /** @title Form field theming */
    var FormFieldThemingExample = /** @class */ (function () {
        function FormFieldThemingExample(fb) {
            this.options = fb.group({
                color: 'primary',
                fontSize: [16, forms.Validators.min(10)],
            });
        }
        FormFieldThemingExample.prototype.getFontSize = function () {
            return Math.max(10, this.options.value.fontSize);
        };
        FormFieldThemingExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field-theming-example',
                        template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field [color]=\"options.value.color\">\n    <mat-select placeholder=\"Color\" formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field [color]=\"options.value.color\">\n    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\n    <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n",
                        styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        FormFieldThemingExample.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        return FormFieldThemingExample;
    }());

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            checkbox.MatCheckboxModule,
                            formField.MatFormFieldModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            radio.MatRadioModule,
                            select.MatSelectModule,
                            forms.ReactiveFormsModule,
                        ],
                        declarations: tslib_1.__spread(EXAMPLES, [MyTelInput]),
                        exports: EXAMPLES,
                    },] }
        ];
        return FormFieldExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormFieldAppearanceExample = FormFieldAppearanceExample;
    exports.FormFieldCustomControlExample = FormFieldCustomControlExample;
    exports.FormFieldErrorExample = FormFieldErrorExample;
    exports.FormFieldHintExample = FormFieldHintExample;
    exports.FormFieldLabelExample = FormFieldLabelExample;
    exports.FormFieldOverviewExample = FormFieldOverviewExample;
    exports.FormFieldPrefixSuffixExample = FormFieldPrefixSuffixExample;
    exports.FormFieldThemingExample = FormFieldThemingExample;
    exports.MyTelInput = MyTelInput;
    exports.FormFieldExamplesModule = FormFieldExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-form-field.umd.js.map
