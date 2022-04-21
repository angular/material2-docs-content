import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
/**
 * @title Testing with MatSnackBarHarness
 */
export declare class SnackBarHarnessExample {
    readonly snackBar: MatSnackBar;
    constructor(snackBar: MatSnackBar);
    open(message: string, action?: string, config?: MatSnackBarConfig): import("@angular/material/snack-bar").MatSnackBarRef<import("@angular/material/snack-bar").TextOnlySnackBar>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarHarnessExample, "snack-bar-harness-example", never, {}, {}, never, never, false>;
}
