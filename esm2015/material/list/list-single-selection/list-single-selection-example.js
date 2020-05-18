/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/list/list-single-selection/list-single-selection-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", shoe_r2, " ");
} }
/**
 * \@title List with single selection
 */
let ListSingleSelectionExample = /** @class */ (() => {
    /**
     * \@title List with single selection
     */
    class ListSingleSelectionExample {
        constructor() {
            this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        }
    }
    ListSingleSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-single-selection-example',
                    styleUrls: ['list-single-selection-example.css'],
                    templateUrl: 'list-single-selection-example.html',
                },] },
    ];
    /** @nocollapse */ ListSingleSelectionExample.ɵfac = function ListSingleSelectionExample_Factory(t) { return new (t || ListSingleSelectionExample)(); };
    /** @nocollapse */ ListSingleSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [4, "ngFor", "ngForOf"]], template: function ListSingleSelectionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-selection-list", 0, 1);
            i0.ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵproperty("multiple", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.typesOfShoes);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Option selected: ", _r0.selectedOptions.selected, "\n");
        } }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
    return ListSingleSelectionExample;
})();
export { ListSingleSelectionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListSingleSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-single-selection-example',
                styleUrls: ['list-single-selection-example.css'],
                templateUrl: 'list-single-selection-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ListSingleSelectionExample.prototype.typesOfShoes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0N0Qyx1Q0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBa0I7OztJQURoQixlQUNGO0lBREUsd0NBQ0Y7Ozs7O0FERUY7Ozs7SUFBQSxNQUthLDBCQUEwQjtRQUx2QztZQU1FLGlCQUFZLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDakY7OztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7b0JBQ2hELFdBQVcsRUFBRSxvQ0FBb0M7aUJBQ2xEOzsySEFDWSwwQkFBMEI7c0ZBQTFCLDBCQUEwQjtZQ1Z2QyxnREFDRTtZQUFBLG1HQUNFO1lBRUosaUJBQXFCO1lBRXJCLHlCQUNFO1lBQUEsWUFDRjtZQUFBLGlCQUFJOzs7WUFSdUIsZ0NBQWtCO1lBQzFCLGVBQWlDO1lBQWpDLDBDQUFpQztZQU1sRCxlQUNGO1lBREUsK0VBQ0Y7O3FDRFJBO0tBWUM7U0FGWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2hELFdBQVcsRUFBRSxvQ0FBb0M7YUFDbEQ7Ozs7SUFFQyxrREFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzaW5nbGUgc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZSB7XG4gIHR5cGVzT2ZTaG9lczogc3RyaW5nW10gPSBbJ0Jvb3RzJywgJ0Nsb2dzJywgJ0xvYWZlcnMnLCAnTW9jY2FzaW5zJywgJ1NuZWFrZXJzJ107XG59XG4iLCI8bWF0LXNlbGVjdGlvbi1saXN0ICNzaG9lcyBbbXVsdGlwbGVdPVwiZmFsc2VcIj5cbiAgPG1hdC1saXN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2hvZSBvZiB0eXBlc09mU2hvZXNcIj5cbiAgICB7e3Nob2V9fVxuICA8L21hdC1saXN0LW9wdGlvbj5cbjwvbWF0LXNlbGVjdGlvbi1saXN0PlxuXG48cD5cbiAgT3B0aW9uIHNlbGVjdGVkOiB7e3Nob2VzLnNlbGVjdGVkT3B0aW9ucy5zZWxlY3RlZH19XG48L3A+XG4iXX0=