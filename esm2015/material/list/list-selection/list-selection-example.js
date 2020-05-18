/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/list/list-selection/list-selection-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
function ListSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", shoe_r2, " ");
} }
/**
 * \@title List with selection
 */
let ListSelectionExample = /** @class */ (() => {
    /**
     * \@title List with selection
     */
    class ListSelectionExample {
        constructor() {
            this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        }
    }
    ListSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-selection-example',
                    styleUrls: ['list-selection-example.css'],
                    templateUrl: 'list-selection-example.html',
                },] },
    ];
    /** @nocollapse */ ListSelectionExample.ɵfac = function ListSelectionExample_Factory(t) { return new (t || ListSelectionExample)(); };
    /** @nocollapse */ ListSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSelectionExample, selectors: [["list-selection-example"]], decls: 5, vars: 2, consts: [["shoes", ""], [4, "ngFor", "ngForOf"]], template: function ListSelectionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-selection-list", null, 0);
            i0.ɵɵtemplate(2, ListSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.typesOfShoes);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Options selected: ", _r0.selectedOptions.selected.length, "\n");
        } }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
    return ListSelectionExample;
})();
export { ListSelectionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-selection-example',
                styleUrls: ['list-selection-example.css'],
                templateUrl: 'list-selection-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ListSelectionExample.prototype.typesOfShoes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDdEMsdUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWtCOzs7SUFEaEIsZUFDRjtJQURFLHdDQUNGOzs7OztBREVGOzs7O0lBQUEsTUFLYSxvQkFBb0I7UUFMakM7WUFNRSxpQkFBWSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2pGOzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUN6QyxXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzs7K0dBQ1ksb0JBQW9CO2dGQUFwQixvQkFBb0I7WUNWakMsbURBQ0U7WUFBQSw2RkFDRTtZQUVKLGlCQUFxQjtZQUVyQix5QkFDRTtZQUFBLFlBQ0Y7WUFBQSxpQkFBSTs7O1lBUGUsZUFBaUM7WUFBakMsMENBQWlDO1lBTWxELGVBQ0Y7WUFERSx1RkFDRjs7K0JEUkE7S0FZQztTQUZZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsV0FBVyxFQUFFLDZCQUE2QjthQUMzQzs7OztJQUVDLDRDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB3aXRoIHNlbGVjdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlbGVjdGlvbkV4YW1wbGUge1xuICB0eXBlc09mU2hvZXM6IHN0cmluZ1tdID0gWydCb290cycsICdDbG9ncycsICdMb2FmZXJzJywgJ01vY2Nhc2lucycsICdTbmVha2VycyddO1xufVxuIiwiPG1hdC1zZWxlY3Rpb24tbGlzdCAjc2hvZXM+XG4gIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IHNob2Ugb2YgdHlwZXNPZlNob2VzXCI+XG4gICAge3tzaG9lfX1cbiAgPC9tYXQtbGlzdC1vcHRpb24+XG48L21hdC1zZWxlY3Rpb24tbGlzdD5cblxuPHA+XG4gIE9wdGlvbnMgc2VsZWN0ZWQ6IHt7c2hvZXMuc2VsZWN0ZWRPcHRpb25zLnNlbGVjdGVkLmxlbmd0aH19XG48L3A+XG4iXX0=