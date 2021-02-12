import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/menu";
const _c0 = ["menuTrigger"];
/**
 * @title Dialog launched from a menu
 */
export class DialogFromMenuExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        // #docregion focus-restoration
        const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });
        // Manually restore focus to the menu trigger since the element that
        // opens the dialog won't be in the DOM any more when the dialog closes.
        dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
        // #enddocregion focus-restoration
    }
}
DialogFromMenuExample.ɵfac = function DialogFromMenuExample_Factory(t) { return new (t || DialogFromMenuExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogFromMenuExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogFromMenuExample, selectors: [["dialog-from-menu-example"]], viewQuery: function DialogFromMenuExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuTrigger = _t.first);
    } }, decls: 7, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menuTrigger", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function DialogFromMenuExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵtext(2, "Menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-menu", null, 2);
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵlistener("click", function DialogFromMenuExample_Template_button_click_5_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(6, "Open dialog");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r1);
    } }, directives: [i2.MatButton, i3.MatMenuTrigger, i3.MatMenu, i3.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogFromMenuExample, [{
        type: Component,
        args: [{
                selector: 'dialog-from-menu-example',
                templateUrl: 'dialog-from-menu-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, { menuTrigger: [{
            type: ViewChild,
            args: ['menuTrigger']
        }] }); })();
export class DialogFromMenuExampleDialog {
}
DialogFromMenuExampleDialog.ɵfac = function DialogFromMenuExampleDialog_Factory(t) { return new (t || DialogFromMenuExampleDialog)(); };
DialogFromMenuExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogFromMenuExampleDialog, selectors: [["dialog-from-menu-dialog"]], decls: 5, vars: 0, consts: [["mat-button", "", "mat-dialog-close", ""]], template: function DialogFromMenuExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content");
        i0.ɵɵtext(1, " This is a dialog\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-actions");
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵtext(4, "Okay");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogFromMenuExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-from-menu-dialog',
                templateUrl: 'dialog-from-menu-example-dialog.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWZyb20tbWVudS9kaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBQ3REOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsK0JBQStCO1FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFFdkYsb0VBQW9FO1FBQ3BFLHdFQUF3RTtRQUN4RSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRSxrQ0FBa0M7SUFDcEMsQ0FBQzs7MEZBYlUscUJBQXFCOzBEQUFyQixxQkFBcUI7Ozs7OztRQ1ZsQyxvQ0FBMkQ7UUFBQSxvQkFBSTtRQUFBLGlCQUFTO1FBQ3hFLHlDQUEwQjtRQUN4QixpQ0FBNkM7UUFBdkIsa0dBQVMsZ0JBQVksSUFBQztRQUFDLDJCQUFXO1FBQUEsaUJBQVM7UUFDbkUsaUJBQVc7OztRQUhRLHVDQUEwQjs7dUZEVWhDLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjthQUM3Qzs0REFFMkIsV0FBVztrQkFBcEMsU0FBUzttQkFBQyxhQUFhOztBQW1CMUIsTUFBTSxPQUFPLDJCQUEyQjs7c0dBQTNCLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FFOUJ4QywwQ0FBb0I7UUFDbEIsbUNBQ0Y7UUFBQSxpQkFBcUI7UUFDckIsMENBQW9CO1FBQ2xCLGlDQUFvQztRQUFBLG9CQUFJO1FBQUEsaUJBQVM7UUFDbkQsaUJBQXFCOzt1RkZ5QlIsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsc0NBQXNDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0TWVudVRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIGxhdW5jaGVkIGZyb20gYSBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dGcm9tTWVudUV4YW1wbGUge1xuICBAVmlld0NoaWxkKCdtZW51VHJpZ2dlcicpIG1lbnVUcmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICAvLyAjZG9jcmVnaW9uIGZvY3VzLXJlc3RvcmF0aW9uXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2csIHtyZXN0b3JlRm9jdXM6IGZhbHNlfSk7XG5cbiAgICAvLyBNYW51YWxseSByZXN0b3JlIGZvY3VzIHRvIHRoZSBtZW51IHRyaWdnZXIgc2luY2UgdGhlIGVsZW1lbnQgdGhhdFxuICAgIC8vIG9wZW5zIHRoZSBkaWFsb2cgd29uJ3QgYmUgaW4gdGhlIERPTSBhbnkgbW9yZSB3aGVuIHRoZSBkaWFsb2cgY2xvc2VzLlxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1lbnVUcmlnZ2VyLmZvY3VzKCkpO1xuICAgIC8vICNlbmRkb2NyZWdpb24gZm9jdXMtcmVzdG9yYXRpb25cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZnJvbS1tZW51LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiAjbWVudVRyaWdnZXI+TWVudTwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG48L21hdC1tZW51PlxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cbiAgVGhpcyBpcyBhIGRpYWxvZ1xuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5Pa2F5PC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==