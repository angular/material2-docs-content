import * as i0 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/cdk/accordion';

export declare class CdkAccordionExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkAccordionExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkAccordionExamplesModule, [typeof i1.CdkAccordionOverviewExample], [typeof i2.CommonModule, typeof i3.CdkAccordionModule], [typeof i1.CdkAccordionOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkAccordionExamplesModule>;
}

/**
 * @title Accordion overview
 */
export declare class CdkAccordionOverviewExample {
    items: string[];
    expandedIndex: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkAccordionOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkAccordionOverviewExample, "cdk-accordion-overview-example", never, {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        CdkAccordionOverviewExample
    }
}

export { }
