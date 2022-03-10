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
        breakpointObserver
            .observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ])
            .pipe(takeUntil(this.destroyed))
            .subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
                }
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
BreakpointObserverOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: BreakpointObserverOverviewExample, deps: [{ token: i1.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Component });
BreakpointObserverOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: BreakpointObserverOverviewExample, selector: "breakpoint-observer-overview-example", ngImport: i0, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: BreakpointObserverOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'breakpoint-observer-overview-example', template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }]
        }], ctorParameters: function () { return [{ type: i1.BreakpointObserver }]; } });

const EXAMPLES = [BreakpointObserverOverviewExample];
class CdkLayoutExamplesModule {
}
CdkLayoutExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkLayoutExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkLayoutExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkLayoutExamplesModule, declarations: [BreakpointObserverOverviewExample], imports: [LayoutModule], exports: [BreakpointObserverOverviewExample] });
CdkLayoutExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkLayoutExamplesModule, imports: [[LayoutModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkLayoutExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [LayoutModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BreakpointObserverOverviewExample, CdkLayoutExamplesModule };
//# sourceMappingURL=layout.mjs.map
