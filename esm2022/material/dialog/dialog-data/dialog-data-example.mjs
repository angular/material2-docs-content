import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Injecting data when opening a dialog
 */
export class DialogDataExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda',
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DialogDataExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: DialogDataExample, isStandalone: true, selector: "dialog-data-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatDialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example', standalone: true, imports: [MatButtonModule, MatDialogModule], template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
export class DialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DialogDataExampleDialog, deps: [{ token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: DialogDataExampleDialog, isStandalone: true, selector: "dialog-data-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: DialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example-dialog', standalone: true, imports: [MatDialogModule, NgIf], template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JGLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNekQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN4QyxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLE9BQU87YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQVRVLGlCQUFpQjtrR0FBakIsaUJBQWlCLCtFQ2xCOUIsb0VBQ0EsMkNEZVksZUFBZSwyUUFBRSxlQUFlOzsyRkFFL0IsaUJBQWlCO2tCQU43QixTQUFTOytCQUNFLHFCQUFxQixjQUVuQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDOztBQW9CN0MsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUE0QyxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs4R0FEckQsdUJBQXVCLGtCQUNkLGVBQWU7a0dBRHhCLHVCQUF1QixzRkVwQ3BDLDBZQWVBLDJDRm1CWSxlQUFlLDJTQUFFLElBQUk7OzJGQUVwQix1QkFBdUI7a0JBTm5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRTFCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7OzBCQUduQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6ICdwYW5kYScgfCAndW5pY29ybicgfCAnbGlvbic7XG59XG5cbi8qKlxuICogQHRpdGxlIEluamVjdGluZyBkYXRhIHdoZW4gb3BlbmluZyBhIGRpYWxvZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXREaWFsb2dNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2csIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYW5pbWFsOiAncGFuZGEnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXREaWFsb2dNb2R1bGUsIE5nSWZdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cbn1cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkZhdm9yaXRlIEFuaW1hbDwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgTXkgZmF2b3JpdGUgYW5pbWFsIGlzOlxuICA8dWw+XG4gICAgPGxpPlxuICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhLmFuaW1hbCA9PT0gJ3BhbmRhJ1wiPiYjMTAwMDM7PC9zcGFuPiBQYW5kYVxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhLmFuaW1hbCA9PT0gJ3VuaWNvcm4nXCI+JiMxMDAwMzs8L3NwYW4+IFVuaWNvcm5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YS5hbmltYWwgPT09ICdsaW9uJ1wiPiYjMTAwMDM7PC9zcGFuPiBMaW9uXG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuIl19