import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';

declare interface ExampleTab {
    label: string;
    content: string;
}

/**
 * @title Tab group with aligned labels
 */
export declare class TabGroupAlignExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupAlignExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupAlignExample, "tab-group-align-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group animations
 */
export declare class TabGroupAnimationsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupAnimationsExample, "tab-group-animations-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with asynchronously loading tab contents
 */
export declare class TabGroupAsyncExample {
    asyncTabs: Observable<ExampleTab[]>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupAsyncExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupAsyncExample, "tab-group-async-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Basic use of the tab group
 */
export declare class TabGroupBasicExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupBasicExample, "tab-group-basic-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Using tabs with a custom label template
 */
export declare class TabGroupCustomLabelExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupCustomLabelExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupCustomLabelExample, "tab-group-custom-label-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with dynamically changing tabs
 */
export declare class TabGroupDynamicExample {
    tabs: string[];
    selected: FormControl<number | null>;
    addTab(selectAfterAdding: boolean): void;
    removeTab(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupDynamicExample, "tab-group-dynamic-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with dynamic height based on tab contents
 */
export declare class TabGroupDynamicHeightExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupDynamicHeightExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupDynamicHeightExample, "tab-group-dynamic-height-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatTabGroupHarness
 */
export declare class TabGroupHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupHarnessExample, "tab-group-harness-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with the headers on the bottom
 */
export declare class TabGroupHeaderBelowExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupHeaderBelowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupHeaderBelowExample, "tab-group-header-below-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with ink bar fit to content
 */
export declare class TabGroupInkBarExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupInkBarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupInkBarExample, "tab-group-ink-bar-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with inverted tabs
 */
export declare class TabGroupInvertedExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupInvertedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupInvertedExample, "tab-group-inverted-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
export declare class TabGroupLazyLoadedExample {
    tabLoadTimes: Date[];
    getTimeLoaded(index: number): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupLazyLoadedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupLazyLoadedExample, "tab-group-lazy-loaded-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with paginated tabs
 */
export declare class TabGroupPaginatedExample {
    lotsOfTabs: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupPaginatedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupPaginatedExample, "tab-group-paginated-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
export declare class TabGroupPreserveContentExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupPreserveContentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupPreserveContentExample, "tab-group-preserve-content-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Tab group with stretched labels
 */
export declare class TabGroupStretchedExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupStretchedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupStretchedExample, "tab-group-stretched-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Customizing the theme options on the tab group
 */
export declare class TabGroupThemeExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupThemeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupThemeExample, "tab-group-theme-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Basic use of the tab nav bar
 */
export declare class TabNavBarBasicExample {
    links: string[];
    activeLink: string;
    background: ThemePalette;
    toggleBackground(): void;
    addLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabNavBarBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabNavBarBasicExample, "tab-nav-bar-basic-example", never, {}, {}, never, never, true, never, false>;
}

export { }
