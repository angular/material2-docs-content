import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/datepicker";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
/** @title Datepicker with custom calendar header */
export class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
}
DatepickerCustomHeaderExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DatepickerCustomHeaderExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerCustomHeaderExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: DatepickerCustomHeaderExample, selector: "datepicker-custom-header-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n", dependencies: [{ kind: "component", type: i1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix]" }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DatepickerCustomHeaderExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-header-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n" }]
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
}
ExampleHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ExampleHeader, deps: [{ token: i1.MatCalendar }, { token: i4.DateAdapter }, { token: MAT_DATE_FORMATS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ExampleHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ExampleHeader, selector: "example-header", ngImport: i0, template: `
    <div class="example-header">
      <button mat-icon-button class="example-double-arrow" (click)="previousClicked('year')">
        <mat-icon>keyboard_arrow_left</mat-icon>
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button class="example-double-arrow" (click)="nextClicked('year')">
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `, isInline: true, styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "], dependencies: [{ kind: "component", type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ExampleHeader, decorators: [{
            type: Component,
            args: [{ selector: 'example-header', template: `
    <div class="example-header">
      <button mat-icon-button class="example-double-arrow" (click)="previousClicked('year')">
        <mat-icon>keyboard_arrow_left</mat-icon>
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button class="example-double-arrow" (click)="nextClicked('year')">
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "] }]
        }], ctorParameters: function () { return [{ type: i1.MatCalendar }, { type: i4.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFFekMsb0RBQW9EO0FBTXBELE1BQU0sT0FBTyw2QkFBNkI7SUFMMUM7UUFNRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztLQUMvQjs7MEhBRlksNkJBQTZCOzhHQUE3Qiw2QkFBNkIsd0VDbEIxQyxxV0FPQTsyRkRXYSw2QkFBNkI7a0JBTHpDLFNBQVM7K0JBQ0Usa0NBQWtDLG1CQUUzQix1QkFBdUIsQ0FBQyxNQUFNOztBQU1qRCw4Q0FBOEM7QUE0QzlDLE1BQU0sT0FBTyxhQUFhO0lBR3hCLFlBQ1UsU0FBeUIsRUFDekIsWUFBNEIsRUFDRixZQUE0QixFQUM5RCxHQUFzQjtRQUhkLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUNGLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUx4RCxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVF2QyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7YUFDM0UsaUJBQWlCLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQXNCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUN2QixJQUFJLEtBQUssT0FBTztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQXNCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUN2QixJQUFJLEtBQUssT0FBTztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OzBHQW5DVSxhQUFhLHdFQU1kLGdCQUFnQjs4RkFOZixhQUFhLHNEQXJCZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUOzJGQUdVLGFBQWE7a0JBM0N6QixTQUFTOytCQUNFLGdCQUFnQixZQXFCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTs7MEJBUTVDLE1BQU07MkJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2FsZW5kYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTWF0RGF0ZUZvcm1hdHN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGN1c3RvbSBjYWxlbmRhciBoZWFkZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDdXN0b21IZWFkZXJFeGFtcGxlIHtcbiAgZXhhbXBsZUhlYWRlciA9IEV4YW1wbGVIZWFkZXI7XG59XG5cbi8qKiBDdXN0b20gaGVhZGVyIGNvbXBvbmVudCBmb3IgZGF0ZXBpY2tlci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtaGVhZGVyJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5leGFtcGxlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIH1cblxuICAgIC5leGFtcGxlLWhlYWRlci1sYWJlbCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5leGFtcGxlLWRvdWJsZS1hcnJvdyAubWF0LWljb24ge1xuICAgICAgbWFyZ2luOiAtMjIlO1xuICAgIH1cbiAgYCxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1oZWFkZXJcIj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1kb3VibGUtYXJyb3dcIiAoY2xpY2spPVwicHJldmlvdXNDbGlja2VkKCd5ZWFyJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJwcmV2aW91c0NsaWNrZWQoJ21vbnRoJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtaGVhZGVyLWxhYmVsXCI+e3twZXJpb2RMYWJlbH19PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIm5leHRDbGlja2VkKCdtb250aCcpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1kb3VibGUtYXJyb3dcIiAoY2xpY2spPVwibmV4dENsaWNrZWQoJ3llYXInKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlSGVhZGVyPEQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jYWxlbmRhcjogTWF0Q2FsZW5kYXI8RD4sXG4gICAgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPEQ+LFxuICAgIEBJbmplY3QoTUFUX0RBVEVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGVGb3JtYXRzLFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIF9jYWxlbmRhci5zdGF0ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IGNkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0IHBlcmlvZExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlclxuICAgICAgLmZvcm1hdCh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsKVxuICAgICAgLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gIH1cblxuICBwcmV2aW91c0NsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgIHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUgPVxuICAgICAgbW9kZSA9PT0gJ21vbnRoJ1xuICAgICAgICA/IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKVxuICAgICAgICA6IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgLTEpO1xuICB9XG5cbiAgbmV4dENsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgIHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUgPVxuICAgICAgbW9kZSA9PT0gJ21vbnRoJ1xuICAgICAgICA/IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIDEpXG4gICAgICAgIDogdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAxKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+Q3VzdG9tIGNhbGVuZGFyIGhlYWRlcjwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCI+XG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIgW2NhbGVuZGFySGVhZGVyQ29tcG9uZW50XT1cImV4YW1wbGVIZWFkZXJcIj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==