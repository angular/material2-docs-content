import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @title Slide-toggle with forms
 */
export declare class SlideToggleFormsExample {
    isChecked: boolean;
    formGroup: FormGroup;
    constructor(formBuilder: FormBuilder);
    onFormSubmit(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<SlideToggleFormsExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<SlideToggleFormsExample, "slide-toggle-forms-example", never, {}, {}, never>;
}
