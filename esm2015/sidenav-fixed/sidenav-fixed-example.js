/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
/**
 * \@title Fixed sidenav
 */
export class SidenavFixedExample {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
}
SidenavFixedExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-fixed-example',
                template: "<ng-container *ngIf=\"shouldRun\">\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n                 [fixedBottomGap]=\"options.value.bottom\">\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\n    </mat-sidenav>\n\n    <mat-sidenav-content [formGroup]=\"options\">\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"top\" placeholder=\"Top gap\">\n      </mat-form-field></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"bottom\" placeholder=\"Bottom gap\">\n      </mat-form-field></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
            }] }
];
/** @nocollapse */
SidenavFixedExample.ctorParameters = () => [
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    SidenavFixedExample.prototype.options;
    /** @type {?} */
    SidenavFixedExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1maXhlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3NpZGVuYXYtZml4ZWQvc2lkZW5hdi1maXhlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVF0RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRzlCLFlBQVksRUFBZTtRQVEzQixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBUGhHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLENBQUM7U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsNnFDQUF5Qzs7YUFFMUM7Ozs7WUFQTyxXQUFXOzs7O0lBU2pCLHNDQUFtQjs7SUFVbkIsd0NBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRml4ZWQgc2lkZW5hdiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1maXhlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWZpeGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWZpeGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZGaXhlZEV4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gZmIuZ3JvdXAoe1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgdG9wOiAwXG4gICAgfSk7XG4gIH1cblxuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiJdfQ==