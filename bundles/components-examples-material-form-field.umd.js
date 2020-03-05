(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('rxjs'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/form-field', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/radio', '@angular/material/select', '@angular/cdk/a11y', '@angular/cdk/coercion', 'rxjs', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.formField = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.radio, global.ng.material.select, global.ng.cdk.a11y, global.ng.cdk.coercion, global.rxjs, global.ng.material.core));
}(this, (function (exports, i4, i0, i1, i3, i2, i1$1, i3$1, i2$1, i3$2, i3$3, i4$1, coercion, rxjs, i4$2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
        FormFieldCustomControlExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldCustomControlExample, selectors: [["form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["appearance", "fill"], ["required", ""], ["matSuffix", ""]], template: function FormFieldCustomControlExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Phone number");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "example-tel-input", 1);
                i0.ɵɵelementStart(4, "mat-icon", 2);
                i0.ɵɵtext(5, "phone");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-hint");
                i0.ɵɵtext(7, "Include area code");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: function () { return [i1$1.MatFormField, i1$1.MatLabel, MyTelInput, i3$1.MatIcon, i1$1.MatSuffix, i1$1.MatHint]; }, styles: [""] });
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
        MyTelInput.ɵcmp = i0.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostVars: 4, hostBindings: function MyTelInput_HostBindings(rf, ctx) { if (rf & 2) {
                i0.ɵɵhostProperty("id", ctx.id);
                i0.ɵɵattribute("aria-describedby", ctx.describedBy);
                i0.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
            } }, inputs: { placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0.ɵɵProvidersFeature([{ provide: i1$1.MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 1, consts: [[1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "input", 1);
                i0.ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener() { return ctx._handleInput(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "span", 2);
                i0.ɵɵtext(3, "\u2013");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "input", 3);
                i0.ɵɵlistener("input", function MyTelInput_Template_input_input_4_listener() { return ctx._handleInput(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "span", 2);
                i0.ɵɵtext(6, "\u2013");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "input", 4);
                i0.ɵɵlistener("input", function MyTelInput_Template_input_input_7_listener() { return ctx._handleInput(); });
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

    function FormFieldErrorExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
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
            if (this.email.hasError('required')) {
                return 'You must enter a value';
            }
            return this.email.hasError('email') ? 'Not a valid email' : '';
        };
        FormFieldErrorExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'form-field-error-example',
                        templateUrl: 'form-field-error-example.html',
                        styleUrls: ['form-field-error-example.css'],
                    },] },
        ];
        FormFieldErrorExample.ɵfac = function FormFieldErrorExample_Factory(t) { return new (t || FormFieldErrorExample)(); };
        FormFieldErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldErrorExample, selectors: [["form-field-error-example"]], decls: 6, vars: 2, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "required", "", 3, "formControl"], [4, "ngIf"]], template: function FormFieldErrorExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "Enter your email");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 2);
                i0.ɵɵtemplate(5, FormFieldErrorExample_mat_error_5_Template, 2, 1, "mat-error", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("formControl", ctx.email);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.email.invalid);
            } }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatInput, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.FormControlDirective, i4.NgIf, i1$1.MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
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
        FormFieldHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldHintExample, selectors: [["form-field-hint-example"]], decls: 16, vars: 1, consts: [[1, "example-container"], ["hintLabel", "Max 10 characters", "appearance", "fill"], ["matInput", "", "maxlength", "10", "placeholder", "Ex. Nougat"], ["input", ""], ["align", "end"], ["appearance", "fill"], ["value", "option"]], template: function FormFieldHintExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "Enter some input");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 2, 3);
                i0.ɵɵelementStart(6, "mat-hint", 4);
                i0.ɵɵtext(7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-form-field", 5);
                i0.ɵɵelementStart(9, "mat-label");
                i0.ɵɵtext(10, "Select me");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-select");
                i0.ɵɵelementStart(12, "mat-option", 6);
                i0.ɵɵtext(13, "Option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-hint", 4);
                i0.ɵɵtext(15, "Here's the dropdown arrow ^");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r1 = i0.ɵɵreference(5);
                i0.ɵɵadvance(7);
                i0.ɵɵtextInterpolate1("", (_r1.value == null ? null : _r1.value.length) || 0, "/10");
            } }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatInput, i1$1.MatHint, i3$3.MatSelect, i4$2.MatOption], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
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
            this.hideRequiredControl = new i1.FormControl(false);
            this.floatLabelControl = new i1.FormControl('auto');
            this.options = fb.group({
                hideRequired: this.hideRequiredControl,
                floatLabel: this.floatLabelControl,
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
        FormFieldLabelExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldLabelExample, selectors: [["form-field-label-example"]], decls: 31, vars: 8, consts: [[1, "example-container"], [3, "formGroup"], [3, "formControl"], ["value", "auto"], ["value", "always"], ["appearance", "fill", 3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder", "required", ""], ["appearance", "fill", 3, "floatLabel"], ["matInput", "", "placeholder", "Simple placeholder"], ["required", ""], ["value", "option"]], template: function FormFieldLabelExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "form", 1);
                i0.ɵɵelementStart(2, "mat-checkbox", 2);
                i0.ɵɵtext(3, "Hide required marker");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵelementStart(5, "label");
                i0.ɵɵtext(6, "Float label: ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-radio-group", 2);
                i0.ɵɵelementStart(8, "mat-radio-button", 3);
                i0.ɵɵtext(9, "Auto");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-radio-button", 4);
                i0.ɵɵtext(11, "Always");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-form-field", 5);
                i0.ɵɵelement(13, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-form-field", 7);
                i0.ɵɵelementStart(15, "mat-label");
                i0.ɵɵtext(16, "Both a label and a placeholder");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(17, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "mat-form-field", 5);
                i0.ɵɵelementStart(19, "mat-select", 9);
                i0.ɵɵelementStart(20, "mat-option");
                i0.ɵɵtext(21, "-- None --");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "mat-option", 10);
                i0.ɵɵtext(23, "Option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "mat-label");
                i0.ɵɵelementStart(25, "mat-icon");
                i0.ɵɵtext(26, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "b");
                i0.ɵɵtext(28, " Fancy");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "i");
                i0.ɵɵtext(30, " label");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.options);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formControl", ctx.hideRequiredControl);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("formControl", ctx.floatLabelControl);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", ctx.floatLabelControl.value);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("floatLabel", ctx.floatLabelControl.value);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", ctx.floatLabelControl.value);
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatCheckbox, i1.NgControlStatus, i1.FormControlDirective, i3$2.MatRadioGroup, i3$2.MatRadioButton, i1$1.MatFormField, i2$1.MatInput, i1$1.MatLabel, i3$3.MatSelect, i4$2.MatOption, i3$1.MatIcon], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
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
        FormFieldOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldOverviewExample, selectors: [["form-field-overview-example"]], decls: 17, vars: 0, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", ""], ["value", "option"]], template: function FormFieldOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "Input");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(5, "br");
                i0.ɵɵelementStart(6, "mat-form-field", 1);
                i0.ɵɵelementStart(7, "mat-label");
                i0.ɵɵtext(8, "Select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-select");
                i0.ɵɵelementStart(10, "mat-option", 3);
                i0.ɵɵtext(11, "Option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(12, "br");
                i0.ɵɵelementStart(13, "mat-form-field", 1);
                i0.ɵɵelementStart(14, "mat-label");
                i0.ɵɵtext(15, "Textarea");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(16, "textarea", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatInput, i3$3.MatSelect, i4$2.MatOption], styles: [""] });
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
        FormFieldPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldPrefixSuffixExample, selectors: [["form-field-prefix-suffix-example"]], decls: 16, vars: 4, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "type", "number", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""]], template: function FormFieldPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "Enter your password");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 2);
                i0.ɵɵelementStart(5, "button", 3);
                i0.ɵɵlistener("click", function FormFieldPrefixSuffixExample_Template_button_click_5_listener() { return ctx.hide = !ctx.hide; });
                i0.ɵɵelementStart(6, "mat-icon");
                i0.ɵɵtext(7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-form-field", 1);
                i0.ɵɵelementStart(9, "mat-label");
                i0.ɵɵtext(10, "Amount");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(11, "input", 4);
                i0.ɵɵelementStart(12, "span", 5);
                i0.ɵɵtext(13, "$\u00A0");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "span", 6);
                i0.ɵɵtext(15, ".00");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("type", ctx.hide ? "password" : "text");
                i0.ɵɵadvance(1);
                i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hide);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.hide ? "visibility_off" : "visibility");
            } }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2$1.MatInput, i3.MatButton, i1$1.MatSuffix, i3$1.MatIcon, i1$1.MatPrefix], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}"] });
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

    function FormFieldThemingExample_mat_error_17_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, "Min size: 10px");
        i0.ɵɵelementEnd();
    } }
    /** @title Form field theming */
    var FormFieldThemingExample = /** @class */ (function () {
        function FormFieldThemingExample(fb) {
            this.colorControl = new i1.FormControl('primary');
            this.fontSizeControl = new i1.FormControl(16, i1.Validators.min(10));
            this.options = fb.group({
                color: this.colorControl,
                fontSize: this.fontSizeControl,
            });
        }
        FormFieldThemingExample.prototype.getFontSize = function () {
            return Math.max(10, this.fontSizeControl.value);
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
        FormFieldThemingExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldThemingExample, selectors: [["form-field-theming-example"]], decls: 18, vars: 8, consts: [[1, "example-container", 3, "formGroup"], ["appearance", "fill", 3, "color"], [3, "formControl"], ["value", "primary"], ["value", "accent"], ["value", "warn"], ["matInput", "", "type", "number", "placeholder", "Ex. 12", "min", "10", 3, "formControl"], ["matSuffix", ""], [4, "ngIf"]], template: function FormFieldThemingExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "Color");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-select", 2);
                i0.ɵɵelementStart(5, "mat-option", 3);
                i0.ɵɵtext(6, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-option", 4);
                i0.ɵɵtext(8, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-option", 5);
                i0.ɵɵtext(10, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-form-field", 1);
                i0.ɵɵelementStart(12, "mat-label");
                i0.ɵɵtext(13, "Font size");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(14, "input", 6);
                i0.ɵɵelementStart(15, "span", 7);
                i0.ɵɵtext(16, "px");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(17, FormFieldThemingExample_mat_error_17_Template, 2, 0, "mat-error", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵstyleProp("font-size", ctx.getFontSize(), "px");
                i0.ɵɵproperty("formGroup", ctx.options);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("color", ctx.colorControl.value);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.colorControl);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("color", ctx.colorControl.value);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.fontSizeControl);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.fontSizeControl.invalid);
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1$1.MatFormField, i1$1.MatLabel, i3$3.MatSelect, i1.NgControlStatus, i1.FormControlDirective, i4$2.MatOption, i2$1.MatInput, i1.NumberValueAccessor, i1.DefaultValueAccessor, i1$1.MatSuffix, i4.NgIf, i1$1.MatError], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
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
                        declarations: __spread(EXAMPLES, [MyTelInput]),
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
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
                    declarations: __spread(EXAMPLES, [MyTelInput]),
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
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
