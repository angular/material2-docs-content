import { MdDialog, MdDialogRef } from '@angular/material';
/**
 * @title Dialog Overview
 */
export declare class DialogOverviewExample {
    dialog: MdDialog;
    animal: string;
    name: string;
    constructor(dialog: MdDialog);
    openDialog(): void;
}
export declare class DialogOverviewExampleDialog {
    dialogRef: MdDialogRef<DialogOverviewExampleDialog>;
    data: any;
    constructor(dialogRef: MdDialogRef<DialogOverviewExampleDialog>, data: any);
    onNoClick(): void;
}
