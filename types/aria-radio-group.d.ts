import * as i0 from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Basic radio group. */
declare class RadioGroupStandardExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupStandardExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupStandardExample, "radio-group-standard-example", never, {}, {}, never, never, true, never>;
}

/** @title Horizontal radio group. */
declare class RadioGroupHorizontalExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupHorizontalExample, "radio-group-horizontal-example", never, {}, {}, never, never, true, never>;
}

/** @title RTL horizontal radio group. */
declare class RadioGroupRtlHorizontalExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupRtlHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupRtlHorizontalExample, "radio-group-rtl-horizontal-example", never, {}, {}, never, never, true, never>;
}

/** @title Active descendant radio group. */
declare class RadioGroupActiveDescendantExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupActiveDescendantExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupActiveDescendantExample, "radio-group-active-descendant-example", never, {}, {}, never, never, true, never>;
}

/** @title Radio group with disabled options that are focusable. */
declare class RadioGroupDisabledFocusableExample {
    fruits: string[];
    disabledFruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupDisabledFocusableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupDisabledFocusableExample, "radio-group-disabled-focusable-example", never, {}, {}, never, never, true, never>;
}

/** @title Radio group with disabled options that are skipped. */
declare class RadioGroupDisabledSkippedExample {
    fruits: string[];
    disabledFruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupDisabledSkippedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupDisabledSkippedExample, "radio-group-disabled-skipped-example", never, {}, {}, never, never, true, never>;
}

/** @title Readonly radio group. */
declare class RadioGroupReadonlyExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupReadonlyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupReadonlyExample, "radio-group-readonly-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled radio group. */
declare class RadioGroupDisabledExample {
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupDisabledExample, "radio-group-disabled-example", never, {}, {}, never, never, true, never>;
}

/** @title Configurable CDK Radio Group */
declare class RadioGroupConfigurableExample {
    orientation: 'vertical' | 'horizontal';
    disabled: FormControl<boolean>;
    fruits: string[];
    readonly: FormControl<boolean>;
    softDisabled: FormControl<boolean>;
    focusMode: 'roving' | 'activedescendant';
    disabledOptions: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupConfigurableExample, "radio-group-configurable-example", never, {}, {}, never, never, true, never>;
}

export { RadioGroupActiveDescendantExample, RadioGroupConfigurableExample, RadioGroupDisabledExample, RadioGroupDisabledFocusableExample, RadioGroupDisabledSkippedExample, RadioGroupHorizontalExample, RadioGroupReadonlyExample, RadioGroupRtlHorizontalExample, RadioGroupStandardExample };
