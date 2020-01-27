import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Basic chips
 */
var ChipsOverviewExample = /** @class */ (function () {
    function ChipsOverviewExample() {
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
        } }, directives: [i1.MatChipList, i1.MatChip], styles: [""] });
    return ChipsOverviewExample;
}());
export { ChipsOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChipsOverviewExample, [{
        type: Component,
        args: [{
                selector: 'chips-overview-example',
                templateUrl: 'chips-overview-example.html',
                styleUrls: ['chips-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLW92ZXJ2aWV3L2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1vdmVydmlldy9jaGlwcy1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtvQzs0RkFBdkIsb0JBQW9COzZEQUFwQixvQkFBb0I7WUNWakMsd0NBQ0U7WUFBQSxnQ0FBVTtZQUFBLHdCQUFRO1lBQUEsaUJBQVc7WUFDN0IsZ0NBQVU7WUFBQSx3QkFBUTtZQUFBLGlCQUFXO1lBQzdCLG1DQUFtQztZQUFBLDRCQUFZO1lBQUEsaUJBQVc7WUFDMUQsbUNBQWtDO1lBQUEsMkJBQVc7WUFBQSxpQkFBVztZQUMxRCxpQkFBZ0I7OytCRExoQjtDQVVvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGNoaXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc092ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1jaGlwLWxpc3QgYXJpYS1sYWJlbD1cIkZpc2ggc2VsZWN0aW9uXCI+XG4gIDxtYXQtY2hpcD5PbmUgZmlzaDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcD5Ud28gZmlzaDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCBjb2xvcj1cInByaW1hcnlcIiBzZWxlY3RlZD5QcmltYXJ5IGZpc2g8L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgY29sb3I9XCJhY2NlbnRcIiBzZWxlY3RlZD5BY2NlbnQgZmlzaDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLWxpc3Q+XG4iXX0=