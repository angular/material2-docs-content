/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-value/datepicker-value-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
/**
 * \@title Datepicker selected value
 */
export class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
}
DatepickerValueExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            },] },
];
/** @nocollapse */ DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
/** @nocollapse */ DatepickerValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 15, vars: 9, consts: [["matInput", "", "placeholder", "Angular forms", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "Angular forms (w/ deserialization)", 3, "matDatepicker", "formControl"], ["picker2", ""], ["matInput", "", "placeholder", "Value binding", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelement(1, "input", 0);
        i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
        i0.ɵɵelement(3, "mat-datepicker", null, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field");
        i0.ɵɵelement(6, "input", 3);
        i0.ɵɵelement(7, "mat-datepicker-toggle", 1);
        i0.ɵɵelement(8, "mat-datepicker", null, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-form-field");
        i0.ɵɵelement(11, "input", 5);
        i0.ɵɵelement(12, "mat-datepicker-toggle", 1);
        i0.ɵɵelement(13, "mat-datepicker", null, 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r21 = i0.ɵɵreference(4);
        const _r22 = i0.ɵɵreference(9);
        const _r23 = i0.ɵɵreference(14);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matDatepicker", _r21)("formControl", ctx.date);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r21);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matDatepicker", _r22)("formControl", ctx.serializedDate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r22);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matDatepicker", _r23)("value", ctx.date.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r23);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerValueExample.prototype.date;
    /** @type {?} */
    DatepickerValueExample.prototype.serializedDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFRM0MsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzlEOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7OzRGQUNZLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDVG5DLHNDQUNFO1FBQUEsMkJBQ0E7UUFBQSwyQ0FBeUU7UUFDekUsMENBQTBDO1FBQzVDLGlCQUFpQjtRQUVqQixzQ0FDRTtRQUFBLDJCQUVBO1FBQUEsMkNBQXlFO1FBQ3pFLDBDQUEwQztRQUM1QyxpQkFBaUI7UUFFakIsdUNBQ0U7UUFBQSw0QkFDQTtRQUFBLDRDQUF5RTtRQUN6RSwyQ0FBMEM7UUFDNUMsaUJBQWlCOzs7OztRQWhCQyxlQUF5QjtRQUF6QixvQ0FBeUIseUJBQUE7UUFDUixlQUFlO1FBQWYsMEJBQWU7UUFLaEMsZUFBeUI7UUFBekIsb0NBQXlCLG1DQUFBO1FBRVIsZUFBZTtRQUFmLDBCQUFlO1FBS2hDLGVBQXlCO1FBQXpCLG9DQUF5Qix5QkFBQTtRQUNSLGVBQWU7UUFBZiwwQkFBZTs7a0RETnJDLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7SUFFQyxzQ0FBbUM7O0lBQ25DLGdEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHNlbGVjdGVkIHZhbHVlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclZhbHVlRXhhbXBsZSB7XG4gIGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoKSk7XG4gIHNlcmlhbGl6ZWREYXRlID0gbmV3IEZvcm1Db250cm9sKChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjFcIiBwbGFjZWhvbGRlcj1cIkFuZ3VsYXIgZm9ybXNcIiBbZm9ybUNvbnRyb2xdPVwiZGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjFcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIxPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIyXCIgcGxhY2Vob2xkZXI9XCJBbmd1bGFyIGZvcm1zICh3LyBkZXNlcmlhbGl6YXRpb24pXCJcbiAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZXJpYWxpemVkRGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIzXCIgcGxhY2Vob2xkZXI9XCJWYWx1ZSBiaW5kaW5nXCIgW3ZhbHVlXT1cImRhdGUudmFsdWVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIzXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMz48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==