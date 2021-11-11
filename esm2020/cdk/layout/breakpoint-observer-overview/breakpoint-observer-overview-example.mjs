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
BreakpointObserverOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: BreakpointObserverOverviewExample, deps: [{ token: i1.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Component });
BreakpointObserverOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: BreakpointObserverOverviewExample, selector: "breakpoint-observer-overview-example", ngImport: i0, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: BreakpointObserverOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'breakpoint-observer-overview-example', template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }]
        }], ctorParameters: function () { return [{ type: i1.BreakpointObserver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xheW91dC9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3L2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9sYXlvdXQvYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXpDLGlFQUFpRTtBQU1qRSxNQUFNLE9BQU8saUNBQWlDO0lBYTVDLFlBQVksa0JBQXNDO1FBWmxELGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR2hDLHVFQUF1RTtRQUN2RSxtQkFBYyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ3ZCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFDOUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUM1QixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQzlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDNUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFHRCxrQkFBa0I7YUFDZixPQUFPLENBQUM7WUFDUCxXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtTQUNuQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ25ELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQztpQkFDdEU7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OEhBbkNVLGlDQUFpQztrSEFBakMsaUNBQWlDLDRFQ1g5QyxrS0FNQTsyRkRLYSxpQ0FBaUM7a0JBTDdDLFNBQVM7K0JBQ0Usc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgUmVzcG9uZCB0byB2aWV3cG9ydCBjaGFuZ2VzIHdpdGggQnJlYWtwb2ludE9ic2VydmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludE9ic2VydmVyT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgY3VycmVudFNjcmVlblNpemU6IHN0cmluZztcblxuICAvLyBDcmVhdGUgYSBtYXAgdG8gZGlzcGxheSBicmVha3BvaW50IG5hbWVzIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzLlxuICBkaXNwbGF5TmFtZU1hcCA9IG5ldyBNYXAoW1xuICAgIFtCcmVha3BvaW50cy5YU21hbGwsICdYU21hbGwnXSxcbiAgICBbQnJlYWtwb2ludHMuU21hbGwsICdTbWFsbCddLFxuICAgIFtCcmVha3BvaW50cy5NZWRpdW0sICdNZWRpdW0nXSxcbiAgICBbQnJlYWtwb2ludHMuTGFyZ2UsICdMYXJnZSddLFxuICAgIFtCcmVha3BvaW50cy5YTGFyZ2UsICdYTGFyZ2UnXSxcbiAgXSk7XG5cbiAgY29uc3RydWN0b3IoYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcbiAgICBicmVha3BvaW50T2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKFtcbiAgICAgICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgICAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICAgICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICAgICAgICBCcmVha3BvaW50cy5MYXJnZSxcbiAgICAgICAgQnJlYWtwb2ludHMuWExhcmdlLFxuICAgICAgXSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgcXVlcnkgb2YgT2JqZWN0LmtleXMocmVzdWx0LmJyZWFrcG9pbnRzKSkge1xuICAgICAgICAgIGlmIChyZXN1bHQuYnJlYWtwb2ludHNbcXVlcnldKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW5TaXplID0gdGhpcy5kaXNwbGF5TmFtZU1hcC5nZXQocXVlcnkpID8/ICdVbmtub3duJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiIsIjxwPlxuICBSZXNpemUgeW91ciBicm93c2VyIHdpbmRvdyB0byBzZWUgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgY2hhbmdlLlxuPC9wPlxuPHA+XG4gIFRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIDxzdHJvbmc+e3tjdXJyZW50U2NyZWVuU2l6ZX19PC9zdHJvbmc+XG48L3A+XG4iXX0=