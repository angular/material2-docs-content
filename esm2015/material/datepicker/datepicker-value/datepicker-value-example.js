import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
/** @title Datepicker selected value */
export class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
}
DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
DatepickerValueExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 21, vars: 9, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["picker2", ""], ["matInput", "", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{ selector: 'datepicker-value-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms</mat-label>\n  <input matInput [matDatepicker]=\"picker1\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms (w/ deserialization)</mat-label>\n  <input matInput [matDatepicker]=\"picker2\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Value binding</mat-label>\n  <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRTNDLHVDQUF1QztBQU12QyxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDOUQ7OzRGQUhZLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDVG5DLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLDZCQUFhO1FBQUEsaUJBQVk7UUFDcEMsMkJBQStEO1FBQy9ELDJDQUF5RTtRQUN6RSwwQ0FBMEM7UUFDNUMsaUJBQWlCO1FBRWpCLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLGtEQUFrQztRQUFBLGlCQUFZO1FBQ3pELDRCQUNzQztRQUN0Qyw0Q0FBeUU7UUFDekUsMkNBQTBDO1FBQzVDLGlCQUFpQjtRQUVqQiwwQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSw4QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLDRCQUErRDtRQUMvRCw0Q0FBeUU7UUFDekUsMkNBQTBDO1FBQzVDLGlCQUFpQjs7Ozs7UUFsQkMsZUFBeUI7UUFBekIsbUNBQXlCLHlCQUFBO1FBQ1IsZUFBZTtRQUFmLHlCQUFlO1FBTWhDLGVBQXlCO1FBQXpCLG1DQUF5QixtQ0FBQTtRQUVSLGVBQWU7UUFBZix5QkFBZTtRQU1oQyxlQUF5QjtRQUF6QixtQ0FBeUIseUJBQUE7UUFDUixlQUFlO1FBQWYseUJBQWU7O3VGRFRyQyxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzZWxlY3RlZCB2YWx1ZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUge1xuICBkYXRlID0gbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKCkpO1xuICBzZXJpYWxpemVkRGF0ZSA9IG5ldyBGb3JtQ29udHJvbCgobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5Bbmd1bGFyIGZvcm1zPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIxXCIgW2Zvcm1Db250cm9sXT1cImRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIxXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMT48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+QW5ndWxhciBmb3JtcyAody8gZGVzZXJpYWxpemF0aW9uKTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyMlwiXG4gICAgICAgICBbZm9ybUNvbnRyb2xdPVwic2VyaWFsaXplZERhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+VmFsdWUgYmluZGluZzwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyM1wiIFt2YWx1ZV09XCJkYXRlLnZhbHVlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyM1wiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjM+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=