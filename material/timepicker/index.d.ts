import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import { MatTimepickerOption } from '@angular/material/timepicker';
import { Signal } from '@angular/core';

/** @title Timepicker with custom toggle icon */
export declare class TimepickerCustomIconExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerCustomIconExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerCustomIconExample, "timepicker-custom-icon-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker integration with datepicker */
export declare class TimepickerDatepickerIntegrationExample {
    value: Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerDatepickerIntegrationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerDatepickerIntegrationExample, "timepicker-datepicker-integration-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker forms integration */
export declare class TimepickerFormsExample {
    formControl: FormControl<Date | null>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerFormsExample, "timepicker-forms-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatTimepickerInputHarness
 */
export declare class TimepickerHarnessExample {
    date: Signal<Date | null>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerHarnessExample, "timepicker-harness-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker with different locale */
export declare class TimepickerLocaleExample {
    private readonly _adapter;
    value: Date;
    protected switchLocale(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerLocaleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerLocaleExample, "timepicker-locale-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker options customization */
export declare class TimepickerOptionsExample {
    customOptions: MatTimepickerOption<Date>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerOptionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerOptionsExample, "timepicker-options-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic timepicker */
export declare class TimepickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerOverviewExample, "timepicker-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker validation */
export declare class TimepickerValidationExample {
    formControl: FormControl<Date | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerValidationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerValidationExample, "timepicker-validation-example", never, {}, {}, never, never, true, never>;
}

export { }
