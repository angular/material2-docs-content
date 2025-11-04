import * as i0 from '@angular/core';

/** @title Basic Horizontal Toolbar Example */
declare class ToolbarBasicHorizontalExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarBasicHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarBasicHorizontalExample, "toolbar-basic-horizontal-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic Vertical Toolbar Example */
declare class ToolbarBasicVerticalExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarBasicVerticalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarBasicVerticalExample, "toolbar-basic-vertical-example", never, {}, {}, never, never, true, never>;
}

/** @title Configurable Aria Toolbar Example */
declare class ToolbarConfigurableExample {
    wrap: boolean;
    softDisabled: boolean;
    toolbarDisabled: boolean;
    orientation: 'vertical' | 'horizontal';
    widgets: string[];
    groups: string[];
    disabledGroups: string[];
    disabledWidgets: string[];
    isDisabled(value: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarConfigurableExample, "toolbar-configurable-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic RTL Toolbar Example */
declare class ToolbarRtlExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarRtlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarRtlExample, "toolbar-rtl-example", never, {}, {}, never, never, true, never>;
}

/** @title Hard Disabled Toolbar Example */
declare class ToolbarHardDisabledExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarHardDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarHardDisabledExample, "toolbar-hard-disabled-example", never, {}, {}, never, never, true, never>;
}

export { ToolbarBasicHorizontalExample, ToolbarBasicVerticalExample, ToolbarConfigurableExample, ToolbarHardDisabledExample, ToolbarRtlExample };
