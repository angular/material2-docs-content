import * as i0 from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ModelSignal } from '@angular/core';
import { Signal } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { WritableSignal } from '@angular/core';

/**
 * @title Dialog Animations
 */
export declare class DialogAnimationsExample {
    readonly dialog: MatDialog;
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogAnimationsExample, "dialog-animations-example", never, {}, {}, never, never, true, never>;
}

export declare class DialogAnimationsExampleDialog {
    readonly dialogRef: MatDialogRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogAnimationsExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogAnimationsExampleDialog, "dialog-animations-example-dialog", never, {}, {}, never, never, true, never>;
}

/**
 * @title Dialog with header, scrollable content and actions
 */
export declare class DialogContentExample {
    readonly dialog: MatDialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogContentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogContentExample, "dialog-content-example", never, {}, {}, never, never, true, never>;
}

export declare class DialogContentExampleDialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogContentExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogContentExampleDialog, "dialog-content-example-dialog", never, {}, {}, never, never, true, never>;
}

declare interface DialogData {
    animal: string;
    name: string;
}

/**
 * @title Injecting data when opening a dialog
 */
export declare class DialogDataExample {
    dialog: MatDialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogDataExample, "dialog-data-example", never, {}, {}, never, never, true, never>;
}

export declare class DialogDataExampleDialog {
    data: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogDataExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogDataExampleDialog, "dialog-data-example-dialog", never, {}, {}, never, never, true, never>;
}

/**
 * @title Dialog elements
 */
export declare class DialogElementsExample {
    readonly dialog: MatDialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogElementsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogElementsExample, "dialog-elements-example", never, {}, {}, never, never, true, never>;
}

export declare class DialogElementsExampleDialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogElementsExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogElementsExampleDialog, "dialog-elements-example-dialog", never, {}, {}, never, never, true, never>;
}

/**
 * @title Dialog launched from a menu
 */
export declare class DialogFromMenuExample {
    readonly menuTrigger: Signal<MatMenuTrigger>;
    readonly dialog: MatDialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogFromMenuExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogFromMenuExample, "dialog-from-menu-example", never, {}, {}, never, never, true, never>;
}

export declare class DialogFromMenuExampleDialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogFromMenuExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogFromMenuExampleDialog, "dialog-from-menu-dialog", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatDialogHarness
 */
export declare class DialogHarnessExample {
    readonly dialogTemplate: Signal<TemplateRef<any>>;
    readonly dialog: MatDialog;
    open(config?: MatDialogConfig): MatDialogRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogHarnessExample, "dialog-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Dialog Overview
 */
export declare class DialogOverviewExample {
    readonly animal: WritableSignal<string>;
    readonly name: ModelSignal<string>;
    readonly dialog: MatDialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogOverviewExample, "dialog-overview-example", never, { "name": { "alias": "name"; "required": false; "isSignal": true; }; }, { "name": "nameChange"; }, never, never, true, never>;
}

export declare class DialogOverviewExampleDialog {
    readonly dialogRef: MatDialogRef<any, any>;
    readonly data: DialogData;
    readonly animal: ModelSignal<string>;
    onNoClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogOverviewExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogOverviewExampleDialog, "dialog-overview-example-dialog", never, { "animal": { "alias": "animal"; "required": false; "isSignal": true; }; }, { "animal": "animalChange"; }, never, never, true, never>;
}

export { }
