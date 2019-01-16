/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title List with selection
 */
export class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'list-selection-example',
                template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n",
                styles: ["/** No styles for this example. */\n"]
            }] }
];
if (false) {
    /** @type {?} */
    ListSelectionExample.prototype.typesOfShoes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9saXN0LXNlbGVjdGlvbi9saXN0LXNlbGVjdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFNRSxpQkFBWSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUVsQyx5T0FBMEM7O2FBQzNDOzs7O0lBRUMsNENBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VsZWN0aW9uRXhhbXBsZSB7XG4gIHR5cGVzT2ZTaG9lczogc3RyaW5nW10gPSBbJ0Jvb3RzJywgJ0Nsb2dzJywgJ0xvYWZlcnMnLCAnTW9jY2FzaW5zJywgJ1NuZWFrZXJzJ107XG59XG4iXX0=