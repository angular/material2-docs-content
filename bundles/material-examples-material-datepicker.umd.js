(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/icon'), require('@angular/material/input'), require('rxjs'), require('rxjs/operators'), require('@angular/material-moment-adapter'), require('moment')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/datepicker', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/core', '@angular/material/datepicker', '@angular/material/icon', '@angular/material/input', 'rxjs', 'rxjs/operators', '@angular/material-moment-adapter', 'moment'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.datepicker = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.core, global.ng.material.datepicker, global.ng.material.icon, global.ng.material.input, global.rxjs, global.rxjs.operators, global.ng.materialMomentAdapter, global.moment));
}(this, function (exports, common, core, forms, button, core$1, datepicker, icon, input, rxjs, operators, materialMomentAdapter, _rollupMoment) { 'use strict';

    var _rollupMoment__default = 'default' in _rollupMoment ? _rollupMoment['default'] : _rollupMoment;

    /** @title Datepicker open method */
    var DatepickerApiExample = /** @class */ (function () {
        function DatepickerApiExample() {
        }
        DatepickerApiExample.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'datepicker-custom-header-example',
                        template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
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
            this._destroyed = new rxjs.Subject();
            _calendar.stateChanges
                .pipe(operators.takeUntil(this._destroyed))
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
            { type: core.Component, args: [{
                        selector: 'example-header',
                        template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        ExampleHeader.ctorParameters = function () { return [
            { type: datepicker.MatCalendar },
            { type: core$1.DateAdapter },
            { type: undefined, decorators: [{ type: core.Inject, args: [core$1.MAT_DATE_FORMATS,] }] },
            { type: core.ChangeDetectorRef }
        ]; };
        return ExampleHeader;
    }());

    /** @title Datepicker with custom icon */
    var DatepickerCustomIconExample = /** @class */ (function () {
        function DatepickerCustomIconExample() {
        }
        DatepickerCustomIconExample.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'datepicker-date-class-example',
                        template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n",
                        encapsulation: core.ViewEncapsulation.None,
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'datepicker-filter-example',
                        template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return DatepickerFilterExample;
    }());

    var moment = _rollupMoment__default || _rollupMoment;
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
            this.date = new forms.FormControl(moment());
        }
        DatepickerFormatsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker-formats-example',
                        template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
                        providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                            { provide: core$1.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                        ],
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return DatepickerFormatsExample;
    }());

    var ɵ0 = materialMomentAdapter.MAT_MOMENT_DATE_FORMATS;
    /** @title Datepicker with different locale */
    var DatepickerLocaleExample = /** @class */ (function () {
        function DatepickerLocaleExample(_adapter) {
            this._adapter = _adapter;
        }
        DatepickerLocaleExample.prototype.french = function () {
            this._adapter.setLocale('fr');
        };
        DatepickerLocaleExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker-locale-example',
                        template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n",
                        providers: [
                            // The locale would typically be provided on the root module of your application. We do it at
                            // the component level here, due to limitations of our example generation script.
                            { provide: core$1.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                            { provide: core$1.MAT_DATE_FORMATS, useValue: ɵ0 },
                        ],
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        DatepickerLocaleExample.ctorParameters = function () { return [
            { type: core$1.DateAdapter }
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
            { type: core.Component, args: [{
                        selector: 'datepicker-min-max-example',
                        template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return DatepickerMinMaxExample;
    }());

    var moment$1 = _rollupMoment__default || _rollupMoment;
    var ɵ0$1 = materialMomentAdapter.MAT_MOMENT_DATE_FORMATS;
    /** @title Datepicker that uses Moment.js dates */
    var DatepickerMomentExample = /** @class */ (function () {
        function DatepickerMomentExample() {
            // Datepicker takes `Moment` objects instead of `Date` objects.
            this.date = new forms.FormControl(moment$1([2017, 0, 1]));
        }
        DatepickerMomentExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker-moment-example',
                        template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
                        providers: [
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                            { provide: core$1.MAT_DATE_FORMATS, useValue: ɵ0$1 },
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            this.date = new forms.FormControl(new Date());
            this.serializedDate = new forms.FormControl((new Date()).toISOString());
        }
        DatepickerValueExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker-value-example',
                        template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n",
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        return DatepickerValueExample;
    }());

    var moment$2 = _rollupMoment__default || _rollupMoment;
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
            this.date = new forms.FormControl(moment$2());
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
            { type: core.Component, args: [{
                        selector: 'datepicker-views-selection-example',
                        template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n",
                        providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            { provide: core$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                            { provide: core$1.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            datepicker.MatDatepickerModule,
                            input.MatInputModule,
                            icon.MatIconModule,
                            core$1.MatNativeDateModule,
                            forms.ReactiveFormsModule,
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

    exports.ɵangular_material_src_material_examples_material_datepicker_datepicker_a = MY_FORMATS;
    exports.ɵangular_material_src_material_examples_material_datepicker_datepicker_b = MY_FORMATS$1;
    exports.DatepickerApiExample = DatepickerApiExample;
    exports.DatepickerColorExample = DatepickerColorExample;
    exports.DatepickerCustomHeaderExample = DatepickerCustomHeaderExample;
    exports.DatepickerCustomIconExample = DatepickerCustomIconExample;
    exports.DatepickerDateClassExample = DatepickerDateClassExample;
    exports.DatepickerDisabledExample = DatepickerDisabledExample;
    exports.DatepickerEventsExample = DatepickerEventsExample;
    exports.DatepickerFilterExample = DatepickerFilterExample;
    exports.DatepickerFormatsExample = DatepickerFormatsExample;
    exports.DatepickerLocaleExample = DatepickerLocaleExample;
    exports.DatepickerMinMaxExample = DatepickerMinMaxExample;
    exports.DatepickerMomentExample = DatepickerMomentExample;
    exports.DatepickerOverviewExample = DatepickerOverviewExample;
    exports.DatepickerStartViewExample = DatepickerStartViewExample;
    exports.DatepickerTouchExample = DatepickerTouchExample;
    exports.DatepickerValueExample = DatepickerValueExample;
    exports.DatepickerViewsSelectionExample = DatepickerViewsSelectionExample;
    exports.ExampleHeader = ExampleHeader;
    exports.DatepickerExamplesModule = DatepickerExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-datepicker.umd.js.map
