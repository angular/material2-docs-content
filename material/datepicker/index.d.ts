import { ChangeDetectorRef } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDateFormats } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as _moment from 'moment';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

/** @title Datepicker action buttons */
export declare class DatepickerActionsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerActionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerActionsExample, "datepicker-actions-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker open method */
export declare class DatepickerApiExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerApiExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerApiExample, "datepicker-api-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker palette colors */
export declare class DatepickerColorExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerColorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerColorExample, "datepicker-color-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom calendar header */
export declare class DatepickerCustomHeaderExample {
    exampleHeader: typeof ExampleHeader;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerCustomHeaderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerCustomHeaderExample, "datepicker-custom-header-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom icon */
export declare class DatepickerCustomIconExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerCustomIconExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerCustomIconExample, "datepicker-custom-icon-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom date classes */
export declare class DatepickerDateClassExample {
    dateClass: MatCalendarCellClassFunction<Date>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDateClassExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerDateClassExample, "datepicker-date-class-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled datepicker */
export declare class DatepickerDisabledExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerDisabledExample, "datepicker-disabled-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker input and change events */
export declare class DatepickerEventsExample {
    events: string[];
    addEvent(type: string, event: MatDatepickerInputEvent<Date>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerEventsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerEventsExample, "datepicker-events-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with filter validation */
export declare class DatepickerFilterExample {
    myFilter: (d: Date | null) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerFilterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerFilterExample, "datepicker-filter-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom formats */
export declare class DatepickerFormatsExample {
    date: FormControl<_moment.Moment | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerFormatsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerFormatsExample, "datepicker-formats-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatDatepickerInputHarness
 */
export declare class DatepickerHarnessExample {
    date: Date | null;
    minDate: Date | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerHarnessExample, "datepicker-harness-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker inline calendar example */
export declare class DatepickerInlineCalendarExample {
    selected: Date | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerInlineCalendarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerInlineCalendarExample, "datepicker-inline-calendar-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with different locale */
export declare class DatepickerLocaleExample implements OnInit {
    private _adapter;
    private _intl;
    private _locale;
    constructor(_adapter: DateAdapter<any>, _intl: MatDatepickerIntl, _locale: string);
    ngOnInit(): void;
    french(): void;
    updateCloseButtonLabel(label: string): void;
    getDateFormatString(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerLocaleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerLocaleExample, "datepicker-locale-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with min & max validation */
export declare class DatepickerMinMaxExample {
    minDate: Date;
    maxDate: Date;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerMinMaxExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerMinMaxExample, "datepicker-min-max-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker that uses Moment.js dates */
export declare class DatepickerMomentExample {
    date: FormControl<_moment.Moment | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerMomentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerMomentExample, "datepicker-moment-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic datepicker */
export declare class DatepickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerOverviewExample, "datepicker-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker start date */
export declare class DatepickerStartViewExample {
    startDate: Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerStartViewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerStartViewExample, "datepicker-start-view-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker touch UI */
export declare class DatepickerTouchExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerTouchExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerTouchExample, "datepicker-touch-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker selected value */
export declare class DatepickerValueExample {
    date: FormControl<Date | null>;
    serializedDate: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerValueExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerValueExample, "datepicker-value-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker emulating a Year and month picker */
export declare class DatepickerViewsSelectionExample {
    date: FormControl<_moment.Moment | null>;
    setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerViewsSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerViewsSelectionExample, "datepicker-views-selection-example", never, {}, {}, never, never, true, never>;
}

/** @title Date range picker comparison ranges */
export declare class DateRangePickerComparisonExample {
    campaignOne: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    campaignTwo: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerComparisonExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerComparisonExample, "date-range-picker-comparison-example", never, {}, {}, never, never, true, never>;
}

/** @title Date range picker forms integration */
export declare class DateRangePickerFormsExample {
    range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerFormsExample, "date-range-picker-forms-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic date range picker */
export declare class DateRangePickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerOverviewExample, "date-range-picker-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Date range picker with custom a selection strategy */
export declare class DateRangePickerSelectionStrategyExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerSelectionStrategyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerSelectionStrategyExample, "date-range-picker-selection-strategy-example", never, {}, {}, never, never, true, never>;
}

/** Custom header component for datepicker. */
export declare class ExampleHeader<D> implements OnDestroy {
    private _calendar;
    private _dateAdapter;
    private _dateFormats;
    private _destroyed;
    constructor(_calendar: MatCalendar<D>, _dateAdapter: DateAdapter<D>, _dateFormats: MatDateFormats, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    get periodLabel(): string;
    previousClicked(mode: 'month' | 'year'): void;
    nextClicked(mode: 'month' | 'year'): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExampleHeader<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExampleHeader<any>, "example-header", never, {}, {}, never, never, true, never>;
}

export { }
