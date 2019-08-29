import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
/**
 * @title Basic snack-bar
 */
var SnackBarOverviewExample = /** @class */ (function () {
    function SnackBarOverviewExample(_snackBar) {
        this._snackBar = _snackBar;
    }
    SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-overview-example',
                    template: "<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    SnackBarOverviewExample.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    return SnackBarOverviewExample;
}());
export { SnackBarOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1vdmVydmlldy9zbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RDs7R0FFRztBQUNIO0lBTUUsaUNBQW9CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFBRyxDQUFDO0lBRTlDLDhDQUFZLEdBQVosVUFBYSxPQUFlLEVBQUUsTUFBYztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ25DLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDJVQUE4Qzs7aUJBRS9DOzs7O2dCQVRPLFdBQVc7O0lBa0JuQiw4QkFBQztDQUFBLEFBYkQsSUFhQztTQVJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHNuYWNrLWJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJPdmVydmlld0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlblNuYWNrQmFyKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwge1xuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==