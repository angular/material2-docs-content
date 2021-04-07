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
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogOverviewExample, "dialog-overview-example", never, {}, {}, never, never>;
}
export declare class DialogOverviewExampleDialog {
    dialogRef: MatDialogRef<DialogOverviewExampleDialog>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<DialogOverviewExampleDialog>, data: DialogData);
    onNoClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogOverviewExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogOverviewExampleDialog, "dialog-overview-example-dialog", never, {}, {}, never, never>;
}
