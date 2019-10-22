import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
/**
 * @title Snack-bar with configurable position
 */
export declare class SnackBarPositionExample {
    private _snackBar;
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<SnackBarPositionExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<SnackBarPositionExample, "snack-bar-position-example", never, {}, {}, never>;
}
