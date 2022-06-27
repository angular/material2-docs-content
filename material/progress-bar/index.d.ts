import * as i0 from '@angular/core';
import * as i10 from '@angular/material/radio';
import * as i11 from '@angular/material/slider';
import * as i12 from '@angular/forms';
import * as i7 from '@angular/common';
import * as i8 from '@angular/material/legacy-card';
import * as i9 from '@angular/material/progress-bar';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

declare namespace i1 {
    export {
        ProgressBarBufferExample
    }
}

declare namespace i2 {
    export {
        ProgressBarConfigurableExample
    }
}

declare namespace i3 {
    export {
        ProgressBarDeterminateExample
    }
}

declare namespace i4 {
    export {
        ProgressBarHarnessExample
    }
}

declare namespace i5 {
    export {
        ProgressBarIndeterminateExample
    }
}

declare namespace i6 {
    export {
        ProgressBarQueryExample
    }
}

/**
 * @title Buffer progress-bar
 */
export declare class ProgressBarBufferExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarBufferExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarBufferExample, "progress-bar-buffer-example", never, {}, {}, never, never, false>;
}

/**
 * @title Configurable progress-bar
 */
export declare class ProgressBarConfigurableExample {
    color: ThemePalette;
    mode: ProgressBarMode;
    value: number;
    bufferValue: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarConfigurableExample, "progress-bar-configurable-example", never, {}, {}, never, never, false>;
}

/**
 * @title Determinate progress-bar
 */
export declare class ProgressBarDeterminateExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarDeterminateExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarDeterminateExample, "progress-bar-determinate-example", never, {}, {}, never, never, false>;
}

export declare class ProgressBarExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ProgressBarExamplesModule, [typeof i1.ProgressBarBufferExample, typeof i2.ProgressBarConfigurableExample, typeof i3.ProgressBarDeterminateExample, typeof i4.ProgressBarHarnessExample, typeof i5.ProgressBarIndeterminateExample, typeof i6.ProgressBarQueryExample], [typeof i7.CommonModule, typeof i8.MatLegacyCardModule, typeof i9.MatProgressBarModule, typeof i10.MatRadioModule, typeof i11.MatSliderModule, typeof i12.FormsModule], [typeof i1.ProgressBarBufferExample, typeof i2.ProgressBarConfigurableExample, typeof i3.ProgressBarDeterminateExample, typeof i4.ProgressBarHarnessExample, typeof i5.ProgressBarIndeterminateExample, typeof i6.ProgressBarQueryExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ProgressBarExamplesModule>;
}

/**
 * @title Testing with MatProgressBarHarness
 */
export declare class ProgressBarHarnessExample {
    value: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarHarnessExample, "progress-bar-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Indeterminate progress-bar
 */
export declare class ProgressBarIndeterminateExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarIndeterminateExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarIndeterminateExample, "progress-bar-indeterminate-example", never, {}, {}, never, never, false>;
}

/**
 * @title Query progress-bar
 */
export declare class ProgressBarQueryExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarQueryExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarQueryExample, "progress-bar-query-example", never, {}, {}, never, never, false>;
}

export { }
