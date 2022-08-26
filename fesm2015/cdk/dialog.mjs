import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Inject, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1 from '@angular/cdk/dialog';
import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';

/**
 * @title Injecting data when opening a dialog
 */
class CdkDialogDataExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(CdkDialogDataExampleDialog, {
            minWidth: '300px',
            data: {
                animal: 'panda',
            },
        });
    }
}
CdkDialogDataExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogDataExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogDataExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkDialogDataExample, selector: "cdk-dialog-data-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open dialog</button>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example', template: "<button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
}
CdkDialogDataExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogDataExampleDialog, deps: [{ token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogDataExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkDialogDataExampleDialog, selector: "cdk-dialog-data-example-dialog", ngImport: i0, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example-dialog', template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [DIALOG_DATA]
                    }] }];
    } });

/**
 * @title CDK Dialog Overview
 */
class CdkDialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(CdkDialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.closed.subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
CdkDialogOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogOverviewExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkDialogOverviewExample, selector: "cdk-dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example', template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
CdkDialogOverviewExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogOverviewExampleDialog, deps: [{ token: i1.DialogRef }, { token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogOverviewExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkDialogOverviewExampleDialog, selector: "cdk-dialog-overview-example-dialog", ngImport: i0, template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example-dialog', template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DIALOG_DATA]
                    }] }];
    } });

/**
 * @title CDK Dialog Styling
 */
class CdkDialogStylingExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(CdkDialogStylingExampleDialog);
    }
}
CdkDialogStylingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogStylingExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogStylingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkDialogStylingExample, selector: "cdk-dialog-styling-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogStylingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example', template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogStylingExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
CdkDialogStylingExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogStylingExampleDialog, deps: [{ token: i1.DialogRef }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogStylingExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: CdkDialogStylingExampleDialog, selector: "cdk-dialog-styling-example-dialog", ngImport: i0, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkDialogStylingExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example-dialog', template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DialogRef }]; } });

const EXAMPLES = [
    CdkDialogDataExample,
    CdkDialogDataExampleDialog,
    CdkDialogOverviewExample,
    CdkDialogOverviewExampleDialog,
    CdkDialogStylingExample,
    CdkDialogStylingExampleDialog,
];
class DialogExamplesModule {
}
DialogExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, declarations: [CdkDialogDataExample,
        CdkDialogDataExampleDialog,
        CdkDialogOverviewExample,
        CdkDialogOverviewExampleDialog,
        CdkDialogStylingExample,
        CdkDialogStylingExampleDialog], imports: [CommonModule, DialogModule, FormsModule], exports: [CdkDialogDataExample,
        CdkDialogDataExampleDialog,
        CdkDialogOverviewExample,
        CdkDialogOverviewExampleDialog,
        CdkDialogStylingExample,
        CdkDialogStylingExampleDialog] });
DialogExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, imports: [CommonModule, DialogModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DialogExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DialogModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkDialogDataExample, CdkDialogDataExampleDialog, CdkDialogOverviewExample, CdkDialogOverviewExampleDialog, CdkDialogStylingExample, CdkDialogStylingExampleDialog, DialogExamplesModule };
//# sourceMappingURL=dialog.mjs.map
