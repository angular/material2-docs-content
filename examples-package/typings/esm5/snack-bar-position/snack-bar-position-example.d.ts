import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
/**
 * @title Snack-bar with configurable position
 */
export declare class SnackBarPositionExample {
    private snackBar;
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
    constructor(snackBar: MatSnackBar);
    openSnackBar(): void;
}
