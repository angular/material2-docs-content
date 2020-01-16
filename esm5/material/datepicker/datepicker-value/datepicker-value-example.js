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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRTNDLHVDQUF1QztBQUN2QztJQUFBO1FBTUUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDOUQ7Z0dBSFksc0JBQXNCOytEQUF0QixzQkFBc0I7WUNUbkMsc0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJDQUF5RTtZQUN6RSwwQ0FBMEM7WUFDNUMsaUJBQWlCO1lBRWpCLHNDQUNFO1lBQUEsMkJBRUE7WUFBQSwyQ0FBeUU7WUFDekUsMENBQTBDO1lBQzVDLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLDRCQUNBO1lBQUEsNENBQXlFO1lBQ3pFLDJDQUEwQztZQUM1QyxpQkFBaUI7Ozs7O1lBaEJDLGVBQXlCO1lBQXpCLG9DQUF5Qix5QkFBQTtZQUNSLGVBQWU7WUFBZiwwQkFBZTtZQUtoQyxlQUF5QjtZQUF6QixvQ0FBeUIsbUNBQUE7WUFFUixlQUFlO1lBQWYsMEJBQWU7WUFLaEMsZUFBeUI7WUFBekIsb0NBQXlCLHlCQUFBO1lBQ1IsZUFBZTtZQUFmLDBCQUFlOztpQ0RmbEQ7Q0FZQyxBQVJELElBUUM7U0FIWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzZWxlY3RlZCB2YWx1ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUge1xuICBkYXRlID0gbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKCkpO1xuICBzZXJpYWxpemVkRGF0ZSA9IG5ldyBGb3JtQ29udHJvbCgobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIxXCIgcGxhY2Vob2xkZXI9XCJBbmd1bGFyIGZvcm1zXCIgW2Zvcm1Db250cm9sXT1cImRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIxXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMT48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyMlwiIHBsYWNlaG9sZGVyPVwiQW5ndWxhciBmb3JtcyAody8gZGVzZXJpYWxpemF0aW9uKVwiXG4gICAgICAgICBbZm9ybUNvbnRyb2xdPVwic2VyaWFsaXplZERhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyM1wiIHBsYWNlaG9sZGVyPVwiVmFsdWUgYmluZGluZ1wiIFt2YWx1ZV09XCJkYXRlLnZhbHVlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyM1wiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjM+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=