(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material-experimental/popover-edit'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/snack-bar'), require('@angular/material/table'), require('@angular/cdk/collections'), require('rxjs'), require('@angular/cdk-experimental/popover-edit'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/popover-edit', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material-experimental/popover-edit', '@angular/material/button', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/snack-bar', '@angular/material/table', '@angular/cdk/collections', 'rxjs', '@angular/cdk-experimental/popover-edit', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.popoverEdit = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.materialExperimental.popoverEdit, global.ng.material.button, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.snackBar, global.ng.material.table, global.ng.cdk.collections, global.rxjs, global.ng.cdkExperimental.popoverEdit, global.ng.material.formField));
}(this, (function (exports, i0, i11, i3, i4, i7, i10, i8, i6, i12, i1, i1$1, collections, rxjs, i2, i5) { 'use strict';

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

    function PopoverEditCellSpanMatTableExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 11, 12);
            i0.ɵɵlistener("ngSubmit", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r12 = ctx.$implicit; var _r13 = i0.ɵɵreference(2); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmit(ctx_r12.person, _r13); })("matEditLensPreservedFormValueChange", function PopoverEditCellSpanMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15_1); var ctx_r12 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedValues.set(ctx_r12.person, $event); });
            i0.ɵɵelementStart(3, "div", 13);
            i0.ɵɵelementStart(4, "mat-form-field");
            i0.ɵɵelement(5, "input", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field");
            i0.ɵɵelement(7, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-form-field");
            i0.ɵɵelement(9, "input", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 17);
            i0.ɵɵelementStart(11, "button", 18);
            i0.ɵɵtext(12, "Confirm");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 19);
            i0.ɵɵtext(14, "Revert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "button", 20);
            i0.ɵɵtext(16, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r12 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r1.preservedValues.get(ctx_r12.person));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx_r12.person.firstName);
            i0.ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "firstName" || null);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r12.person.middleName);
            i0.ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "middleName" || null);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r12.person.lastName);
            i0.ɵɵattribute("cdkFocusInitial", ctx_r12.focus === "lastName" || null);
        }
    }
    function PopoverEditCellSpanMatTableExample_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 21);
            i0.ɵɵtext(1, " No. ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditCellSpanMatTableExample_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 22);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var person_r17 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", person_r17.id, " ");
        }
    }
    function PopoverEditCellSpanMatTableExample_th_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 21);
            i0.ɵɵtext(1, " First Name ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditCellSpanMatTableExample_td_8_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 25);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
    var _c1 = function () { return { after: 2 }; };
    function PopoverEditCellSpanMatTableExample_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 23);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_8_span_2_Template, 4, 0, "span", 24);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var person_r18 = ctx.$implicit;
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c0, person_r18))("matPopoverEditColspan", i0.ɵɵpureFunction0(6, _c1));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", person_r18.firstName, " ");
        }
    }
    function PopoverEditCellSpanMatTableExample_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 21);
            i0.ɵɵtext(1, " Middle Name ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditCellSpanMatTableExample_td_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 25);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
    var _c3 = function () { return { before: 1, after: 1 }; };
    function PopoverEditCellSpanMatTableExample_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 23);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_11_span_2_Template, 4, 0, "span", 24);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var person_r20 = ctx.$implicit;
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c2, person_r20))("matPopoverEditColspan", i0.ɵɵpureFunction0(6, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", person_r20.middleName, " ");
        }
    }
    function PopoverEditCellSpanMatTableExample_th_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 21);
            i0.ɵɵtext(1, " Last Name ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditCellSpanMatTableExample_td_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 25);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
    var _c5 = function () { return { before: 2 }; };
    function PopoverEditCellSpanMatTableExample_td_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 23);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditCellSpanMatTableExample_td_14_span_2_Template, 4, 0, "span", 24);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var person_r22 = ctx.$implicit;
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", i0.ɵɵpureFunction1(4, _c4, person_r22))("matPopoverEditColspan", i0.ɵɵpureFunction0(6, _c5));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", person_r22.lastName, " ");
        }
    }
    function PopoverEditCellSpanMatTableExample_tr_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 26);
        }
    }
    function PopoverEditCellSpanMatTableExample_tr_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 27);
        }
    }
    var PERSON_DATA = [
        { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
        { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
        { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
        { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
        { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
        { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
        { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
        { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
        { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
    ];
    /**
     * @title Material Popover Edit spanning multiple columns on a Material data-table
     */
    var PopoverEditCellSpanMatTableExample = /** @class */ (function () {
        function PopoverEditCellSpanMatTableExample() {
            this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
            this.dataSource = new ExampleDataSource();
            this.preservedValues = new WeakMap();
        }
        PopoverEditCellSpanMatTableExample.prototype.onSubmit = function (person, f) {
            if (!f.valid) {
                return;
            }
            person.firstName = f.value['firstName'];
            person.middleName = f.value['middleName'];
            person.lastName = f.value['lastName'];
        };
        return PopoverEditCellSpanMatTableExample;
    }());
    PopoverEditCellSpanMatTableExample.ɵfac = function PopoverEditCellSpanMatTableExample_Factory(t) { return new (t || PopoverEditCellSpanMatTableExample)(); };
    PopoverEditCellSpanMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditCellSpanMatTableExample, selectors: [["popover-edit-cell-span-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["nameEdit", ""], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", 4, "matCellDef"], ["matColumnDef", "middleName"], ["matColumnDef", "lastName"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", "", 1, "example-input-container"], ["matInput", "", "name", "firstName", "required", "", 3, "ngModel"], ["matInput", "", "name", "middleName", 3, "ngModel"], ["matInput", "", "name", "lastName", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "cdkEditRevert", ""], ["mat-button", "", "cdkEditClose", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan"], [4, "matRowHoverContent"], ["mat-icon-button", "", "matEditOpen", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditCellSpanMatTableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, PopoverEditCellSpanMatTableExample_ng_template_1_Template, 17, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditCellSpanMatTableExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, PopoverEditCellSpanMatTableExample_td_5_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditCellSpanMatTableExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, PopoverEditCellSpanMatTableExample_td_8_Template, 3, 7, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditCellSpanMatTableExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, PopoverEditCellSpanMatTableExample_td_11_Template, 3, 7, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 8);
                i0.ɵɵtemplate(13, PopoverEditCellSpanMatTableExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, PopoverEditCellSpanMatTableExample_td_14_Template, 3, 7, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, PopoverEditCellSpanMatTableExample_tr_15_Template, 1, 0, "tr", 9);
                i0.ɵɵtemplate(16, PopoverEditCellSpanMatTableExample_tr_16_Template, 1, 0, "tr", 10);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i7.MatButton, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatPopoverEdit, i4.MatRowHoverContent, i4.MatEditOpen, i8.MatIcon, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PopoverEditCellSpanMatTableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'popover-edit-cell-span-mat-table-example',
                        styleUrls: ['popover-edit-cell-span-mat-table-example.css'],
                        templateUrl: 'popover-edit-cell-span-mat-table-example.html',
                    }]
            }], null, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(PERSON_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function PopoverEditMatTableFlexExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 12, 13);
            i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r15_1); var element_r12 = ctx.$implicit; var _r13 = i0.ɵɵreference(2); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15_1); var element_r12 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
            i0.ɵɵelementStart(3, "div", 14);
            i0.ɵɵelementStart(4, "mat-form-field");
            i0.ɵɵelement(5, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r12));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", element_r12.weight);
        }
    }
    function PopoverEditMatTableFlexExample_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell");
            i0.ɵɵtext(1, " No. ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableFlexExample_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r17 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r17.position, " ");
        }
    }
    function PopoverEditMatTableFlexExample_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell");
            i0.ɵɵtext(1, " Name ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 12, 13);
            i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r25_1); var _r22 = i0.ɵɵreference(2); var element_r18 = i0.ɵɵnextContext().$implicit; var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r25_1); var element_r18 = i0.ɵɵnextContext().$implicit; var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
            i0.ɵɵelementStart(3, "h2", 19);
            i0.ɵɵtext(4, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 14);
            i0.ɵɵelementStart(6, "mat-form-field");
            i0.ɵɵelement(7, "input", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 21);
            i0.ɵɵelementStart(9, "button", 22);
            i0.ɵɵtext(10, "Confirm");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 23);
            i0.ɵɵtext(12, "Revert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 24);
            i0.ɵɵtext(14, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = i0.ɵɵnextContext().$implicit;
            var ctx_r20 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r20.preservedNameValues.get(element_r18));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", element_r18.name);
        }
    }
    function PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 25);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableFlexExample_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell", 16);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_8_ng_template_2_Template, 15, 2, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_cell_8_span_4_Template, 4, 0, "span", 18);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = ctx.$implicit;
            var _r19 = i0.ɵɵreference(3);
            i0.ɵɵproperty("matPopoverEdit", _r19);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r18.name, " ");
        }
    }
    function PopoverEditMatTableFlexExample_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell");
            i0.ɵɵtext(1, " Weight ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 25);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableFlexExample_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell", 26);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditMatTableFlexExample_mat_cell_11_span_2_Template, 4, 0, "span", 18);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r29 = ctx.$implicit;
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", element_r29);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r29.weight, " ");
        }
    }
    function PopoverEditMatTableFlexExample_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell");
            i0.ɵɵtext(1, " Symbol ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableFlexExample_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r31 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
        }
    }
    function PopoverEditMatTableFlexExample_mat_header_row_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "mat-header-row");
        }
    }
    function PopoverEditMatTableFlexExample_mat_row_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "mat-row");
        }
    }
    var ELEMENT_DATA = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Material Popover Edit on a flex Material data-table
     */
    var PopoverEditMatTableFlexExample = /** @class */ (function () {
        function PopoverEditMatTableFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$1();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        PopoverEditMatTableFlexExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditMatTableFlexExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        return PopoverEditMatTableFlexExample;
    }());
    PopoverEditMatTableFlexExample.ɵfac = function PopoverEditMatTableFlexExample_Factory(t) { return new (t || PopoverEditMatTableFlexExample)(); };
    PopoverEditMatTableFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableFlexExample, selectors: [["popover-edit-mat-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], [3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], [3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], [3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], [3, "matPopoverEdit", "matPopoverEditContext"]], template: function PopoverEditMatTableFlexExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-table", 0);
                i0.ɵɵtemplate(1, PopoverEditMatTableFlexExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditMatTableFlexExample_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(5, PopoverEditMatTableFlexExample_mat_cell_5_Template, 2, 1, "mat-cell", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditMatTableFlexExample_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(8, PopoverEditMatTableFlexExample_mat_cell_8_Template, 5, 2, "mat-cell", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditMatTableFlexExample_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(11, PopoverEditMatTableFlexExample_mat_cell_11_Template, 3, 3, "mat-cell", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, PopoverEditMatTableFlexExample_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
                i0.ɵɵtemplate(14, PopoverEditMatTableFlexExample_mat_cell_14_Template, 2, 1, "mat-cell", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, PopoverEditMatTableFlexExample_mat_header_row_15_Template, 1, 0, "mat-header-row", 10);
                i0.ɵɵtemplate(16, PopoverEditMatTableFlexExample_mat_row_16_Template, 1, 0, "mat-row", 11);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatPopoverEdit, i4.MatRowHoverContent, i7.MatButton, i4.MatEditRevert, i4.MatEditClose, i4.MatEditOpen, i8.MatIcon, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PopoverEditMatTableFlexExample, [{
                type: i0.Component,
                args: [{
                        selector: 'popover-edit-mat-table-flex-example',
                        styleUrls: ['popover-edit-mat-table-flex-example.css'],
                        templateUrl: 'popover-edit-mat-table-flex-example.html',
                    }]
            }], null, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$1 = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function PopoverEditMatTableExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 15, 16);
            i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r19_1); var element_r16 = ctx.$implicit; var _r17 = i0.ɵɵreference(2); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onSubmitWeight(element_r16, _r17); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r19_1); var element_r16 = ctx.$implicit; var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.weightValues.for(element_r16).value = $event; });
            i0.ɵɵelementStart(3, "div", 17);
            i0.ɵɵelementStart(4, "mat-form-field");
            i0.ɵɵelement(5, "input", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r16 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r1.weightValues.for(element_r16).value);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", element_r16.weight);
        }
    }
    function PopoverEditMatTableExample_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 19);
            i0.ɵɵtext(1, " No. ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 22);
            i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r25_1); var element_r21 = i0.ɵɵnextContext().$implicit; var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.goodJob(element_r21); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "thumb_up");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 22);
            i0.ɵɵlistener("click", function PopoverEditMatTableExample_td_5_span_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r25_1); var element_r21 = i0.ɵɵnextContext().$implicit; var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.badJob(element_r21); });
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵtext(6, "thumb_down");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 20);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_5_span_2_Template, 7, 0, "span", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r21 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r21.position, " ");
        }
    }
    function PopoverEditMatTableExample_th_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "th", 19);
            i0.ɵɵtext(1, " Name ");
            i0.ɵɵelementStart(2, "mat-checkbox", 23);
            i0.ɵɵlistener("ngModelChange", function PopoverEditMatTableExample_th_7_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r29_1); var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.nameEditEnabled = $event; });
            i0.ɵɵtext(3, "Edit enabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r4.nameEditEnabled);
        }
    }
    function PopoverEditMatTableExample_td_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 15, 16);
            i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r37_1); var _r34 = i0.ɵɵreference(2); var element_r30 = i0.ɵɵnextContext().$implicit; var ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onSubmitName(element_r30, _r34); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r37_1); var element_r30 = i0.ɵɵnextContext().$implicit; var ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.nameValues.for(element_r30).value = $event; });
            i0.ɵɵelementStart(3, "h2", 27);
            i0.ɵɵtext(4, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 17);
            i0.ɵɵelementStart(6, "mat-form-field");
            i0.ɵɵelement(7, "input", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 29);
            i0.ɵɵelementStart(9, "button", 30);
            i0.ɵɵtext(10, "Confirm");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 31);
            i0.ɵɵtext(12, "Revert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 32);
            i0.ɵɵtext(14, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r30 = i0.ɵɵnextContext().$implicit;
            var ctx_r32 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r32.nameValues.for(element_r30).value);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", element_r30.name);
        }
    }
    function PopoverEditMatTableExample_td_8_ng_container_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 33);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_8_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PopoverEditMatTableExample_td_8_ng_container_4_span_1_Template, 4, 0, "span", 21);
            i0.ɵɵelementContainerEnd();
        }
    }
    function PopoverEditMatTableExample_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 24);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_8_ng_template_2_Template, 15, 2, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_8_ng_container_4_Template, 2, 0, "ng-container", 26);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r30 = ctx.$implicit;
            var _r31 = i0.ɵɵreference(3);
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("matPopoverEdit", _r31)("matPopoverEditDisabled", !ctx_r5.nameEditEnabled);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r30.name, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r5.nameEditEnabled);
        }
    }
    function PopoverEditMatTableExample_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 19);
            i0.ɵɵtext(1, " Type ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-option", 40);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var type_r48 = ctx.$implicit;
            i0.ɵɵproperty("value", type_r48);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", type_r48, " ");
        }
    }
    var _c0$1 = function (a0) { return [a0]; };
    function PopoverEditMatTableExample_td_11_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r51_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 36, 16);
            i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r51_1); var _r46 = i0.ɵɵreference(2); var element_r42 = i0.ɵɵnextContext().$implicit; var ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onSubmitType(element_r42, _r46); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r51_1); var element_r42 = i0.ɵɵnextContext().$implicit; var ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.typeValues.for(element_r42).value = $event; });
            i0.ɵɵelementStart(3, "div", 37);
            i0.ɵɵelementStart(4, "mat-selection-list", 38);
            i0.ɵɵlistener("selectionChange", function PopoverEditMatTableExample_td_11_ng_template_2_Template_mat_selection_list_selectionChange_4_listener() { i0.ɵɵrestoreView(_r51_1); var _r46 = i0.ɵɵreference(2); return _r46.ngSubmit.emit(); });
            i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_11_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r42 = i0.ɵɵnextContext().$implicit;
            var ctx_r44 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r44.typeValues.for(element_r42).value);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("multiple", false)("ngModel", i0.ɵɵpureFunction1(4, _c0$1, element_r42.type));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r44.TYPES);
        }
    }
    function PopoverEditMatTableExample_td_11_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 33);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "arrow_drop_down");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 34);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_11_ng_template_2_Template, 6, 6, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_11_span_4_Template, 4, 0, "span", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r42 = ctx.$implicit;
            var _r43 = i0.ɵɵreference(3);
            i0.ɵɵproperty("matPopoverEdit", _r43);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r42.type, " ");
        }
    }
    function PopoverEditMatTableExample_th_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 19);
            i0.ɵɵtext(1, " Weight ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 33);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 41);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_14_span_2_Template, 4, 0, "span", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r56 = ctx.$implicit;
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", element_r56);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r56.weight, " ");
        }
    }
    function PopoverEditMatTableExample_th_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 19);
            i0.ɵɵtext(1, " Symbol ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 20);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r58 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r58.symbol, " ");
        }
    }
    function PopoverEditMatTableExample_tr_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 42);
        }
    }
    function PopoverEditMatTableExample_tr_19_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 43);
        }
    }
    function PopoverEditMatTableExample_th_21_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 19);
            i0.ɵɵtext(1, " Fantasy Counterparts ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-option", 47);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var fantasyElement_r66 = ctx.$implicit;
            i0.ɵɵproperty("value", fantasyElement_r66);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", fantasyElement_r66, " ");
        }
    }
    function PopoverEditMatTableExample_td_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r69_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 15, 16);
            i0.ɵɵlistener("ngSubmit", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r69_1); var _r64 = i0.ɵɵreference(2); var element_r60 = i0.ɵɵnextContext().$implicit; var ctx_r67 = i0.ɵɵnextContext(); return ctx_r67.onSubmitFantasyCounterparts(element_r60, _r64); })("matEditLensPreservedFormValueChange", function PopoverEditMatTableExample_td_22_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r69_1); var element_r60 = i0.ɵɵnextContext().$implicit; var ctx_r70 = i0.ɵɵnextContext(); return ctx_r70.fantasyValues.for(element_r60).value = $event; });
            i0.ɵɵelementStart(3, "div", 37);
            i0.ɵɵelementStart(4, "mat-selection-list", 45);
            i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_22_ng_template_2_mat_list_option_5_Template, 2, 2, "mat-list-option", 46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 29);
            i0.ɵɵelementStart(7, "button", 30);
            i0.ɵɵtext(8, "Confirm");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 31);
            i0.ɵɵtext(10, "Revert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r60 = i0.ɵɵnextContext().$implicit;
            var ctx_r62 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r62.fantasyValues.for(element_r60).value);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", element_r60.fantasyCounterparts);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r62.FANTASY_ELEMENTS);
        }
    }
    function PopoverEditMatTableExample_td_22_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "button", 33);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "arrow_drop_down");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditMatTableExample_td_22_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 34);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditMatTableExample_td_22_ng_template_2_Template, 11, 3, "ng-template", null, 44, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PopoverEditMatTableExample_td_22_span_4_Template, 4, 0, "span", 21);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r60 = ctx.$implicit;
            var _r61 = i0.ɵɵreference(3);
            i0.ɵɵproperty("matPopoverEdit", _r61);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r60.fantasyCounterparts.join(", "), " ");
        }
    }
    var ELEMENT_DATA$1 = [
        { position: 1, name: 'Hydrogen', type: 'Nonmetal', weight: 1.0079, symbol: 'H',
            fantasyCounterparts: ['Fire', 'Wind', 'Light'] },
        { position: 2, name: 'Helium', type: 'Nonmetal', weight: 4.0026, symbol: 'He',
            fantasyCounterparts: ['Wind', 'Light'] },
        { position: 3, name: 'Lithium', type: 'Metal', weight: 6.941, symbol: 'Li',
            fantasyCounterparts: [] },
        { position: 4, name: 'Beryllium', type: 'Metal', weight: 9.0122, symbol: 'Be',
            fantasyCounterparts: [] },
        { position: 5, name: 'Boron', type: 'Semimetal', weight: 10.811, symbol: 'B',
            fantasyCounterparts: [] },
        { position: 6, name: 'Carbon', type: 'Nonmetal', weight: 12.0107, symbol: 'C',
            fantasyCounterparts: ['Earth', 'Dark'] },
        { position: 7, name: 'Nitrogen', type: 'Nonmetal', weight: 14.0067, symbol: 'N',
            fantasyCounterparts: ['Wind'] },
        { position: 8, name: 'Oxygen', type: 'Nonmetal', weight: 15.9994, symbol: 'O',
            fantasyCounterparts: ['Fire', 'Water', 'Wind'] },
        { position: 9, name: 'Fluorine', type: 'Nonmetal', weight: 18.9984, symbol: 'F',
            fantasyCounterparts: [] },
        { position: 10, name: 'Neon', type: 'Nonmetal', weight: 20.1797, symbol: 'Ne',
            fantasyCounterparts: ['Light'] },
        { position: 11, name: 'Sodium', type: 'Metal', weight: 22.9897, symbol: 'Na',
            fantasyCounterparts: ['Earth', 'Water'] },
        { position: 12, name: 'Magnesium', type: 'Metal', weight: 24.305, symbol: 'Mg',
            fantasyCounterparts: [] },
        { position: 13, name: 'Aluminum', type: 'Metal', weight: 26.9815, symbol: 'Al',
            fantasyCounterparts: [] },
        { position: 14, name: 'Silicon', type: 'Semimetal', weight: 28.0855, symbol: 'Si',
            fantasyCounterparts: [] },
        { position: 15, name: 'Phosphorus', type: 'Nonmetal', weight: 30.9738, symbol: 'P',
            fantasyCounterparts: [] },
        { position: 16, name: 'Sulfur', type: 'Nonmetal', weight: 32.065, symbol: 'S',
            fantasyCounterparts: [] },
        { position: 17, name: 'Chlorine', type: 'Nonmetal', weight: 35.453, symbol: 'Cl',
            fantasyCounterparts: [] },
        { position: 18, name: 'Argon', type: 'Nonmetal', weight: 39.948, symbol: 'Ar',
            fantasyCounterparts: [] },
        { position: 19, name: 'Potassium', type: 'Metal', weight: 39.0983, symbol: 'K',
            fantasyCounterparts: [] },
        { position: 20, name: 'Calcium', type: 'Metal', weight: 40.078, symbol: 'Ca',
            fantasyCounterparts: [] },
    ];
    var TYPES = ['Metal', 'Semimetal', 'Nonmetal'];
    var FANTASY_ELEMENTS = ['Earth', 'Water', 'Wind', 'Fire', 'Light', 'Dark'];
    /**
     * @title Material Popover Edit on a Material data-table
     */
    var PopoverEditMatTableExample = /** @class */ (function () {
        function PopoverEditMatTableExample(_snackBar) {
            this._snackBar = _snackBar;
            this.displayedColumns = ['position', 'name', 'type', 'weight', 'symbol', 'fantasyCounterpart'];
            this.dataSource = new ExampleDataSource$2();
            this.nameEditEnabled = true;
            this.TYPES = TYPES;
            this.FANTASY_ELEMENTS = FANTASY_ELEMENTS;
            this.nameValues = new i2.FormValueContainer();
            this.weightValues = new i2.FormValueContainer();
            this.typeValues = new i2.FormValueContainer();
            this.fantasyValues = new i2.FormValueContainer();
        }
        PopoverEditMatTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditMatTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        PopoverEditMatTableExample.prototype.onSubmitType = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.type = f.value.type[0];
        };
        PopoverEditMatTableExample.prototype.onSubmitFantasyCounterparts = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.fantasyCounterparts = f.value.fantasyCounterparts;
        };
        PopoverEditMatTableExample.prototype.goodJob = function (element) {
            this._snackBar.open("Way to go, " + element.name + "!", undefined, { duration: 2000 });
        };
        PopoverEditMatTableExample.prototype.badJob = function (element) {
            this._snackBar.open("You have failed me for the last time, #" + element.position + ".", undefined, { duration: 2000 });
        };
        return PopoverEditMatTableExample;
    }());
    PopoverEditMatTableExample.ɵfac = function PopoverEditMatTableExample_Factory(t) { return new (t || PopoverEditMatTableExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
    PopoverEditMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditMatTableExample, selectors: [["popover-edit-mat-table-example"]], decls: 23, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditDisabled", 4, "matCellDef"], ["matColumnDef", "type"], ["mat-cell", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "fantasyCounterpart"], ["matEditLens", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "matRowHoverContent"], ["mat-icon-button", "", 3, "click"], [3, "ngModel", "ngModelChange"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditDisabled"], ["nameEdit", ""], [4, "ngIf"], ["mat-edit-title", ""], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-edit-actions", ""], ["mat-button", "", "type", "submit"], ["mat-button", "", "matEditRevert", ""], ["mat-button", "", "matEditClose", ""], ["mat-icon-button", "", "matEditOpen", ""], ["mat-cell", "", 3, "matPopoverEdit"], ["typeEdit", ""], ["matEditLens", "", "matEditClose", "", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["mat-edit-fill", ""], ["name", "type", "aria-label", "Element type", 3, "multiple", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-cell", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""], ["fantasyCounterpartEdit", ""], ["name", "fantasyCounterparts", "aria-label", "Fantasy Element Counterparts", 3, "ngModel"], ["checkboxPosition", "before", 3, "value", 4, "ngFor", "ngForOf"], ["checkboxPosition", "before", 3, "value"]], template: function PopoverEditMatTableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, PopoverEditMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditMatTableExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, PopoverEditMatTableExample_td_5_Template, 3, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditMatTableExample_th_7_Template, 4, 1, "th", 3);
                i0.ɵɵtemplate(8, PopoverEditMatTableExample_td_8_Template, 5, 4, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditMatTableExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, PopoverEditMatTableExample_td_11_Template, 5, 2, "td", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, PopoverEditMatTableExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, PopoverEditMatTableExample_td_14_Template, 3, 3, "td", 10);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(15, 11);
                i0.ɵɵtemplate(16, PopoverEditMatTableExample_th_16_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(17, PopoverEditMatTableExample_td_17_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(18, PopoverEditMatTableExample_tr_18_Template, 1, 0, "tr", 12);
                i0.ɵɵtemplate(19, PopoverEditMatTableExample_tr_19_Template, 1, 0, "tr", 13);
                i0.ɵɵelementContainerStart(20, 14);
                i0.ɵɵtemplate(21, PopoverEditMatTableExample_th_21_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(22, PopoverEditMatTableExample_td_22_Template, 5, 2, "td", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(18);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatRowHoverContent, i7.MatButton, i8.MatIcon, i10.MatCheckbox, i4.MatPopoverEdit, i11.NgIf, i4.MatEditRevert, i4.MatEditClose, i4.MatEditOpen, i12.MatSelectionList, i11.NgForOf, i12.MatListOption, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 16%;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PopoverEditMatTableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'popover-edit-mat-table-example',
                        styleUrls: ['popover-edit-mat-table-example.css'],
                        templateUrl: 'popover-edit-mat-table-example.html',
                    }]
            }], function () { return [{ type: i1.MatSnackBar }]; }, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$2 = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$1);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function PopoverEditTabOutMatTableExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 12, 13);
            i0.ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r15_1); var element_r12 = ctx.$implicit; var _r13 = i0.ɵɵreference(2); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); })("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15_1); var element_r12 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
            i0.ɵɵelementStart(3, "div", 14);
            i0.ɵɵelementStart(4, "mat-form-field");
            i0.ɵɵelement(5, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r12));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", element_r12.weight);
        }
    }
    function PopoverEditTabOutMatTableExample_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 16);
            i0.ɵɵtext(1, " No. ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditTabOutMatTableExample_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 17);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r17 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r17.position, " ");
        }
    }
    function PopoverEditTabOutMatTableExample_th_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 16);
            i0.ɵɵtext(1, " Name ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "form", 12, 13);
            i0.ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r25_1); var _r22 = i0.ɵɵreference(2); var element_r18 = i0.ɵɵnextContext().$implicit; var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); })("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r25_1); var element_r18 = i0.ɵɵnextContext().$implicit; var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
            i0.ɵɵelementStart(3, "div", 14);
            i0.ɵɵelementStart(4, "mat-form-field");
            i0.ɵɵelement(5, "input", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = i0.ɵɵnextContext().$implicit;
            var ctx_r20 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r20.preservedNameValues.get(element_r18));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", element_r18.name);
        }
    }
    function PopoverEditTabOutMatTableExample_td_8_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditTabOutMatTableExample_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 18);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template, 6, 2, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PopoverEditTabOutMatTableExample_td_8_span_4_Template, 3, 0, "span", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = ctx.$implicit;
            var _r19 = i0.ɵɵreference(3);
            i0.ɵɵproperty("matPopoverEdit", _r19);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r18.name, " ");
        }
    }
    function PopoverEditTabOutMatTableExample_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 16);
            i0.ɵɵtext(1, " Weight ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditTabOutMatTableExample_td_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditTabOutMatTableExample_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 22);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_11_span_2_Template, 3, 0, "span", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r29 = ctx.$implicit;
            i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵproperty("matPopoverEdit", _r0)("matPopoverEditContext", element_r29);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r29.weight, " ");
        }
    }
    function PopoverEditTabOutMatTableExample_th_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 16);
            i0.ɵɵtext(1, " Symbol ");
            i0.ɵɵelementEnd();
        }
    }
    function PopoverEditTabOutMatTableExample_td_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 17);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r31 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
        }
    }
    function PopoverEditTabOutMatTableExample_tr_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 23);
        }
    }
    function PopoverEditTabOutMatTableExample_tr_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 24);
        }
    }
    var ELEMENT_DATA$2 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Material Popover Edit with spreadsheet-like configuration on a Material data-table
     */
    var PopoverEditTabOutMatTableExample = /** @class */ (function () {
        function PopoverEditTabOutMatTableExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$3();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        PopoverEditTabOutMatTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditTabOutMatTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        return PopoverEditTabOutMatTableExample;
    }());
    PopoverEditTabOutMatTableExample.ɵfac = function PopoverEditTabOutMatTableExample_Factory(t) { return new (t || PopoverEditTabOutMatTableExample)(); };
    PopoverEditTabOutMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditTabOutMatTableExample, selectors: [["popover-edit-tab-out-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", "matEditLensClickOutBehavior", "submit", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditTabOutMatTableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵtemplate(1, PopoverEditTabOutMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementContainerStart(3, 2);
                i0.ɵɵtemplate(4, PopoverEditTabOutMatTableExample_th_4_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(5, PopoverEditTabOutMatTableExample_td_5_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(6, 5);
                i0.ɵɵtemplate(7, PopoverEditTabOutMatTableExample_th_7_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(8, PopoverEditTabOutMatTableExample_td_8_Template, 5, 2, "td", 6);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 7);
                i0.ɵɵtemplate(10, PopoverEditTabOutMatTableExample_th_10_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(11, PopoverEditTabOutMatTableExample_td_11_Template, 3, 3, "td", 8);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 9);
                i0.ɵɵtemplate(13, PopoverEditTabOutMatTableExample_th_13_Template, 2, 0, "th", 3);
                i0.ɵɵtemplate(14, PopoverEditTabOutMatTableExample_td_14_Template, 2, 1, "td", 4);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(15, PopoverEditTabOutMatTableExample_tr_15_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(16, PopoverEditTabOutMatTableExample_tr_16_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1$1.MatTable, i2.CdkEditable, i1$1.MatColumnDef, i1$1.MatHeaderCellDef, i1$1.MatCellDef, i1$1.MatHeaderRowDef, i1$1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1$1.MatHeaderCell, i1$1.MatCell, i4.MatEditOpen, i4.MatPopoverEditTabOut, i4.MatRowHoverContent, i8.MatIcon, i1$1.MatHeaderRow, i1$1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PopoverEditTabOutMatTableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'popover-edit-tab-out-mat-table-example',
                        styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                        templateUrl: 'popover-edit-tab-out-mat-table-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$3 = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$2);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var EXAMPLES = [
        PopoverEditCellSpanMatTableExample,
        PopoverEditMatTableExample,
        PopoverEditMatTableFlexExample,
        PopoverEditTabOutMatTableExample,
    ];
    var PopoverEditExamplesModule = /** @class */ (function () {
        function PopoverEditExamplesModule() {
        }
        return PopoverEditExamplesModule;
    }());
    PopoverEditExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PopoverEditExamplesModule });
    PopoverEditExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PopoverEditExamplesModule_Factory(t) { return new (t || PopoverEditExamplesModule)(); }, imports: [[
                i11.CommonModule,
                i7.MatButtonModule,
                i10.MatCheckboxModule,
                i8.MatIconModule,
                i6.MatInputModule,
                i12.MatListModule,
                i4.MatPopoverEditModule,
                i1.MatSnackBarModule,
                i1$1.MatTableModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverEditExamplesModule, { declarations: [PopoverEditCellSpanMatTableExample,
                PopoverEditMatTableExample,
                PopoverEditMatTableFlexExample,
                PopoverEditTabOutMatTableExample], imports: [i11.CommonModule,
                i7.MatButtonModule,
                i10.MatCheckboxModule,
                i8.MatIconModule,
                i6.MatInputModule,
                i12.MatListModule,
                i4.MatPopoverEditModule,
                i1.MatSnackBarModule,
                i1$1.MatTableModule,
                i3.FormsModule], exports: [PopoverEditCellSpanMatTableExample,
                PopoverEditMatTableExample,
                PopoverEditMatTableFlexExample,
                PopoverEditTabOutMatTableExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PopoverEditExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i11.CommonModule,
                            i7.MatButtonModule,
                            i10.MatCheckboxModule,
                            i8.MatIconModule,
                            i6.MatInputModule,
                            i12.MatListModule,
                            i4.MatPopoverEditModule,
                            i1.MatSnackBarModule,
                            i1$1.MatTableModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PopoverEditCellSpanMatTableExample = PopoverEditCellSpanMatTableExample;
    exports.PopoverEditExamplesModule = PopoverEditExamplesModule;
    exports.PopoverEditMatTableExample = PopoverEditMatTableExample;
    exports.PopoverEditMatTableFlexExample = PopoverEditMatTableFlexExample;
    exports.PopoverEditTabOutMatTableExample = PopoverEditTabOutMatTableExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-popover-edit.umd.js.map
