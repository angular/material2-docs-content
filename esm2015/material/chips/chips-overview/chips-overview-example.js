import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Basic chips
 */
export class ChipsOverviewExample {
}
ChipsOverviewExample.ɵfac = function ChipsOverviewExample_Factory(t) { return new (t || ChipsOverviewExample)(); };
ChipsOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsOverviewExample, selectors: [["chips-overview-example"]], decls: 9, vars: 0, consts: [["aria-label", "Fish selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function ChipsOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵelementStart(1, "mat-chip");
        i0.ɵɵtext(2, "One fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip");
        i0.ɵɵtext(4, "Two fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-chip", 1);
        i0.ɵɵtext(6, "Primary fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-chip", 2);
        i0.ɵɵtext(8, "Accent fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatChipList, i1.MatChip], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsOverviewExample, [{
        type: Component,
        args: [{
                selector: 'chips-overview-example',
                templateUrl: 'chips-overview-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLW92ZXJ2aWV3L2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1vdmVydmlldy9jaGlwcy1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDVGpDLHdDQUNFO1FBQUEsZ0NBQVU7UUFBQSx3QkFBUTtRQUFBLGlCQUFXO1FBQzdCLGdDQUFVO1FBQUEsd0JBQVE7UUFBQSxpQkFBVztRQUM3QixtQ0FBbUM7UUFBQSw0QkFBWTtRQUFBLGlCQUFXO1FBQzFELG1DQUFrQztRQUFBLDJCQUFXO1FBQUEsaUJBQVc7UUFDMUQsaUJBQWdCOzt1RkRJSCxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGNoaXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LWNoaXAtbGlzdCBhcmlhLWxhYmVsPVwiRmlzaCBzZWxlY3Rpb25cIj5cbiAgPG1hdC1jaGlwPk9uZSBmaXNoPC9tYXQtY2hpcD5cbiAgPG1hdC1jaGlwPlR3byBmaXNoPC9tYXQtY2hpcD5cbiAgPG1hdC1jaGlwIGNvbG9yPVwicHJpbWFyeVwiIHNlbGVjdGVkPlByaW1hcnkgZmlzaDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCBjb2xvcj1cImFjY2VudFwiIHNlbGVjdGVkPkFjY2VudCBmaXNoPC9tYXQtY2hpcD5cbjwvbWF0LWNoaXAtbGlzdD5cbiJdfQ==