/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.animal;
    /** @type {?} */
    DialogData.prototype.name;
}
/**
 * \@title Dialog Overview
 */
export class DialogOverviewExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The dialog was closed');
            this.animal = result;
        }));
    }
}
DialogOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example',
                template: "<ol>\n  <li>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
DialogOverviewExample.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    DialogOverviewExample.prototype.animal;
    /** @type {?} */
    DialogOverviewExample.prototype.name;
    /** @type {?} */
    DialogOverviewExample.prototype.dialog;
}
export class DialogOverviewExampleDialog {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example-dialog',
                template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n"
            }] }
];
/** @nocollapse */
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.dialogRef;
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVsRixnQ0FHQzs7O0lBRkMsNEJBQWU7O0lBQ2YsMEJBQWE7Ozs7O0FBV2YsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUtoQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQzs7OztJQUV4QyxVQUFVOztjQUNGLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUM5RCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1NBQzdDLENBQUM7UUFFRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMscVVBQTJDOzthQUU1Qzs7OztZQWRPLFNBQVM7Ozs7SUFpQmYsdUNBQWU7O0lBQ2YscUNBQWE7O0lBRUQsdUNBQXdCOztBQW9CdEMsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFFdEMsWUFDUyxTQUFvRCxFQUMzQixJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUEyQztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs7OztJQUV0RCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsb1pBQWtEO2FBQ25EOzs7O1lBdkNrQixZQUFZOzRDQTRDMUIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsZ0RBQTJEOztJQUMzRCwyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYW5pbWFsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVydmlld0V4YW1wbGUge1xuXG4gIGFuaW1hbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YToge25hbWU6IHRoaXMubmFtZSwgYW5pbWFsOiB0aGlzLmFuaW1hbH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgICAgdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuIl19