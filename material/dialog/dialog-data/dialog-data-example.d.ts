import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<DialogDataExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DialogDataExample, "dialog-data-example", never, {}, {}, never>;
}
export declare class DialogDataExampleDialog {
    data: DialogData;
    constructor(data: DialogData);
    static ɵfac: i0.ɵɵFactoryDef<DialogDataExampleDialog>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DialogDataExampleDialog, "dialog-data-example-dialog", never, {}, {}, never>;
}
