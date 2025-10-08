import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import { OnDestroy, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction, MatDatepickerInputEvent, MatDatepicker } from '@angular/material/datepicker';
import { DateTime } from 'luxon';
import { MatDialog } from '@angular/material/dialog';

/** @title Date range picker comparison ranges */
declare class DateRangePickerComparisonExample {
    readonly campaignOne: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    readonly campaignTwo: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerComparisonExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerComparisonExample, "date-range-picker-comparison-example", never, {}, {}, never, never, true, never>;
}

/** @title Date range picker forms integration */
declare class DateRangePickerFormsExample {
    readonly range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerFormsExample, "date-range-picker-forms-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic date range picker */
declare class DateRangePickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerOverviewExample, "date-range-picker-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Date range picker with a custom selection strategy */
declare class DateRangePickerSelectionStrategyExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerSelectionStrategyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerSelectionStrategyExample, "date-range-picker-selection-strategy-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker action buttons */
declare class DatepickerActionsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerActionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerActionsExample, "datepicker-actions-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker open method */
declare class DatepickerApiExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerApiExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerApiExample, "datepicker-api-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom calendar header */
declare class DatepickerCustomHeaderExample {
    readonly exampleHeader: typeof ExampleHeader;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerCustomHeaderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerCustomHeaderExample, "datepicker-custom-header-example", never, {}, {}, never, never, true, never>;
}
/** Custom header component for datepicker. */
declare class ExampleHeader<D> implements OnDestroy {
    private _calendar;
    private _dateAdapter;
    private _dateFormats;
    private _destroyed;
    readonly periodLabel: i0.WritableSignal<string>;
    constructor();
    ngOnDestroy(): void;
    previousClicked(mode: 'month' | 'year'): void;
    nextClicked(mode: 'month' | 'year'): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExampleHeader<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExampleHeader<any>, "example-header", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom icon */
declare class DatepickerCustomIconExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerCustomIconExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerCustomIconExample, "datepicker-custom-icon-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom date classes */
declare class DatepickerDateClassExample {
    dateClass: MatCalendarCellClassFunction<Date>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDateClassExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerDateClassExample, "datepicker-date-class-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled datepicker */
declare class DatepickerDisabledExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerDisabledExample, "datepicker-disabled-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker input and change events */
declare class DatepickerEventsExample {
    events: i0.WritableSignal<string[]>;
    addEvent(type: string, event: MatDatepickerInputEvent<Date>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerEventsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerEventsExample, "datepicker-events-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with filter validation */
declare class DatepickerFilterExample {
    myFilter: (d: Date | null) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerFilterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerFilterExample, "datepicker-filter-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with custom formats */
declare class DatepickerFormatsExample {
    readonly date: FormControl<DateTime<true> | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerFormatsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerFormatsExample, "datepicker-formats-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatDatepickerInputHarness
 */
declare class DatepickerHarnessExample {
    date: i0.ModelSignal<Date | null>;
    minDate: i0.WritableSignal<Date | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerHarnessExample, "datepicker-harness-example", never, { "date": { "alias": "date"; "required": false; "isSignal": true; }; }, { "date": "dateChange"; }, never, never, true, never>;
}

/** @title Datepicker inline calendar example */
declare class DatepickerInlineCalendarExample {
    selected: i0.ModelSignal<Date | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerInlineCalendarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerInlineCalendarExample, "datepicker-inline-calendar-example", never, { "selected": { "alias": "selected"; "required": false; "isSignal": true; }; }, { "selected": "selectedChange"; }, never, never, true, never>;
}

/** @title Datepicker with different locale */
declare class DatepickerLocaleExample implements OnInit {
    private readonly _adapter;
    private readonly _intl;
    private readonly _locale;
    readonly dateFormatString: i0.Signal<"" | "YYYY/MM/DD" | "DD/MM/YYYY">;
    ngOnInit(): void;
    french(): void;
    updateCloseButtonLabel(label: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerLocaleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerLocaleExample, "datepicker-locale-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker with min & max validation */
declare class DatepickerMinMaxExample {
    private readonly _currentYear;
    readonly minDate: Date;
    readonly maxDate: Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerMinMaxExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerMinMaxExample, "datepicker-min-max-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker that uses Luxon dates */
declare class DatepickerLuxonExample {
    readonly date: FormControl<DateTime<true> | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerLuxonExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerLuxonExample, "datepicker-luxon-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic datepicker */
declare class DatepickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerOverviewExample, "datepicker-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker start date */
declare class DatepickerStartViewExample {
    readonly startDate: Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerStartViewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerStartViewExample, "datepicker-start-view-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker touch UI */
declare class DatepickerTouchExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerTouchExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerTouchExample, "datepicker-touch-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker selected value */
declare class DatepickerValueExample {
    readonly date: FormControl<Date | null>;
    readonly serializedDate: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerValueExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerValueExample, "datepicker-value-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker emulating a Year and month picker */
declare class DatepickerViewsSelectionExample {
    readonly date: FormControl<DateTime<boolean> | null>;
    setMonthAndYear(normalizedMonthAndYear: DateTime, datepicker: MatDatepicker<DateTime>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerViewsSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerViewsSelectionExample, "datepicker-views-selection-example", never, {}, {}, never, never, true, never>;
}

/** @title Datepicker inside a MatDialog */
declare class DatepickerDialogExample {
    dialog: MatDialog;
    selectedDate: i0.ModelSignal<Date | null>;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDialogExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerDialogExample, "datepicker-dialog-example", never, { "selectedDate": { "alias": "selectedDate"; "required": false; "isSignal": true; }; }, { "selectedDate": "selectedDateChange"; }, never, never, true, never>;
}

export { DateRangePickerComparisonExample, DateRangePickerFormsExample, DateRangePickerOverviewExample, DateRangePickerSelectionStrategyExample, DatepickerActionsExample, DatepickerApiExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDialogExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerFilterExample, DatepickerFormatsExample, DatepickerHarnessExample, DatepickerInlineCalendarExample, DatepickerLocaleExample, DatepickerLuxonExample, DatepickerMinMaxExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, ExampleHeader };
