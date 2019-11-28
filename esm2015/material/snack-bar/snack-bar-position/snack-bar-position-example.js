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
export class SnackBarPositionExample {
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
        this._snackBar.open('Canonball!!', 'End now', {
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
/** @nocollapse */ SnackBarPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 20, vars: 2, consts: [["placeholder", "Horizontal position", 3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["placeholder", "Vertical position", 3, "value", "valueChange"], ["value", "top"], ["value", "bottom"], ["mat-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-select", 0);
        i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_1_listener($event) { return ctx.horizontalPosition = $event; });
        i0.ɵɵelementStart(2, "mat-option", 1);
        i0.ɵɵtext(3, "Start");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-option", 2);
        i0.ɵɵtext(5, "Center");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 3);
        i0.ɵɵtext(7, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 4);
        i0.ɵɵtext(9, "Left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 5);
        i0.ɵɵtext(11, "Right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field");
        i0.ɵɵelementStart(13, "mat-select", 6);
        i0.ɵɵlistener("valueChange", function SnackBarPositionExample_Template_mat_select_valueChange_13_listener($event) { return ctx.verticalPosition = $event; });
        i0.ɵɵelementStart(14, "mat-option", 7);
        i0.ɵɵtext(15, "Top");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-option", 8);
        i0.ɵɵtext(17, "Bottom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 9);
        i0.ɵɵlistener("click", function SnackBarPositionExample_Template_button_click_18_listener($event) { return ctx.openSnackBar(); });
        i0.ɵɵtext(19, " Pool party!\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.horizontalPosition);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("value", ctx.verticalPosition);
    } }, directives: [i2.MatFormField, i3.MatSelect, i4.MatOption, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1wb3NpdGlvbi9zbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsV0FBVyxHQUdaLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7QUFVckMsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUtsQyxZQUFvQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBSDFDLHVCQUFrQixHQUFrQyxPQUFPLENBQUM7UUFDNUQscUJBQWdCLEdBQWdDLFFBQVEsQ0FBQztJQUVaLENBQUM7Ozs7SUFFOUMsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUU7WUFDNUMsUUFBUSxFQUFFLEdBQUc7WUFDYixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7OztZQVpDLFdBQVc7OzhGQWFBLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDZnBDLHNDQUNFO1FBQUEscUNBQ0U7UUFENEMsNkpBQThCO1FBQzFFLHFDQUEwQjtRQUFBLHFCQUFLO1FBQUEsaUJBQWE7UUFDNUMscUNBQTJCO1FBQUEsc0JBQU07UUFBQSxpQkFBYTtRQUM5QyxxQ0FBd0I7UUFBQSxtQkFBRztRQUFBLGlCQUFhO1FBQ3hDLHFDQUF5QjtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDMUMsc0NBQTBCO1FBQUEsc0JBQUs7UUFBQSxpQkFBYTtRQUM5QyxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQix1Q0FDRTtRQUFBLHNDQUNFO1FBRDBDLDRKQUE0QjtRQUN0RSxzQ0FBd0I7UUFBQSxvQkFBRztRQUFBLGlCQUFhO1FBQ3hDLHNDQUEyQjtRQUFBLHVCQUFNO1FBQUEsaUJBQWE7UUFDaEQsaUJBQWE7UUFDZixpQkFBaUI7UUFFakIsa0NBQ0U7UUFEaUIsMkdBQVMsa0JBQWMsSUFBQztRQUN6QywrQkFDRjtRQUFBLGlCQUFTOztRQWpCdUMsZUFBOEI7UUFBOUIsOENBQThCO1FBU2hDLGdCQUE0QjtRQUE1Qiw0Q0FBNEI7O2tEREs3RCx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzs7O0lBR0MscURBQTREOztJQUM1RCxtREFBeUQ7Ozs7O0lBRTdDLDRDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdFNuYWNrQmFyLFxuICBNYXRTbmFja0Jhckhvcml6b250YWxQb3NpdGlvbixcbiAgTWF0U25hY2tCYXJWZXJ0aWNhbFBvc2l0aW9uLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG4vKipcbiAqIEB0aXRsZSBTbmFjay1iYXIgd2l0aCBjb25maWd1cmFibGUgcG9zaXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyUG9zaXRpb25FeGFtcGxlIHtcblxuICBob3Jpem9udGFsUG9zaXRpb246IE1hdFNuYWNrQmFySG9yaXpvbnRhbFBvc2l0aW9uID0gJ3N0YXJ0JztcbiAgdmVydGljYWxQb3NpdGlvbjogTWF0U25hY2tCYXJWZXJ0aWNhbFBvc2l0aW9uID0gJ2JvdHRvbSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKCdDYW5vbmJhbGwhIScsICdFbmQgbm93Jywge1xuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogdGhpcy5ob3Jpem9udGFsUG9zaXRpb24sXG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiB0aGlzLnZlcnRpY2FsUG9zaXRpb24sXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJIb3Jpem9udGFsIHBvc2l0aW9uXCIgWyh2YWx1ZSldPVwiaG9yaXpvbnRhbFBvc2l0aW9uXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzdGFydFwiPlN0YXJ0PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+Q2VudGVyPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZW5kXCI+RW5kPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibGVmdFwiPkxlZnQ8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyaWdodFwiPlJpZ2h0PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIlZlcnRpY2FsIHBvc2l0aW9uXCIgWyh2YWx1ZSldPVwidmVydGljYWxQb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidG9wXCI+VG9wPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiYm90dG9tXCI+Qm90dG9tPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5TbmFja0JhcigpXCIgYXJpYS1sYWJlbD1cIlNob3cgYW4gZXhhbXBsZSBzbmFjay1iYXJcIj5cbiAgUG9vbCBwYXJ0eSFcbjwvYnV0dG9uPlxuIl19