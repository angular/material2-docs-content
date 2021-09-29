(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/paginator'), require('@angular/material/form-field'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/paginator', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/input', '@angular/material/paginator', '@angular/material/form-field', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.paginator = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.input, global.ng.material.paginator, global.ng.material.formField, global.rxjs));
}(this, (function (exports, i5, i0, i3, i2, i1$1, i1, rxjs) { 'use strict';

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

    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    function PaginatorConfigurableExample_div_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "h5");
            i0__namespace.ɵɵtext(2, "Page Change Event Properties");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "div");
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "div");
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
        }
    }
    var _c0$2 = function () { return { updateOn: "blur" }; };
    /**
     * @title Configurable paginator
     */
    var PaginatorConfigurableExample = /** @class */ (function () {
        function PaginatorConfigurableExample() {
            // MatPaginator Inputs
            this.length = 100;
            this.pageSize = 10;
            this.pageSizeOptions = [5, 10, 25, 100];
        }
        PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
            if (setPageSizeOptionsInput) {
                this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
            }
        };
        return PaginatorConfigurableExample;
    }());
    PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
    PaginatorConfigurableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 14, vars: 9, consts: [["appearance", "fill"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. 10,25,50", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-label", "Select page", 3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "List length");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "input", 1);
                i0__namespace.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_3_listener($event) { return ctx.length = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(5, "mat-label");
                i0__namespace.ɵɵtext(6, "Page size");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "input", 1);
                i0__namespace.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_7_listener($event) { return ctx.pageSize = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(9, "mat-label");
                i0__namespace.ɵɵtext(10, "Page size options");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "input", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_11_listener($event) { return ctx.setPageSizeOptions($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-paginator", 3);
                i0__namespace.ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_12_listener($event) { return ctx.pageEvent = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(13, PaginatorConfigurableExample_div_13_Template, 9, 3, "div", 4);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngModel", ctx.length);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.pageSize);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.pageSizeOptions)("ngModelOptions", i0__namespace.ɵɵpureFunction0(8, _c0$2));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.pageEvent);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.MatPaginator, i5__namespace.NgIf], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorConfigurableExample, [{
                type: i0.Component,
                args: [{ selector: 'paginator-configurable-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>List length</mat-label>\n  <input matInput [(ngModel)]=\"length\" type=\"number\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size</mat-label>\n  <input matInput [(ngModel)]=\"pageSize\" type=\"number\">\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size options</mat-label>\n  <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n         [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = $event\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n", styles: [".mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], null, null);
    })();

    var _c0$1 = function () { return [5, 10, 25, 100]; };
    /**
     * @title Paginator
     */
    var PaginatorOverviewExample = /** @class */ (function () {
        function PaginatorOverviewExample() {
        }
        return PaginatorOverviewExample;
    }());
    PaginatorOverviewExample.ɵfac = function PaginatorOverviewExample_Factory(t) { return new (t || PaginatorOverviewExample)(); };
    PaginatorOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 4, consts: [["aria-label", "Select page", 3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-paginator", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", i0__namespace.ɵɵpureFunction0(3, _c0$1));
            }
        }, directives: [i1__namespace$1.MatPaginator], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'paginator-overview-example', template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n" }]
            }], null, null);
    })();

    /**
     * @title Testing with MatPaginatorHarness
     */
    var PaginatorHarnessExample = /** @class */ (function () {
        function PaginatorHarnessExample() {
            this.length = 500;
            this.pageSize = 10;
            this.pageIndex = 0;
            this.pageSizeOptions = [5, 10, 25];
            this.showFirstLastButtons = true;
        }
        PaginatorHarnessExample.prototype.handlePageEvent = function (event) {
            this.length = event.length;
            this.pageSize = event.pageSize;
            this.pageIndex = event.pageIndex;
        };
        return PaginatorHarnessExample;
    }());
    PaginatorHarnessExample.ɵfac = function PaginatorHarnessExample_Factory(t) { return new (t || PaginatorHarnessExample)(); };
    PaginatorHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PaginatorHarnessExample, selectors: [["paginator-harness-example"]], decls: 1, vars: 5, consts: [["aria-label", "Select page", 3, "length", "pageSize", "showFirstLastButtons", "pageSizeOptions", "pageIndex", "page"]], template: function PaginatorHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-paginator", 0);
                i0__namespace.ɵɵlistener("page", function PaginatorHarnessExample_Template_mat_paginator_page_0_listener($event) { return ctx.handlePageEvent($event); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("showFirstLastButtons", ctx.showFirstLastButtons)("pageSizeOptions", ctx.pageSizeOptions)("pageIndex", ctx.pageIndex);
            }
        }, directives: [i1__namespace$1.MatPaginator], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'paginator-harness-example', template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
            }], null, null);
    })();

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

    var _c0 = function () { return [10, 50, 100]; };
    var MyCustomPaginatorIntl = /** @class */ (function () {
        function MyCustomPaginatorIntl() {
            this.changes = new rxjs.Subject();
            // For internationalization, the `$localize` function from
            // the `@angular/localize` package can be used.
            this.firstPageLabel = $localize(templateObject_1 || (templateObject_1 = __makeTemplateObject(["First page"], ["First page"])));
            this.itemsPerPageLabel = $localize(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Items per page:"], ["Items per page:"])));
            this.lastPageLabel = $localize(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Last page"], ["Last page"])));
            // You can set labels to an arbitrary string too, or dynamically compute
            // it through other third-party internationalization libraries.
            this.nextPageLabel = 'Next page';
            this.previousPageLabel = 'Previous page';
        }
        MyCustomPaginatorIntl.prototype.getRangeLabel = function (page, pageSize, length) {
            if (length === 0) {
                return $localize(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Page 1 of 1"], ["Page 1 of 1"])));
            }
            var amountPages = Math.ceil(length / pageSize);
            return $localize(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Page ", " of ", ""], ["Page ", " of ", ""])), page + 1, amountPages);
        };
        return MyCustomPaginatorIntl;
    }());
    MyCustomPaginatorIntl.ɵfac = function MyCustomPaginatorIntl_Factory(t) { return new (t || MyCustomPaginatorIntl)(); };
    MyCustomPaginatorIntl.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: MyCustomPaginatorIntl, factory: MyCustomPaginatorIntl.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MyCustomPaginatorIntl, [{
                type: i0.Injectable
            }], null, null);
    })();
    /**
     * @title Paginator internationalization
     */
    var PaginatorIntlExample = /** @class */ (function () {
        function PaginatorIntlExample() {
        }
        return PaginatorIntlExample;
    }());
    PaginatorIntlExample.ɵfac = function PaginatorIntlExample_Factory(t) { return new (t || PaginatorIntlExample)(); };
    PaginatorIntlExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PaginatorIntlExample, selectors: [["paginator-intl-example"]], decls: 1, vars: 3, consts: [["aria-label", "Select page", 3, "length", "pageSizeOptions"]], template: function PaginatorIntlExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-paginator", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("length", 200)("pageSizeOptions", i0__namespace.ɵɵpureFunction0(2, _c0));
            }
        }, directives: [i1__namespace$1.MatPaginator], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorIntlExample, [{
                type: i0.Component,
                args: [{ selector: 'paginator-intl-example', template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
            }], null, null);
    })();
    var PaginatorIntlExampleModule = /** @class */ (function () {
        function PaginatorIntlExampleModule() {
        }
        return PaginatorIntlExampleModule;
    }());
    PaginatorIntlExampleModule.ɵfac = function PaginatorIntlExampleModule_Factory(t) { return new (t || PaginatorIntlExampleModule)(); };
    PaginatorIntlExampleModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PaginatorIntlExampleModule });
    PaginatorIntlExampleModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            { provide: i1$1.MatPaginatorIntl, useClass: MyCustomPaginatorIntl }
        ], imports: [[i1$1.MatPaginatorModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorIntlExampleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.MatPaginatorModule],
                        declarations: [PaginatorIntlExample],
                        providers: [
                            { provide: i1$1.MatPaginatorIntl, useClass: MyCustomPaginatorIntl }
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PaginatorIntlExampleModule, { declarations: [PaginatorIntlExample], imports: [i1$1.MatPaginatorModule] }); })();
    var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

    var EXAMPLES = [
        PaginatorConfigurableExample,
        PaginatorHarnessExample,
        // PaginatorIntlExample is imported through it's own example module.
        PaginatorOverviewExample,
    ];
    var PaginatorExamplesModule = /** @class */ (function () {
        function PaginatorExamplesModule() {
        }
        return PaginatorExamplesModule;
    }());
    PaginatorExamplesModule.ɵfac = function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); };
    PaginatorExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PaginatorExamplesModule });
    PaginatorExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i5.CommonModule,
                i2.MatInputModule,
                i1$1.MatPaginatorModule,
                PaginatorIntlExampleModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PaginatorExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i5.CommonModule,
                            i2.MatInputModule,
                            i1$1.MatPaginatorModule,
                            PaginatorIntlExampleModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
                PaginatorHarnessExample,
                // PaginatorIntlExample is imported through it's own example module.
                PaginatorOverviewExample], imports: [i5.CommonModule,
                i2.MatInputModule,
                i1$1.MatPaginatorModule,
                PaginatorIntlExampleModule,
                i3.FormsModule], exports: [PaginatorConfigurableExample,
                PaginatorHarnessExample,
                // PaginatorIntlExample is imported through it's own example module.
                PaginatorOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PaginatorConfigurableExample = PaginatorConfigurableExample;
    exports.PaginatorExamplesModule = PaginatorExamplesModule;
    exports.PaginatorHarnessExample = PaginatorHarnessExample;
    exports.PaginatorIntlExample = PaginatorIntlExample;
    exports.PaginatorOverviewExample = PaginatorOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-paginator.umd.js.map
