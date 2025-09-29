import { Dialog, DialogRef } from '@angular/cdk/dialog';
import * as i0 from '@angular/core';

/**
 * @title Injecting data when opening a dialog
 */
declare class CdkDialogDataExample {
    dialog: Dialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogDataExample, "cdk-dialog-data-example", never, {}, {}, never, never, true, never>;
}
declare class CdkDialogDataExampleDialog {
    data: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogDataExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogDataExampleDialog, "cdk-dialog-data-example-dialog", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK Dialog Overview
 */
declare class CdkDialogOverviewExample {
    dialog: Dialog;
    animal: string | undefined;
    name: string;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogOverviewExample, "cdk-dialog-overview-example", never, {}, {}, never, never, true, never>;
}
declare class CdkDialogOverviewExampleDialog {
    dialogRef: DialogRef<string, unknown>;
    data: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogOverviewExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogOverviewExampleDialog, "cdk-dialog-overview-example-dialog", never, {}, {}, never, never, true, never>;
}

/**
 * @title CDK Dialog Styling
 */
declare class CdkDialogStylingExample {
    dialog: Dialog;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogStylingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogStylingExample, "cdk-dialog-styling-example", never, {}, {}, never, never, true, never>;
}
declare class CdkDialogStylingExampleDialog {
    dialogRef: DialogRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDialogStylingExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDialogStylingExampleDialog, "cdk-dialog-styling-example-dialog", never, {}, {}, never, never, true, never>;
}

export { CdkDialogDataExample, CdkDialogDataExampleDialog, CdkDialogOverviewExample, CdkDialogOverviewExampleDialog, CdkDialogStylingExample, CdkDialogStylingExampleDialog };
