import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
/**
 * @title Dialog elements
 */
var DialogElementsExample = /** @class */ (function () {
    function DialogElementsExample(dialog) {
        this.dialog = dialog;
    }
    DialogElementsExample.prototype.openDialog = function () {
        this.dialog.open(DialogElementsExampleDialog);
    };
    DialogElementsExample = tslib_1.__decorate([
        Component({
            selector: 'dialog-elements-example',
            template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog])
    ], DialogElementsExample);
    return DialogElementsExample;
}());
export { DialogElementsExample };
var DialogElementsExampleDialog = /** @class */ (function () {
    function DialogElementsExampleDialog() {
    }
    DialogElementsExampleDialog = tslib_1.__decorate([
        Component({
            selector: 'dialog-elements-example-dialog',
            template: "<h1 mat-dialog-title>Dialog with elements</h1>\n<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n"
        })
    ], DialogElementsExampleDialog);
    return DialogElementsExampleDialog;
}());
export { DialogElementsExampleDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVuRDs7R0FFRztBQU1IO0lBQ0UsK0JBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFMVSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxnRkFBMkM7O1NBRTVDLENBQUM7aURBRTJCLFNBQVM7T0FEekIscUJBQXFCLENBTWpDO0lBQUQsNEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxxQkFBcUI7QUFhbEM7SUFBQTtJQUEwQyxDQUFDO0lBQTlCLDJCQUEyQjtRQUp2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLHlQQUFrRDtTQUNuRCxDQUFDO09BQ1csMkJBQTJCLENBQUc7SUFBRCxrQ0FBQztDQUFBLEFBQTNDLElBQTJDO1NBQTlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgZWxlbWVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nKTtcbiAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dFbGVtZW50c0V4YW1wbGVEaWFsb2cge31cbiJdfQ==