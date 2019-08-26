import { MatSnackBar } from '@angular/material/snack-bar';
/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    private _snackBar;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(message: string, action: string): void;
}
