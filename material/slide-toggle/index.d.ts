import * as i0 from '@angular/core';
import * as _angular_forms from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * @title Configurable slide-toggle
 */
declare class SlideToggleConfigurableExample {
    checked: boolean;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleConfigurableExample, "slide-toggle-configurable-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Slide-toggle with forms
 */
declare class SlideToggleFormsExample {
    private _formBuilder;
    isChecked: boolean;
    formGroup: FormGroup<{
        enableWifi: _angular_forms.FormControl<string | null>;
        acceptTerms: _angular_forms.FormControl<string | null>;
    }>;
    alertFormValues(formGroup: FormGroup): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleFormsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleFormsExample, "slide-toggle-forms-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic slide-toggles
 */
declare class SlideToggleOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleOverviewExample, "slide-toggle-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatSlideToggleHarness
 */
declare class SlideToggleHarnessExample {
    disabled: boolean;
    ctrl: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleHarnessExample, "slide-toggle-harness-example", never, {}, {}, never, never, true, never>;
}

export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleHarnessExample, SlideToggleOverviewExample };
