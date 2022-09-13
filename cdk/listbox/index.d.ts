import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i13 from '@angular/common';
import * as i14 from '@angular/forms';
import * as i15 from '@angular/cdk/listbox';
import { Observable } from 'rxjs';

/** @title Listbox with aria-activedescendant. */
export declare class CdkListboxActivedescendantExample {
    features: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxActivedescendantExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxActivedescendantExample, "cdk-listbox-activedescendant-example", ["cdkListboxActivedescendantExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with complex object as values. */
export declare class CdkListboxCompareWithExample {
    slots: Date[];
    appointment: readonly Date[];
    compareDate(date1: Date, date2: Date): boolean;
    formatTime(date: Date): string;
    formatAppointment(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxCompareWithExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxCompareWithExample, "cdk-listbox-compare-with-example", ["cdkListboxCompareWithExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with custom keyboard navigation options. */
export declare class CdkListboxCustomNavigationExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxCustomNavigationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxCustomNavigationExample, "cdk-listbox-custom-navigation-example", ["cdkListboxCustomNavigationExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with custom typeahead. */
export declare class CdkListboxCustomTypeaheadExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxCustomTypeaheadExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxCustomTypeaheadExample, "cdk-listbox-custom-typeahead-example", ["cdkListboxCustomTypeaheadExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with disabled options. */
export declare class CdkListboxDisabledExample {
    canDrinkCtrl: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxDisabledExample, "cdk-listbox-disabled-example", ["cdkListboxDisabledExample"], {}, {}, never, never, false, never>;
}

export declare class CdkListboxExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkListboxExamplesModule, [typeof i1.CdkListboxActivedescendantExample, typeof i2.CdkListboxCompareWithExample, typeof i3.CdkListboxCustomNavigationExample, typeof i4.CdkListboxCustomTypeaheadExample, typeof i5.CdkListboxDisabledExample, typeof i6.CdkListboxFormsValidationExample, typeof i7.CdkListboxHorizontalExample, typeof i8.CdkListboxMultipleExample, typeof i9.CdkListboxOverviewExample, typeof i10.CdkListboxReactiveFormsExample, typeof i11.CdkListboxTemplateFormsExample, typeof i12.CdkListboxValueBindingExample], [typeof i13.CommonModule, typeof i14.FormsModule, typeof i14.ReactiveFormsModule, typeof i15.CdkListboxModule], [typeof i1.CdkListboxActivedescendantExample, typeof i2.CdkListboxCompareWithExample, typeof i3.CdkListboxCustomNavigationExample, typeof i4.CdkListboxCustomTypeaheadExample, typeof i5.CdkListboxDisabledExample, typeof i6.CdkListboxFormsValidationExample, typeof i7.CdkListboxHorizontalExample, typeof i8.CdkListboxMultipleExample, typeof i9.CdkListboxOverviewExample, typeof i10.CdkListboxReactiveFormsExample, typeof i11.CdkListboxTemplateFormsExample, typeof i12.CdkListboxValueBindingExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkListboxExamplesModule>;
}

/** @title Listbox with forms validation. */
export declare class CdkListboxFormsValidationExample {
    signs: string[];
    invalid: Observable<boolean>;
    constructor();
    signCtrl: FormControl<string[] | null>;
    getErrors(): string[] | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxFormsValidationExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxFormsValidationExample, "cdk-listbox-forms-validation-example", ["cdkListboxFormsValidationExample"], {}, {}, never, never, false, never>;
}

/** @title Horizontal listbox */
export declare class CdkListboxHorizontalExample {
    sizes: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxHorizontalExample, "cdk-listbox-horizontal-example", ["cdkListboxhorizontalExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with multiple selection. */
export declare class CdkListboxMultipleExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxMultipleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxMultipleExample, "cdk-listbox-multiple-example", ["cdkListboxMultipleExample"], {}, {}, never, never, false, never>;
}

/** @title Basic listbox. */
export declare class CdkListboxOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxOverviewExample, "cdk-listbox-overview-example", ["cdkListboxOverviewExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with reactive forms. */
export declare class CdkListboxReactiveFormsExample {
    languages: string[];
    languageCtrl: FormControl<string[] | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxReactiveFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxReactiveFormsExample, "cdk-listbox-reactive-forms-example", ["cdkListboxReactiveFormsExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with template-driven forms. */
export declare class CdkListboxTemplateFormsExample {
    toppings: string[];
    order: readonly string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxTemplateFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxTemplateFormsExample, "cdk-listbox-template-forms-example", ["cdkListboxTemplateFormsExample"], {}, {}, never, never, false, never>;
}

/** @title Listbox with value binding. */
export declare class CdkListboxValueBindingExample {
    starters: string[];
    starter: readonly string[];
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxValueBindingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxValueBindingExample, "cdk-listbox-value-binding-example", ["cdkListboxValueBindingExample"], {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        CdkListboxActivedescendantExample
    }
}

declare namespace i10 {
    export {
        CdkListboxReactiveFormsExample
    }
}

declare namespace i11 {
    export {
        CdkListboxTemplateFormsExample
    }
}

declare namespace i12 {
    export {
        CdkListboxValueBindingExample
    }
}

declare namespace i2 {
    export {
        CdkListboxCompareWithExample
    }
}

declare namespace i3 {
    export {
        CdkListboxCustomNavigationExample
    }
}

declare namespace i4 {
    export {
        CdkListboxCustomTypeaheadExample
    }
}

declare namespace i5 {
    export {
        CdkListboxDisabledExample
    }
}

declare namespace i6 {
    export {
        CdkListboxFormsValidationExample
    }
}

declare namespace i7 {
    export {
        CdkListboxHorizontalExample
    }
}

declare namespace i8 {
    export {
        CdkListboxMultipleExample
    }
}

declare namespace i9 {
    export {
        CdkListboxOverviewExample
    }
}

export { }
