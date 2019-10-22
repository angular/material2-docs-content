import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Stepper label bottom position
 */
export declare class StepperLabelPositionBottomExample implements OnInit {
    private _formBuilder;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<StepperLabelPositionBottomExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<StepperLabelPositionBottomExample, "stepper-label-position-bottom-example", never, {}, {}, never>;
}
