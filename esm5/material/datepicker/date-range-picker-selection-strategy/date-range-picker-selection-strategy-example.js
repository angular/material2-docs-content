import { Component, Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/input";
var FiveDayRangeSelectionStrategy = /** @class */ (function () {
    function FiveDayRangeSelectionStrategy(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    FiveDayRangeSelectionStrategy.prototype.selectionFinished = function (date) {
        return this._createFiveDayRange(date);
    };
    FiveDayRangeSelectionStrategy.prototype.createPreview = function (activeDate) {
        return this._createFiveDayRange(activeDate);
    };
    FiveDayRangeSelectionStrategy.prototype._createFiveDayRange = function (date) {
        if (date) {
            var start = this._dateAdapter.addCalendarDays(date, -2);
            var end = this._dateAdapter.addCalendarDays(date, 2);
            return new DateRange(start, end);
        }
        return new DateRange(null, null);
    };
    FiveDayRangeSelectionStrategy.ɵfac = function FiveDayRangeSelectionStrategy_Factory(t) { return new (t || FiveDayRangeSelectionStrategy)(i0.ɵɵinject(i1.DateAdapter)); };
    FiveDayRangeSelectionStrategy.ɵprov = i0.ɵɵdefineInjectable({ token: FiveDayRangeSelectionStrategy, factory: FiveDayRangeSelectionStrategy.ɵfac });
    return FiveDayRangeSelectionStrategy;
}());
export { FiveDayRangeSelectionStrategy };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FiveDayRangeSelectionStrategy, [{
        type: Injectable
    }], function () { return [{ type: i1.DateAdapter }]; }, null); })();
/** @title Date range picker with custom a selection strategy */
var DateRangePickerSelectionStrategyExample = /** @class */ (function () {
    function DateRangePickerSelectionStrategyExample() {
    }
    DateRangePickerSelectionStrategyExample.ɵfac = function DateRangePickerSelectionStrategyExample_Factory(t) { return new (t || DateRangePickerSelectionStrategyExample)(); };
    DateRangePickerSelectionStrategyExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerSelectionStrategyExample, selectors: [["date-range-picker-selection-strategy-example"]], features: [i0.ɵɵProvidersFeature([{
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
            var _r6 = i0.ɵɵreference(8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("rangePicker", _r6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("for", _r6);
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatDateRangeInput, i3.MatStartDate, i4.MatInput, i3.MatEndDate, i3.MatDatepickerToggle, i2.MatSuffix, i3.MatDateRangePicker], styles: [""] });
    return DateRangePickerSelectionStrategyExample;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5L2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFFTCxTQUFTLEVBQ1QsaUNBQWlDLEdBQ2xDLE1BQU0sOEJBQThCLENBQUM7Ozs7OztBQUV0QztJQUVFLHVDQUFvQixZQUE0QjtRQUE1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7SUFBRyxDQUFDO0lBRXBELHlEQUFpQixHQUFqQixVQUFrQixJQUFjO1FBQzlCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxxREFBYSxHQUFiLFVBQWMsVUFBb0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLDJEQUFtQixHQUEzQixVQUE0QixJQUFjO1FBQ3hDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sSUFBSSxTQUFTLENBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxJQUFJLFNBQVMsQ0FBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs4R0FuQlUsNkJBQTZCO3lFQUE3Qiw2QkFBNkIsV0FBN0IsNkJBQTZCO3dDQVQxQztDQTZCQyxBQXJCRCxJQXFCQztTQXBCWSw2QkFBNkI7a0RBQTdCLDZCQUE2QjtjQUR6QyxVQUFVOztBQXVCWCxnRUFBZ0U7QUFDaEU7SUFBQTtLQVN1RDtrSUFBMUMsdUNBQXVDO2dGQUF2Qyx1Q0FBdUMsa0dBTHZDLENBQUM7b0JBQ1YsT0FBTyxFQUFFLGlDQUFpQztvQkFDMUMsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEMsQ0FBQztZQ3ZDSixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsa0NBQWtCO1lBQUEsaUJBQVk7WUFDekMsK0NBQ0U7WUFBQSwyQkFDQTtZQUFBLDJCQUNGO1lBQUEsaUJBQXVCO1lBQ3ZCLDJDQUF3RTtZQUN4RSxpREFBdUQ7WUFDekQsaUJBQWlCOzs7WUFOTyxlQUFzQjtZQUF0QixpQ0FBc0I7WUFJWCxlQUFjO1lBQWQseUJBQWM7O2tERE5qRDtDQXlDdUQsQUFUdkQsSUFTdUQ7U0FBMUMsdUNBQXVDO2tEQUF2Qyx1Q0FBdUM7Y0FUbkQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELFdBQVcsRUFBRSxtREFBbUQ7Z0JBQ2hFLFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUNBQWlDO3dCQUMxQyxRQUFRLEVBQUUsNkJBQTZCO3FCQUN4QyxDQUFDO2FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVBZGFwdGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERhdGVSYW5nZVNlbGVjdGlvblN0cmF0ZWd5LFxuICBEYXRlUmFuZ2UsXG4gIE1BVF9EQVRFX1JBTkdFX1NFTEVDVElPTl9TVFJBVEVHWSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXZlRGF5UmFuZ2VTZWxlY3Rpb25TdHJhdGVneTxEPiBpbXBsZW1lbnRzIE1hdERhdGVSYW5nZVNlbGVjdGlvblN0cmF0ZWd5PEQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPEQ+KSB7fVxuXG4gIHNlbGVjdGlvbkZpbmlzaGVkKGRhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRml2ZURheVJhbmdlKGRhdGUpO1xuICB9XG5cbiAgY3JlYXRlUHJldmlldyhhY3RpdmVEYXRlOiBEIHwgbnVsbCk6IERhdGVSYW5nZTxEPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUZpdmVEYXlSYW5nZShhY3RpdmVEYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUZpdmVEYXlSYW5nZShkYXRlOiBEIHwgbnVsbCk6IERhdGVSYW5nZTxEPiB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIC0yKTtcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhkYXRlLCAyKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVJhbmdlPEQ+KHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZVJhbmdlPEQ+KG51bGwsIG51bGwpO1xuICB9XG59XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgd2l0aCBjdXN0b20gYSBzZWxlY3Rpb24gc3RyYXRlZ3kgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZLFxuICAgIHVzZUNsYXNzOiBGaXZlRGF5UmFuZ2VTZWxlY3Rpb25TdHJhdGVneVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJTZWxlY3Rpb25TdHJhdGVneUV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5FbnRlciBhIGRhdGUgcmFuZ2U8L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0IFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==