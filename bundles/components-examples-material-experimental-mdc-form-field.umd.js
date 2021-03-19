(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material-experimental/mdc-form-field'), require('@angular/material/icon'), require('@angular/cdk/coercion'), require('@angular/material/form-field'), require('rxjs'), require('@angular/cdk/a11y')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/mdc-form-field', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material-experimental/mdc-form-field', '@angular/material/icon', '@angular/cdk/coercion', '@angular/material/form-field', 'rxjs', '@angular/cdk/a11y'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.mdcFormField = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.materialExperimental.mdcFormField, global.ng.material.icon, global.ng.cdk.coercion, global.ng.material.formField, global.rxjs, global.ng.cdk.a11y));
}(this, (function (exports, common, i0, i3, i1, i2, coercion, formField, rxjs, i4) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /** @title Form field with custom telephone number input control. */
    var MdcFormFieldCustomControlExample = /** @class */ (function () {
        function MdcFormFieldCustomControlExample() {
        }
        return MdcFormFieldCustomControlExample;
    }());
    MdcFormFieldCustomControlExample.ɵfac = function MdcFormFieldCustomControlExample_Factory(t) { return new (t || MdcFormFieldCustomControlExample)(); };
    MdcFormFieldCustomControlExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MdcFormFieldCustomControlExample, selectors: [["mdc-form-field-custom-control-example"]], decls: 8, vars: 0, consts: [["required", ""], ["matSuffix", ""]], template: function MdcFormFieldCustomControlExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field");
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Phone number");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "example-tel-input", 0);
                i0__namespace.ɵɵelementStart(4, "mat-icon", 1);
                i0__namespace.ɵɵtext(5, "phone");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-hint");
                i0__namespace.ɵɵtext(7, "Include area code");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: function () { return [i1__namespace.MatFormField, i1__namespace.MatLabel, MyTelInput, i2__namespace.MatIcon, i1__namespace.MatSuffix, i1__namespace.MatHint]; }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdcFormFieldCustomControlExample, [{
                type: i0.Component,
                args: [{
                        selector: 'mdc-form-field-custom-control-example',
                        templateUrl: 'form-field-custom-control-example.html',
                    }]
            }], null, null);
    })();
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
        function MyTelInput(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
            var _this = this;
            this._focusMonitor = _focusMonitor;
            this._elementRef = _elementRef;
            this._formField = _formField;
            this.ngControl = ngControl;
            this.stateChanges = new rxjs.Subject();
            this.focused = false;
            this.errorState = false;
            this.controlType = 'example-tel-input';
            this.id = "example-tel-input-" + MyTelInput.nextId++;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this._required = false;
            this._disabled = false;
            this.parts = formBuilder.group({
                area: [null, [i3.Validators.required, i3.Validators.minLength(3), i3.Validators.maxLength(3)]],
                exchange: [null, [i3.Validators.required, i3.Validators.minLength(3), i3.Validators.maxLength(3)]],
                subscriber: [null, [i3.Validators.required, i3.Validators.minLength(4), i3.Validators.maxLength(4)]],
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
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "shouldLabelFloat", {
            get: function () { return this.focused || !this.empty; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "placeholder", {
            get: function () { return this._placeholder; },
            set: function (value) {
                this._placeholder = value;
                this.stateChanges.next();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "required", {
            get: function () { return this._required; },
            set: function (value) {
                this._required = coercion.coerceBooleanProperty(value);
                this.stateChanges.next();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "disabled", {
            get: function () { return this._disabled; },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
                this._disabled ? this.parts.disable() : this.parts.enable();
                this.stateChanges.next();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "value", {
            get: function () {
                if (this.parts.valid) {
                    var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
                    return new MyTel(area, exchange, subscriber);
                }
                return null;
            },
            set: function (tel) {
                var _a = tel || new MyTel('', '', ''), area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
                this.parts.setValue({ area: area, exchange: exchange, subscriber: subscriber });
                this.stateChanges.next();
            },
            enumerable: false,
            configurable: true
        });
        MyTelInput.prototype.ngOnDestroy = function () {
            this.stateChanges.complete();
            this._focusMonitor.stopMonitoring(this._elementRef);
        };
        MyTelInput.prototype.setDescribedByIds = function (ids) {
            var controlElement = this._elementRef.nativeElement
                .querySelector('.example-tel-input-container');
            controlElement.setAttribute('aria-describedby', ids.join(' '));
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
        return MyTelInput;
    }());
    MyTelInput.nextId = 0;
    MyTelInput.ɵfac = function MyTelInput_Factory(t) { return new (t || MyTelInput)(i0__namespace.ɵɵdirectiveInject(i3__namespace.FormBuilder), i0__namespace.ɵɵdirectiveInject(i4__namespace.FocusMonitor), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(formField.MAT_FORM_FIELD, 8), i0__namespace.ɵɵdirectiveInject(i3__namespace.NgControl, 10)); };
    MyTelInput.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MyTelInput, selectors: [["example-tel-input"]], hostVars: 3, hostBindings: function MyTelInput_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵhostProperty("id", ctx.id);
                i0__namespace.ɵɵclassProp("example-floating", ctx.shouldLabelFloat);
            }
        }, inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [i0__namespace.ɵɵProvidersFeature([{ provide: i1.MatFormFieldControl, useExisting: MyTelInput }])], decls: 8, vars: 2, consts: [["role", "group", 1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input"], ["formControlName", "subscriber", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input"]], template: function MyTelInput_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "input", 1);
                i0__namespace.ɵɵlistener("input", function MyTelInput_Template_input_input_1_listener() { return ctx._handleInput(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "span", 2);
                i0__namespace.ɵɵtext(3, "\u2013");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "input", 3);
                i0__namespace.ɵɵlistener("input", function MyTelInput_Template_input_input_4_listener() { return ctx._handleInput(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "span", 2);
                i0__namespace.ɵɵtext(6, "\u2013");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "input", 4);
                i0__namespace.ɵɵlistener("input", function MyTelInput_Template_input_input_7_listener() { return ctx._handleInput(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formGroup", ctx.parts);
                i0__namespace.ɵɵattribute("aria-labelledby", ctx._formField == null ? null : ctx._formField.getLabelId());
            }
        }, directives: [i3__namespace.NgControlStatusGroup, i3__namespace.FormGroupDirective, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlName], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MyTelInput, [{
                type: i0.Component,
                args: [{
                        selector: 'example-tel-input',
                        templateUrl: 'example-tel-input-example.html',
                        styleUrls: ['example-tel-input-example.css'],
                        providers: [{ provide: i1.MatFormFieldControl, useExisting: MyTelInput }],
                        host: {
                            '[class.example-floating]': 'shouldLabelFloat',
                            '[id]': 'id',
                        }
                    }]
            }], function () {
            return [{ type: i3__namespace.FormBuilder }, { type: i4__namespace.FocusMonitor }, { type: i0__namespace.ElementRef }, { type: i1__namespace.MatFormField, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [formField.MAT_FORM_FIELD]
                        }] }, { type: i3__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }];
        }, { userAriaDescribedBy: [{
                    type: i0.Input,
                    args: ['aria-describedby']
                }], placeholder: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }] });
    })();

    var EXAMPLES = [
        MdcFormFieldCustomControlExample,
    ];
    var MdcFormFieldExamplesModule = /** @class */ (function () {
        function MdcFormFieldExamplesModule() {
        }
        return MdcFormFieldExamplesModule;
    }());
    MdcFormFieldExamplesModule.ɵfac = function MdcFormFieldExamplesModule_Factory(t) { return new (t || MdcFormFieldExamplesModule)(); };
    MdcFormFieldExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: MdcFormFieldExamplesModule });
    MdcFormFieldExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                common.CommonModule,
                i1.MatFormFieldModule,
                i2.MatIconModule,
                i3.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdcFormFieldExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            common.CommonModule,
                            i1.MatFormFieldModule,
                            i2.MatIconModule,
                            i3.ReactiveFormsModule,
                        ],
                        declarations: __spreadArray(__spreadArray([], __read(EXAMPLES)), [MyTelInput]),
                        exports: __spreadArray(__spreadArray([], __read(EXAMPLES)), [MyTelInput]),
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MdcFormFieldExamplesModule, { declarations: [MdcFormFieldCustomControlExample, MyTelInput], imports: [common.CommonModule,
                i1.MatFormFieldModule,
                i2.MatIconModule,
                i3.ReactiveFormsModule], exports: [MdcFormFieldCustomControlExample, MyTelInput] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MdcFormFieldCustomControlExample = MdcFormFieldCustomControlExample;
    exports.MdcFormFieldExamplesModule = MdcFormFieldExamplesModule;
    exports.MyTelInput = MyTelInput;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-mdc-form-field.umd.js.map
