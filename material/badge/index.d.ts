import * as i0 from '@angular/core';
import * as i3 from '@angular/material/badge';
import * as i4 from '@angular/material/button';
import * as i5 from '@angular/material/icon';

export declare class BadgeExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BadgeExamplesModule, [typeof i1.BadgeOverviewExample, typeof i2.BadgeHarnessExample], [typeof i3.MatBadgeModule, typeof i4.MatButtonModule, typeof i5.MatIconModule], [typeof i1.BadgeOverviewExample, typeof i2.BadgeHarnessExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BadgeExamplesModule>;
}

/**
 * @title Testing with MatBadgeHarness
 */
export declare class BadgeHarnessExample {
    simpleContent: string;
    overlap: boolean;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeHarnessExample, "badge-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Badge overview
 */
export declare class BadgeOverviewExample {
    hidden: boolean;
    toggleBadgeVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeOverviewExample, "badge-overview-example", never, {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        BadgeOverviewExample
    }
}

declare namespace i2 {
    export {
        BadgeHarnessExample
    }
}

export { }
