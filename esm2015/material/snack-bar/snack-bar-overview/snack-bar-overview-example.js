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
/** @nocollapse */ SnackBarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarOverviewExample, selectors: [["snack-bar-overview-example"]], decls: 8, vars: 0, consts: [["matInput", "", "value", "Disco party!", "placeholder", "Message"], ["message", ""], ["matInput", "", "value", "Dance", "placeholder", "Action"], ["action", ""], ["mat-button", "", 3, "click"]], template: function SnackBarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelement(1, "input", 0, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵelement(4, "input", 2, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function SnackBarOverviewExample_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(2); const _r1 = i0.ɵɵreference(5); return ctx.openSnackBar(_r0.value, _r1.value); });
        i0.ɵɵtext(7, "Show snack-bar");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatFormField, i3.MatInput, i4.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1vdmVydmlldy9zbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztBQVV4RCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBQ2xDLFlBQW9CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFBRyxDQUFDOzs7Ozs7SUFFOUMsWUFBWSxDQUFDLE9BQWUsRUFBRSxNQUFjO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7WUFDbkMsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7WUFUTyxXQUFXOzs4RkFVTix1QkFBdUI7NERBQXZCLHVCQUF1Qjs7UUNYcEMsc0NBQ0U7UUFBQSw4QkFDRjtRQUFBLGlCQUFpQjtRQUVqQixzQ0FDRTtRQUFBLDhCQUNGO1FBQUEsaUJBQWlCO1FBRWpCLGlDQUF1RTtRQUFwRCwrTEFBUyxzQ0FBeUMsSUFBQztRQUFDLDhCQUFjO1FBQUEsaUJBQVM7O2tEREdqRix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzs7Ozs7O0lBRWEsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc25hY2stYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgdmFsdWU9XCJEaXNjbyBwYXJ0eSFcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiAjbWVzc2FnZT5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IHZhbHVlPVwiRGFuY2VcIiBwbGFjZWhvbGRlcj1cIkFjdGlvblwiICNhY3Rpb24+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5TbmFja0JhcihtZXNzYWdlLnZhbHVlLCBhY3Rpb24udmFsdWUpXCI+U2hvdyBzbmFjay1iYXI8L2J1dHRvbj5cbiJdfQ==