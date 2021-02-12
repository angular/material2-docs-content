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
/** @title Sidenav open & close behavior */
export class SidenavOpenCloseExample {
    constructor() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
}
SidenavOpenCloseExample.ɵfac = function SidenavOpenCloseExample_Factory(t) { return new (t || SidenavOpenCloseExample)(); };
SidenavOpenCloseExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavOpenCloseExample, selectors: [["sidenav-open-close-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", 3, "opened", "openedChange", "closed"], ["sidenav", ""], [3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function SidenavOpenCloseExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavOpenCloseExample_mat_sidenav_container_0_Template, 15, 3, "mat-sidenav-container", 0);
        i0.ɵɵtemplate(1, SidenavOpenCloseExample_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i2.MatSidenavContent, i3.MatCheckbox, i4.NgControlStatus, i4.NgModel, i5.MatButton, i1.NgForOf], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavOpenCloseExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-open-close-example',
                templateUrl: 'sidenav-open-close-example.html',
                styleUrls: ['sidenav-open-close-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtb3Blbi1jbG9zZS9zaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vcGVuLWNsb3NlL3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNXbEMsMkJBQThCO0lBQUEsWUFBSztJQUFBLGlCQUFNOzs7SUFBWCxlQUFLO0lBQUwsMEJBQUs7Ozs7SUFYekMsZ0RBQW1FO0lBQ2pFLHlDQUM4QztJQURaLHlPQUFtQixnTEFBVyxtQkFBWSxPQUFPLENBQUMsSUFBL0IsZ0xBQzlCLG1CQUFZLFFBQVEsQ0FBQyxJQURTO0lBRW5ELGlDQUNGO0lBQUEsaUJBQWM7SUFFZCwyQ0FBcUI7SUFDbkIseUJBQUc7SUFBQSx1Q0FBbUM7SUFBckIsNE9BQW9CO0lBQUMsOEJBQWM7SUFBQSxpQkFBZTtJQUFBLGlCQUFJO0lBQ3ZFLHlCQUFHO0lBQUEsaUNBQThDO0lBQTNCLGtMQUFTLFlBQWdCLElBQUM7SUFBQyxpQ0FBZ0I7SUFBQSxpQkFBUztJQUFBLGlCQUFJO0lBQzlFLDBCQUFHO0lBQUEsd0JBQU87SUFBQSxpQkFBSTtJQUNkLCtCQUE0QjtJQUMxQixrR0FBeUM7SUFDM0MsaUJBQU07SUFDUixpQkFBc0I7SUFDeEIsaUJBQXdCOzs7SUFiWSxlQUFtQjtJQUFuQixzQ0FBbUI7SUFNbEMsZUFBb0I7SUFBcEIsdUNBQW9CO0lBSWhCLGVBQVM7SUFBVCx1Q0FBUzs7O0lBS2xDLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOztBRGRyRSwyQ0FBMkM7QUFNM0MsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFHdEIsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNuRzs7OEZBTFksdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNScEMsNkdBY3dCO1FBRXhCLHdFQUFxRTs7UUFoQm5CLG9DQUFlO1FBZ0IzRCxlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGRFJULHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgU2lkZW5hdiBvcGVuICYgY2xvc2UgYmVoYXZpb3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2T3BlbkNsb3NlRXhhbXBsZSB7XG4gIGV2ZW50czogc3RyaW5nW10gPSBbXTtcbiAgb3BlbmVkOiBib29sZWFuO1xuXG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IG1vZGU9XCJzaWRlXCIgWyhvcGVuZWQpXT1cIm9wZW5lZFwiIChvcGVuZWQpPVwiZXZlbnRzLnB1c2goJ29wZW4hJylcIlxuICAgICAgICAgICAgICAgKGNsb3NlZCk9XCJldmVudHMucHVzaCgnY2xvc2UhJylcIj5cbiAgICBTaWRlbmF2IGNvbnRlbnRcbiAgPC9tYXQtc2lkZW5hdj5cblxuICA8bWF0LXNpZGVuYXYtY29udGVudD5cbiAgICA8cD48bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwib3BlbmVkXCI+c2lkZW5hdi5vcGVuZWQ8L21hdC1jaGVja2JveD48L3A+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+c2lkZW5hdi50b2dnbGUoKTwvYnV0dG9uPjwvcD5cbiAgICA8cD5FdmVudHM6PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWV2ZW50c1wiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZSBvZiBldmVudHNcIj57e2V9fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==