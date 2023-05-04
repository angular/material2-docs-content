import { Component, Inject } from '@angular/core';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/common";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogDataExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkDialogDataExample, selector: "cdk-dialog-data-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open dialog</button>\n" }); }
}
export { CdkDialogDataExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example', template: "<button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogDataExampleDialog, deps: [{ token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkDialogDataExampleDialog, selector: "cdk-dialog-data-example-dialog", ngImport: i0, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
export { CdkDialogDataExampleDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example-dialog', template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1kYXRhL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBTXhEOztHQUVHO0FBQ0gsTUFJYSxvQkFBb0I7SUFDL0IsWUFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXJDLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUMzQyxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLE9BQU87YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQVZVLG9CQUFvQjtrR0FBcEIsb0JBQW9CLCtEQ2RqQyx5REFDQTs7U0RhYSxvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSx5QkFBeUI7O0FBZ0JyQyxNQUthLDBCQUEwQjtJQUNyQyxZQUF3QyxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs4R0FEakQsMEJBQTBCLGtCQUNqQixXQUFXO2tHQURwQiwwQkFBMEIsc0VFaEN2QyxzV0FlQTs7U0ZpQmEsMEJBQTBCOzJGQUExQiwwQkFBMEI7a0JBTHRDLFNBQVM7K0JBQ0UsZ0NBQWdDOzswQkFLN0IsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpYWxvZywgRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6ICdwYW5kYScgfCAndW5pY29ybicgfCAnbGlvbic7XG59XG5cbi8qKlxuICogQHRpdGxlIEluamVjdGluZyBkYXRhIHdoZW4gb3BlbmluZyBhIGRpYWxvZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ0RhdGFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogRGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihDZGtEaWFsb2dEYXRhRXhhbXBsZURpYWxvZywge1xuICAgICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFuaW1hbDogJ3BhbmRhJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cbn1cbiIsIjxidXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG4iLCI8aDE+RmF2b3JpdGUgQW5pbWFsPC9oMT5cbjxkaXY+XG4gIE15IGZhdm9yaXRlIGFuaW1hbCBpczpcbiAgPHVsPlxuICAgIDxsaT5cbiAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YS5hbmltYWwgPT09ICdwYW5kYSdcIj4mIzEwMDAzOzwvc3Bhbj4gUGFuZGFcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YS5hbmltYWwgPT09ICd1bmljb3JuJ1wiPiYjMTAwMDM7PC9zcGFuPiBVbmljb3JuXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8c3BhbiAqbmdJZj1cImRhdGEuYW5pbWFsID09PSAnbGlvbidcIj4mIzEwMDAzOzwvc3Bhbj4gTGlvblxuICAgIDwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cbiJdfQ==