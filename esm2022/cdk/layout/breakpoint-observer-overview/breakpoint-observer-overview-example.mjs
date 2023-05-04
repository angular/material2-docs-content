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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: BreakpointObserverOverviewExample, selector: "breakpoint-observer-overview-example", ngImport: i0, template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }); }
}
export { BreakpointObserverOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BreakpointObserverOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'breakpoint-observer-overview-example', template: "<p>\n  Resize your browser window to see the current screen size change.\n</p>\n<p>\n  The current screen size is <strong>{{currentScreenSize}}</strong>\n</p>\n", styles: ["/** No CSS for this example */\n"] }]
        }], ctorParameters: function () { return [{ type: i1.BreakpointObserver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xheW91dC9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3L2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9sYXlvdXQvYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy9icmVha3BvaW50LW9ic2VydmVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXpDLGlFQUFpRTtBQUNqRSxNQUthLGlDQUFpQztJQWE1QyxZQUFZLGtCQUFzQztRQVpsRCxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUdoQyx1RUFBdUU7UUFDdkUsbUJBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUN2QixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQzlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDNUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUM5QixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzVCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO1FBR0Qsa0JBQWtCO2FBQ2YsT0FBTyxDQUFDO1lBQ1AsV0FBVyxDQUFDLE1BQU07WUFDbEIsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLE1BQU07WUFDbEIsV0FBVyxDQUFDLEtBQUs7WUFDakIsV0FBVyxDQUFDLE1BQU07U0FDbkIsQ0FBQzthQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUM7aUJBQ3RFO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7OEdBbkNVLGlDQUFpQztrR0FBakMsaUNBQWlDLDRFQ1g5QyxrS0FNQTs7U0RLYSxpQ0FBaUM7MkZBQWpDLGlDQUFpQztrQkFMN0MsU0FBUzsrQkFDRSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEB0aXRsZSBSZXNwb25kIHRvIHZpZXdwb3J0IGNoYW5nZXMgd2l0aCBCcmVha3BvaW50T2JzZXJ2ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyZWFrcG9pbnQtb2JzZXJ2ZXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnJlYWtwb2ludC1vYnNlcnZlci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50T2JzZXJ2ZXJPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBkZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBjdXJyZW50U2NyZWVuU2l6ZTogc3RyaW5nO1xuXG4gIC8vIENyZWF0ZSBhIG1hcCB0byBkaXNwbGF5IGJyZWFrcG9pbnQgbmFtZXMgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMuXG4gIGRpc3BsYXlOYW1lTWFwID0gbmV3IE1hcChbXG4gICAgW0JyZWFrcG9pbnRzLlhTbWFsbCwgJ1hTbWFsbCddLFxuICAgIFtCcmVha3BvaW50cy5TbWFsbCwgJ1NtYWxsJ10sXG4gICAgW0JyZWFrcG9pbnRzLk1lZGl1bSwgJ01lZGl1bSddLFxuICAgIFtCcmVha3BvaW50cy5MYXJnZSwgJ0xhcmdlJ10sXG4gICAgW0JyZWFrcG9pbnRzLlhMYXJnZSwgJ1hMYXJnZSddLFxuICBdKTtcblxuICBjb25zdHJ1Y3RvcihicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xuICAgIGJyZWFrcG9pbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUoW1xuICAgICAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgICAgICBCcmVha3BvaW50cy5NZWRpdW0sXG4gICAgICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICAgICAgICBCcmVha3BvaW50cy5YTGFyZ2UsXG4gICAgICBdKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBxdWVyeSBvZiBPYmplY3Qua2V5cyhyZXN1bHQuYnJlYWtwb2ludHMpKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5icmVha3BvaW50c1txdWVyeV0pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlblNpemUgPSB0aGlzLmRpc3BsYXlOYW1lTWFwLmdldChxdWVyeSkgPz8gJ1Vua25vd24nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPHA+XG4gIFJlc2l6ZSB5b3VyIGJyb3dzZXIgd2luZG93IHRvIHNlZSB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBjaGFuZ2UuXG48L3A+XG48cD5cbiAgVGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgaXMgPHN0cm9uZz57e2N1cnJlbnRTY3JlZW5TaXplfX08L3N0cm9uZz5cbjwvcD5cbiJdfQ==