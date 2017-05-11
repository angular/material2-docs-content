import { MdDialog, MdDialogRef } from '@angular/material';
export declare class DialogResultExample {
    dialog: MdDialog;
    selectedOption: string;
    constructor(dialog: MdDialog);
    openDialog(): void;
}
export declare class DialogResultExampleDialog {
    dialogRef: MdDialogRef<DialogResultExampleDialog>;
    constructor(dialogRef: MdDialogRef<DialogResultExampleDialog>);
}
