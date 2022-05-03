import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i14 from '@angular/forms';
import * as i15 from '@angular/material/button';
import * as i16 from '@angular/material/icon';
import * as i17 from '@angular/material/input';
import * as i18 from '@angular/material/radio';
import * as i19 from '@angular/material/stepper';
import * as i20 from '@angular/common';
import { MatStepperIntl } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { StepperOrientation } from '@angular/material/stepper';

declare namespace i1 {
    export {
        StepperEditableExample
    }
}

declare namespace i10 {
    export {
        StepperLazyContentExample
    }
}

declare namespace i11 {
    export {
        StepperResponsiveExample
    }
}

declare namespace i12 {
    export {
        StepperHeaderPositionExample
    }
}

declare namespace i13 {
    export {
        StepperAnimationsExample
    }
}

declare namespace i2 {
    export {
        StepperErrorsExample
    }
}

declare namespace i3 {
    export {
        StepperHarnessExample
    }
}

declare namespace i4 {
    export {
        StepperIntl,
        StepperIntlExample
    }
}

declare namespace i5 {
    export {
        StepperLabelPositionBottomExample
    }
}

declare namespace i6 {
    export {
        StepperOptionalExample
    }
}

declare namespace i7 {
    export {
        StepperOverviewExample
    }
}

declare namespace i8 {
    export {
        StepperStatesExample
    }
}

declare namespace i9 {
    export {
        StepperVerticalExample
    }
}

/**
 * @title Stepper animations
 */
export declare class StepperAnimationsExample {
    private _formBuilder;
    constructor(_formBuilder: FormBuilder);
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperAnimationsExample, "stepper-animations-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper with editable steps
 */
export declare class StepperEditableExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    isEditable: boolean;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperEditableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperEditableExample, "stepper-editable-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper that displays errors in the steps
 */
export declare class StepperErrorsExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperErrorsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperErrorsExample, "stepper-errors-example", never, {}, {}, never, never, false>;
}

export declare class StepperExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<StepperExamplesModule, [typeof i1.StepperEditableExample, typeof i2.StepperErrorsExample, typeof i3.StepperHarnessExample, typeof i4.StepperIntlExample, typeof i5.StepperLabelPositionBottomExample, typeof i6.StepperOptionalExample, typeof i7.StepperOverviewExample, typeof i8.StepperStatesExample, typeof i9.StepperVerticalExample, typeof i10.StepperLazyContentExample, typeof i11.StepperResponsiveExample, typeof i12.StepperHeaderPositionExample, typeof i13.StepperAnimationsExample], [typeof i14.FormsModule, typeof i15.MatButtonModule, typeof i16.MatIconModule, typeof i17.MatInputModule, typeof i18.MatRadioModule, typeof i19.MatStepperModule, typeof i14.ReactiveFormsModule, typeof i20.CommonModule], [typeof i1.StepperEditableExample, typeof i2.StepperErrorsExample, typeof i3.StepperHarnessExample, typeof i4.StepperIntlExample, typeof i5.StepperLabelPositionBottomExample, typeof i6.StepperOptionalExample, typeof i7.StepperOverviewExample, typeof i8.StepperStatesExample, typeof i9.StepperVerticalExample, typeof i10.StepperLazyContentExample, typeof i11.StepperResponsiveExample, typeof i12.StepperHeaderPositionExample, typeof i13.StepperAnimationsExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<StepperExamplesModule>;
}

/**
 * @title Testing with MatStepperHarness
 */
export declare class StepperHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperHarnessExample, "stepper-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper header position
 */
export declare class StepperHeaderPositionExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperHeaderPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperHeaderPositionExample, "stepper-header-position-example", never, {}, {}, never, never, false>;
}

declare class StepperIntl extends MatStepperIntl {
    optionalLabel: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepperIntl>;
}

/**
 * @title Stepper that uses the MatStepperIntl service
 */
export declare class StepperIntlExample {
    private _formBuilder;
    private _matStepperIntl;
    optionalLabelText: string;
    optionalLabelTextChoices: string[];
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder, _matStepperIntl: MatStepperIntl);
    updateOptionalLabel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperIntlExample, "stepper-intl-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper label bottom position
 */
export declare class StepperLabelPositionBottomExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperLabelPositionBottomExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperLabelPositionBottomExample, "stepper-label-position-bottom-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper lazy content rendering
 */
export declare class StepperLazyContentExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperLazyContentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperLazyContentExample, "stepper-lazy-content-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper with optional steps
 */
export declare class StepperOptionalExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    isOptional: boolean;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOptionalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOptionalExample, "stepper-optional-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper overview
 */
export declare class StepperOverviewExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    isLinear: boolean;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOverviewExample, "stepper-overview-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper responsive
 */
export declare class StepperResponsiveExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    thirdFormGroup: FormGroup<    {
    thirdCtrl: FormControl<string | null>;
    }>;
    stepperOrientation: Observable<StepperOrientation>;
    constructor(_formBuilder: FormBuilder, breakpointObserver: BreakpointObserver);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperResponsiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperResponsiveExample, "stepper-responsive-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper with customized states
 */
export declare class StepperStatesExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperStatesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperStatesExample, "stepper-states-example", never, {}, {}, never, never, false>;
}

/**
 * @title Stepper vertical
 */
export declare class StepperVerticalExample {
    private _formBuilder;
    firstFormGroup: FormGroup<    {
    firstCtrl: FormControl<string | null>;
    }>;
    secondFormGroup: FormGroup<    {
    secondCtrl: FormControl<string | null>;
    }>;
    isLinear: boolean;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperVerticalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperVerticalExample, "stepper-vertical-example", never, {}, {}, never, never, false>;
}

export { }
