import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatCalendar } from '@angular/material';
import { DateAdapter, MatDateFormats } from '@angular/material/core';
/** @title Datepicker with custom calendar header */
export declare class DatepickerCustomHeaderExample {
    exampleHeader: typeof ExampleHeader;
}
/** Custom header component for datepicker. */
export declare class ExampleHeader<D> implements OnDestroy {
    private calendar;
    private dateAdapter;
    private dateFormats;
    private destroyed;
    constructor(calendar: MatCalendar<D>, dateAdapter: DateAdapter<D>, dateFormats: MatDateFormats, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    readonly periodLabel: string;
    previousClicked(mode: 'month' | 'year'): void;
    nextClicked(mode: 'month' | 'year'): void;
}
