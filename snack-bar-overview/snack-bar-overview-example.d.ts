import { MatSnackBar } from '@angular/material/snack-bar';
/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    private snackBar;
    constructor(snackBar: MatSnackBar);
    openSnackBar(message: string, action: string): void;
}
