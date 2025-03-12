import * as i0 from '@angular/core';

/**
 * @title Configurable slider
 */
declare class SliderConfigurableExample {
    disabled: boolean;
    max: number;
    min: number;
    showTicks: boolean;
    step: number;
    thumbLabel: boolean;
    value: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderConfigurableExample, "slider-configurable-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Slider with custom thumb label formatting.
 */
declare class SliderFormattingExample {
    formatLabel(value: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderFormattingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderFormattingExample, "slider-formatting-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic slider
 */
declare class SliderOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderOverviewExample, "slider-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatSliderHarness
 */
declare class SliderHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderHarnessExample, "slider-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Range slider
 */
declare class SliderRangeExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderRangeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderRangeExample, "slider-range-example", never, {}, {}, never, never, true, never>;
}

export { SliderConfigurableExample, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample, SliderRangeExample };
