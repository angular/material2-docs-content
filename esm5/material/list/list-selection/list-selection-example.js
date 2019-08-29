import { Component } from '@angular/core';
/**
 * @title List with selection
 */
var ListSelectionExample = /** @class */ (function () {
    function ListSelectionExample() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-selection-example',
                    template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n",
                    styles: ["/** No styles for this example. */\n"]
                }] }
    ];
    return ListSelectionExample;
}());
export { ListSelectionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2VsZWN0aW9uL2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxpQkFBWSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUVsQyx5T0FBMEM7O2lCQUMzQzs7SUFHRCwyQkFBQztDQUFBLEFBUEQsSUFPQztTQUZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNlbGVjdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlbGVjdGlvbkV4YW1wbGUge1xuICB0eXBlc09mU2hvZXM6IHN0cmluZ1tdID0gWydCb290cycsICdDbG9ncycsICdMb2FmZXJzJywgJ01vY2Nhc2lucycsICdTbmVha2VycyddO1xufVxuIl19