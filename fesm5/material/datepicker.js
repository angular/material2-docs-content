import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Inject, ChangeDetectorRef, ViewEncapsulation, InjectionToken, Injectable, Optional, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { __extends, __decorate, __param, __metadata } from 'tslib';
import * as _rollupMoment from 'moment';
import _rollupMoment__default, {  } from 'moment';

/** @title Datepicker open method */
var DatepickerApiExample = /** @class */ (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-api-example',
                    template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n",
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    return DatepickerApiExample;
}());

/** @title Datepicker palette colors */
var DatepickerColorExample = /** @class */ (function () {
    function DatepickerColorExample() {
    }
    DatepickerColorExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-color-example',
                    template: "<mat-form-field color=\"accent\">\n  <mat-label>Inherited calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker1\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field color=\"accent\">\n  <mat-label>Custom calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker2\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    return DatepickerColorExample;
}());

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

/** @title Datepicker with custom icon */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-custom-icon-example',
                    template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerCustomIconExample;
}());

/** @title Datepicker with custom date classes */
var DatepickerDateClassExample = /** @class */ (function () {
    function DatepickerDateClassExample() {
        this.dateClass = function (d) {
            var date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
        };
    }
    DatepickerDateClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-date-class-example',
                    template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"]
                }] }
    ];
    return DatepickerDateClassExample;
}());

/** @title Disabled datepicker */
var DatepickerDisabledExample = /** @class */ (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-disabled-example',
                    template: "<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerDisabledExample;
}());

/** @title Datepicker input and change events */
var DatepickerEventsExample = /** @class */ (function () {
    function DatepickerEventsExample() {
        this.events = [];
    }
    DatepickerEventsExample.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerEventsExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-events-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n",
                    styles: [".example-events {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}\n"]
                }] }
    ];
    return DatepickerEventsExample;
}());

