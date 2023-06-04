import { BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { MatStepperIntl } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { StepperOrientation } from '@angular/material/stepper';

/**
 * @title Stepper animations
 */
export declare class StepperAnimationsExample {
    private _formBuilder;
    constructor(_formBuilder: FormBuilder);
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperAnimationsExample, "stepper-animations-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperEditableExample, "stepper-editable-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperErrorsExample, "stepper-errors-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatStepperHarness
 */
export declare class StepperHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperHarnessExample, "stepper-harness-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperHeaderPositionExample, "stepper-header-position-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperIntlExample, "stepper-intl-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperLabelPositionBottomExample, "stepper-label-position-bottom-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Stepper lazy content rendering
 */
export declare class StepperLazyContentExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperLazyContentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperLazyContentExample, "stepper-lazy-content-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOptionalExample, "stepper-optional-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOverviewExample, "stepper-overview-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperResponsiveExample, "stepper-responsive-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperStatesExample, "stepper-states-example", never, {}, {}, never, never, true, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperVerticalExample, "stepper-vertical-example", never, {}, {}, never, never, true, never, false>;
}

export { }
