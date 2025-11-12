import * as i0 from '@angular/core';
import { Signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccordionTrigger } from '@angular/aria/accordion';

/** @title Configurable Accordion using UI Patterns. */
declare class AccordionConfigurableExample {
    wrap: FormControl<boolean>;
    multi: FormControl<boolean>;
    disabled: FormControl<boolean>;
    softDisabled: FormControl<boolean>;
    triggers: Signal<readonly AccordionTrigger[]>;
    expandedIds: Signal<string[]>;
    items: string[];
    expansionIcon(item: string): Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionConfigurableExample, "accordion-configurable-example", never, {}, {}, never, never, true, never>;
}

/** @title Accordion with single expansion. */
declare class AccordionSingleExpansionExample {
    triggers: Signal<readonly AccordionTrigger[]>;
    expandedIds: Signal<string[]>;
    expansionIcon(item: string): Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionSingleExpansionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionSingleExpansionExample, "accordion-single-expansion-example", never, {}, {}, never, never, true, never>;
}

/** @title Accordion with multi-expansion. */
declare class AccordionMultiExpansionExample {
    triggers: Signal<readonly AccordionTrigger[]>;
    expandedIds: Signal<string[]>;
    expansionIcon(item: string): Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionMultiExpansionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionMultiExpansionExample, "accordion-multi-expansion-example", never, {}, {}, never, never, true, never>;
}

/** @title Accordion with focusable disabled items. */
declare class AccordionDisabledFocusableExample {
    triggers: Signal<readonly AccordionTrigger[]>;
    expandedIds: Signal<string[]>;
    expansionIcon(item: string): Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionDisabledFocusableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionDisabledFocusableExample, "accordion-disabled-focusable-example", never, {}, {}, never, never, true, never>;
}

/** @title Accordion with skipped disabled items. */
declare class AccordionDisabledSkippedExample {
    triggers: Signal<readonly AccordionTrigger[]>;
    expandedIds: Signal<string[]>;
    expansionIcon(item: string): Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionDisabledSkippedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionDisabledSkippedExample, "accordion-disabled-skipped-example", never, {}, {}, never, never, true, never>;
}

/** @title Disabled Accordion. */
declare class AccordionDisabledExample {
    triggers: Signal<readonly AccordionTrigger[]>;
    expandedIds: Signal<string[]>;
    expansionIcon(item: string): Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionDisabledExample, "accordion-disabled-example", never, {}, {}, never, never, true, never>;
}

export { AccordionConfigurableExample, AccordionDisabledExample, AccordionDisabledFocusableExample, AccordionDisabledSkippedExample, AccordionMultiExpansionExample, AccordionSingleExpansionExample };
