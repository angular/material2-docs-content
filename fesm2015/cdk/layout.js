import * as i1 from '@angular/cdk/layout';
import { Breakpoints, LayoutModule } from '@angular/cdk/layout';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/** @title Respond to viewport changes with BreakpointObserver */
class BreakpointObserverOverviewExample {
    constructor(breakpointObserver) {
        this.destroyed = new Subject();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [Breakpoints.XSmall, 'XSmall'],
            [Breakpoints.Small, 'Small'],
            [Breakpoints.Medium, 'Medium'],
            [Breakpoints.Large, 'Large'],
            [Breakpoints.XLarge, 'XLarge'],
        ]);
        breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
            var _a;
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = (_a = this.displayNameMap.get(query)) !== null && _a !== void 0 ? _a : 'Unknown';
                }
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
BreakpointObserverOverviewExample.ɵfac = function BreakpointObserverOverviewExample_Factory(t) { return new (t || BreakpointObserverOverviewExample)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); };
BreakpointObserverOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreakpointObserverOverviewExample, selectors: [["breakpoint-observer-overview-example"]], decls: 6, vars: 1, template: function BreakpointObserverOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " Resize your browser window to see the current screen size change.\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "p");
        i0.ɵɵtext(3, " The current screen size is ");
        i0.ɵɵelementStart(4, "strong");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.currentScreenSize);
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreakpointObserverOverviewExample, [{
        type: Component,
        args: [{ selector: 'breakpoint-observer-overview-example', template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }]
    }], function () { return [{ type: i1.BreakpointObserver }]; }, null); })();

const EXAMPLES = [
    BreakpointObserverOverviewExample,
];
class CdkLayoutExamplesModule {
}
CdkLayoutExamplesModule.ɵfac = function CdkLayoutExamplesModule_Factory(t) { return new (t || CdkLayoutExamplesModule)(); };
CdkLayoutExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkLayoutExamplesModule });
CdkLayoutExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            LayoutModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkLayoutExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    LayoutModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkLayoutExamplesModule, { declarations: [BreakpointObserverOverviewExample], imports: [LayoutModule], exports: [BreakpointObserverOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BreakpointObserverOverviewExample, CdkLayoutExamplesModule };
//# sourceMappingURL=layout.js.map
