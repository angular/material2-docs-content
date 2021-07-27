(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/scrolling'), require('@angular/core'), require('@angular/cdk/collections'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/scrolling', ['exports', '@angular/cdk/scrolling', '@angular/core', '@angular/cdk/collections', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.scrolling = {}), global.ng.cdk.scrolling, global.ng.core, global.ng.cdk.collections, global.rxjs));
}(this, (function (exports, i1, i0, collections, rxjs) { 'use strict';

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
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    function CdkVirtualScrollAppendOnlyExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r1);
        }
    }
    /** @title Virtual scroll with view recycling disabled. */
    var CdkVirtualScrollAppendOnlyExample = /** @class */ (function () {
        function CdkVirtualScrollAppendOnlyExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        return CdkVirtualScrollAppendOnlyExample;
    }());
    CdkVirtualScrollAppendOnlyExample.ɵfac = function CdkVirtualScrollAppendOnlyExample_Factory(t) { return new (t || CdkVirtualScrollAppendOnlyExample)(); };
    CdkVirtualScrollAppendOnlyExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollAppendOnlyExample, selectors: [["cdk-virtual-scroll-append-only-example"]], decls: 2, vars: 1, consts: [["appendOnly", "", "itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollAppendOnlyExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵtemplate(1, CdkVirtualScrollAppendOnlyExample_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.items);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollAppendOnlyExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-append-only-example',
                        styleUrls: ['cdk-virtual-scroll-append-only-example.css'],
                        templateUrl: 'cdk-virtual-scroll-append-only-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();

    function CdkVirtualScrollContextExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "div", 2);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 2);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "div", 2);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "div", 2);
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "div", 2);
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "div", 2);
            i0__namespace.ɵɵtext(12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(13, "div", 2);
            i0__namespace.ɵɵtext(14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            var index_r2 = ctx.index;
            var count_r3 = ctx.count;
            var first_r4 = ctx.first;
            var last_r5 = ctx.last;
            var even_r6 = ctx.even;
            var odd_r7 = ctx.odd;
            i0__namespace.ɵɵclassProp("example-alternate", odd_r7);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Item: ", item_r1, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Index: ", index_r2, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Count: ", count_r3, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("First: ", first_r4 ? "Yes" : "No", "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Last: ", last_r5 ? "Yes" : "No", "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Even: ", even_r6 ? "Yes" : "No", "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("Odd: ", odd_r7 ? "Yes" : "No", "");
        }
    }
    /** @title Virtual scroll context variables */
    var CdkVirtualScrollContextExample = /** @class */ (function () {
        function CdkVirtualScrollContextExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        return CdkVirtualScrollContextExample;
    }());
    CdkVirtualScrollContextExample.ɵfac = function CdkVirtualScrollContextExample_Factory(t) { return new (t || CdkVirtualScrollContextExample)(); };
    CdkVirtualScrollContextExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollContextExample, selectors: [["cdk-virtual-scroll-context-example"]], decls: 2, vars: 2, consts: [[1, "example-viewport", 3, "itemSize"], [3, "example-alternate", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item-detail"]], template: function CdkVirtualScrollContextExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵtemplate(1, CdkVirtualScrollContextExample_div_1_Template, 15, 9, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("itemSize", 18 * 7);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.items);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 18px;\n}\n\n.example-alternate[_ngcontent-%COMP%] {\n  background: rgba(127, 127, 127, 0.3);\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollContextExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-context-example',
                        styleUrls: ['cdk-virtual-scroll-context-example.css'],
                        templateUrl: 'cdk-virtual-scroll-context-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
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
        return to.concat(ar || from);
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

    function CdkVirtualScrollCustomStrategyExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r1);
        }
    }
    var CustomVirtualScrollStrategy = /** @class */ (function (_super) {
        __extends(CustomVirtualScrollStrategy, _super);
        function CustomVirtualScrollStrategy() {
            return _super.call(this, 50, 250, 500) || this;
        }
        return CustomVirtualScrollStrategy;
    }(i1.FixedSizeVirtualScrollStrategy));
    /** @title Virtual scroll with a custom strategy */
    var CdkVirtualScrollCustomStrategyExample = /** @class */ (function () {
        function CdkVirtualScrollCustomStrategyExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        return CdkVirtualScrollCustomStrategyExample;
    }());
    CdkVirtualScrollCustomStrategyExample.ɵfac = function CdkVirtualScrollCustomStrategyExample_Factory(t) { return new (t || CdkVirtualScrollCustomStrategyExample)(); };
    CdkVirtualScrollCustomStrategyExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollCustomStrategyExample, selectors: [["cdk-virtual-scroll-custom-strategy-example"]], features: [i0__namespace.ɵɵProvidersFeature([{ provide: i1.VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }])], decls: 2, vars: 1, consts: [[1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollCustomStrategyExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵtemplate(1, CdkVirtualScrollCustomStrategyExample_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.items);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollCustomStrategyExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-custom-strategy-example',
                        styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                        templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [{ provide: i1.VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
                    }]
            }], null, null);
    })();

    function CdkVirtualScrollDataSourceExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r1 || "Loading...");
        }
    }
    /** @title Virtual scroll with a custom data source */
    var CdkVirtualScrollDataSourceExample = /** @class */ (function () {
        function CdkVirtualScrollDataSourceExample() {
            this.ds = new MyDataSource();
        }
        return CdkVirtualScrollDataSourceExample;
    }());
    CdkVirtualScrollDataSourceExample.ɵfac = function CdkVirtualScrollDataSourceExample_Factory(t) { return new (t || CdkVirtualScrollDataSourceExample)(); };
    CdkVirtualScrollDataSourceExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollDataSourceExample, selectors: [["cdk-virtual-scroll-data-source-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollDataSourceExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵtemplate(1, CdkVirtualScrollDataSourceExample_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.ds);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollDataSourceExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-data-source-example',
                        styleUrls: ['cdk-virtual-scroll-data-source-example.css'],
                        templateUrl: 'cdk-virtual-scroll-data-source-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();
    var MyDataSource = /** @class */ (function (_super) {
        __extends(MyDataSource, _super);
        function MyDataSource() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this._length = 100000;
            _this._pageSize = 100;
            _this._cachedData = Array.from({ length: _this._length });
            _this._fetchedPages = new Set();
            _this._dataStream = new rxjs.BehaviorSubject(_this._cachedData);
            _this._subscription = new rxjs.Subscription();
            return _this;
        }
        MyDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            this._subscription.add(collectionViewer.viewChange.subscribe(function (range) {
                var startPage = _this._getPageForIndex(range.start);
                var endPage = _this._getPageForIndex(range.end - 1);
                for (var i = startPage; i <= endPage; i++) {
                    _this._fetchPage(i);
                }
            }));
            return this._dataStream;
        };
        MyDataSource.prototype.disconnect = function () {
            this._subscription.unsubscribe();
        };
        MyDataSource.prototype._getPageForIndex = function (index) {
            return Math.floor(index / this._pageSize);
        };
        MyDataSource.prototype._fetchPage = function (page) {
            var _this = this;
            if (this._fetchedPages.has(page)) {
                return;
            }
            this._fetchedPages.add(page);
            // Use `setTimeout` to simulate fetching data from server.
            setTimeout(function () {
                var _a;
                (_a = _this._cachedData).splice.apply(_a, __spreadArray([page * _this._pageSize, _this._pageSize], __read(Array.from({ length: _this._pageSize })
                    .map(function (_, i) { return "Item #" + (page * _this._pageSize + i); }))));
                _this._dataStream.next(_this._cachedData);
            }, Math.random() * 1000 + 200);
        };
        return MyDataSource;
    }(collections.DataSource));

    function CdkVirtualScrollDlExample_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "dt", 3);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "dd", 4);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var state_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(state_r1.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(state_r1.capital);
        }
    }
    /** @title Virtual scrolling `<dl>` */
    var CdkVirtualScrollDlExample = /** @class */ (function () {
        function CdkVirtualScrollDlExample() {
            this.states = [
                { name: 'Alabama', capital: 'Montgomery' },
                { name: 'Alaska', capital: 'Juneau' },
                { name: 'Arizona', capital: 'Phoenix' },
                { name: 'Arkansas', capital: 'Little Rock' },
                { name: 'California', capital: 'Sacramento' },
                { name: 'Colorado', capital: 'Denver' },
                { name: 'Connecticut', capital: 'Hartford' },
                { name: 'Delaware', capital: 'Dover' },
                { name: 'Florida', capital: 'Tallahassee' },
                { name: 'Georgia', capital: 'Atlanta' },
                { name: 'Hawaii', capital: 'Honolulu' },
                { name: 'Idaho', capital: 'Boise' },
                { name: 'Illinois', capital: 'Springfield' },
                { name: 'Indiana', capital: 'Indianapolis' },
                { name: 'Iowa', capital: 'Des Moines' },
                { name: 'Kansas', capital: 'Topeka' },
                { name: 'Kentucky', capital: 'Frankfort' },
                { name: 'Louisiana', capital: 'Baton Rouge' },
                { name: 'Maine', capital: 'Augusta' },
                { name: 'Maryland', capital: 'Annapolis' },
                { name: 'Massachusetts', capital: 'Boston' },
                { name: 'Michigan', capital: 'Lansing' },
                { name: 'Minnesota', capital: 'St. Paul' },
                { name: 'Mississippi', capital: 'Jackson' },
                { name: 'Missouri', capital: 'Jefferson City' },
                { name: 'Montana', capital: 'Helena' },
                { name: 'Nebraska', capital: 'Lincoln' },
                { name: 'Nevada', capital: 'Carson City' },
                { name: 'New Hampshire', capital: 'Concord' },
                { name: 'New Jersey', capital: 'Trenton' },
                { name: 'New Mexico', capital: 'Santa Fe' },
                { name: 'New York', capital: 'Albany' },
                { name: 'North Carolina', capital: 'Raleigh' },
                { name: 'North Dakota', capital: 'Bismarck' },
                { name: 'Ohio', capital: 'Columbus' },
                { name: 'Oklahoma', capital: 'Oklahoma City' },
                { name: 'Oregon', capital: 'Salem' },
                { name: 'Pennsylvania', capital: 'Harrisburg' },
                { name: 'Rhode Island', capital: 'Providence' },
                { name: 'South Carolina', capital: 'Columbia' },
                { name: 'South Dakota', capital: 'Pierre' },
                { name: 'Tennessee', capital: 'Nashville' },
                { name: 'Texas', capital: 'Austin' },
                { name: 'Utah', capital: 'Salt Lake City' },
                { name: 'Vermont', capital: 'Montpelier' },
                { name: 'Virginia', capital: 'Richmond' },
                { name: 'Washington', capital: 'Olympia' },
                { name: 'West Virginia', capital: 'Charleston' },
                { name: 'Wisconsin', capital: 'Madison' },
                { name: 'Wyoming', capital: 'Cheyenne' },
            ];
        }
        return CdkVirtualScrollDlExample;
    }());
    CdkVirtualScrollDlExample.ɵfac = function CdkVirtualScrollDlExample_Factory(t) { return new (t || CdkVirtualScrollDlExample)(); };
    CdkVirtualScrollDlExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollDlExample, selectors: [["cdk-virtual-scroll-dl-example"]], decls: 3, vars: 1, consts: [["itemSize", "60", 1, "example-viewport"], [1, "example-dl"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-dt"], [1, "example-dd"]], template: function CdkVirtualScrollDlExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵelementStart(1, "dl", 1);
                i0__namespace.ɵɵtemplate(2, CdkVirtualScrollDlExample_ng_container_2_Template, 5, 2, "ng-container", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.states);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt[_ngcontent-%COMP%] {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd[_ngcontent-%COMP%] {\n  height: 30px;\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollDlExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-dl-example',
                        styleUrls: ['cdk-virtual-scroll-dl-example.css'],
                        templateUrl: 'cdk-virtual-scroll-dl-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();

    function CdkVirtualScrollFixedBufferExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r1);
        }
    }
    /** @title Fixed size virtual scroll with custom buffer parameters */
    var CdkVirtualScrollFixedBufferExample = /** @class */ (function () {
        function CdkVirtualScrollFixedBufferExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        return CdkVirtualScrollFixedBufferExample;
    }());
    CdkVirtualScrollFixedBufferExample.ɵfac = function CdkVirtualScrollFixedBufferExample_Factory(t) { return new (t || CdkVirtualScrollFixedBufferExample)(); };
    CdkVirtualScrollFixedBufferExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollFixedBufferExample, selectors: [["cdk-virtual-scroll-fixed-buffer-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", "minBufferPx", "200", "maxBufferPx", "400", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollFixedBufferExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵtemplate(1, CdkVirtualScrollFixedBufferExample_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.items);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollFixedBufferExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-fixed-buffer-example',
                        styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
                        templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();

    function CdkVirtualScrollHorizontalExample_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r1);
        }
    }
    /** @title Horizontal virtual scroll */
    var CdkVirtualScrollHorizontalExample = /** @class */ (function () {
        function CdkVirtualScrollHorizontalExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        return CdkVirtualScrollHorizontalExample;
    }());
    CdkVirtualScrollHorizontalExample.ɵfac = function CdkVirtualScrollHorizontalExample_Factory(t) { return new (t || CdkVirtualScrollHorizontalExample)(); };
    CdkVirtualScrollHorizontalExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollHorizontalExample, selectors: [["cdk-virtual-scroll-horizontal-example"]], decls: 3, vars: 1, consts: [[1, "cdk-virtual-scroll-data-source-example"], ["orientation", "horizontal", "itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollHorizontalExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
                i0__namespace.ɵɵtemplate(2, CdkVirtualScrollHorizontalExample_div_2_Template, 2, 1, "div", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.items);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollHorizontalExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-horizontal-example',
                        styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                        templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();

    function CdkVirtualScrollOverviewExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r1);
        }
    }
    /** @title Basic virtual scroll */
    var CdkVirtualScrollOverviewExample = /** @class */ (function () {
        function CdkVirtualScrollOverviewExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        return CdkVirtualScrollOverviewExample;
    }());
    CdkVirtualScrollOverviewExample.ɵfac = function CdkVirtualScrollOverviewExample_Factory(t) { return new (t || CdkVirtualScrollOverviewExample)(); };
    CdkVirtualScrollOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollOverviewExample, selectors: [["cdk-virtual-scroll-overview-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵtemplate(1, CdkVirtualScrollOverviewExample_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.items);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-overview-example',
                        styleUrls: ['cdk-virtual-scroll-overview-example.css'],
                        templateUrl: 'cdk-virtual-scroll-overview-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();

    function CdkVirtualScrollTemplateCacheExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(item_r1);
        }
    }
    /** @title Virtual scroll with no template caching */
    var CdkVirtualScrollTemplateCacheExample = /** @class */ (function () {
        function CdkVirtualScrollTemplateCacheExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        return CdkVirtualScrollTemplateCacheExample;
    }());
    CdkVirtualScrollTemplateCacheExample.ɵfac = function CdkVirtualScrollTemplateCacheExample_Factory(t) { return new (t || CdkVirtualScrollTemplateCacheExample)(); };
    CdkVirtualScrollTemplateCacheExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkVirtualScrollTemplateCacheExample, selectors: [["cdk-virtual-scroll-template-cache-example"]], decls: 2, vars: 2, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], [1, "example-item"]], template: function CdkVirtualScrollTemplateCacheExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
                i0__namespace.ɵɵtemplate(1, CdkVirtualScrollTemplateCacheExample_div_1_Template, 2, 1, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.items)("cdkVirtualForTemplateCacheSize", 0);
            }
        }, directives: [i1__namespace.CdkVirtualScrollViewport, i1__namespace.CdkFixedSizeVirtualScroll, i1__namespace.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkVirtualScrollTemplateCacheExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-virtual-scroll-template-cache-example',
                        styleUrls: ['cdk-virtual-scroll-template-cache-example.css'],
                        templateUrl: 'cdk-virtual-scroll-template-cache-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkVirtualScrollAppendOnlyExample,
        CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample,
    ];
    var CdkScrollingExamplesModule = /** @class */ (function () {
        function CdkScrollingExamplesModule() {
        }
        return CdkScrollingExamplesModule;
    }());
    CdkScrollingExamplesModule.ɵfac = function CdkScrollingExamplesModule_Factory(t) { return new (t || CdkScrollingExamplesModule)(); };
    CdkScrollingExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkScrollingExamplesModule });
    CdkScrollingExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1.ScrollingModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkScrollingExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.ScrollingModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkScrollingExamplesModule, { declarations: [CdkVirtualScrollAppendOnlyExample,
                CdkVirtualScrollContextExample,
                CdkVirtualScrollCustomStrategyExample,
                CdkVirtualScrollDataSourceExample,
                CdkVirtualScrollDlExample,
                CdkVirtualScrollFixedBufferExample,
                CdkVirtualScrollHorizontalExample,
                CdkVirtualScrollOverviewExample,
                CdkVirtualScrollTemplateCacheExample], imports: [i1.ScrollingModule], exports: [CdkVirtualScrollAppendOnlyExample,
                CdkVirtualScrollContextExample,
                CdkVirtualScrollCustomStrategyExample,
                CdkVirtualScrollDataSourceExample,
                CdkVirtualScrollDlExample,
                CdkVirtualScrollFixedBufferExample,
                CdkVirtualScrollHorizontalExample,
                CdkVirtualScrollOverviewExample,
                CdkVirtualScrollTemplateCacheExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkScrollingExamplesModule = CdkScrollingExamplesModule;
    exports.CdkVirtualScrollAppendOnlyExample = CdkVirtualScrollAppendOnlyExample;
    exports.CdkVirtualScrollContextExample = CdkVirtualScrollContextExample;
    exports.CdkVirtualScrollCustomStrategyExample = CdkVirtualScrollCustomStrategyExample;
    exports.CdkVirtualScrollDataSourceExample = CdkVirtualScrollDataSourceExample;
    exports.CdkVirtualScrollDlExample = CdkVirtualScrollDlExample;
    exports.CdkVirtualScrollFixedBufferExample = CdkVirtualScrollFixedBufferExample;
    exports.CdkVirtualScrollHorizontalExample = CdkVirtualScrollHorizontalExample;
    exports.CdkVirtualScrollOverviewExample = CdkVirtualScrollOverviewExample;
    exports.CdkVirtualScrollTemplateCacheExample = CdkVirtualScrollTemplateCacheExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-scrolling.umd.js.map
