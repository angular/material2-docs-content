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
    var e_r30 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(e_r30);
} }
function SidenavOpenCloseExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3, 4);
    i0.ɵɵlistener("openedChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_openedChange_1_listener($event) { i0.ɵɵrestoreView(_r32); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.opened = $event; });
    i0.ɵɵlistener("opened", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_opened_1_listener($event) { i0.ɵɵrestoreView(_r32); var ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.events.push("open!"); });
    i0.ɵɵlistener("closed", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_closed_1_listener($event) { i0.ɵɵrestoreView(_r32); var ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.events.push("close!"); });
    i0.ɵɵtext(3, " Sidenav content ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-sidenav-content");
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵelementStart(6, "mat-checkbox", 5);
    i0.ɵɵlistener("ngModelChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_checkbox_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r32); var ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.opened = $event; });
    i0.ɵɵtext(7, "sidenav.opened");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵlistener("click", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r32); var _r28 = i0.ɵɵreference(2); return _r28.toggle(); });
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
    var ctx_r26 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("opened", ctx_r26.opened);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r26.opened);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r26.events);
} }
function SidenavOpenCloseExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/** @title Sidenav open & close behavior */
var SidenavOpenCloseExample = /** @class */ (function () {
    function SidenavOpenCloseExample() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOpenCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-open-close-example',
                    templateUrl: 'sidenav-open-close-example.html',
                    styleUrls: ['sidenav-open-close-example.css'],
                },] },
    ];
    SidenavOpenCloseExample.ɵfac = function SidenavOpenCloseExample_Factory(t) { return new (t || SidenavOpenCloseExample)(); };
    SidenavOpenCloseExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavOpenCloseExample, selectors: [["sidenav-open-close-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", 3, "opened", "openedChange", "closed"], ["sidenav", ""], [3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function SidenavOpenCloseExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavOpenCloseExample_mat_sidenav_container_0_Template, 15, 3, "mat-sidenav-container", 0);
            i0.ɵɵtemplate(1, SidenavOpenCloseExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i2.MatSidenavContent, i3.MatCheckbox, i4.NgControlStatus, i4.NgModel, i5.MatButton, i1.NgForOf], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}"] });
    return SidenavOpenCloseExample;
}());
export { SidenavOpenCloseExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavOpenCloseExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-open-close-example',
                templateUrl: 'sidenav-open-close-example.html',
                styleUrls: ['sidenav-open-close-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtb3Blbi1jbG9zZS9zaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vcGVuLWNsb3NlL3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNXbEMsMkJBQThCO0lBQUEsWUFBSztJQUFBLGlCQUFNOzs7SUFBWCxlQUFLO0lBQUwsMkJBQUs7Ozs7SUFYekMsZ0RBQ0U7SUFBQSx5Q0FFRTtJQUZnQywwT0FBbUI7SUFBQyxtTUFBVSxvQkFBWSxPQUFPLENBQUMsSUFBQztJQUN4RSxtTUFBVSxvQkFBWSxRQUFRLENBQUMsSUFBQztJQUMzQyxpQ0FDRjtJQUFBLGlCQUFjO0lBRWQsMkNBQ0U7SUFBQSx5QkFBRztJQUFBLHVDQUFtQztJQUFyQiw2T0FBb0I7SUFBQyw4QkFBYztJQUFBLGlCQUFlO0lBQUEsaUJBQUk7SUFDdkUseUJBQUc7SUFBQSxpQ0FBOEM7SUFBM0Isd0xBQVMsYUFBZ0IsSUFBQztJQUFDLGlDQUFnQjtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDOUUsMEJBQUc7SUFBQSx3QkFBTztJQUFBLGlCQUFJO0lBQ2QsK0JBQ0U7SUFBQSxrR0FBOEI7SUFDaEMsaUJBQU07SUFDUixpQkFBc0I7SUFDeEIsaUJBQXdCOzs7SUFiWSxlQUFtQjtJQUFuQix1Q0FBbUI7SUFNbEMsZUFBb0I7SUFBcEIsd0NBQW9CO0lBSTlCLGVBQXdCO0lBQXhCLHdDQUF3Qjs7O0lBS25DLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOztBRGRyRSwyQ0FBMkM7QUFDM0M7SUFBQTtRQU1FLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFHdEIsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztLQUNuRzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2lCQUM5Qzs7a0dBQ1ksdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNScEMsNkdBQ0U7WUFlRix3RUFBd0I7O1lBaEJ5QixvQ0FBaUI7WUFnQjdELGVBQWtCO1lBQWxCLHFDQUFrQjs7a0NEaEJ2QjtDQWFDLEFBVkQsSUFVQztTQUxZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTaWRlbmF2IG9wZW4gJiBjbG9zZSBiZWhhdmlvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZPcGVuQ2xvc2VFeGFtcGxlIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBvcGVuZWQ6IGJvb2xlYW47XG5cbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cInNpZGVcIiBbKG9wZW5lZCldPVwib3BlbmVkXCIgKG9wZW5lZCk9XCJldmVudHMucHVzaCgnb3BlbiEnKVwiXG4gICAgICAgICAgICAgICAoY2xvc2VkKT1cImV2ZW50cy5wdXNoKCdjbG9zZSEnKVwiPlxuICAgIFNpZGVuYXYgY29udGVudFxuICA8L21hdC1zaWRlbmF2PlxuXG4gIDxtYXQtc2lkZW5hdi1jb250ZW50PlxuICAgIDxwPjxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJvcGVuZWRcIj5zaWRlbmF2Lm9wZW5lZDwvbWF0LWNoZWNrYm94PjwvcD5cbiAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5zaWRlbmF2LnRvZ2dsZSgpPC9idXR0b24+PC9wPlxuICAgIDxwPkV2ZW50czo8L3A+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZXZlbnRzXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlIG9mIGV2ZW50c1wiPnt7ZX19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19