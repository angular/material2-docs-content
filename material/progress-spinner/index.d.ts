import * as i0 from '@angular/core';
import * as i4 from '@angular/common';
import * as i5 from '@angular/material/legacy-card';
import * as i6 from '@angular/material/legacy-progress-spinner';
import * as i7 from '@angular/material/legacy-radio';
import * as i8 from '@angular/material/legacy-slider';
import * as i9 from '@angular/forms';
import { LegacyProgressSpinnerMode } from '@angular/material/legacy-progress-spinner';
import { ThemePalette } from '@angular/material/core';

declare namespace i1 {
    export {
        ProgressSpinnerConfigurableExample
    }
}

declare namespace i2 {
    export {
        ProgressSpinnerHarnessExample
    }
}

declare namespace i3 {
    export {
        ProgressSpinnerOverviewExample
    }
}

/**
 * @title Configurable progress spinner
 */
export declare class ProgressSpinnerConfigurableExample {
    color: ThemePalette;
    mode: LegacyProgressSpinnerMode;
    value: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSpinnerConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressSpinnerConfigurableExample, "progress-spinner-configurable-example", never, {}, {}, never, never, false, never>;
}

export declare class ProgressSpinnerExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSpinnerExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ProgressSpinnerExamplesModule, [typeof i1.ProgressSpinnerConfigurableExample, typeof i2.ProgressSpinnerHarnessExample, typeof i3.ProgressSpinnerOverviewExample], [typeof i4.CommonModule, typeof i5.MatLegacyCardModule, typeof i6.MatLegacyProgressSpinnerModule, typeof i7.MatLegacyRadioModule, typeof i8.MatLegacySliderModule, typeof i9.FormsModule], [typeof i1.ProgressSpinnerConfigurableExample, typeof i2.ProgressSpinnerHarnessExample, typeof i3.ProgressSpinnerOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ProgressSpinnerExamplesModule>;
}

/**
 * @title Testing with MatProgressSpinnerHarness
 */
export declare class ProgressSpinnerHarnessExample {
    value: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSpinnerHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressSpinnerHarnessExample, "progress-spinner-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic progress-spinner
 */
export declare class ProgressSpinnerOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSpinnerOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressSpinnerOverviewExample, "progress-spinner-overview-example", never, {}, {}, never, never, false, never>;
}

export { }
