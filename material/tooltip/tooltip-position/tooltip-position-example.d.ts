import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
/**
 * @title Tooltip with a custom position
 */
export declare class TooltipPositionExample {
    positionOptions: TooltipPosition[];
    position: FormControl<"left" | "right" | "above" | "below" | "before" | "after" | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipPositionExample, "tooltip-position-example", never, {}, {}, never, never, false>;
}
