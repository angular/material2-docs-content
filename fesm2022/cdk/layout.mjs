import * as i0 from '@angular/core';
import { inject, Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/** @title Respond to viewport changes with BreakpointObserver */
class BreakpointObserverOverviewExample {
    destroyed = new Subject();
    currentScreenSize;
    // Create a map to display breakpoint names for demonstration purposes.
    displayNameMap = new Map([
        [Breakpoints.XSmall, 'XSmall'],
        [Breakpoints.Small, 'Small'],
        [Breakpoints.Medium, 'Medium'],
        [Breakpoints.Large, 'Large'],
        [Breakpoints.XLarge, 'XLarge'],
    ]);
    constructor() {
        inject(BreakpointObserver)
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-rc.1", ngImport: i0, type: BreakpointObserverOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0-rc.1", type: BreakpointObserverOverviewExample, isStandalone: true, selector: "breakpoint-observer-overview-example", ngImport: i0, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-rc.1", ngImport: i0, type: BreakpointObserverOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'breakpoint-observer-overview-example', template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }]
        }], ctorParameters: () => [] });

export { BreakpointObserverOverviewExample };
//# sourceMappingURL=layout.mjs.map
