import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';

/** @title Listbox using UI Patterns. */
declare class CdkListboxExample {
    orientation: 'vertical' | 'horizontal';
    focusMode: 'roving' | 'activedescendant';
    selectionMode: 'explicit' | 'follow';
    wrap: FormControl<boolean>;
    multi: FormControl<boolean>;
    disabled: FormControl<boolean>;
    skipDisabled: FormControl<boolean>;
    fruits: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkListboxExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkListboxExample, "cdk-listbox-example", ["cdkListboxExample"], {}, {}, never, never, true, never>;
}

export { CdkListboxExample };
