import * as i0 from '@angular/core';
import * as i10 from '@angular/material/input';
import * as i11 from '@angular/material/slider';
import * as i6 from '@angular/common';
import * as i7 from '@angular/forms';
import * as i8 from '@angular/material/card';
import * as i9 from '@angular/material/checkbox';

declare namespace i1 {
    export {
        SliderConfigurableExample
    }
}

declare namespace i2 {
    export {
        SliderFormattingExample
    }
}

declare namespace i3 {
    export {
        SliderHarnessExample
    }
}

declare namespace i4 {
    export {
        SliderOverviewExample
    }
}

declare namespace i5 {
    export {
        SliderRangeExample
    }
}

/**
 * @title Configurable slider
 */
export declare class SliderConfigurableExample {
    disabled: boolean;
    max: number;
    min: number;
    showTicks: boolean;
    step: number;
    thumbLabel: boolean;
    value: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderConfigurableExample, "slider-configurable-example", never, {}, {}, never, never, false, never>;
}

export declare class SliderExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SliderExamplesModule, [typeof i1.SliderConfigurableExample, typeof i2.SliderFormattingExample, typeof i3.SliderHarnessExample, typeof i4.SliderOverviewExample, typeof i5.SliderRangeExample], [typeof i6.CommonModule, typeof i7.FormsModule, typeof i8.MatCardModule, typeof i9.MatCheckboxModule, typeof i10.MatInputModule, typeof i11.MatSliderModule], [typeof i1.SliderConfigurableExample, typeof i2.SliderFormattingExample, typeof i3.SliderHarnessExample, typeof i4.SliderOverviewExample, typeof i5.SliderRangeExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SliderExamplesModule>;
}

/**
 * @title Slider with custom thumb label formatting.
 */
export declare class SliderFormattingExample {
    formatLabel(value: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderFormattingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderFormattingExample, "slider-formatting-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatSliderHarness
 */
export declare class SliderHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderHarnessExample, "slider-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic slider
 */
export declare class SliderOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderOverviewExample, "slider-overview-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Range slider
 */
export declare class SliderRangeExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderRangeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderRangeExample, "slider-range-example", never, {}, {}, never, never, false, never>;
}

export { }
