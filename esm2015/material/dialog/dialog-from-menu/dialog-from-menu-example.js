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
DialogFromMenuExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogFromMenuExample, selectors: [["dialog-from-menu-example"]], viewQuery: function DialogFromMenuExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
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
        args: [{ selector: 'dialog-from-menu-example', template: "<button mat-button [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n" }]
    }], function () { return [{ type: i1.MatDialog }]; }, { menuTrigger: [{
            type: ViewChild,
            args: ['menuTrigger']
        }] }); })();
export class DialogFromMenuExampleDialog {
}
DialogFromMenuExampleDialog.ɵfac = function DialogFromMenuExampleDialog_Factory(t) { return new (t || DialogFromMenuExampleDialog)(); };
DialogFromMenuExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogFromMenuExampleDialog, selectors: [["dialog-from-menu-dialog"]], decls: 5, vars: 0, consts: [["mat-button", "", "mat-dialog-close", ""]], template: function DialogFromMenuExampleDialog_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'dialog-from-menu-dialog', template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWZyb20tbWVudS9kaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBQ3REOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsK0JBQStCO1FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFFdkYsb0VBQW9FO1FBQ3BFLHdFQUF3RTtRQUN4RSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRSxrQ0FBa0M7SUFDcEMsQ0FBQzs7MEZBYlUscUJBQXFCO3dFQUFyQixxQkFBcUI7Ozs7OztRQ1ZsQyxvQ0FBMkQ7UUFBQSxvQkFBSTtRQUFBLGlCQUFTO1FBQ3hFLHlDQUEwQjtRQUN4QixpQ0FBNkM7UUFBdkIsa0dBQVMsZ0JBQVksSUFBQztRQUFDLDJCQUFXO1FBQUEsaUJBQVM7UUFDbkUsaUJBQVc7OztRQUhRLHVDQUEwQjs7dUZEVWhDLHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNFLDBCQUEwQjs0REFJVixXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWE7O0FBbUIxQixNQUFNLE9BQU8sMkJBQTJCOztzR0FBM0IsMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUU5QnhDLDBDQUFvQjtRQUNsQixtQ0FDRjtRQUFBLGlCQUFxQjtRQUNyQiwwQ0FBb0I7UUFDbEIsaUNBQW9DO1FBQUEsb0JBQUk7UUFBQSxpQkFBUztRQUNuRCxpQkFBcUI7O3VGRnlCUiwyQkFBMkI7Y0FKdkMsU0FBUzsyQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRNZW51VHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgbGF1bmNoZWQgZnJvbSBhIG1lbnVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWZyb20tbWVudS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0Zyb21NZW51RXhhbXBsZSB7XG4gIEBWaWV3Q2hpbGQoJ21lbnVUcmlnZ2VyJykgbWVudVRyaWdnZXI6IE1hdE1lbnVUcmlnZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIC8vICNkb2NyZWdpb24gZm9jdXMtcmVzdG9yYXRpb25cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZywge3Jlc3RvcmVGb2N1czogZmFsc2V9KTtcblxuICAgIC8vIE1hbnVhbGx5IHJlc3RvcmUgZm9jdXMgdG8gdGhlIG1lbnUgdHJpZ2dlciBzaW5jZSB0aGUgZWxlbWVudCB0aGF0XG4gICAgLy8gb3BlbnMgdGhlIGRpYWxvZyB3b24ndCBiZSBpbiB0aGUgRE9NIGFueSBtb3JlIHdoZW4gdGhlIGRpYWxvZyBjbG9zZXMuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMubWVudVRyaWdnZXIuZm9jdXMoKSk7XG4gICAgLy8gI2VuZGRvY3JlZ2lvbiBmb2N1cy1yZXN0b3JhdGlvblxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1mcm9tLW1lbnUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2cge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiICNtZW51VHJpZ2dlcj5NZW51PC9idXR0b24+XG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+T3BlbiBkaWFsb2c8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG4iLCI8bWF0LWRpYWxvZy1jb250ZW50PlxuICBUaGlzIGlzIGEgZGlhbG9nXG48L21hdC1kaWFsb2ctY29udGVudD5cbjxtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPk9rYXk8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuIl19