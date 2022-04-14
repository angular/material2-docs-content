import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Fixed sidenav */
export declare class SidenavFixedExample {
    private _formBuilder;
    options: import("@angular/forms").FormGroup<{
        bottom: import("@angular/forms").FormControl<number | null>;
        fixed: import("@angular/forms").FormControl<false | null> | import("@angular/forms").FormControl<true | null>;
        top: import("@angular/forms").FormControl<number | null>;
    }>;
    constructor(_formBuilder: FormBuilder);
    shouldRun: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavFixedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavFixedExample, "sidenav-fixed-example", never, {}, {}, never, never>;
}
