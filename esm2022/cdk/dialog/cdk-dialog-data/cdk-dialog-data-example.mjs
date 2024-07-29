import { Component, inject } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
/**
 * @title Injecting data when opening a dialog
 */
export class CdkDialogDataExample {
    constructor() {
        this.dialog = inject(Dialog);
    }
    openDialog() {
        this.dialog.open(CdkDialogDataExampleDialog, {
            minWidth: '300px',
            data: {
                animal: 'panda',
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkDialogDataExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: CdkDialogDataExample, isStandalone: true, selector: "cdk-dialog-data-example", ngImport: i0, template: "<button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkDialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example', standalone: true, imports: [DialogModule], template: "<button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }] });
export class CdkDialogDataExampleDialog {
    constructor() {
        this.data = inject(DIALOG_DATA);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkDialogDataExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0", type: CdkDialogDataExampleDialog, isStandalone: true, selector: "cdk-dialog-data-example-dialog", ngImport: i0, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkDialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-data-example-dialog', standalone: true, template: "<h1>Favorite Animal</h1>\n<div>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1kYXRhLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1kYXRhL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZGlhbG9nL2Nkay1kaWFsb2ctZGF0YS9jZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7QUFNdEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8sb0JBQW9CO0lBTmpDO1FBT0UsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQVV6QjtJQVJDLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUMzQyxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLE9BQU87YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQVZVLG9CQUFvQjtrR0FBcEIsb0JBQW9CLG1GQ2hCakMseURBQ0EsMkNEYVksWUFBWTs7MkZBRVgsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUM7O0FBcUJ6QixNQUFNLE9BQU8sMEJBQTBCO0lBTnZDO1FBT0UsU0FBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM1Qjs4R0FGWSwwQkFBMEI7a0dBQTFCLDBCQUEwQiwwRkVuQ3ZDLHNaQXFCQTs7MkZGY2EsMEJBQTBCO2tCQU50QyxTQUFTOytCQUNFLGdDQUFnQyxjQUc5QixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpYWxvZywgRElBTE9HX0RBVEEsIERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RpYWxvZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogJ3BhbmRhJyB8ICd1bmljb3JuJyB8ICdsaW9uJztcbn1cblxuLyoqXG4gKiBAdGl0bGUgSW5qZWN0aW5nIGRhdGEgd2hlbiBvcGVuaW5nIGEgZGlhbG9nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0RpYWxvZ01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ0RhdGFFeGFtcGxlIHtcbiAgZGlhbG9nID0gaW5qZWN0KERpYWxvZyk7XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKENka0RpYWxvZ0RhdGFFeGFtcGxlRGlhbG9nLCB7XG4gICAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYW5pbWFsOiAncGFuZGEnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZGlhbG9nLWRhdGEtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2Nkay1kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dEYXRhRXhhbXBsZURpYWxvZyB7XG4gIGRhdGEgPSBpbmplY3QoRElBTE9HX0RBVEEpO1xufVxuIiwiPGJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cbiIsIjxoMT5GYXZvcml0ZSBBbmltYWw8L2gxPlxuPGRpdj5cbiAgTXkgZmF2b3JpdGUgYW5pbWFsIGlzOlxuICA8dWw+XG4gICAgPGxpPlxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ3BhbmRhJykge1xuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cbiAgICAgIH0gUGFuZGFcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIEBpZiAoZGF0YS5hbmltYWwgPT09ICd1bmljb3JuJykge1xuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cbiAgICAgIH0gVW5pY29yblxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ2xpb24nKSB7XG4gICAgICAgIDxzcGFuPiYjMTAwMDM7PC9zcGFuPlxuICAgICAgfSBMaW9uXG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuIl19