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
let FiveDayRangeSelectionStrategy = /** @class */ (() => {
    /**
     * @template D
     */
    class FiveDayRangeSelectionStrategy {
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
    return FiveDayRangeSelectionStrategy;
})();
export { FiveDayRangeSelectionStrategy };
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
let DateRangePickerSelectionStrategyExample = /** @class */ (() => {
    /**
     * \@title Date range picker with custom a selection strategy
     */
    class DateRangePickerSelectionStrategyExample {
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
    return DateRangePickerSelectionStrategyExample;
})();
export { DateRangePickerSelectionStrategyExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5L2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUVMLFNBQVMsRUFDVCxpQ0FBaUMsR0FDbEMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0FBRXRDOzs7O0lBQUEsTUFDYSw2QkFBNkI7Ozs7UUFDeEMsWUFBb0IsWUFBNEI7WUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQUcsQ0FBQzs7Ozs7UUFFcEQsaUJBQWlCLENBQUMsSUFBYztZQUM5QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7OztRQUVELGFBQWEsQ0FBQyxVQUFvQjtZQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7Ozs7UUFFTyxtQkFBbUIsQ0FBQyxJQUFjO1lBQ3hDLElBQUksSUFBSSxFQUFFOztzQkFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOztzQkFDbkQsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sSUFBSSxTQUFTLENBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsT0FBTyxJQUFJLFNBQVMsQ0FBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O2dCQXBCRixVQUFVOzs7O2dCQVBILFdBQVc7O2lJQVFOLDZCQUE2Qjs0RkFBN0IsNkJBQTZCLFdBQTdCLDZCQUE2Qjt3Q0FUMUM7S0E2QkM7U0FwQlksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FEekMsVUFBVTs7Ozs7OztJQUVHLHFEQUFvQzs7Ozs7QUFzQmxEOzs7O0lBQUEsTUFTYSx1Q0FBdUM7OztnQkFUbkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4Q0FBOEM7b0JBQ3hELFdBQVcsRUFBRSxtREFBbUQ7b0JBQ2hFLFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO29CQUMvRCxTQUFTLEVBQUUsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUNBQWlDOzRCQUMxQyxRQUFRLEVBQUUsNkJBQTZCO3lCQUN4QyxDQUFDO2lCQUNIOztxSkFDWSx1Q0FBdUM7bUdBQXZDLHVDQUF1QyxrR0FMdkMsQ0FBQztvQkFDVixPQUFPLEVBQUUsaUNBQWlDO29CQUMxQyxRQUFRLEVBQUUsNkJBQTZCO2lCQUN4QyxDQUFDO1lDdkNKLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxrQ0FBa0I7WUFBQSxpQkFBWTtZQUN6QywrQ0FDRTtZQUFBLDJCQUNBO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBdUI7WUFDdkIsMkNBQXdFO1lBQ3hFLGlEQUF1RDtZQUN6RCxpQkFBaUI7OztZQU5PLGVBQXNCO1lBQXRCLGlDQUFzQjtZQUlYLGVBQWM7WUFBZCx5QkFBYzs7a0RETmpEO0tBeUN1RDtTQUExQyx1Q0FBdUM7a0RBQXZDLHVDQUF1QztjQVRuRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztnQkFDeEQsV0FBVyxFQUFFLG1EQUFtRDtnQkFDaEUsU0FBUyxFQUFFLENBQUMsa0RBQWtELENBQUM7Z0JBQy9ELFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQ0FBaUM7d0JBQzFDLFFBQVEsRUFBRSw2QkFBNkI7cUJBQ3hDLENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0RGF0ZVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3ksXG4gIERhdGVSYW5nZSxcbiAgTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpdmVEYXlSYW5nZVNlbGVjdGlvblN0cmF0ZWd5PEQ+IGltcGxlbWVudHMgTWF0RGF0ZVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3k8RD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RD4pIHt9XG5cbiAgc2VsZWN0aW9uRmluaXNoZWQoZGF0ZTogRCB8IG51bGwpOiBEYXRlUmFuZ2U8RD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVGaXZlRGF5UmFuZ2UoZGF0ZSk7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3KGFjdGl2ZURhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRml2ZURheVJhbmdlKGFjdGl2ZURhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRml2ZURheVJhbmdlKGRhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhckRheXMoZGF0ZSwgLTIpO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIDIpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlUmFuZ2U8RD4oc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlUmFuZ2U8RD4obnVsbCwgbnVsbCk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciB3aXRoIGN1c3RvbSBhIHNlbGVjdGlvbiBzdHJhdGVneSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBNQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1ksXG4gICAgdXNlQ2xhc3M6IEZpdmVEYXlSYW5nZVNlbGVjdGlvblN0cmF0ZWd5XG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlclNlbGVjdGlvblN0cmF0ZWd5RXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW3JhbmdlUGlja2VyXT1cInBpY2tlclwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19