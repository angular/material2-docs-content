/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
/**
 * \@title Sidenav with custom escape and backdrop click behavior
 */
export class SidenavDisableCloseExample {
    constructor() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    close(reason) {
        this.reason = reason;
        this.sidenav.close();
    }
}
SidenavDisableCloseExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-disable-close-example',
                template: "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
            }] }
];
SidenavDisableCloseExample.propDecorators = {
    sidenav: [{ type: ViewChild, args: ['sidenav',] }]
};
if (false) {
    /** @type {?} */
    SidenavDisableCloseExample.prototype.sidenav;
    /** @type {?} */
    SidenavDisableCloseExample.prototype.reason;
    /** @type {?} */
    SidenavDisableCloseExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2lkZW5hdi1kaXNhYmxlLWNsb3NlL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFRckQsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQVFFLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFPWixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7O0lBTkMsS0FBSyxDQUFDLE1BQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsd2pCQUFpRDs7YUFFbEQ7OztzQkFFRSxTQUFTLFNBQUMsU0FBUzs7OztJQUFwQiw2Q0FBMEM7O0lBRTFDLDRDQUFZOztJQU9aLCtDQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTaWRlbmF2fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuLyoqIEB0aXRsZSBTaWRlbmF2IHdpdGggY3VzdG9tIGVzY2FwZSBhbmQgYmFja2Ryb3AgY2xpY2sgYmVoYXZpb3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2RGlzYWJsZUNsb3NlRXhhbXBsZSB7XG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnKSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuXG4gIHJlYXNvbiA9ICcnO1xuXG4gIGNsb3NlKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gIH1cblxuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiJdfQ==