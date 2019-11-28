/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-events/datepicker-events-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/common";
function DatepickerEventsExample_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const e_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(e_r12);
} }
/**
 * \@title Datepicker input and change events
 */
export class DatepickerEventsExample {
    constructor() {
        this.events = [];
    }
    /**
     * @param {?} type
     * @param {?} event
     * @return {?}
     */
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
}
DatepickerEventsExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            },] },
];
/** @nocollapse */ DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
/** @nocollapse */ DatepickerEventsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 7, vars: 3, consts: [["matInput", "", "placeholder", "Input & change events", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "input", 0);
        i0.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_1_listener($event) { return ctx.addEvent("input", $event); });
        i0.ɵɵlistener("dateChange", function DatepickerEventsExample_Template_input_dateChange_1_listener($event) { return ctx.addEvent("change", $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
        i0.ɵɵelement(3, "mat-datepicker", null, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtemplate(6, DatepickerEventsExample_div_6_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r10 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matDatepicker", _r10);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r10);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.events);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker, i4.NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerEventsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerEventsExample.prototype.events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ1F0QywyQkFBOEI7SUFBQSxZQUFLO0lBQUEsaUJBQU07OztJQUFYLGVBQUs7SUFBTCwyQkFBSzs7Ozs7QURDckMsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLFdBQU0sR0FBYSxFQUFFLENBQUM7S0FLdkI7Ozs7OztJQUhDLFFBQVEsQ0FBQyxJQUFZLEVBQUUsS0FBb0M7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs4RkFDWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1RwQyxzQ0FDRTtRQUFBLGdDQUVBO1FBRE8saUhBQWEsYUFBUyxPQUFPLFNBQVMsSUFBQztRQUFDLG1IQUFjLGFBQVMsUUFBUSxTQUFTLElBQUM7UUFEeEYsaUJBRUE7UUFBQSwyQ0FBd0U7UUFDeEUsMENBQXlDO1FBQzNDLGlCQUFpQjtRQUVqQiw4QkFDRTtRQUFBLHdFQUE4QjtRQUNoQyxpQkFBTTs7O1FBUlksZUFBd0I7UUFBeEIsb0NBQXdCO1FBRVAsZUFBYztRQUFkLDBCQUFjO1FBSzFDLGVBQXdCO1FBQXhCLG9DQUF3Qjs7a0REQ2xCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7Ozs7SUFFQyx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIGlucHV0IGFuZCBjaGFuZ2UgZXZlbnRzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckV2ZW50c0V4YW1wbGUge1xuICBldmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgYWRkRXZlbnQodHlwZTogc3RyaW5nLCBldmVudDogTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pIHtcbiAgICB0aGlzLmV2ZW50cy5wdXNoKGAke3R5cGV9OiAke2V2ZW50LnZhbHVlfWApO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBwbGFjZWhvbGRlcj1cIklucHV0ICYgY2hhbmdlIGV2ZW50c1wiXG4gICAgICAgICAoZGF0ZUlucHV0KT1cImFkZEV2ZW50KCdpbnB1dCcsICRldmVudClcIiAoZGF0ZUNoYW5nZSk9XCJhZGRFdmVudCgnY2hhbmdlJywgJGV2ZW50KVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtZXZlbnRzXCI+XG4gIDxkaXYgKm5nRm9yPVwibGV0IGUgb2YgZXZlbnRzXCI+e3tlfX08L2Rpdj5cbjwvZGl2PlxuIl19