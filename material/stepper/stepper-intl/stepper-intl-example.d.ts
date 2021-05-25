import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
export declare class StepperIntlExample implements OnInit {
    private _formBuilder;
    private _matStepperIntl;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    optionalLabelText: string;
    optionalLabelTextChoices: string[];
    constructor(_formBuilder: FormBuilder, _matStepperIntl: MatStepperIntl);
    updateOptionalLabel(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperIntlExample, "stepper-intl-example", never, {}, {}, never, never>;
}
