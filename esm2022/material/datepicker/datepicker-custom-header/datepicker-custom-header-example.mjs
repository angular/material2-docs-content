import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, } from '@angular/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule, } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
/** @title Datepicker with custom calendar header */
export class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DatepickerCustomHeaderExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: DatepickerCustomHeaderExample, isStandalone: true, selector: "datepicker-custom-header-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DatepickerCustomHeaderExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-header-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n" }]
        }] });
/** Custom header component for datepicker. */
export class ExampleHeader {
    constructor(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => cdr.markForCheck());
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    get periodLabel() {
        return this._dateAdapter
            .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }
    previousClicked(mode) {
        this._calendar.activeDate =
            mode === 'month'
                ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
                : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }
    nextClicked(mode) {
        this._calendar.activeDate =
            mode === 'month'
                ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
                : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ExampleHeader, deps: [{ token: i3.MatCalendar }, { token: i4.DateAdapter }, { token: MAT_DATE_FORMATS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: ExampleHeader, isStandalone: true, selector: "example-header", ngImport: i0, template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `, isInline: true, styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n  "], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ExampleHeader, decorators: [{
            type: Component,
            args: [{ selector: 'example-header', template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatButtonModule, MatIconModule], styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n  "] }]
        }], ctorParameters: function () { return [{ type: i3.MatCalendar }, { type: i4.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFFaEIsbUJBQW1CLEdBQ3BCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBRWhFLG9EQUFvRDtBQVFwRCxNQUFNLE9BQU8sNkJBQTZCO0lBUDFDO1FBUUUsa0JBQWEsR0FBRyxhQUFhLENBQUM7S0FDL0I7OEdBRlksNkJBQTZCO2tHQUE3Qiw2QkFBNkIsNEZDN0IxQyxxVkFPQSwyQ0RvQlksa0JBQWtCLG1nQkFBRSxjQUFjLDBXQUFFLG1CQUFtQiw4QkFBRSxtQkFBbUI7OzJGQUUzRSw2QkFBNkI7a0JBUHpDLFNBQVM7K0JBQ0Usa0NBQWtDLG1CQUUzQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQzs7QUFNekYsOENBQThDO0FBd0M5QyxNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUNVLFNBQXlCLEVBQ3pCLFlBQTRCLEVBQ0YsWUFBNEIsRUFDOUQsR0FBc0I7UUFIZCxjQUFTLEdBQVQsU0FBUyxDQUFnQjtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDRixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFMeEQsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFRdkMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2FBQzNFLGlCQUFpQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFzQjtRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDdkIsSUFBSSxLQUFLLE9BQU87Z0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFzQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDdkIsSUFBSSxLQUFLLE9BQU87Z0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzhHQW5DVSxhQUFhLHdFQU1kLGdCQUFnQjtrR0FOZixhQUFhLDBFQXJCZDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVCxrVEFHUyxlQUFlLDJJQUFFLGFBQWE7OzJGQUU3QixhQUFhO2tCQXZDekIsU0FBUzsrQkFDRSxnQkFBZ0IsWUFpQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7OzBCQVF0QyxNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENhbGVuZGFyLCBNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7XG4gIERhdGVBZGFwdGVyLFxuICBNQVRfREFURV9GT1JNQVRTLFxuICBNYXREYXRlRm9ybWF0cyxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGNhbGVuZGFyIGhlYWRlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ3VzdG9tSGVhZGVyRXhhbXBsZSB7XG4gIGV4YW1wbGVIZWFkZXIgPSBFeGFtcGxlSGVhZGVyO1xufVxuXG4vKiogQ3VzdG9tIGhlYWRlciBjb21wb25lbnQgZm9yIGRhdGVwaWNrZXIuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWhlYWRlcicsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAuZXhhbXBsZS1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB9XG5cbiAgICAuZXhhbXBsZS1oZWFkZXItbGFiZWwge1xuICAgICAgZmxleDogMTtcbiAgICAgIGhlaWdodDogMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaGVhZGVyXCI+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicHJldmlvdXNDbGlja2VkKCd5ZWFyJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2RvdWJsZV9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgnbW9udGgnKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXItbGFiZWxcIj57e3BlcmlvZExhYmVsfX08L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwibmV4dENsaWNrZWQoJ21vbnRoJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIm5leHRDbGlja2VkKCd5ZWFyJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2RvdWJsZV9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlSGVhZGVyPEQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jYWxlbmRhcjogTWF0Q2FsZW5kYXI8RD4sXG4gICAgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPEQ+LFxuICAgIEBJbmplY3QoTUFUX0RBVEVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGVGb3JtYXRzLFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIF9jYWxlbmRhci5zdGF0ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IGNkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0IHBlcmlvZExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlclxuICAgICAgLmZvcm1hdCh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsKVxuICAgICAgLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gIH1cblxuICBwcmV2aW91c0NsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgIHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUgPVxuICAgICAgbW9kZSA9PT0gJ21vbnRoJ1xuICAgICAgICA/IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKVxuICAgICAgICA6IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgLTEpO1xuICB9XG5cbiAgbmV4dENsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgIHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUgPVxuICAgICAgbW9kZSA9PT0gJ21vbnRoJ1xuICAgICAgICA/IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIDEpXG4gICAgICAgIDogdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAxKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkN1c3RvbSBjYWxlbmRhciBoZWFkZXI8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWhpbnQ+TU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlciBbY2FsZW5kYXJIZWFkZXJDb21wb25lbnRdPVwiZXhhbXBsZUhlYWRlclwiPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19