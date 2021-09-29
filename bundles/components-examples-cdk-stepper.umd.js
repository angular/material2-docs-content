(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/stepper'), require('@angular/common'), require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/stepper', ['exports', '@angular/cdk/stepper', '@angular/common', '@angular/core', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.stepper = {}), global.ng.cdk.stepper, global.ng.common, global.ng.core, global.ng.forms));
}(this, (function (exports, i1, i2, i0, i1$1) { 'use strict';

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

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

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
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
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
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function CustomStepper_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 6);
            i0__namespace.ɵɵlistener("click", function CustomStepper_button_8_Template_button_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r4_1); var i_r2 = restoredCtx.index; var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.selectStepByIndex(i_r2); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r2 = ctx.index;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("example-active", ctx_r0.selectedIndex === i_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
        }
    }
    /** @title A custom CDK stepper without a form */
    var CdkCustomStepperWithoutFormExample = /** @class */ (function () {
        function CdkCustomStepperWithoutFormExample() {
        }
        return CdkCustomStepperWithoutFormExample;
    }());
    CdkCustomStepperWithoutFormExample.ɵfac = function CdkCustomStepperWithoutFormExample_Factory(t) { return new (t || CdkCustomStepperWithoutFormExample)(); };
    CdkCustomStepperWithoutFormExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "example-custom-stepper");
                i0__namespace.ɵɵelementStart(1, "cdk-step");
                i0__namespace.ɵɵelementStart(2, "p");
                i0__namespace.ɵɵtext(3, "This is any content of \"Step 1\"");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "cdk-step");
                i0__namespace.ɵɵelementStart(5, "p");
                i0__namespace.ɵɵtext(6, "This is any content of \"Step 2\"");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: function () { return [CustomStepper, i1__namespace.CdkStep]; }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-custom-stepper-without-form-example', template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n", styles: [""] }]
            }], null, null);
    })();
    /** Custom CDK stepper component */
    var CustomStepper = /** @class */ (function (_super) {
        __extends(CustomStepper, _super);
        function CustomStepper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomStepper.prototype.selectStepByIndex = function (index) {
            this.selectedIndex = index;
        };
        return CustomStepper;
    }(i1.CdkStepper));
    CustomStepper.ɵfac = /*@__PURE__*/ function () { var ɵCustomStepper_BaseFactory; return function CustomStepper_Factory(t) { return (ɵCustomStepper_BaseFactory || (ɵCustomStepper_BaseFactory = i0__namespace.ɵɵgetInheritedFactory(CustomStepper)))(t || CustomStepper); }; }();
    CustomStepper.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [i0__namespace.ɵɵProvidersFeature([{ provide: i1.CdkStepper, useExisting: CustomStepper }]), i0__namespace.ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomStepper_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section", 0);
                i0__namespace.ɵɵelementStart(1, "header");
                i0__namespace.ɵɵelementStart(2, "h2");
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "div", 1);
                i0__namespace.ɵɵelementStart(5, "footer", 2);
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵtext(7, "\u2190");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, CustomStepper_button_8_Template, 2, 3, "button", 4);
                i0__namespace.ɵɵelementStart(9, "button", 5);
                i0__namespace.ɵɵtext(10, "\u2192");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.steps);
            }
        }, directives: [i2__namespace.NgTemplateOutlet, i1__namespace.CdkStepperPrevious, i2__namespace.NgForOf, i1__namespace.CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CustomStepper, [{
                type: i0.Component,
                args: [{ selector: 'example-custom-stepper', providers: [{ provide: i1.CdkStepper, useExisting: CustomStepper }], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
            }], null, null);
    })();

    function CustomLinearStepper_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 6);
            i0__namespace.ɵɵlistener("click", function CustomLinearStepper_button_8_Template_button_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r4_1); var i_r2 = restoredCtx.index; var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.selectStepByIndex(i_r2); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r2 = ctx.index;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("example-active", ctx_r0.selectedIndex === i_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
        }
    }
    /** @title A custom CDK linear stepper with forms */
    var CdkLinearStepperWithFormExample = /** @class */ (function () {
        function CdkLinearStepperWithFormExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isLinear = true;
            this.firstFormGroup = this._formBuilder.group({
                firstControl: ['', i1$1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondControl: ['', i1$1.Validators.required]
            });
        }
        CdkLinearStepperWithFormExample.prototype.toggleLinearity = function () {
            this.isLinear = !this.isLinear;
        };
        return CdkLinearStepperWithFormExample;
    }());
    CdkLinearStepperWithFormExample.ɵfac = function CdkLinearStepperWithFormExample_Factory(t) { return new (t || CdkLinearStepperWithFormExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.FormBuilder)); };
    CdkLinearStepperWithFormExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkLinearStepperWithFormExample, selectors: [["cdk-linear-stepper-with-form-example"]], decls: 13, vars: 6, consts: [[3, "linear"], [3, "stepControl"], ["for", "stepOneInput"], [3, "formGroup"], ["placeholder", "Input", "formControlName", "firstControl", "id", "stepOneInput", "required", ""], ["for", "stepTwoInput"], ["placeholder", "Input", "formControlName", "secondControl", "id", "stepTwoInput", "required", ""], [1, "example-toggle-linear-button", 3, "click"]], template: function CdkLinearStepperWithFormExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "example-custom-linear-stepper", 0);
                i0__namespace.ɵɵelementStart(1, "cdk-step", 1);
                i0__namespace.ɵɵelementStart(2, "label", 2);
                i0__namespace.ɵɵtext(3, "Step 1 input");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "form", 3);
                i0__namespace.ɵɵelement(5, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "cdk-step", 1);
                i0__namespace.ɵɵelementStart(7, "label", 5);
                i0__namespace.ɵɵtext(8, "Step 2 input");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "form", 3);
                i0__namespace.ɵɵelement(10, "input", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 7);
                i0__namespace.ɵɵlistener("click", function CdkLinearStepperWithFormExample_Template_button_click_11_listener() { return ctx.toggleLinearity(); });
                i0__namespace.ɵɵtext(12);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("linear", ctx.isLinear);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.isLinear ? "Disable linear mode" : "Enable linear mode", "\n");
            }
        }, directives: function () { return [CustomLinearStepper, i1__namespace.CdkStep, i1__namespace$1.ɵNgNoValidate, i1__namespace$1.NgControlStatusGroup, i1__namespace$1.FormGroupDirective, i1__namespace$1.DefaultValueAccessor, i1__namespace$1.NgControlStatus, i1__namespace$1.FormControlName, i1__namespace$1.RequiredValidator]; }, styles: [".example-toggle-linear-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkLinearStepperWithFormExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-linear-stepper-with-form-example', template: "<example-custom-linear-stepper [linear]=\"isLinear\">\n  <cdk-step [stepControl]=\"firstFormGroup\">\n    <label for=\"stepOneInput\">Step 1 input</label>\n    <form [formGroup]=\"firstFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"firstControl\" id=\"stepOneInput\" required>\n    </form>\n  </cdk-step>\n  <cdk-step [stepControl]=\"secondFormGroup\">\n    <label for=\"stepTwoInput\">Step 2 input</label>\n    <form [formGroup]=\"secondFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"secondControl\" id=\"stepTwoInput\" required>\n    </form>\n  </cdk-step>\n</example-custom-linear-stepper>\n<button class=\"example-toggle-linear-button\" (click)=\"toggleLinearity()\">\n  {{isLinear ? 'Disable linear mode' : 'Enable linear mode'}}\n</button>\n", styles: [".example-toggle-linear-button {\n  margin-left: 10px;\n}\n"] }]
            }], function () { return [{ type: i1__namespace$1.FormBuilder }]; }, null);
    })();
    /** Custom CDK linear stepper component */
    var CustomLinearStepper = /** @class */ (function (_super) {
        __extends(CustomLinearStepper, _super);
        function CustomLinearStepper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomLinearStepper.prototype.selectStepByIndex = function (index) {
            this.selectedIndex = index;
        };
        return CustomLinearStepper;
    }(i1.CdkStepper));
    CustomLinearStepper.ɵfac = /*@__PURE__*/ function () { var ɵCustomLinearStepper_BaseFactory; return function CustomLinearStepper_Factory(t) { return (ɵCustomLinearStepper_BaseFactory || (ɵCustomLinearStepper_BaseFactory = i0__namespace.ɵɵgetInheritedFactory(CustomLinearStepper)))(t || CustomLinearStepper); }; }();
    CustomLinearStepper.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CustomLinearStepper, selectors: [["example-custom-linear-stepper"]], features: [i0__namespace.ɵɵProvidersFeature([{ provide: i1.CdkStepper, useExisting: CustomLinearStepper }]), i0__namespace.ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomLinearStepper_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section", 0);
                i0__namespace.ɵɵelementStart(1, "header");
                i0__namespace.ɵɵelementStart(2, "h2");
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "div", 1);
                i0__namespace.ɵɵelementStart(5, "footer", 2);
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵtext(7, "\u2190");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, CustomLinearStepper_button_8_Template, 2, 3, "button", 4);
                i0__namespace.ɵɵelementStart(9, "button", 5);
                i0__namespace.ɵɵtext(10, "\u2192");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.steps);
            }
        }, directives: [i2__namespace.NgTemplateOutlet, i1__namespace.CdkStepperPrevious, i2__namespace.NgForOf, i1__namespace.CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CustomLinearStepper, [{
                type: i0.Component,
                args: [{ selector: 'example-custom-linear-stepper', providers: [{ provide: i1.CdkStepper, useExisting: CustomLinearStepper }], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper
    ];
    var CdkStepperExamplesModule = /** @class */ (function () {
        function CdkStepperExamplesModule() {
        }
        return CdkStepperExamplesModule;
    }());
    CdkStepperExamplesModule.ɵfac = function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); };
    CdkStepperExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
    CdkStepperExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CdkStepperModule,
                i2.CommonModule,
                i1$1.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkStepperExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CdkStepperModule,
                            i2.CommonModule,
                            i1$1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
                CustomStepper,
                CdkLinearStepperWithFormExample,
                CustomLinearStepper], imports: [i1.CdkStepperModule,
                i2.CommonModule,
                i1$1.ReactiveFormsModule], exports: [CdkCustomStepperWithoutFormExample,
                CustomStepper,
                CdkLinearStepperWithFormExample,
                CustomLinearStepper] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkCustomStepperWithoutFormExample = CdkCustomStepperWithoutFormExample;
    exports.CdkLinearStepperWithFormExample = CdkLinearStepperWithFormExample;
    exports.CdkStepperExamplesModule = CdkStepperExamplesModule;
    exports.CustomLinearStepper = CustomLinearStepper;
    exports.CustomStepper = CustomStepper;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-stepper.umd.js.map
