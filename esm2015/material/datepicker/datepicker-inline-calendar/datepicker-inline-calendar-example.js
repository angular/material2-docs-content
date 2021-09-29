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
        args: [{ selector: 'datepicker-inline-calendar-example', template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar (selectedChange)=\"selected = $event\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEMsZ0RBQWdEO0FBTWhELE1BQU0sT0FBTywrQkFBK0I7OzhHQUEvQiwrQkFBK0I7a0ZBQS9CLCtCQUErQjtRQ1I1QyxtQ0FBNEM7UUFDMUMsdUNBQW1EO1FBQXJDLG1LQUFvQztRQUFDLGlCQUFlO1FBQ3BFLGlCQUFXO1FBQ1gseUJBQUc7UUFBQSxZQUEyQjtRQUFBLGlCQUFJOztRQUEvQixlQUEyQjtRQUEzQiwwREFBMkI7O3VGREtqQiwrQkFBK0I7Y0FMM0MsU0FBUzsyQkFDRSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBpbmxpbmUgY2FsZW5kYXIgZXhhbXBsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItaW5saW5lLWNhbGVuZGFyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJJbmxpbmVDYWxlbmRhckV4YW1wbGUge1xuICBzZWxlY3RlZDogRGF0ZSB8IG51bGw7XG59XG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJkZW1vLWlubGluZS1jYWxlbmRhci1jYXJkXCI+XG4gIDxtYXQtY2FsZW5kYXIgKHNlbGVjdGVkQ2hhbmdlKT1cInNlbGVjdGVkID0gJGV2ZW50XCI+PC9tYXQtY2FsZW5kYXI+XG48L21hdC1jYXJkPlxuPHA+U2VsZWN0ZWQgZGF0ZToge3tzZWxlY3RlZH19PC9wPlxuIl19