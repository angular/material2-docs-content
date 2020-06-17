import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
/** @title Datepicker selected value */
let DatepickerValueExample = /** @class */ (() => {
    class DatepickerValueExample {
        constructor() {
            this.date = new FormControl(new Date());
            this.serializedDate = new FormControl((new Date()).toISOString());
        }
    }
    DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
    DatepickerValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 21, vars: 9, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["picker2", ""], ["matInput", "", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Angular forms");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(5, "mat-datepicker", null, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field", 0);
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Angular forms (w/ deserialization)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 1);
            i0.ɵɵelement(11, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(12, "mat-datepicker", null, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field", 0);
            i0.ɵɵelementStart(15, "mat-label");
            i0.ɵɵtext(16, "Value binding");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 5);
            i0.ɵɵelement(18, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(19, "mat-datepicker", null, 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(6);
            const _r1 = i0.ɵɵreference(13);
            const _r2 = i0.ɵɵreference(20);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r0);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("matDatepicker", _r1)("formControl", ctx.serializedDate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r1);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("matDatepicker", _r2)("value", ctx.date.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r2);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerValueExample;
})();
export { DatepickerValueExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRTNDLHVDQUF1QztBQUN2QztJQUFBLE1BS2Esc0JBQXNCO1FBTG5DO1lBTUUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNuQyxtQkFBYyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDOUQ7O2dHQUhZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDVG5DLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw2QkFBYTtZQUFBLGlCQUFZO1lBQ3BDLDJCQUNBO1lBQUEsMkNBQXlFO1lBQ3pFLDBDQUEwQztZQUM1QyxpQkFBaUI7WUFFakIseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLGtEQUFrQztZQUFBLGlCQUFZO1lBQ3pELDRCQUVBO1lBQUEsNENBQXlFO1lBQ3pFLDJDQUEwQztZQUM1QyxpQkFBaUI7WUFFakIsMENBQ0U7WUFBQSxrQ0FBVztZQUFBLDhCQUFhO1lBQUEsaUJBQVk7WUFDcEMsNEJBQ0E7WUFBQSw0Q0FBeUU7WUFDekUsMkNBQTBDO1lBQzVDLGlCQUFpQjs7Ozs7WUFsQkMsZUFBeUI7WUFBekIsbUNBQXlCLHlCQUFBO1lBQ1IsZUFBZTtZQUFmLHlCQUFlO1lBTWhDLGVBQXlCO1lBQXpCLG1DQUF5QixtQ0FBQTtZQUVSLGVBQWU7WUFBZix5QkFBZTtZQU1oQyxlQUF5QjtZQUF6QixtQ0FBeUIseUJBQUE7WUFDUixlQUFlO1lBQWYseUJBQWU7O2lDRGxCbEQ7S0FZQztTQUhZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHNlbGVjdGVkIHZhbHVlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclZhbHVlRXhhbXBsZSB7XG4gIGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoKSk7XG4gIHNlcmlhbGl6ZWREYXRlID0gbmV3IEZvcm1Db250cm9sKChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkFuZ3VsYXIgZm9ybXM8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjFcIiBbZm9ybUNvbnRyb2xdPVwiZGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjFcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIxPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5Bbmd1bGFyIGZvcm1zICh3LyBkZXNlcmlhbGl6YXRpb24pPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIyXCJcbiAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZXJpYWxpemVkRGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5WYWx1ZSBiaW5kaW5nPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIzXCIgW3ZhbHVlXT1cImRhdGUudmFsdWVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIzXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMz48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==