import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
/**
 * @title Testing with MatBottomSheetHarness
 */
export class BottomSheetHarnessExample {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
}
BottomSheetHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: BottomSheetHarnessExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component });
BottomSheetHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: BottomSheetHarnessExample, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatBottomSheet }]; }, propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtaGFybmVzcy9ib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1oYXJuZXNzL2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBdUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRXBGOztHQUVHO0FBS0gsTUFBTSxPQUFPLHlCQUF5QjtJQUdwQyxZQUFxQixXQUEyQjtRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7SUFBRyxDQUFDO0lBRXBELElBQUksQ0FBQyxNQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7c0hBUFUseUJBQXlCOzBHQUF6Qix5QkFBeUIsOEdBQ3pCLFdBQVcsZ0RDWHhCLGlFQUdBOzJGRE9hLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSw4QkFBOEI7cUdBSWhCLFFBQVE7c0JBQS9CLFNBQVM7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0Q29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0Qm90dG9tU2hlZXRIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0SGFybmVzc0V4YW1wbGUge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHt9XG5cbiAgb3Blbihjb25maWc/OiBNYXRCb3R0b21TaGVldENvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4odGhpcy50ZW1wbGF0ZSwgY29uZmlnKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPlxuICBIZWxsbyBmcm9tIHRoZSBib3R0b20gc2hlZXQhXG48L25nLXRlbXBsYXRlPlxuIl19