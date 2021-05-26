import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/datepicker";
/** @title Datepicker inline calendar example */
export class DatepickerInlineCalendarExample {
}
DatepickerInlineCalendarExample.ɵfac = function DatepickerInlineCalendarExample_Factory(t) { return new (t || DatepickerInlineCalendarExample)(); };
DatepickerInlineCalendarExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerInlineCalendarExample, selectors: [["datepicker-inline-calendar-example"]], decls: 4, vars: 1, consts: [[1, "demo-inline-calendar-card"], [3, "selectedChange"]], template: function DatepickerInlineCalendarExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-calendar", 1);
        i0.ɵɵlistener("selectedChange", function DatepickerInlineCalendarExample_Template_mat_calendar_selectedChange_1_listener($event) { return ctx.selected = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "p");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Selected date: ", ctx.selected, "");
    } }, directives: [i1.MatCard, i2.MatCalendar], styles: [".demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerInlineCalendarExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-inline-calendar-example',
                templateUrl: 'datepicker-inline-calendar-example.html',
                styleUrls: ['datepicker-inline-calendar-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEMsZ0RBQWdEO0FBTWhELE1BQU0sT0FBTywrQkFBK0I7OzhHQUEvQiwrQkFBK0I7a0ZBQS9CLCtCQUErQjtRQ1I1QyxtQ0FBNEM7UUFDMUMsdUNBQW1EO1FBQXJDLG1LQUFvQztRQUFDLGlCQUFlO1FBQ3BFLGlCQUFXO1FBQ1gseUJBQUc7UUFBQSxZQUEyQjtRQUFBLGlCQUFJOztRQUEvQixlQUEyQjtRQUEzQiwwREFBMkI7O3VGREtqQiwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgaW5saW5lIGNhbGVuZGFyIGV4YW1wbGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItaW5saW5lLWNhbGVuZGFyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItaW5saW5lLWNhbGVuZGFyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWlubGluZS1jYWxlbmRhci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VySW5saW5lQ2FsZW5kYXJFeGFtcGxlIHtcbiAgc2VsZWN0ZWQ6IERhdGUgfCBudWxsO1xufVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwiZGVtby1pbmxpbmUtY2FsZW5kYXItY2FyZFwiPlxuICA8bWF0LWNhbGVuZGFyIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RlZCA9ICRldmVudFwiPjwvbWF0LWNhbGVuZGFyPlxuPC9tYXQtY2FyZD5cbjxwPlNlbGVjdGVkIGRhdGU6IHt7c2VsZWN0ZWR9fTwvcD5cbiJdfQ==