import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Injectable, ChangeDetectionStrategy, Inject, ViewEncapsulation, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i3$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i1$1 from '@angular/material/core';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import * as i2 from '@angular/material/datepicker';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule } from '@angular/material/datepicker';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _rollupMoment from 'moment';
import _rollupMoment__default from 'moment';
import 'moment/locale/ja';
import 'moment/locale/fr';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
/** @title Date range picker comparison ranges */
class DateRangePickerComparisonExample {
    constructor() {
        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16)),
        });
        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19)),
        });
    }
}
DateRangePickerComparisonExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerComparisonExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerComparisonExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DateRangePickerComparisonExample, selector: "date-range-picker-comparison-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\" appearance=\"fill\">\n  <mat-label>First campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignOne\"\n    [rangePicker]=\"campaignOnePicker\"\n    [comparisonStart]=\"campaignTwo.value.start\"\n    [comparisonEnd]=\"campaignTwo.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\" appearance=\"fill\">\n  <mat-label>Second campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignTwo\"\n    [rangePicker]=\"campaignTwoPicker\"\n    [comparisonStart]=\"campaignOne.value.start\"\n    [comparisonEnd]=\"campaignOne.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\n</mat-form-field>\n", styles: [".example-form-field {\n  margin: 0 8px 16px 0;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerComparisonExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-comparison-example', template: "<mat-form-field class=\"example-form-field\" appearance=\"fill\">\n  <mat-label>First campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignOne\"\n    [rangePicker]=\"campaignOnePicker\"\n    [comparisonStart]=\"campaignTwo.value.start\"\n    [comparisonEnd]=\"campaignTwo.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\" appearance=\"fill\">\n  <mat-label>Second campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignTwo\"\n    [rangePicker]=\"campaignTwoPicker\"\n    [comparisonStart]=\"campaignOne.value.start\"\n    [comparisonEnd]=\"campaignOne.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\n</mat-form-field>\n", styles: [".example-form-field {\n  margin: 0 8px 16px 0;\n}\n"] }]
        }] });

/** @title Date range picker forms integration */
class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null),
        });
    }
}
DateRangePickerFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DateRangePickerFormsExample, selector: "date-range-picker-forms-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "json": i4.JsonPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-forms-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n" }]
        }] });

/** @title Basic date range picker */
class DateRangePickerOverviewExample {
}
DateRangePickerOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DateRangePickerOverviewExample, selector: "date-range-picker-overview-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-overview-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n" }]
        }] });

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
FiveDayRangeSelectionStrategy.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: FiveDayRangeSelectionStrategy, deps: [{ token: i1$1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable });
FiveDayRangeSelectionStrategy.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: FiveDayRangeSelectionStrategy });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: FiveDayRangeSelectionStrategy, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.DateAdapter }]; } });
/** @title Date range picker with custom a selection strategy */
class DateRangePickerSelectionStrategyExample {
}
DateRangePickerSelectionStrategyExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerSelectionStrategyExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerSelectionStrategyExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DateRangePickerSelectionStrategyExample, selector: "date-range-picker-selection-strategy-example", providers: [
        {
            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: FiveDayRangeSelectionStrategy,
        },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DateRangePickerSelectionStrategyExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-selection-strategy-example', providers: [
                        {
                            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                            useClass: FiveDayRangeSelectionStrategy,
                        },
                    ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n" }]
        }] });

/** @title Datepicker action buttons */
class DatepickerActionsExample {
}
DatepickerActionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerActionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerActionsExample, selector: "datepicker-actions-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i2.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { type: i3$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }, { type: i2.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { type: i2.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-actions-example', template: "<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"] }]
        }] });

/** @title Datepicker open method */
class DatepickerApiExample {
}
DatepickerApiExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerApiExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerApiExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerApiExample, selector: "datepicker-api-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i3$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerApiExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-api-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });

/** @title Datepicker palette colors */
class DatepickerColorExample {
}
DatepickerColorExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerColorExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerColorExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerColorExample, selector: "datepicker-color-example", ngImport: i0, template: "<mat-form-field color=\"accent\" appearance=\"fill\">\n  <mat-label>Inherited calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker1\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field color=\"accent\" appearance=\"fill\">\n  <mat-label>Custom calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker2\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerColorExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-color-example', template: "<mat-form-field color=\"accent\" appearance=\"fill\">\n  <mat-label>Inherited calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker1\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field color=\"accent\" appearance=\"fill\">\n  <mat-label>Custom calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker2\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });

/** @title Datepicker with custom calendar header */
class DatepickerCustomHeaderExample {
    constructor() {
        this.exampleHeader = ExampleHeader;
    }
}
DatepickerCustomHeaderExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerCustomHeaderExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerCustomHeaderExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerCustomHeaderExample, selector: "datepicker-custom-header-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerCustomHeaderExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-header-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n" }]
        }] });
