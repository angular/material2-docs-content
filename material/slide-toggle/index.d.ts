import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i10 from '@angular/material/slide-toggle';
import * as i5 from '@angular/forms';
import * as i6 from '@angular/material/button';
import * as i7 from '@angular/material/card';
import * as i8 from '@angular/material/checkbox';
import * as i9 from '@angular/material/radio';
import { ThemePalette } from '@angular/material/core';

declare namespace i1 {
    export {
        SlideToggleConfigurableExample
    }
}

declare namespace i2 {
    export {
        SlideToggleFormsExample
    }
}

declare namespace i3 {
    export {
        SlideToggleHarnessExample
    }
}

declare namespace i4 {
    export {
        SlideToggleOverviewExample
    }
}

/**
 * @title Configurable slide-toggle
 */
export declare class SlideToggleConfigurableExample {
    color: ThemePalette;
    checked: boolean;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleConfigurableExample, "slide-toggle-configurable-example", never, {}, {}, never, never, false, never>;
}

export declare class SlideToggleExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SlideToggleExamplesModule, [typeof i1.SlideToggleConfigurableExample, typeof i2.SlideToggleFormsExample, typeof i3.SlideToggleHarnessExample, typeof i4.SlideToggleOverviewExample], [typeof i5.FormsModule, typeof i6.MatButtonModule, typeof i7.MatCardModule, typeof i8.MatCheckboxModule, typeof i9.MatRadioModule, typeof i10.MatSlideToggleModule, typeof i5.ReactiveFormsModule], [typeof i1.SlideToggleConfigurableExample, typeof i2.SlideToggleFormsExample, typeof i3.SlideToggleHarnessExample, typeof i4.SlideToggleOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SlideToggleExamplesModule>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleFormsExample, "slide-toggle-forms-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatSlideToggleHarness
 */
export declare class SlideToggleHarnessExample {
    disabled: boolean;
    ctrl: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleHarnessExample, "slide-toggle-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic slide-toggles
 */
export declare class SlideToggleOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleOverviewExample, "slide-toggle-overview-example", never, {}, {}, never, never, false, never>;
}

export { }
