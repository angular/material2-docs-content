import * as i0 from '@angular/core';
import { Component, Inject } from '@angular/core';
import * as i1 from '@angular/cdk/dialog';
import { DialogModule, DIALOG_DATA } from '@angular/cdk/dialog';
import { NgIf } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogDataExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: CdkDialogDataExample, isStandalone: true, selector: "cdk-dialog-data-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogDataExampleDialog, deps: [{ token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: CdkDialogDataExampleDialog, isStandalone: true, selector: "cdk-dialog-data-example-dialog", ngImport: i0, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example-dialog', standalone: true, imports: [NgIf], template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }]; } });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogOverviewExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: CdkDialogOverviewExample, isStandalone: true, selector: "cdk-dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example', standalone: true, imports: [FormsModule, NgIf, DialogModule], template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogOverviewExampleDialog, deps: [{ token: i1.DialogRef }, { token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: CdkDialogOverviewExampleDialog, isStandalone: true, selector: "cdk-dialog-overview-example-dialog", ngImport: i0, template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example-dialog', standalone: true, imports: [FormsModule], template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }]; } });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogStylingExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: CdkDialogStylingExample, isStandalone: true, selector: "cdk-dialog-styling-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogStylingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open custom dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogStylingExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogStylingExampleDialog, deps: [{ token: i1.DialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: CdkDialogStylingExampleDialog, isStandalone: true, selector: "cdk-dialog-styling-example-dialog", ngImport: i0, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: CdkDialogStylingExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-styling-example-dialog', standalone: true, template: "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\nwould tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\nwise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\nof the dark side that he could even keep the ones he cared about from dying. The dark side of the\nForce is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only\nthing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately,\nhe taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic.\nHe could save others from death, but not himself.\n\n<hr>\n\n<button (click)=\"dialogRef.close()\">Close</button>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 500px;\n  animation: custom-dialog-enter 1s ease;\n}\n\n@keyframes custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DialogRef }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkDialogDataExample, CdkDialogDataExampleDialog, CdkDialogOverviewExample, CdkDialogOverviewExampleDialog, CdkDialogStylingExample, CdkDialogStylingExampleDialog };
//# sourceMappingURL=dialog.mjs.map