/** Custom header component for datepicker. */
class ExampleHeader {
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
ExampleHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: ExampleHeader, deps: [{ token: i2.MatCalendar }, { token: i1$1.DateAdapter }, { token: MAT_DATE_FORMATS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ExampleHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: ExampleHeader, selector: "example-header", ngImport: i0, template: `
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
  `, isInline: true, styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "], components: [{ type: i3$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: ExampleHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'example-header',
                    styles: [
                        `
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
  `,
                    ],
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
        }], ctorParameters: function () { return [{ type: i2.MatCalendar }, { type: i1$1.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: i0.ChangeDetectorRef }]; } });

/** @title Datepicker with custom icon */
class DatepickerCustomIconExample {
}
DatepickerCustomIconExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerCustomIconExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerCustomIconExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerCustomIconExample, selector: "datepicker-custom-icon-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }, { type: i2.MatDatepickerToggleIcon, selector: "[matDatepickerToggleIcon]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerCustomIconExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-custom-icon-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n" }]
        }] });

/** @title Datepicker with custom date classes */
class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (cellDate, view) => {
            // Only highligh dates inside the month view.
            if (view === 'month') {
                const date = cellDate.getDate();
                // Highlight the 1st and 20th day of each month.
                return date === 1 || date === 20 ? 'example-custom-date-class' : '';
            }
            return '';
        };
    }
}
DatepickerDateClassExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerDateClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerDateClassExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerDateClassExample, selector: "datepicker-date-class-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n", styles: ["button.example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerDateClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-date-class-example', encapsulation: ViewEncapsulation.None, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n", styles: ["button.example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"] }]
        }] });

/** @title Disabled datepicker */
class DatepickerDisabledExample {
}
DatepickerDisabledExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerDisabledExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerDisabledExample, selector: "datepicker-disabled-example", ngImport: i0, template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-disabled-example', template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n" }]
        }] });

/** @title Datepicker input and change events */
class DatepickerEventsExample {
    constructor() {
        this.events = [];
    }
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
}
DatepickerEventsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerEventsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerEventsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerEventsExample, selector: "datepicker-events-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Input & change events</mat-label>\n  <input matInput [matDatepicker]=\"picker\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n", styles: [".example-events {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerEventsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-events-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Input & change events</mat-label>\n  <input matInput [matDatepicker]=\"picker\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n", styles: [".example-events {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}\n"] }]
        }] });

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
DatepickerFilterExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerFilterExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerFilterExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerFilterExample, selector: "datepicker-filter-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerFilterExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-filter-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n" }]
        }] });

const moment$2 = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_FORMATS$1 = {
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
        this.date = new FormControl(moment$2());
    }
}
DatepickerFormatsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerFormatsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerFormatsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerFormatsExample, selector: "datepicker-formats-example", providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Verbose datepicker</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MMMM DD, YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerFormatsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-formats-example', providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                    ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Verbose datepicker</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MMMM DD, YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n" }]
        }] });

/**
 * @title Testing with MatDatepickerInputHarness
 */
class DatepickerHarnessExample {
    constructor() {
        this.date = null;
        this.minDate = null;
    }
}
DatepickerHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerHarnessExample, selector: "datepicker-harness-example", ngImport: i0, template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n", components: [{ type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-harness-example', template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n" }]
        }] });

/** @title Datepicker inline calendar example */
class DatepickerInlineCalendarExample {
}
DatepickerInlineCalendarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerInlineCalendarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerInlineCalendarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerInlineCalendarExample, selector: "datepicker-inline-calendar-example", ngImport: i0, template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"], components: [{ type: i1$2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatCalendar, selector: "mat-calendar", inputs: ["headerComponent", "startAt", "startView", "selected", "minDate", "maxDate", "dateFilter", "dateClass", "comparisonStart", "comparisonEnd"], outputs: ["selectedChange", "yearSelected", "monthSelected", "viewChanged", "_userSelection"], exportAs: ["matCalendar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerInlineCalendarExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-inline-calendar-example', template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"] }]
        }] });

/** @title Datepicker with different locale */
class DatepickerLocaleExample {
    constructor(_adapter, _locale) {
        this._adapter = _adapter;
        this._locale = _locale;
    }
    french() {
        this._locale = 'fr';
        this._adapter.setLocale(this._locale);
    }
    getDateFormatString() {
        if (this._locale === 'ja-JP') {
            return 'YYYY/MM/DD';
        }
        else if (this._locale === 'fr') {
            return 'DD/MM/YYYY';
        }
        return '';
    }
}
DatepickerLocaleExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerLocaleExample, deps: [{ token: i1$1.DateAdapter }, { token: MAT_DATE_LOCALE }], target: i0.ɵɵFactoryTarget.Component });
DatepickerLocaleExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerLocaleExample, selector: "datepicker-locale-example", providers: [
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i3$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-locale-example', providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }]; } });

/** @title Datepicker with min & max validation */
class DatepickerMinMaxExample {
    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }
}
DatepickerMinMaxExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerMinMaxExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerMinMaxExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerMinMaxExample, selector: "datepicker-min-max-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerMinMaxExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-min-max-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n" }]
        }], ctorParameters: function () { return []; } });

