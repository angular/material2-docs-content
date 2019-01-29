import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * @title Dialog Overview
 */
var DialogOverviewExample = /** @class */ (function () {
    function DialogOverviewExample(dialog) {
        this.dialog = dialog;
    }
    DialogOverviewExample.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'dialog-overview-example',
            template: "<ol>\n  <li>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog])
    ], DialogOverviewExample);
    return DialogOverviewExample;
}());
export { DialogOverviewExample };
var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = tslib_1.__decorate([
        Component({
            selector: 'dialog-overview-example-dialog',
            template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n"
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());
export { DialogOverviewExampleDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQU8zRTs7R0FFRztBQU1IO0lBS0UsK0JBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLDBDQUFVLEdBQVY7UUFBQSxpQkFVQztRQVRDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQzlELEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpCVSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxxVUFBMkM7O1NBRTVDLENBQUM7aURBTTJCLFNBQVM7T0FMekIscUJBQXFCLENBbUJqQztJQUFELDRCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlkscUJBQXFCO0FBeUJsQztJQUVFLHFDQUNTLFNBQW9ELEVBQzNCLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQTJDO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXRELCtDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFSVSwyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxvWkFBa0Q7U0FDbkQsQ0FBQztRQUtHLG1CQUFBLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtpREFETixZQUFZO09BSHJCLDJCQUEyQixDQVV2QztJQUFELGtDQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYW5pbWFsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVydmlld0V4YW1wbGUge1xuXG4gIGFuaW1hbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YToge25hbWU6IHRoaXMubmFtZSwgYW5pbWFsOiB0aGlzLmFuaW1hbH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgICAgdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuIl19