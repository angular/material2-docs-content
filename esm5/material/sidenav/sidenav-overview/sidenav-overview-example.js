import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
function SidenavOverviewExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3);
    i0.ɵɵtext(2, "Sidenav content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-sidenav-content");
    i0.ɵɵtext(4, "Main content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function SidenavOverviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/** @title Basic sidenav */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-overview-example',
                    templateUrl: 'sidenav-overview-example.html',
                    styleUrls: ['sidenav-overview-example.css'],
                },] },
    ];
    SidenavOverviewExample.ɵfac = function SidenavOverviewExample_Factory(t) { return new (t || SidenavOverviewExample)(); };
    SidenavOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavOverviewExample, selectors: [["sidenav-overview-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavOverviewExample_mat_sidenav_container_0_Template, 5, 0, "mat-sidenav-container", 0);
            i0.ɵɵtemplate(1, SidenavOverviewExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i2.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}"] });
    return SidenavOverviewExample;
}());
export { SidenavOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-overview-example',
                templateUrl: 'sidenav-overview-example.html',
                styleUrls: ['sidenav-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LW92ZXJ2aWV3L3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vdmVydmlldy9zaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0F4QyxnREFDRTtJQUFBLHNDQUFnQztJQUFBLCtCQUFlO0lBQUEsaUJBQWM7SUFDN0QsMkNBQXFCO0lBQUEsNEJBQVk7SUFBQSxpQkFBc0I7SUFDekQsaUJBQXdCOzs7SUFFeEIsMkJBQXdCO0lBQUEsdURBQXVDO0lBQUEsaUJBQU07O0FESHJFLDJCQUEyQjtBQUMzQjtJQUFBO1FBTUUsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztLQUNuRzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7Z0dBQ1ksc0JBQXNCOytEQUF0QixzQkFBc0I7WUNSbkMsMkdBQ0U7WUFJRix1RUFBd0I7O1lBTHlCLG9DQUFpQjtZQUs3RCxlQUFrQjtZQUFsQixxQ0FBa0I7O2lDREx2QjtDQVVDLEFBUEQsSUFPQztTQUZZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBCYXNpYyBzaWRlbmF2ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdk92ZXJ2aWV3RXhhbXBsZSB7XG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC1zaWRlbmF2IG1vZGU9XCJzaWRlXCIgb3BlbmVkPlNpZGVuYXYgY29udGVudDwvbWF0LXNpZGVuYXY+XG4gIDxtYXQtc2lkZW5hdi1jb250ZW50Pk1haW4gY29udGVudDwvbWF0LXNpZGVuYXYtY29udGVudD5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19