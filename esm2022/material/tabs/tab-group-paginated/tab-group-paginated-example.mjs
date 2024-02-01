import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with paginated tabs
 */
export class TabGroupPaginatedExample {
    constructor() {
        this.lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TabGroupPaginatedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: TabGroupPaginatedExample, isStandalone: true, selector: "tab-group-paginated-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TabGroupPaginatedExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-paginated-example', standalone: true, imports: [MatTabsModule, NgFor], template: "<mat-tab-group>\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of lotsOfTabs\">Content</mat-tab>\n</mat-tab-group>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXBhZ2luYXRlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtcGFnaW5hdGVkL3RhYi1ncm91cC1wYWdpbmF0ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXBhZ2luYXRlZC90YWItZ3JvdXAtcGFnaW5hdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQU9ILE1BQU0sT0FBTyx3QkFBd0I7SUFOckM7UUFPRSxlQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQztLQUN0RTs4R0FGWSx3QkFBd0I7a0dBQXhCLHdCQUF3Qix1RkNickMsa0hBRWdCLDJDRFNKLGFBQWEseVRBQUUsS0FBSzs7MkZBRW5CLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSw2QkFBNkIsY0FFM0IsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBwYWdpbmF0ZWQgdGFic1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtcGFnaW5hdGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1wYWdpbmF0ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRhYnNNb2R1bGUsIE5nRm9yXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBQYWdpbmF0ZWRFeGFtcGxlIHtcbiAgbG90c09mVGFicyA9IG5ldyBBcnJheSgzMCkuZmlsbCgwKS5tYXAoKF8sIGluZGV4KSA9PiBgVGFiICR7aW5kZXh9YCk7XG59XG4iLCI8bWF0LXRhYi1ncm91cD5cbiAgPG1hdC10YWIgW2xhYmVsXT1cInRhYlwiICpuZ0Zvcj1cImxldCB0YWIgb2YgbG90c09mVGFic1wiPkNvbnRlbnQ8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+Il19