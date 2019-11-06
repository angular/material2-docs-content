/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/toolbar";
import * as i4 from "@angular/material/sidenav";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/button";
const _c0 = ["sidenav", ""];
function SidenavFixedExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-toolbar", 1);
    i0.ɵɵtext(2, "Header");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(4, "mat-sidenav", 3, _c0);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-sidenav-content", 4);
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵelementStart(9, "mat-checkbox", 5);
    i0.ɵɵtext(10, "Fixed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵelementStart(12, "mat-form-field");
    i0.ɵɵelement(13, "input", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵelementStart(15, "mat-form-field");
    i0.ɵɵelement(16, "input", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵelementStart(18, "button", 8);
    i0.ɵɵlistener("click", function SidenavFixedExample_ng_container_0_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r19); const _r17 = i0.ɵɵreference(5); return _r17.toggle(); });
    i0.ɵɵtext(19, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-toolbar", 9);
    i0.ɵɵtext(21, "Footer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("fixedInViewport", ctx_r15.options.value.fixed)("fixedTopGap", ctx_r15.options.value.top)("fixedBottomGap", ctx_r15.options.value.bottom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.options.value.fixed ? "Fixed" : "Non-fixed", " Sidenav ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r15.options);
} }
function SidenavFixedExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Fixed sidenav
 */
