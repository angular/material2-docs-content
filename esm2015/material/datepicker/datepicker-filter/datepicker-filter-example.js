/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-filter/datepicker-filter-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/**
 * \@title Datepicker with filter validation
 */
export class DatepickerFilterExample {
    constructor() {
        this.myFilter = (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            /** @type {?} */
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        });
    }
}
DatepickerFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            },] },
];
/** @nocollapse */ DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
/** @nocollapse */ DatepickerFilterExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 5, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(3, "mat-datepicker", null, 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r13 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r13);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r13);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerFilterExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerFilterExample.prototype.myFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFReEMsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLGFBQVE7Ozs7UUFBRyxDQUFDLENBQWMsRUFBVyxFQUFFOztrQkFDL0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsbURBQW1EO1lBQ25ELE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQTtLQUNGOzs7WUFYQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7OzhGQUNZLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDUnBDLHlDQUNFO1FBQUEsMkJBQ0E7UUFBQSwyQ0FBd0U7UUFDeEUsMENBQXlDO1FBQzNDLGlCQUFpQjs7O1FBSEMsZUFBZ0M7UUFBaEMsa0RBQWdDLHVCQUFBO1FBQ2YsZUFBYztRQUFkLDBCQUFjOztrRERNcEMsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztJQUVDLDJDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBmaWx0ZXIgdmFsaWRhdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJGaWx0ZXJFeGFtcGxlIHtcbiAgbXlGaWx0ZXIgPSAoZDogRGF0ZSB8IG51bGwpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBkYXkgPSAoZCB8fCBuZXcgRGF0ZSgpKS5nZXREYXkoKTtcbiAgICAvLyBQcmV2ZW50IFNhdHVyZGF5IGFuZCBTdW5kYXkgZnJvbSBiZWluZyBzZWxlY3RlZC5cbiAgICByZXR1cm4gZGF5ICE9PSAwICYmIGRheSAhPT0gNjtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlckZpbHRlcl09XCJteUZpbHRlclwiIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgZGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==