import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatSnackBar, } from '@angular/material';
/**
 * @title Snack-bar with configurable position
 */
var SnackBarPositionExample = /** @class */ (function () {
    function SnackBarPositionExample(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    SnackBarPositionExample.prototype.openSnackBar = function () {
        this.snackBar.open('Canonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    SnackBarPositionExample = tslib_1.__decorate([
        Component({
            selector: 'snack-bar-position-example',
            template: "<mat-form-field>\n  <mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], SnackBarPositionExample);
    return SnackBarPositionExample;
}());
export { SnackBarPositionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxXQUFXLEdBR1osTUFBTSxtQkFBbUIsQ0FBQztBQUUzQjs7R0FFRztBQU1IO0lBS0UsaUNBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFIekMsdUJBQWtCLEdBQWtDLE9BQU8sQ0FBQztRQUM1RCxxQkFBZ0IsR0FBZ0MsUUFBUSxDQUFDO0lBRWIsQ0FBQztJQUU3Qyw4Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRTtZQUMzQyxRQUFRLEVBQUUsR0FBRztZQUNiLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYlUsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMseXZCQUE4Qzs7U0FFL0MsQ0FBQztpREFNOEIsV0FBVztPQUw5Qix1QkFBdUIsQ0FjbkM7SUFBRCw4QkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdFNuYWNrQmFyLFxuICBNYXRTbmFja0Jhckhvcml6b250YWxQb3NpdGlvbixcbiAgTWF0U25hY2tCYXJWZXJ0aWNhbFBvc2l0aW9uLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbi8qKlxuICogQHRpdGxlIFNuYWNrLWJhciB3aXRoIGNvbmZpZ3VyYWJsZSBwb3NpdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUge1xuXG4gIGhvcml6b250YWxQb3NpdGlvbjogTWF0U25hY2tCYXJIb3Jpem9udGFsUG9zaXRpb24gPSAnc3RhcnQnO1xuICB2ZXJ0aWNhbFBvc2l0aW9uOiBNYXRTbmFja0JhclZlcnRpY2FsUG9zaXRpb24gPSAnYm90dG9tJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKCdDYW5vbmJhbGwhIScsICdFbmQgbm93Jywge1xuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogdGhpcy5ob3Jpem9udGFsUG9zaXRpb24sXG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiB0aGlzLnZlcnRpY2FsUG9zaXRpb24sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==