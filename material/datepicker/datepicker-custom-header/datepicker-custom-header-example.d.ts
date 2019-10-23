import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MatDateFormats } from '@angular/material/core';
import * as i0 from "@angular/core";
/** @title Datepicker with custom calendar header */
export declare class DatepickerCustomHeaderExample {
    exampleHeader: typeof ExampleHeader;
    static ɵfac: i0.ɵɵFactoryDef<DatepickerCustomHeaderExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DatepickerCustomHeaderExample, "datepicker-custom-header-example", never, {}, {}, never>;
}
/** Custom header component for datepicker. */
export declare class ExampleHeader<D> implements OnDestroy {
    private _calendar;
    private _dateAdapter;
    private _dateFormats;
    private _destroyed;
    constructor(_calendar: MatCalendar<D>, _dateAdapter: DateAdapter<D>, _dateFormats: MatDateFormats, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    readonly periodLabel: string;
    previousClicked(mode: 'month' | 'year'): void;
    nextClicked(mode: 'month' | 'year'): void;
    static ɵfac: i0.ɵɵFactoryDef<ExampleHeader<any>>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ExampleHeader<any>, "example-header", never, {}, {}, never>;
}
