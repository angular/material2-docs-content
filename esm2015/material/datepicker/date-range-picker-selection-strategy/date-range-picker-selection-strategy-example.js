import { Component, Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/datepicker";
export class FiveDayRangeSelectionStrategy {
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    selectionFinished(date) {
        return this._createFiveDayRange(date);
    }
    createPreview(activeDate) {
        return this._createFiveDayRange(activeDate);
    }
    _createFiveDayRange(date) {
        if (date) {
            const start = this._dateAdapter.addCalendarDays(date, -2);
            const end = this._dateAdapter.addCalendarDays(date, 2);
            return new DateRange(start, end);
        }
        return new DateRange(null, null);
    }
}
FiveDayRangeSelectionStrategy.ɵfac = function FiveDayRangeSelectionStrategy_Factory(t) { return new (t || FiveDayRangeSelectionStrategy)(i0.ɵɵinject(i1.DateAdapter)); };
FiveDayRangeSelectionStrategy.ɵprov = i0.ɵɵdefineInjectable({ token: FiveDayRangeSelectionStrategy, factory: FiveDayRangeSelectionStrategy.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FiveDayRangeSelectionStrategy, [{
        type: Injectable
    }], function () { return [{ type: i1.DateAdapter }]; }, null); })();
/** @title Date range picker with custom a selection strategy */
export class DateRangePickerSelectionStrategyExample {
}
DateRangePickerSelectionStrategyExample.ɵfac = function DateRangePickerSelectionStrategyExample_Factory(t) { return new (t || DateRangePickerSelectionStrategyExample)(); };
DateRangePickerSelectionStrategyExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerSelectionStrategyExample, selectors: [["date-range-picker-selection-strategy-example"]], features: [i0.ɵɵProvidersFeature([{
                provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                useClass: FiveDayRangeSelectionStrategy
            }])], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerSelectionStrategyExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Enter a date range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-date-range-input", 1);
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelement(5, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
        i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(8);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("rangePicker", _r0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("for", _r0);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatDateRangeInput, i3.MatStartDate, i3.MatEndDate, i3.MatDatepickerToggle, i2.MatSuffix, i3.MatDateRangePicker], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerSelectionStrategyExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-selection-strategy-example',
                templateUrl: 'date-range-picker-selection-strategy-example.html',
                styleUrls: ['date-range-picker-selection-strategy-example.css'],
                providers: [{
                        provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                        useClass: FiveDayRangeSelectionStrategy
                    }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5L2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFFTCxTQUFTLEVBQ1QsaUNBQWlDLEdBQ2xDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBR3RDLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQUcsQ0FBQztJQUVwRCxpQkFBaUIsQ0FBQyxJQUFjO1FBQzlCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxhQUFhLENBQUMsVUFBb0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLG1CQUFtQixDQUFDLElBQWM7UUFDeEMsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLFNBQVMsQ0FBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksU0FBUyxDQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzswR0FuQlUsNkJBQTZCO3FFQUE3Qiw2QkFBNkIsV0FBN0IsNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FEekMsVUFBVTs7QUF1QlgsZ0VBQWdFO0FBVWhFLE1BQU0sT0FBTyx1Q0FBdUM7OzhIQUF2Qyx1Q0FBdUM7NEVBQXZDLHVDQUF1QyxrR0FMdkMsQ0FBQztnQkFDVixPQUFPLEVBQUUsaUNBQWlDO2dCQUMxQyxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDLENBQUM7UUN2Q0oseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLGtDQUFrQjtRQUFBLGlCQUFZO1FBQ3pDLCtDQUNFO1FBQUEsMkJBQ0E7UUFBQSwyQkFDRjtRQUFBLGlCQUF1QjtRQUN2QiwyQ0FBd0U7UUFDeEUsaURBQXVEO1FBQ3pELGlCQUFpQjs7O1FBTk8sZUFBc0I7UUFBdEIsaUNBQXNCO1FBSVgsZUFBYztRQUFkLHlCQUFjOztrRERtQ3BDLHVDQUF1QztjQVRuRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztnQkFDeEQsV0FBVyxFQUFFLG1EQUFtRDtnQkFDaEUsU0FBUyxFQUFFLENBQUMsa0RBQWtELENBQUM7Z0JBQy9ELFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQ0FBaUM7d0JBQzFDLFFBQVEsRUFBRSw2QkFBNkI7cUJBQ3hDLENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0RGF0ZVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3ksXG4gIERhdGVSYW5nZSxcbiAgTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpdmVEYXlSYW5nZVNlbGVjdGlvblN0cmF0ZWd5PEQ+IGltcGxlbWVudHMgTWF0RGF0ZVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3k8RD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RD4pIHt9XG5cbiAgc2VsZWN0aW9uRmluaXNoZWQoZGF0ZTogRCB8IG51bGwpOiBEYXRlUmFuZ2U8RD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVGaXZlRGF5UmFuZ2UoZGF0ZSk7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3KGFjdGl2ZURhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRml2ZURheVJhbmdlKGFjdGl2ZURhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRml2ZURheVJhbmdlKGRhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhckRheXMoZGF0ZSwgLTIpO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIDIpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlUmFuZ2U8RD4oc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlUmFuZ2U8RD4obnVsbCwgbnVsbCk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciB3aXRoIGN1c3RvbSBhIHNlbGVjdGlvbiBzdHJhdGVneSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBNQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1ksXG4gICAgdXNlQ2xhc3M6IEZpdmVEYXlSYW5nZVNlbGVjdGlvblN0cmF0ZWd5XG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlclNlbGVjdGlvblN0cmF0ZWd5RXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RW50ZXIgYSBkYXRlIHJhbmdlPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dCBbcmFuZ2VQaWNrZXJdPVwicGlja2VyXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3BpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=