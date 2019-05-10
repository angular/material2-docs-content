import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @title Injecting data when opening a dialog
 */
var DialogDataExample = /** @class */ (function () {
    function DialogDataExample(dialog) {
        this.dialog = dialog;
    }
    DialogDataExample.prototype.openDialog = function () {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    };
    DialogDataExample = tslib_1.__decorate([
        Component({
            selector: 'dialog-data-example',
            template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog])
    ], DialogDataExample);
    return DialogDataExample;
}());
export { DialogDataExample };
var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = tslib_1.__decorate([
        Component({
            selector: 'dialog-data-example-dialog',
            template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n"
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());
export { DialogDataExampleDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBTXBFOztHQUVHO0FBTUg7SUFDRSwyQkFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFeEMsc0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ3hDLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFUVSxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiw4RUFBdUM7O1NBRXhDLENBQUM7aURBRTJCLFNBQVM7T0FEekIsaUJBQWlCLENBVTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxpQkFBaUI7QUFnQjlCO0lBQ0UsaUNBQTRDLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRHJELHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLG9aQUE4QztTQUMvQyxDQUFDO1FBRWEsbUJBQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBOztPQUR6Qix1QkFBdUIsQ0FFbkM7SUFBRCw4QkFBQztDQUFBLEFBRkQsSUFFQztTQUZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1BVF9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYW5pbWFsOiAncGFuZGEnIHwgJ3VuaWNvcm4nIHwgJ2xpb24nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBJbmplY3RpbmcgZGF0YSB3aGVuIG9wZW5pbmcgYSBkaWFsb2dcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWRhdGEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1kYXRhLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RhdGFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dEYXRhRXhhbXBsZURpYWxvZywge1xuICAgICAgZGF0YToge1xuICAgICAgICBhbmltYWw6ICdwYW5kYSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7fVxufVxuIl19