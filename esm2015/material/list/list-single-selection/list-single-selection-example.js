import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", shoe_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", shoe_r2, " ");
} }
/**
 * @title List with single selection
 */
export class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSingleSelectionExample.ɵfac = function ListSingleSelectionExample_Factory(t) { return new (t || ListSingleSelectionExample)(); };
ListSingleSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ListSingleSelectionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-selection-list", 0, 1);
        i0.ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 2, "mat-list-option", 2);
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
        i0.ɵɵtextInterpolate1(" Option selected: ", _r0.selectedOptions.selected[0] == null ? null : _r0.selectedOptions.selected[0].value, "\n");
    } }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListSingleSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-single-selection-example',
                styleUrls: ['list-single-selection-example.css'],
                templateUrl: 'list-single-selection-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDdEMsMENBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWtCOzs7SUFGaUMsK0JBQWM7SUFDL0QsZUFDRjtJQURFLHdDQUNGOztBRERGOztHQUVHO0FBTUgsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQU1FLGlCQUFZLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDakY7O29HQUZZLDBCQUEwQjsrREFBMUIsMEJBQTBCO1FDVnZDLGdEQUNFO1FBQUEsbUdBQ0U7UUFFSixpQkFBcUI7UUFFckIseUJBQ0U7UUFBQSxZQUNGO1FBQUEsaUJBQUk7OztRQVJ1QixnQ0FBa0I7UUFDMUIsZUFBaUM7UUFBakMsMENBQWlDO1FBTWxELGVBQ0Y7UUFERSx5SUFDRjs7a0RERWEsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsV0FBVyxFQUFFLG9DQUFvQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNpbmdsZSBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTaW5nbGVTZWxlY3Rpb25FeGFtcGxlIHtcbiAgdHlwZXNPZlNob2VzOiBzdHJpbmdbXSA9IFsnQm9vdHMnLCAnQ2xvZ3MnLCAnTG9hZmVycycsICdNb2NjYXNpbnMnLCAnU25lYWtlcnMnXTtcbn1cbiIsIjxtYXQtc2VsZWN0aW9uLWxpc3QgI3Nob2VzIFttdWx0aXBsZV09XCJmYWxzZVwiPlxuICA8bWF0LWxpc3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBzaG9lIG9mIHR5cGVzT2ZTaG9lc1wiIFt2YWx1ZV09XCJzaG9lXCI+XG4gICAge3tzaG9lfX1cbiAgPC9tYXQtbGlzdC1vcHRpb24+XG48L21hdC1zZWxlY3Rpb24tbGlzdD5cblxuPHA+XG4gIE9wdGlvbiBzZWxlY3RlZDoge3tzaG9lcy5zZWxlY3RlZE9wdGlvbnMuc2VsZWN0ZWRbMF0/LnZhbHVlfX1cbjwvcD5cbiJdfQ==