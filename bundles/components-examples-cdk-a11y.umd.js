(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/core'), require('@angular/material/select'), require('@angular/material/form-field'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/a11y', ['exports', '@angular/cdk/a11y', '@angular/core', '@angular/material/select', '@angular/material/form-field', '@angular/material/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.a11y = {}), global.ng.cdk.a11y, global.ng.core, global.ng.material.select, global.ng.material.formField, global.ng.material.core));
}(this, (function (exports, i1, i0, i3, i2, i4) { 'use strict';

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
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    /** @title Monitoring focus with FocusMonitor */
    var FocusMonitorDirectivesExample = /** @class */ (function () {
        function FocusMonitorDirectivesExample(_ngZone, _cdr) {
            this._ngZone = _ngZone;
            this._cdr = _cdr;
            this.elementOrigin = this.formatOrigin(null);
            this.subtreeOrigin = this.formatOrigin(null);
        }
        FocusMonitorDirectivesExample.prototype.formatOrigin = function (origin) {
            return origin ? origin + ' focused' : 'blurred';
        };
        // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
        FocusMonitorDirectivesExample.prototype.markForCheck = function () {
            var _this = this;
            this._ngZone.run(function () { return _this._cdr.markForCheck(); });
        };
        return FocusMonitorDirectivesExample;
    }());
    FocusMonitorDirectivesExample.ɵfac = function FocusMonitorDirectivesExample_Factory(t) { return new (t || FocusMonitorDirectivesExample)(i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    FocusMonitorDirectivesExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FocusMonitorDirectivesExample, selectors: [["focus-monitor-directives-example"]], decls: 11, vars: 2, consts: [[1, "example-focus-monitor"], ["cdkMonitorSubtreeFocus", "", 3, "cdkFocusChange"]], template: function FocusMonitorDirectivesExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_button_cdkFocusChange_1_listener($event) { ctx.elementOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 0);
                i0__namespace.ɵɵelementStart(4, "div", 1);
                i0__namespace.ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_div_cdkFocusChange_4_listener($event) { ctx.subtreeOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
                i0__namespace.ɵɵelementStart(5, "p");
                i0__namespace.ɵɵtext(6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "button");
                i0__namespace.ɵɵtext(8, "Child Button 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button");
                i0__namespace.ɵɵtext(10, "Child Button 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" Focus Monitored Element (", ctx.elementOrigin, ") ");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate1("Focus Monitored Subtree (", ctx.subtreeOrigin, ")");
            }
        }, directives: [i1__namespace.CdkMonitorFocus], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FocusMonitorDirectivesExample, [{
                type: i0.Component,
                args: [{
                        selector: 'focus-monitor-directives-example',
                        templateUrl: 'focus-monitor-directives-example.html',
                        styleUrls: ['focus-monitor-directives-example.css']
                    }]
            }], function () { return [{ type: i0__namespace.NgZone }, { type: i0__namespace.ChangeDetectorRef }]; }, null);
    })();

    var _c0$1 = ["monitored"];
    /** @title Focusing with a specific FocusOrigin */
    var FocusMonitorFocusViaExample = /** @class */ (function () {
        function FocusMonitorFocusViaExample(focusMonitor, _cdr, _ngZone) {
            this.focusMonitor = focusMonitor;
            this._cdr = _cdr;
            this._ngZone = _ngZone;
            this.origin = this.formatOrigin(null);
        }
        FocusMonitorFocusViaExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.focusMonitor.monitor(this.monitoredEl)
                .subscribe(function (origin) { return _this._ngZone.run(function () {
                _this.origin = _this.formatOrigin(origin);
                _this._cdr.markForCheck();
            }); });
        };
        FocusMonitorFocusViaExample.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.monitoredEl);
        };
        FocusMonitorFocusViaExample.prototype.formatOrigin = function (origin) {
            return origin ? origin + ' focused' : 'blurred';
        };
        return FocusMonitorFocusViaExample;
    }());
    FocusMonitorFocusViaExample.ɵfac = function FocusMonitorFocusViaExample_Factory(t) { return new (t || FocusMonitorFocusViaExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FocusMonitor), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    FocusMonitorFocusViaExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FocusMonitorFocusViaExample, selectors: [["focus-monitor-focus-via-example"]], viewQuery: function FocusMonitorFocusViaExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.monitoredEl = _t.first);
            }
        }, decls: 24, vars: 1, consts: [[1, "example-focus-monitor"], ["monitored", ""], ["unmonitored", ""], ["value", "mouse"], ["simulatedOrigin", ""], ["value", "keyboard"], ["value", "touch"], ["value", "program"], [3, "click"]], template: function FocusMonitorFocusViaExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r3_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", null, 1);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "button", null, 2);
                i0__namespace.ɵɵtext(6, "2. Not Monitored");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-form-field");
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Simulated focus origin");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-select", 3, 4);
                i0__namespace.ɵɵelementStart(12, "mat-option", 3);
                i0__namespace.ɵɵtext(13, "Mouse");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-option", 5);
                i0__namespace.ɵɵtext(15, "Keyboard");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-option", 6);
                i0__namespace.ɵɵtext(17, "Touch");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-option", 7);
                i0__namespace.ɵɵtext(19, "Programmatic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "button", 8);
                i0__namespace.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_20_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var _r0 = i0__namespace.ɵɵreference(2); var _r2 = i0__namespace.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r0, _r2.value); });
                i0__namespace.ɵɵtext(21, " Focus button #1\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "button", 8);
                i0__namespace.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_22_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var _r1 = i0__namespace.ɵɵreference(5); var _r2 = i0__namespace.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r1, _r2.value); });
                i0__namespace.ɵɵtext(23, " Focus button #2\n");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1("1. Focus Monitored Element (", ctx.origin, ")");
            }
        }, directives: [i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatSelect, i4__namespace.MatOption], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FocusMonitorFocusViaExample, [{
                type: i0.Component,
                args: [{
                        selector: 'focus-monitor-focus-via-example',
                        templateUrl: 'focus-monitor-focus-via-example.html',
                        styleUrls: ['focus-monitor-focus-via-example.css']
                    }]
            }], function () { return [{ type: i1__namespace.FocusMonitor }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.NgZone }]; }, { monitoredEl: [{
                    type: i0.ViewChild,
                    args: ['monitored']
                }] });
    })();

    var _c0 = ["element"];
    var _c1 = ["subtree"];
    /** @title Monitoring focus with FocusMonitor */
    var FocusMonitorOverviewExample = /** @class */ (function () {
        function FocusMonitorOverviewExample(_focusMonitor, _cdr, _ngZone) {
            this._focusMonitor = _focusMonitor;
            this._cdr = _cdr;
            this._ngZone = _ngZone;
            this.elementOrigin = this.formatOrigin(null);
            this.subtreeOrigin = this.formatOrigin(null);
        }
        FocusMonitorOverviewExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._focusMonitor.monitor(this.element)
                .subscribe(function (origin) { return _this._ngZone.run(function () {
                _this.elementOrigin = _this.formatOrigin(origin);
                _this._cdr.markForCheck();
            }); });
            this._focusMonitor.monitor(this.subtree, true)
                .subscribe(function (origin) { return _this._ngZone.run(function () {
                _this.subtreeOrigin = _this.formatOrigin(origin);
                _this._cdr.markForCheck();
            }); });
        };
        FocusMonitorOverviewExample.prototype.ngOnDestroy = function () {
            this._focusMonitor.stopMonitoring(this.element);
            this._focusMonitor.stopMonitoring(this.subtree);
        };
        FocusMonitorOverviewExample.prototype.formatOrigin = function (origin) {
            return origin ? origin + ' focused' : 'blurred';
        };
        return FocusMonitorOverviewExample;
    }());
    FocusMonitorOverviewExample.ɵfac = function FocusMonitorOverviewExample_Factory(t) { return new (t || FocusMonitorOverviewExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FocusMonitor), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    FocusMonitorOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FocusMonitorOverviewExample, selectors: [["focus-monitor-overview-example"]], viewQuery: function FocusMonitorOverviewExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
                i0__namespace.ɵɵviewQuery(_c1, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.element = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.subtree = _t.first);
            }
        }, decls: 13, vars: 2, consts: [[1, "example-focus-monitor"], ["element", ""], ["subtree", ""]], template: function FocusMonitorOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", null, 1);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 0);
                i0__namespace.ɵɵelementStart(5, "div", null, 2);
                i0__namespace.ɵɵelementStart(7, "p");
                i0__namespace.ɵɵtext(8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button");
                i0__namespace.ɵɵtext(10, "Child Button 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button");
                i0__namespace.ɵɵtext(12, "Child Button 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1("Focus Monitored Element (", ctx.elementOrigin, ")");
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵtextInterpolate1("Focus Monitored Subtree (", ctx.subtreeOrigin, ")");
            }
        }, styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FocusMonitorOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'focus-monitor-overview-example',
                        templateUrl: 'focus-monitor-overview-example.html',
                        styleUrls: ['focus-monitor-overview-example.css']
                    }]
            }], function () { return [{ type: i1__namespace.FocusMonitor }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.NgZone }]; }, { element: [{
                    type: i0.ViewChild,
                    args: ['element']
                }], subtree: [{
                    type: i0.ViewChild,
                    args: ['subtree']
                }] });
    })();

    var EXAMPLES = [
        FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample,
    ];
    var CdkA11yExamplesModule = /** @class */ (function () {
        function CdkA11yExamplesModule() {
        }
        return CdkA11yExamplesModule;
    }());
    CdkA11yExamplesModule.ɵfac = function CdkA11yExamplesModule_Factory(t) { return new (t || CdkA11yExamplesModule)(); };
    CdkA11yExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkA11yExamplesModule });
    CdkA11yExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.A11yModule,
                i3.MatSelectModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkA11yExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.A11yModule,
                            i3.MatSelectModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkA11yExamplesModule, { declarations: [FocusMonitorDirectivesExample,
                FocusMonitorFocusViaExample,
                FocusMonitorOverviewExample], imports: [i1.A11yModule,
                i3.MatSelectModule], exports: [FocusMonitorDirectivesExample,
                FocusMonitorFocusViaExample,
                FocusMonitorOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkA11yExamplesModule = CdkA11yExamplesModule;
    exports.FocusMonitorDirectivesExample = FocusMonitorDirectivesExample;
    exports.FocusMonitorFocusViaExample = FocusMonitorFocusViaExample;
    exports.FocusMonitorOverviewExample = FocusMonitorOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-a11y.umd.js.map
