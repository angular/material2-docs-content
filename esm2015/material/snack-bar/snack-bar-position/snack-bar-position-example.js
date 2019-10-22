/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ SnackBarPositionExample.ngFactoryDef = function SnackBarPositionExample_Factory(t) { return new (t || SnackBarPositionExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
/** @nocollapse */ SnackBarPositionExample.ngComponentDef = i0.ɵɵdefineComponent({ type: SnackBarPositionExample, selectors: [["snack-bar-position-example"]], decls: 20, vars: 2, consts: [["placeholder", "Horizontal position", 3, "value", "valueChange"], ["value", "start"], ["value", "center"], ["value", "end"], ["value", "left"], ["value", "right"], ["placeholder", "Vertical position", 3, "value", "valueChange"], ["value", "top"], ["value", "bottom"], ["mat-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarPositionExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ i0.ɵsetClassMetadata(SnackBarPositionExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-position-example',
                templateUrl: 'snack-bar-position-example.html',
                styleUrls: ['snack-bar-position-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1wb3NpdGlvbi9zbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLFdBQVcsR0FHWixNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7O0FBVXJDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFLbEMsWUFBb0IsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUgxQyx1QkFBa0IsR0FBa0MsT0FBTyxDQUFDO1FBQzVELHFCQUFnQixHQUFnQyxRQUFRLENBQUM7SUFFWixDQUFDOzs7O0lBRTlDLFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFO1lBQzVDLFFBQVEsRUFBRSxHQUFHO1lBQ2Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7WUFaQyxXQUFXOztzR0FhQSx1QkFBdUI7c0VBQXZCLHVCQUF1QjtRQ2ZwQyxzQ0FDRTtRQUFBLHFDQUNFO1FBRDRDLDZKQUE4QjtRQUMxRSxxQ0FBMEI7UUFBQSxxQkFBSztRQUFBLGlCQUFhO1FBQzVDLHFDQUEyQjtRQUFBLHNCQUFNO1FBQUEsaUJBQWE7UUFDOUMscUNBQXdCO1FBQUEsbUJBQUc7UUFBQSxpQkFBYTtRQUN4QyxxQ0FBeUI7UUFBQSxvQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUEwQjtRQUFBLHNCQUFLO1FBQUEsaUJBQWE7UUFDOUMsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIsdUNBQ0U7UUFBQSxzQ0FDRTtRQUQwQyw0SkFBNEI7UUFDdEUsc0NBQXdCO1FBQUEsb0JBQUc7UUFBQSxpQkFBYTtRQUN4QyxzQ0FBMkI7UUFBQSx1QkFBTTtRQUFBLGlCQUFhO1FBQ2hELGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLGtDQUNFO1FBRGlCLDJHQUFTLGtCQUFjLElBQUM7UUFDekMsK0JBQ0Y7UUFBQSxpQkFBUzs7UUFqQnVDLGVBQThCO1FBQTlCLDhDQUE4QjtRQVNoQyxnQkFBNEI7UUFBNUIsNENBQTRCOzttQ0RLN0QsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzs7OztJQUdDLHFEQUE0RDs7SUFDNUQsbURBQXlEOzs7OztJQUU3Qyw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRTbmFja0JhcixcbiAgTWF0U25hY2tCYXJIb3Jpem9udGFsUG9zaXRpb24sXG4gIE1hdFNuYWNrQmFyVmVydGljYWxQb3NpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgU25hY2stYmFyIHdpdGggY29uZmlndXJhYmxlIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSB7XG5cbiAgaG9yaXpvbnRhbFBvc2l0aW9uOiBNYXRTbmFja0Jhckhvcml6b250YWxQb3NpdGlvbiA9ICdzdGFydCc7XG4gIHZlcnRpY2FsUG9zaXRpb246IE1hdFNuYWNrQmFyVmVydGljYWxQb3NpdGlvbiA9ICdib3R0b20nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbignQ2Fub25iYWxsISEnLCAnRW5kIG5vdycsIHtcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uLFxuICAgICAgdmVydGljYWxQb3NpdGlvbjogdGhpcy52ZXJ0aWNhbFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiSG9yaXpvbnRhbCBwb3NpdGlvblwiIFsodmFsdWUpXT1cImhvcml6b250YWxQb3NpdGlvblwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic3RhcnRcIj5TdGFydDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPkNlbnRlcjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVuZFwiPkVuZDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImxlZnRcIj5MZWZ0PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmlnaHRcIj5SaWdodDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJWZXJ0aWNhbCBwb3NpdGlvblwiIFsodmFsdWUpXT1cInZlcnRpY2FsUG9zaXRpb25cIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRvcFwiPlRvcDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImJvdHRvbVwiPkJvdHRvbTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuU25hY2tCYXIoKVwiIGFyaWEtbGFiZWw9XCJTaG93IGFuIGV4YW1wbGUgc25hY2stYmFyXCI+XG4gIFBvb2wgcGFydHkhXG48L2J1dHRvbj5cbiJdfQ==