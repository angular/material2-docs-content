import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i15 from '@angular/common';
import * as i16 from '@angular/material/legacy-button';
import * as i17 from '@angular/material/button-toggle';
import * as i18 from '@angular/material/legacy-checkbox';
import * as i19 from '@angular/material/icon';
import * as i20 from '@angular/material/legacy-input';
import * as i21 from '@angular/material/legacy-tabs';
import * as i22 from '@angular/forms';
import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';

declare interface ExampleTab {
    label: string;
    content: string;
}

declare namespace i1 {
    export {
        TabGroupAlignExample
    }
}

declare namespace i10 {
    export {
        TabGroupLazyLoadedExample
    }
}

declare namespace i11 {
    export {
        TabGroupStretchedExample
    }
}

declare namespace i12 {
    export {
        TabGroupThemeExample
    }
}

declare namespace i13 {
    export {
        TabNavBarBasicExample
    }
}

declare namespace i14 {
    export {
        TabGroupPreserveContentExample
    }
}

declare namespace i2 {
    export {
        TabGroupAnimationsExample
    }
}

declare namespace i3 {
    export {
        ExampleTab,
        TabGroupAsyncExample
    }
}

declare namespace i4 {
    export {
        TabGroupBasicExample
    }
}

declare namespace i5 {
    export {
        TabGroupCustomLabelExample
    }
}

declare namespace i6 {
    export {
        TabGroupDynamicExample
    }
}

declare namespace i7 {
    export {
        TabGroupDynamicHeightExample
    }
}

declare namespace i8 {
    export {
        TabGroupHarnessExample
    }
}

declare namespace i9 {
    export {
        TabGroupHeaderBelowExample
    }
}

/**
 * @title Tab group with aligned labels
 */
export declare class TabGroupAlignExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupAlignExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupAlignExample, "tab-group-align-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tab group animations
 */
export declare class TabGroupAnimationsExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupAnimationsExample, "tab-group-animations-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tab group with asynchronously loading tab contents
 */
export declare class TabGroupAsyncExample {
    asyncTabs: Observable<ExampleTab[]>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupAsyncExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupAsyncExample, "tab-group-async-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic use of the tab group
 */
export declare class TabGroupBasicExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupBasicExample, "tab-group-basic-example", never, {}, {}, never, never, false>;
}

/**
 * @title Using tabs with a custom label template
 */
export declare class TabGroupCustomLabelExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupCustomLabelExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupCustomLabelExample, "tab-group-custom-label-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupDynamicExample, "tab-group-dynamic-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tab group with dynamic height based on tab contents
 */
export declare class TabGroupDynamicHeightExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupDynamicHeightExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupDynamicHeightExample, "tab-group-dynamic-height-example", never, {}, {}, never, never, false>;
}

export declare class TabGroupExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TabGroupExamplesModule, [typeof i1.TabGroupAlignExample, typeof i2.TabGroupAnimationsExample, typeof i3.TabGroupAsyncExample, typeof i4.TabGroupBasicExample, typeof i5.TabGroupCustomLabelExample, typeof i6.TabGroupDynamicExample, typeof i7.TabGroupDynamicHeightExample, typeof i8.TabGroupHarnessExample, typeof i9.TabGroupHeaderBelowExample, typeof i10.TabGroupLazyLoadedExample, typeof i11.TabGroupStretchedExample, typeof i12.TabGroupThemeExample, typeof i13.TabNavBarBasicExample, typeof i14.TabGroupPreserveContentExample], [typeof i15.CommonModule, typeof i16.MatLegacyButtonModule, typeof i17.MatButtonToggleModule, typeof i18.MatLegacyCheckboxModule, typeof i19.MatIconModule, typeof i20.MatLegacyInputModule, typeof i21.MatLegacyTabsModule, typeof i22.ReactiveFormsModule], [typeof i1.TabGroupAlignExample, typeof i2.TabGroupAnimationsExample, typeof i3.TabGroupAsyncExample, typeof i4.TabGroupBasicExample, typeof i5.TabGroupCustomLabelExample, typeof i6.TabGroupDynamicExample, typeof i7.TabGroupDynamicHeightExample, typeof i8.TabGroupHarnessExample, typeof i9.TabGroupHeaderBelowExample, typeof i10.TabGroupLazyLoadedExample, typeof i11.TabGroupStretchedExample, typeof i12.TabGroupThemeExample, typeof i13.TabNavBarBasicExample, typeof i14.TabGroupPreserveContentExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TabGroupExamplesModule>;
}

/**
 * @title Testing with MatTabGroupHarness
 */
export declare class TabGroupHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupHarnessExample, "tab-group-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tab group with the headers on the bottom
 */
export declare class TabGroupHeaderBelowExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupHeaderBelowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupHeaderBelowExample, "tab-group-header-below-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
export declare class TabGroupLazyLoadedExample {
    tabLoadTimes: Date[];
    getTimeLoaded(index: number): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupLazyLoadedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupLazyLoadedExample, "tab-group-lazy-loaded-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
export declare class TabGroupPreserveContentExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupPreserveContentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupPreserveContentExample, "tab-group-preserve-content-example", never, {}, {}, never, never, false>;
}

/**
 * @title Tab group with stretched labels
 */
export declare class TabGroupStretchedExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupStretchedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupStretchedExample, "tab-group-stretched-example", never, {}, {}, never, never, false>;
}

/**
 * @title Customizing the theme options on the tab group
 */
export declare class TabGroupThemeExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupThemeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupThemeExample, "tab-group-theme-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TabNavBarBasicExample, "tab-nav-bar-basic-example", never, {}, {}, never, never, false>;
}

export { }
