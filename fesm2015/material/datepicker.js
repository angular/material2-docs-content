import { NgForOf, NgIf, JsonPipe, CommonModule } from '@angular/common';
import { ɵɵdefineComponent, ɵɵgetCurrentView, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵtextInterpolate, Inject, ViewEncapsulation, ɵɵtemplate, ɵɵProvidersFeature, ɵɵpipe, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormControl, DefaultValueAccessor, NgControlStatus, FormControlDirective, FormGroup, NgControlStatusGroup, FormGroupDirective, FormControlName, NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInput, MatDatepicker, MatDatepickerToggle, MatCalendar, MatDatepickerToggleIcon, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply, MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _rollupMoment from 'moment';
import _rollupMoment__default, {  } from 'moment';

/** @title Datepicker open method */
class DatepickerApiExample {
}
DatepickerApiExample.ɵfac = function DatepickerApiExample_Factory(t) { return new (t || DatepickerApiExample)(); };
DatepickerApiExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerApiExample, selectors: [["datepicker-api-example"]], decls: 8, vars: 1, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"]], template: function DatepickerApiExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker", null, 2);
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function DatepickerApiExample_Template_button_click_6_listener() { ɵɵrestoreView(_r1); const _r0 = ɵɵreference(5); return _r0.open(); });
        ɵɵtext(7, "Open");
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(5);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepicker, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerApiExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-api-example',
                templateUrl: 'datepicker-api-example.html',
                styleUrls: ['datepicker-api-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker palette colors */
class DatepickerColorExample {
}
DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
DatepickerColorExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent", "appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Inherited calendar color");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-form-field", 0);
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Custom calendar color");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 1);
        ɵɵelement(11, "mat-datepicker-toggle", 2);
        ɵɵelement(12, "mat-datepicker", 4, 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        const _r1 = ɵɵreference(13);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(6);
        ɵɵproperty("matDatepicker", _r1);
        ɵɵadvance(1);
        ɵɵproperty("for", _r1);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerColorExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-color-example',
                templateUrl: 'datepicker-color-example.html',
                styleUrls: ['datepicker-color-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker with custom calendar header */
class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
}
DatepickerCustomHeaderExample.ɵfac = function DatepickerCustomHeaderExample_Factory(t) { return new (t || DatepickerCustomHeaderExample)(); };
DatepickerCustomHeaderExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerCustomHeaderExample, selectors: [["datepicker-custom-header-example"]], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "calendarHeaderComponent"], ["picker", ""]], template: function DatepickerCustomHeaderExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Custom calendar header");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", 3, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(1);
        ɵɵproperty("calendarHeaderComponent", ctx.exampleHeader);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-header-example',
                templateUrl: 'datepicker-custom-header-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
/** Custom header component for datepicker. */
class ExampleHeader {
    constructor(_calendar, _dateAdapter, _dateFormats, cdr) {
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._destroyed = new Subject();
        _calendar.stateChanges
            .pipe(takeUntil(this._destroyed))
            .subscribe(() => cdr.markForCheck());
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
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }
    nextClicked(mode) {
        this._calendar.activeDate = mode === 'month' ?
            this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }
}
ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(ɵɵdirectiveInject(MatCalendar), ɵɵdirectiveInject(DateAdapter), ɵɵdirectiveInject(MAT_DATE_FORMATS), ɵɵdirectiveInject(ChangeDetectorRef)); };
ExampleHeader.ɵcmp = ɵɵdefineComponent({ type: ExampleHeader, selectors: [["example-header"]], decls: 19, vars: 1, consts: [[1, "example-header"], ["mat-icon-button", "", 1, "example-double-arrow", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "example-header-label"]], template: function ExampleHeader_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_1_listener() { return ctx.previousClicked("year"); });
        ɵɵelementStart(2, "mat-icon");
        ɵɵtext(3, "keyboard_arrow_left");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-icon");
        ɵɵtext(5, "keyboard_arrow_left");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 2);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_6_listener() { return ctx.previousClicked("month"); });
        ɵɵelementStart(7, "mat-icon");
        ɵɵtext(8, "keyboard_arrow_left");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "span", 3);
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 2);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_11_listener() { return ctx.nextClicked("month"); });
        ɵɵelementStart(12, "mat-icon");
        ɵɵtext(13, "keyboard_arrow_right");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "button", 1);
        ɵɵlistener("click", function ExampleHeader_Template_button_click_14_listener() { return ctx.nextClicked("year"); });
        ɵɵelementStart(15, "mat-icon");
        ɵɵtext(16, "keyboard_arrow_right");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-icon");
        ɵɵtext(18, "keyboard_arrow_right");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(10);
        ɵɵtextInterpolate(ctx.periodLabel);
    } }, directives: [MatButton, MatIcon], styles: [".example-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n      margin: -22%;\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExampleHeader, [{
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
    }], function () { return [{ type: MatCalendar }, { type: DateAdapter }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATE_FORMATS]
            }] }, { type: ChangeDetectorRef }]; }, null); })();

/** @title Datepicker with custom icon */
class DatepickerCustomIconExample {
}
DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
DatepickerCustomIconExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 9, vars: 2, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelementStart(4, "mat-datepicker-toggle", 2);
        ɵɵelementStart(5, "mat-icon", 3);
        ɵɵtext(6, "keyboard_arrow_down");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(7, "mat-datepicker", null, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatIcon, MatDatepickerToggleIcon, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerCustomIconExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-custom-icon-example',
                templateUrl: 'datepicker-custom-icon-example.html',
            }]
    }], null, null); })();

/** @title Datepicker with custom date classes */
class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (cellDate, view) => {
            // Only highligh dates inside the month view.
            if (view === 'month') {
                const date = cellDate.getDate();
                // Highlight the 1st and 20th day of each month.
                return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
            }
            return '';
        };
    }
}
DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
DatepickerDateClassExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 7, vars: 3, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", 3, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(1);
        ɵɵproperty("dateClass", ctx.dateClass);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerDateClassExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

/** @title Disabled datepicker */
class DatepickerDisabledExample {
}
DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
DatepickerDisabledExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 24, vars: 6, consts: [["appearance", "fill"], ["matInput", "", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵelementStart(1, "mat-form-field", 0);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Completely disabled");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 1);
        ɵɵelement(5, "mat-datepicker-toggle", 2);
        ɵɵelement(6, "mat-datepicker", null, 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "p");
        ɵɵelementStart(9, "mat-form-field", 0);
        ɵɵelementStart(10, "mat-label");
        ɵɵtext(11, "Popup disabled");
        ɵɵelementEnd();
        ɵɵelement(12, "input", 4);
        ɵɵelement(13, "mat-datepicker-toggle", 5);
        ɵɵelement(14, "mat-datepicker", null, 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "p");
        ɵɵelementStart(17, "mat-form-field", 0);
        ɵɵelementStart(18, "mat-label");
        ɵɵtext(19, "Input disabled");
        ɵɵelementEnd();
        ɵɵelement(20, "input", 1);
        ɵɵelement(21, "mat-datepicker-toggle", 2);
        ɵɵelement(22, "mat-datepicker", 7, 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(7);
        const _r1 = ɵɵreference(15);
        const _r2 = ɵɵreference(23);
        ɵɵadvance(4);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(7);
        ɵɵproperty("matDatepicker", _r1);
        ɵɵadvance(1);
        ɵɵproperty("for", _r1);
        ɵɵadvance(7);
        ɵɵproperty("matDatepicker", _r2);
        ɵɵadvance(1);
        ɵɵproperty("for", _r2);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerDisabledExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-disabled-example',
                templateUrl: 'datepicker-disabled-example.html',
            }]
    }], null, null); })();

function DatepickerEventsExample_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const e_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(e_r2);
} }
/** @title Datepicker input and change events */
class DatepickerEventsExample {
    constructor() {
        this.events = [];
    }
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
}
DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
DatepickerEventsExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 9, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Input & change events");
        ɵɵelementEnd();
        ɵɵelementStart(3, "input", 1);
        ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_3_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function DatepickerEventsExample_Template_input_dateChange_3_listener($event) { return ctx.addEvent("change", $event); });
        ɵɵelementEnd();
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 4);
        ɵɵtemplate(8, DatepickerEventsExample_div_8_Template, 2, 1, "div", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.events);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerEventsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-events-example',
                templateUrl: 'datepicker-events-example.html',
                styleUrls: ['datepicker-events-example.css'],
            }]
    }], null, null); })();

/** @title Datepicker with filter validation */
class DatepickerFilterExample {
    constructor() {
        this.myFilter = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
}
DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
DatepickerFilterExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 7, vars: 3, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerFilterExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
            }]
    }], null, null); })();

const moment = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker with custom formats */
class DatepickerFormatsExample {
    constructor() {
        this.date = new FormControl(moment());
    }
}
DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
DatepickerFormatsExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [ɵɵProvidersFeature([
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Verbose datepicker");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerFormatsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-formats-example',
                templateUrl: 'datepicker-formats-example.html',
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
            }]
    }], null, null); })();

/** @title Datepicker with different locale */
class DatepickerLocaleExample {
    constructor(_adapter) {
        this._adapter = _adapter;
    }
    french() {
        this._adapter.setLocale('fr');
    }
}
DatepickerLocaleExample.ɵfac = function DatepickerLocaleExample_Factory(t) { return new (t || DatepickerLocaleExample)(ɵɵdirectiveInject(DateAdapter)); };
DatepickerLocaleExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerLocaleExample, selectors: [["datepicker-locale-example"]], features: [ɵɵProvidersFeature([
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ])], decls: 9, vars: 2, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp", ""], ["mat-button", "", 3, "click"]], template: function DatepickerLocaleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Different locale");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 4);
        ɵɵlistener("click", function DatepickerLocaleExample_Template_button_click_7_listener() { return ctx.french(); });
        ɵɵtext(8, "Dynamically switch to French");
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerLocaleExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-locale-example',
                templateUrl: 'datepicker-locale-example.html',
                styleUrls: ['datepicker-locale-example.css'],
                providers: [
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], function () { return [{ type: DateAdapter }]; }, null); })();

/** @title Datepicker with min & max validation */
class DatepickerMinMaxExample {
    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }
}
DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
DatepickerMinMaxExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 7, vars: 4, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerMinMaxExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
            }]
    }], function () { return []; }, null); })();

const moment$1 = _rollupMoment__default || _rollupMoment;
/** @title Datepicker that uses Moment.js dates */
class DatepickerMomentExample {
    constructor() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$1([2017, 0, 1]));
    }
}
DatepickerMomentExample.ɵfac = function DatepickerMomentExample_Factory(t) { return new (t || DatepickerMomentExample)(); };
DatepickerMomentExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerMomentExample, selectors: [["datepicker-moment-example"]], features: [ɵɵProvidersFeature([
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerMomentExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Moment.js datepicker");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerMomentExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-moment-example',
                templateUrl: 'datepicker-moment-example.html',
                providers: [
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                ],
            }]
    }], null, null); })();

/** @title Basic datepicker */
class DatepickerOverviewExample {
}
DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
DatepickerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], decls: 7, vars: 2, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-overview-example',
                templateUrl: 'datepicker-overview-example.html',
            }]
    }], null, null); })();

/** @title Datepicker start date */
class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
}
DatepickerStartViewExample.ɵfac = function DatepickerStartViewExample_Factory(t) { return new (t || DatepickerStartViewExample)(); };
DatepickerStartViewExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerStartViewExample, selectors: [["datepicker-start-view-example"]], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""]], template: function DatepickerStartViewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", 3, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(1);
        ɵɵproperty("startAt", ctx.startDate);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerStartViewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-start-view-example',
                templateUrl: 'datepicker-start-view-example.html',
            }]
    }], null, null); })();

/** @title Datepicker touch UI */
class DatepickerTouchExample {
}
DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
DatepickerTouchExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 7, vars: 2, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""]], template: function DatepickerTouchExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", 3, 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerTouchExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-touch-example',
                templateUrl: 'datepicker-touch-example.html',
            }]
    }], null, null); })();

/** @title Datepicker selected value */
class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
}
DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
DatepickerValueExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 21, vars: 9, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["picker2", ""], ["matInput", "", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Angular forms");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelement(5, "mat-datepicker", null, 3);
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-form-field", 0);
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Angular forms (w/ deserialization)");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 1);
        ɵɵelement(11, "mat-datepicker-toggle", 2);
        ɵɵelement(12, "mat-datepicker", null, 4);
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-form-field", 0);
        ɵɵelementStart(15, "mat-label");
        ɵɵtext(16, "Value binding");
        ɵɵelementEnd();
        ɵɵelement(17, "input", 5);
        ɵɵelement(18, "mat-datepicker-toggle", 2);
        ɵɵelement(19, "mat-datepicker", null, 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        const _r1 = ɵɵreference(13);
        const _r2 = ɵɵreference(20);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(6);
        ɵɵproperty("matDatepicker", _r1)("formControl", ctx.serializedDate);
        ɵɵadvance(1);
        ɵɵproperty("for", _r1);
        ɵɵadvance(6);
        ɵɵproperty("matDatepicker", _r2)("value", ctx.date.value);
        ɵɵadvance(1);
        ɵɵproperty("for", _r2);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerValueExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-value-example',
                templateUrl: 'datepicker-value-example.html',
                styleUrls: ['datepicker-value-example.css'],
            }]
    }], null, null); })();

const moment$2 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_FORMATS$1 = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker emulating a Year and month picker */
class DatepickerViewsSelectionExample {
    constructor() {
        this.date = new FormControl(moment$2());
    }
    chosenYearHandler(normalizedYear) {
        const ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    }
    chosenMonthHandler(normalizedMonth, datepicker) {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
}
DatepickerViewsSelectionExample.ɵfac = function DatepickerViewsSelectionExample_Factory(t) { return new (t || DatepickerViewsSelectionExample)(); };
DatepickerViewsSelectionExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerViewsSelectionExample, selectors: [["datepicker-views-selection-example"]], features: [ɵɵProvidersFeature([
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
        ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected", "monthSelected"], ["dp", ""]], template: function DatepickerViewsSelectionExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Month and Year");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelementStart(5, "mat-datepicker", 3, 4);
        ɵɵlistener("yearSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_yearSelected_5_listener($event) { return ctx.chosenYearHandler($event); })("monthSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_monthSelected_5_listener($event) { ɵɵrestoreView(_r1); const _r0 = ɵɵreference(6); return ctx.chosenMonthHandler($event, _r0); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDatepickerToggle, MatSuffix, MatDatepicker], styles: [".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\n  display: none;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerViewsSelectionExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-views-selection-example',
                templateUrl: 'datepicker-views-selection-example.html',
                styleUrls: ['datepicker-views-selection-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                ],
            }]
    }], null, null); })();

/** @title Basic date range picker */
class DateRangePickerOverviewExample {
}
DateRangePickerOverviewExample.ɵfac = function DateRangePickerOverviewExample_Factory(t) { return new (t || DateRangePickerOverviewExample)(); };
DateRangePickerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: DateRangePickerOverviewExample, selectors: [["date-range-picker-overview-example"]], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Enter a date range");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-date-range-input", 1);
        ɵɵelement(4, "input", 2);
        ɵɵelement(5, "input", 3);
        ɵɵelementEnd();
        ɵɵelement(6, "mat-datepicker-toggle", 4);
        ɵɵelement(7, "mat-date-range-picker", null, 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        ɵɵadvance(3);
        ɵɵproperty("rangePicker", _r0);
        ɵɵadvance(3);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatDateRangeInput, MatStartDate, MatEndDate, MatDatepickerToggle, MatSuffix, MatDateRangePicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateRangePickerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-overview-example',
                templateUrl: 'date-range-picker-overview-example.html',
            }]
    }], null, null); })();

function DateRangePickerFormsExample_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "Invalid start date");
    ɵɵelementEnd();
} }
function DateRangePickerFormsExample_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "Invalid end date");
    ɵɵelementEnd();
} }
/** @title Date range picker forms integration */
class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(),
            end: new FormControl()
        });
    }
}
DateRangePickerFormsExample.ɵfac = function DateRangePickerFormsExample_Factory(t) { return new (t || DateRangePickerFormsExample)(); };
DateRangePickerFormsExample.ɵcmp = ɵɵdefineComponent({ type: DateRangePickerFormsExample, selectors: [["date-range-picker-forms-example"]], decls: 14, vars: 8, consts: [["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"]], template: function DateRangePickerFormsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Enter a date range");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-date-range-input", 1);
        ɵɵelement(4, "input", 2);
        ɵɵelement(5, "input", 3);
        ɵɵelementEnd();
        ɵɵelement(6, "mat-datepicker-toggle", 4);
        ɵɵelement(7, "mat-date-range-picker", null, 5);
        ɵɵtemplate(9, DateRangePickerFormsExample_mat_error_9_Template, 2, 0, "mat-error", 6);
        ɵɵtemplate(10, DateRangePickerFormsExample_mat_error_10_Template, 2, 0, "mat-error", 6);
        ɵɵelementEnd();
        ɵɵelementStart(11, "p");
        ɵɵtext(12);
        ɵɵpipe(13, "json");
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        ɵɵadvance(3);
        ɵɵproperty("formGroup", ctx.range)("rangePicker", _r0);
        ɵɵadvance(3);
        ɵɵproperty("for", _r0);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Selected range: ", ɵɵpipeBind1(13, 6, ctx.range.value), "");
    } }, directives: [MatFormField, MatLabel, MatDateRangeInput, NgControlStatusGroup, FormGroupDirective, MatStartDate, DefaultValueAccessor, NgControlStatus, FormControlName, MatEndDate, MatDatepickerToggle, MatSuffix, MatDateRangePicker, NgIf, MatError], pipes: [JsonPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateRangePickerFormsExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-forms-example',
                templateUrl: 'date-range-picker-forms-example.html',
            }]
    }], null, null); })();

/** @title Date range picker comparison ranges */
class DateRangePickerComparisonExample {
    constructor() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16))
        });
        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19))
        });
    }
}
DateRangePickerComparisonExample.ɵfac = function DateRangePickerComparisonExample_Factory(t) { return new (t || DateRangePickerComparisonExample)(); };
DateRangePickerComparisonExample.ɵcmp = ɵɵdefineComponent({ type: DateRangePickerComparisonExample, selectors: [["date-range-picker-comparison-example"]], decls: 18, vars: 10, consts: [["appearance", "fill", 1, "example-form-field"], [3, "formGroup", "rangePicker", "comparisonStart", "comparisonEnd"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "start"], ["matEndDate", "", "placeholder", "End date", "formControlName", "end"], ["matSuffix", "", 3, "for"], ["campaignOnePicker", ""], ["campaignTwoPicker", ""]], template: function DateRangePickerComparisonExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "First campaign");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-date-range-input", 1);
        ɵɵelement(4, "input", 2);
        ɵɵelement(5, "input", 3);
        ɵɵelementEnd();
        ɵɵelement(6, "mat-datepicker-toggle", 4);
        ɵɵelement(7, "mat-date-range-picker", null, 5);
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-form-field", 0);
        ɵɵelementStart(10, "mat-label");
        ɵɵtext(11, "Second campaign");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-date-range-input", 1);
        ɵɵelement(13, "input", 2);
        ɵɵelement(14, "input", 3);
        ɵɵelementEnd();
        ɵɵelement(15, "mat-datepicker-toggle", 4);
        ɵɵelement(16, "mat-date-range-picker", null, 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        const _r1 = ɵɵreference(17);
        ɵɵadvance(3);
        ɵɵproperty("formGroup", ctx.campaignOne)("rangePicker", _r0)("comparisonStart", ctx.campaignTwo.value.start)("comparisonEnd", ctx.campaignTwo.value.end);
        ɵɵadvance(3);
        ɵɵproperty("for", _r0);
        ɵɵadvance(6);
        ɵɵproperty("formGroup", ctx.campaignTwo)("rangePicker", _r1)("comparisonStart", ctx.campaignOne.value.start)("comparisonEnd", ctx.campaignOne.value.end);
        ɵɵadvance(3);
        ɵɵproperty("for", _r1);
    } }, directives: [MatFormField, MatLabel, MatDateRangeInput, NgControlStatusGroup, FormGroupDirective, MatStartDate, DefaultValueAccessor, NgControlStatus, FormControlName, MatEndDate, MatDatepickerToggle, MatSuffix, MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin: 0 8px 16px 0;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateRangePickerComparisonExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-comparison-example',
                templateUrl: 'date-range-picker-comparison-example.html',
                styleUrls: ['date-range-picker-comparison-example.css'],
            }]
    }], function () { return []; }, null); })();

