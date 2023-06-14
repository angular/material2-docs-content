import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { ThemePalette } from '@angular/material/core';

/**
 * @title Configurable slide-toggle
 */
export declare class SlideToggleConfigurableExample {
    color: ThemePalette;
    checked: boolean;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleConfigurableExample, "slide-toggle-configurable-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Slide-toggle with forms
 */
export declare class SlideToggleFormsExample {
    private _formBuilder;
    isChecked: boolean;
    formGroup: FormGroup<{
        enableWifi: FormControl<string | null>;
        acceptTerms: FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    alertFormValues(formGroup: FormGroup): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleFormsExample, "slide-toggle-forms-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatSlideToggleHarness
 */
export declare class SlideToggleHarnessExample {
    disabled: boolean;
    ctrl: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleHarnessExample, "slide-toggle-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic slide-toggles
 */
export declare class SlideToggleOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleOverviewExample, "slide-toggle-overview-example", never, {}, {}, never, never, true, never>;
}

export { }
