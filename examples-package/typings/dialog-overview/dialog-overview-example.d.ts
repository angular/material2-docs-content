import { MatDialog, MatDialogRef } from '@angular/material';
/**
 * @title Dialog Overview
 */
export declare class DialogOverviewExample {
    dialog: MatDialog;
    animal: string;
    name: string;
    constructor(dialog: MatDialog);
    openDialog(): void;
}
export declare class DialogOverviewExampleDialog {
    dialogRef: MatDialogRef<DialogOverviewExampleDialog>;
    data: any;
    constructor(dialogRef: MatDialogRef<DialogOverviewExampleDialog>, data: any);
    onNoClick(): void;
}