const moment$1 = _rollupMoment__default || _rollupMoment;
/** @title Datepicker that uses Moment.js dates */
class DatepickerMomentExample {
    constructor() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment$1([2017, 0, 1]));
    }
}
DatepickerMomentExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerMomentExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerMomentExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerMomentExample, selector: "datepicker-moment-example", providers: [
        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Moment.js datepicker</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerMomentExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-moment-example', providers: [
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Moment.js datepicker</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n" }]
        }] });

/** @title Basic datepicker */
class DatepickerOverviewExample {
}
DatepickerOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerOverviewExample, selector: "datepicker-overview-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n<!-- #docregion toggle -->\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n<!-- #enddocregion toggle -->\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-overview-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n<!-- #docregion toggle -->\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n<!-- #enddocregion toggle -->\n</mat-form-field>\n" }]
        }] });

/** @title Datepicker start date */
class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
}
DatepickerStartViewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerStartViewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerStartViewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerStartViewExample, selector: "datepicker-start-view-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerStartViewExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-start-view-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n" }]
        }] });

/** @title Datepicker touch UI */
class DatepickerTouchExample {
}
DatepickerTouchExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerTouchExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerTouchExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerTouchExample, selector: "datepicker-touch-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi #picker></mat-datepicker>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerTouchExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-touch-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi #picker></mat-datepicker>\n</mat-form-field>\n" }]
        }] });

/** @title Datepicker selected value */
class DatepickerValueExample {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl(new Date().toISOString());
    }
}
DatepickerValueExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerValueExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerValueExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerValueExample, selector: "datepicker-value-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms</mat-label>\n  <input matInput [matDatepicker]=\"picker1\" [formControl]=\"date\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms (w/ deserialization)</mat-label>\n  <input matInput [matDatepicker]=\"picker2\"\n         [formControl]=\"serializedDate\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Value binding</mat-label>\n  <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerValueExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-value-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms</mat-label>\n  <input matInput [matDatepicker]=\"picker1\" [formControl]=\"date\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Angular forms (w/ deserialization)</mat-label>\n  <input matInput [matDatepicker]=\"picker2\"\n         [formControl]=\"serializedDate\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Value binding</mat-label>\n  <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });

const moment = _rollupMoment__default || _rollupMoment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
const MY_FORMATS = {
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
        this.date = new FormControl(moment());
    }
    setMonthAndYear(normalizedMonthAndYear, datepicker) {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonthAndYear.month());
        ctrlValue.year(normalizedMonthAndYear.year());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
}
DatepickerViewsSelectionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerViewsSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerViewsSelectionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: DatepickerViewsSelectionExample, selector: "datepicker-views-selection-example", providers: [
        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
        // application's root module. We provide it at the component level here, due to limitations of
        // our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ], ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Month and Year</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MM/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (monthSelected)=\"setMonthAndYear($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n", styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerViewsSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-views-selection-example', providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ], template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Month and Year</mat-label>\n  <input matInput [matDatepicker]=\"dp\" [formControl]=\"date\">\n  <mat-hint>MM/YYYY</mat-hint>\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (monthSelected)=\"setMonthAndYear($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n", styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"] }]
        }] });

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
class DatepickerExamplesModule {
}
DatepickerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DatepickerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerExamplesModule, declarations: [DatepickerApiExample,
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
        ExampleHeader], imports: [CommonModule,
        MatButtonModule,
        MatCardModule,
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
DatepickerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerExamplesModule, providers: [
        // Except in specific examples, use 'en-US' locale in datepicker examples. This ensures that
        // the hardcoded date format strings displayed in `<mat-hint>` will match the format used by
        // `NativeDateModule`.
        { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    ], imports: [[
            CommonModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatInputModule,
            MatIconModule,
            MatNativeDateModule,
            ReactiveFormsModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: DatepickerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatInputModule,
                        MatIconModule,
                        MatNativeDateModule,
                        ReactiveFormsModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    providers: [
                        // Except in specific examples, use 'en-US' locale in datepicker examples. This ensures that
                        // the hardcoded date format strings displayed in `<mat-hint>` will match the format used by
                        // `NativeDateModule`.
                        { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DateRangePickerComparisonExample, DateRangePickerFormsExample, DateRangePickerOverviewExample, DateRangePickerSelectionStrategyExample, DatepickerActionsExample, DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerExamplesModule, DatepickerFilterExample, DatepickerFormatsExample, DatepickerHarnessExample, DatepickerInlineCalendarExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, ExampleHeader };
//# sourceMappingURL=datepicker.mjs.map
