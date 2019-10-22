import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
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
    static ngFactoryDef: i0.ɵɵFactoryDef<DialogOverviewExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<DialogOverviewExample, "dialog-overview-example", never, {}, {}, never>;
}
export declare class DialogOverviewExampleDialog {
    dialogRef: MatDialogRef<DialogOverviewExampleDialog>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<DialogOverviewExampleDialog>, data: DialogData);
    onNoClick(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<DialogOverviewExampleDialog>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<DialogOverviewExampleDialog, "dialog-overview-example-dialog", never, {}, {}, never>;
}
