(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/form-field'), require('rxjs'), require('rxjs/operators'), require('@angular/material-moment-adapter'), require('moment')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/datepicker', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/core', '@angular/material/datepicker', '@angular/material/icon', '@angular/material/input', '@angular/material/form-field', 'rxjs', 'rxjs/operators', '@angular/material-moment-adapter', 'moment'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.datepicker = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.core, global.ng.material.datepicker, global.ng.material.icon, global.ng.material.input, global.ng.material.formField, global.rxjs, global.rxjs.operators, global.ng.materialMomentAdapter, global.moment));
}(this, (function (exports, i4, i0, i4$1, i5, i4$2, i3, i6, i2, i1, rxjs, operators, materialMomentAdapter, _rollupMoment) { 'use strict';

    var _rollupMoment__default = 'default' in _rollupMoment ? _rollupMoment['default'] : _rollupMoment;

    /** @title Datepicker open method */
    var DatepickerApiExample = /** @class */ (function () {
        function DatepickerApiExample() {
        }
        DatepickerApiExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-api-example',
                        templateUrl: 'datepicker-api-example.html',
                        styleUrls: ['datepicker-api-example.css'],
                    },] },
        ];
        DatepickerApiExample.ɵfac = function DatepickerApiExample_Factory(t) { return new (t || DatepickerApiExample)(); };
        DatepickerApiExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerApiExample, selectors: [["datepicker-api-example"]], decls: 6, vars: 1, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"]], template: function DatepickerApiExample_Template(rf, ctx) { if (rf & 1) {
                var _r1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelement(1, "input", 1);
                i0.ɵɵelement(2, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "button", 3);
                i0.ɵɵlistener("click", function DatepickerApiExample_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(3); return _r0.open(); });
                i0.ɵɵtext(5, "Open");
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r0 = i0.ɵɵreference(3);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r0);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepicker, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return DatepickerApiExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerApiExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-api-example',
                    templateUrl: 'datepicker-api-example.html',
                    styleUrls: ['datepicker-api-example.css'],
                }]
        }], null, null); })();

    /** @title Datepicker palette colors */
    var DatepickerColorExample = /** @class */ (function () {
        function DatepickerColorExample() {
        }
        DatepickerColorExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-color-example',
                        templateUrl: 'datepicker-color-example.html',
                        styleUrls: ['datepicker-color-example.css'],
                    },] },
        ];
        DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
        DatepickerColorExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Inherited calendar color");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-form-field", 0);
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Custom calendar color");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 1);
                i0.ɵɵelement(11, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(12, "mat-datepicker", 4, 5);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r2 = i0.ɵɵreference(6);
                var _r3 = i0.ɵɵreference(13);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r2);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r2);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("matDatepicker", _r3);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r3);
            } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return DatepickerColorExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerColorExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-color-example',
                    templateUrl: 'datepicker-color-example.html',
                    styleUrls: ['datepicker-color-example.css'],
                }]
        }], null, null); })();

    /** @title Datepicker with custom calendar header */
    var DatepickerCustomHeaderExample = /** @class */ (function () {
        function DatepickerCustomHeaderExample() {
            this.exampleHeader = ExampleHeader;
        }
        DatepickerCustomHeaderExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-custom-header-example',
                        templateUrl: 'datepicker-custom-header-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
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
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-custom-header-example',
                    templateUrl: 'datepicker-custom-header-example.html',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], null, null); })();
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
            { type: i0.Component, args: [{
                        selector: 'example-header',
                        styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                        template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        ExampleHeader.ctorParameters = function () { return [
            { type: i3.MatCalendar },
            { type: i4$2.DateAdapter },
            { type: undefined, decorators: [{ type: i0.Inject, args: [i4$2.MAT_DATE_FORMATS,] }] },
            { type: i0.ChangeDetectorRef }
        ]; };
        ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(i0.ɵɵdirectiveInject(i3.MatCalendar), i0.ɵɵdirectiveInject(i4$2.DateAdapter), i0.ɵɵdirectiveInject(i4$2.MAT_DATE_FORMATS), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
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
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExampleHeader, [{
            type: i0.Component,
            args: [{
                    selector: 'example-header',
                    styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                    template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                }]
        }], function () { return [{ type: i3.MatCalendar }, { type: i4$2.DateAdapter }, { type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [i4$2.MAT_DATE_FORMATS]
                }] }, { type: i0.ChangeDetectorRef }]; }, null); })();

    /** @title Datepicker with custom icon */
    var DatepickerCustomIconExample = /** @class */ (function () {
        function DatepickerCustomIconExample() {
        }
        DatepickerCustomIconExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-custom-icon-example',
                        templateUrl: 'datepicker-custom-icon-example.html',
                        styleUrls: ['datepicker-custom-icon-example.css'],
                    },] },
        ];
        DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
        DatepickerCustomIconExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 7, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelement(1, "input", 1);
                i0.ɵɵelementStart(2, "mat-datepicker-toggle", 2);
                i0.ɵɵelementStart(3, "mat-icon", 3);
                i0.ɵɵtext(4, "keyboard_arrow_down");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(5, "mat-datepicker", null, 4);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r5 = i0.ɵɵreference(6);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r5);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r5);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i6.MatIcon, i3.MatDatepickerToggleIcon, i3.MatDatepicker], styles: [""] });
        return DatepickerCustomIconExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerCustomIconExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-custom-icon-example',
                    templateUrl: 'datepicker-custom-icon-example.html',
                    styleUrls: ['datepicker-custom-icon-example.css'],
                }]
        }], null, null); })();

    /** @title Datepicker with custom date classes */
    var DatepickerDateClassExample = /** @class */ (function () {
        function DatepickerDateClassExample() {
            this.dateClass = function (d) {
                var date = d.getDate();
                // Highlight the 1st and 20th day of each month.
                return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
            };
        }
        DatepickerDateClassExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-date-class-example',
                        templateUrl: 'datepicker-date-class-example.html',
                        styleUrls: ['datepicker-date-class-example.css'],
                        encapsulation: i0.ViewEncapsulation.None,
                    },] },
        ];
        DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
        DatepickerDateClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 5, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelement(1, "input", 1);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(3, "mat-datepicker", 3, 4);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r6 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r6);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r6);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("dateClass", ctx.dateClass);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
        return DatepickerDateClassExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerDateClassExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-date-class-example',
                    templateUrl: 'datepicker-date-class-example.html',
                    styleUrls: ['datepicker-date-class-example.css'],
                    encapsulation: i0.ViewEncapsulation.None,
                }]
        }], null, null); })();

    /** @title Disabled datepicker */
    var DatepickerDisabledExample = /** @class */ (function () {
        function DatepickerDisabledExample() {
        }
        DatepickerDisabledExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-disabled-example',
                        templateUrl: 'datepicker-disabled-example.html',
                        styleUrls: ['datepicker-disabled-example.css'],
                    },] },
        ];
        DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
        DatepickerDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 18, vars: 6, consts: [["matInput", "", "placeholder", "Completely disabled", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", "placeholder", "Popup disabled", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["matInput", "", "placeholder", "Input disabled", "disabled", "", 3, "matDatepicker"], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵelementStart(1, "mat-form-field");
                i0.ɵɵelement(2, "input", 0);
                i0.ɵɵelement(3, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(4, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "p");
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelement(8, "input", 3);
                i0.ɵɵelement(9, "mat-datepicker-toggle", 4);
                i0.ɵɵelement(10, "mat-datepicker", null, 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "p");
                i0.ɵɵelementStart(13, "mat-form-field");
                i0.ɵɵelement(14, "input", 6);
                i0.ɵɵelement(15, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(16, "mat-datepicker", 7, 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r7 = i0.ɵɵreference(5);
                var _r8 = i0.ɵɵreference(11);
                var _r9 = i0.ɵɵreference(17);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matDatepicker", _r7);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r7);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("matDatepicker", _r8);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r8);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("matDatepicker", _r9);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r9);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerDisabledExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerDisabledExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-disabled-example',
                    templateUrl: 'datepicker-disabled-example.html',
                    styleUrls: ['datepicker-disabled-example.css'],
                }]
        }], null, null); })();

    function DatepickerEventsExample_div_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var e_r12 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(e_r12);
    } }
    /** @title Datepicker input and change events */
    var DatepickerEventsExample = /** @class */ (function () {
        function DatepickerEventsExample() {
            this.events = [];
        }
        DatepickerEventsExample.prototype.addEvent = function (type, event) {
            this.events.push(type + ": " + event.value);
        };
        DatepickerEventsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-events-example',
                        templateUrl: 'datepicker-events-example.html',
                        styleUrls: ['datepicker-events-example.css'],
                    },] },
        ];
        DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
        DatepickerEventsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 7, vars: 3, consts: [["matInput", "", "placeholder", "Input & change events", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "input", 0);
                i0.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_1_listener($event) { return ctx.addEvent("input", $event); });
                i0.ɵɵlistener("dateChange", function DatepickerEventsExample_Template_input_dateChange_1_listener($event) { return ctx.addEvent("change", $event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(3, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵtemplate(6, DatepickerEventsExample_div_6_Template, 2, 1, "div", 4);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r10 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r10);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r10);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.events);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker, i4.NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
        return DatepickerEventsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerEventsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-events-example',
                    templateUrl: 'datepicker-events-example.html',
                    styleUrls: ['datepicker-events-example.css'],
                }]
        }], null, null); })();

    /** @title Datepicker with filter validation */
    var DatepickerFilterExample = /** @class */ (function () {
        function DatepickerFilterExample() {
            this.myFilter = function (d) {
                var day = (d || new Date()).getDay();
                // Prevent Saturday and Sunday from being selected.
                return day !== 0 && day !== 6;
            };
        }
        DatepickerFilterExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-filter-example',
                        templateUrl: 'datepicker-filter-example.html',
                        styleUrls: ['datepicker-filter-example.css'],
                    },] },
        ];
        DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
        DatepickerFilterExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 5, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelement(1, "input", 1);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(3, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r13 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r13);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r13);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerFilterExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerFilterExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-filter-example',
                    templateUrl: 'datepicker-filter-example.html',
                    styleUrls: ['datepicker-filter-example.css'],
                }]
        }], null, null); })();

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
            this.date = new i4$1.FormControl(moment());
        }
        DatepickerFormatsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-formats-example',
                        templateUrl: 'datepicker-formats-example.html',
                        styleUrls: ['datepicker-formats-example.css'],
                        providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            {
                                provide: i4$2.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i4$2.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                        ],
                    },] },
        ];
        DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
        DatepickerFormatsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [i0.ɵɵProvidersFeature([
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: i4$2.DateAdapter,
                        useClass: materialMomentAdapter.MomentDateAdapter,
                        deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: i4$2.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Verbose datepicker", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(3, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r14 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r14)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r14);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerFormatsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerFormatsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-formats-example',
                    templateUrl: 'datepicker-formats-example.html',
                    styleUrls: ['datepicker-formats-example.css'],
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: i4$2.DateAdapter,
                            useClass: materialMomentAdapter.MomentDateAdapter,
                            deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        },
                        { provide: i4$2.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                }]
        }], null, null); })();

    /** @title Datepicker with different locale */
    var DatepickerLocaleExample = /** @class */ (function () {
        function DatepickerLocaleExample(_adapter) {
            this._adapter = _adapter;
        }
        DatepickerLocaleExample.prototype.french = function () {
            this._adapter.setLocale('fr');
        };
        DatepickerLocaleExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-locale-example',
                        templateUrl: 'datepicker-locale-example.html',
                        styleUrls: ['datepicker-locale-example.css'],
                        providers: [
                            // The locale would typically be provided on the root module of your application. We do it at
                            // the component level here, due to limitations of our example generation script.
                            { provide: i4$2.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            {
                                provide: i4$2.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i4$2.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                        ],
                    },] },
        ];
        /** @nocollapse */
        DatepickerLocaleExample.ctorParameters = function () { return [
            { type: i4$2.DateAdapter }
        ]; };
        DatepickerLocaleExample.ɵfac = function DatepickerLocaleExample_Factory(t) { return new (t || DatepickerLocaleExample)(i0.ɵɵdirectiveInject(i4$2.DateAdapter)); };
        DatepickerLocaleExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerLocaleExample, selectors: [["datepicker-locale-example"]], features: [i0.ɵɵProvidersFeature([
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: i4$2.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    {
                        provide: i4$2.DateAdapter,
                        useClass: materialMomentAdapter.MomentDateAdapter,
                        deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: i4$2.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                ])], decls: 7, vars: 2, consts: [["matInput", "", "placeholder", "Different locale", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp", ""], ["mat-button", "", 3, "click"]], template: function DatepickerLocaleExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(3, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "button", 3);
                i0.ɵɵlistener("click", function DatepickerLocaleExample_Template_button_click_5_listener($event) { return ctx.french(); });
                i0.ɵɵtext(6, "Dynamically switch to French");
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r15 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r15);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r15);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return DatepickerLocaleExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerLocaleExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-locale-example',
                    templateUrl: 'datepicker-locale-example.html',
                    styleUrls: ['datepicker-locale-example.css'],
                    providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: i4$2.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        {
                            provide: i4$2.DateAdapter,
                            useClass: materialMomentAdapter.MomentDateAdapter,
                            deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        },
                        { provide: i4$2.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                    ],
                }]
        }], function () { return [{ type: i4$2.DateAdapter }]; }, null); })();

    /** @title Datepicker with min & max validation */
    var DatepickerMinMaxExample = /** @class */ (function () {
        function DatepickerMinMaxExample() {
            // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
            var currentYear = new Date().getFullYear();
            this.minDate = new Date(currentYear - 20, 0, 1);
            this.maxDate = new Date(currentYear + 1, 11, 31);
        }
        DatepickerMinMaxExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-min-max-example',
                        templateUrl: 'datepicker-min-max-example.html',
                        styleUrls: ['datepicker-min-max-example.css'],
                    },] },
        ];
        /** @nocollapse */
        DatepickerMinMaxExample.ctorParameters = function () { return []; };
        DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
        DatepickerMinMaxExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 5, vars: 4, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelement(1, "input", 1);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(3, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r16 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r16);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r16);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerMinMaxExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerMinMaxExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-min-max-example',
                    templateUrl: 'datepicker-min-max-example.html',
                    styleUrls: ['datepicker-min-max-example.css'],
                }]
        }], function () { return []; }, null); })();

    var moment$1 = _rollupMoment__default || _rollupMoment;
    /** @title Datepicker that uses Moment.js dates */
    var DatepickerMomentExample = /** @class */ (function () {
        function DatepickerMomentExample() {
            // Datepicker takes `Moment` objects instead of `Date` objects.
            this.date = new i4$1.FormControl(moment$1([2017, 0, 1]));
        }
        DatepickerMomentExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-moment-example',
                        templateUrl: 'datepicker-moment-example.html',
                        styleUrls: ['datepicker-moment-example.css'],
                        providers: [
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            { provide: i4$2.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [i4$2.MAT_DATE_LOCALE] },
                            { provide: i4$2.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                        ],
                    },] },
        ];
        DatepickerMomentExample.ɵfac = function DatepickerMomentExample_Factory(t) { return new (t || DatepickerMomentExample)(); };
        DatepickerMomentExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMomentExample, selectors: [["datepicker-moment-example"]], features: [i0.ɵɵProvidersFeature([
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: i4$2.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [i4$2.MAT_DATE_LOCALE] },
                    { provide: i4$2.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Moment.js datepicker", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerMomentExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(3, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r17 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r17)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r17);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerMomentExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerMomentExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-moment-example',
                    templateUrl: 'datepicker-moment-example.html',
                    styleUrls: ['datepicker-moment-example.css'],
                    providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: i4$2.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [i4$2.MAT_DATE_LOCALE] },
                        { provide: i4$2.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                    ],
                }]
        }], null, null); })();

    /** @title Basic datepicker */
    var DatepickerOverviewExample = /** @class */ (function () {
        function DatepickerOverviewExample() {
        }
        DatepickerOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-overview-example',
                        templateUrl: 'datepicker-overview-example.html',
                        styleUrls: ['datepicker-overview-example.css'],
                    },] },
        ];
        DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
        DatepickerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], decls: 5, vars: 2, consts: [["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(3, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r18 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r18);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r18);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-overview-example',
                    templateUrl: 'datepicker-overview-example.html',
                    styleUrls: ['datepicker-overview-example.css'],
                }]
        }], null, null); })();

    /** @title Datepicker start date */
    var DatepickerStartViewExample = /** @class */ (function () {
        function DatepickerStartViewExample() {
            this.startDate = new Date(1990, 0, 1);
        }
        DatepickerStartViewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-start-view-example',
                        templateUrl: 'datepicker-start-view-example.html',
                        styleUrls: ['datepicker-start-view-example.css'],
                    },] },
        ];
        DatepickerStartViewExample.ɵfac = function DatepickerStartViewExample_Factory(t) { return new (t || DatepickerStartViewExample)(); };
        DatepickerStartViewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerStartViewExample, selectors: [["datepicker-start-view-example"]], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""]], template: function DatepickerStartViewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(3, "mat-datepicker", 2, 3);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r19 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r19);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r19);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("startAt", ctx.startDate);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerStartViewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerStartViewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-start-view-example',
                    templateUrl: 'datepicker-start-view-example.html',
                    styleUrls: ['datepicker-start-view-example.css'],
                }]
        }], null, null); })();

    /** @title Datepicker touch UI */
    var DatepickerTouchExample = /** @class */ (function () {
        function DatepickerTouchExample() {
        }
        DatepickerTouchExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-touch-example',
                        templateUrl: 'datepicker-touch-example.html',
                        styleUrls: ['datepicker-touch-example.css'],
                    },] },
        ];
        DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
        DatepickerTouchExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 5, vars: 2, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""]], template: function DatepickerTouchExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelement(1, "input", 1);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(3, "mat-datepicker", 3, 4);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r20 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r20);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r20);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
        return DatepickerTouchExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerTouchExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-touch-example',
                    templateUrl: 'datepicker-touch-example.html',
                    styleUrls: ['datepicker-touch-example.css'],
                }]
        }], null, null); })();

    /** @title Datepicker selected value */
    var DatepickerValueExample = /** @class */ (function () {
        function DatepickerValueExample() {
            this.date = new i4$1.FormControl(new Date());
            this.serializedDate = new i4$1.FormControl((new Date()).toISOString());
        }
        DatepickerValueExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'datepicker-value-example',
                        templateUrl: 'datepicker-value-example.html',
                        styleUrls: ['datepicker-value-example.css'],
                    },] },
        ];
        DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
        DatepickerValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 15, vars: 9, consts: [["matInput", "", "placeholder", "Angular forms", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "Angular forms (w/ deserialization)", 3, "matDatepicker", "formControl"], ["picker2", ""], ["matInput", "", "placeholder", "Value binding", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(3, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelement(6, "input", 3);
                i0.ɵɵelement(7, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(8, "mat-datepicker", null, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-form-field");
                i0.ɵɵelement(11, "input", 5);
                i0.ɵɵelement(12, "mat-datepicker-toggle", 1);
                i0.ɵɵelement(13, "mat-datepicker", null, 6);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r21 = i0.ɵɵreference(4);
                var _r22 = i0.ɵɵreference(9);
                var _r23 = i0.ɵɵreference(14);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r21)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r21);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("matDatepicker", _r22)("formControl", ctx.serializedDate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r22);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("matDatepicker", _r23)("value", ctx.date.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r23);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return DatepickerValueExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerValueExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-value-example',
                    templateUrl: 'datepicker-value-example.html',
                    styleUrls: ['datepicker-value-example.css'],
                }]
        }], null, null); })();

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
            this.date = new i4$1.FormControl(moment$2());
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
            { type: i0.Component, args: [{
                        selector: 'datepicker-views-selection-example',
                        templateUrl: 'datepicker-views-selection-example.html',
                        styleUrls: ['datepicker-views-selection-example.css'],
                        providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            {
                                provide: i4$2.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i4$2.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                        ],
                    },] },
        ];
        DatepickerViewsSelectionExample.ɵfac = function DatepickerViewsSelectionExample_Factory(t) { return new (t || DatepickerViewsSelectionExample)(); };
        DatepickerViewsSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerViewsSelectionExample, selectors: [["datepicker-views-selection-example"]], features: [i0.ɵɵProvidersFeature([
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: i4$2.DateAdapter,
                        useClass: materialMomentAdapter.MomentDateAdapter,
                        deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: i4$2.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Month and Year", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected", "monthSelected"], ["dp", ""]], template: function DatepickerViewsSelectionExample_Template(rf, ctx) { if (rf & 1) {
                var _r25 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelement(1, "input", 0);
                i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
                i0.ɵɵelementStart(3, "mat-datepicker", 2, 3);
                i0.ɵɵlistener("yearSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_yearSelected_3_listener($event) { return ctx.chosenYearHandler($event); });
                i0.ɵɵlistener("monthSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_monthSelected_3_listener($event) { i0.ɵɵrestoreView(_r25); var _r24 = i0.ɵɵreference(4); return ctx.chosenMonthHandler($event, _r24); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r24 = i0.ɵɵreference(4);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matDatepicker", _r24)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r24);
            } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\n  display: none;\n}"] });
        return DatepickerViewsSelectionExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerViewsSelectionExample, [{
            type: i0.Component,
            args: [{
                    selector: 'datepicker-views-selection-example',
                    templateUrl: 'datepicker-views-selection-example.html',
                    styleUrls: ['datepicker-views-selection-example.css'],
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: i4$2.DateAdapter,
                            useClass: materialMomentAdapter.MomentDateAdapter,
                            deps: [i4$2.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        },
                        { provide: i4$2.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                    ],
                }]
        }], null, null); })();

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
            { type: i0.NgModule, args: [{
                        imports: [
                            i4.CommonModule,
                            i5.MatButtonModule,
                            i3.MatDatepickerModule,
                            i2.MatInputModule,
                            i6.MatIconModule,
                            i4$2.MatNativeDateModule,
                            i4$1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        DatepickerExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: DatepickerExamplesModule });
        DatepickerExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); }, imports: [[
                    i4.CommonModule,
                    i5.MatButtonModule,
                    i3.MatDatepickerModule,
                    i2.MatInputModule,
                    i6.MatIconModule,
                    i4$2.MatNativeDateModule,
                    i4$1.ReactiveFormsModule,
                ]] });
        return DatepickerExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatepickerExamplesModule, { declarations: [DatepickerApiExample,
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
            ExampleHeader], imports: [i4.CommonModule,
            i5.MatButtonModule,
            i3.MatDatepickerModule,
            i2.MatInputModule,
            i6.MatIconModule,
            i4$2.MatNativeDateModule,
            i4$1.ReactiveFormsModule], exports: [DatepickerApiExample,
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
            ExampleHeader] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i4.CommonModule,
                        i5.MatButtonModule,
                        i3.MatDatepickerModule,
                        i2.MatInputModule,
                        i6.MatIconModule,
                        i4$2.MatNativeDateModule,
                        i4$1.ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.DatepickerApiExample = DatepickerApiExample;
    exports.DatepickerColorExample = DatepickerColorExample;
    exports.DatepickerCustomHeaderExample = DatepickerCustomHeaderExample;
    exports.DatepickerCustomIconExample = DatepickerCustomIconExample;
    exports.DatepickerDateClassExample = DatepickerDateClassExample;
    exports.DatepickerDisabledExample = DatepickerDisabledExample;
    exports.DatepickerEventsExample = DatepickerEventsExample;
    exports.DatepickerExamplesModule = DatepickerExamplesModule;
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-datepicker.umd.js.map
