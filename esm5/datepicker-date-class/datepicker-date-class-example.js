import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
/** @title Datepicker with custom date classes */
var DatepickerDateClassExample = /** @class */ (function () {
    function DatepickerDateClassExample() {
        this.dateClass = function (d) {
            var date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
        };
    }
    DatepickerDateClassExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-date-class-example',
            template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n",
            encapsulation: ViewEncapsulation.None,
            styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"]
        })
    ], DatepickerDateClassExample);
    return DatepickerDateClassExample;
}());
export { DatepickerDateClassExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZGF0ZXBpY2tlci1kYXRlLWNsYXNzL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNELGlEQUFpRDtBQU9qRDtJQU5BO1FBT0UsY0FBUyxHQUFHLFVBQUMsQ0FBTztZQUNsQixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekIsZ0RBQWdEO1lBQ2hELE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMvRSxDQUFDLENBQUE7SUFDSCxDQUFDO0lBUFksMEJBQTBCO1FBTnRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsZ1RBQWlEO1lBRWpELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csMEJBQTBCLENBT3RDO0lBQUQsaUNBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBjdXN0b20gZGF0ZSBjbGFzc2VzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRhdGVDbGFzc0V4YW1wbGUge1xuICBkYXRlQ2xhc3MgPSAoZDogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBkLmdldERhdGUoKTtcblxuICAgIC8vIEhpZ2hsaWdodCB0aGUgMXN0IGFuZCAyMHRoIGRheSBvZiBlYWNoIG1vbnRoLlxuICAgIHJldHVybiAoZGF0ZSA9PT0gMSB8fCBkYXRlID09PSAyMCkgPyAnZXhhbXBsZS1jdXN0b20tZGF0ZS1jbGFzcycgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==