import { Component, Inject } from '@angular/core';
import { MatLegacyDialog, MAT_LEGACY_DIALOG_DATA } from '@angular/material/legacy-dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-dialog";
import * as i2 from "@angular/material/legacy-button";
import * as i3 from "@angular/common";
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
}
DialogDataExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DialogDataExample, deps: [{ token: i1.MatLegacyDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogDataExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: DialogDataExample, selector: "dialog-data-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "component", type: i2.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DialogDataExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example', template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatLegacyDialog }]; } });
export class DialogDataExampleDialog {
    constructor(data) {
        this.data = data;
    }
}
DialogDataExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DialogDataExampleDialog, deps: [{ token: MAT_LEGACY_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
DialogDataExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: DialogDataExampleDialog, selector: "dialog-data-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.MatLegacyDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatLegacyDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DialogDataExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-data-example-dialog', template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_LEGACY_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1kYXRhL2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctZGF0YS9kaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFNeEY7O0dBRUc7QUFLSCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW1CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQUcsQ0FBQztJQUU5QyxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDeEMsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxPQUFPO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7bUhBVFUsaUJBQWlCO3VHQUFqQixpQkFBaUIsMkRDZDlCLG9FQUNBO2dHRGFhLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxxQkFBcUI7O0FBbUJqQyxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW1ELElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzt5SEFENUQsdUJBQXVCLGtCQUNkLHNCQUFzQjs2R0FEL0IsdUJBQXVCLGtFRTlCcEMsMFlBZUE7Z0dGZWEsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLDRCQUE0Qjs7MEJBSXpCLE1BQU07MkJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExlZ2FjeURpYWxvZywgTUFUX0xFR0FDWV9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWRpYWxvZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogJ3BhbmRhJyB8ICd1bmljb3JuJyB8ICdsaW9uJztcbn1cblxuLyoqXG4gKiBAdGl0bGUgSW5qZWN0aW5nIGRhdGEgd2hlbiBvcGVuaW5nIGEgZGlhbG9nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1kYXRhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1kYXRhLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RhdGFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0TGVnYWN5RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dEYXRhRXhhbXBsZURpYWxvZywge1xuICAgICAgZGF0YToge1xuICAgICAgICBhbmltYWw6ICdwYW5kYScsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1kYXRhLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZGF0YS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRGF0YUV4YW1wbGVEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9MRUdBQ1lfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7fVxufVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5PcGVuIGRpYWxvZzwvYnV0dG9uPlxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+RmF2b3JpdGUgQW5pbWFsPC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICBNeSBmYXZvcml0ZSBhbmltYWwgaXM6XG4gIDx1bD5cbiAgICA8bGk+XG4gICAgICA8c3BhbiAqbmdJZj1cImRhdGEuYW5pbWFsID09PSAncGFuZGEnXCI+JiMxMDAwMzs8L3NwYW4+IFBhbmRhXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8c3BhbiAqbmdJZj1cImRhdGEuYW5pbWFsID09PSAndW5pY29ybidcIj4mIzEwMDAzOzwvc3Bhbj4gVW5pY29yblxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhLmFuaW1hbCA9PT0gJ2xpb24nXCI+JiMxMDAwMzs8L3NwYW4+IExpb25cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9kaXY+XG4iXX0=