class FiveDayRangeSelectionStrategy {
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
FiveDayRangeSelectionStrategy.ɵfac = function FiveDayRangeSelectionStrategy_Factory(t) { return new (t || FiveDayRangeSelectionStrategy)(ɵɵinject(DateAdapter)); };
FiveDayRangeSelectionStrategy.ɵprov = ɵɵdefineInjectable({ token: FiveDayRangeSelectionStrategy, factory: FiveDayRangeSelectionStrategy.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FiveDayRangeSelectionStrategy, [{
        type: Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
/** @title Date range picker with custom a selection strategy */
class DateRangePickerSelectionStrategyExample {
}
DateRangePickerSelectionStrategyExample.ɵfac = function DateRangePickerSelectionStrategyExample_Factory(t) { return new (t || DateRangePickerSelectionStrategyExample)(); };
DateRangePickerSelectionStrategyExample.ɵcmp = ɵɵdefineComponent({ type: DateRangePickerSelectionStrategyExample, selectors: [["date-range-picker-selection-strategy-example"]], features: [ɵɵProvidersFeature([{
                provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                useClass: FiveDayRangeSelectionStrategy
            }])], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerSelectionStrategyExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Enter a date range");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-date-range-input", 1);
        ɵɵelement(4, "input", 2);
        ɵɵelement(5, "input", 3);
        ɵɵelementEnd();
        ɵɵelement(6, "mat-datepicker-toggle", 4);
        ɵɵelement(7, "mat-date-range-picker", null, 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        ɵɵadvance(3);
        ɵɵproperty("rangePicker", _r0);
        ɵɵadvance(3);
        ɵɵproperty("for", _r0);
    } }, directives: [MatFormField, MatLabel, MatDateRangeInput, MatStartDate, MatEndDate, MatDatepickerToggle, MatSuffix, MatDateRangePicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateRangePickerSelectionStrategyExample, [{
        type: Component,
        args: [{
                selector: 'date-range-picker-selection-strategy-example',
                templateUrl: 'date-range-picker-selection-strategy-example.html',
                providers: [{
                        provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                        useClass: FiveDayRangeSelectionStrategy
                    }]
            }]
    }], null, null); })();

/**
 * @title Testing with MatDatepickerInputHarness
 */
class DatepickerHarnessExample {
    constructor() {
        this.date = null;
        this.minDate = null;
    }
}
DatepickerHarnessExample.ɵfac = function DatepickerHarnessExample_Factory(t) { return new (t || DatepickerHarnessExample)(); };
DatepickerHarnessExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerHarnessExample, selectors: [["datepicker-harness-example"]], decls: 3, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "ngModel", "min", "ngModelChange"], ["picker", ""]], template: function DatepickerHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "input", 0);
        ɵɵlistener("ngModelChange", function DatepickerHarnessExample_Template_input_ngModelChange_0_listener($event) { return ctx.date = $event; });
        ɵɵelementEnd();
        ɵɵelement(1, "mat-datepicker", null, 1);
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        ɵɵproperty("matDatepicker", _r0)("ngModel", ctx.date)("min", ctx.minDate);
    } }, directives: [MatInput, MatDatepickerInput, DefaultValueAccessor, NgControlStatus, NgModel, MatDatepicker], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerHarnessExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-harness-example',
                templateUrl: 'datepicker-harness-example.html',
            }]
    }], null, null); })();

