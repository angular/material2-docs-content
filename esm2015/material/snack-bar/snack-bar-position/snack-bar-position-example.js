/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/snack-bar/snack-bar-position/snack-bar-position-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
/**
 * \@title Snack-bar with configurable position
 */
let SnackBarPositionExample = /** @class */ (() => {
    /**
     * \@title Snack-bar with configurable position
     */
    class SnackBarPositionExample {
        /**
         * @param {?} _snackBar
         */
        constructor(_snackBar) {
            this._snackBar = _snackBar;
            this.horizontalPosition = 'start';
            this.verticalPosition = 'bottom';
        }
        /**
         * @return {?}
         */
        openSnackBar() {
            this._snackBar.open('Cannonball!!', 'End now', {
                duration: 500,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        }
    }
    SnackBarPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-position-example',
                    templateUrl: 'snack-bar-position-example.html',
                    styleUrls: ['snack-bar-position-example.css'],
                },] },
    ];
    /** @nocollapse */
    SnackBarPositionExample.ctorParameters = () => [
        { type: MatSnackBar }
    ];
    /** @nocollapse */ SnackBarPositionExample.ɵfac = function SnackBarPositionExample_Factory(t) { return new (t || SnackBarPositionExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
    /** @nocollapse */ SnackBarPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 24, vars: 2, consts: [[3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["value", "top"], ["value", "bottom"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Horizontal position");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 0);
            i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_3_listener($event) { return ctx.horizontalPosition = $event; });
            i0.ɵɵelementStart(4, "mat-option", 1);
            i0.ɵɵtext(5, "Start");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-option", 2);
            i0.ɵɵtext(7, "Center");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-option", 3);
            i0.ɵɵtext(9, "End");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-option", 4);
            i0.ɵɵtext(11, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-option", 5);
            i0.ɵɵtext(13, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field");
            i0.ɵɵelementStart(15, "mat-label");
            i0.ɵɵtext(16, "Vertical position");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-select", 0);
            i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_17_listener($event) { return ctx.verticalPosition = $event; });
            i0.ɵɵelementStart(18, "mat-option", 6);
            i0.ɵɵtext(19, "Top");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-option", 7);
            i0.ɵɵtext(21, "Bottom");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 8);
            i0.ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_22_listener() { return ctx.openSnackBar(); });
            i0.ɵɵtext(23, " Pool party!\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.horizontalPosition);
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("value", ctx.verticalPosition);
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatSelect, i4.MatOption, i5.MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return SnackBarPositionExample;
})();
export { SnackBarPositionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarPositionExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-position-example',
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
if (false) {
    /** @type {?} */
    SnackBarPositionExample.prototype.horizontalPosition;
    /** @type {?} */
    SnackBarPositionExample.prototype.verticalPosition;
    /**
     * @type {?}
     * @private
     */
    SnackBarPositionExample.prototype._snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1wb3NpdGlvbi9zbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsV0FBVyxHQUdaLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7QUFLckM7Ozs7SUFBQSxNQUthLHVCQUF1Qjs7OztRQUlsQyxZQUFvQixTQUFzQjtZQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1lBSDFDLHVCQUFrQixHQUFrQyxPQUFPLENBQUM7WUFDNUQscUJBQWdCLEdBQWdDLFFBQVEsQ0FBQztRQUVaLENBQUM7Ozs7UUFFOUMsWUFBWTtZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUU7Z0JBQzdDLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7YUFDeEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQzlDOzs7O2dCQVpDLFdBQVc7O3FIQWFBLHVCQUF1QjttRkFBdkIsdUJBQXVCO1lDZnBDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxtQ0FBbUI7WUFBQSxpQkFBWTtZQUMxQyxxQ0FDRTtZQURVLDZKQUE4QjtZQUN4QyxxQ0FBMEI7WUFBQSxxQkFBSztZQUFBLGlCQUFhO1lBQzVDLHFDQUEyQjtZQUFBLHNCQUFNO1lBQUEsaUJBQWE7WUFDOUMscUNBQXdCO1lBQUEsbUJBQUc7WUFBQSxpQkFBYTtZQUN4QyxzQ0FBeUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFhO1lBQzFDLHNDQUEwQjtZQUFBLHNCQUFLO1lBQUEsaUJBQWE7WUFDOUMsaUJBQWE7WUFDZixpQkFBaUI7WUFDakIsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLGtDQUFpQjtZQUFBLGlCQUFZO1lBQ3hDLHNDQUNFO1lBRFUsNEpBQTRCO1lBQ3RDLHNDQUF3QjtZQUFBLG9CQUFHO1lBQUEsaUJBQWE7WUFDeEMsc0NBQTJCO1lBQUEsdUJBQU07WUFBQSxpQkFBYTtZQUNoRCxpQkFBYTtZQUNmLGlCQUFpQjtZQUVqQixrQ0FDRTtZQUR5QixxR0FBUyxrQkFBYyxJQUFDO1lBQ2pELCtCQUNGO1lBQUEsaUJBQVM7O1lBbEJLLGVBQThCO1lBQTlCLDhDQUE4QjtZQVU5QixnQkFBNEI7WUFBNUIsNENBQTRCOztrQ0RaMUM7S0E0QkM7U0FiWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7SUFFQyxxREFBNEQ7O0lBQzVELG1EQUF5RDs7Ozs7SUFFN0MsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0U25hY2tCYXIsXG4gIE1hdFNuYWNrQmFySG9yaXpvbnRhbFBvc2l0aW9uLFxuICBNYXRTbmFja0JhclZlcnRpY2FsUG9zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIFNuYWNrLWJhciB3aXRoIGNvbmZpZ3VyYWJsZSBwb3NpdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUge1xuICBob3Jpem9udGFsUG9zaXRpb246IE1hdFNuYWNrQmFySG9yaXpvbnRhbFBvc2l0aW9uID0gJ3N0YXJ0JztcbiAgdmVydGljYWxQb3NpdGlvbjogTWF0U25hY2tCYXJWZXJ0aWNhbFBvc2l0aW9uID0gJ2JvdHRvbSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKCdDYW5ub25iYWxsISEnLCAnRW5kIG5vdycsIHtcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uLFxuICAgICAgdmVydGljYWxQb3NpdGlvbjogdGhpcy52ZXJ0aWNhbFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+SG9yaXpvbnRhbCBwb3NpdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJob3Jpem9udGFsUG9zaXRpb25cIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInN0YXJ0XCI+U3RhcnQ8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjZW50ZXJcIj5DZW50ZXI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJlbmRcIj5FbmQ8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJsZWZ0XCI+TGVmdDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJpZ2h0XCI+UmlnaHQ8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+VmVydGljYWwgcG9zaXRpb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgWyh2YWx1ZSldPVwidmVydGljYWxQb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidG9wXCI+VG9wPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiYm90dG9tXCI+Qm90dG9tPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlblNuYWNrQmFyKClcIiBhcmlhLWxhYmVsPVwiU2hvdyBhbiBleGFtcGxlIHNuYWNrLWJhclwiPlxuICBQb29sIHBhcnR5IVxuPC9idXR0b24+XG4iXX0=