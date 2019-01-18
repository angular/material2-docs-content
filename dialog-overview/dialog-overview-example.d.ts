import { MatDialog, MatDialogRef } from '@angular/material';
export interface DialogData {
    animal: string;
    name: string;
}
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
    data: DialogData;
    constructor(dialogRef: MatDialogRef<DialogOverviewExampleDialog>, data: DialogData);
    onNoClick(): void;
}