/** @title Datepicker action buttons */
class DatepickerActionsExample {
}
DatepickerActionsExample.ɵfac = function DatepickerActionsExample_Factory(t) { return new (t || DatepickerActionsExample)(); };
DatepickerActionsExample.ɵcmp = ɵɵdefineComponent({ type: DatepickerActionsExample, selectors: [["datepicker-actions-example"]], decls: 26, vars: 4, consts: [["appearance", "fill", 1, "example-form-field"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["rangePicker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", ""]], template: function DatepickerActionsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Choose a date");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 1);
        ɵɵelement(4, "mat-datepicker-toggle", 2);
        ɵɵelementStart(5, "mat-datepicker", null, 3);
        ɵɵelementStart(7, "mat-datepicker-actions");
        ɵɵelementStart(8, "button", 4);
        ɵɵtext(9, "Cancel");
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 5);
        ɵɵtext(11, "Apply");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-form-field", 0);
        ɵɵelementStart(13, "mat-label");
        ɵɵtext(14, "Enter a date range");
        ɵɵelementEnd();
        ɵɵelementStart(15, "mat-date-range-input", 6);
        ɵɵelement(16, "input", 7);
        ɵɵelement(17, "input", 8);
        ɵɵelementEnd();
        ɵɵelement(18, "mat-datepicker-toggle", 2);
        ɵɵelementStart(19, "mat-date-range-picker", null, 9);
        ɵɵelementStart(21, "mat-date-range-picker-actions");
        ɵɵelementStart(22, "button", 10);
        ɵɵtext(23, "Cancel");
        ɵɵelementEnd();
        ɵɵelementStart(24, "button", 11);
        ɵɵtext(25, "Apply");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        const _r1 = ɵɵreference(20);
        ɵɵadvance(3);
        ɵɵproperty("matDatepicker", _r0);
        ɵɵadvance(1);
        ɵɵproperty("for", _r0);
        ɵɵadvance(11);
        ɵɵproperty("rangePicker", _r1);
        ɵɵadvance(3);
        ɵɵproperty("for", _r1);
    } }, directives: [MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatDatepickerActions, MatButton, MatDatepickerCancel, MatDatepickerApply, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerActionsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-actions-example',
                templateUrl: 'datepicker-actions-example.html',
                styleUrls: ['datepicker-actions-example.css']
            }]
    }], null, null); })();

const EXAMPLES = [
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerHarnessExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    DateRangePickerOverviewExample,
    DateRangePickerFormsExample,
    DateRangePickerComparisonExample,
    DateRangePickerSelectionStrategyExample,
    DatepickerActionsExample,
    ExampleHeader,
];
class DatepickerExamplesModule {
}
DatepickerExamplesModule.ɵmod = ɵɵdefineNgModule({ type: DatepickerExamplesModule });
DatepickerExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatDatepickerModule,
            MatInputModule,
            MatIconModule,
            MatNativeDateModule,
            ReactiveFormsModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DatepickerExamplesModule, { declarations: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerHarnessExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        DateRangePickerOverviewExample,
        DateRangePickerFormsExample,
        DateRangePickerComparisonExample,
        DateRangePickerSelectionStrategyExample,
        DatepickerActionsExample,
        ExampleHeader], imports: [CommonModule,
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatIconModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        FormsModule], exports: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerHarnessExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        DateRangePickerOverviewExample,
        DateRangePickerFormsExample,
        DateRangePickerComparisonExample,
        DateRangePickerSelectionStrategyExample,
        DatepickerActionsExample,
        ExampleHeader] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DatepickerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDatepickerModule,
                    MatInputModule,
                    MatIconModule,
                    MatNativeDateModule,
                    ReactiveFormsModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DateRangePickerComparisonExample, DateRangePickerFormsExample, DateRangePickerOverviewExample, DateRangePickerSelectionStrategyExample, DatepickerActionsExample, DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerExamplesModule, DatepickerFilterExample, DatepickerFormatsExample, DatepickerHarnessExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, ExampleHeader };
//# sourceMappingURL=datepicker.js.map
