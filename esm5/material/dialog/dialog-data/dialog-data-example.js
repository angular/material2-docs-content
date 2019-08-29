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
    DialogDataExample.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-data-example',
                    template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    /** @nocollapse */
    DialogDataExample.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return DialogDataExample;
}());
export { DialogDataExample };
var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-data-example-dialog',
                    template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    DialogDataExampleDialog.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return DialogDataExampleDialog;
}());
export { DialogDataExampleDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWRhdGEvZGlhbG9nLWRhdGEtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBTXBFOztHQUVHO0FBQ0g7SUFNRSwyQkFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFeEMsc0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ3hDLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw4RUFBdUM7O2lCQUV4Qzs7OztnQkFiTyxTQUFTOztJQXdCakIsd0JBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSxpQkFBaUI7QUFZOUI7SUFLRSxpQ0FBNEMsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7O2dCQUxqRSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsb1pBQThDO2lCQUMvQzs7OztnREFFYyxNQUFNLFNBQUMsZUFBZTs7SUFDckMsOEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FGWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogJ3BhbmRhJyB8ICd1bmljb3JuJyB8ICdsaW9uJztcbn1cblxuLyoqXG4gKiBAdGl0bGUgSW5qZWN0aW5nIGRhdGEgd2hlbiBvcGVuaW5nIGEgZGlhbG9nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1kYXRhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctZGF0YS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYW5pbWFsOiAncGFuZGEnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cbn1cbiJdfQ==