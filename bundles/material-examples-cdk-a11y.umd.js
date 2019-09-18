(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/core'), require('@angular/material/select')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/a11y', ['exports', '@angular/cdk/a11y', '@angular/core', '@angular/material/select'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.a11Y = {}), global.ng.cdk.a11y, global.ng.core, global.ng.material.select));
}(this, function (exports, a11y, core, select) { 'use strict';

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
        FocusMonitorDirectivesExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'focus-monitor-directives-example',
                        template: "<div class=\"example-focus-monitor\">\n  <button cdkMonitorSubtreeFocus\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\n    Focus Monitored Element ({{elementOrigin}})\n  </button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div cdkMonitorSubtreeFocus\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n",
                        styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        FocusMonitorDirectivesExample.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.ChangeDetectorRef }
        ]; };
        return FocusMonitorDirectivesExample;
    }());

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
        FocusMonitorFocusViaExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'focus-monitor-focus-via-example',
                        template: "<div class=\"example-focus-monitor\">\n  <button #monitored>1. Focus Monitored Element ({{origin}})</button>\n  <button #unmonitored>2. Not Monitored</button>\n</div>\n\n<mat-form-field>\n  <mat-label>Simulated focus origin</mat-label>\n  <mat-select #simulatedOrigin value=\"mouse\">\n    <mat-option value=\"mouse\">Mouse</mat-option>\n    <mat-option value=\"keyboard\">Keyboard</mat-option>\n    <mat-option value=\"touch\">Touch</mat-option>\n    <mat-option value=\"program\">Programmatic</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">\n  Focus button #1\n</button>\n<button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">\n  Focus button #2\n</button>\n",
                        styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor button:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field,\nbutton {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        FocusMonitorFocusViaExample.ctorParameters = function () { return [
            { type: a11y.FocusMonitor },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        FocusMonitorFocusViaExample.propDecorators = {
            monitoredEl: [{ type: core.ViewChild, args: ['monitored', { static: false },] }]
        };
        return FocusMonitorFocusViaExample;
    }());

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
        FocusMonitorOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'focus-monitor-overview-example',
                        template: "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n",
                        styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        FocusMonitorOverviewExample.ctorParameters = function () { return [
            { type: a11y.FocusMonitor },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        FocusMonitorOverviewExample.propDecorators = {
            element: [{ type: core.ViewChild, args: ['element', { static: false },] }],
            subtree: [{ type: core.ViewChild, args: ['subtree', { static: false },] }]
        };
        return FocusMonitorOverviewExample;
    }());

    var EXAMPLES = [
        FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample,
    ];
    var CdkA11yExamplesModule = /** @class */ (function () {
        function CdkA11yExamplesModule() {
        }
        CdkA11yExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            a11y.A11yModule,
                            select.MatSelectModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkA11yExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FocusMonitorDirectivesExample = FocusMonitorDirectivesExample;
    exports.FocusMonitorFocusViaExample = FocusMonitorFocusViaExample;
    exports.FocusMonitorOverviewExample = FocusMonitorOverviewExample;
    exports.CdkA11yExamplesModule = CdkA11yExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-a11y.umd.js.map
