import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper with editable steps
 */
export declare class StepperEditableExample {
    private _formBuilder;
    firstFormGroup: import("@angular/forms").FormGroup<{
        firstCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    secondFormGroup: import("@angular/forms").FormGroup<{
        secondCtrl: import("@angular/forms").FormControl<string | null>;
    }>;
    isEditable: boolean;
    constructor(_formBuilder: FormBuilder);
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperEditableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperEditableExample, "stepper-editable-example", never, {}, {}, never, never>;
}
