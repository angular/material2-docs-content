import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BreakpointObserverOverviewExample, deps: [{ token: i1.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: BreakpointObserverOverviewExample, isStandalone: true, selector: "breakpoint-observer-overview-example", ngImport: i0, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }); }
}
export { BreakpointObserverOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BreakpointObserverOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'breakpoint-observer-overview-example', standalone: true, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }]
        }], ctorParameters: function () { return [{ type: i1.BreakpointObserver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xheW91dC9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3L2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9sYXlvdXQvYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXpDLGlFQUFpRTtBQUNqRSxNQU1hLGlDQUFpQztJQWE1QyxZQUFZLGtCQUFzQztRQVpsRCxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUdoQyx1RUFBdUU7UUFDdkUsbUJBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUN2QixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQzlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDNUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUM5QixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzVCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO1FBR0Qsa0JBQWtCO2FBQ2YsT0FBTyxDQUFDO1lBQ1AsV0FBVyxDQUFDLE1BQU07WUFDbEIsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLE1BQU07WUFDbEIsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLE1BQU07U0FDbkIsQ0FBQzthQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUM7aUJBQ3RFO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7OEdBbkNVLGlDQUFpQztrR0FBakMsaUNBQWlDLGdHQ1o5QyxrS0FNQTs7U0RNYSxpQ0FBaUM7MkZBQWpDLGlDQUFpQztrQkFON0MsU0FBUzsrQkFDRSxzQ0FBc0MsY0FHcEMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50c30gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQHRpdGxlIFJlc3BvbmQgdG8gdmlld3BvcnQgY2hhbmdlcyB3aXRoIEJyZWFrcG9pbnRPYnNlcnZlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdicmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydicmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRPYnNlcnZlck92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGN1cnJlbnRTY3JlZW5TaXplOiBzdHJpbmc7XG5cbiAgLy8gQ3JlYXRlIGEgbWFwIHRvIGRpc3BsYXkgYnJlYWtwb2ludCBuYW1lcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3Nlcy5cbiAgZGlzcGxheU5hbWVNYXAgPSBuZXcgTWFwKFtcbiAgICBbQnJlYWtwb2ludHMuWFNtYWxsLCAnWFNtYWxsJ10sXG4gICAgW0JyZWFrcG9pbnRzLlNtYWxsLCAnU21hbGwnXSxcbiAgICBbQnJlYWtwb2ludHMuTWVkaXVtLCAnTWVkaXVtJ10sXG4gICAgW0JyZWFrcG9pbnRzLkxhcmdlLCAnTGFyZ2UnXSxcbiAgICBbQnJlYWtwb2ludHMuWExhcmdlLCAnWExhcmdlJ10sXG4gIF0pO1xuXG4gIGNvbnN0cnVjdG9yKGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gICAgYnJlYWtwb2ludE9ic2VydmVyXG4gICAgICAub2JzZXJ2ZShbXG4gICAgICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICAgICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgICAgICAgQnJlYWtwb2ludHMuTGFyZ2UsXG4gICAgICAgIEJyZWFrcG9pbnRzLlhMYXJnZSxcbiAgICAgIF0pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHF1ZXJ5IG9mIE9iamVjdC5rZXlzKHJlc3VsdC5icmVha3BvaW50cykpIHtcbiAgICAgICAgICBpZiAocmVzdWx0LmJyZWFrcG9pbnRzW3F1ZXJ5XSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuU2l6ZSA9IHRoaXMuZGlzcGxheU5hbWVNYXAuZ2V0KHF1ZXJ5KSA/PyAnVW5rbm93bic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8cD5cbiAgUmVzaXplIHlvdXIgYnJvd3NlciB3aW5kb3cgdG8gc2VlIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGNoYW5nZS5cbjwvcD5cbjxwPlxuICBUaGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyA8c3Ryb25nPnt7Y3VycmVudFNjcmVlblNpemV9fTwvc3Ryb25nPlxuPC9wPlxuIl19