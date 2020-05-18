/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/snack-bar/snack-bar-overview/snack-bar-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/button";
/**
 * \@title Basic snack-bar
 */
let SnackBarOverviewExample = /** @class */ (() => {
    /**
     * \@title Basic snack-bar
     */
    class SnackBarOverviewExample {
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
    /** @nocollapse */ SnackBarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 12, vars: 0, consts: [["matInput", "", "value", "Disco party!"], ["message", ""], ["matInput", "", "value", "Dance"], ["action", ""], ["mat-stroked-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
            const _r2 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Message");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 0, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Action");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "input", 2, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(4); const _r1 = i0.ɵɵreference(9); return ctx.openSnackBar(_r0.value, _r1.value); });
            i0.ɵɵtext(11, "Show snack-bar");
            i0.ɵɵelementEnd();
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return SnackBarOverviewExample;
})();
export { SnackBarOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-overview-example',
                templateUrl: 'snack-bar-overview-example.html',
                styleUrls: ['snack-bar-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    SnackBarOverviewExample.prototype._snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1vdmVydmlldy9zbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztBQUt4RDs7OztJQUFBLE1BS2EsdUJBQXVCOzs7O1FBQ2xDLFlBQW9CLFNBQXNCO1lBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBRyxDQUFDOzs7Ozs7UUFFOUMsWUFBWSxDQUFDLE9BQWUsRUFBRSxNQUFjO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7Z0JBQ25DLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDOUM7Ozs7Z0JBVE8sV0FBVzs7cUhBVU4sdUJBQXVCO21GQUF2Qix1QkFBdUI7O1lDWHBDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSx1QkFBTztZQUFBLGlCQUFZO1lBQzlCLDhCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxzQkFBTTtZQUFBLGlCQUFZO1lBQzdCLDhCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLGtDQUErRTtZQUFwRCwwTEFBUyxzQ0FBeUMsSUFBQztZQUFDLCtCQUFjO1lBQUEsaUJBQVM7O2tDRFZ0RztLQW1CQztTQVJZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7Ozs7OztJQUVhLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHNuYWNrLWJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJPdmVydmlld0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5NZXNzYWdlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCB2YWx1ZT1cIkRpc2NvIHBhcnR5IVwiICNtZXNzYWdlPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkFjdGlvbjwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdmFsdWU9XCJEYW5jZVwiICNhY3Rpb24+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlblNuYWNrQmFyKG1lc3NhZ2UudmFsdWUsIGFjdGlvbi52YWx1ZSlcIj5TaG93IHNuYWNrLWJhcjwvYnV0dG9uPlxuIl19