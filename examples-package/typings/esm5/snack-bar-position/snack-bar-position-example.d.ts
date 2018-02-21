import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
/**
 * @title Snack-bar with configurable position
 */
export declare class SnackBarPositionExample {
    snackBar: MatSnackBar;
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
    constructor(snackBar: MatSnackBar);
    openSnackBar(): void;
}
