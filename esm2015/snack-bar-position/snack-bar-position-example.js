/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar, } from '@angular/material';
/**
 * \@title Snack-bar with configurable position
 */
export class SnackBarPositionExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.open('Canonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
}
SnackBarPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-position-example',
                template: "<mat-form-field>\n  <mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
/** @nocollapse */
SnackBarPositionExample.ctorParameters = () => [
    { type: MatSnackBar }
];
if (false) {
    /** @type {?} */
    SnackBarPositionExample.prototype.horizontalPosition;
    /** @type {?} */
    SnackBarPositionExample.prototype.verticalPosition;
    /**
     * @type {?}
     * @private
     */
    SnackBarPositionExample.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxXQUFXLEdBR1osTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVUzQixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBS2xDLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFIekMsdUJBQWtCLEdBQWtDLE9BQU8sQ0FBQztRQUM1RCxxQkFBZ0IsR0FBZ0MsUUFBUSxDQUFDO0lBRWIsQ0FBQzs7OztJQUU3QyxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRTtZQUMzQyxRQUFRLEVBQUUsR0FBRztZQUNiLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLHl2QkFBOEM7O2FBRS9DOzs7O1lBWkMsV0FBVzs7OztJQWVYLHFEQUE0RDs7SUFDNUQsbURBQXlEOzs7OztJQUU3QywyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRTbmFja0JhcixcbiAgTWF0U25hY2tCYXJIb3Jpem9udGFsUG9zaXRpb24sXG4gIE1hdFNuYWNrQmFyVmVydGljYWxQb3NpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vKipcbiAqIEB0aXRsZSBTbmFjay1iYXIgd2l0aCBjb25maWd1cmFibGUgcG9zaXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyUG9zaXRpb25FeGFtcGxlIHtcblxuICBob3Jpem9udGFsUG9zaXRpb246IE1hdFNuYWNrQmFySG9yaXpvbnRhbFBvc2l0aW9uID0gJ3N0YXJ0JztcbiAgdmVydGljYWxQb3NpdGlvbjogTWF0U25hY2tCYXJWZXJ0aWNhbFBvc2l0aW9uID0gJ2JvdHRvbSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlblNuYWNrQmFyKCkge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbignQ2Fub25iYWxsISEnLCAnRW5kIG5vdycsIHtcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uLFxuICAgICAgdmVydGljYWxQb3NpdGlvbjogdGhpcy52ZXJ0aWNhbFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG59XG4iXX0=