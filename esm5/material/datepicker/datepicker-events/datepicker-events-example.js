import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/common";
var _c0 = ["picker", ""];
function DatepickerEventsExample_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var e_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(e_r12);
} }
/** @title Datepicker input and change events */
var DatepickerEventsExample = /** @class */ (function () {
    function DatepickerEventsExample() {
        this.events = [];
    }
    DatepickerEventsExample.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerEventsExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-events-example',
                    templateUrl: 'datepicker-events-example.html',
                    styleUrls: ['datepicker-events-example.css'],
                },] },
    ];
    DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
    DatepickerEventsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 7, vars: 3, consts: [["matInput", "", "placeholder", "Input & change events", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "input", 0);
            i0.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_1_listener($event) { return ctx.addEvent("input", $event); });
            i0.ɵɵlistener("dateChange", function DatepickerEventsExample_Template_input_dateChange_1_listener($event) { return ctx.addEvent("change", $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(3, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 2);
            i0.ɵɵtemplate(6, DatepickerEventsExample_div_6_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r10 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r10);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r10);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.events);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker, i4.NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
    return DatepickerEventsExample;
}());
export { DatepickerEventsExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerEventsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDUXRDLDJCQUE4QjtJQUFBLFlBQUs7SUFBQSxpQkFBTTs7O0lBQVgsZUFBSztJQUFMLDJCQUFLOztBRExyQyxnREFBZ0Q7QUFDaEQ7SUFBQTtRQU1FLFdBQU0sR0FBYSxFQUFFLENBQUM7S0FLdkI7SUFIQywwQ0FBUSxHQUFSLFVBQVMsSUFBWSxFQUFFLEtBQW9DO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFJLElBQUksVUFBSyxLQUFLLENBQUMsS0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7a0dBQ1ksdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNUcEMsc0NBQ0U7WUFBQSxnQ0FFQTtZQURPLGlIQUFhLGFBQVMsT0FBTyxTQUFTLElBQUM7WUFBQyxtSEFBYyxhQUFTLFFBQVEsU0FBUyxJQUFDO1lBRHhGLGlCQUVBO1lBQUEsMkNBQXdFO1lBQ3hFLDRDQUF5QztZQUMzQyxpQkFBaUI7WUFFakIsOEJBQ0U7WUFBQSx3RUFBOEI7WUFDaEMsaUJBQU07OztZQVJZLGVBQXdCO1lBQXhCLG9DQUF3QjtZQUVQLGVBQWM7WUFBZCwwQkFBYztZQUsxQyxlQUF3QjtZQUF4QixvQ0FBd0I7O2tDRFIvQjtDQWVDLEFBWEQsSUFXQztTQU5ZLHVCQUF1QjttQ0FBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlcklucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgaW5wdXQgYW5kIGNoYW5nZSBldmVudHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZXZlbnRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZXZlbnRzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRXZlbnRzRXhhbXBsZSB7XG4gIGV2ZW50czogc3RyaW5nW10gPSBbXTtcblxuICBhZGRFdmVudCh0eXBlOiBzdHJpbmcsIGV2ZW50OiBNYXREYXRlcGlja2VySW5wdXRFdmVudDxEYXRlPikge1xuICAgIHRoaXMuZXZlbnRzLnB1c2goYCR7dHlwZX06ICR7ZXZlbnQudmFsdWV9YCk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIHBsYWNlaG9sZGVyPVwiSW5wdXQgJiBjaGFuZ2UgZXZlbnRzXCJcbiAgICAgICAgIChkYXRlSW5wdXQpPVwiYWRkRXZlbnQoJ2lucHV0JywgJGV2ZW50KVwiIChkYXRlQ2hhbmdlKT1cImFkZEV2ZW50KCdjaGFuZ2UnLCAkZXZlbnQpXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1ldmVudHNcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgZSBvZiBldmVudHNcIj57e2V9fTwvZGl2PlxuPC9kaXY+XG4iXX0=