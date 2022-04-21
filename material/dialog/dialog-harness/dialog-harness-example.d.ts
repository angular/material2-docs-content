import { TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as i0 from "@angular/core";
/**
 * @title Testing with MatDialogHarness
 */
export declare class DialogHarnessExample {
    readonly dialog: MatDialog;
    dialogTemplate: TemplateRef<any>;
    constructor(dialog: MatDialog);
    open(config?: MatDialogConfig): import("@angular/material/dialog").MatDialogRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogHarnessExample, "dialog-harness-example", never, {}, {}, never, never, false>;
}
