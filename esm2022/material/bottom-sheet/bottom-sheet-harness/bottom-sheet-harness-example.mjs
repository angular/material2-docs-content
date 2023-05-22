import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
/**
 * @title Testing with MatBottomSheetHarness
 */
class BottomSheetHarnessExample {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BottomSheetHarnessExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: BottomSheetHarnessExample, isStandalone: true, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
export { BottomSheetHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', standalone: true, imports: [MatBottomSheetModule], template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatBottomSheet }]; }, propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtaGFybmVzcy9ib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1oYXJuZXNzL2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGNBQWMsRUFFZCxvQkFBb0IsR0FDckIsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFNYSx5QkFBeUI7SUFHcEMsWUFBcUIsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBQUcsQ0FBQztJQUVwRCxJQUFJLENBQUMsTUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OEdBUFUseUJBQXlCO2tHQUF6Qix5QkFBeUIsa0lBQ3pCLFdBQVcsZ0RDakJ4QixpRUFHQSwyQ0RXWSxvQkFBb0I7O1NBRW5CLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLDhCQUE4QixjQUU1QixJQUFJLFdBQ1AsQ0FBQyxvQkFBb0IsQ0FBQztxR0FHUCxRQUFRO3NCQUEvQixTQUFTO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRCb3R0b21TaGVldCxcbiAgTWF0Qm90dG9tU2hlZXRDb25maWcsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0Qm90dG9tU2hlZXRIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCb3R0b21TaGVldE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGUge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHt9XG5cbiAgb3Blbihjb25maWc/OiBNYXRCb3R0b21TaGVldENvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4odGhpcy50ZW1wbGF0ZSwgY29uZmlnKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPlxuICBIZWxsbyBmcm9tIHRoZSBib3R0b20gc2hlZXQhXG48L25nLXRlbXBsYXRlPlxuIl19