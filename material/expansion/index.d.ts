import * as i0 from '@angular/core';
import * as i10 from '@angular/material/legacy-input';
import * as i5 from '@angular/material/button';
import * as i6 from '@angular/material/datepicker';
import * as i7 from '@angular/material/core';
import * as i8 from '@angular/material/expansion';
import * as i9 from '@angular/material/icon';
import { MatAccordion } from '@angular/material/expansion';

export declare class ExpansionExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ExpansionExamplesModule, [typeof i1.ExpansionExpandCollapseAllExample, typeof i2.ExpansionHarnessExample, typeof i3.ExpansionOverviewExample, typeof i4.ExpansionStepsExample], [typeof i5.MatButtonModule, typeof i6.MatDatepickerModule, typeof i7.MatNativeDateModule, typeof i8.MatExpansionModule, typeof i9.MatIconModule, typeof i10.MatLegacyInputModule], [typeof i1.ExpansionExpandCollapseAllExample, typeof i2.ExpansionHarnessExample, typeof i3.ExpansionOverviewExample, typeof i4.ExpansionStepsExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ExpansionExamplesModule>;
}

/**
 * @title Accordion with expand/collapse all toggles
 */
export declare class ExpansionExpandCollapseAllExample {
    accordion: MatAccordion;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionExpandCollapseAllExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionExpandCollapseAllExample, "expansion-expand-collapse-all-example", never, {}, {}, never, never, false>;
}

/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
export declare class ExpansionHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionHarnessExample, "expansion-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic expansion panel
 */
export declare class ExpansionOverviewExample {
    panelOpenState: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionOverviewExample, "expansion-overview-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionStepsExample, "expansion-steps-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        ExpansionExpandCollapseAllExample
    }
}

declare namespace i2 {
    export {
        ExpansionHarnessExample
    }
}

declare namespace i3 {
    export {
        ExpansionOverviewExample
    }
}

declare namespace i4 {
    export {
        ExpansionStepsExample
    }
}

export { }
