import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with paginated tabs
 */
class TabGroupPaginatedExample {
    constructor() {
        this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupPaginatedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TabGroupPaginatedExample, isStandalone: true, selector: "tab-group-paginated-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
export { TabGroupPaginatedExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupPaginatedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-paginated-example', standalone: true, imports: [MatTabsModule, NgFor], template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXBhZ2luYXRlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtcGFnaW5hdGVkL3RhYi1ncm91cC1wYWdpbmF0ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXBhZ2luYXRlZC90YWItZ3JvdXAtcGFnaW5hdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQUNILE1BTWEsd0JBQXdCO0lBTnJDO1FBT0UsZUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDdEU7OEdBRlksd0JBQXdCO2tHQUF4Qix3QkFBd0IsdUZDYnJDLGtIQUVnQiwyQ0RTSixhQUFhLHlUQUFFLEtBQUs7O1NBRW5CLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQU5wQyxTQUFTOytCQUNFLDZCQUE2QixjQUUzQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIHBhZ2luYXRlZCB0YWJzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1wYWdpbmF0ZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLXBhZ2luYXRlZC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VGFic01vZHVsZSwgTmdGb3JdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cFBhZ2luYXRlZEV4YW1wbGUge1xuICBsb3RzT2ZUYWJzID0gbmV3IEFycmF5KDMwKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IGBUYWIgJHtpbmRleH1gKTtcbn1cbiIsIjxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiBbbGFiZWxdPVwidGFiXCIgKm5nRm9yPVwibGV0IHRhYiBvZiBsb3RzT2ZUYWJzXCI+Q29udGVudDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD4iXX0=