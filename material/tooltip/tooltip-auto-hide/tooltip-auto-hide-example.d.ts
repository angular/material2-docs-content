import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
export declare class TooltipAutoHideExample {
    positionOptions: TooltipPosition[];
    position: FormControl<"left" | "right" | "above" | "below" | "before" | "after" | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipAutoHideExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipAutoHideExample, "tooltip-auto-hide-example", never, {}, {}, never, never, false>;
}
