import { MatDialog } from '@angular/material';
export interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
}
/**
 * @title Injecting data when opening a dialog
 */
export declare class DialogDataExample {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(): void;
}
export declare class DialogDataExampleDialog {
    data: DialogData;
    constructor(data: DialogData);
}
