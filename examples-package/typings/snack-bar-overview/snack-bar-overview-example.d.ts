import { MdSnackBar } from '@angular/material';
export declare class SnackBarOverviewExample {
    snackBar: MdSnackBar;
    constructor(snackBar: MdSnackBar);
    openSnackBar(message: string, action: string): void;
}
