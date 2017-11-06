import { MatSnackBar } from '@angular/material';
/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    snackBar: MatSnackBar;
    constructor(snackBar: MatSnackBar);
    openSnackBar(message: string, action: string): void;
}
