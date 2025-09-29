import * as i0 from '@angular/core';

/**
 * @title Badge overview
 */
declare class BadgeOverviewExample {
    hidden: boolean;
    toggleBadgeVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeOverviewExample, "badge-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatBadgeHarness
 */
declare class BadgeHarnessExample {
    simpleContent: i0.WritableSignal<string>;
    overlap: i0.WritableSignal<boolean>;
    disabled: i0.WritableSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeHarnessExample, "badge-harness-example", never, {}, {}, never, never, true, never>;
}

export { BadgeHarnessExample, BadgeOverviewExample };
