import { Component, Inject } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: CdkDialogDataExample, isStandalone: true, selector: "cdk-dialog-data-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: () => [{ type: i1.Dialog }] });
export class CdkDialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExampleDialog, deps: [{ token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CdkDialogDataExampleDialog, isStandalone: true, selector: "cdk-dialog-data-example-dialog", ngImport: i0, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CdkDialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example-dialog', standalone: true, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1kYXRhL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBTXRFOztHQUVHO0FBT0gsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFckMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQzNDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBVlUsb0JBQW9CO2tHQUFwQixvQkFBb0IsbUZDaEJqQyx5REFDQSwyQ0RhWSxZQUFZOzsyRkFFWCxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzs7QUFxQnpCLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFBd0MsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7OEdBRGpELDBCQUEwQixrQkFDakIsV0FBVztrR0FEcEIsMEJBQTBCLDBGRW5DdkMsc1pBcUJBOzsyRkZjYSwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsZ0NBQWdDLGNBRzlCLElBQUk7OzBCQUdILE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaWFsb2csIERJQUxPR19EQVRBLCBEaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6ICdwYW5kYScgfCAndW5pY29ybicgfCAnbGlvbic7XG59XG5cbi8qKlxuICogQHRpdGxlIEluamVjdGluZyBkYXRhIHdoZW4gb3BlbmluZyBhIGRpYWxvZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtEaWFsb2dNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dEYXRhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oQ2RrRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csIHtcbiAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgICAgZGF0YToge1xuICAgICAgICBhbmltYWw6ICdwYW5kYScsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XG59XG4iLCI8YnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5PcGVuIGRpYWxvZzwvYnV0dG9uPlxuIiwiPGgxPkZhdm9yaXRlIEFuaW1hbDwvaDE+XG48ZGl2PlxuICBNeSBmYXZvcml0ZSBhbmltYWwgaXM6XG4gIDx1bD5cbiAgICA8bGk+XG4gICAgICBAaWYgKGRhdGEuYW5pbWFsID09PSAncGFuZGEnKSB7XG4gICAgICAgIDxzcGFuPiYjMTAwMDM7PC9zcGFuPlxuICAgICAgfSBQYW5kYVxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ3VuaWNvcm4nKSB7XG4gICAgICAgIDxzcGFuPiYjMTAwMDM7PC9zcGFuPlxuICAgICAgfSBVbmljb3JuXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICBAaWYgKGRhdGEuYW5pbWFsID09PSAnbGlvbicpIHtcbiAgICAgICAgPHNwYW4+JiMxMDAwMzs8L3NwYW4+XG4gICAgICB9IExpb25cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY+XG4iXX0=