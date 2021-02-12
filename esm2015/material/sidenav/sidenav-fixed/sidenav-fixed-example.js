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
function SidenavFixedExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-toolbar", 1);
    i0.ɵɵtext(2, "Header");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(4, "mat-sidenav", 3, 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-sidenav-content", 5);
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵelementStart(9, "mat-checkbox", 6);
    i0.ɵɵtext(10, "Fixed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵelementStart(12, "mat-form-field");
    i0.ɵɵelementStart(13, "mat-label");
    i0.ɵɵtext(14, "Top gap");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵelementStart(17, "mat-form-field");
    i0.ɵɵelementStart(18, "mat-label");
    i0.ɵɵtext(19, "Bottom gap");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p");
    i0.ɵɵelementStart(22, "button", 9);
    i0.ɵɵlistener("click", function SidenavFixedExample_ng_container_0_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(5); return _r2.toggle(); });
    i0.ɵɵtext(23, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-toolbar", 10);
    i0.ɵɵtext(25, "Footer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("fixedInViewport", ctx_r0.options.value.fixed)("fixedTopGap", ctx_r0.options.value.top)("fixedBottomGap", ctx_r0.options.value.bottom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.options.value.fixed ? "Fixed" : "Non-fixed", " Sidenav ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.options);
} }
function SidenavFixedExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on StackBlitz to see result");
    i0.ɵɵelementEnd();
} }
/** @title Fixed sidenav */
export class SidenavFixedExample {
    constructor(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
}
SidenavFixedExample.ɵfac = function SidenavFixedExample_Factory(t) { return new (t || SidenavFixedExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
SidenavFixedExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavFixedExample, selectors: [["sidenav-fixed-example"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "example-header"], [1, "example-container"], ["mode", "side", "opened", "", 1, "example-sidenav", 3, "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["sidenav", ""], [3, "formGroup"], ["formControlName", "fixed"], ["matInput", "", "type", "number", "formControlName", "top"], ["matInput", "", "type", "number", "formControlName", "bottom"], ["mat-button", "", 3, "click"], [1, "example-footer"]], template: function SidenavFixedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavFixedExample_ng_container_0_Template, 26, 5, "ng-container", 0);
        i0.ɵɵtemplate(1, SidenavFixedExample_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i2.NgIf, i3.MatToolbar, i4.MatSidenavContainer, i4.MatSidenav, i4.MatSidenavContent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatCheckbox, i1.NgControlStatus, i1.FormControlName, i6.MatFormField, i6.MatLabel, i1.NumberValueAccessor, i1.DefaultValueAccessor, i7.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavFixedExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-fixed-example',
                templateUrl: 'sidenav-fixed-example.html',
                styleUrls: ['sidenav-fixed-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1maXhlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWZpeGVkL3NpZGVuYXYtZml4ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1maXhlZC9zaWRlbmF2LWZpeGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNEdEQsNkJBQWdDO0lBQzlCLHNDQUFvQztJQUFBLHNCQUFNO0lBQUEsaUJBQWM7SUFFeEQsZ0RBQWlEO0lBQy9DLHlDQUVxRDtJQUNuRCxZQUNGO0lBQUEsaUJBQWM7SUFFZCw4Q0FBMkM7SUFDekMseUJBQUc7SUFBQSx1Q0FBc0M7SUFBQSxzQkFBSztJQUFBLGlCQUFlO0lBQUEsaUJBQUk7SUFDakUsMEJBQUc7SUFBQSx1Q0FBZ0I7SUFDakIsa0NBQVc7SUFBQSx3QkFBTztJQUFBLGlCQUFZO0lBQzlCLDRCQUFvRDtJQUN0RCxpQkFBaUI7SUFBQSxpQkFBSTtJQUNyQiwwQkFBRztJQUFBLHVDQUFnQjtJQUNqQixrQ0FBVztJQUFBLDJCQUFVO0lBQUEsaUJBQVk7SUFDakMsNEJBQXVEO0lBQ3pELGlCQUFpQjtJQUFBLGlCQUFJO0lBQ3JCLDBCQUFHO0lBQUEsa0NBQThDO0lBQTNCLHNLQUFTLFlBQWdCLElBQUM7SUFBQyx1QkFBTTtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDdEUsaUJBQXNCO0lBQ3hCLGlCQUF3QjtJQUV4Qix3Q0FBb0M7SUFBQSx1QkFBTTtJQUFBLGlCQUFjO0lBQzFELDBCQUFlOzs7SUFwQkUsZUFBdUM7SUFBdkMsNERBQXVDLHlDQUFBLCtDQUFBO0lBRWxELGVBQ0Y7SUFERSwyRkFDRjtJQUVxQixlQUFxQjtJQUFyQiwwQ0FBcUI7OztJQWlCOUMsMkJBQXdCO0lBQUEsdURBQXVDO0lBQUEsaUJBQU07O0FEeEJyRSwyQkFBMkI7QUFNM0IsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QixZQUFZLEVBQWU7UUFRM0IsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQVBoRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0ZBVFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNUaEMsdUZBeUJlO1FBRWYsb0VBQXFFOztRQTNCdEQsb0NBQWU7UUEyQnhCLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZEbEJULG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGaXhlZCBzaWRlbmF2ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWZpeGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtZml4ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtZml4ZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkZpeGVkRXhhbXBsZSB7XG4gIG9wdGlvbnM6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBmYi5ncm91cCh7XG4gICAgICBib3R0b206IDAsXG4gICAgICBmaXhlZDogZmFsc2UsXG4gICAgICB0b3A6IDBcbiAgICB9KTtcbiAgfVxuXG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJleGFtcGxlLWhlYWRlclwiPkhlYWRlcjwvbWF0LXRvb2xiYXI+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IG1vZGU9XCJzaWRlXCIgb3BlbmVkIGNsYXNzPVwiZXhhbXBsZS1zaWRlbmF2XCJcbiAgICAgICAgICAgICAgICAgW2ZpeGVkSW5WaWV3cG9ydF09XCJvcHRpb25zLnZhbHVlLmZpeGVkXCIgW2ZpeGVkVG9wR2FwXT1cIm9wdGlvbnMudmFsdWUudG9wXCJcbiAgICAgICAgICAgICAgICAgW2ZpeGVkQm90dG9tR2FwXT1cIm9wdGlvbnMudmFsdWUuYm90dG9tXCI+XG4gICAgICB7e29wdGlvbnMudmFsdWUuZml4ZWQgPyAnRml4ZWQnIDogJ05vbi1maXhlZCd9fSBTaWRlbmF2XG4gICAgPC9tYXQtc2lkZW5hdj5cblxuICAgIDxtYXQtc2lkZW5hdi1jb250ZW50IFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiPlxuICAgICAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJmaXhlZFwiPkZpeGVkPC9tYXQtY2hlY2tib3g+PC9wPlxuICAgICAgPHA+PG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPlRvcCBnYXA8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBmb3JtQ29udHJvbE5hbWU9XCJ0b3BcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+PC9wPlxuICAgICAgPHA+PG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPkJvdHRvbSBnYXA8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBmb3JtQ29udHJvbE5hbWU9XCJib3R0b21cIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+PC9wPlxuICAgICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICAgIDwvbWF0LXNpZGVuYXYtY29udGVudD5cbiAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5cbiAgPG1hdC10b29sYmFyIGNsYXNzPVwiZXhhbXBsZS1mb290ZXJcIj5Gb290ZXI8L21hdC10b29sYmFyPlxuPC9uZy1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tCbGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=