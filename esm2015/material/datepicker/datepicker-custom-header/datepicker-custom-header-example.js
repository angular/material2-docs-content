/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
/**
 * \@title Datepicker with custom calendar header
 */
export class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
}
DatepickerCustomHeaderExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-custom-header-example',
                templateUrl: 'datepicker-custom-header-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ DatepickerCustomHeaderExample.ɵfac = function DatepickerCustomHeaderExample_Factory(t) { return new (t || DatepickerCustomHeaderExample)(); };
/** @nocollapse */ DatepickerCustomHeaderExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerCustomHeaderExample, selectors: [["datepicker-custom-header-example"]], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "calendarHeaderComponent"], ["picker", ""]], template: function DatepickerCustomHeaderExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Custom calendar header");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 0);
        i0.ɵɵelement(4, "mat-datepicker-toggle", 1);
        i0.ɵɵelement(5, "mat-datepicker", 2, 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r4 = i0.ɵɵreference(6);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matDatepicker", _r4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("calendarHeaderComponent", ctx.exampleHeader);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-header-example',
                templateUrl: 'datepicker-custom-header-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerCustomHeaderExample.prototype.exampleHeader;
}
/**
 * Custom header component for datepicker.
 * @template D
 */
export class ExampleHeader {
    /**
     * @param {?} _calendar
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} cdr
     */
    constructor(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * @return {?}
     */
    get periodLabel() {
        return this._dateAdapter
            .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    previousClicked(mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    nextClicked(mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }
}
ExampleHeader.decorators = [
    { type: Component, args: [{
                selector: 'example-header',
                styles: [`
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }

    .example-double-arrow .mat-icon {
      margin: -22%;
    }
  `],
                template: `
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
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
ExampleHeader.ctorParameters = () => [
    { type: MatCalendar },
    { type: DateAdapter },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
/** @nocollapse */ ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(i0.ɵɵdirectiveInject(i3.MatCalendar), i0.ɵɵdirectiveInject(i4.DateAdapter), i0.ɵɵdirectiveInject(MAT_DATE_FORMATS), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ ExampleHeader.ɵcmp = i0.ɵɵdefineComponent({ type: ExampleHeader, selectors: [["example-header"]], decls: 19, vars: 1, consts: [[1, "example-header"], ["mat-icon-button", "", 1, "example-double-arrow", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "example-header-label"]], template: function ExampleHeader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_1_listener($event) { return ctx.previousClicked("year"); });
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "keyboard_arrow_left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, "keyboard_arrow_left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_6_listener($event) { return ctx.previousClicked("month"); });
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, "keyboard_arrow_left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "span", 3);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 2);
        i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_11_listener($event) { return ctx.nextClicked("month"); });
        i0.ɵɵelementStart(12, "mat-icon");
        i0.ɵɵtext(13, "keyboard_arrow_right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 1);
        i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_14_listener($event) { return ctx.nextClicked("year"); });
        i0.ɵɵelementStart(15, "mat-icon");
        i0.ɵɵtext(16, "keyboard_arrow_right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-icon");
        i0.ɵɵtext(18, "keyboard_arrow_right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate(ctx.periodLabel);
    } }, directives: [i5.MatButton, i6.MatIcon], styles: [".example-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n      margin: -22%;\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExampleHeader, [{
        type: Component,
        args: [{
                selector: 'example-header',
                styles: [`
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }

    .example-double-arrow .mat-icon {
      margin: -22%;
    }
  `],
                template: `
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
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i3.MatCalendar }, { type: i4.DateAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATE_FORMATS]
            }] }, { type: i0.ChangeDetectorRef }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._calendar;
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    ExampleHeader.prototype._dateFormats;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sd0JBQXdCLENBQUM7QUFDckYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBUXpDLE1BQU0sT0FBTyw2QkFBNkI7SUFMMUM7UUFNRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztLQUMvQjs7O1lBUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzswR0FDWSw2QkFBNkI7a0VBQTdCLDZCQUE2QjtRQ2xCMUMsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLHNDQUFzQjtRQUFBLGlCQUFZO1FBQzdDLDJCQUNBO1FB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QUMxQyxpQkFBUztRQUNULGlDQUNFO1FBRHNCLGdHQUFTLG9CQUFnQixPQUFPLENBQUMsSUFBQztRQUN4RCxnQ0FBVTtRQUFBLG1DQUFtQjtRQUFBLGlCQUFXO1FBQzFDLGlCQUFTO1FBQ1QsK0JBQW1DO1FBQUEsYUFBZTtRQUFBLGlCQUFPO1FBQ3pELGtDQUNFO1FBRHNCLGlHQUFTLGdCQUFZLE9BQU8sQ0FBQyxJQUFDO1FBQ3BELGlDQUFVO1FBQUEscUNBQW9CO1FBQUEsaUJBQVc7UUFDM0MsaUJBQVM7UUFDVCxrQ0FDRTtRQURtRCxpR0FBUyxnQkFBWSxNQUFNLENBQUMsSUFBQztRQUNoRixpQ0FBVTtRQUFBLHFDQUFvQjtRQUFBLGlCQUFXO1FBQ3pDLGlDQUFVO1FBQUEscUNBQW9CO1FBQUEsaUJBQVc7UUFDM0MsaUJBQVM7UUFDWCxpQkFBTTs7UUFSK0IsZ0JBQWU7UUFBZixxQ0FBZTs7a0RBWTNDLGFBQWE7Y0F6Q3pCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlIsQ0FBQztnQkFDRixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBTU0sTUFBTTt1QkFBQyxnQkFBZ0I7Ozs7Ozs7SUFKNUIsbUNBQXlDOzs7OztJQUdyQyxrQ0FBaUM7Ozs7O0lBQUUscUNBQW9DOzs7OztJQUN2RSxxQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENhbGVuZGFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1hdERhdGVGb3JtYXRzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBjdXN0b20gY2FsZW5kYXIgaGVhZGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ3VzdG9tSGVhZGVyRXhhbXBsZSB7XG4gIGV4YW1wbGVIZWFkZXIgPSBFeGFtcGxlSGVhZGVyO1xufVxuXG4vKiogQ3VzdG9tIGhlYWRlciBjb21wb25lbnQgZm9yIGRhdGVwaWNrZXIuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWhlYWRlcicsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZS1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB9XG5cbiAgICAuZXhhbXBsZS1oZWFkZXItbGFiZWwge1xuICAgICAgZmxleDogMTtcbiAgICAgIGhlaWdodDogMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZXhhbXBsZS1kb3VibGUtYXJyb3cgLm1hdC1pY29uIHtcbiAgICAgIG1hcmdpbjogLTIyJTtcbiAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWhlYWRlclwiPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWRvdWJsZS1hcnJvd1wiIChjbGljayk9XCJwcmV2aW91c0NsaWNrZWQoJ3llYXInKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgnbW9udGgnKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXItbGFiZWxcIj57e3BlcmlvZExhYmVsfX08L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwibmV4dENsaWNrZWQoJ21vbnRoJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWRvdWJsZS1hcnJvd1wiIChjbGljayk9XCJuZXh0Q2xpY2tlZCgneWVhcicpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVIZWFkZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY2FsZW5kYXI6IE1hdENhbGVuZGFyPEQ+LCBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RD4sXG4gICAgICBASW5qZWN0KE1BVF9EQVRFX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBNYXREYXRlRm9ybWF0cywgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIF9jYWxlbmRhci5zdGF0ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBnZXQgcGVyaW9kTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyXG4gICAgICAgIC5mb3JtYXQodGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJMYWJlbClcbiAgICAgICAgLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gIH1cblxuICBwcmV2aW91c0NsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgIHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUgPSBtb2RlID09PSAnbW9udGgnID9cbiAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgLTEpIDpcbiAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAtMSk7XG4gIH1cblxuICBuZXh0Q2xpY2tlZChtb2RlOiAnbW9udGgnIHwgJ3llYXInKSB7XG4gICAgdGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSA9IG1vZGUgPT09ICdtb250aCcgP1xuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAxKSA6XG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSwgMSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DdXN0b20gY2FsZW5kYXIgaGVhZGVyPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXIgW2NhbGVuZGFySGVhZGVyQ29tcG9uZW50XT1cImV4YW1wbGVIZWFkZXJcIj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==