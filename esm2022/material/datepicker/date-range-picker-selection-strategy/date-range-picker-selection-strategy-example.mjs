import { Component, Injectable } from '@angular/core';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule, } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: FiveDayRangeSelectionStrategy, deps: [{ token: i1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: FiveDayRangeSelectionStrategy }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: FiveDayRangeSelectionStrategy, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.DateAdapter }] });
/** @title Date range picker with custom a selection strategy */
export class DateRangePickerSelectionStrategyExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: DateRangePickerSelectionStrategyExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: DateRangePickerSelectionStrategyExample, isStandalone: true, selector: "date-range-picker-selection-strategy-example", providers: [
            {
                provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                useClass: FiveDayRangeSelectionStrategy,
            },
            provideNativeDateAdapter(),
        ], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: DateRangePickerSelectionStrategyExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-selection-strategy-example', providers: [
                        {
                            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                            useClass: FiveDayRangeSelectionStrategy,
                        },
                        provideNativeDateAdapter(),
                    ], standalone: true, imports: [MatFormFieldModule, MatDatepickerModule], template: "<mat-form-field>\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5L2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzdFLE9BQU8sRUFFTCxTQUFTLEVBQ1QsaUNBQWlDLEVBQ2pDLG1CQUFtQixHQUNwQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUdoRSxNQUFNLE9BQU8sNkJBQTZCO0lBQ3hDLFlBQW9CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFHLENBQUM7SUFFcEQsaUJBQWlCLENBQUMsSUFBYztRQUM5QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQW9CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxJQUFjO1FBQ3hDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLFNBQVMsQ0FBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELE9BQU8sSUFBSSxTQUFTLENBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7cUhBbkJVLDZCQUE2Qjt5SEFBN0IsNkJBQTZCOztrR0FBN0IsNkJBQTZCO2tCQUR6QyxVQUFVOztBQXVCWCxnRUFBZ0U7QUFjaEUsTUFBTSxPQUFPLHVDQUF1QztxSEFBdkMsdUNBQXVDO3lHQUF2Qyx1Q0FBdUMsMkZBVnZDO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlDQUFpQztnQkFDMUMsUUFBUSxFQUFFLDZCQUE2QjthQUN4QztZQUNELHdCQUF3QixFQUFFO1NBQzNCLDBCQzNDSCwwY0FVQSwyQ0RtQ1ksa0JBQWtCLG1nQkFBRSxtQkFBbUI7O2tHQUV0Qyx1Q0FBdUM7a0JBYm5ELFNBQVM7K0JBQ0UsOENBQThDLGFBRTdDO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQ0FBaUM7NEJBQzFDLFFBQVEsRUFBRSw2QkFBNkI7eUJBQ3hDO3dCQUNELHdCQUF3QixFQUFFO3FCQUMzQixjQUNXLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgcHJvdmlkZU5hdGl2ZURhdGVBZGFwdGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERhdGVSYW5nZVNlbGVjdGlvblN0cmF0ZWd5LFxuICBEYXRlUmFuZ2UsXG4gIE1BVF9EQVRFX1JBTkdFX1NFTEVDVElPTl9TVFJBVEVHWSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXZlRGF5UmFuZ2VTZWxlY3Rpb25TdHJhdGVneTxEPiBpbXBsZW1lbnRzIE1hdERhdGVSYW5nZVNlbGVjdGlvblN0cmF0ZWd5PEQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPEQ+KSB7fVxuXG4gIHNlbGVjdGlvbkZpbmlzaGVkKGRhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRml2ZURheVJhbmdlKGRhdGUpO1xuICB9XG5cbiAgY3JlYXRlUHJldmlldyhhY3RpdmVEYXRlOiBEIHwgbnVsbCk6IERhdGVSYW5nZTxEPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUZpdmVEYXlSYW5nZShhY3RpdmVEYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUZpdmVEYXlSYW5nZShkYXRlOiBEIHwgbnVsbCk6IERhdGVSYW5nZTxEPiB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIC0yKTtcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyhkYXRlLCAyKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVJhbmdlPEQ+KHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZVJhbmdlPEQ+KG51bGwsIG51bGwpO1xuICB9XG59XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgd2l0aCBjdXN0b20gYSBzZWxlY3Rpb24gc3RyYXRlZ3kgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZLFxuICAgICAgdXNlQ2xhc3M6IEZpdmVEYXlSYW5nZVNlbGVjdGlvblN0cmF0ZWd5LFxuICAgIH0sXG4gICAgcHJvdmlkZU5hdGl2ZURhdGVBZGFwdGVyKCksXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJTZWxlY3Rpb25TdHJhdGVneUV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5FbnRlciBhIGRhdGUgcmFuZ2U8L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0IFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1oaW50Pk1NL0REL1lZWVkg4oCTIE1NL0REL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==