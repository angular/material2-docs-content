import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
/**
 * @title Chips with form control
 */
export declare class ChipsFormControlExample {
    keywords: Set<string>;
    formControl: FormControl<string[] | null>;
    addKeywordFromInput(event: MatChipInputEvent): void;
    removeKeyword(keyword: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsFormControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsFormControlExample, "chips-form-control-example", never, {}, {}, never, never, false>;
}
