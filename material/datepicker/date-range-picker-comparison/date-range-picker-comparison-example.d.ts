import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerComparisonExample, "date-range-picker-comparison-example", never, {}, {}, never, never, false>;
}
