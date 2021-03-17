import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/common";
function DatepickerEventsExample_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const e_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(e_r2);
} }
/** @title Datepicker input and change events */
export class DatepickerEventsExample {
    constructor() {
        this.events = [];
    }
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
}
DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
DatepickerEventsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 9, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Input & change events");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 1);
        i0.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_3_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function DatepickerEventsExample_Template_input_dateChange_3_listener($event) { return ctx.addEvent("change", $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(5, "mat-datepicker", null, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 4);
        i0.ɵɵtemplate(8, DatepickerEventsExample_div_8_Template, 2, 1, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matDatepicker", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r0);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.events);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker, i4.NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerEventsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNTdEMsMkJBQThCO0lBQUEsWUFBSztJQUFBLGlCQUFNOzs7SUFBWCxlQUFLO0lBQUwsMEJBQUs7O0FETnJDLGdEQUFnRDtBQU1oRCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsV0FBTSxHQUFhLEVBQUUsQ0FBQztLQUt2QjtJQUhDLFFBQVEsQ0FBQyxJQUFZLEVBQUUsS0FBb0M7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OEZBTFUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNUcEMseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEscUNBQXFCO1FBQUEsaUJBQVk7UUFDNUMsZ0NBQ3lGO1FBQWxGLGlIQUFhLGFBQVMsT0FBTyxTQUFTLElBQUMsc0dBQWUsYUFBUyxRQUFRLFNBQVMsSUFBekM7UUFEOUMsaUJBQ3lGO1FBQ3pGLDJDQUF3RTtRQUN4RSwwQ0FBeUM7UUFDM0MsaUJBQWlCO1FBRWpCLDhCQUE0QjtRQUMxQix3RUFBeUM7UUFDM0MsaUJBQU07OztRQVJZLGVBQXdCO1FBQXhCLG1DQUF3QjtRQUVQLGVBQWM7UUFBZCx5QkFBYztRQUs1QixlQUFTO1FBQVQsb0NBQVM7O3VGREFqQix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VySW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBpbnB1dCBhbmQgY2hhbmdlIGV2ZW50cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZXZlbnRzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJFdmVudHNFeGFtcGxlIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGFkZEV2ZW50KHR5cGU6IHN0cmluZywgZXZlbnQ6IE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50PERhdGU+KSB7XG4gICAgdGhpcy5ldmVudHMucHVzaChgJHt0eXBlfTogJHtldmVudC52YWx1ZX1gKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+SW5wdXQgJiBjaGFuZ2UgZXZlbnRzPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxuICAgICAgICAgKGRhdGVJbnB1dCk9XCJhZGRFdmVudCgnaW5wdXQnLCAkZXZlbnQpXCIgKGRhdGVDaGFuZ2UpPVwiYWRkRXZlbnQoJ2NoYW5nZScsICRldmVudClcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWV2ZW50c1wiPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBlIG9mIGV2ZW50c1wiPnt7ZX19PC9kaXY+XG48L2Rpdj5cbiJdfQ==