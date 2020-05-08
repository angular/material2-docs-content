/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/date-range-picker-selection-strategy/date-range-picker-selection-strategy-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/input";
/**
 * @template D
 */
export class FiveDayRangeSelectionStrategy {
    /**
     * @param {?} _dateAdapter
     */
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectionFinished(date) {
        return this._createFiveDayRange(date);
    }
    /**
     * @param {?} activeDate
     * @return {?}
     */
    createPreview(activeDate) {
        return this._createFiveDayRange(activeDate);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    _createFiveDayRange(date) {
        if (date) {
            /** @type {?} */
            const start = this._dateAdapter.addCalendarDays(date, -2);
            /** @type {?} */
            const end = this._dateAdapter.addCalendarDays(date, 2);
            return new DateRange(start, end);
        }
        return new DateRange(null, null);
    }
}
FiveDayRangeSelectionStrategy.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FiveDayRangeSelectionStrategy.ctorParameters = () => [
    { type: DateAdapter }
];
/** @nocollapse */ FiveDayRangeSelectionStrategy.ɵfac = function FiveDayRangeSelectionStrategy_Factory(t) { return new (t || FiveDayRangeSelectionStrategy)(i0.ɵɵinject(i1.DateAdapter)); };
/** @nocollapse */ FiveDayRangeSelectionStrategy.ɵprov = i0.ɵɵdefineInjectable({ token: FiveDayRangeSelectionStrategy, factory: FiveDayRangeSelectionStrategy.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FiveDayRangeSelectionStrategy, [{
        type: Injectable
    }], function () { return [{ type: i1.DateAdapter }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    FiveDayRangeSelectionStrategy.prototype._dateAdapter;
}
/**
 * \@title Date range picker with custom a selection strategy
 */
export class DateRangePickerSelectionStrategyExample {
}
DateRangePickerSelectionStrategyExample.decorators = [
    { type: Component, args: [{
                selector: 'date-range-picker-selection-strategy-example',
                templateUrl: 'date-range-picker-selection-strategy-example.html',
                styleUrls: ['date-range-picker-selection-strategy-example.css'],
                providers: [{
                        provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                        useClass: FiveDayRangeSelectionStrategy
                    }]
            },] },
];
/** @nocollapse */ DateRangePickerSelectionStrategyExample.ɵfac = function DateRangePickerSelectionStrategyExample_Factory(t) { return new (t || DateRangePickerSelectionStrategyExample)(); };
/** @nocollapse */ DateRangePickerSelectionStrategyExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerSelectionStrategyExample, selectors: [["date-range-picker-selection-strategy-example"]], features: [i0.ɵɵProvidersFeature([{
                provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                useClass: FiveDayRangeSelectionStrategy
            }])], decls: 9, vars: 2, consts: [[3, "rangePicker"], ["matStartDate", "", "matInput", "", "placeholder", "Start date"], ["matEndDate", "", "matInput", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerSelectionStrategyExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Enter a date range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-date-range-input", 0);
        i0.ɵɵelement(4, "input", 1);
        i0.ɵɵelement(5, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "mat-datepicker-toggle", 3);
        i0.ɵɵelement(7, "mat-date-range-picker", null, 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(8);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("rangePicker", _r0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("for", _r0);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatDateRangeInput, i3.MatStartDate, i4.MatInput, i3.MatEndDate, i3.MatDatepickerToggle, i2.MatSuffix, i3.MatDateRangePicker], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5L2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUVMLFNBQVMsRUFDVCxpQ0FBaUMsR0FDbEMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0FBR3RDLE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFDeEMsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQUcsQ0FBQzs7Ozs7SUFFcEQsaUJBQWlCLENBQUMsSUFBYztRQUM5QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxVQUFvQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxJQUFjO1FBQ3hDLElBQUksSUFBSSxFQUFFOztrQkFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOztrQkFDbkQsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdEQsT0FBTyxJQUFJLFNBQVMsQ0FBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksU0FBUyxDQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFwQkYsVUFBVTs7OztZQVBILFdBQVc7OzZIQVFOLDZCQUE2Qjt3RkFBN0IsNkJBQTZCLFdBQTdCLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBRHpDLFVBQVU7Ozs7Ozs7SUFFRyxxREFBb0M7Ozs7O0FBK0JsRCxNQUFNLE9BQU8sdUNBQXVDOzs7WUFUbkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELFdBQVcsRUFBRSxtREFBbUQ7Z0JBQ2hFLFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUNBQWlDO3dCQUMxQyxRQUFRLEVBQUUsNkJBQTZCO3FCQUN4QyxDQUFDO2FBQ0g7O2lKQUNZLHVDQUF1QzsrRkFBdkMsdUNBQXVDLGtHQUx2QyxDQUFDO2dCQUNWLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEMsQ0FBQztRQ3ZDSixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsa0NBQWtCO1FBQUEsaUJBQVk7UUFDekMsK0NBQ0U7UUFBQSwyQkFDQTtRQUFBLDJCQUNGO1FBQUEsaUJBQXVCO1FBQ3ZCLDJDQUF3RTtRQUN4RSxpREFBdUQ7UUFDekQsaUJBQWlCOzs7UUFOTyxlQUFzQjtRQUF0QixpQ0FBc0I7UUFJWCxlQUFjO1FBQWQseUJBQWM7O2tERG1DcEMsdUNBQXVDO2NBVG5ELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOENBQThDO2dCQUN4RCxXQUFXLEVBQUUsbURBQW1EO2dCQUNoRSxTQUFTLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQztnQkFDL0QsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlDQUFpQzt3QkFDMUMsUUFBUSxFQUFFLDZCQUE2QjtxQkFDeEMsQ0FBQzthQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge1xuICBNYXREYXRlUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSxcbiAgRGF0ZVJhbmdlLFxuICBNQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1ksXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRml2ZURheVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3k8RD4gaW1wbGVtZW50cyBNYXREYXRlUmFuZ2VTZWxlY3Rpb25TdHJhdGVneTxEPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEPikge31cblxuICBzZWxlY3Rpb25GaW5pc2hlZChkYXRlOiBEIHwgbnVsbCk6IERhdGVSYW5nZTxEPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUZpdmVEYXlSYW5nZShkYXRlKTtcbiAgfVxuXG4gIGNyZWF0ZVByZXZpZXcoYWN0aXZlRGF0ZTogRCB8IG51bGwpOiBEYXRlUmFuZ2U8RD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVGaXZlRGF5UmFuZ2UoYWN0aXZlRGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGaXZlRGF5UmFuZ2UoZGF0ZTogRCB8IG51bGwpOiBEYXRlUmFuZ2U8RD4ge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhkYXRlLCAtMik7XG4gICAgICBjb25zdCBlbmQgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhckRheXMoZGF0ZSwgMik7XG4gICAgICByZXR1cm4gbmV3IERhdGVSYW5nZTxEPihzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGVSYW5nZTxEPihudWxsLCBudWxsKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIERhdGUgcmFuZ2UgcGlja2VyIHdpdGggY3VzdG9tIGEgc2VsZWN0aW9uIHN0cmF0ZWd5ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE1BVF9EQVRFX1JBTkdFX1NFTEVDVElPTl9TVFJBVEVHWSxcbiAgICB1c2VDbGFzczogRml2ZURheVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3lcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyU2VsZWN0aW9uU3RyYXRlZ3lFeGFtcGxlIHt9XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RW50ZXIgYSBkYXRlIHJhbmdlPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dCBbcmFuZ2VQaWNrZXJdPVwicGlja2VyXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3BpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=