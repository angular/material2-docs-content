import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/button";
/**
 * @title Basic snack-bar
 */
export class SnackBarOverviewExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
    }
}
SnackBarOverviewExample.ɵfac = function SnackBarOverviewExample_Factory(t) { return new (t || SnackBarOverviewExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 12, vars: 0, consts: [["appearance", "fill"], ["matInput", "", "value", "Disco party!"], ["message", ""], ["matInput", "", "value", "Dance"], ["action", ""], ["mat-stroked-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 0);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Action");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 3, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(4); const _r1 = i0.ɵɵreference(9); return ctx.openSnackBar(_r0.value, _r1.value); });
        i0.ɵɵtext(11, "Show snack-bar");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarOverviewExample, [{
        type: Component,
        args: [{ selector: 'snack-bar-overview-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Message</mat-label>\n  <input matInput value=\"Disco party!\" #message>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Action</mat-label>\n  <input matInput value=\"Dance\" #action>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1vdmVydmlldy9zbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7QUFFeEQ7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW9CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFBRyxDQUFDO0lBRTlDLFlBQVksQ0FBQyxPQUFlLEVBQUUsTUFBYztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OEZBTFUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7O1FDWHBDLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLHVCQUFPO1FBQUEsaUJBQVk7UUFDOUIsOEJBQThDO1FBQ2hELGlCQUFpQjtRQUVqQix5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSxzQkFBTTtRQUFBLGlCQUFZO1FBQzdCLDhCQUFzQztRQUN4QyxpQkFBaUI7UUFFakIsa0NBQStFO1FBQXBELDBMQUFTLHNDQUF5QyxJQUFDO1FBQUMsK0JBQWM7UUFBQSxpQkFBUzs7dUZEQ3pGLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHNuYWNrLWJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJPdmVydmlld0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbik7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPk1lc3NhZ2U8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHZhbHVlPVwiRGlzY28gcGFydHkhXCIgI21lc3NhZ2U+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5BY3Rpb248L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHZhbHVlPVwiRGFuY2VcIiAjYWN0aW9uPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5TbmFja0JhcihtZXNzYWdlLnZhbHVlLCBhY3Rpb24udmFsdWUpXCI+U2hvdyBzbmFjay1iYXI8L2J1dHRvbj5cbiJdfQ==