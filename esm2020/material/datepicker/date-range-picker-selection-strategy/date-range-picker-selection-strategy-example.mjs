import { Component, Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/legacy-form-field";
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
FiveDayRangeSelectionStrategy.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FiveDayRangeSelectionStrategy, deps: [{ token: i1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable });
FiveDayRangeSelectionStrategy.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FiveDayRangeSelectionStrategy });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FiveDayRangeSelectionStrategy, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DateAdapter }]; } });
/** @title Date range picker with custom a selection strategy */
export class DateRangePickerSelectionStrategyExample {
}
DateRangePickerSelectionStrategyExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DateRangePickerSelectionStrategyExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerSelectionStrategyExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: DateRangePickerSelectionStrategyExample, selector: "date-range-picker-selection-strategy-example", providers: [
        {
            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: FiveDayRangeSelectionStrategy,
        },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n", dependencies: [{ kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i3.MatLegacyFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLegacyHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatLegacyLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatLegacySuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DateRangePickerSelectionStrategyExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-selection-strategy-example', providers: [
                        {
                            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                            useClass: FiveDayRangeSelectionStrategy,
                        },
                    ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5L2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFFTCxTQUFTLEVBQ1QsaUNBQWlDLEdBQ2xDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBR3RDLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQUcsQ0FBQztJQUVwRCxpQkFBaUIsQ0FBQyxJQUFjO1FBQzlCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxhQUFhLENBQUMsVUFBb0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLG1CQUFtQixDQUFDLElBQWM7UUFDeEMsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLFNBQVMsQ0FBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksU0FBUyxDQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzsrSEFuQlUsNkJBQTZCO21JQUE3Qiw2QkFBNkI7Z0dBQTdCLDZCQUE2QjtrQkFEekMsVUFBVTs7QUF1QlgsZ0VBQWdFO0FBV2hFLE1BQU0sT0FBTyx1Q0FBdUM7O3lJQUF2Qyx1Q0FBdUM7NkhBQXZDLHVDQUF1Qyx1RUFQdkM7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQ0FBaUM7WUFDMUMsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QztLQUNGLDBCQ3hDSCwwZEFVQTtnR0RnQ2EsdUNBQXVDO2tCQVZuRCxTQUFTOytCQUNFLDhDQUE4QyxhQUU3Qzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUNBQWlDOzRCQUMxQyxRQUFRLEVBQUUsNkJBQTZCO3lCQUN4QztxQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0RGF0ZVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3ksXG4gIERhdGVSYW5nZSxcbiAgTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpdmVEYXlSYW5nZVNlbGVjdGlvblN0cmF0ZWd5PEQ+IGltcGxlbWVudHMgTWF0RGF0ZVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3k8RD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RD4pIHt9XG5cbiAgc2VsZWN0aW9uRmluaXNoZWQoZGF0ZTogRCB8IG51bGwpOiBEYXRlUmFuZ2U8RD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVGaXZlRGF5UmFuZ2UoZGF0ZSk7XG4gIH1cblxuICBjcmVhdGVQcmV2aWV3KGFjdGl2ZURhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRml2ZURheVJhbmdlKGFjdGl2ZURhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRml2ZURheVJhbmdlKGRhdGU6IEQgfCBudWxsKTogRGF0ZVJhbmdlPEQ+IHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhckRheXMoZGF0ZSwgLTIpO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIDIpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlUmFuZ2U8RD4oc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlUmFuZ2U8RD4obnVsbCwgbnVsbCk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciB3aXRoIGN1c3RvbSBhIHNlbGVjdGlvbiBzdHJhdGVneSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS1leGFtcGxlLmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBNQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1ksXG4gICAgICB1c2VDbGFzczogRml2ZURheVJhbmdlU2VsZWN0aW9uU3RyYXRlZ3ksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyU2VsZWN0aW9uU3RyYXRlZ3lFeGFtcGxlIHt9XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5FbnRlciBhIGRhdGUgcmFuZ2U8L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0IFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1oaW50Pk1NL0REL1lZWVkg4oCTIE1NL0REL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19