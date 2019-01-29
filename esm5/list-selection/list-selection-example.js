import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title List with selection
 */
var ListSelectionExample = /** @class */ (function () {
    function ListSelectionExample() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListSelectionExample = tslib_1.__decorate([
        Component({
            selector: 'list-selection-example',
            template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n",
            styles: ["/** No styles for this example. */\n"]
        })
    ], ListSelectionExample);
    return ListSelectionExample;
}());
export { ListSelectionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9saXN0LXNlbGVjdGlvbi9saXN0LXNlbGVjdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLGlCQUFZLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUZZLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBRWxDLHlPQUEwQzs7U0FDM0MsQ0FBQztPQUNXLG9CQUFvQixDQUVoQztJQUFELDJCQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VsZWN0aW9uRXhhbXBsZSB7XG4gIHR5cGVzT2ZTaG9lczogc3RyaW5nW10gPSBbJ0Jvb3RzJywgJ0Nsb2dzJywgJ0xvYWZlcnMnLCAnTW9jY2FzaW5zJywgJ1NuZWFrZXJzJ107XG59XG4iXX0=