import * as i0 from '@angular/core';
import * as i4 from '@angular/forms';
import * as i5 from '@angular/common';
import * as i6 from '@angular/material/legacy-radio';

declare namespace i1 {
    export {
        RadioHarnessExample
    }
}

declare namespace i2 {
    export {
        RadioNgModelExample
    }
}

declare namespace i3 {
    export {
        RadioOverviewExample
    }
}

export declare class RadioExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RadioExamplesModule, [typeof i1.RadioHarnessExample, typeof i2.RadioNgModelExample, typeof i3.RadioOverviewExample], [typeof i4.ReactiveFormsModule, typeof i5.CommonModule, typeof i6.MatLegacyRadioModule, typeof i4.FormsModule], [typeof i1.RadioHarnessExample, typeof i2.RadioNgModelExample, typeof i3.RadioOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RadioExamplesModule>;
}

/**
 * @title Testing with MatRadioHarness
 */
export declare class RadioHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioHarnessExample, "radio-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Radios with ngModel
 */
export declare class RadioNgModelExample {
    favoriteSeason: string;
    seasons: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioNgModelExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioNgModelExample, "radio-ng-model-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic radios
 */
export declare class RadioOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioOverviewExample, "radio-overview-example", never, {}, {}, never, never, false>;
}

export { }
