import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tabs";
/**
 * @title Tab group with paginated tabs
 */
class TabGroupPaginatedExample {
    constructor() {
        this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupPaginatedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TabGroupPaginatedExample, selector: "tab-group-paginated-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i2.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
export { TabGroupPaginatedExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupPaginatedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-paginated-example', template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXBhZ2luYXRlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtcGFnaW5hdGVkL3RhYi1ncm91cC1wYWdpbmF0ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXBhZ2luYXRlZC90YWItZ3JvdXAtcGFnaW5hdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFJYSx3QkFBd0I7SUFKckM7UUFLRSxlQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQztLQUN0RTs4R0FGWSx3QkFBd0I7a0dBQXhCLHdCQUF3QixtRUNUckMsa0hBRWdCOztTRE9ILHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUpwQyxTQUFTOytCQUNFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggcGFnaW5hdGVkIHRhYnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLXBhZ2luYXRlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtcGFnaW5hdGVkLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwUGFnaW5hdGVkRXhhbXBsZSB7XG4gIGxvdHNPZlRhYnMgPSBuZXcgQXJyYXkoMzApLmZpbGwoMCkubWFwKChfLCBpbmRleCkgPT4gYFRhYiAke2luZGV4fWApO1xufVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiIFtsYWJlbF09XCJ0YWJcIiAqbmdGb3I9XCJsZXQgdGFiIG9mIGxvdHNPZlRhYnNcIj5Db250ZW50PC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPiJdfQ==