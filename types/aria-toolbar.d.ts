import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Basic Horizontal Toolbar Example */
declare class ToolbarBasicHorizontalExample {
    private _liveAnnouncer;
    constructor(_liveAnnouncer: LiveAnnouncer);
    alignments: {
        value: string;
        label: string;
    }[];
    format(tool: string): void;
    test(action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarBasicHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarBasicHorizontalExample, "toolbar-basic-horizontal-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic Vertical Toolbar Example */
declare class ToolbarBasicVerticalExample {
    private _liveAnnouncer;
    constructor(_liveAnnouncer: LiveAnnouncer);
    alignments: {
        value: string;
        label: string;
    }[];
    format(tool: string): void;
    test(action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarBasicVerticalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarBasicVerticalExample, "toolbar-basic-vertical-example", never, {}, {}, never, never, true, never>;
}

/** @title Configurable CDK Radio Group */
declare class ToolbarConfigurableExample {
    skipDisabled: FormControl<boolean>;
    wrap: FormControl<boolean>;
    toolbarDisabled: FormControl<boolean>;
    orientation: 'vertical' | 'horizontal';
    fruits: string[];
    buttonFruits: string[];
    disabled: FormControl<boolean>;
    readonly: FormControl<boolean>;
    disabledOptions: string[];
    disabledButtonOptions: string[];
    test(x: String): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarConfigurableExample, "toolbar-configurable-example", never, {}, {}, never, never, true, never>;
}

/** @title Skip Disabled Toolbar Example */
declare class ToolbarSkipDisabledExample {
    private _liveAnnouncer;
    constructor(_liveAnnouncer: LiveAnnouncer);
    alignments: {
        value: string;
        label: string;
    }[];
    disabledOptions: string[];
    format(tool: string): void;
    test(action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarSkipDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarSkipDisabledExample, "toolbar-skip-disabled-example", never, {}, {}, never, never, true, never>;
}

export { ToolbarBasicHorizontalExample, ToolbarBasicVerticalExample, ToolbarConfigurableExample, ToolbarSkipDisabledExample };
