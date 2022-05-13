import { Dialog } from '@angular/cdk/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import * as i0 from '@angular/core';
import * as i4 from '@angular/common';
import * as i5 from '@angular/cdk/dialog';
import * as i6 from '@angular/forms';

/**
 * @title Injecting data when opening a dialog
 */
export declare class CdkDialogDataExample {
    dialog: Dialog;
    constructor(dialog: Dialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogDataExample, "cdk-dialog-data-example", never, {}, {}, never, never, false>;
}

export declare class CdkDialogDataExampleDialog {
    data: DialogData;
    constructor(data: DialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogDataExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogDataExampleDialog, "cdk-dialog-data-example-dialog", never, {}, {}, never, never, false>;
}

/**
 * @title CDK Dialog Overview
 */
export declare class CdkDialogOverviewExample {
    dialog: Dialog;
    animal: string | undefined;
    name: string;
    constructor(dialog: Dialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogOverviewExample, "cdk-dialog-overview-example", never, {}, {}, never, never, false>;
}

export declare class CdkDialogOverviewExampleDialog {
    dialogRef: DialogRef<string>;
    data: DialogData_2;
    constructor(dialogRef: DialogRef<string>, data: DialogData_2);
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogOverviewExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogOverviewExampleDialog, "cdk-dialog-overview-example-dialog", never, {}, {}, never, never, false>;
}

/**
 * @title CDK Dialog Styling
 */
export declare class CdkDialogStylingExample {
    dialog: Dialog;
    constructor(dialog: Dialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogStylingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogStylingExample, "cdk-dialog-styling-example", never, {}, {}, never, never, false>;
}

export declare class CdkDialogStylingExampleDialog {
    dialogRef: DialogRef;
    constructor(dialogRef: DialogRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogStylingExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogStylingExampleDialog, "cdk-dialog-styling-example-dialog", never, {}, {}, never, never, false>;
}

declare interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
}

declare interface DialogData_2 {
    animal: string;
    name: string;
}

export declare class DialogExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DialogExamplesModule, [typeof i1.CdkDialogDataExample, typeof i1.CdkDialogDataExampleDialog, typeof i2.CdkDialogOverviewExample, typeof i2.CdkDialogOverviewExampleDialog, typeof i3.CdkDialogStylingExample, typeof i3.CdkDialogStylingExampleDialog], [typeof i4.CommonModule, typeof i5.DialogModule, typeof i6.FormsModule], [typeof i1.CdkDialogDataExample, typeof i1.CdkDialogDataExampleDialog, typeof i2.CdkDialogOverviewExample, typeof i2.CdkDialogOverviewExampleDialog, typeof i3.CdkDialogStylingExample, typeof i3.CdkDialogStylingExampleDialog]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DialogExamplesModule>;
}

declare namespace i1 {
    export {
        DialogData,
        CdkDialogDataExample,
        CdkDialogDataExampleDialog
    }
}

declare namespace i2 {
    export {
        DialogData_2 as DialogData,
        CdkDialogOverviewExample,
        CdkDialogOverviewExampleDialog
    }
}

declare namespace i3 {
    export {
        CdkDialogStylingExample,
        CdkDialogStylingExampleDialog
    }
}

export { }
