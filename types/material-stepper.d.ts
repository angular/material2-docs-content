import * as _angular_forms from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';

/**
 * @title Stepper with editable steps
 */
declare class StepperEditableExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    isEditable: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperEditableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperEditableExample, "stepper-editable-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper that displays errors in the steps
 */
declare class StepperErrorsExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperErrorsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperErrorsExample, "stepper-errors-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper label bottom position
 */
declare class StepperLabelPositionBottomExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperLabelPositionBottomExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperLabelPositionBottomExample, "stepper-label-position-bottom-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper with optional steps
 */
declare class StepperOptionalExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    isOptional: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOptionalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOptionalExample, "stepper-optional-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper overview
 */
declare class StepperOverviewExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    isLinear: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperOverviewExample, "stepper-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper with customized states
 */
declare class StepperStatesExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperStatesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperStatesExample, "stepper-states-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper vertical
 */
declare class StepperVerticalExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    isLinear: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperVerticalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperVerticalExample, "stepper-vertical-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatStepperHarness
 */
declare class StepperHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperHarnessExample, "stepper-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper that uses the MatStepperIntl service
 */
declare class StepperIntlExample {
    private _formBuilder;
    private _matStepperIntl;
    optionalLabelText: string;
    optionalLabelTextChoices: string[];
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    updateOptionalLabel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperIntlExample, "stepper-intl-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper lazy content rendering
 */
declare class StepperLazyContentExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperLazyContentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperLazyContentExample, "stepper-lazy-content-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper responsive
 */
declare class StepperResponsiveExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    thirdFormGroup: _angular_forms.FormGroup<{
        thirdCtrl: _angular_forms.FormControl<string | null>;
    }>;
    stepperOrientation: Observable<StepperOrientation>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperResponsiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperResponsiveExample, "stepper-responsive-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper header position
 */
declare class StepperHeaderPositionExample {
    private _formBuilder;
    firstFormGroup: _angular_forms.FormGroup<{
        firstCtrl: _angular_forms.FormControl<string | null>;
    }>;
    secondFormGroup: _angular_forms.FormGroup<{
        secondCtrl: _angular_forms.FormControl<string | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperHeaderPositionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperHeaderPositionExample, "stepper-header-position-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Stepper animations
 */
declare class StepperAnimationsExample {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperAnimationsExample, "stepper-animations-example", never, {}, {}, never, never, true, never>;
}

export { StepperAnimationsExample, StepperEditableExample, StepperErrorsExample, StepperHarnessExample, StepperHeaderPositionExample, StepperIntlExample, StepperLabelPositionBottomExample, StepperLazyContentExample, StepperOptionalExample, StepperOverviewExample, StepperResponsiveExample, StepperStatesExample, StepperVerticalExample };
