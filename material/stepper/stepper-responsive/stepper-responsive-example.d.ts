import { FormBuilder } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Stepper responsive
 */
export declare class StepperResponsiveExample {
    private _formBuilder;
    firstFormGroup: import("@angular/forms").FormGroup<{
        firstCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    secondFormGroup: import("@angular/forms").FormGroup<{
        secondCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    thirdFormGroup: import("@angular/forms").FormGroup<{
        thirdCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    stepperOrientation: Observable<StepperOrientation>;
    constructor(_formBuilder: FormBuilder, breakpointObserver: BreakpointObserver);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperResponsiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperResponsiveExample, "stepper-responsive-example", never, {}, {}, never, never, false>;
}
