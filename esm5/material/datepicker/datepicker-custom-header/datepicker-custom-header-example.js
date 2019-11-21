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
/** @title Datepicker with custom calendar header */
var DatepickerCustomHeaderExample = /** @class */ (function () {
    function DatepickerCustomHeaderExample() {
        this.exampleHeader = ExampleHeader;
    }
    DatepickerCustomHeaderExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-custom-header-example',
                    templateUrl: 'datepicker-custom-header-example.html',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    DatepickerCustomHeaderExample.ɵfac = function DatepickerCustomHeaderExample_Factory(t) { return new (t || DatepickerCustomHeaderExample)(); };
    DatepickerCustomHeaderExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerCustomHeaderExample, selectors: [["datepicker-custom-header-example"]], decls: 7, vars: 3, consts: [["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "calendarHeaderComponent"], ["picker", ""]], template: function DatepickerCustomHeaderExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Custom calendar header");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 0);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(5, "mat-datepicker", 2, 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r4 = i0.ɵɵreference(6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("calendarHeaderComponent", ctx.exampleHeader);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], encapsulation: 2, changeDetection: 0 });
    return DatepickerCustomHeaderExample;
}());
export { DatepickerCustomHeaderExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-header-example',
                templateUrl: 'datepicker-custom-header-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
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
                    styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                    template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ExampleHeader.ctorParameters = function () { return [
        { type: MatCalendar },
        { type: DateAdapter },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] }] },
        { type: ChangeDetectorRef }
    ]; };
    ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(i0.ɵɵdirectiveInject(i3.MatCalendar), i0.ɵɵdirectiveInject(i4.DateAdapter), i0.ɵɵdirectiveInject(MAT_DATE_FORMATS), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    ExampleHeader.ɵcmp = i0.ɵɵdefineComponent({ type: ExampleHeader, selectors: [["example-header"]], decls: 19, vars: 1, consts: [[1, "example-header"], ["mat-icon-button", "", 1, "example-double-arrow", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "example-header-label"]], template: function ExampleHeader_Template(rf, ctx) { if (rf & 1) {
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
    return ExampleHeader;
}());
export { ExampleHeader };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExampleHeader, [{
        type: Component,
        args: [{
                selector: 'example-header',
                styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i3.MatCalendar }, { type: i4.DateAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATE_FORMATS]
            }] }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFFekMsb0RBQW9EO0FBQ3BEO0lBQUE7UUFNRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztLQUMvQjs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7b0JBQ3BELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OEdBQ1ksNkJBQTZCO3NFQUE3Qiw2QkFBNkI7WUNsQjFDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxzQ0FBc0I7WUFBQSxp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VTtZQUFBLG1DQUFtQjtZQUFBLGlCQUFXO1lBQzFDLGlCQUFTO1lBQ1QsaUNBQ0U7WUFEc0IsZ0dBQVMsb0JBQWdCLE9BQU8sQ0FBQyxJQUFDO1lBQ3hELGdDQUFVO1lBQUEsbUNBQW1CO1lBQUEsaUJBQVc7WUFDMUMsaUJBQVM7WUFDVCwrQkFBbUM7WUFBQSxhQUFlO1lBQUEsaUJBQU87WUFDekQsa0NBQ0U7WUFEc0IsaUdBQVMsZ0JBQVksT0FBTyxDQUFDLElBQUM7WUFDcEQsaUNBQVU7WUFBQSxxQ0FBb0I7WUFBQSxpQkFBVztZQUMzQyxpQkFBUztZQUNULGtDQUNFO1lBRG1ELGlHQUFTLGdCQUFZLE1BQU0sQ0FBQyxJQUFDO1lBQ2hGLGlDQUFVO1lBQUEscUNBQW9CO1lBQUEsaUJBQVc7WUFDekMsaUNBQVU7WUFBQSxxQ0FBb0I7WUFBQSxpQkFBVztZQUMzQyxpQkFBUztZQUNYLGlCQUFNOztZQVIrQixnQkFBZTtZQUFmLHFDQUFlOzt3QkFwRHhEO0NBaUdDLEFBMUVELElBMEVDO1NBakNZLGFBQWE7a0RBQWIsYUFBYTtjQXpDekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLE1BQU0sRUFBRSxDQUFDLGdUQWlCUixDQUFDO2dCQUNGLFFBQVEsRUFBRSxvekJBa0JUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkFNTSxNQUFNO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2FsZW5kYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTWF0RGF0ZUZvcm1hdHN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGN1c3RvbSBjYWxlbmRhciBoZWFkZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDdXN0b21IZWFkZXJFeGFtcGxlIHtcbiAgZXhhbXBsZUhlYWRlciA9IEV4YW1wbGVIZWFkZXI7XG59XG5cbi8qKiBDdXN0b20gaGVhZGVyIGNvbXBvbmVudCBmb3IgZGF0ZXBpY2tlci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtaGVhZGVyJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIH1cblxuICAgIC5leGFtcGxlLWhlYWRlci1sYWJlbCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5leGFtcGxlLWRvdWJsZS1hcnJvdyAubWF0LWljb24ge1xuICAgICAgbWFyZ2luOiAtMjIlO1xuICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaGVhZGVyXCI+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtZG91YmxlLWFycm93XCIgKGNsaWNrKT1cInByZXZpb3VzQ2xpY2tlZCgneWVhcicpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicHJldmlvdXNDbGlja2VkKCdtb250aCcpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWhlYWRlci1sYWJlbFwiPnt7cGVyaW9kTGFiZWx9fTwvc3Bhbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJuZXh0Q2xpY2tlZCgnbW9udGgnKVwiPlxuICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtZG91YmxlLWFycm93XCIgKGNsaWNrKT1cIm5leHRDbGlja2VkKCd5ZWFyJylcIj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZUhlYWRlcjxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jYWxlbmRhcjogTWF0Q2FsZW5kYXI8RD4sIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEPixcbiAgICAgIEBJbmplY3QoTUFUX0RBVEVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGVGb3JtYXRzLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgX2NhbGVuZGFyLnN0YXRlQ2hhbmdlc1xuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiBjZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldCBwZXJpb2RMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXJcbiAgICAgICAgLmZvcm1hdCh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5Lm1vbnRoWWVhckxhYmVsKVxuICAgICAgICAudG9Mb2NhbGVVcHBlckNhc2UoKTtcbiAgfVxuXG4gIHByZXZpb3VzQ2xpY2tlZChtb2RlOiAnbW9udGgnIHwgJ3llYXInKSB7XG4gICAgdGhpcy5fY2FsZW5kYXIuYWN0aXZlRGF0ZSA9IG1vZGUgPT09ICdtb250aCcgP1xuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAtMSkgOlxuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKTtcbiAgfVxuXG4gIG5leHRDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlID0gbW9kZSA9PT0gJ21vbnRoJyA/XG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2NhbGVuZGFyLmFjdGl2ZURhdGUsIDEpIDpcbiAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9jYWxlbmRhci5hY3RpdmVEYXRlLCAxKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkN1c3RvbSBjYWxlbmRhciBoZWFkZXI8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlciBbY2FsZW5kYXJIZWFkZXJDb21wb25lbnRdPVwiZXhhbXBsZUhlYWRlclwiPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19