import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
export declare class TooltipAutoHideExample {
    positionOptions: TooltipPosition[];
    position: FormControl<"left" | "right" | "above" | "below" | "before" | "after" | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipAutoHideExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipAutoHideExample, "tooltip-auto-hide-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tooltip that can have a custom class applied.
 */
export declare class TooltipCustomClassExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipCustomClassExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipCustomClassExample, "tooltip-custom-class-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tooltip with a show and hide delay
 */
export declare class TooltipDelayExample {
    showDelay: FormControl<number | null>;
    hideDelay: FormControl<number | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDelayExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipDelayExample, "tooltip-delay-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tooltip that can be disabled
 */
export declare class TooltipDisabledExample {
    disabled: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipDisabledExample, "tooltip-disabled-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatTooltipHarness
 */
export declare class TooltipHarnessExample {
    message: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipHarnessExample, "tooltip-harness-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tooltip that can be manually shown/hidden.
 */
export declare class TooltipManualExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipManualExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipManualExample, "tooltip-manual-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tooltip with a changing message
 */
export declare class TooltipMessageExample {
    message: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipMessageExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipMessageExample, "tooltip-message-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tooltip with a show and hide delay
 */
export declare class TooltipModifiedDefaultsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipModifiedDefaultsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipModifiedDefaultsExample, "tooltip-modified-defaults-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Basic tooltip
 */
export declare class TooltipOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipOverviewExample, "tooltip-overview-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Basic tooltip
 */
export declare class TooltipPositionAtOriginExample {
    enabled: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipPositionAtOriginExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipPositionAtOriginExample, "tooltip-position-at-origin-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tooltip with a custom position
 */
export declare class TooltipPositionExample {
    positionOptions: TooltipPosition[];
    position: FormControl<"left" | "right" | "above" | "below" | "before" | "after" | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipPositionExample, "tooltip-position-example", never, {}, {}, never, never, true, never, false>;
}

export { }
