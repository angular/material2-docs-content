import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

/**
 * @title Testing with MatIconHarness
 */
export declare class IconHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconHarnessExample, "icon-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic icons
 */
export declare class IconOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconOverviewExample, "icon-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title SVG icons
 */
export declare class IconSvgExample {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    static ɵfac: i0.ɵɵFactoryDeclaration<IconSvgExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconSvgExample, "icon-svg-example", never, {}, {}, never, never, true, never>;
}

export { }
