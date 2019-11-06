import { CdkMonitorFocus, FocusMonitor, A11yModule } from '@angular/cdk/a11y';
import { Component, NgZone, ChangeDetectorRef, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵlistener, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵsetClassMetadata, ViewChild, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵreference, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Monitoring focus with FocusMonitor
 */
class FocusMonitorDirectivesExample {
    /**
     * @param {?} _ngZone
     * @param {?} _cdr
     */
    constructor(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    /**
     * @return {?}
     */
    markForCheck() {
        this._ngZone.run((/**
         * @return {?}
         */
        () => this._cdr.markForCheck()));
    }
}
FocusMonitorDirectivesExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-directives-example',
                templateUrl: 'focus-monitor-directives-example.html',
                styleUrls: ['focus-monitor-directives-example.css']
            },] },
];
/** @nocollapse */
FocusMonitorDirectivesExample.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
/** @nocollapse */ FocusMonitorDirectivesExample.ɵfac = function FocusMonitorDirectivesExample_Factory(t) { return new (t || FocusMonitorDirectivesExample)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ FocusMonitorDirectivesExample.ɵcmp = ɵɵdefineComponent({ type: FocusMonitorDirectivesExample, selectors: [["focus-monitor-directives-example"]], decls: 11, vars: 2, consts: [[1, "example-focus-monitor"], ["cdkMonitorSubtreeFocus", "", 3, "cdkFocusChange"]], template: function FocusMonitorDirectivesExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_button_cdkFocusChange_1_listener($event) { ctx.elementOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 0);
        ɵɵelementStart(4, "div", 1);
        ɵɵlistener("cdkFocusChange", function FocusMonitorDirectivesExample_Template_div_cdkFocusChange_4_listener($event) { ctx.subtreeOrigin = ctx.formatOrigin($event); return ctx.markForCheck(); });
        ɵɵelementStart(5, "p");
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "button");
        ɵɵtext(8, "Child Button 1");
        ɵɵelementEnd();
        ɵɵelementStart(9, "button");
        ɵɵtext(10, "Child Button 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" Focus Monitored Element (", ctx.elementOrigin, ") ");
        ɵɵadvance(4);
        ɵɵtextInterpolate1("Focus Monitored Subtree (", ctx.subtreeOrigin, ")");
    } }, directives: [CdkMonitorFocus], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(FocusMonitorDirectivesExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-directives-example',
                templateUrl: 'focus-monitor-directives-example.html',
                styleUrls: ['focus-monitor-directives-example.css']
            }]
    }], function () { return [{ type: NgZone }, { type: ChangeDetectorRef }]; }, null);
if (false) {
    /** @type {?} */
    FocusMonitorDirectivesExample.prototype.elementOrigin;
    /** @type {?} */
    FocusMonitorDirectivesExample.prototype.subtreeOrigin;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorDirectivesExample.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorDirectivesExample.prototype._cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0 = ["monitored"];
const _c1 = ["monitored", ""];
const _c2 = ["unmonitored", ""];
const _c3 = ["simulatedOrigin", ""];
/**
 * \@title Focusing with a specific FocusOrigin
 */
class FocusMonitorFocusViaExample {
    /**
     * @param {?} focusMonitor
     * @param {?} _cdr
     * @param {?} _ngZone
     */
    constructor(focusMonitor, _cdr, _ngZone) {
        this.focusMonitor = focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.origin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this._ngZone.run((/**
         * @return {?}
         */
        () => {
            this.origin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorFocusViaExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-focus-via-example',
                templateUrl: 'focus-monitor-focus-via-example.html',
                styleUrls: ['focus-monitor-focus-via-example.css']
            },] },
];
/** @nocollapse */
FocusMonitorFocusViaExample.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
FocusMonitorFocusViaExample.propDecorators = {
    monitoredEl: [{ type: ViewChild, args: ['monitored',] }]
};
/** @nocollapse */ FocusMonitorFocusViaExample.ɵfac = function FocusMonitorFocusViaExample_Factory(t) { return new (t || FocusMonitorFocusViaExample)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone)); };
/** @nocollapse */ FocusMonitorFocusViaExample.ɵcmp = ɵɵdefineComponent({ type: FocusMonitorFocusViaExample, selectors: [["focus-monitor-focus-via-example"]], viewQuery: function FocusMonitorFocusViaExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh((_t = ɵɵloadQuery())) && (ctx.monitoredEl = _t.first);
    } }, decls: 24, vars: 1, consts: [[1, "example-focus-monitor"], ["value", "mouse"], ["value", "keyboard"], ["value", "touch"], ["value", "program"], [3, "click"]], template: function FocusMonitorFocusViaExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", null, _c1);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", null, _c2);
        ɵɵtext(6, "2. Not Monitored");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Simulated focus origin");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-select", 1, _c3);
        ɵɵelementStart(12, "mat-option", 1);
        ɵɵtext(13, "Mouse");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-option", 2);
        ɵɵtext(15, "Keyboard");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-option", 3);
        ɵɵtext(17, "Touch");
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-option", 4);
        ɵɵtext(19, "Programmatic");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "button", 5);
        ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_20_listener($event) { ɵɵrestoreView(_r3); const _r0 = ɵɵreference(2); const _r2 = ɵɵreference(11); return ctx.focusMonitor.focusVia(_r0, _r2.value); });
        ɵɵtext(21, " Focus button #1\n");
        ɵɵelementEnd();
        ɵɵelementStart(22, "button", 5);
        ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_22_listener($event) { ɵɵrestoreView(_r3); const _r1 = ɵɵreference(5); const _r2 = ɵɵreference(11); return ctx.focusMonitor.focusVia(_r1, _r2.value); });
        ɵɵtext(23, " Focus button #2\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("1. Focus Monitored Element (", ctx.origin, ")");
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(FocusMonitorFocusViaExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-focus-via-example',
                templateUrl: 'focus-monitor-focus-via-example.html',
                styleUrls: ['focus-monitor-focus-via-example.css']
            }]
    }], function () { return [{ type: FocusMonitor }, { type: ChangeDetectorRef }, { type: NgZone }]; }, { monitoredEl: [{
            type: ViewChild,
            args: ['monitored']
        }] });
