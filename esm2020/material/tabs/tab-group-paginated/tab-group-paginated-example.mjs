import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tabs";
/**
 * @title Tab group with paginated tabs
 */
export class TabGroupPaginatedExample {
    constructor() {
        this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
    }
}
TabGroupPaginatedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: TabGroupPaginatedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupPaginatedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: TabGroupPaginatedExample, selector: "tab-group-paginated-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i2.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: TabGroupPaginatedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-paginated-example', template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXBhZ2luYXRlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtcGFnaW5hdGVkL3RhYi1ncm91cC1wYWdpbmF0ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXBhZ2luYXRlZC90YWItZ3JvdXAtcGFnaW5hdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLHdCQUF3QjtJQUpyQztRQUtFLGVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3RFOzs0SEFGWSx3QkFBd0I7Z0hBQXhCLHdCQUF3QixtRUNUckMsa0hBRWdCO2tHRE9ILHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIHBhZ2luYXRlZCB0YWJzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1wYWdpbmF0ZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLXBhZ2luYXRlZC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cFBhZ2luYXRlZEV4YW1wbGUge1xuICBsb3RzT2ZUYWJzID0gbmV3IEFycmF5KDMwKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IGBUYWIgJHtpbmRleH1gKTtcbn1cbiIsIjxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiBbbGFiZWxdPVwidGFiXCIgKm5nRm9yPVwibGV0IHRhYiBvZiBsb3RzT2ZUYWJzXCI+Q29udGVudDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD4iXX0=