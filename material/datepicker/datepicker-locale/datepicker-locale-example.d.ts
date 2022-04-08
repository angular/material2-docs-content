import { DateAdapter } from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';
import * as i0 from "@angular/core";
/** @title Datepicker with different locale */
export declare class DatepickerLocaleExample {
    private _adapter;
    private _locale;
    constructor(_adapter: DateAdapter<any>, _locale: string);
    french(): void;
    getDateFormatString(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerLocaleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerLocaleExample, "datepicker-locale-example", never, {}, {}, never, never>;
}