if (false) {
    /** @type {?} */
    FocusMonitorFocusViaExample.prototype.monitoredEl;
    /** @type {?} */
    FocusMonitorFocusViaExample.prototype.origin;
    /** @type {?} */
    FocusMonitorFocusViaExample.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorFocusViaExample.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorFocusViaExample.prototype._ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0$1 = ["element"];
const _c1$1 = ["subtree"];
const _c2$1 = ["element", ""];
const _c3$1 = ["subtree", ""];
/**
 * \@title Monitoring focus with FocusMonitor
 */
class FocusMonitorOverviewExample {
    /**
     * @param {?} _focusMonitor
     * @param {?} _cdr
     * @param {?} _ngZone
     */
    constructor(_focusMonitor, _cdr, _ngZone) {
        this._focusMonitor = _focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.element)
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this._ngZone.run((/**
         * @return {?}
         */
        () => {
            this.elementOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }))));
        this._focusMonitor.monitor(this.subtree, true)
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this._ngZone.run((/**
         * @return {?}
         */
        () => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.element);
        this._focusMonitor.stopMonitoring(this.subtree);
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'focus-monitor-overview-example',
                templateUrl: 'focus-monitor-overview-example.html',
                styleUrls: ['focus-monitor-overview-example.css']
            },] },
];
/** @nocollapse */
FocusMonitorOverviewExample.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
FocusMonitorOverviewExample.propDecorators = {
    element: [{ type: ViewChild, args: ['element',] }],
    subtree: [{ type: ViewChild, args: ['subtree',] }]
};
/** @nocollapse */ FocusMonitorOverviewExample.ɵfac = function FocusMonitorOverviewExample_Factory(t) { return new (t || FocusMonitorOverviewExample)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone)); };
/** @nocollapse */ FocusMonitorOverviewExample.ɵcmp = ɵɵdefineComponent({ type: FocusMonitorOverviewExample, selectors: [["focus-monitor-overview-example"]], viewQuery: function FocusMonitorOverviewExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
        ɵɵviewQuery(_c1$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh((_t = ɵɵloadQuery())) && (ctx.element = _t.first);
        ɵɵqueryRefresh((_t = ɵɵloadQuery())) && (ctx.subtree = _t.first);
    } }, decls: 13, vars: 2, consts: [[1, "example-focus-monitor"]], template: function FocusMonitorOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", null, _c2$1);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 0);
        ɵɵelementStart(5, "div", null, _c3$1);
        ɵɵelementStart(7, "p");
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementStart(9, "button");
        ɵɵtext(10, "Child Button 1");
        ɵɵelementEnd();
        ɵɵelementStart(11, "button");
        ɵɵtext(12, "Child Button 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("Focus Monitored Element (", ctx.elementOrigin, ")");
        ɵɵadvance(5);
        ɵɵtextInterpolate1("Focus Monitored Subtree (", ctx.subtreeOrigin, ")");
    } }, styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(FocusMonitorOverviewExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-overview-example',
                templateUrl: 'focus-monitor-overview-example.html',
                styleUrls: ['focus-monitor-overview-example.css']
            }]
    }], function () { return [{ type: FocusMonitor }, { type: ChangeDetectorRef }, { type: NgZone }]; }, { element: [{
            type: ViewChild,
            args: ['element']
        }], subtree: [{
            type: ViewChild,
            args: ['subtree']
        }] });
if (false) {
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.element;
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.subtree;
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.elementOrigin;
    /** @type {?} */
    FocusMonitorOverviewExample.prototype.subtreeOrigin;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    FocusMonitorOverviewExample.prototype._ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
];
class CdkA11yExamplesModule {
}
CdkA11yExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    A11yModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkA11yExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkA11yExamplesModule });
/** @nocollapse */ CdkA11yExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkA11yExamplesModule_Factory(t) { return new (t || CdkA11yExamplesModule)(); }, imports: [[
            A11yModule,
            MatSelectModule,
        ]] });
/*@__PURE__*/ ɵɵsetNgModuleScope(CdkA11yExamplesModule, { declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule,
        MatSelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] });
/*@__PURE__*/ ɵsetClassMetadata(CdkA11yExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    A11yModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);

export { FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample, CdkA11yExamplesModule };
//# sourceMappingURL=a11y.js.map
