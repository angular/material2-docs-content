import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
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
    date: FormControl;
    chosenYearHandler(normalizedYear: Moment): void;
    chosenMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>): void;
}
