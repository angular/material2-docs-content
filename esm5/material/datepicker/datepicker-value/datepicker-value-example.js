import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
var _c0 = ["picker1", ""];
var _c1 = ["picker2", ""];
var _c2 = ["picker3", ""];
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
    DatepickerValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 15, vars: 9, consts: [["matInput", "", "placeholder", "Angular forms", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["matInput", "", "placeholder", "Angular forms (w/ deserialization)", 3, "matDatepicker", "formControl"], ["matInput", "", "placeholder", "Value binding", 3, "matDatepicker", "value"]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelement(1, "input", 0);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(3, "mat-datepicker", null, _c0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelement(6, "input", 2);
            i0.ɵɵelement(7, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(8, "mat-datepicker", null, _c1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-form-field");
            i0.ɵɵelement(11, "input", 3);
            i0.ɵɵelement(12, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(13, "mat-datepicker", null, _c2);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFFM0MsdUNBQXVDO0FBQ3ZDO0lBQUE7UUFNRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUM5RDs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7Z0dBQ1ksc0JBQXNCOytEQUF0QixzQkFBc0I7WUNUbkMsc0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJDQUF5RTtZQUN6RSw0Q0FBMEM7WUFDNUMsaUJBQWlCO1lBRWpCLHNDQUNFO1lBQUEsMkJBRUE7WUFBQSwyQ0FBeUU7WUFDekUsNENBQTBDO1lBQzVDLGlCQUFpQjtZQUVqQix1Q0FDRTtZQUFBLDRCQUNBO1lBQUEsNENBQXlFO1lBQ3pFLDZDQUEwQztZQUM1QyxpQkFBaUI7Ozs7O1lBaEJDLGVBQXlCO1lBQXpCLG9DQUF5Qix5QkFBQTtZQUNSLGVBQWU7WUFBZiwwQkFBZTtZQUtoQyxlQUF5QjtZQUF6QixvQ0FBeUIsbUNBQUE7WUFFUixlQUFlO1lBQWYsMEJBQWU7WUFLaEMsZUFBeUI7WUFBekIsb0NBQXlCLHlCQUFBO1lBQ1IsZUFBZTtZQUFmLDBCQUFlOztpQ0RmbEQ7Q0FZQyxBQVJELElBUUM7U0FIWSxzQkFBc0I7bUNBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzZWxlY3RlZCB2YWx1ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUge1xuICBkYXRlID0gbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKCkpO1xuICBzZXJpYWxpemVkRGF0ZSA9IG5ldyBGb3JtQ29udHJvbCgobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIxXCIgcGxhY2Vob2xkZXI9XCJBbmd1bGFyIGZvcm1zXCIgW2Zvcm1Db250cm9sXT1cImRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIxXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMT48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyMlwiIHBsYWNlaG9sZGVyPVwiQW5ndWxhciBmb3JtcyAody8gZGVzZXJpYWxpemF0aW9uKVwiXG4gICAgICAgICBbZm9ybUNvbnRyb2xdPVwic2VyaWFsaXplZERhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyM1wiIHBsYWNlaG9sZGVyPVwiVmFsdWUgYmluZGluZ1wiIFt2YWx1ZV09XCJkYXRlLnZhbHVlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyM1wiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjM+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=