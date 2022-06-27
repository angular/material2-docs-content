import * as i0 from '@angular/core';
import * as i10 from '@angular/material/slider';
import * as i5 from '@angular/common';
import * as i6 from '@angular/forms';
import * as i7 from '@angular/material/legacy-card';
import * as i8 from '@angular/material/checkbox';
import * as i9 from '@angular/material/input';

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

/**
 * @title Configurable slider
 */
export declare class SliderConfigurableExample {
    autoTicks: boolean;
    disabled: boolean;
    invert: boolean;
    max: number;
    min: number;
    showTicks: boolean;
    step: number;
    thumbLabel: boolean;
    value: number;
    vertical: boolean;
    tickInterval: number;
    getSliderTickInterval(): number | 'auto';
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderConfigurableExample, "slider-configurable-example", never, {}, {}, never, never, false>;
}

export declare class SliderExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SliderExamplesModule, [typeof i1.SliderConfigurableExample, typeof i2.SliderFormattingExample, typeof i3.SliderHarnessExample, typeof i4.SliderOverviewExample], [typeof i5.CommonModule, typeof i6.FormsModule, typeof i7.MatLegacyCardModule, typeof i8.MatCheckboxModule, typeof i9.MatInputModule, typeof i10.MatSliderModule], [typeof i1.SliderConfigurableExample, typeof i2.SliderFormattingExample, typeof i3.SliderHarnessExample, typeof i4.SliderOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SliderExamplesModule>;
}

/**
 * @title Slider with custom thumb label formatting.
 */
export declare class SliderFormattingExample {
    formatLabel(value: number): string | number;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderFormattingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderFormattingExample, "slider-formatting-example", never, {}, {}, never, never, false>;
}

/**
 * @title Testing with MatSliderHarness
 */
export declare class SliderHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderHarnessExample, "slider-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic slider
 */
export declare class SliderOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderOverviewExample, "slider-overview-example", never, {}, {}, never, never, false>;
}

export { }
