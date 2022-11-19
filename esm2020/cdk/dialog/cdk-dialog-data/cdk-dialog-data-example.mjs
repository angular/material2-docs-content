import { Component, Inject } from '@angular/core';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/common";
/**
 * @title Injecting data when opening a dialog
 */
export class CdkDialogDataExample {
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
CdkDialogDataExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CdkDialogDataExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogDataExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: CdkDialogDataExample, selector: "cdk-dialog-data-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open dialog</button>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CdkDialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example', template: "<button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
export class CdkDialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
}
CdkDialogDataExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CdkDialogDataExampleDialog, deps: [{ token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogDataExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: CdkDialogDataExampleDialog, selector: "cdk-dialog-data-example-dialog", ngImport: i0, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: CdkDialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example-dialog', template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1kYXRhL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBTXhEOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFckMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQzNDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O2lIQVZVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtEQ2RqQyx5REFDQTsyRkRhYSxvQkFBb0I7a0JBSmhDLFNBQVM7K0JBQ0UseUJBQXlCOztBQXFCckMsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUF3QyxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs7dUhBRGpELDBCQUEwQixrQkFDakIsV0FBVzsyR0FEcEIsMEJBQTBCLHNFRWhDdkMsc1dBZUE7MkZGaUJhLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSxnQ0FBZ0M7OzBCQUs3QixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlhbG9nLCBESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RpYWxvZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogJ3BhbmRhJyB8ICd1bmljb3JuJyB8ICdsaW9uJztcbn1cblxuLyoqXG4gKiBAdGl0bGUgSW5qZWN0aW5nIGRhdGEgd2hlbiBvcGVuaW5nIGEgZGlhbG9nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGlhbG9nRGF0YUV4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBEaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKENka0RpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLCB7XG4gICAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYW5pbWFsOiAncGFuZGEnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7fVxufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cbiIsIjxoMT5GYXZvcml0ZSBBbmltYWw8L2gxPlxuPGRpdj5cbiAgTXkgZmF2b3JpdGUgYW5pbWFsIGlzOlxuICA8dWw+XG4gICAgPGxpPlxuICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhLmFuaW1hbCA9PT0gJ3BhbmRhJ1wiPiYjMTAwMDM7PC9zcGFuPiBQYW5kYVxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhLmFuaW1hbCA9PT0gJ3VuaWNvcm4nXCI+JiMxMDAwMzs8L3NwYW4+IFVuaWNvcm5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YS5hbmltYWwgPT09ICdsaW9uJ1wiPiYjMTAwMDM7PC9zcGFuPiBMaW9uXG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuIl19