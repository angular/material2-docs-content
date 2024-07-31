import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
/**
 * @title Testing with MatBottomSheetHarness
 */
export class BottomSheetHarnessExample {
    constructor() {
        this.bottomSheet = inject(MatBottomSheet);
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: BottomSheetHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: BottomSheetHarnessExample, isStandalone: true, selector: "bottom-sheet-harness-example", viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: BottomSheetHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-harness-example', standalone: true, imports: [MatBottomSheetModule], template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }]
        }], propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtaGFybmVzcy9ib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1oYXJuZXNzL2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxjQUFjLEVBRWQsb0JBQW9CLEdBQ3JCLE1BQU0sZ0NBQWdDLENBQUM7O0FBRXhDOztHQUVHO0FBT0gsTUFBTSxPQUFPLHlCQUF5QjtJQU50QztRQU9XLGdCQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBTy9DO0lBSEMsSUFBSSxDQUFDLE1BQTZCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO3FIQVBVLHlCQUF5Qjt5R0FBekIseUJBQXlCLGtJQUd6QixXQUFXLGdEQ25CeEIsaUVBR0EsMkNEV1ksb0JBQW9COztrR0FFbkIseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLDhCQUE4QixjQUU1QixJQUFJLFdBQ1AsQ0FBQyxvQkFBb0IsQ0FBQzs4QkFLUCxRQUFRO3NCQUEvQixTQUFTO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdEJvdHRvbVNoZWV0LFxuICBNYXRCb3R0b21TaGVldENvbmZpZyxcbiAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRCb3R0b21TaGVldEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJvdHRvbVNoZWV0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRIYXJuZXNzRXhhbXBsZSB7XG4gIHJlYWRvbmx5IGJvdHRvbVNoZWV0ID0gaW5qZWN0KE1hdEJvdHRvbVNoZWV0KTtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBvcGVuKGNvbmZpZz86IE1hdEJvdHRvbVNoZWV0Q29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tU2hlZXQub3Blbih0aGlzLnRlbXBsYXRlLCBjb25maWcpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+XG4gIEhlbGxvIGZyb20gdGhlIGJvdHRvbSBzaGVldCFcbjwvbmctdGVtcGxhdGU+XG4iXX0=