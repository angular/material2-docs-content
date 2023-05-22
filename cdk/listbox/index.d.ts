import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import { Observable } from 'rxjs';

/** @title Listbox with aria-activedescendant. */
export declare class CdkListboxActivedescendantExample {
    features: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxActivedescendantExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxActivedescendantExample, "cdk-listbox-activedescendant-example", ["cdkListboxActivedescendantExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with complex object as values. */
export declare class CdkListboxCompareWithExample {
    slots: Date[];
    appointment: readonly Date[];
    compareDate(date1: Date, date2: Date): boolean;
    formatTime(date: Date): string;
    formatAppointment(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxCompareWithExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxCompareWithExample, "cdk-listbox-compare-with-example", ["cdkListboxCompareWithExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with custom keyboard navigation options. */
export declare class CdkListboxCustomNavigationExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxCustomNavigationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxCustomNavigationExample, "cdk-listbox-custom-navigation-example", ["cdkListboxCustomNavigationExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with custom typeahead. */
export declare class CdkListboxCustomTypeaheadExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxCustomTypeaheadExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxCustomTypeaheadExample, "cdk-listbox-custom-typeahead-example", ["cdkListboxCustomTypeaheadExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with disabled options. */
export declare class CdkListboxDisabledExample {
    canDrinkCtrl: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxDisabledExample, "cdk-listbox-disabled-example", ["cdkListboxDisabledExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with forms validation. */
export declare class CdkListboxFormsValidationExample {
    signs: string[];
    invalid: Observable<boolean>;
    constructor();
    signCtrl: FormControl<string[] | null>;
    getErrors(): string[] | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxFormsValidationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxFormsValidationExample, "cdk-listbox-forms-validation-example", ["cdkListboxFormsValidationExample"], {}, {}, never, never, true, never>;
}

/** @title Horizontal listbox */
export declare class CdkListboxHorizontalExample {
    sizes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxHorizontalExample, "cdk-listbox-horizontal-example", ["cdkListboxhorizontalExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with multiple selection. */
export declare class CdkListboxMultipleExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxMultipleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxMultipleExample, "cdk-listbox-multiple-example", ["cdkListboxMultipleExample"], {}, {}, never, never, true, never>;
}

/** @title Basic listbox. */
export declare class CdkListboxOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxOverviewExample, "cdk-listbox-overview-example", ["cdkListboxOverviewExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with reactive forms. */
export declare class CdkListboxReactiveFormsExample {
    languages: string[];
    languageCtrl: FormControl<string[] | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxReactiveFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxReactiveFormsExample, "cdk-listbox-reactive-forms-example", ["cdkListboxReactiveFormsExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with template-driven forms. */
export declare class CdkListboxTemplateFormsExample {
    toppings: string[];
    order: readonly string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxTemplateFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxTemplateFormsExample, "cdk-listbox-template-forms-example", ["cdkListboxTemplateFormsExample"], {}, {}, never, never, true, never>;
}

/** @title Listbox with value binding. */
export declare class CdkListboxValueBindingExample {
    starters: string[];
    starter: readonly string[];
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxValueBindingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxValueBindingExample, "cdk-listbox-value-binding-example", ["cdkListboxValueBindingExample"], {}, {}, never, never, true, never>;
}

export { }
