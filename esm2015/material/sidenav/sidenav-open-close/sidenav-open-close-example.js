/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/sidenav/sidenav-open-close/sidenav-open-close-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
function SidenavOpenCloseExample_mat_sidenav_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const e_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(e_r4);
} }
function SidenavOpenCloseExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3, 4);
    i0.ɵɵlistener("openedChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_openedChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.opened = $event; })("opened", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_opened_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.events.push("open!"); })("closed", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_closed_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.events.push("close!"); });
    i0.ɵɵtext(3, " Sidenav content ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-sidenav-content");
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵelementStart(6, "mat-checkbox", 5);
    i0.ɵɵlistener("ngModelChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_checkbox_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.opened = $event; });
    i0.ɵɵtext(7, "sidenav.opened");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵlistener("click", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r6); const _r2 = i0.ɵɵreference(2); return _r2.toggle(); });
    i0.ɵɵtext(10, "sidenav.toggle()");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "Events:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7);
    i0.ɵɵtemplate(14, SidenavOpenCloseExample_mat_sidenav_container_0_div_14_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("opened", ctx_r0.opened);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.opened);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r0.events);
} }
function SidenavOpenCloseExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Sidenav open & close behavior
 */
let SidenavOpenCloseExample = /** @class */ (() => {
    /**
     * \@title Sidenav open & close behavior
     */
    class SidenavOpenCloseExample {
        constructor() {
            this.events = [];
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
             * @param {?} h
             * @return {?}
             */
            h => h.test(window.location.host)));
        }
    }
    SidenavOpenCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-open-close-example',
                    templateUrl: 'sidenav-open-close-example.html',
                    styleUrls: ['sidenav-open-close-example.css'],
                },] },
    ];
    /** @nocollapse */ SidenavOpenCloseExample.ɵfac = function SidenavOpenCloseExample_Factory(t) { return new (t || SidenavOpenCloseExample)(); };
    /** @nocollapse */ SidenavOpenCloseExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavOpenCloseExample, selectors: [["sidenav-open-close-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", 3, "opened", "openedChange", "closed"], ["sidenav", ""], [3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function SidenavOpenCloseExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavOpenCloseExample_mat_sidenav_container_0_Template, 15, 3, "mat-sidenav-container", 0);
            i0.ɵɵtemplate(1, SidenavOpenCloseExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i2.MatSidenavContent, i3.MatCheckbox, i4.NgControlStatus, i4.NgModel, i5.MatButton, i1.NgForOf], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}"] });
    return SidenavOpenCloseExample;
})();
export { SidenavOpenCloseExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavOpenCloseExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-open-close-example',
                templateUrl: 'sidenav-open-close-example.html',
                styleUrls: ['sidenav-open-close-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SidenavOpenCloseExample.prototype.events;
    /** @type {?} */
    SidenavOpenCloseExample.prototype.opened;
    /** @type {?} */
    SidenavOpenCloseExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtb3Blbi1jbG9zZS9zaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vcGVuLWNsb3NlL3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ1dsQywyQkFBOEI7SUFBQSxZQUFLO0lBQUEsaUJBQU07OztJQUFYLGVBQUs7SUFBTCwwQkFBSzs7OztJQVh6QyxnREFDRTtJQUFBLHlDQUVFO0lBRmdDLHlPQUFtQixnTEFBVyxtQkFBWSxPQUFPLENBQUMsSUFBL0IsZ0xBQzlCLG1CQUFZLFFBQVEsQ0FBQyxJQURTO0lBRW5ELGlDQUNGO0lBQUEsaUJBQWM7SUFFZCwyQ0FDRTtJQUFBLHlCQUFHO0lBQUEsdUNBQW1DO0lBQXJCLDRPQUFvQjtJQUFDLDhCQUFjO0lBQUEsaUJBQWU7SUFBQSxpQkFBSTtJQUN2RSx5QkFBRztJQUFBLGlDQUE4QztJQUEzQixrTEFBUyxZQUFnQixJQUFDO0lBQUMsaUNBQWdCO0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUM5RSwwQkFBRztJQUFBLHdCQUFPO0lBQUEsaUJBQUk7SUFDZCwrQkFDRTtJQUFBLGtHQUE4QjtJQUNoQyxpQkFBTTtJQUNSLGlCQUFzQjtJQUN4QixpQkFBd0I7OztJQWJZLGVBQW1CO0lBQW5CLHNDQUFtQjtJQU1sQyxlQUFvQjtJQUFwQix1Q0FBb0I7SUFJOUIsZUFBd0I7SUFBeEIsdUNBQXdCOzs7SUFLbkMsMkJBQXdCO0lBQUEsdURBQXVDO0lBQUEsaUJBQU07Ozs7O0FEYnJFOzs7O0lBQUEsTUFLYSx1QkFBdUI7UUFMcEM7WUFNRSxXQUFNLEdBQWEsRUFBRSxDQUFDO1lBR3RCLGNBQVMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7U0FDbkc7OztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQzlDOztxSEFDWSx1QkFBdUI7bUZBQXZCLHVCQUF1QjtZQ1JwQyw2R0FDRTtZQWVGLHdFQUF3Qjs7WUFoQnlCLG9DQUFpQjtZQWdCN0QsZUFBa0I7WUFBbEIscUNBQWtCOztrQ0RoQnZCO0tBYUM7U0FMWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7SUFFQyx5Q0FBc0I7O0lBQ3RCLHlDQUFnQjs7SUFFaEIsNENBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFNpZGVuYXYgb3BlbiAmIGNsb3NlIGJlaGF2aW9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdk9wZW5DbG9zZUV4YW1wbGUge1xuICBldmVudHM6IHN0cmluZ1tdID0gW107XG4gIG9wZW5lZDogYm9vbGVhbjtcblxuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiIsIjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBtb2RlPVwic2lkZVwiIFsob3BlbmVkKV09XCJvcGVuZWRcIiAob3BlbmVkKT1cImV2ZW50cy5wdXNoKCdvcGVuIScpXCJcbiAgICAgICAgICAgICAgIChjbG9zZWQpPVwiZXZlbnRzLnB1c2goJ2Nsb3NlIScpXCI+XG4gICAgU2lkZW5hdiBjb250ZW50XG4gIDwvbWF0LXNpZGVuYXY+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgPHA+PG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cIm9wZW5lZFwiPnNpZGVuYXYub3BlbmVkPC9tYXQtY2hlY2tib3g+PC9wPlxuICAgIDxwPjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPnNpZGVuYXYudG9nZ2xlKCk8L2J1dHRvbj48L3A+XG4gICAgPHA+RXZlbnRzOjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ldmVudHNcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGUgb2YgZXZlbnRzXCI+e3tlfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=