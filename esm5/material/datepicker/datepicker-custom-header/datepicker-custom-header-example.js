import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/** @title Datepicker with custom calendar header */
var DatepickerCustomHeaderExample = /** @class */ (function () {
    function DatepickerCustomHeaderExample() {
        this.exampleHeader = ExampleHeader;
    }
    DatepickerCustomHeaderExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-custom-header-example',
                    template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return DatepickerCustomHeaderExample;
}());
export { DatepickerCustomHeaderExample };
/** Custom header component for datepicker. */
var ExampleHeader = /** @class */ (function () {
    function ExampleHeader(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe(function () { return cdr.markForCheck(); });
    }
    ExampleHeader.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    Object.defineProperty(ExampleHeader.prototype, "periodLabel", {
        get: function () {
            return this._dateAdapter
                .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    ExampleHeader.prototype.previousClicked = function (mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    };
    ExampleHeader.prototype.nextClicked = function (mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    };
    ExampleHeader.decorators = [
        { type: Component, args: [{
                    selector: 'example-header',
                    template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    ExampleHeader.ctorParameters = function () { return [
        { type: MatCalendar },
        { type: DateAdapter },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] }] },
        { type: ChangeDetectorRef }
    ]; };
    return ExampleHeader;
}());
export { ExampleHeader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QyxvREFBb0Q7QUFDcEQ7SUFBQTtRQU1FLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1Qyx3VEFBb0Q7b0JBQ3BELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7SUFHRCxvQ0FBQztDQUFBLEFBUEQsSUFPQztTQUZZLDZCQUE2QjtBQUkxQyw4Q0FBOEM7QUFDOUM7SUE0Q0UsdUJBQ1ksU0FBeUIsRUFBVSxZQUE0QixFQUNyQyxZQUE0QixFQUFFLEdBQXNCO1FBRDlFLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQ3JDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUoxRCxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUt2QyxTQUFTLENBQUMsWUFBWTthQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTLENBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSxzQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWTtpQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztpQkFDM0UsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBc0I7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQXNCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBbUIxQixRQUFRLEVBQUUsb3pCQWtCVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFyQ3RDLGdUQWlCUjtpQkFxQkY7Ozs7Z0JBeERPLFdBQVc7Z0JBQ1gsV0FBVztnREE2RFosTUFBTSxTQUFDLGdCQUFnQjtnQkFuRTVCLGlCQUFpQjs7SUErRm5CLG9CQUFDO0NBQUEsQUExRUQsSUEwRUM7U0FqQ1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2FsZW5kYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTWF0RGF0ZUZvcm1hdHN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGN1c3RvbSBjYWxlbmRhciBoZWFkZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDdXN0b21IZWFkZXJFeGFtcGxlIHtcbiAgZXhhbXBsZUhlYWRlciA9IEV4YW1wbGVIZWFkZXI7XG59XG5cbi8qKiBDdXN0b20gaGVhZGVyIGNvbXBvbmVudCBmb3IgZGF0ZXBpY2tlci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtaGVhZGVyJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIH1cblxuICAgIC5leGFtcGxlLWhlYWRlci1sYWJlbCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5leGFtcGxlLWRvdWJsZS1hcnJvdyAubWF0LWljb24ge1xuICAgICAgbWFyZ2luOiAtMjIlO1xuICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaGVhZGVyXCI+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtZG91YmxlLWFycm93XCIgKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgneWVhcicpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicHJldmlvdXNDbGlja2VkKCdtb250aCcpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWhlYWRlci1sYWJlbFwiPnt7cGVyaW9kTGFiZWx9fTwvc3Bhbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJuZXh0Q2xpY2tlZCgnbW9udGgnKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtZG91YmxlLWFycm93XCIgKGNsaWNrKT1cIm5leHRDbGlja2VkKCd5ZWFyJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZUhlYWRlcjxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jYWxlbmRhcjogTWF0Q2FsZW5kYXI8RD4sIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEPixcbiAgICAgIEBJbmplY3QoTUFUX0RBVEVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGVGb3JtYXRzLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgX2NhbGVuZGFyLnN0YXRlQ2hhbmdlc1xuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiBjZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldCBwZXJpb2RMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXJcbiAgICAgICAgLmZvcm1hdCh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsKVxuICAgICAgICAudG9Mb2NhbGVVcHBlckNhc2UoKTtcbiAgfVxuXG4gIHByZXZpb3VzQ2xpY2tlZChtb2RlOiAnbW9udGgnIHwgJ3llYXInKSB7XG4gICAgdGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSA9IG1vZGUgPT09ICdtb250aCcgP1xuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAtMSkgOlxuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKTtcbiAgfVxuXG4gIG5leHRDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlID0gbW9kZSA9PT0gJ21vbnRoJyA/XG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIDEpIDpcbiAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAxKTtcbiAgfVxufVxuIl19