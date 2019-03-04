import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
/**
 * @title Basic snack-bar
 */
var SnackBarOverviewExample = /** @class */ (function () {
    function SnackBarOverviewExample(snackBar) {
        this.snackBar = snackBar;
    }
    SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'snack-bar-overview-example',
            template: "<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], SnackBarOverviewExample);
    return SnackBarOverviewExample;
}());
export { SnackBarOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUU5Qzs7R0FFRztBQU1IO0lBQ0UsaUNBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFBRyxDQUFDO0lBRTdDLDhDQUFZLEdBQVosVUFBYSxPQUFlLEVBQUUsTUFBYztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ2xDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVBVLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLDJVQUE4Qzs7U0FFL0MsQ0FBQztpREFFOEIsV0FBVztPQUQ5Qix1QkFBdUIsQ0FRbkM7SUFBRCw4QkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc25hY2stYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==