import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Datepicker with custom icon */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-custom-icon-example',
            template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], DatepickerCustomIconExample);
    return DatepickerCustomIconExample;
}());
export { DatepickerCustomIconExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2RhdGVwaWNrZXItY3VzdG9tLWljb24vZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLHlDQUF5QztBQU16QztJQUFBO0lBQTBDLENBQUM7SUFBOUIsMkJBQTJCO1FBTHZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsZ1dBQWtEOztTQUVuRCxDQUFDO09BQ1csMkJBQTJCLENBQUc7SUFBRCxrQ0FBQztDQUFBLEFBQTNDLElBQTJDO1NBQTlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGljb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY3VzdG9tLWljb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1jdXN0b20taWNvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ3VzdG9tSWNvbkV4YW1wbGUge31cbiJdfQ==