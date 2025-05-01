import * as i0 from '@angular/core';
import { Signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTimepickerOption } from '@angular/material/timepicker';

/** @title Basic timepicker */
declare class TimepickerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerOverviewExample, "timepicker-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker forms integration */
declare class TimepickerFormsExample {
    formControl: FormControl<Date | null>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerFormsExample, "timepicker-forms-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker integration with datepicker */
declare class TimepickerDatepickerIntegrationExample {
    value: Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerDatepickerIntegrationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerDatepickerIntegrationExample, "timepicker-datepicker-integration-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker validation */
declare class TimepickerValidationExample {
    formControl: FormControl<Date | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerValidationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerValidationExample, "timepicker-validation-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker options customization */
declare class TimepickerOptionsExample {
    customOptions: MatTimepickerOption<Date>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerOptionsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerOptionsExample, "timepicker-options-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker with custom toggle icon */
declare class TimepickerCustomIconExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerCustomIconExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerCustomIconExample, "timepicker-custom-icon-example", never, {}, {}, never, never, true, never>;
}

/** @title Timepicker with different locale */
declare class TimepickerLocaleExample {
    private readonly _adapter;
    value: Date;
    protected switchLocale(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerLocaleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerLocaleExample, "timepicker-locale-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatTimepickerInputHarness
 */
declare class TimepickerHarnessExample {
    date: Signal<Date | null>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimepickerHarnessExample, "timepicker-harness-example", never, {}, {}, never, never, true, never>;
}

export { TimepickerCustomIconExample, TimepickerDatepickerIntegrationExample, TimepickerFormsExample, TimepickerHarnessExample, TimepickerLocaleExample, TimepickerOptionsExample, TimepickerOverviewExample, TimepickerValidationExample };
