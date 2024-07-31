import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
/** @title Respond to viewport changes with BreakpointObserver */
export class BreakpointObserverOverviewExample {
    constructor() {
        this.destroyed = new Subject();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [Breakpoints.XSmall, 'XSmall'],
            [Breakpoints.Small, 'Small'],
            [Breakpoints.Medium, 'Medium'],
            [Breakpoints.Large, 'Large'],
            [Breakpoints.XLarge, 'XLarge'],
        ]);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: BreakpointObserverOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: BreakpointObserverOverviewExample, isStandalone: true, selector: "breakpoint-observer-overview-example", ngImport: i0, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: BreakpointObserverOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'breakpoint-observer-overview-example', standalone: true, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xheW91dC9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3L2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9sYXlvdXQvYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFhLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpDLGlFQUFpRTtBQU9qRSxNQUFNLE9BQU8saUNBQWlDO0lBYTVDO1FBWkEsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHaEMsdUVBQXVFO1FBQ3ZFLG1CQUFjLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDdkIsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUM5QixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzVCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFDOUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUM1QixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUdELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzthQUN2QixPQUFPLENBQUM7WUFDUCxXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtTQUNuQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBQ3ZFLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO3FIQW5DVSxpQ0FBaUM7eUdBQWpDLGlDQUFpQyxnR0NaOUMsa0tBTUE7O2tHRE1hLGlDQUFpQztrQkFON0MsU0FBUzsrQkFDRSxzQ0FBc0MsY0FHcEMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgUmVzcG9uZCB0byB2aWV3cG9ydCBjaGFuZ2VzIHdpdGggQnJlYWtwb2ludE9ic2VydmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdicmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludE9ic2VydmVyT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgY3VycmVudFNjcmVlblNpemU6IHN0cmluZztcblxuICAvLyBDcmVhdGUgYSBtYXAgdG8gZGlzcGxheSBicmVha3BvaW50IG5hbWVzIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzLlxuICBkaXNwbGF5TmFtZU1hcCA9IG5ldyBNYXAoW1xuICAgIFtCcmVha3BvaW50cy5YU21hbGwsICdYU21hbGwnXSxcbiAgICBbQnJlYWtwb2ludHMuU21hbGwsICdTbWFsbCddLFxuICAgIFtCcmVha3BvaW50cy5NZWRpdW0sICdNZWRpdW0nXSxcbiAgICBbQnJlYWtwb2ludHMuTGFyZ2UsICdMYXJnZSddLFxuICAgIFtCcmVha3BvaW50cy5YTGFyZ2UsICdYTGFyZ2UnXSxcbiAgXSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaW5qZWN0KEJyZWFrcG9pbnRPYnNlcnZlcilcbiAgICAgIC5vYnNlcnZlKFtcbiAgICAgICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgICAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICAgICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICAgICAgICBCcmVha3BvaW50cy5MYXJnZSxcbiAgICAgICAgQnJlYWtwb2ludHMuWExhcmdlLFxuICAgICAgXSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgcXVlcnkgb2YgT2JqZWN0LmtleXMocmVzdWx0LmJyZWFrcG9pbnRzKSkge1xuICAgICAgICAgIGlmIChyZXN1bHQuYnJlYWtwb2ludHNbcXVlcnldKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW5TaXplID0gdGhpcy5kaXNwbGF5TmFtZU1hcC5nZXQocXVlcnkpID8/ICdVbmtub3duJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiIsIjxwPlxuICBSZXNpemUgeW91ciBicm93c2VyIHdpbmRvdyB0byBzZWUgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgY2hhbmdlLlxuPC9wPlxuPHA+XG4gIFRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIDxzdHJvbmc+e3tjdXJyZW50U2NyZWVuU2l6ZX19PC9zdHJvbmc+XG48L3A+XG4iXX0=