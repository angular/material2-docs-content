(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples', ['exports'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = {})));
}(this, (function (exports) { 'use strict';

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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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

    /**
     ******************************************************************************
     * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
     ******************************************************************************/
    var EXAMPLE_COMPONENTS = {
        "cdk-popover-edit-cdk-table-flex": {
            "title": "CDK Popover Edit on a flex cdk-table.",
            "componentName": "CdkPopoverEditCdkTableFlexExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-cdk-table": {
            "title": "CDK Popover Edit on a CDK data-table",
            "componentName": "CdkPopoverEditCdkTableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-cell-span-vanilla-table": {
            "title": "CDK Popover Edit spanning multiple columns on an HTML data-table",
            "componentName": "CdkPopoverEditCellSpanVanillaTableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-tab-out-vanilla-table": {
            "title": "CDK Popover Edit with spreadsheet-like configuration on an HTML data-table",
            "componentName": "CdkPopoverEditTabOutVanillaTableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "cdk-popover-edit-vanilla-table": {
            "title": "CDK Popover Edit on an HTML data-table",
            "componentName": "CdkPopoverEditVanillaTableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkPopoverEditExamplesModule",
                "importSpecifier": "cdk-experimental/popover-edit"
            }
        },
        "focus-monitor-directives": {
            "title": "Monitoring focus with FocusMonitor",
            "componentName": "FocusMonitorDirectivesExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkA11yExamplesModule",
                "importSpecifier": "cdk/a11y"
            }
        },
        "focus-monitor-focus-via": {
            "title": "Focusing with a specific FocusOrigin",
            "componentName": "FocusMonitorFocusViaExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkA11yExamplesModule",
                "importSpecifier": "cdk/a11y"
            }
        },
        "focus-monitor-overview": {
            "title": "Monitoring focus with FocusMonitor",
            "componentName": "FocusMonitorOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkA11yExamplesModule",
                "importSpecifier": "cdk/a11y"
            }
        },
        "cdk-clipboard-overview": {
            "title": "Clipboard overview",
            "componentName": "CdkClipboardOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkClipboardExamplesModule",
                "importSpecifier": "cdk/clipboard"
            }
        },
        "cdk-drag-drop-axis-lock": {
            "title": "Drag&Drop position locking",
            "componentName": "CdkDragDropAxisLockExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-boundary": {
            "title": "Drag&Drop boundary",
            "componentName": "CdkDragDropBoundaryExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-connected-sorting-group": {
            "title": "Drag&Drop connected sorting group",
            "componentName": "CdkDragDropConnectedSortingGroupExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-connected-sorting": {
            "title": "Drag&Drop connected sorting",
            "componentName": "CdkDragDropConnectedSortingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-custom-placeholder": {
            "title": "Drag&Drop custom placeholder",
            "componentName": "CdkDragDropCustomPlaceholderExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-custom-preview": {
            "title": "Drag&Drop custom preview",
            "componentName": "CdkDragDropCustomPreviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-delay": {
            "title": "Delayed dragging",
            "componentName": "CdkDragDropDelayExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-disabled-sorting": {
            "title": "Drag&Drop disabled sorting",
            "componentName": "CdkDragDropDisabledSortingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-disabled": {
            "title": "Drag&Drop disabled",
            "componentName": "CdkDragDropDisabledExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-enter-predicate": {
            "title": "Drag&Drop enter predicate",
            "componentName": "CdkDragDropEnterPredicateExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-free-drag-position": {
            "title": "Programmatically setting the free drag position",
            "componentName": "CdkDragDropFreeDragPositionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-handle": {
            "title": "Drag&Drop with a handle",
            "componentName": "CdkDragDropHandleExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-horizontal-sorting": {
            "title": "Drag&Drop horizontal sorting",
            "componentName": "CdkDragDropHorizontalSortingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-overview": {
            "title": "Basic Drag&Drop",
            "componentName": "CdkDragDropOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-root-element": {
            "title": "Drag&Drop with alternate root element",
            "componentName": "CdkDragDropRootElementExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-drag-drop-sorting": {
            "title": "Drag&Drop sorting",
            "componentName": "CdkDragDropSortingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkDragDropExamplesModule",
                "importSpecifier": "cdk/drag-drop"
            }
        },
        "cdk-overlay-basic": {
            "title": "Overlay basic example",
            "componentName": "CdkOverlayBasicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkOverlayExamplesModule",
                "importSpecifier": "cdk/overlay"
            }
        },
        "cdk-platform-overview": {
            "title": "Platform overview",
            "componentName": "CdkPlatformOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkPlatformExamplesModule",
                "importSpecifier": "cdk/platform"
            }
        },
        "cdk-portal-overview": {
            "title": "Portal overview",
            "componentName": "CdkPortalOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [
                "ComponentPortalExample"
            ],
            "module": {
                "name": "CdkPortalExamplesModule",
                "importSpecifier": "cdk/portal"
            }
        },
        "cdk-virtual-scroll-context": {
            "title": "Virtual scroll context variables",
            "componentName": "CdkVirtualScrollContextExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-custom-strategy": {
            "title": "Virtual scroll with a custom strategy",
            "componentName": "CdkVirtualScrollCustomStrategyExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-data-source": {
            "title": "Virtual scroll with a custom data source",
            "componentName": "CdkVirtualScrollDataSourceExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-dl": {
            "title": "Virtual scrolling `<dl>`",
            "componentName": "CdkVirtualScrollDlExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-fixed-buffer": {
            "title": "Fixed size virtual scroll with custom buffer parameters",
            "componentName": "CdkVirtualScrollFixedBufferExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-horizontal": {
            "title": "Horizontal virtual scroll",
            "componentName": "CdkVirtualScrollHorizontalExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-overview": {
            "title": "Basic virtual scroll",
            "componentName": "CdkVirtualScrollOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-virtual-scroll-template-cache": {
            "title": "Virtual scroll with no template caching",
            "componentName": "CdkVirtualScrollTemplateCacheExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkScrollingExamplesModule",
                "importSpecifier": "cdk/scrolling"
            }
        },
        "cdk-custom-stepper-without-form": {
            "title": "A custom CDK stepper without a form",
            "componentName": "CdkCustomStepperWithoutFormExample",
            "additionalFiles": [
                "./example-custom-stepper.html",
                "./example-custom-stepper.css"
            ],
            "additionalComponents": [
                "CustomStepper"
            ],
            "module": {
                "name": "CdkStepperExamplesModule",
                "importSpecifier": "cdk/stepper"
            }
        },
        "cdk-linear-stepper-with-form": {
            "title": "A custom CDK linear stepper with forms",
            "componentName": "CdkLinearStepperWithFormExample",
            "additionalFiles": [
                "./example-custom-linear-stepper.html",
                "./example-custom-linear-stepper.css"
            ],
            "additionalComponents": [
                "CustomLinearStepper"
            ],
            "module": {
                "name": "CdkStepperExamplesModule",
                "importSpecifier": "cdk/stepper"
            }
        },
        "cdk-table-basic-flex": {
            "title": "Basic use of `<cdk-table>` (uses display flex)",
            "componentName": "CdkTableBasicFlexExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkTableExamplesModule",
                "importSpecifier": "cdk/table"
            }
        },
        "cdk-table-basic": {
            "title": "Basic CDK data-table",
            "componentName": "CdkTableBasicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkTableExamplesModule",
                "importSpecifier": "cdk/table"
            }
        },
        "text-field-autofill-directive": {
            "title": "Monitoring autofill state with cdkAutofill",
            "componentName": "TextFieldAutofillDirectiveExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkTextFieldExamplesModule",
                "importSpecifier": "cdk/text-field"
            }
        },
        "text-field-autofill-monitor": {
            "title": "Monitoring autofill state with AutofillMonitor",
            "componentName": "TextFieldAutofillMonitorExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkTextFieldExamplesModule",
                "importSpecifier": "cdk/text-field"
            }
        },
        "text-field-autosize-textarea": {
            "title": "Auto-resizing textarea",
            "componentName": "TextFieldAutosizeTextareaExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkTextFieldExamplesModule",
                "importSpecifier": "cdk/text-field"
            }
        },
        "cdk-tree-flat": {
            "title": "Tree with flat nodes",
            "componentName": "CdkTreeFlatExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkTreeExamplesModule",
                "importSpecifier": "cdk/tree"
            }
        },
        "cdk-tree-nested": {
            "title": "Tree with nested nodes",
            "componentName": "CdkTreeNestedExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CdkTreeExamplesModule",
                "importSpecifier": "cdk/tree"
            }
        },
        "default-enabled-column-resize-flex": {
            "title": "Default-enabled column resize with a flex-based mat-table.",
            "componentName": "DefaultEnabledColumnResizeFlexExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ColumnResizeExamplesModule",
                "importSpecifier": "material-experimental/column-resize"
            }
        },
        "default-enabled-column-resize": {
            "title": "Default-enabled column resize with a table-based mat-table.",
            "componentName": "DefaultEnabledColumnResizeExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ColumnResizeExamplesModule",
                "importSpecifier": "material-experimental/column-resize"
            }
        },
        "opt-in-column-resize": {
            "title": "Opt-in column resize with a table-based mat-table.",
            "componentName": "OptInColumnResizeExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ColumnResizeExamplesModule",
                "importSpecifier": "material-experimental/column-resize"
            }
        },
        "mdc-card-fancy": {
            "title": "Card with multiple sections",
            "componentName": "MdcCardFancyExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "MdcCardExamplesModule",
                "importSpecifier": "material-experimental/mdc-card"
            }
        },
        "form-field-custom-control": {
            "title": "Form field with custom telephone number input control.",
            "componentName": "FormFieldCustomControlExample",
            "additionalFiles": [
                "example-tel-input-example.html",
                "example-tel-input-example.css"
            ],
            "additionalComponents": [
                "MyTelInput"
            ],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "popover-edit-cell-span-mat-table": {
            "title": "Material Popover Edit spanning multiple columns on a Material data-table",
            "componentName": "PopoverEditCellSpanMatTableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "popover-edit-mat-table-flex": {
            "title": "Material Popover Edit on a flex Material data-table",
            "componentName": "PopoverEditMatTableFlexExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "popover-edit-mat-table": {
            "title": "Material Popover Edit on a Material data-table",
            "componentName": "PopoverEditMatTableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "popover-edit-tab-out-mat-table": {
            "title": "Material Popover Edit with spreadsheet-like configuration on a Material data-table",
            "componentName": "PopoverEditTabOutMatTableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "PopoverEditExamplesModule",
                "importSpecifier": "material-experimental/popover-edit"
            }
        },
        "autocomplete-auto-active-first-option": {
            "title": "Highlight the first autocomplete option",
            "componentName": "AutocompleteAutoActiveFirstOptionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-display": {
            "title": "Display value autocomplete",
            "componentName": "AutocompleteDisplayExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-filter": {
            "title": "Filter autocomplete",
            "componentName": "AutocompleteFilterExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-optgroup": {
            "title": "Option groups autocomplete",
            "componentName": "AutocompleteOptgroupExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-overview": {
            "title": "Autocomplete overview",
            "componentName": "AutocompleteOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-plain-input": {
            "title": "Plain input autocomplete",
            "componentName": "AutocompletePlainInputExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "autocomplete-simple": {
            "title": "Simple autocomplete",
            "componentName": "AutocompleteSimpleExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "AutocompleteExamplesModule",
                "importSpecifier": "material/autocomplete"
            }
        },
        "badge-overview": {
            "title": "Badge overview",
            "componentName": "BadgeOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "BadgeExamplesModule",
                "importSpecifier": "material/badge"
            }
        },
        "bottom-sheet-overview": {
            "title": "Bottom Sheet Overview",
            "componentName": "BottomSheetOverviewExample",
            "additionalFiles": [
                "bottom-sheet-overview-example-sheet.html"
            ],
            "additionalComponents": [
                "BottomSheetOverviewExampleSheet"
            ],
            "module": {
                "name": "BottomSheetExamplesModule",
                "importSpecifier": "material/bottom-sheet"
            }
        },
        "button-toggle-appearance": {
            "title": "Button toggle appearance",
            "componentName": "ButtonToggleAppearanceExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ButtonToggleExamplesModule",
                "importSpecifier": "material/button-toggle"
            }
        },
        "button-toggle-exclusive": {
            "title": "Exclusive selection",
            "componentName": "ButtonToggleExclusiveExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ButtonToggleExamplesModule",
                "importSpecifier": "material/button-toggle"
            }
        },
        "button-toggle-overview": {
            "title": "Basic button-toggles",
            "componentName": "ButtonToggleOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ButtonToggleExamplesModule",
                "importSpecifier": "material/button-toggle"
            }
        },
        "button-overview": {
            "title": "Basic buttons",
            "componentName": "ButtonOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ButtonExamplesModule",
                "importSpecifier": "material/button"
            }
        },
        "button-types": {
            "title": "Button varieties",
            "componentName": "ButtonTypesExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ButtonExamplesModule",
                "importSpecifier": "material/button"
            }
        },
        "card-fancy": {
            "title": "Card with multiple sections",
            "componentName": "CardFancyExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CardExamplesModule",
                "importSpecifier": "material/card"
            }
        },
        "card-overview": {
            "title": "Basic cards",
            "componentName": "CardOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CardExamplesModule",
                "importSpecifier": "material/card"
            }
        },
        "checkbox-configurable": {
            "title": "Configurable checkbox",
            "componentName": "CheckboxConfigurableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CheckboxExamplesModule",
                "importSpecifier": "material/checkbox"
            }
        },
        "checkbox-overview": {
            "title": "Basic checkboxes",
            "componentName": "CheckboxOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CheckboxExamplesModule",
                "importSpecifier": "material/checkbox"
            }
        },
        "chips-autocomplete": {
            "title": "Chips Autocomplete",
            "componentName": "ChipsAutocompleteExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-drag-drop": {
            "title": "Chips Drag and Drop",
            "componentName": "ChipsDragDropExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-input": {
            "title": "Chips with input",
            "componentName": "ChipsInputExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-overview": {
            "title": "Basic chips",
            "componentName": "ChipsOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "chips-stacked": {
            "title": "Stacked chips",
            "componentName": "ChipsStackedExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ChipsExamplesModule",
                "importSpecifier": "material/chips"
            }
        },
        "elevation-overview": {
            "title": "Elevation CSS classes",
            "componentName": "ElevationOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CoreExamplesModule",
                "importSpecifier": "material/core"
            }
        },
        "ripple-overview": {
            "title": "MatRipple basic usage",
            "componentName": "RippleOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "CoreExamplesModule",
                "importSpecifier": "material/core"
            }
        },
        "date-range-picker-comparison": {
            "title": "Date range picker comparison ranges",
            "componentName": "DateRangePickerComparisonExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "date-range-picker-forms": {
            "title": "Date range picker forms integration",
            "componentName": "DateRangePickerFormsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "date-range-picker-overview": {
            "title": "Basic date range picker",
            "componentName": "DateRangePickerOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "date-range-picker-selection-strategy": {
            "title": "Date range picker with custom a selection strategy",
            "componentName": "DateRangePickerSelectionStrategyExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-api": {
            "title": "Datepicker open method",
            "componentName": "DatepickerApiExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-color": {
            "title": "Datepicker palette colors",
            "componentName": "DatepickerColorExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-custom-header": {
            "title": "Datepicker with custom calendar header",
            "componentName": "DatepickerCustomHeaderExample",
            "additionalFiles": [],
            "additionalComponents": [
                "ExampleHeader"
            ],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-custom-icon": {
            "title": "Datepicker with custom icon",
            "componentName": "DatepickerCustomIconExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-date-class": {
            "title": "Datepicker with custom date classes",
            "componentName": "DatepickerDateClassExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-disabled": {
            "title": "Disabled datepicker",
            "componentName": "DatepickerDisabledExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-events": {
            "title": "Datepicker input and change events",
            "componentName": "DatepickerEventsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-filter": {
            "title": "Datepicker with filter validation",
            "componentName": "DatepickerFilterExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-formats": {
            "title": "Datepicker with custom formats",
            "componentName": "DatepickerFormatsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-locale": {
            "title": "Datepicker with different locale",
            "componentName": "DatepickerLocaleExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-min-max": {
            "title": "Datepicker with min & max validation",
            "componentName": "DatepickerMinMaxExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-moment": {
            "title": "Datepicker that uses Moment.js dates",
            "componentName": "DatepickerMomentExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-overview": {
            "title": "Basic datepicker",
            "componentName": "DatepickerOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-start-view": {
            "title": "Datepicker start date",
            "componentName": "DatepickerStartViewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-touch": {
            "title": "Datepicker touch UI",
            "componentName": "DatepickerTouchExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-value": {
            "title": "Datepicker selected value",
            "componentName": "DatepickerValueExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "datepicker-views-selection": {
            "title": "Datepicker emulating a Year and month picker",
            "componentName": "DatepickerViewsSelectionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DatepickerExamplesModule",
                "importSpecifier": "material/datepicker"
            }
        },
        "dialog-content": {
            "title": "Dialog with header, scrollable content and actions",
            "componentName": "DialogContentExample",
            "additionalFiles": [
                "dialog-content-example-dialog.html"
            ],
            "additionalComponents": [
                "DialogContentExampleDialog"
            ],
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "dialog-data": {
            "title": "Injecting data when opening a dialog",
            "componentName": "DialogDataExample",
            "additionalFiles": [
                "dialog-data-example-dialog.html"
            ],
            "additionalComponents": [
                "DialogDataExampleDialog"
            ],
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "dialog-elements": {
            "title": "Dialog elements",
            "componentName": "DialogElementsExample",
            "additionalFiles": [
                "dialog-elements-example-dialog.html"
            ],
            "additionalComponents": [
                "DialogElementsExampleDialog"
            ],
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "dialog-overview": {
            "title": "Dialog Overview",
            "componentName": "DialogOverviewExample",
            "additionalFiles": [
                "dialog-overview-example-dialog.html"
            ],
            "additionalComponents": [
                "DialogOverviewExampleDialog"
            ],
            "module": {
                "name": "DialogExamplesModule",
                "importSpecifier": "material/dialog"
            }
        },
        "divider-overview": {
            "title": "Basic divider",
            "componentName": "DividerOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "DividerExamplesModule",
                "importSpecifier": "material/divider"
            }
        },
        "expansion-expand-collapse-all": {
            "title": "Accordion with expand/collapse all toggles",
            "componentName": "ExpansionExpandCollapseAllExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ExpansionExamplesModule",
                "importSpecifier": "material/expansion"
            }
        },
        "expansion-overview": {
            "title": "Basic expansion panel",
            "componentName": "ExpansionOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ExpansionExamplesModule",
                "importSpecifier": "material/expansion"
            }
        },
        "expansion-steps": {
            "title": "Expansion panel as accordion",
            "componentName": "ExpansionStepsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ExpansionExamplesModule",
                "importSpecifier": "material/expansion"
            }
        },
        "form-field-appearance": {
            "title": "Form field appearance variants",
            "componentName": "FormFieldAppearanceExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-error": {
            "title": "Form field with error messages",
            "componentName": "FormFieldErrorExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-hint": {
            "title": "Form field with hints",
            "componentName": "FormFieldHintExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-label": {
            "title": "Form field with label",
            "componentName": "FormFieldLabelExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-overview": {
            "title": "Simple form field",
            "componentName": "FormFieldOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-prefix-suffix": {
            "title": "Form field with prefix & suffix",
            "componentName": "FormFieldPrefixSuffixExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "form-field-theming": {
            "title": "Form field theming",
            "componentName": "FormFieldThemingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "FormFieldExamplesModule",
                "importSpecifier": "material/form-field"
            }
        },
        "grid-list-dynamic": {
            "title": "Dynamic grid-list",
            "componentName": "GridListDynamicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "GridListExamplesModule",
                "importSpecifier": "material/grid-list"
            }
        },
        "grid-list-overview": {
            "title": "Basic grid-list",
            "componentName": "GridListOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "GridListExamplesModule",
                "importSpecifier": "material/grid-list"
            }
        },
        "icon-overview": {
            "title": "Basic icons",
            "componentName": "IconOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "IconExamplesModule",
                "importSpecifier": "material/icon"
            }
        },
        "icon-svg": {
            "title": "SVG icons",
            "componentName": "IconSvgExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "IconExamplesModule",
                "importSpecifier": "material/icon"
            }
        },
        "input-clearable": {
            "title": "Input with a clear button",
            "componentName": "InputClearableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-error-state-matcher": {
            "title": "Input with a custom ErrorStateMatcher",
            "componentName": "InputErrorStateMatcherExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-errors": {
            "title": "Input with error messages",
            "componentName": "InputErrorsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-form": {
            "title": "Inputs in a form",
            "componentName": "InputFormExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-hint": {
            "title": "Input with hints",
            "componentName": "InputHintExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-overview": {
            "title": "Basic Inputs",
            "componentName": "InputOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "input-prefix-suffix": {
            "title": "Inputs with prefixes and suffixes",
            "componentName": "InputPrefixSuffixExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "InputExamplesModule",
                "importSpecifier": "material/input"
            }
        },
        "list-overview": {
            "title": "Basic list",
            "componentName": "ListOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "list-sections": {
            "title": "List with sections",
            "componentName": "ListSectionsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "list-selection": {
            "title": "List with selection",
            "componentName": "ListSelectionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "list-single-selection": {
            "title": "List with single selection",
            "componentName": "ListSingleSelectionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ListExamplesModule",
                "importSpecifier": "material/list"
            }
        },
        "menu-icons": {
            "title": "Menu with icons",
            "componentName": "MenuIconsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "menu-nested": {
            "title": "Nested menu",
            "componentName": "MenuNestedExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "menu-overview": {
            "title": "Basic menu",
            "componentName": "MenuOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "menu-position": {
            "title": "Menu positioning",
            "componentName": "MenuPositionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "MenuExamplesModule",
                "importSpecifier": "material/menu"
            }
        },
        "paginator-configurable": {
            "title": "Configurable paginator",
            "componentName": "PaginatorConfigurableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "PaginatorExamplesModule",
                "importSpecifier": "material/paginator"
            }
        },
        "paginator-overview": {
            "title": "Paginator",
            "componentName": "PaginatorOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "PaginatorExamplesModule",
                "importSpecifier": "material/paginator"
            }
        },
        "progress-bar-buffer": {
            "title": "Buffer progress-bar",
            "componentName": "ProgressBarBufferExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-configurable": {
            "title": "Configurable progress-bar",
            "componentName": "ProgressBarConfigurableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-determinate": {
            "title": "Determinate progress-bar",
            "componentName": "ProgressBarDeterminateExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-indeterminate": {
            "title": "Indeterminate progress-bar",
            "componentName": "ProgressBarIndeterminateExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-bar-query": {
            "title": "Query progress-bar",
            "componentName": "ProgressBarQueryExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ProgressBarExamplesModule",
                "importSpecifier": "material/progress-bar"
            }
        },
        "progress-spinner-configurable": {
            "title": "Configurable progress spinner",
            "componentName": "ProgressSpinnerConfigurableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ProgressSpinnerExamplesModule",
                "importSpecifier": "material/progress-spinner"
            }
        },
        "progress-spinner-overview": {
            "title": "Basic progress-spinner",
            "componentName": "ProgressSpinnerOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ProgressSpinnerExamplesModule",
                "importSpecifier": "material/progress-spinner"
            }
        },
        "radio-ng-model": {
            "title": "Radios with ngModel",
            "componentName": "RadioNgModelExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "RadioExamplesModule",
                "importSpecifier": "material/radio"
            }
        },
        "radio-overview": {
            "title": "Basic radios",
            "componentName": "RadioOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "RadioExamplesModule",
                "importSpecifier": "material/radio"
            }
        },
        "select-custom-trigger": {
            "title": "Select with custom trigger text",
            "componentName": "SelectCustomTriggerExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-disabled": {
            "title": "Disabled select",
            "componentName": "SelectDisabledExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-error-state-matcher": {
            "title": "Select with a custom ErrorStateMatcher",
            "componentName": "SelectErrorStateMatcherExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-form": {
            "title": "Select in a form",
            "componentName": "SelectFormExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-hint-error": {
            "title": "Select with form field features",
            "componentName": "SelectHintErrorExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-initial-value": {
            "title": "Basic select with initial value and no form",
            "componentName": "SelectInitialValueExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-multiple": {
            "title": "Select with multiple selection",
            "componentName": "SelectMultipleExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-no-ripple": {
            "title": "Select with no option ripple",
            "componentName": "SelectNoRippleExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-optgroup": {
            "title": "Select with option groups",
            "componentName": "SelectOptgroupExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-overview": {
            "title": "Basic select",
            "componentName": "SelectOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-panel-class": {
            "title": "Select with custom panel styling",
            "componentName": "SelectPanelClassExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-reactive-form": {
            "title": "Select in a reactive form",
            "componentName": "SelectReactiveFormExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-reset": {
            "title": "Select with reset option",
            "componentName": "SelectResetExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "select-value-binding": {
            "title": "Select with 2-way value binding",
            "componentName": "SelectValueBindingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SelectExamplesModule",
                "importSpecifier": "material/select"
            }
        },
        "sidenav-autosize": {
            "title": "Autosize sidenav",
            "componentName": "SidenavAutosizeExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-backdrop": {
            "title": "Drawer with explicit backdrop setting",
            "componentName": "SidenavBackdropExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-disable-close": {
            "title": "Sidenav with custom escape and backdrop click behavior",
            "componentName": "SidenavDisableCloseExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-drawer-overview": {
            "title": "Basic drawer",
            "componentName": "SidenavDrawerOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-fixed": {
            "title": "Fixed sidenav",
            "componentName": "SidenavFixedExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-mode": {
            "title": "Sidenav with configurable mode",
            "componentName": "SidenavModeExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-open-close": {
            "title": "Sidenav open & close behavior",
            "componentName": "SidenavOpenCloseExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-overview": {
            "title": "Basic sidenav",
            "componentName": "SidenavOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-position": {
            "title": "Implicit main content with two sidenavs",
            "componentName": "SidenavPositionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "sidenav-responsive": {
            "title": "Responsive sidenav",
            "componentName": "SidenavResponsiveExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SidenavExamplesModule",
                "importSpecifier": "material/sidenav"
            }
        },
        "slide-toggle-configurable": {
            "title": "Configurable slide-toggle",
            "componentName": "SlideToggleConfigurableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SlideToggleExamplesModule",
                "importSpecifier": "material/slide-toggle"
            }
        },
        "slide-toggle-forms": {
            "title": "Slide-toggle with forms",
            "componentName": "SlideToggleFormsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SlideToggleExamplesModule",
                "importSpecifier": "material/slide-toggle"
            }
        },
        "slide-toggle-overview": {
            "title": "Basic slide-toggles",
            "componentName": "SlideToggleOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SlideToggleExamplesModule",
                "importSpecifier": "material/slide-toggle"
            }
        },
        "slider-configurable": {
            "title": "Configurable slider",
            "componentName": "SliderConfigurableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SliderExamplesModule",
                "importSpecifier": "material/slider"
            }
        },
        "slider-formatting": {
            "title": "Slider with custom thumb label formatting.",
            "componentName": "SliderFormattingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SliderExamplesModule",
                "importSpecifier": "material/slider"
            }
        },
        "slider-overview": {
            "title": "Basic slider",
            "componentName": "SliderOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SliderExamplesModule",
                "importSpecifier": "material/slider"
            }
        },
        "snack-bar-component": {
            "title": "Snack-bar with a custom component",
            "componentName": "SnackBarComponentExample",
            "additionalFiles": [
                "snack-bar-component-example-snack.html"
            ],
            "additionalComponents": [
                "PizzaPartyComponent"
            ],
            "module": {
                "name": "SnackBarExamplesModule",
                "importSpecifier": "material/snack-bar"
            }
        },
        "snack-bar-overview": {
            "title": "Basic snack-bar",
            "componentName": "SnackBarOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SnackBarExamplesModule",
                "importSpecifier": "material/snack-bar"
            }
        },
        "snack-bar-position": {
            "title": "Snack-bar with configurable position",
            "componentName": "SnackBarPositionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SnackBarExamplesModule",
                "importSpecifier": "material/snack-bar"
            }
        },
        "sort-overview": {
            "title": "Sorting overview",
            "componentName": "SortOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "SortExamplesModule",
                "importSpecifier": "material/sort"
            }
        },
        "stepper-editable": {
            "title": "Stepper with editable steps",
            "componentName": "StepperEditableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-errors": {
            "title": "Stepper that displays errors in the steps",
            "componentName": "StepperErrorsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-label-position-bottom": {
            "title": "Stepper label bottom position",
            "componentName": "StepperLabelPositionBottomExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-optional": {
            "title": "Stepper with optional steps",
            "componentName": "StepperOptionalExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-overview": {
            "title": "Stepper overview",
            "componentName": "StepperOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-states": {
            "title": "Stepper with customized states",
            "componentName": "StepperStatesExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "stepper-vertical": {
            "title": "Stepper vertical",
            "componentName": "StepperVerticalExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "StepperExamplesModule",
                "importSpecifier": "material/stepper"
            }
        },
        "table-basic-flex": {
            "title": "Basic use of `<mat-table>` (uses display flex)",
            "componentName": "TableBasicFlexExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-basic": {
            "title": "Basic use of `<table mat-table>`",
            "componentName": "TableBasicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-dynamic-columns": {
            "title": "Table dynamically changing the columns displayed",
            "componentName": "TableDynamicColumnsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-expandable-rows": {
            "title": "Table with expandable rows",
            "componentName": "TableExpandableRowsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-filtering": {
            "title": "Table with filtering",
            "componentName": "TableFilteringExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-footer-row": {
            "title": "Footer row table",
            "componentName": "TableFooterRowExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-http": {
            "title": "Table retrieving data through HTTP",
            "componentName": "TableHttpExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-multiple-header-footer": {
            "title": "Table with multiple header and footer rows",
            "componentName": "TableMultipleHeaderFooterExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-overview": {
            "title": "Data table with sorting, pagination, and filtering.",
            "componentName": "TableOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-pagination": {
            "title": "Table with pagination",
            "componentName": "TablePaginationExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-reorderable": {
            "title": "Table with re-orderable columns",
            "componentName": "TableReorderableExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-row-context": {
            "title": "Table showing each row context properties.",
            "componentName": "TableRowContextExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-selection": {
            "title": "Table with selection",
            "componentName": "TableSelectionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sorting": {
            "title": "Table with sorting",
            "componentName": "TableSortingExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-columns": {
            "title": "Table with sticky columns",
            "componentName": "TableStickyColumnsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-complex-flex": {
            "title": "Flex-layout tables with toggle-able sticky headers, footers, and columns",
            "componentName": "TableStickyComplexFlexExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-complex": {
            "title": "Tables with toggle-able sticky headers, footers, and columns",
            "componentName": "TableStickyComplexExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-footer": {
            "title": "Table with a sticky footer",
            "componentName": "TableStickyFooterExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-sticky-header": {
            "title": "Table with sticky header",
            "componentName": "TableStickyHeaderExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-text-column-advanced": {
            "title": "Use of 'mat-text-column' with various configurations of the interface.",
            "componentName": "TableTextColumnAdvancedExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-text-column": {
            "title": "Use of `mat-text-column` which can be used for simple columns that only need to display\na text value for the header and cells.",
            "componentName": "TableTextColumnExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "table-wrapped": {
            "title": "Table example that shows how to wrap a table component for definition and behavior reuse.",
            "componentName": "TableWrappedExample",
            "additionalFiles": [
                "wrapper-table.html"
            ],
            "additionalComponents": [
                "WrapperTable"
            ],
            "module": {
                "name": "TableExamplesModule",
                "importSpecifier": "material/table"
            }
        },
        "tab-group-align": {
            "title": "Tab group with aligned labels",
            "componentName": "TabGroupAlignExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-animations": {
            "title": "Tab group animations",
            "componentName": "TabGroupAnimationsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-async": {
            "title": "Tab group with asynchronously loading tab contents",
            "componentName": "TabGroupAsyncExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-basic": {
            "title": "Basic use of the tab group",
            "componentName": "TabGroupBasicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-custom-label": {
            "title": "Using tabs with a custom label template",
            "componentName": "TabGroupCustomLabelExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-dynamic-height": {
            "title": "Tab group with dynamic height based on tab contents",
            "componentName": "TabGroupDynamicHeightExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-dynamic": {
            "title": "Tab group with dynamically changing tabs",
            "componentName": "TabGroupDynamicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-header-below": {
            "title": "Tab group with the headers on the bottom",
            "componentName": "TabGroupHeaderBelowExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-lazy-loaded": {
            "title": "Tab group where the tab content is loaded lazily (when activated)",
            "componentName": "TabGroupLazyLoadedExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-stretched": {
            "title": "Tab group with stretched labels",
            "componentName": "TabGroupStretchedExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-group-theme": {
            "title": "Customizing the theme options on the tab group",
            "componentName": "TabGroupThemeExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "tab-nav-bar-basic": {
            "title": "Basic use of the tab nav bar",
            "componentName": "TabNavBarBasicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TabGroupExamplesModule",
                "importSpecifier": "material/tabs"
            }
        },
        "toolbar-basic": {
            "title": "Basic toolbar",
            "componentName": "ToolbarBasicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ToolbarExamplesModule",
                "importSpecifier": "material/toolbar"
            }
        },
        "toolbar-multirow": {
            "title": "Multi-row toolbar",
            "componentName": "ToolbarMultirowExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ToolbarExamplesModule",
                "importSpecifier": "material/toolbar"
            }
        },
        "toolbar-overview": {
            "title": "Toolbar overview",
            "componentName": "ToolbarOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "ToolbarExamplesModule",
                "importSpecifier": "material/toolbar"
            }
        },
        "tooltip-auto-hide": {
            "title": "Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.",
            "componentName": "TooltipAutoHideExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-custom-class": {
            "title": "Tooltip that can have a custom class applied.",
            "componentName": "TooltipCustomClassExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-delay": {
            "title": "Tooltip with a show and hide delay",
            "componentName": "TooltipDelayExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-disabled": {
            "title": "Tooltip that can be disabled",
            "componentName": "TooltipDisabledExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-manual": {
            "title": "Tooltip that can be manually shown/hidden.",
            "componentName": "TooltipManualExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-message": {
            "title": "Tooltip with a changing message",
            "componentName": "TooltipMessageExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-modified-defaults": {
            "title": "Tooltip with a show and hide delay",
            "componentName": "TooltipModifiedDefaultsExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-overview": {
            "title": "Basic tooltip",
            "componentName": "TooltipOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tooltip-position": {
            "title": "Tooltip with a custom position",
            "componentName": "TooltipPositionExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TooltipExamplesModule",
                "importSpecifier": "material/tooltip"
            }
        },
        "tree-checklist": {
            "title": "Tree with checkboxes",
            "componentName": "TreeChecklistExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-dynamic": {
            "title": "Tree with dynamic data",
            "componentName": "TreeDynamicExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-flat-overview": {
            "title": "Tree with flat nodes",
            "componentName": "TreeFlatOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-loadmore": {
            "title": "Tree with partially loaded data",
            "componentName": "TreeLoadmoreExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        },
        "tree-nested-overview": {
            "title": "Tree with nested nodes",
            "componentName": "TreeNestedOverviewExample",
            "additionalFiles": [],
            "additionalComponents": [],
            "module": {
                "name": "TreeExamplesModule",
                "importSpecifier": "material/tree"
            }
        }
    };

    /**
     * Example data with information about component name, selector, files used in
     * example, and path to examples.
     */
    var ExampleData = /** @class */ (function () {
        function ExampleData(example) {
            var _a;
            if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
                return;
            }
            var _b = EXAMPLE_COMPONENTS[example], componentName = _b.componentName, additionalFiles = _b.additionalFiles, additionalComponents = _b.additionalComponents, title = _b.title;
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
            this.selectorName = this.indexFilename = example + "-example";
            (_a = this.exampleFiles).push.apply(_a, __spread(additionalFiles));
            this.description = title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
            this.componentNames = __spread([componentName], additionalComponents);
        }
        return ExampleData;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
    exports.ExampleData = ExampleData;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples.umd.js.map
