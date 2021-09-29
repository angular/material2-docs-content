(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/form-field'), require('rxjs'), require('rxjs/operators'), require('@angular/material-moment-adapter'), require('moment'), require('moment/locale/ja'), require('moment/locale/fr')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/datepicker', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/card', '@angular/material/core', '@angular/material/datepicker', '@angular/material/icon', '@angular/material/input', '@angular/material/form-field', 'rxjs', 'rxjs/operators', '@angular/material-moment-adapter', 'moment', 'moment/locale/ja', 'moment/locale/fr'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.datepicker = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.card, global.ng.material.core, global.ng.material.datepicker, global.ng.material.icon, global.ng.material.input, global.ng.material.formField, global.rxjs, global.rxjs.operators, global.ng.materialMomentAdapter, global.moment));
}(this, (function (exports, i4, i0, i3, i4$1, i1$2, i1$1, i3$1, i6, i2, i1, rxjs, operators, materialMomentAdapter, _rollupMoment) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3$1);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var _rollupMoment__default = /*#__PURE__*/_interopDefaultLegacy(_rollupMoment);
    var _rollupMoment__namespace = /*#__PURE__*/_interopNamespace(_rollupMoment);

    /** @title Date range picker comparison ranges */
    var DateRangePickerComparisonExample = /** @class */ (function () {
        function DateRangePickerComparisonExample() {
            var today = new Date();
            var month = today.getMonth();
            var year = today.getFullYear();
            this.campaignOne = new i3.FormGroup({
                start: new i3.FormControl(new Date(year, month, 13)),
                end: new i3.FormControl(new Date(year, month, 16))
            });
            this.campaignTwo = new i3.FormGroup({
                start: new i3.FormControl(new Date(year, month, 15)),
                end: new i3.FormControl(new Date(year, month, 19))
            });
        }
        return DateRangePickerComparisonExample;
    }());
    DateRangePickerComparisonExample.ɵfac = function DateRangePickerComparisonExample_Factory(t) { return new (t || DateRangePickerComparisonExample)(); };
    DateRangePickerComparisonExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DateRangePickerComparisonExample, selectors: [["date-range-picker-comparison-example"]], decls: 18, vars: 10, consts: [["appearance", "fill", 1, "example-form-field"], [3, "formGroup", "rangePicker", "comparisonStart", "comparisonEnd"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "start"], ["matEndDate", "", "placeholder", "End date", "formControlName", "end"], ["matSuffix", "", 3, "for"], ["campaignOnePicker", ""], ["campaignTwoPicker", ""]], template: function DateRangePickerComparisonExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "First campaign");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelement(5, "input", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0__namespace.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(10, "mat-label");
                i0__namespace.ɵɵtext(11, "Second campaign");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-date-range-input", 1);
                i0__namespace.ɵɵelement(13, "input", 2);
                i0__namespace.ɵɵelement(14, "input", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(15, "mat-datepicker-toggle", 4);
                i0__namespace.ɵɵelement(16, "mat-date-range-picker", null, 6);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(8);
                var _r1 = i0__namespace.ɵɵreference(17);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formGroup", ctx.campaignOne)("rangePicker", _r0)("comparisonStart", ctx.campaignTwo.value.start)("comparisonEnd", ctx.campaignTwo.value.end);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("formGroup", ctx.campaignTwo)("rangePicker", _r1)("comparisonStart", ctx.campaignOne.value.start)("comparisonEnd", ctx.campaignOne.value.end);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("for", _r1);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i3__namespace.MatDateRangeInput, i3__namespace$1.NgControlStatusGroup, i3__namespace$1.FormGroupDirective, i3__namespace.MatStartDate, i3__namespace$1.DefaultValueAccessor, i3__namespace$1.NgControlStatus, i3__namespace$1.FormControlName, i3__namespace.MatEndDate, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin: 0 8px 16px 0;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DateRangePickerComparisonExample, [{
                type: i0.Component,
                args: [{ selector: 'date-range-picker-comparison-example', template: "<mat-form-field class=\"example-form-field\" appearance=\"fill\">\n  <mat-label>First campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignOne\"\n    [rangePicker]=\"campaignOnePicker\"\n    [comparisonStart]=\"campaignTwo.value.start\"\n    [comparisonEnd]=\"campaignTwo.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\" appearance=\"fill\">\n  <mat-label>Second campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignTwo\"\n    [rangePicker]=\"campaignTwoPicker\"\n    [comparisonStart]=\"campaignOne.value.start\"\n    [comparisonEnd]=\"campaignOne.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\n</mat-form-field>\n", styles: [".example-form-field {\n  margin: 0 8px 16px 0;\n}\n"] }]
            }], function () { return []; }, null);
    })();

    function DateRangePickerFormsExample_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1, "Invalid start date");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DateRangePickerFormsExample_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1, "Invalid end date");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Date range picker forms integration */
    var DateRangePickerFormsExample = /** @class */ (function () {
        function DateRangePickerFormsExample() {
            this.range = new i3.FormGroup({
                start: new i3.FormControl(),
                end: new i3.FormControl()
            });
        }
        return DateRangePickerFormsExample;
    }());
    DateRangePickerFormsExample.ɵfac = function DateRangePickerFormsExample_Factory(t) { return new (t || DateRangePickerFormsExample)(); };
    DateRangePickerFormsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DateRangePickerFormsExample, selectors: [["date-range-picker-forms-example"]], decls: 14, vars: 8, consts: [["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"]], template: function DateRangePickerFormsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Enter a date range");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelement(5, "input", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0__namespace.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0__namespace.ɵɵtemplate(9, DateRangePickerFormsExample_mat_error_9_Template, 2, 0, "mat-error", 6);
                i0__namespace.ɵɵtemplate(10, DateRangePickerFormsExample_mat_error_10_Template, 2, 0, "mat-error", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "p");
                i0__namespace.ɵɵtext(12);
                i0__namespace.ɵɵpipe(13, "json");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(8);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formGroup", ctx.range)("rangePicker", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1("Selected range: ", i0__namespace.ɵɵpipeBind1(13, 6, ctx.range.value), "");
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i3__namespace.MatDateRangeInput, i3__namespace$1.NgControlStatusGroup, i3__namespace$1.FormGroupDirective, i3__namespace.MatStartDate, i3__namespace$1.DefaultValueAccessor, i3__namespace$1.NgControlStatus, i3__namespace$1.FormControlName, i3__namespace.MatEndDate, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDateRangePicker, i4__namespace.NgIf, i1__namespace.MatError], pipes: [i4__namespace.JsonPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DateRangePickerFormsExample, [{
                type: i0.Component,
                args: [{ selector: 'date-range-picker-forms-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n" }]
            }], null, null);
    })();

    /** @title Basic date range picker */
    var DateRangePickerOverviewExample = /** @class */ (function () {
        function DateRangePickerOverviewExample() {
        }
        return DateRangePickerOverviewExample;
    }());
    DateRangePickerOverviewExample.ɵfac = function DateRangePickerOverviewExample_Factory(t) { return new (t || DateRangePickerOverviewExample)(); };
    DateRangePickerOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DateRangePickerOverviewExample, selectors: [["date-range-picker-overview-example"]], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Enter a date range");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelement(5, "input", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0__namespace.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(8);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("rangePicker", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i3__namespace.MatDateRangeInput, i3__namespace.MatStartDate, i3__namespace.MatEndDate, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDateRangePicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DateRangePickerOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'date-range-picker-overview-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    var FiveDayRangeSelectionStrategy = /** @class */ (function () {
        function FiveDayRangeSelectionStrategy(_dateAdapter) {
            this._dateAdapter = _dateAdapter;
        }
        FiveDayRangeSelectionStrategy.prototype.selectionFinished = function (date) {
            return this._createFiveDayRange(date);
        };
        FiveDayRangeSelectionStrategy.prototype.createPreview = function (activeDate) {
            return this._createFiveDayRange(activeDate);
        };
        FiveDayRangeSelectionStrategy.prototype._createFiveDayRange = function (date) {
            if (date) {
                var start = this._dateAdapter.addCalendarDays(date, -2);
                var end = this._dateAdapter.addCalendarDays(date, 2);
                return new i3$1.DateRange(start, end);
            }
            return new i3$1.DateRange(null, null);
        };
        return FiveDayRangeSelectionStrategy;
    }());
    FiveDayRangeSelectionStrategy.ɵfac = function FiveDayRangeSelectionStrategy_Factory(t) { return new (t || FiveDayRangeSelectionStrategy)(i0__namespace.ɵɵinject(i1__namespace$1.DateAdapter)); };
    FiveDayRangeSelectionStrategy.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FiveDayRangeSelectionStrategy, factory: FiveDayRangeSelectionStrategy.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FiveDayRangeSelectionStrategy, [{
                type: i0.Injectable
            }], function () { return [{ type: i1__namespace$1.DateAdapter }]; }, null);
    })();
    /** @title Date range picker with custom a selection strategy */
    var DateRangePickerSelectionStrategyExample = /** @class */ (function () {
        function DateRangePickerSelectionStrategyExample() {
        }
        return DateRangePickerSelectionStrategyExample;
    }());
    DateRangePickerSelectionStrategyExample.ɵfac = function DateRangePickerSelectionStrategyExample_Factory(t) { return new (t || DateRangePickerSelectionStrategyExample)(); };
    DateRangePickerSelectionStrategyExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DateRangePickerSelectionStrategyExample, selectors: [["date-range-picker-selection-strategy-example"]], features: [i0__namespace.ɵɵProvidersFeature([{
                    provide: i3$1.MAT_DATE_RANGE_SELECTION_STRATEGY,
                    useClass: FiveDayRangeSelectionStrategy
                }])], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerSelectionStrategyExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Enter a date range");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelement(5, "input", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0__namespace.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(8);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("rangePicker", _r0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i3__namespace.MatDateRangeInput, i3__namespace.MatStartDate, i3__namespace.MatEndDate, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDateRangePicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DateRangePickerSelectionStrategyExample, [{
                type: i0.Component,
                args: [{ selector: 'date-range-picker-selection-strategy-example', providers: [{
                                provide: i3$1.MAT_DATE_RANGE_SELECTION_STRATEGY,
                                useClass: FiveDayRangeSelectionStrategy
                            }], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    /** @title Datepicker action buttons */
    var DatepickerActionsExample = /** @class */ (function () {
        function DatepickerActionsExample() {
        }
        return DatepickerActionsExample;
    }());
    DatepickerActionsExample.ɵfac = function DatepickerActionsExample_Factory(t) { return new (t || DatepickerActionsExample)(); };
    DatepickerActionsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerActionsExample, selectors: [["datepicker-actions-example"]], decls: 26, vars: 4, consts: [["appearance", "fill", 1, "example-form-field"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["rangePicker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDateRangePickerApply", ""]], template: function DatepickerActionsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelementStart(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementStart(7, "mat-datepicker-actions");
                i0__namespace.ɵɵelementStart(8, "button", 4);
                i0__namespace.ɵɵtext(9, "Cancel");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "button", 5);
                i0__namespace.ɵɵtext(11, "Apply");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(13, "mat-label");
                i0__namespace.ɵɵtext(14, "Enter a date range");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "mat-date-range-input", 6);
                i0__namespace.ɵɵelement(16, "input", 7);
                i0__namespace.ɵɵelement(17, "input", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(18, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelementStart(19, "mat-date-range-picker", null, 9);
                i0__namespace.ɵɵelementStart(21, "mat-date-range-picker-actions");
                i0__namespace.ɵɵelementStart(22, "button", 10);
                i0__namespace.ɵɵtext(23, "Cancel");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 11);
                i0__namespace.ɵɵtext(25, "Apply");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                var _r1 = i0__namespace.ɵɵreference(20);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(11);
                i0__namespace.ɵɵproperty("rangePicker", _r1);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("for", _r1);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker, i3__namespace.MatDatepickerActions, i4__namespace$1.MatButton, i3__namespace.MatDatepickerCancel, i3__namespace.MatDatepickerApply, i3__namespace.MatDateRangeInput, i3__namespace.MatStartDate, i3__namespace.MatEndDate, i3__namespace.MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerActionsExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-actions-example', template: "<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"] }]
            }], null, null);
    })();

    /** @title Datepicker open method */
    var DatepickerApiExample = /** @class */ (function () {
        function DatepickerApiExample() {
        }
        return DatepickerApiExample;
    }());
    DatepickerApiExample.ɵfac = function DatepickerApiExample_Factory(t) { return new (t || DatepickerApiExample)(); };
    DatepickerApiExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerApiExample, selectors: [["datepicker-api-example"]], decls: 8, vars: 1, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"]], template: function DatepickerApiExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker", null, 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵlistener("click", function DatepickerApiExample_Template_button_click_6_listener() { i0__namespace.ɵɵrestoreView(_r1_1); var _r0 = i0__namespace.ɵɵreference(5); return _r0.open(); });
                i0__namespace.ɵɵtext(7, "Open");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(5);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepicker, i4__namespace$1.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerApiExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-api-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], null, null);
    })();

    /** @title Datepicker palette colors */
    var DatepickerColorExample = /** @class */ (function () {
        function DatepickerColorExample() {
        }
        return DatepickerColorExample;
    }());
    DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
    DatepickerColorExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent", "appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Inherited calendar color");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Custom calendar color");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "input", 1);
                i0__namespace.ɵɵelement(11, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(12, "mat-datepicker", 4, 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                var _r1 = i0__namespace.ɵɵreference(13);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("matDatepicker", _r1);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r1);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerColorExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-color-example', template: "<mat-form-field color=\"accent\" appearance=\"fill\">\n  <mat-label>Inherited calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker1\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field color=\"accent\" appearance=\"fill\">\n  <mat-label>Custom calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker2\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], null, null);
    })();

    /** @title Datepicker with custom calendar header */
    var DatepickerCustomHeaderExample = /** @class */ (function () {
        function DatepickerCustomHeaderExample() {
            this.exampleHeader = ExampleHeader;
        }
        return DatepickerCustomHeaderExample;
    }());
    DatepickerCustomHeaderExample.ɵfac = function DatepickerCustomHeaderExample_Factory(t) { return new (t || DatepickerCustomHeaderExample)(); };
    DatepickerCustomHeaderExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerCustomHeaderExample, selectors: [["datepicker-custom-header-example"]], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "calendarHeaderComponent"], ["picker", ""]], template: function DatepickerCustomHeaderExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Custom calendar header");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("calendarHeaderComponent", ctx.exampleHeader);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-custom-header-example', changeDetection: i0.ChangeDetectionStrategy.OnPush, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n" }]
            }], null, null);
    })();
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
            enumerable: false,
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
        return ExampleHeader;
    }());
    ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(i0__namespace.ɵɵdirectiveInject(i3__namespace.MatCalendar), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.DateAdapter), i0__namespace.ɵɵdirectiveInject(i1$1.MAT_DATE_FORMATS), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    ExampleHeader.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ExampleHeader, selectors: [["example-header"]], decls: 19, vars: 1, consts: [[1, "example-header"], ["mat-icon-button", "", 1, "example-double-arrow", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "example-header-label"]], template: function ExampleHeader_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵlistener("click", function ExampleHeader_Template_button_click_1_listener() { return ctx.previousClicked("year"); });
                i0__namespace.ɵɵelementStart(2, "mat-icon");
                i0__namespace.ɵɵtext(3, "keyboard_arrow_left");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-icon");
                i0__namespace.ɵɵtext(5, "keyboard_arrow_left");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 2);
                i0__namespace.ɵɵlistener("click", function ExampleHeader_Template_button_click_6_listener() { return ctx.previousClicked("month"); });
                i0__namespace.ɵɵelementStart(7, "mat-icon");
                i0__namespace.ɵɵtext(8, "keyboard_arrow_left");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "span", 3);
                i0__namespace.ɵɵtext(10);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 2);
                i0__namespace.ɵɵlistener("click", function ExampleHeader_Template_button_click_11_listener() { return ctx.nextClicked("month"); });
                i0__namespace.ɵɵelementStart(12, "mat-icon");
                i0__namespace.ɵɵtext(13, "keyboard_arrow_right");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "button", 1);
                i0__namespace.ɵɵlistener("click", function ExampleHeader_Template_button_click_14_listener() { return ctx.nextClicked("year"); });
                i0__namespace.ɵɵelementStart(15, "mat-icon");
                i0__namespace.ɵɵtext(16, "keyboard_arrow_right");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "mat-icon");
                i0__namespace.ɵɵtext(18, "keyboard_arrow_right");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(10);
                i0__namespace.ɵɵtextInterpolate(ctx.periodLabel);
            }
        }, directives: [i4__namespace$1.MatButton, i6__namespace.MatIcon], styles: [".example-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n      margin: -22%;\n    }"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ExampleHeader, [{
                type: i0.Component,
                args: [{
                        selector: 'example-header',
                        styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                        template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: i3__namespace.MatCalendar }, { type: i1__namespace$1.DateAdapter }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.MAT_DATE_FORMATS]
                        }] }, { type: i0__namespace.ChangeDetectorRef }];
        }, null);
    })();

    /** @title Datepicker with custom icon */
    var DatepickerCustomIconExample = /** @class */ (function () {
        function DatepickerCustomIconExample() {
        }
        return DatepickerCustomIconExample;
    }());
    DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
    DatepickerCustomIconExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 9, vars: 2, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelementStart(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelementStart(5, "mat-icon", 3);
                i0__namespace.ɵɵtext(6, "keyboard_arrow_down");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(7, "mat-datepicker", null, 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(8);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i6__namespace.MatIcon, i3__namespace.MatDatepickerToggleIcon, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerCustomIconExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-custom-icon-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    /** @title Datepicker with custom date classes */
    var DatepickerDateClassExample = /** @class */ (function () {
        function DatepickerDateClassExample() {
            this.dateClass = function (cellDate, view) {
                // Only highligh dates inside the month view.
                if (view === 'month') {
                    var date = cellDate.getDate();
                    // Highlight the 1st and 20th day of each month.
                    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
                }
                return '';
            };
        }
        return DatepickerDateClassExample;
    }());
    DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
    DatepickerDateClassExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 7, vars: 3, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("dateClass", ctx.dateClass);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerDateClassExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-date-class-example', encapsulation: i0.ViewEncapsulation.None, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n", styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"] }]
            }], null, null);
    })();

    /** @title Disabled datepicker */
    var DatepickerDisabledExample = /** @class */ (function () {
        function DatepickerDisabledExample() {
        }
        return DatepickerDisabledExample;
    }());
    DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
    DatepickerDisabledExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 24, vars: 6, consts: [["appearance", "fill"], ["matInput", "", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Completely disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 1);
                i0__namespace.ɵɵelement(5, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(6, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "p");
                i0__namespace.ɵɵelementStart(9, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(10, "mat-label");
                i0__namespace.ɵɵtext(11, "Popup disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(12, "input", 4);
                i0__namespace.ɵɵelement(13, "mat-datepicker-toggle", 5);
                i0__namespace.ɵɵelement(14, "mat-datepicker", null, 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "p");
                i0__namespace.ɵɵelementStart(17, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Input disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(20, "input", 1);
                i0__namespace.ɵɵelement(21, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(22, "mat-datepicker", 7, 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(7);
                var _r1 = i0__namespace.ɵɵreference(15);
                var _r2 = i0__namespace.ɵɵreference(23);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("matDatepicker", _r1);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r1);
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("matDatepicker", _r2);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r2);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerDisabledExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-disabled-example', template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n" }]
            }], null, null);
    })();

    function DatepickerEventsExample_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var e_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(e_r2);
        }
    }
    /** @title Datepicker input and change events */
    var DatepickerEventsExample = /** @class */ (function () {
        function DatepickerEventsExample() {
            this.events = [];
        }
        DatepickerEventsExample.prototype.addEvent = function (type, event) {
            this.events.push(type + ": " + event.value);
        };
        return DatepickerEventsExample;
    }());
    DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
    DatepickerEventsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 9, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Input & change events");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "input", 1);
                i0__namespace.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_3_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function DatepickerEventsExample_Template_input_dateChange_3_listener($event) { return ctx.addEvent("change", $event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 4);
                i0__namespace.ɵɵtemplate(8, DatepickerEventsExample_div_8_Template, 2, 1, "div", 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.events);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker, i4__namespace.NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerEventsExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-events-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Input & change events</mat-label>\n  <input matInput [matDatepicker]=\"picker\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n", styles: [".example-events {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}\n"] }]
            }], null, null);
    })();

    /** @title Datepicker with filter validation */
    var DatepickerFilterExample = /** @class */ (function () {
        function DatepickerFilterExample() {
            this.myFilter = function (d) {
                var day = (d || new Date()).getDay();
                // Prevent Saturday and Sunday from being selected.
                return day !== 0 && day !== 6;
            };
        }
        return DatepickerFilterExample;
    }());
    DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
    DatepickerFilterExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 7, vars: 3, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerFilterExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-filter-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    var moment$2 = _rollupMoment__default['default'] || _rollupMoment__namespace;
    // See the Moment.js docs for the meaning of these formats:
    // https://momentjs.com/docs/#/displaying/format/
    var MY_FORMATS$1 = {
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
            this.date = new i3.FormControl(moment$2());
        }
        return DatepickerFormatsExample;
    }());
    DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
    DatepickerFormatsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [i0__namespace.ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: i1$1.DateAdapter,
                    useClass: materialMomentAdapter.MomentDateAdapter,
                    deps: [i1$1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: i1$1.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
            ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Verbose datepicker");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace$1.DefaultValueAccessor, i3__namespace$1.NgControlStatus, i3__namespace$1.FormControlDirective, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerFormatsExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-formats-example', providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            {
                                provide: i1$1.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i1$1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i1$1.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                        ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Verbose datepicker</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    /**
     * @title Testing with MatDatepickerInputHarness
     */
    var DatepickerHarnessExample = /** @class */ (function () {
        function DatepickerHarnessExample() {
            this.date = null;
            this.minDate = null;
        }
        return DatepickerHarnessExample;
    }());
    DatepickerHarnessExample.ɵfac = function DatepickerHarnessExample_Factory(t) { return new (t || DatepickerHarnessExample)(); };
    DatepickerHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerHarnessExample, selectors: [["datepicker-harness-example"]], decls: 3, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "ngModel", "min", "ngModelChange"], ["picker", ""]], template: function DatepickerHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "input", 0);
                i0__namespace.ɵɵlistener("ngModelChange", function DatepickerHarnessExample_Template_input_ngModelChange_0_listener($event) { return ctx.date = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(1, "mat-datepicker", null, 1);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("matDatepicker", _r0)("ngModel", ctx.date)("min", ctx.minDate);
            }
        }, directives: [i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace$1.DefaultValueAccessor, i3__namespace$1.NgControlStatus, i3__namespace$1.NgModel, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-harness-example', template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n" }]
            }], null, null);
    })();

    /** @title Datepicker inline calendar example */
    var DatepickerInlineCalendarExample = /** @class */ (function () {
        function DatepickerInlineCalendarExample() {
        }
        return DatepickerInlineCalendarExample;
    }());
    DatepickerInlineCalendarExample.ɵfac = function DatepickerInlineCalendarExample_Factory(t) { return new (t || DatepickerInlineCalendarExample)(); };
    DatepickerInlineCalendarExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerInlineCalendarExample, selectors: [["datepicker-inline-calendar-example"]], decls: 4, vars: 1, consts: [[1, "demo-inline-calendar-card"], [3, "selectedChange"]], template: function DatepickerInlineCalendarExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "mat-calendar", 1);
                i0__namespace.ɵɵlistener("selectedChange", function DatepickerInlineCalendarExample_Template_mat_calendar_selectedChange_1_listener($event) { return ctx.selected = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "p");
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1("Selected date: ", ctx.selected, "");
            }
        }, directives: [i1__namespace$2.MatCard, i3__namespace.MatCalendar], styles: [".demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerInlineCalendarExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-inline-calendar-example', template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar (selectedChange)=\"selected = $event\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"] }]
            }], null, null);
    })();

    /** @title Datepicker with different locale */
    var DatepickerLocaleExample = /** @class */ (function () {
        function DatepickerLocaleExample(_adapter) {
            this._adapter = _adapter;
        }
        DatepickerLocaleExample.prototype.french = function () {
            this._adapter.setLocale('fr');
        };
        return DatepickerLocaleExample;
    }());
    DatepickerLocaleExample.ɵfac = function DatepickerLocaleExample_Factory(t) { return new (t || DatepickerLocaleExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.DateAdapter)); };
    DatepickerLocaleExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerLocaleExample, selectors: [["datepicker-locale-example"]], features: [i0__namespace.ɵɵProvidersFeature([
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                { provide: i1$1.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                {
                    provide: i1$1.DateAdapter,
                    useClass: materialMomentAdapter.MomentDateAdapter,
                    deps: [i1$1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: i1$1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
            ])], decls: 9, vars: 2, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp", ""], ["mat-button", "", 3, "click"]], template: function DatepickerLocaleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Different locale");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "button", 4);
                i0__namespace.ɵɵlistener("click", function DatepickerLocaleExample_Template_button_click_7_listener() { return ctx.french(); });
                i0__namespace.ɵɵtext(8, "Dynamically switch to French");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker, i4__namespace$1.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerLocaleExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-locale-example', providers: [
                            // The locale would typically be provided on the root module of your application. We do it at
                            // the component level here, due to limitations of our example generation script.
                            { provide: i1$1.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            {
                                provide: i1$1.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i1$1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i1$1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                        ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], function () { return [{ type: i1__namespace$1.DateAdapter }]; }, null);
    })();

    /** @title Datepicker with min & max validation */
    var DatepickerMinMaxExample = /** @class */ (function () {
        function DatepickerMinMaxExample() {
            // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
            var currentYear = new Date().getFullYear();
            this.minDate = new Date(currentYear - 20, 0, 1);
            this.maxDate = new Date(currentYear + 1, 11, 31);
        }
        return DatepickerMinMaxExample;
    }());
    DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
    DatepickerMinMaxExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 7, vars: 4, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerMinMaxExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-min-max-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n" }]
            }], function () { return []; }, null);
    })();

    var moment$1 = _rollupMoment__default['default'] || _rollupMoment__namespace;
    /** @title Datepicker that uses Moment.js dates */
    var DatepickerMomentExample = /** @class */ (function () {
        function DatepickerMomentExample() {
            // Datepicker takes `Moment` objects instead of `Date` objects.
            this.date = new i3.FormControl(moment$1([2017, 0, 1]));
        }
        return DatepickerMomentExample;
    }());
    DatepickerMomentExample.ɵfac = function DatepickerMomentExample_Factory(t) { return new (t || DatepickerMomentExample)(); };
    DatepickerMomentExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerMomentExample, selectors: [["datepicker-moment-example"]], features: [i0__namespace.ɵɵProvidersFeature([
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: i1$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [i1$1.MAT_DATE_LOCALE] },
                { provide: i1$1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
            ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerMomentExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Moment.js datepicker");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace$1.DefaultValueAccessor, i3__namespace$1.NgControlStatus, i3__namespace$1.FormControlDirective, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerMomentExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-moment-example', providers: [
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            { provide: i1$1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [i1$1.MAT_DATE_LOCALE] },
                            { provide: i1$1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                        ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Moment.js datepicker</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    /** @title Basic datepicker */
    var DatepickerOverviewExample = /** @class */ (function () {
        function DatepickerOverviewExample() {
        }
        return DatepickerOverviewExample;
    }());
    DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
    DatepickerOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], decls: 7, vars: 2, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-overview-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n<!-- #docregion toggle -->\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n<!-- #enddocregion toggle -->\n</mat-form-field>\n" }]
            }], null, null);
    })();

    /** @title Datepicker start date */
    var DatepickerStartViewExample = /** @class */ (function () {
        function DatepickerStartViewExample() {
            this.startDate = new Date(1990, 0, 1);
        }
        return DatepickerStartViewExample;
    }());
    DatepickerStartViewExample.ɵfac = function DatepickerStartViewExample_Factory(t) { return new (t || DatepickerStartViewExample)(); };
    DatepickerStartViewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerStartViewExample, selectors: [["datepicker-start-view-example"]], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""]], template: function DatepickerStartViewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("startAt", ctx.startDate);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerStartViewExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-start-view-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    /** @title Datepicker touch UI */
    var DatepickerTouchExample = /** @class */ (function () {
        function DatepickerTouchExample() {
        }
        return DatepickerTouchExample;
    }());
    DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
    DatepickerTouchExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 7, vars: 2, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""]], template: function DatepickerTouchExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Choose a date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerTouchExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-touch-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi #picker></mat-datepicker>\n</mat-form-field>\n" }]
            }], null, null);
    })();

    /** @title Datepicker selected value */
    var DatepickerValueExample = /** @class */ (function () {
        function DatepickerValueExample() {
            this.date = new i3.FormControl(new Date());
            this.serializedDate = new i3.FormControl((new Date()).toISOString());
        }
        return DatepickerValueExample;
    }());
    DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
    DatepickerValueExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 21, vars: 9, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["picker2", ""], ["matInput", "", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Angular forms");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(5, "mat-datepicker", null, 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Angular forms (w/ deserialization)");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "input", 1);
                i0__namespace.ɵɵelement(11, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(12, "mat-datepicker", null, 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(15, "mat-label");
                i0__namespace.ɵɵtext(16, "Value binding");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(17, "input", 5);
                i0__namespace.ɵɵelement(18, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelement(19, "mat-datepicker", null, 6);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                var _r1 = i0__namespace.ɵɵreference(13);
                var _r2 = i0__namespace.ɵɵreference(20);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("matDatepicker", _r1)("formControl", ctx.serializedDate);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r1);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("matDatepicker", _r2)("value", ctx.date.value);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r2);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace$1.DefaultValueAccessor, i3__namespace$1.NgControlStatus, i3__namespace$1.FormControlDirective, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerValueExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-value-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms</mat-label>\n  <input matInput [matDatepicker]=\"picker1\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms (w/ deserialization)</mat-label>\n  <input matInput [matDatepicker]=\"picker2\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Value binding</mat-label>\n  <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
            }], null, null);
    })();

    var moment = _rollupMoment__default['default'] || _rollupMoment__namespace;
    // See the Moment.js docs for the meaning of these formats:
    // https://momentjs.com/docs/#/displaying/format/
    var MY_FORMATS = {
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
            this.date = new i3.FormControl(moment());
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
        return DatepickerViewsSelectionExample;
    }());
    DatepickerViewsSelectionExample.ɵfac = function DatepickerViewsSelectionExample_Factory(t) { return new (t || DatepickerViewsSelectionExample)(); };
    DatepickerViewsSelectionExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DatepickerViewsSelectionExample, selectors: [["datepicker-views-selection-example"]], features: [i0__namespace.ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: i1$1.DateAdapter,
                    useClass: materialMomentAdapter.MomentDateAdapter,
                    deps: [i1$1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: i1$1.MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected", "monthSelected"], ["dp", ""]], template: function DatepickerViewsSelectionExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Month and Year");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0__namespace.ɵɵelementStart(5, "mat-datepicker", 3, 4);
                i0__namespace.ɵɵlistener("yearSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_yearSelected_5_listener($event) { return ctx.chosenYearHandler($event); })("monthSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_monthSelected_5_listener($event) { i0__namespace.ɵɵrestoreView(_r1_1); var _r0 = i0__namespace.ɵɵreference(6); return ctx.chosenMonthHandler($event, _r0); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(6);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("for", _r0);
            }
        }, directives: [i1__namespace.MatFormField, i1__namespace.MatLabel, i2__namespace.MatInput, i3__namespace.MatDatepickerInput, i3__namespace$1.DefaultValueAccessor, i3__namespace$1.NgControlStatus, i3__namespace$1.FormControlDirective, i3__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i3__namespace.MatDatepicker], styles: [".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\n  display: none;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerViewsSelectionExample, [{
                type: i0.Component,
                args: [{ selector: 'datepicker-views-selection-example', providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            {
                                provide: i1$1.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i1$1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i1$1.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                        ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Month and Year</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n", styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"] }]
            }], null, null);
    })();

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
        DatepickerHarnessExample,
        DatepickerInlineCalendarExample,
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
    var DatepickerExamplesModule = /** @class */ (function () {
        function DatepickerExamplesModule() {
        }
        return DatepickerExamplesModule;
    }());
    DatepickerExamplesModule.ɵfac = function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); };
    DatepickerExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DatepickerExamplesModule });
    DatepickerExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i4$1.MatButtonModule,
                i1$2.MatCardModule,
                i3$1.MatDatepickerModule,
                i2.MatInputModule,
                i6.MatIconModule,
                i1$1.MatNativeDateModule,
                i3.ReactiveFormsModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DatepickerExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i4$1.MatButtonModule,
                            i1$2.MatCardModule,
                            i3$1.MatDatepickerModule,
                            i2.MatInputModule,
                            i6.MatIconModule,
                            i1$1.MatNativeDateModule,
                            i3.ReactiveFormsModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DatepickerExamplesModule, { declarations: [DatepickerApiExample,
                DatepickerColorExample,
                DatepickerCustomHeaderExample,
                DatepickerCustomIconExample,
                DatepickerDateClassExample,
                DatepickerDisabledExample,
                DatepickerEventsExample,
                DatepickerFilterExample,
                DatepickerFormatsExample,
                DatepickerHarnessExample,
                DatepickerInlineCalendarExample,
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
                ExampleHeader], imports: [i4.CommonModule,
                i4$1.MatButtonModule,
                i1$2.MatCardModule,
                i3$1.MatDatepickerModule,
                i2.MatInputModule,
                i6.MatIconModule,
                i1$1.MatNativeDateModule,
                i3.ReactiveFormsModule,
                i3.FormsModule], exports: [DatepickerApiExample,
                DatepickerColorExample,
                DatepickerCustomHeaderExample,
                DatepickerCustomIconExample,
                DatepickerDateClassExample,
                DatepickerDisabledExample,
                DatepickerEventsExample,
                DatepickerFilterExample,
                DatepickerFormatsExample,
                DatepickerHarnessExample,
                DatepickerInlineCalendarExample,
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
                ExampleHeader] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DateRangePickerComparisonExample = DateRangePickerComparisonExample;
    exports.DateRangePickerFormsExample = DateRangePickerFormsExample;
    exports.DateRangePickerOverviewExample = DateRangePickerOverviewExample;
    exports.DateRangePickerSelectionStrategyExample = DateRangePickerSelectionStrategyExample;
    exports.DatepickerActionsExample = DatepickerActionsExample;
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
    exports.DatepickerHarnessExample = DatepickerHarnessExample;
    exports.DatepickerInlineCalendarExample = DatepickerInlineCalendarExample;
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
