import { UntypedFormBuilder } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Stepper responsive
 */
export declare class StepperResponsiveExample {
    private _formBuilder;
    firstFormGroup: import("@angular/forms").FormGroup;
    secondFormGroup: import("@angular/forms").FormGroup;
    thirdFormGroup: import("@angular/forms").FormGroup;
    stepperOrientation: Observable<StepperOrientation>;
    constructor(_formBuilder: UntypedFormBuilder, breakpointObserver: BreakpointObserver);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperResponsiveExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperResponsiveExample, "stepper-responsive-example", never, {}, {}, never, never>;
}
