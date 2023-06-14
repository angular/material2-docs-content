import * as i0 from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

/**
 * @title Accordion with expand/collapse all toggles
 */
export declare class ExpansionExpandCollapseAllExample {
    accordion: MatAccordion;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionExpandCollapseAllExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionExpandCollapseAllExample, "expansion-expand-collapse-all-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
export declare class ExpansionHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionHarnessExample, "expansion-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic expansion panel
 */
export declare class ExpansionOverviewExample {
    panelOpenState: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionOverviewExample, "expansion-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Expansion panel as accordion
 */
export declare class ExpansionStepsExample {
    step: number;
    setStep(index: number): void;
    nextStep(): void;
    prevStep(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionStepsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionStepsExample, "expansion-steps-example", never, {}, {}, never, never, true, never>;
}

export { }
