import { CdkMonitorFocus, FocusMonitor, A11yModule } from '@angular/cdk/a11y';
import { ɵɵdirectiveInject, NgZone, ChangeDetectorRef, ɵɵdefineComponent, ɵɵelementStart, ɵɵlistener, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵreference, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';

/** @title Monitoring focus with FocusMonitor */
class FocusMonitorDirectivesExample {
    constructor(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    markForCheck() {
        this._ngZone.run(() => this._cdr.markForCheck());
    }
}
FocusMonitorDirectivesExample.ɵfac = function FocusMonitorDirectivesExample_Factory(t) { return new (t || FocusMonitorDirectivesExample)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef)); };
FocusMonitorDirectivesExample.ɵcmp = ɵɵdefineComponent({ type: FocusMonitorDirectivesExample, selectors: [["focus-monitor-directives-example"]], decls: 11, vars: 2, consts: [[1, "example-focus-monitor"], ["cdkMonitorSubtreeFocus", "", 3, "cdkFocusChange"]], template: function FocusMonitorDirectivesExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FocusMonitorDirectivesExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-directives-example',
                templateUrl: 'focus-monitor-directives-example.html',
                styleUrls: ['focus-monitor-directives-example.css']
            }]
    }], function () { return [{ type: NgZone }, { type: ChangeDetectorRef }]; }, null); })();

const _c0 = ["monitored"];
/** @title Focusing with a specific FocusOrigin */
class FocusMonitorFocusViaExample {
    constructor(focusMonitor, _cdr, _ngZone) {
        this.focusMonitor = focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.origin = this.formatOrigin(null);
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe(origin => this._ngZone.run(() => {
            this.origin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorFocusViaExample.ɵfac = function FocusMonitorFocusViaExample_Factory(t) { return new (t || FocusMonitorFocusViaExample)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone)); };
FocusMonitorFocusViaExample.ɵcmp = ɵɵdefineComponent({ type: FocusMonitorFocusViaExample, selectors: [["focus-monitor-focus-via-example"]], viewQuery: function FocusMonitorFocusViaExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monitoredEl = _t.first);
    } }, decls: 24, vars: 1, consts: [[1, "example-focus-monitor"], ["monitored", ""], ["unmonitored", ""], ["value", "mouse"], ["simulatedOrigin", ""], ["value", "keyboard"], ["value", "touch"], ["value", "program"], [3, "click"]], template: function FocusMonitorFocusViaExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", null, 1);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", null, 2);
        ɵɵtext(6, "2. Not Monitored");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Simulated focus origin");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-select", 3, 4);
        ɵɵelementStart(12, "mat-option", 3);
        ɵɵtext(13, "Mouse");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-option", 5);
        ɵɵtext(15, "Keyboard");
        ɵɵelementEnd();
        ɵɵelementStart(16, "mat-option", 6);
        ɵɵtext(17, "Touch");
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-option", 7);
        ɵɵtext(19, "Programmatic");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "button", 8);
        ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_20_listener() { ɵɵrestoreView(_r3); const _r0 = ɵɵreference(2); const _r2 = ɵɵreference(11); return ctx.focusMonitor.focusVia(_r0, _r2.value); });
        ɵɵtext(21, " Focus button #1\n");
        ɵɵelementEnd();
        ɵɵelementStart(22, "button", 8);
        ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_22_listener() { ɵɵrestoreView(_r3); const _r1 = ɵɵreference(5); const _r2 = ɵɵreference(11); return ctx.focusMonitor.focusVia(_r1, _r2.value); });
        ɵɵtext(23, " Focus button #2\n");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("1. Focus Monitored Element (", ctx.origin, ")");
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FocusMonitorFocusViaExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-focus-via-example',
                templateUrl: 'focus-monitor-focus-via-example.html',
                styleUrls: ['focus-monitor-focus-via-example.css']
            }]
    }], function () { return [{ type: FocusMonitor }, { type: ChangeDetectorRef }, { type: NgZone }]; }, { monitoredEl: [{
            type: ViewChild,
            args: ['monitored']
        }] }); })();

const _c0$1 = ["element"];
const _c1 = ["subtree"];
/** @title Monitoring focus with FocusMonitor */
class FocusMonitorOverviewExample {
    constructor(_focusMonitor, _cdr, _ngZone) {
        this._focusMonitor = _focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.element)
            .subscribe(origin => this._ngZone.run(() => {
            this.elementOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
        this._focusMonitor.monitor(this.subtree, true)
            .subscribe(origin => this._ngZone.run(() => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.element);
        this._focusMonitor.stopMonitoring(this.subtree);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
}
FocusMonitorOverviewExample.ɵfac = function FocusMonitorOverviewExample_Factory(t) { return new (t || FocusMonitorOverviewExample)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone)); };
FocusMonitorOverviewExample.ɵcmp = ɵɵdefineComponent({ type: FocusMonitorOverviewExample, selectors: [["focus-monitor-overview-example"]], viewQuery: function FocusMonitorOverviewExample_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 1);
        ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.subtree = _t.first);
    } }, decls: 13, vars: 2, consts: [[1, "example-focus-monitor"], ["element", ""], ["subtree", ""]], template: function FocusMonitorOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", null, 1);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 0);
        ɵɵelementStart(5, "div", null, 2);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FocusMonitorOverviewExample, [{
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
        }] }); })();

const EXAMPLES = [
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
];
class CdkA11yExamplesModule {
}
CdkA11yExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkA11yExamplesModule });
CdkA11yExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkA11yExamplesModule_Factory(t) { return new (t || CdkA11yExamplesModule)(); }, imports: [[
            A11yModule,
            MatSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkA11yExamplesModule, { declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule,
        MatSelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkA11yExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    A11yModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkA11yExamplesModule, FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample };
//# sourceMappingURL=a11y.js.map
