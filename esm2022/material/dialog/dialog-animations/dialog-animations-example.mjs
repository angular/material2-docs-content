import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog Animations
 */
class DialogAnimationsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(enterAnimationDuration, exitAnimationDuration) {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogAnimationsExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DialogAnimationsExample, selector: "dialog-animations-example", ngImport: i0, template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
export { DialogAnimationsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example', template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
class DialogAnimationsExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogAnimationsExampleDialog, deps: [{ token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DialogAnimationsExampleDialog, selector: "dialog-animations-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Delete file</h1>\n<div mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</div>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] }); }
}
export { DialogAnimationsExampleDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogAnimationsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example-dialog', template: "<h1 mat-dialog-title>Delete file</h1>\n<div mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1hbmltYXRpb25zL2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVqRTs7R0FFRztBQUNILE1BS2EsdUJBQXVCO0lBQ2xDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLFVBQVUsQ0FBQyxzQkFBOEIsRUFBRSxxQkFBNkI7UUFDdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUU7WUFDOUMsS0FBSyxFQUFFLE9BQU87WUFDZCxzQkFBc0I7WUFDdEIscUJBQXFCO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBVFUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsaUVDWHBDLDJNQUVBOztTRFNhLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDJCQUEyQjs7QUFnQnZDLE1BSWEsNkJBQTZCO0lBQ3hDLFlBQW1CLFNBQXNEO1FBQXRELGNBQVMsR0FBVCxTQUFTLENBQTZDO0lBQUcsQ0FBQzs4R0FEbEUsNkJBQTZCO2tHQUE3Qiw2QkFBNkIsd0VFM0IxQyx5UUFRQTs7U0ZtQmEsNkJBQTZCOzJGQUE3Qiw2QkFBNkI7a0JBSnpDLFNBQVM7K0JBQ0Usa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIEFuaW1hdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coZW50ZXJBbmltYXRpb25EdXJhdGlvbjogc3RyaW5nLCBleGl0QW5pbWF0aW9uRHVyYXRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZW50ZXJBbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGV4aXRBbmltYXRpb25EdXJhdGlvbixcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlRGlhbG9nPikge31cbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coJzBtcycsICcwbXMnKVwiPk9wZW4gZGlhbG9nIHdpdGhvdXQgYW5pbWF0aW9uPC9idXR0b24+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKCczMDAwbXMnLCAnMTUwMG1zJylcIj5PcGVuIGRpYWxvZyBzbG93bHk8L2J1dHRvbj5cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkRlbGV0ZSBmaWxlPC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICBXb3VsZCB5b3UgbGlrZSB0byBkZWxldGUgY2F0LmpwZWc/XG48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5ObzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZSBjZGtGb2N1c0luaXRpYWw+T2s8L2J1dHRvbj5cbjwvZGl2PlxuIl19