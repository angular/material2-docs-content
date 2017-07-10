import { MdSnackBar } from '@angular/material';
/**
 * @title Basic snack-bar
 */
export declare class SnackBarOverviewExample {
    snackBar: MdSnackBar;
    constructor(snackBar: MdSnackBar);
    openSnackBar(message: string, action: string): void;
}
