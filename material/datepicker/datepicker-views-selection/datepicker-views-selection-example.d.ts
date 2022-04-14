import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';
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
/** @title Datepicker emulating a Year and month picker */
export declare class DatepickerViewsSelectionExample {
    date: FormControl<_moment.Moment | null>;
    setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerViewsSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerViewsSelectionExample, "datepicker-views-selection-example", never, {}, {}, never, never>;
}
