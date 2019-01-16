/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * \@title Tab group with dynamically changing tabs
 */
export class TabGroupDynamicExample {
    constructor() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new FormControl(0);
    }
    /**
     * @param {?} selectAfterAdding
     * @return {?}
     */
    addTab(selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
}
TabGroupDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-dynamic-example',
                template: "<div>\n  <span class=\"example-input-label\"> Selected tab index: </span>\n  <mat-form-field>\n    <input matInput type=\"number\" [formControl]=\"selected\">\n  </mat-form-field>\n</div>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TabGroupDynamicExample.prototype.tabs;
    /** @type {?} */
    TabGroupDynamicExample.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90YWItZ3JvdXAtZHluYW1pYy90YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVUzQyxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFhaEMsQ0FBQzs7Ozs7SUFYQyxNQUFNLENBQUMsaUJBQTBCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLHU1QkFBNkM7O2FBRTlDOzs7O0lBRUMsc0NBQW9DOztJQUNwQywwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGR5bmFtaWNhbGx5IGNoYW5naW5nIHRhYnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwRHluYW1pY0V4YW1wbGUge1xuICB0YWJzID0gWydGaXJzdCcsICdTZWNvbmQnLCAnVGhpcmQnXTtcbiAgc2VsZWN0ZWQgPSBuZXcgRm9ybUNvbnRyb2woMCk7XG5cbiAgYWRkVGFiKHNlbGVjdEFmdGVyQWRkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy50YWJzLnB1c2goJ05ldycpO1xuXG4gICAgaWYgKHNlbGVjdEFmdGVyQWRkaW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNldFZhbHVlKHRoaXMudGFicy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iXX0=