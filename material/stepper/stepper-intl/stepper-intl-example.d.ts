import { FormBuilder } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import * as i0 from "@angular/core";
export declare class StepperIntl extends MatStepperIntl {
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
    firstFormGroup: import("@angular/forms").FormGroup<{
        firstCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    secondFormGroup: import("@angular/forms").FormGroup<{
        secondCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    constructor(_formBuilder: FormBuilder, _matStepperIntl: MatStepperIntl);
    updateOptionalLabel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperIntlExample, "stepper-intl-example", never, {}, {}, never, never, false>;
}
