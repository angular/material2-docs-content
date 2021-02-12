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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRTNDLHVDQUF1QztBQU12QyxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsU0FBSSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDOUQ7OzRGQUhZLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDVG5DLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLDZCQUFhO1FBQUEsaUJBQVk7UUFDcEMsMkJBQStEO1FBQy9ELDJDQUF5RTtRQUN6RSwwQ0FBMEM7UUFDNUMsaUJBQWlCO1FBRWpCLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLGtEQUFrQztRQUFBLGlCQUFZO1FBQ3pELDRCQUNzQztRQUN0Qyw0Q0FBeUU7UUFDekUsMkNBQTBDO1FBQzVDLGlCQUFpQjtRQUVqQiwwQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSw4QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLDRCQUErRDtRQUMvRCw0Q0FBeUU7UUFDekUsMkNBQTBDO1FBQzVDLGlCQUFpQjs7Ozs7UUFsQkMsZUFBeUI7UUFBekIsbUNBQXlCLHlCQUFBO1FBQ1IsZUFBZTtRQUFmLHlCQUFlO1FBTWhDLGVBQXlCO1FBQXpCLG1DQUF5QixtQ0FBQTtRQUVSLGVBQWU7UUFBZix5QkFBZTtRQU1oQyxlQUF5QjtRQUF6QixtQ0FBeUIseUJBQUE7UUFDUixlQUFlO1FBQWYseUJBQWU7O3VGRFRyQyxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgc2VsZWN0ZWQgdmFsdWUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci12YWx1ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyVmFsdWVFeGFtcGxlIHtcbiAgZGF0ZSA9IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSgpKTtcbiAgc2VyaWFsaXplZERhdGUgPSBuZXcgRm9ybUNvbnRyb2woKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+QW5ndWxhciBmb3JtczwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyMVwiIFtmb3JtQ29udHJvbF09XCJkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyMVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjE+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkFuZ3VsYXIgZm9ybXMgKHcvIGRlc2VyaWFsaXphdGlvbik8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjJcIlxuICAgICAgICAgW2Zvcm1Db250cm9sXT1cInNlcmlhbGl6ZWREYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyMlwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlZhbHVlIGJpbmRpbmc8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjNcIiBbdmFsdWVdPVwiZGF0ZS52YWx1ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlcjNcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIzPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19