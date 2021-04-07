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
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogDataExample, "dialog-data-example", never, {}, {}, never, never>;
}
export declare class DialogDataExampleDialog {
    data: DialogData;
    constructor(data: DialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogDataExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogDataExampleDialog, "dialog-data-example-dialog", never, {}, {}, never, never>;
}
