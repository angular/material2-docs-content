/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
function SidenavPositionExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3);
    i0.ɵɵtext(2, "Start content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-sidenav", 4);
    i0.ɵɵtext(4, "End content");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Implicit main content\n");
    i0.ɵɵelementEnd();
} }
function SidenavPositionExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Implicit main content with two sidenavs
 */
export class SidenavPositionExample {
    constructor() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
         * @param {?} h
         * @return {?}
         */
        h => h.test(window.location.host)));
    }
}
SidenavPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-position-example',
                templateUrl: 'sidenav-position-example.html',
                styleUrls: ['sidenav-position-example.css'],
            },] },
];
/** @nocollapse */ SidenavPositionExample.ɵfac = function SidenavPositionExample_Factory(t) { return new (t || SidenavPositionExample)(); };
/** @nocollapse */ SidenavPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavPositionExample, selectors: [["sidenav-position-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["opened", "", "mode", "side"], ["opened", "", "mode", "side", "position", "end"]], template: function SidenavPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavPositionExample_mat_sidenav_container_0_Template, 6, 0, "mat-sidenav-container", 0);
        i0.ɵɵtemplate(1, SidenavPositionExample_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavPositionExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-position-example',
                templateUrl: 'sidenav-position-example.html',
                styleUrls: ['sidenav-position-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SidenavPositionExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LXBvc2l0aW9uL3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1wb3NpdGlvbi9zaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNBeEMsZ0RBQ0U7SUFBQSxzQ0FBZ0M7SUFBQSw2QkFBYTtJQUFBLGlCQUFjO0lBQzNELHNDQUErQztJQUFBLDJCQUFXO0lBQUEsaUJBQWM7SUFDeEUsd0NBQ0Y7SUFBQSxpQkFBd0I7OztJQUV4QiwyQkFBd0I7SUFBQSx1REFBdUM7SUFBQSxpQkFBTTs7Ozs7QURFckUsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLGNBQVMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7S0FDbkc7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7NEZBQ1ksc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNSbkMsMkdBQ0U7UUFLRix1RUFBd0I7O1FBTnlCLG9DQUFpQjtRQU03RCxlQUFrQjtRQUFsQixxQ0FBa0I7O2tEREVWLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7SUFFQywyQ0FBa0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgSW1wbGljaXQgbWFpbiBjb250ZW50IHdpdGggdHdvIHNpZGVuYXZzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdlBvc2l0aW9uRXhhbXBsZSB7XG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC1zaWRlbmF2IG9wZW5lZCBtb2RlPVwic2lkZVwiPlN0YXJ0IGNvbnRlbnQ8L21hdC1zaWRlbmF2PlxuICA8bWF0LXNpZGVuYXYgb3BlbmVkIG1vZGU9XCJzaWRlXCIgcG9zaXRpb249XCJlbmRcIj5FbmQgY29udGVudDwvbWF0LXNpZGVuYXY+XG4gIEltcGxpY2l0IG1haW4gY29udGVudFxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=