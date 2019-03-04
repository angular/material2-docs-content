import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Datepicker open method */
var DatepickerApiExample = /** @class */ (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-api-example',
            template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        })
    ], DatepickerApiExample);
    return DatepickerApiExample;
}());
export { DatepickerApiExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hcGktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9kYXRlcGlja2VyLWFwaS9kYXRlcGlja2VyLWFwaS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLG9DQUFvQztBQU1wQztJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsMlFBQTBDOztTQUUzQyxDQUFDO09BQ1csb0JBQW9CLENBQUc7SUFBRCwyQkFBQztDQUFBLEFBQXBDLElBQW9DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIG9wZW4gbWV0aG9kICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWFwaS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWFwaS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1hcGktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckFwaUV4YW1wbGUge31cbiJdfQ==