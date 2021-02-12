import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
function SelectHarnessExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r1.viewValue, " ");
} }
/**
 * @title Testing with MatSelectHarness
 */
export class SelectHarnessExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
}
SelectHarnessExample.ɵfac = function SelectHarnessExample_Factory(t) { return new (t || SelectHarnessExample)(); };
SelectHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectHarnessExample, selectors: [["select-harness-example"]], decls: 5, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select");
        i0.ɵɵtemplate(4, SelectHarnessExample_mat_option_4_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.foods);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgForOf, i4.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectHarnessExample, [{
        type: Component,
        args: [{
                selector: 'select-harness-example',
                templateUrl: 'select-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGFybmVzcy9zZWxlY3QtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oYXJuZXNzL3NlbGVjdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDR3BDLHFDQUE0RDtJQUMxRCxZQUNGO0lBQUEsaUJBQWE7OztJQUYwQixxQ0FBb0I7SUFDekQsZUFDRjtJQURFLGtEQUNGOztBREhKOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQUtFLFVBQUssR0FBRztZQUNOLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7S0FDSDs7d0ZBTlksb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNUakMseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEsNkJBQWE7UUFBQSxpQkFBWTtRQUNwQyxrQ0FBWTtRQUNWLG1GQUVhO1FBQ2YsaUJBQWE7UUFDZixpQkFBaUI7O1FBSmdCLGVBQVE7UUFBUixtQ0FBUTs7dUZETTVCLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNlbGVjdEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SGFybmVzc0V4YW1wbGUge1xuICBmb29kcyA9IFtcbiAgICB7dmFsdWU6ICdzdGVhay0wJywgdmlld1ZhbHVlOiAnU3RlYWsnfSxcbiAgICB7dmFsdWU6ICdwaXp6YS0xJywgdmlld1ZhbHVlOiAnUGl6emEnfSxcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfVxuICBdO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+XG4gICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=