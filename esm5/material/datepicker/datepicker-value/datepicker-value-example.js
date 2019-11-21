import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
/** @title Datepicker selected value */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
    DatepickerValueExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-value-example',
                    templateUrl: 'datepicker-value-example.html',
                    styleUrls: ['datepicker-value-example.css'],
                },] },
    ];
    DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
    DatepickerValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 15, vars: 9, consts: [["matInput", "", "placeholder", "Angular forms", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "Angular forms (w/ deserialization)", 3, "matDatepicker", "formControl"], ["picker2", ""], ["matInput", "", "placeholder", "Value binding", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
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
            var _r21 = i0.ɵɵreference(4);
            var _r22 = i0.ɵɵreference(9);
            var _r23 = i0.ɵɵreference(14);
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
    return DatepickerValueExample;
}());
export { DatepickerValueExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRTNDLHVDQUF1QztBQUN2QztJQUFBO1FBTUUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDOUQ7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDVG5DLHNDQUNFO1lBQUEsMkJBQ0E7WUFBQSwyQ0FBeUU7WUFDekUsMENBQTBDO1lBQzVDLGlCQUFpQjtZQUVqQixzQ0FDRTtZQUFBLDJCQUVBO1lBQUEsMkNBQXlFO1lBQ3pFLDBDQUEwQztZQUM1QyxpQkFBaUI7WUFFakIsdUNBQ0U7WUFBQSw0QkFDQTtZQUFBLDRDQUF5RTtZQUN6RSwyQ0FBMEM7WUFDNUMsaUJBQWlCOzs7OztZQWhCQyxlQUF5QjtZQUF6QixvQ0FBeUIseUJBQUE7WUFDUixlQUFlO1lBQWYsMEJBQWU7WUFLaEMsZUFBeUI7WUFBekIsb0NBQXlCLG1DQUFBO1lBRVIsZUFBZTtZQUFmLDBCQUFlO1lBS2hDLGVBQXlCO1lBQXpCLG9DQUF5Qix5QkFBQTtZQUNSLGVBQWU7WUFBZiwwQkFBZTs7aUNEZmxEO0NBWUMsQUFSRCxJQVFDO1NBSFksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgc2VsZWN0ZWQgdmFsdWUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyVmFsdWVFeGFtcGxlIHtcbiAgZGF0ZSA9IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSgpKTtcbiAgc2VyaWFsaXplZERhdGUgPSBuZXcgRm9ybUNvbnRyb2woKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyMVwiIHBsYWNlaG9sZGVyPVwiQW5ndWxhciBmb3Jtc1wiIFtmb3JtQ29udHJvbF09XCJkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyMVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjE+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjJcIiBwbGFjZWhvbGRlcj1cIkFuZ3VsYXIgZm9ybXMgKHcvIGRlc2VyaWFsaXphdGlvbilcIlxuICAgICAgICAgW2Zvcm1Db250cm9sXT1cInNlcmlhbGl6ZWREYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyMlwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjNcIiBwbGFjZWhvbGRlcj1cIlZhbHVlIGJpbmRpbmdcIiBbdmFsdWVdPVwiZGF0ZS52YWx1ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjNcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIzPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19