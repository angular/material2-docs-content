import * as tslib_1 from "tslib";
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
    DatepickerCustomHeaderExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-custom-header-example',
            template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], DatepickerCustomHeaderExample);
    return DatepickerCustomHeaderExample;
}());
export { DatepickerCustomHeaderExample };
/** Custom header component for datepicker. */
var ExampleHeader = /** @class */ (function () {
    function ExampleHeader(calendar, dateAdapter, dateFormats, cdr) {
        this.calendar = calendar;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.destroyed = new Subject();
        calendar.stateChanges
            .pipe(takeUntil(this.destroyed))
            .subscribe(function () { return cdr.markForCheck(); });
    }
    ExampleHeader.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    Object.defineProperty(ExampleHeader.prototype, "periodLabel", {
        get: function () {
            return this.dateAdapter
                .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    ExampleHeader.prototype.previousClicked = function (mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    };
    ExampleHeader.prototype.nextClicked = function (mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    };
    ExampleHeader = tslib_1.__decorate([
        Component({
            selector: 'example-header',
            template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "]
        }),
        tslib_1.__param(2, Inject(MAT_DATE_FORMATS)),
        tslib_1.__metadata("design:paramtypes", [MatCalendar, DateAdapter, Object, ChangeDetectorRef])
    ], ExampleHeader);
    return ExampleHeader;
}());
export { ExampleHeader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBQ3JGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLG9EQUFvRDtBQU1wRDtJQUxBO1FBTUUsa0JBQWEsR0FBRyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQUZZLDZCQUE2QjtRQUx6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLHdUQUFvRDtZQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csNkJBQTZCLENBRXpDO0lBQUQsb0NBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSw2QkFBNkI7QUFJMUMsOENBQThDO0FBMEM5QztJQUdFLHVCQUNZLFFBQXdCLEVBQVUsV0FBMkIsRUFDbkMsV0FBMkIsRUFBRSxHQUFzQjtRQUQ3RSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFKekQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFLdEMsUUFBUSxDQUFDLFlBQVk7YUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0JBQUksc0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVc7aUJBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7aUJBQ3pFLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQXNCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQWhDVSxhQUFhO1FBekN6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBbUIxQixRQUFRLEVBQUUsb3pCQWtCVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3FCQXJDdEMsZ1RBaUJSO1NBcUJGLENBQUM7UUFNSyxtQkFBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtpREFEUCxXQUFXLEVBQTBCLFdBQVcsVUFDRSxpQkFBaUI7T0FMOUUsYUFBYSxDQWlDekI7SUFBRCxvQkFBQztDQUFBLEFBakNELElBaUNDO1NBakNZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENhbGVuZGFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1hdERhdGVGb3JtYXRzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBjdXN0b20gY2FsZW5kYXIgaGVhZGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ3VzdG9tSGVhZGVyRXhhbXBsZSB7XG4gIGV4YW1wbGVIZWFkZXIgPSBFeGFtcGxlSGVhZGVyO1xufVxuXG4vKiogQ3VzdG9tIGhlYWRlciBjb21wb25lbnQgZm9yIGRhdGVwaWNrZXIuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWhlYWRlcicsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZS1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB9XG5cbiAgICAuZXhhbXBsZS1oZWFkZXItbGFiZWwge1xuICAgICAgZmxleDogMTtcbiAgICAgIGhlaWdodDogMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZXhhbXBsZS1kb3VibGUtYXJyb3cgLm1hdC1pY29uIHtcbiAgICAgIG1hcmdpbjogLTIyJTtcbiAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWhlYWRlclwiPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWRvdWJsZS1hcnJvd1wiIChjbGljayk9XCJwcmV2aW91c0NsaWNrZWQoJ3llYXInKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgnbW9udGgnKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXItbGFiZWxcIj57e3BlcmlvZExhYmVsfX08L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwibmV4dENsaWNrZWQoJ21vbnRoJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWRvdWJsZS1hcnJvd1wiIChjbGljayk9XCJuZXh0Q2xpY2tlZCgneWVhcicpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVIZWFkZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNhbGVuZGFyOiBNYXRDYWxlbmRhcjxEPiwgcHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RD4sXG4gICAgICBASW5qZWN0KE1BVF9EQVRFX0ZPUk1BVFMpIHByaXZhdGUgZGF0ZUZvcm1hdHM6IE1hdERhdGVGb3JtYXRzLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgY2FsZW5kYXIuc3RhdGVDaGFuZ2VzXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0IHBlcmlvZExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVBZGFwdGVyXG4gICAgICAgIC5mb3JtYXQodGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLmRhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyTGFiZWwpXG4gICAgICAgIC50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICB9XG5cbiAgcHJldmlvdXNDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUgPSBtb2RlID09PSAnbW9udGgnID9cbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKSA6XG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKTtcbiAgfVxuXG4gIG5leHRDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUgPSBtb2RlID09PSAnbW9udGgnID9cbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIDEpIDpcbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSwgMSk7XG4gIH1cbn1cbiJdfQ==