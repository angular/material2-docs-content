import { ChangeDetectorRef } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i25 from '@angular/common';
import * as i26 from '@angular/material/button';
import * as i27 from '@angular/material/card';
import * as i28 from '@angular/material/datepicker';
import * as i29 from '@angular/material/input';
import * as i30 from '@angular/material/icon';
import * as i31 from '@angular/material/core';
import * as i32 from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDateFormats } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDateRangeSelectionStrategy } from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as _moment from 'moment';
import { OnDestroy } from '@angular/core';

/** @title Datepicker action buttons */
export declare class DatepickerActionsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerActionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerActionsExample, "datepicker-actions-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker open method */
export declare class DatepickerApiExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerApiExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerApiExample, "datepicker-api-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker palette colors */
export declare class DatepickerColorExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerColorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerColorExample, "datepicker-color-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker with custom calendar header */
export declare class DatepickerCustomHeaderExample {
    exampleHeader: typeof ExampleHeader;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerCustomHeaderExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerCustomHeaderExample, "datepicker-custom-header-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker with custom icon */
export declare class DatepickerCustomIconExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerCustomIconExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerCustomIconExample, "datepicker-custom-icon-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker with custom date classes */
export declare class DatepickerDateClassExample {
    dateClass: MatCalendarCellClassFunction<Date>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDateClassExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerDateClassExample, "datepicker-date-class-example", never, {}, {}, never, never, false, never>;
}

/** @title Disabled datepicker */
export declare class DatepickerDisabledExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerDisabledExample, "datepicker-disabled-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker input and change events */
export declare class DatepickerEventsExample {
    events: string[];
    addEvent(type: string, event: MatDatepickerInputEvent<Date>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerEventsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerEventsExample, "datepicker-events-example", never, {}, {}, never, never, false, never>;
}

export declare class DatepickerExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DatepickerExamplesModule, [typeof i1.DatepickerApiExample, typeof i2.DatepickerColorExample, typeof i3.DatepickerCustomHeaderExample, typeof i4.DatepickerCustomIconExample, typeof i5.DatepickerDateClassExample, typeof i6.DatepickerDisabledExample, typeof i7.DatepickerEventsExample, typeof i8.DatepickerFilterExample, typeof i9.DatepickerFormatsExample, typeof i10.DatepickerHarnessExample, typeof i11.DatepickerInlineCalendarExample, typeof i12.DatepickerLocaleExample, typeof i13.DatepickerMinMaxExample, typeof i14.DatepickerMomentExample, typeof i15.DatepickerOverviewExample, typeof i16.DatepickerStartViewExample, typeof i17.DatepickerTouchExample, typeof i18.DatepickerValueExample, typeof i19.DatepickerViewsSelectionExample, typeof i20.DateRangePickerOverviewExample, typeof i21.DateRangePickerFormsExample, typeof i22.DateRangePickerComparisonExample, typeof i23.DateRangePickerSelectionStrategyExample, typeof i24.DatepickerActionsExample, typeof i3.ExampleHeader], [typeof i25.CommonModule, typeof i26.MatButtonModule, typeof i27.MatCardModule, typeof i28.MatDatepickerModule, typeof i29.MatInputModule, typeof i30.MatIconModule, typeof i31.MatNativeDateModule, typeof i32.ReactiveFormsModule, typeof i32.FormsModule], [typeof i1.DatepickerApiExample, typeof i2.DatepickerColorExample, typeof i3.DatepickerCustomHeaderExample, typeof i4.DatepickerCustomIconExample, typeof i5.DatepickerDateClassExample, typeof i6.DatepickerDisabledExample, typeof i7.DatepickerEventsExample, typeof i8.DatepickerFilterExample, typeof i9.DatepickerFormatsExample, typeof i10.DatepickerHarnessExample, typeof i11.DatepickerInlineCalendarExample, typeof i12.DatepickerLocaleExample, typeof i13.DatepickerMinMaxExample, typeof i14.DatepickerMomentExample, typeof i15.DatepickerOverviewExample, typeof i16.DatepickerStartViewExample, typeof i17.DatepickerTouchExample, typeof i18.DatepickerValueExample, typeof i19.DatepickerViewsSelectionExample, typeof i20.DateRangePickerOverviewExample, typeof i21.DateRangePickerFormsExample, typeof i22.DateRangePickerComparisonExample, typeof i23.DateRangePickerSelectionStrategyExample, typeof i24.DatepickerActionsExample, typeof i3.ExampleHeader]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DatepickerExamplesModule>;
}

/** @title Datepicker with filter validation */
export declare class DatepickerFilterExample {
    myFilter: (d: Date | null) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerFilterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerFilterExample, "datepicker-filter-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker with custom formats */
export declare class DatepickerFormatsExample {
    date: FormControl<_moment.Moment | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerFormatsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerFormatsExample, "datepicker-formats-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatDatepickerInputHarness
 */
export declare class DatepickerHarnessExample {
    date: Date | null;
    minDate: Date | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerHarnessExample, "datepicker-harness-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker inline calendar example */
export declare class DatepickerInlineCalendarExample {
    selected: Date | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerInlineCalendarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerInlineCalendarExample, "datepicker-inline-calendar-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker with different locale */
export declare class DatepickerLocaleExample {
    private _adapter;
    private _locale;
    constructor(_adapter: DateAdapter<any>, _locale: string);
    french(): void;
    getDateFormatString(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerLocaleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerLocaleExample, "datepicker-locale-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker with min & max validation */
export declare class DatepickerMinMaxExample {
    minDate: Date;
    maxDate: Date;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerMinMaxExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerMinMaxExample, "datepicker-min-max-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker that uses Moment.js dates */
export declare class DatepickerMomentExample {
    date: FormControl<_moment.Moment | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerMomentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerMomentExample, "datepicker-moment-example", never, {}, {}, never, never, false, never>;
}

/** @title Basic datepicker */
export declare class DatepickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerOverviewExample, "datepicker-overview-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker start date */
export declare class DatepickerStartViewExample {
    startDate: Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerStartViewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerStartViewExample, "datepicker-start-view-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker touch UI */
export declare class DatepickerTouchExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerTouchExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerTouchExample, "datepicker-touch-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker selected value */
export declare class DatepickerValueExample {
    date: FormControl<Date | null>;
    serializedDate: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerValueExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerValueExample, "datepicker-value-example", never, {}, {}, never, never, false, never>;
}

/** @title Datepicker emulating a Year and month picker */
export declare class DatepickerViewsSelectionExample {
    date: FormControl<_moment.Moment | null>;
    setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerViewsSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerViewsSelectionExample, "datepicker-views-selection-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerComparisonExample, "date-range-picker-comparison-example", never, {}, {}, never, never, false, never>;
}

/** @title Date range picker forms integration */
export declare class DateRangePickerFormsExample {
    range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerFormsExample, "date-range-picker-forms-example", never, {}, {}, never, never, false, never>;
}

/** @title Basic date range picker */
export declare class DateRangePickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerOverviewExample, "date-range-picker-overview-example", never, {}, {}, never, never, false, never>;
}

/** @title Date range picker with custom a selection strategy */
export declare class DateRangePickerSelectionStrategyExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerSelectionStrategyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerSelectionStrategyExample, "date-range-picker-selection-strategy-example", never, {}, {}, never, never, false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ExampleHeader<any>, "example-header", never, {}, {}, never, never, false, never>;
}

declare class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
    private _dateAdapter;
    constructor(_dateAdapter: DateAdapter<D>);
    selectionFinished(date: D | null): DateRange<D>;
    createPreview(activeDate: D | null): DateRange<D>;
    private _createFiveDayRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiveDayRangeSelectionStrategy<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FiveDayRangeSelectionStrategy<any>>;
}

declare namespace i1 {
    export {
        DatepickerApiExample
    }
}

declare namespace i10 {
    export {
        DatepickerHarnessExample
    }
}

declare namespace i11 {
    export {
        DatepickerInlineCalendarExample
    }
}

declare namespace i12 {
    export {
        DatepickerLocaleExample
    }
}

declare namespace i13 {
    export {
        DatepickerMinMaxExample
    }
}

declare namespace i14 {
    export {
        DatepickerMomentExample
    }
}

declare namespace i15 {
    export {
        DatepickerOverviewExample
    }
}

declare namespace i16 {
    export {
        DatepickerStartViewExample
    }
}

declare namespace i17 {
    export {
        DatepickerTouchExample
    }
}

declare namespace i18 {
    export {
        DatepickerValueExample
    }
}

declare namespace i19 {
    export {
        MY_FORMATS_2 as MY_FORMATS,
        DatepickerViewsSelectionExample
    }
}

declare namespace i2 {
    export {
        DatepickerColorExample
    }
}

declare namespace i20 {
    export {
        DateRangePickerOverviewExample
    }
}

declare namespace i21 {
    export {
        DateRangePickerFormsExample
    }
}

declare namespace i22 {
    export {
        DateRangePickerComparisonExample
    }
}

declare namespace i23 {
    export {
        FiveDayRangeSelectionStrategy,
        DateRangePickerSelectionStrategyExample
    }
}

declare namespace i24 {
    export {
        DatepickerActionsExample
    }
}

declare namespace i3 {
    export {
        DatepickerCustomHeaderExample,
        ExampleHeader
    }
}

declare namespace i4 {
    export {
        DatepickerCustomIconExample
    }
}

declare namespace i5 {
    export {
        DatepickerDateClassExample
    }
}

declare namespace i6 {
    export {
        DatepickerDisabledExample
    }
}

declare namespace i7 {
    export {
        DatepickerEventsExample
    }
}

declare namespace i8 {
    export {
        DatepickerFilterExample
    }
}

declare namespace i9 {
    export {
        MY_FORMATS,
        DatepickerFormatsExample
    }
}

declare const MY_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};

declare const MY_FORMATS_2: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};

export { }
