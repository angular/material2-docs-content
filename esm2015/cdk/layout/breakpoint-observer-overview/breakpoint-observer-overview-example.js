import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
/** @title Respond to viewport changes with BreakpointObserver */
export class BreakpointObserverOverviewExample {
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
        args: [{
                selector: 'breakpoint-observer-overview-example',
                templateUrl: 'breakpoint-observer-overview-example.html',
                styleUrls: ['breakpoint-observer-overview-example.css']
            }]
    }], function () { return [{ type: i1.BreakpointObserver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xheW91dC9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3L2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9sYXlvdXQvYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXpDLGlFQUFpRTtBQU1qRSxNQUFNLE9BQU8saUNBQWlDO0lBYTVDLFlBQVksa0JBQXNDO1FBWmxELGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR2hDLHVFQUF1RTtRQUN2RSxtQkFBYyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ3ZCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFDOUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUM1QixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQzlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDNUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFHRCxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDekIsV0FBVyxDQUFDLE1BQU07WUFDbEIsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLE1BQU07WUFDbEIsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLE1BQU07U0FDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztZQUNsRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQ0FBSSxTQUFTLENBQUM7aUJBQ3RFO2FBQ0Y7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2tIQWhDVSxpQ0FBaUM7b0ZBQWpDLGlDQUFpQztRQ1g5Qyx5QkFBRztRQUNELG9GQUNGO1FBQUEsaUJBQUk7UUFDSix5QkFBRztRQUNELDRDQUEyQjtRQUFBLDhCQUFRO1FBQUEsWUFBcUI7UUFBQSxpQkFBUztRQUNuRSxpQkFBSTs7UUFEaUMsZUFBcUI7UUFBckIsMkNBQXFCOzt1RkRPN0MsaUNBQWlDO2NBTDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzthQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50c30gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQHRpdGxlIFJlc3BvbmQgdG8gdmlld3BvcnQgY2hhbmdlcyB3aXRoIEJyZWFrcG9pbnRPYnNlcnZlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdicmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydicmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludE9ic2VydmVyT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgY3VycmVudFNjcmVlblNpemU6IHN0cmluZztcblxuICAvLyBDcmVhdGUgYSBtYXAgdG8gZGlzcGxheSBicmVha3BvaW50IG5hbWVzIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzLlxuICBkaXNwbGF5TmFtZU1hcCA9IG5ldyBNYXAoW1xuICAgIFtCcmVha3BvaW50cy5YU21hbGwsICdYU21hbGwnXSxcbiAgICBbQnJlYWtwb2ludHMuU21hbGwsICdTbWFsbCddLFxuICAgIFtCcmVha3BvaW50cy5NZWRpdW0sICdNZWRpdW0nXSxcbiAgICBbQnJlYWtwb2ludHMuTGFyZ2UsICdMYXJnZSddLFxuICAgIFtCcmVha3BvaW50cy5YTGFyZ2UsICdYTGFyZ2UnXSxcbiAgXSk7XG5cbiAgY29uc3RydWN0b3IoYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcbiAgICBicmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICAgICAgQnJlYWtwb2ludHMuWExhcmdlLFxuICAgIF0pLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgcXVlcnkgb2YgT2JqZWN0LmtleXMocmVzdWx0LmJyZWFrcG9pbnRzKSkge1xuICAgICAgICAgIGlmIChyZXN1bHQuYnJlYWtwb2ludHNbcXVlcnldKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW5TaXplID0gdGhpcy5kaXNwbGF5TmFtZU1hcC5nZXQocXVlcnkpID8/ICdVbmtub3duJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8cD5cbiAgUmVzaXplIHlvdXIgYnJvd3NlciB3aW5kb3cgdG8gc2VlIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGNoYW5nZS5cbjwvcD5cbjxwPlxuICBUaGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyA8c3Ryb25nPnt7Y3VycmVudFNjcmVlblNpemV9fTwvc3Ryb25nPlxuPC9wPlxuIl19