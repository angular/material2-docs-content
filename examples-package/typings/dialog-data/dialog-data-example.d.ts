import { MatDialog } from '@angular/material';
/**
 * @title Injecting data when opening a dialog
 */
export declare class DialogDataExample {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(): void;
}
export declare class DialogDataExampleDialog {
    data: any;
    constructor(data: any);
}
