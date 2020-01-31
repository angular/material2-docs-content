import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var shoe_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", shoe_r9, " ");
} }
/**
 * @title List with single selection
 */
var ListSingleSelectionExample = /** @class */ (function () {
    function ListSingleSelectionExample() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListSingleSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-single-selection-example',
                    styleUrls: ['list-single-selection-example.css'],
                    templateUrl: 'list-single-selection-example.html',
                },] },
    ];
    ListSingleSelectionExample.ɵfac = function ListSingleSelectionExample_Factory(t) { return new (t || ListSingleSelectionExample)(); };
    ListSingleSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [4, "ngFor", "ngForOf"]], template: function ListSingleSelectionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-selection-list", 0, 1);
            i0.ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = i0.ɵɵreference(1);
            i0.ɵɵproperty("multiple", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.typesOfShoes);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Option selected: ", _r7.selectedOptions.selected, "\n");
        } }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
    return ListSingleSelectionExample;
}());
export { ListSingleSelectionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListSingleSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-single-selection-example',
                styleUrls: ['list-single-selection-example.css'],
                templateUrl: 'list-single-selection-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDdEMsdUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWtCOzs7SUFEaEIsZUFDRjtJQURFLHdDQUNGOztBRERGOztHQUVHO0FBQ0g7SUFBQTtRQU1FLGlCQUFZLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDakY7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztvQkFDaEQsV0FBVyxFQUFFLG9DQUFvQztpQkFDbEQ7O3dHQUNZLDBCQUEwQjttRUFBMUIsMEJBQTBCO1lDVnZDLGdEQUNFO1lBQUEsbUdBQ0U7WUFFSixpQkFBcUI7WUFFckIseUJBQ0U7WUFBQSxZQUNGO1lBQUEsaUJBQUk7OztZQVJ1QixnQ0FBa0I7WUFDMUIsZUFBaUM7WUFBakMsMENBQWlDO1lBTWxELGVBQ0Y7WUFERSwrRUFDRjs7cUNEUkE7Q0FZQyxBQVBELElBT0M7U0FGWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2hELFdBQVcsRUFBRSxvQ0FBb0M7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzaW5nbGUgc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZSB7XG4gIHR5cGVzT2ZTaG9lczogc3RyaW5nW10gPSBbJ0Jvb3RzJywgJ0Nsb2dzJywgJ0xvYWZlcnMnLCAnTW9jY2FzaW5zJywgJ1NuZWFrZXJzJ107XG59XG4iLCI8bWF0LXNlbGVjdGlvbi1saXN0ICNzaG9lcyBbbXVsdGlwbGVdPVwiZmFsc2VcIj5cbiAgPG1hdC1saXN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2hvZSBvZiB0eXBlc09mU2hvZXNcIj5cbiAgICB7e3Nob2V9fVxuICA8L21hdC1saXN0LW9wdGlvbj5cbjwvbWF0LXNlbGVjdGlvbi1saXN0PlxuXG48cD5cbiAgT3B0aW9uIHNlbGVjdGVkOiB7e3Nob2VzLnNlbGVjdGVkT3B0aW9ucy5zZWxlY3RlZH19XG48L3A+XG4iXX0=