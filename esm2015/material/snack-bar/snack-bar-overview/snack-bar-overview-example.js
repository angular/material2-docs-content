/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/button";
const _c0 = ["message", ""];
const _c1 = ["action", ""];
/**
 * \@title Basic snack-bar
 */
export class SnackBarOverviewExample {
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
SnackBarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-overview-example',
                templateUrl: 'snack-bar-overview-example.html',
                styleUrls: ['snack-bar-overview-example.css'],
            },] },
];
/** @nocollapse */
SnackBarOverviewExample.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarOverviewExample.ɵfac = function SnackBarOverviewExample_Factory(t) { return new (t || SnackBarOverviewExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
/** @nocollapse */ SnackBarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 8, vars: 0, consts: [["matInput", "", "value", "Disco party!", "placeholder", "Message"], ["matInput", "", "value", "Dance", "placeholder", "Action"], ["mat-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelement(1, "input", 0, _c0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵelement(4, "input", 1, _c1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(2); const _r1 = i0.ɵɵreference(5); return ctx.openSnackBar(_r0.value, _r1.value); });
        i0.ɵɵtext(7, "Show snack-bar");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatFormField, i3.MatInput, i4.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SnackBarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-overview-example',
                templateUrl: 'snack-bar-overview-example.html',
                styleUrls: ['snack-bar-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    SnackBarOverviewExample.prototype._snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1vdmVydmlldy9zbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFVeEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUNsQyxZQUFvQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBQUcsQ0FBQzs7Ozs7O0lBRTlDLFlBQVksQ0FBQyxPQUFlLEVBQUUsTUFBYztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ25DLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzs7O1lBVE8sV0FBVzs7OEZBVU4sdUJBQXVCOzREQUF2Qix1QkFBdUI7O1FDWHBDLHNDQUNFO1FBQUEsZ0NBQ0Y7UUFBQSxpQkFBaUI7UUFFakIsc0NBQ0U7UUFBQSxnQ0FDRjtRQUFBLGlCQUFpQjtRQUVqQixpQ0FBdUU7UUFBcEQsK0xBQVMsc0NBQXlDLElBQUM7UUFBQyw4QkFBYztRQUFBLGlCQUFTOzttQ0RHakYsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7Ozs7OztJQUVhLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHNuYWNrLWJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJPdmVydmlld0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IHZhbHVlPVwiRGlzY28gcGFydHkhXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgI21lc3NhZ2U+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCB2YWx1ZT1cIkRhbmNlXCIgcGxhY2Vob2xkZXI9XCJBY3Rpb25cIiAjYWN0aW9uPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuU25hY2tCYXIobWVzc2FnZS52YWx1ZSwgYWN0aW9uLnZhbHVlKVwiPlNob3cgc25hY2stYmFyPC9idXR0b24+XG4iXX0=