/** @title Datepicker with filter validation */
var DatepickerFilterExample = /** @class */ (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-filter-example',
                    template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerFilterExample;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var moment = _rollupMoment__default || _rollupMoment;
/** InjectionToken for moment date adapter to configure options. */
var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new InjectionToken('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/** Adapts Moment.js Dates for use with Angular Material. */
var MomentDateAdapter = /** @class */ (function (_super) {
    __extends(MomentDateAdapter, _super);
    function MomentDateAdapter(dateLocale, _options) {
        var _this = _super.call(this) || this;
        _this._options = _options;
        _this.setLocale(dateLocale || moment.locale());
        return _this;
    }
    MomentDateAdapter.prototype.setLocale = function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        var momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    };
    MomentDateAdapter.prototype.getYear = function (date) {
        return this.clone(date).year();
    };
    MomentDateAdapter.prototype.getMonth = function (date) {
        return this.clone(date).month();
    };
    MomentDateAdapter.prototype.getDate = function (date) {
        return this.clone(date).date();
    };
    MomentDateAdapter.prototype.getDayOfWeek = function (date) {
        return this.clone(date).day();
    };
    MomentDateAdapter.prototype.getMonthNames = function (style) {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    MomentDateAdapter.prototype.getDateNames = function () {
        return this._localeData.dates;
    };
    MomentDateAdapter.prototype.getDayOfWeekNames = function (style) {
        if (style == 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    MomentDateAdapter.prototype.getYearName = function (date) {
        return this.clone(date).format('YYYY');
    };
    MomentDateAdapter.prototype.getFirstDayOfWeek = function () {
        return this._localeData.firstDayOfWeek;
    };
    MomentDateAdapter.prototype.getNumDaysInMonth = function (date) {
        return this.clone(date).daysInMonth();
    };
    MomentDateAdapter.prototype.clone = function (date) {
        return date.clone().locale(this.locale);
    };
    MomentDateAdapter.prototype.createDate = function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var result = this._createMoment({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    MomentDateAdapter.prototype.today = function () {
        return this._createMoment().locale(this.locale);
    };
    MomentDateAdapter.prototype.parse = function (value, parseFormat) {
        if (value && typeof value == 'string') {
            return this._createMoment(value, parseFormat, this.locale);
        }
        return value ? this._createMoment(value).locale(this.locale) : null;
    };
    MomentDateAdapter.prototype.format = function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    MomentDateAdapter.prototype.addCalendarYears = function (date, years) {
        return this.clone(date).add({ years: years });
    };
    MomentDateAdapter.prototype.addCalendarMonths = function (date, months) {
        return this.clone(date).add({ months: months });
    };
    MomentDateAdapter.prototype.addCalendarDays = function (date, days) {
        return this.clone(date).add({ days: days });
    };
    MomentDateAdapter.prototype.toIso8601 = function (date) {
        return this.clone(date).format();
    };
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    MomentDateAdapter.prototype.deserialize = function (value) {
        var date;
        if (value instanceof Date) {
            date = this._createMoment(value).locale(this.locale);
        }
        else if (this.isDateInstance(value)) {
            // Note: assumes that cloning also sets the correct locale.
            return this.clone(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return this._createMoment(date).locale(this.locale);
        }
        return _super.prototype.deserialize.call(this, value);
    };
    MomentDateAdapter.prototype.isDateInstance = function (obj) {
        return moment.isMoment(obj);
    };
    MomentDateAdapter.prototype.isValid = function (date) {
        return this.clone(date).isValid();
    };
    MomentDateAdapter.prototype.invalid = function () {
        return moment.invalid();
    };
    /** Creates a Moment instance while respecting the current UTC settings. */
    MomentDateAdapter.prototype._createMoment = function (date, format, locale) {
        var _a = this._options || {}, strict = _a.strict, useUtc = _a.useUtc;
        return useUtc
            ? moment.utc(date, format, locale, strict)
            : moment(date, format, locale, strict);
    };
    MomentDateAdapter = __decorate([
        Injectable(),
        __param(0, Optional()), __param(0, Inject(MAT_DATE_LOCALE)),
        __param(1, Optional()), __param(1, Inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS)),
        __metadata("design:paramtypes", [String, Object])
    ], MomentDateAdapter);
    return MomentDateAdapter;
}(DateAdapter));

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MAT_MOMENT_DATE_FORMATS = {
    parse: {
        dateInput: 'l',
    },
    display: {
        dateInput: 'l',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MomentDateModule = /** @class */ (function () {
    function MomentDateModule() {
    }
    MomentDateModule = __decorate([
        NgModule({
            providers: [
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                }
            ],
        })
    ], MomentDateModule);
    return MomentDateModule;
}());
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
var MatMomentDateModule = /** @class */ (function () {
    function MatMomentDateModule() {
    }
    MatMomentDateModule = __decorate([
        NgModule({
            imports: [MomentDateModule],
            providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0 }],
        })
    ], MatMomentDateModule);
    return MatMomentDateModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

var moment$1 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
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
var DatepickerFormatsExample = /** @class */ (function () {
    function DatepickerFormatsExample() {
        this.date = new FormControl(moment$1());
    }
    DatepickerFormatsExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-formats-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerFormatsExample;
}());

var ɵ0$1 = MAT_MOMENT_DATE_FORMATS;
/** @title Datepicker with different locale */
var DatepickerLocaleExample = /** @class */ (function () {
    function DatepickerLocaleExample(_adapter) {
        this._adapter = _adapter;
    }
    DatepickerLocaleExample.prototype.french = function () {
        this._adapter.setLocale('fr');
    };
    DatepickerLocaleExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-locale-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n",
                    providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: ɵ0$1 },
                    ],
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    DatepickerLocaleExample.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return DatepickerLocaleExample;
}());

/** @title Datepicker with min & max validation */
var DatepickerMinMaxExample = /** @class */ (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    DatepickerMinMaxExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-min-max-example',
                    template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerMinMaxExample;
}());

var moment$2 = _rollupMoment__default || _rollupMoment;
var ɵ0$2 = MAT_MOMENT_DATE_FORMATS;
/** @title Datepicker that uses Moment.js dates */
var DatepickerMomentExample = /** @class */ (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$2([2017, 0, 1]));
    }
    DatepickerMomentExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-moment-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
                    providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: ɵ0$2 },
                    ],
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerMomentExample;
}());

/** @title Basic datepicker */
var DatepickerOverviewExample = /** @class */ (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-overview-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerOverviewExample;
}());

/** @title Datepicker start date */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-start-view-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerStartViewExample;
}());

/** @title Datepicker touch UI */
var DatepickerTouchExample = /** @class */ (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-touch-example',
                    template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return DatepickerTouchExample;
}());

/** @title Datepicker selected value */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
    DatepickerValueExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-value-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n",
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    return DatepickerValueExample;
}());

var moment$3 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS$1 = {
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
var DatepickerViewsSelectionExample = /** @class */ (function () {
    function DatepickerViewsSelectionExample() {
        this.date = new FormControl(moment$3());
    }
    DatepickerViewsSelectionExample.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    };
    DatepickerViewsSelectionExample.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    };
    DatepickerViewsSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-views-selection-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n",
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                    ],
                    styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"]
                }] }
    ];
    return DatepickerViewsSelectionExample;
}());

var EXAMPLES = [
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    ExampleHeader,
];
var DatepickerExamplesModule = /** @class */ (function () {
    function DatepickerExamplesModule() {
    }
    DatepickerExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatDatepickerModule,
                        MatInputModule,
                        MatIconModule,
                        MatNativeDateModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return DatepickerExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { MY_FORMATS as ɵangular_material_src_material_examples_material_datepicker_datepicker_a, MY_FORMATS$1 as ɵangular_material_src_material_examples_material_datepicker_datepicker_b, DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerFilterExample, DatepickerFormatsExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, ExampleHeader, DatepickerExamplesModule };
//# sourceMappingURL=datepicker.js.map