export class SidenavFixedExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
         * @param {?} h
         * @return {?}
         */
        h => h.test(window.location.host)));
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
}
SidenavFixedExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-fixed-example',
                templateUrl: 'sidenav-fixed-example.html',
                styleUrls: ['sidenav-fixed-example.css'],
            },] },
];
/** @nocollapse */
SidenavFixedExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ SidenavFixedExample.ɵfac = function SidenavFixedExample_Factory(t) { return new (t || SidenavFixedExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ SidenavFixedExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavFixedExample, selectors: [["sidenav-fixed-example"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "example-header"], [1, "example-container"], ["mode", "side", "opened", "", 1, "example-sidenav", 3, "fixedInViewport", "fixedTopGap", "fixedBottomGap"], [3, "formGroup"], ["formControlName", "fixed"], ["matInput", "", "type", "number", "formControlName", "top", "placeholder", "Top gap"], ["matInput", "", "type", "number", "formControlName", "bottom", "placeholder", "Bottom gap"], ["mat-button", "", 3, "click"], [1, "example-footer"]], template: function SidenavFixedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavFixedExample_ng_container_0_Template, 22, 5, "ng-container", 0);
        i0.ɵɵtemplate(1, SidenavFixedExample_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i2.NgIf, i3.MatToolbar, i4.MatSidenavContainer, i4.MatSidenav, i4.MatSidenavContent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatCheckbox, i1.NgControlStatus, i1.FormControlName, i6.MatFormField, i1.NumberValueAccessor, i1.DefaultValueAccessor, i7.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SidenavFixedExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-fixed-example',
                templateUrl: 'sidenav-fixed-example.html',
                styleUrls: ['sidenav-fixed-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
if (false) {
    /** @type {?} */
    SidenavFixedExample.prototype.options;
    /** @type {?} */
    SidenavFixedExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1maXhlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWZpeGVkL3NpZGVuYXYtZml4ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1maXhlZC9zaWRlbmF2LWZpeGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7OztJQ0R0RCw2QkFDRTtJQUFBLHNDQUFvQztJQUFBLHNCQUFNO0lBQUEsaUJBQWM7SUFFeEQsZ0RBQ0U7SUFBQSwyQ0FHRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYztJQUVkLDhDQUNFO0lBQUEseUJBQUc7SUFBQSx1Q0FBc0M7SUFBQSxzQkFBSztJQUFBLGlCQUFlO0lBQUEsaUJBQUk7SUFDakUsMEJBQUc7SUFBQSx1Q0FDRDtJQUFBLDRCQUNGO0lBQUEsaUJBQWlCO0lBQUEsaUJBQUk7SUFDckIsMEJBQUc7SUFBQSx1Q0FDRDtJQUFBLDRCQUNGO0lBQUEsaUJBQWlCO0lBQUEsaUJBQUk7SUFDckIsMEJBQUc7SUFBQSxrQ0FBOEM7SUFBM0IsOEtBQVMsYUFBZ0IsSUFBQztJQUFDLHVCQUFNO0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUN0RSxpQkFBc0I7SUFDeEIsaUJBQXdCO0lBRXhCLHVDQUFvQztJQUFBLHVCQUFNO0lBQUEsaUJBQWM7SUFDMUQsMEJBQWU7OztJQWxCRSxlQUF1QztJQUF2Qyw2REFBdUMsMENBQUEsZ0RBQUE7SUFFbEQsZUFDRjtJQURFLDRGQUNGO0lBRXFCLGVBQXFCO0lBQXJCLDJDQUFxQjs7O0lBZTlDLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOzs7OztBRGhCckUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUc5QixZQUFZLEVBQWU7UUFRM0IsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQVBoRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDOzs7O1lBUE8sV0FBVzs7c0ZBUU4sbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNUaEMsdUZBQ0U7UUF3QkYsb0VBQXdCOztRQXpCVixvQ0FBaUI7UUF5QjFCLGVBQWtCO1FBQWxCLHFDQUFrQjs7bUNEaEJWLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekM7Ozs7SUFFQyxzQ0FBbUI7O0lBVW5CLHdDQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEZpeGVkIHNpZGVuYXYgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtZml4ZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1maXhlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1maXhlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2Rml4ZWRFeGFtcGxlIHtcbiAgb3B0aW9uczogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IGZiLmdyb3VwKHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgIHRvcDogMFxuICAgIH0pO1xuICB9XG5cbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtdG9vbGJhciBjbGFzcz1cImV4YW1wbGUtaGVhZGVyXCI+SGVhZGVyPC9tYXQtdG9vbGJhcj5cblxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cInNpZGVcIiBvcGVuZWQgY2xhc3M9XCJleGFtcGxlLXNpZGVuYXZcIlxuICAgICAgICAgICAgICAgICBbZml4ZWRJblZpZXdwb3J0XT1cIm9wdGlvbnMudmFsdWUuZml4ZWRcIiBbZml4ZWRUb3BHYXBdPVwib3B0aW9ucy52YWx1ZS50b3BcIlxuICAgICAgICAgICAgICAgICBbZml4ZWRCb3R0b21HYXBdPVwib3B0aW9ucy52YWx1ZS5ib3R0b21cIj5cbiAgICAgIHt7b3B0aW9ucy52YWx1ZS5maXhlZCA/ICdGaXhlZCcgOiAnTm9uLWZpeGVkJ319IFNpZGVuYXZcbiAgICA8L21hdC1zaWRlbmF2PlxuXG4gICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQgW2Zvcm1Hcm91cF09XCJvcHRpb25zXCI+XG4gICAgICA8cD48bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImZpeGVkXCI+Rml4ZWQ8L21hdC1jaGVja2JveD48L3A+XG4gICAgICA8cD48bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgZm9ybUNvbnRyb2xOYW1lPVwidG9wXCIgcGxhY2Vob2xkZXI9XCJUb3AgZ2FwXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPjwvcD5cbiAgICAgIDxwPjxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBmb3JtQ29udHJvbE5hbWU9XCJib3R0b21cIiBwbGFjZWhvbGRlcj1cIkJvdHRvbSBnYXBcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+PC9wPlxuICAgICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICAgIDwvbWF0LXNpZGVuYXYtY29udGVudD5cbiAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5cbiAgPG1hdC10b29sYmFyIGNsYXNzPVwiZXhhbXBsZS1mb290ZXJcIj5Gb290ZXI8L21hdC10b29sYmFyPlxuPC9uZy1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=