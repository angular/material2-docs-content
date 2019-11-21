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
    var _r19 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelement(13, "input", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵelementStart(15, "mat-form-field");
    i0.ɵɵelement(16, "input", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵelementStart(18, "button", 9);
    i0.ɵɵlistener("click", function SidenavFixedExample_ng_container_0_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r19); var _r17 = i0.ɵɵreference(5); return _r17.toggle(); });
    i0.ɵɵtext(19, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-toolbar", 10);
    i0.ɵɵtext(21, "Footer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext();
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
/** @title Fixed sidenav */
var SidenavFixedExample = /** @class */ (function () {
    function SidenavFixedExample(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
    SidenavFixedExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-fixed-example',
                    templateUrl: 'sidenav-fixed-example.html',
                    styleUrls: ['sidenav-fixed-example.css'],
                },] },
    ];
    /** @nocollapse */
    SidenavFixedExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    SidenavFixedExample.ɵfac = function SidenavFixedExample_Factory(t) { return new (t || SidenavFixedExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    SidenavFixedExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavFixedExample, selectors: [["sidenav-fixed-example"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "example-header"], [1, "example-container"], ["mode", "side", "opened", "", 1, "example-sidenav", 3, "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["sidenav", ""], [3, "formGroup"], ["formControlName", "fixed"], ["matInput", "", "type", "number", "formControlName", "top", "placeholder", "Top gap"], ["matInput", "", "type", "number", "formControlName", "bottom", "placeholder", "Bottom gap"], ["mat-button", "", 3, "click"], [1, "example-footer"]], template: function SidenavFixedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavFixedExample_ng_container_0_Template, 22, 5, "ng-container", 0);
            i0.ɵɵtemplate(1, SidenavFixedExample_div_1_Template, 2, 0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i2.NgIf, i3.MatToolbar, i4.MatSidenavContainer, i4.MatSidenav, i4.MatSidenavContent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatCheckbox, i1.NgControlStatus, i1.FormControlName, i6.MatFormField, i1.NumberValueAccessor, i1.DefaultValueAccessor, i7.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    return SidenavFixedExample;
}());
export { SidenavFixedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavFixedExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-fixed-example',
                templateUrl: 'sidenav-fixed-example.html',
                styleUrls: ['sidenav-fixed-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1maXhlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWZpeGVkL3NpZGVuYXYtZml4ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1maXhlZC9zaWRlbmF2LWZpeGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNEdEQsNkJBQ0U7SUFBQSxzQ0FBb0M7SUFBQSxzQkFBTTtJQUFBLGlCQUFjO0lBRXhELGdEQUNFO0lBQUEseUNBR0U7SUFBQSxZQUNGO0lBQUEsaUJBQWM7SUFFZCw4Q0FDRTtJQUFBLHlCQUFHO0lBQUEsdUNBQXNDO0lBQUEsc0JBQUs7SUFBQSxpQkFBZTtJQUFBLGlCQUFJO0lBQ2pFLDBCQUFHO0lBQUEsdUNBQ0Q7SUFBQSw0QkFDRjtJQUFBLGlCQUFpQjtJQUFBLGlCQUFJO0lBQ3JCLDBCQUFHO0lBQUEsdUNBQ0Q7SUFBQSw0QkFDRjtJQUFBLGlCQUFpQjtJQUFBLGlCQUFJO0lBQ3JCLDBCQUFHO0lBQUEsa0NBQThDO0lBQTNCLDRLQUFTLGFBQWdCLElBQUM7SUFBQyx1QkFBTTtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDdEUsaUJBQXNCO0lBQ3hCLGlCQUF3QjtJQUV4Qix3Q0FBb0M7SUFBQSx1QkFBTTtJQUFBLGlCQUFjO0lBQzFELDBCQUFlOzs7SUFsQkUsZUFBdUM7SUFBdkMsNkRBQXVDLDBDQUFBLGdEQUFBO0lBRWxELGVBQ0Y7SUFERSw0RkFDRjtJQUVxQixlQUFxQjtJQUFyQiwyQ0FBcUI7OztJQWU5QywyQkFBd0I7SUFBQSx1REFBdUM7SUFBQSxpQkFBTTs7QUR0QnJFLDJCQUEyQjtBQUMzQjtJQVFFLDZCQUFZLEVBQWU7UUFRM0IsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQVBoRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN6Qzs7OztnQkFQTyxXQUFXOzswRkFRTixtQkFBbUI7NERBQW5CLG1CQUFtQjtZQ1RoQyx1RkFDRTtZQXdCRixvRUFBd0I7O1lBekJWLG9DQUFpQjtZQXlCMUIsZUFBa0I7WUFBbEIscUNBQWtCOzs4QkR6QnZCO0NBcUJDLEFBakJELElBaUJDO1NBWlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRml4ZWQgc2lkZW5hdiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1maXhlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWZpeGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWZpeGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZGaXhlZEV4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgdG9wOiAwXG4gICAgfSk7XG4gIH1cblxuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC10b29sYmFyIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXJcIj5IZWFkZXI8L21hdC10b29sYmFyPlxuXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBtb2RlPVwic2lkZVwiIG9wZW5lZCBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdlwiXG4gICAgICAgICAgICAgICAgIFtmaXhlZEluVmlld3BvcnRdPVwib3B0aW9ucy52YWx1ZS5maXhlZFwiIFtmaXhlZFRvcEdhcF09XCJvcHRpb25zLnZhbHVlLnRvcFwiXG4gICAgICAgICAgICAgICAgIFtmaXhlZEJvdHRvbUdhcF09XCJvcHRpb25zLnZhbHVlLmJvdHRvbVwiPlxuICAgICAge3tvcHRpb25zLnZhbHVlLmZpeGVkID8gJ0ZpeGVkJyA6ICdOb24tZml4ZWQnfX0gU2lkZW5hdlxuICAgIDwvbWF0LXNpZGVuYXY+XG5cbiAgICA8bWF0LXNpZGVuYXYtY29udGVudCBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIj5cbiAgICAgIDxwPjxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZml4ZWRcIj5GaXhlZDwvbWF0LWNoZWNrYm94PjwvcD5cbiAgICAgIDxwPjxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBmb3JtQ29udHJvbE5hbWU9XCJ0b3BcIiBwbGFjZWhvbGRlcj1cIlRvcCBnYXBcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+PC9wPlxuICAgICAgPHA+PG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIGZvcm1Db250cm9sTmFtZT1cImJvdHRvbVwiIHBsYWNlaG9sZGVyPVwiQm90dG9tIGdhcFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD48L3A+XG4gICAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJleGFtcGxlLWZvb3RlclwiPkZvb3RlcjwvbWF0LXRvb2xiYXI+XG48L25nLWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==