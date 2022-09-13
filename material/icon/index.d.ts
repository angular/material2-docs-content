import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from '@angular/core';
import * as i4 from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';

declare namespace i1 {
    export {
        IconHarnessExample
    }
}

declare namespace i2 {
    export {
        IconOverviewExample
    }
}

declare namespace i3 {
    export {
        IconSvgExample
    }
}

export declare class IconExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IconExamplesModule, [typeof i1.IconHarnessExample, typeof i2.IconOverviewExample, typeof i3.IconSvgExample], [typeof i4.MatIconModule], [typeof i1.IconHarnessExample, typeof i2.IconOverviewExample, typeof i3.IconSvgExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IconExamplesModule>;
}

/**
 * @title Testing with MatIconHarness
 */
export declare class IconHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconHarnessExample, "icon-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic icons
 */
export declare class IconOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconOverviewExample, "icon-overview-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title SVG icons
 */
export declare class IconSvgExample {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    static ɵfac: i0.ɵɵFactoryDeclaration<IconSvgExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconSvgExample, "icon-svg-example", never, {}, {}, never, never, false, never>;
}

export { }
