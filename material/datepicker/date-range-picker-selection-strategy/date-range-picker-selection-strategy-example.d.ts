import { DateAdapter } from '@angular/material/core';
import { MatDateRangeSelectionStrategy, DateRange } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
export declare class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
    private _dateAdapter;
    constructor(_dateAdapter: DateAdapter<D>);
    selectionFinished(date: D | null): DateRange<D>;
    createPreview(activeDate: D | null): DateRange<D>;
    private _createFiveDayRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiveDayRangeSelectionStrategy<any>, never>;
    static ɵprov: i0.ɵɵInjectableDef<FiveDayRangeSelectionStrategy<any>>;
}
/** @title Date range picker with custom a selection strategy */
export declare class DateRangePickerSelectionStrategyExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerSelectionStrategyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerSelectionStrategyExample, "date-range-picker-selection-strategy-example", never, {}, {}, never, never>;
}
