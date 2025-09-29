import * as i0 from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

/**
 * @title Accordion with expand/collapse all toggles
 */
declare class ExpansionExpandCollapseAllExample {
    accordion: i0.Signal<MatAccordion>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionExpandCollapseAllExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionExpandCollapseAllExample, "expansion-expand-collapse-all-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic expansion panel
 */
declare class ExpansionOverviewExample {
    readonly panelOpenState: i0.WritableSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionOverviewExample, "expansion-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Expansion panel as accordion
 */
declare class ExpansionStepsExample {
    step: i0.WritableSignal<number>;
    setStep(index: number): void;
    nextStep(): void;
    prevStep(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionStepsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionStepsExample, "expansion-steps-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
declare class ExpansionHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionHarnessExample, "expansion-harness-example", never, {}, {}, never, never, true, never>;
}

export { ExpansionExpandCollapseAllExample, ExpansionHarnessExample, ExpansionOverviewExample, ExpansionStepsExample };
