import { MdDialog } from '@angular/material';
/**
 * @title Injecting data when opening a dialog
 */
export declare class DialogDataExample {
    dialog: MdDialog;
    constructor(dialog: MdDialog);
    openDialog(): void;
}
export declare class DialogDataExampleDialog {
    data: any;
    constructor(data: any);
}
