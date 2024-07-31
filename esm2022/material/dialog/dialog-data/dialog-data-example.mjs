import { Component, inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Injecting data when opening a dialog
 */
export class DialogDataExample {
    constructor() {
        this.dialog = inject(MatDialog);
    }
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda',
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogDataExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: DialogDataExample, isStandalone: true, selector: "dialog-data-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example', standalone: true, imports: [MatButtonModule], template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }] });
export class DialogDataExampleDialog {
    constructor() {
        this.data = inject(MAT_DIALOG_DATA);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogDataExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: DialogDataExampleDialog, isStandalone: true, selector: "dialog-data-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Favorite Animal</h2>\n<mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</mat-dialog-content>\n", dependencies: [{ kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: DialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example-dialog', standalone: true, imports: [MatDialogTitle, MatDialogContent], template: "<h2 mat-dialog-title>Favorite Animal</h2>\n<mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      @if (data.animal === 'panda') {\n        <span>&#10003;</span>\n      } Panda\n    </li>\n    <li>\n      @if (data.animal === 'unicorn') {\n        <span>&#10003;</span>\n      } Unicorn\n    </li>\n    <li>\n      @if (data.animal === 'lion') {\n        <span>&#10003;</span>\n      } Lion\n    </li>\n  </ul>\n</mat-dialog-content>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7OztBQU16RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxpQkFBaUI7SUFOOUI7UUFPRSxXQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBUzVCO0lBUEMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ3hDLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTzthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7cUhBVFUsaUJBQWlCO3lHQUFqQixpQkFBaUIsK0VDdEI5QixvRUFDQSwyQ0RtQlksZUFBZTs7a0dBRWQsaUJBQWlCO2tCQU43QixTQUFTOytCQUNFLHFCQUFxQixjQUVuQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUM7O0FBb0I1QixNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UsU0FBSSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNoQztxSEFGWSx1QkFBdUI7eUdBQXZCLHVCQUF1QixzRkV4Q3BDLHFjQXFCQSw0Q0ZpQlksY0FBYywrSEFBRSxnQkFBZ0I7O2tHQUUvQix1QkFBdUI7a0JBTm5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRTFCLElBQUksV0FDUCxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0RGlhbG9nLFxuICBNQVRfRElBTE9HX0RBVEEsXG4gIE1hdERpYWxvZ1RpdGxlLFxuICBNYXREaWFsb2dDb250ZW50LFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogJ3BhbmRhJyB8ICd1bmljb3JuJyB8ICdsaW9uJztcbn1cblxuLyoqXG4gKiBAdGl0bGUgSW5qZWN0aW5nIGRhdGEgd2hlbiBvcGVuaW5nIGEgZGlhbG9nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1kYXRhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhRXhhbXBsZSB7XG4gIGRpYWxvZyA9IGluamVjdChNYXREaWFsb2cpO1xuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dEYXRhRXhhbXBsZURpYWxvZywge1xuICAgICAgZGF0YToge1xuICAgICAgICBhbmltYWw6ICdwYW5kYScsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdERpYWxvZ1RpdGxlLCBNYXREaWFsb2dDb250ZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2cge1xuICBkYXRhID0gaW5qZWN0KE1BVF9ESUFMT0dfREFUQSk7XG59XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG4iLCI8aDIgbWF0LWRpYWxvZy10aXRsZT5GYXZvcml0ZSBBbmltYWw8L2gyPlxuPG1hdC1kaWFsb2ctY29udGVudD5cbiAgTXkgZmF2b3JpdGUgYW5pbWFsIGlzOlxuICA8dWw+XG4gICAgPGxpPlxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ3BhbmRhJykge1xuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cbiAgICAgIH0gUGFuZGFcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIEBpZiAoZGF0YS5hbmltYWwgPT09ICd1bmljb3JuJykge1xuICAgICAgICA8c3Bhbj4mIzEwMDAzOzwvc3Bhbj5cbiAgICAgIH0gVW5pY29yblxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgQGlmIChkYXRhLmFuaW1hbCA9PT0gJ2xpb24nKSB7XG4gICAgICAgIDxzcGFuPiYjMTAwMDM7PC9zcGFuPlxuICAgICAgfSBMaW9uXG4gICAgPC9saT5cbiAgPC91bD5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuIl19