import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Date range picker forms integration */
export declare class DateRangePickerFormsExample {
    range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerFormsExample, "date-range-picker-forms-example", never, {}, {}, never, never, false>;
}
