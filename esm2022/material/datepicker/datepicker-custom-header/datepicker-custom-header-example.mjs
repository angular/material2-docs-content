import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, } from '@angular/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, provideNativeDateAdapter, } from '@angular/material/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: DatepickerCustomHeaderExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: DatepickerCustomHeaderExample, isStandalone: true, selector: "datepicker-custom-header-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: DatepickerCustomHeaderExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-header-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule], template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n" }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: ExampleHeader, deps: [{ token: i3.MatCalendar }, { token: i4.DateAdapter }, { token: MAT_DATE_FORMATS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0", type: ExampleHeader, isStandalone: true, selector: "example-header", ngImport: i0, template: `
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0", ngImport: i0, type: ExampleHeader, decorators: [{
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
        }], ctorParameters: () => [{ type: i3.MatCalendar }, { type: i4.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: i0.ChangeDetectorRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDOUUsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFFaEIsd0JBQXdCLEdBQ3pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBRWhFLG9EQUFvRDtBQVNwRCxNQUFNLE9BQU8sNkJBQTZCO0lBUjFDO1FBU0Usa0JBQWEsR0FBRyxhQUFhLENBQUM7S0FDL0I7cUhBRlksNkJBQTZCO3lHQUE3Qiw2QkFBNkIsK0VBSDdCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQywwQkMzQnpDLHFWQU9BLDJDRHFCWSxrQkFBa0IsbWdCQUFFLGNBQWMsMFdBQUUsbUJBQW1COztrR0FFdEQsNkJBQTZCO2tCQVJ6QyxTQUFTOytCQUNFLGtDQUFrQyxtQkFFM0IsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLGFBQ0wsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFdBQzlCLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixDQUFDOztBQU1wRSw4Q0FBOEM7QUFzQzlDLE1BQU0sT0FBTyxhQUFhO0lBR3hCLFlBQ1UsU0FBeUIsRUFDekIsWUFBNEIsRUFDRixZQUE0QixFQUM5RCxHQUFzQjtRQUhkLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUNGLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUx4RCxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVF2QyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7YUFDM0UsaUJBQWlCLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQXNCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUN2QixJQUFJLEtBQUssT0FBTztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQXNCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUN2QixJQUFJLEtBQUssT0FBTztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7cUhBbkNVLGFBQWEsd0VBTWQsZ0JBQWdCO3lHQU5mLGFBQWEsMEVBckJkOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULGtUQUdTLGVBQWUsMklBQUUsYUFBYTs7a0dBRTdCLGFBQWE7a0JBckN6QixTQUFTOytCQUNFLGdCQUFnQixZQWVoQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDOzswQkFRdEMsTUFBTTsyQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDYWxlbmRhciwgTWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge1xuICBEYXRlQWRhcHRlcixcbiAgTUFUX0RBVEVfRk9STUFUUyxcbiAgTWF0RGF0ZUZvcm1hdHMsXG4gIHByb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGNhbGVuZGFyIGhlYWRlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZU5hdGl2ZURhdGVBZGFwdGVyKCldLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDdXN0b21IZWFkZXJFeGFtcGxlIHtcbiAgZXhhbXBsZUhlYWRlciA9IEV4YW1wbGVIZWFkZXI7XG59XG5cbi8qKiBDdXN0b20gaGVhZGVyIGNvbXBvbmVudCBmb3IgZGF0ZXBpY2tlci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtaGVhZGVyJyxcbiAgc3R5bGVzOiBgXG4gICAgLmV4YW1wbGUtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgfVxuXG4gICAgLmV4YW1wbGUtaGVhZGVyLWxhYmVsIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBgLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWhlYWRlclwiPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgneWVhcicpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9kb3VibGVfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJwcmV2aW91c0NsaWNrZWQoJ21vbnRoJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtaGVhZGVyLWxhYmVsXCI+e3twZXJpb2RMYWJlbH19PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIm5leHRDbGlja2VkKCdtb250aCcpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJuZXh0Q2xpY2tlZCgneWVhcicpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9kb3VibGVfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZUhlYWRlcjxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2FsZW5kYXI6IE1hdENhbGVuZGFyPEQ+LFxuICAgIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEPixcbiAgICBASW5qZWN0KE1BVF9EQVRFX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBNYXREYXRlRm9ybWF0cyxcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBfY2FsZW5kYXIuc3RhdGVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiBjZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldCBwZXJpb2RMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXJcbiAgICAgIC5mb3JtYXQodGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJMYWJlbClcbiAgICAgIC50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICB9XG5cbiAgcHJldmlvdXNDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlID1cbiAgICAgIG1vZGUgPT09ICdtb250aCdcbiAgICAgICAgPyB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAtMSlcbiAgICAgICAgOiB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKTtcbiAgfVxuXG4gIG5leHRDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlID1cbiAgICAgIG1vZGUgPT09ICdtb250aCdcbiAgICAgICAgPyB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAxKVxuICAgICAgICA6IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgMSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DdXN0b20gY2FsZW5kYXIgaGVhZGVyPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1oaW50Pk1NL0REL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIgW2NhbGVuZGFySGVhZGVyQ29tcG9uZW50XT1cImV4YW1wbGVIZWFkZXJcIj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==