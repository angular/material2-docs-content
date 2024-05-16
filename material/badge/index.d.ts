import * as i0 from '@angular/core';
import { WritableSignal } from '@angular/core';

/**
 * @title Testing with MatBadgeHarness
 */
export declare class BadgeHarnessExample {
    simpleContent: WritableSignal<string>;
    overlap: WritableSignal<boolean>;
    disabled: WritableSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeHarnessExample, "badge-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Badge overview
 */
export declare class BadgeOverviewExample {
    hidden: boolean;
    toggleBadgeVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeOverviewExample, "badge-overview-example", never, {}, {}, never, never, true, never>;
}

export { }
