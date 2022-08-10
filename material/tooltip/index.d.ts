import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i12 from '@angular/common';
import * as i13 from '@angular/material/button';
import * as i14 from '@angular/material/legacy-checkbox';
import * as i15 from '@angular/material/legacy-input';
import * as i16 from '@angular/material/legacy-select';
import * as i17 from '@angular/material/legacy-tooltip';
import * as i18 from '@angular/forms';
import * as i19 from '@angular/cdk/scrolling';
import { MatTooltipDefaultOptions } from '@angular/material/legacy-tooltip';
import { TooltipPosition } from '@angular/material/legacy-tooltip';

declare namespace i1 {
    export {
        TooltipAutoHideExample
    }
}

declare namespace i10 {
    export {
        TooltipPositionExample
    }
}

declare namespace i11 {
    export {
        TooltipPositionAtOriginExample
    }
}

declare namespace i2 {
    export {
        TooltipCustomClassExample
    }
}

declare namespace i3 {
    export {
        TooltipDelayExample
    }
}

declare namespace i4 {
    export {
        TooltipDisabledExample
    }
}

declare namespace i5 {
    export {
        TooltipHarnessExample
    }
}

declare namespace i6 {
    export {
        TooltipManualExample
    }
}

declare namespace i7 {
    export {
        TooltipMessageExample
    }
}

declare namespace i8 {
    export {
        myCustomTooltipDefaults,
        TooltipModifiedDefaultsExample
    }
}

declare namespace i9 {
    export {
        TooltipOverviewExample
    }
}

/** Custom options the configure the tooltip's default show/hide delays. */
declare const myCustomTooltipDefaults: MatTooltipDefaultOptions;

/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
export declare class TooltipAutoHideExample {
    positionOptions: TooltipPosition[];
    position: FormControl<"left" | "right" | "above" | "below" | "before" | "after" | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipAutoHideExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipAutoHideExample, "tooltip-auto-hide-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tooltip that can have a custom class applied.
 */
export declare class TooltipCustomClassExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipCustomClassExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipCustomClassExample, "tooltip-custom-class-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tooltip with a show and hide delay
 */
export declare class TooltipDelayExample {
    showDelay: FormControl<number | null>;
    hideDelay: FormControl<number | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDelayExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipDelayExample, "tooltip-delay-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tooltip that can be disabled
 */
export declare class TooltipDisabledExample {
    disabled: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipDisabledExample, "tooltip-disabled-example", never, {}, {}, never, never, false>;
}

export declare class TooltipExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TooltipExamplesModule, [typeof i1.TooltipAutoHideExample, typeof i2.TooltipCustomClassExample, typeof i3.TooltipDelayExample, typeof i4.TooltipDisabledExample, typeof i5.TooltipHarnessExample, typeof i6.TooltipManualExample, typeof i7.TooltipMessageExample, typeof i8.TooltipModifiedDefaultsExample, typeof i9.TooltipOverviewExample, typeof i10.TooltipPositionExample, typeof i11.TooltipPositionAtOriginExample], [typeof i12.CommonModule, typeof i13.MatButtonModule, typeof i14.MatLegacyCheckboxModule, typeof i15.MatLegacyInputModule, typeof i16.MatLegacySelectModule, typeof i17.MatLegacyTooltipModule, typeof i18.ReactiveFormsModule, typeof i19.ScrollingModule], [typeof i1.TooltipAutoHideExample, typeof i2.TooltipCustomClassExample, typeof i3.TooltipDelayExample, typeof i4.TooltipDisabledExample, typeof i5.TooltipHarnessExample, typeof i6.TooltipManualExample, typeof i7.TooltipMessageExample, typeof i8.TooltipModifiedDefaultsExample, typeof i9.TooltipOverviewExample, typeof i10.TooltipPositionExample, typeof i11.TooltipPositionAtOriginExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TooltipExamplesModule>;
}

/**
 * @title Testing with MatTooltipHarness
 */
export declare class TooltipHarnessExample {
    message: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipHarnessExample, "tooltip-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tooltip that can be manually shown/hidden.
 */
export declare class TooltipManualExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipManualExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipManualExample, "tooltip-manual-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tooltip with a changing message
 */
export declare class TooltipMessageExample {
    message: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipMessageExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipMessageExample, "tooltip-message-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tooltip with a show and hide delay
 */
export declare class TooltipModifiedDefaultsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipModifiedDefaultsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipModifiedDefaultsExample, "tooltip-modified-defaults-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic tooltip
 */
export declare class TooltipOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipOverviewExample, "tooltip-overview-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic tooltip
 */
export declare class TooltipPositionAtOriginExample {
    enabled: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipPositionAtOriginExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipPositionAtOriginExample, "tooltip-position-at-origin-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tooltip with a custom position
 */
export declare class TooltipPositionExample {
    positionOptions: TooltipPosition[];
    position: FormControl<"left" | "right" | "above" | "below" | "before" | "after" | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipPositionExample, "tooltip-position-example", never, {}, {}, never, never, false>;
}

export { }
