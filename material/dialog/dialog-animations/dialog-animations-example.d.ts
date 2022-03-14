import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
/**
 * @title Dialog Animations
 */
export declare class DialogAnimationsExample {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogAnimationsExample, "dialog-animations-example", never, {}, {}, never, never>;
}
export declare class DialogAnimationsExampleDialog {
    dialogRef: MatDialogRef<DialogAnimationsExampleDialog>;
    constructor(dialogRef: MatDialogRef<DialogAnimationsExampleDialog>);
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogAnimationsExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogAnimationsExampleDialog, "dialog-animations-example-dialog", never, {}, {}, never, never>;
}
