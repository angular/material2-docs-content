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
function DatepickerEventsExample_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const e_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(e_r2);
} }
/**
 * \@title Datepicker input and change events
 */
let DatepickerEventsExample = /** @class */ (() => {
    /**
     * \@title Datepicker input and change events
     */
    class DatepickerEventsExample {
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
    /** @nocollapse */ DatepickerEventsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 9, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Input & change events");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 0);
            i0.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_3_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function DatepickerEventsExample_Template_input_dateChange_3_listener($event) { return ctx.addEvent("change", $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(5, "mat-datepicker", null, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵtemplate(8, DatepickerEventsExample_div_8_Template, 2, 1, "div", 4);
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
    return DatepickerEventsExample;
})();
export { DatepickerEventsExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ1N0QywyQkFBOEI7SUFBQSxZQUFLO0lBQUEsaUJBQU07OztJQUFYLGVBQUs7SUFBTCwwQkFBSzs7Ozs7QURMckM7Ozs7SUFBQSxNQUthLHVCQUF1QjtRQUxwQztZQU1FLFdBQU0sR0FBYSxFQUFFLENBQUM7U0FLdkI7Ozs7OztRQUhDLFFBQVEsQ0FBQyxJQUFZLEVBQUUsS0FBb0M7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7O3FIQUNZLHVCQUF1QjttRkFBdkIsdUJBQXVCO1lDVHBDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxxQ0FBcUI7WUFBQSxpQkFBWTtZQUM1QyxnQ0FFQTtZQURPLGlIQUFhLGFBQVMsT0FBTyxTQUFTLElBQUMsc0dBQWUsYUFBUyxRQUFRLFNBQVMsSUFBekM7WUFEOUMsaUJBRUE7WUFBQSwyQ0FBd0U7WUFDeEUsMENBQXlDO1lBQzNDLGlCQUFpQjtZQUVqQiw4QkFDRTtZQUFBLHdFQUE4QjtZQUNoQyxpQkFBTTs7O1lBUlksZUFBd0I7WUFBeEIsbUNBQXdCO1lBRVAsZUFBYztZQUFkLHlCQUFjO1lBSzFDLGVBQXdCO1lBQXhCLG9DQUF3Qjs7a0NEVC9CO0tBZUM7U0FOWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7Ozs7SUFFQyx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIGlucHV0IGFuZCBjaGFuZ2UgZXZlbnRzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckV2ZW50c0V4YW1wbGUge1xuICBldmVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgYWRkRXZlbnQodHlwZTogc3RyaW5nLCBldmVudDogTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQ8RGF0ZT4pIHtcbiAgICB0aGlzLmV2ZW50cy5wdXNoKGAke3R5cGV9OiAke2V2ZW50LnZhbHVlfWApO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+SW5wdXQgJiBjaGFuZ2UgZXZlbnRzPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxuICAgICAgICAgKGRhdGVJbnB1dCk9XCJhZGRFdmVudCgnaW5wdXQnLCAkZXZlbnQpXCIgKGRhdGVDaGFuZ2UpPVwiYWRkRXZlbnQoJ2NoYW5nZScsICRldmVudClcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWV2ZW50c1wiPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBlIG9mIGV2ZW50c1wiPnt7ZX19PC9kaXY+XG48L2Rpdj5cbiJdfQ==