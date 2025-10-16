import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';

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

export { ToolbarConfigurableExample };
