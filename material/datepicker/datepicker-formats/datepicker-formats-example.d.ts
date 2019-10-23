import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare const MY_FORMATS: {
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
/** @title Datepicker with custom formats */
export declare class DatepickerFormatsExample {
    date: FormControl;
    static ɵfac: i0.ɵɵFactoryDef<DatepickerFormatsExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DatepickerFormatsExample, "datepicker-formats-example", never, {}, {}, never>;
}
