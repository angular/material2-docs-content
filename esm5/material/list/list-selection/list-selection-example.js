import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
var _c0 = ["shoes", ""];
function ListSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var shoe_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", shoe_r6, " ");
} }
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
                    styleUrls: ['list-selection-example.css'],
                    templateUrl: 'list-selection-example.html',
                },] },
    ];
    ListSelectionExample.ɵfac = function ListSelectionExample_Factory(t) { return new (t || ListSelectionExample)(); };
    ListSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSelectionExample, selectors: [["list-selection-example"]], decls: 5, vars: 2, consts: [[4, "ngFor", "ngForOf"]], template: function ListSelectionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-selection-list", null, _c0);
            i0.ɵɵtemplate(2, ListSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r4 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.typesOfShoes);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Options selected: ", _r4.selectedOptions.selected.length, "\n");
        } }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
    return ListSelectionExample;
}());
export { ListSelectionExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(ListSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-selection-example',
                styleUrls: ['list-selection-example.css'],
                templateUrl: 'list-selection-example.html',
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0N0Qyx1Q0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBa0I7OztJQURoQixlQUNGO0lBREUsd0NBQ0Y7O0FEREY7O0dBRUc7QUFDSDtJQUFBO1FBTUUsaUJBQVksR0FBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNqRjs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUN6QyxXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzs7NEZBQ1ksb0JBQW9COzZEQUFwQixvQkFBb0I7WUNWakMscURBQ0U7WUFBQSw2RkFDRTtZQUVKLGlCQUFxQjtZQUVyQix5QkFDRTtZQUFBLFlBQ0Y7WUFBQSxpQkFBSTs7O1lBUGUsZUFBaUM7WUFBakMsMENBQWlDO1lBTWxELGVBQ0Y7WUFERSx1RkFDRjs7K0JEUkE7Q0FZQyxBQVBELElBT0M7U0FGWSxvQkFBb0I7bUNBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNlbGVjdGlvbi1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZWxlY3Rpb25FeGFtcGxlIHtcbiAgdHlwZXNPZlNob2VzOiBzdHJpbmdbXSA9IFsnQm9vdHMnLCAnQ2xvZ3MnLCAnTG9hZmVycycsICdNb2NjYXNpbnMnLCAnU25lYWtlcnMnXTtcbn1cbiIsIjxtYXQtc2VsZWN0aW9uLWxpc3QgI3Nob2VzPlxuICA8bWF0LWxpc3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBzaG9lIG9mIHR5cGVzT2ZTaG9lc1wiPlxuICAgIHt7c2hvZX19XG4gIDwvbWF0LWxpc3Qtb3B0aW9uPlxuPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG5cbjxwPlxuICBPcHRpb25zIHNlbGVjdGVkOiB7e3Nob2VzLnNlbGVjdGVkT3B0aW9ucy5zZWxlY3RlZC5sZW5ndGh9fVxuPC9wPlxuIl19