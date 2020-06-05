import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
function TabGroupLazyLoadedExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 1 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r0.getTimeLoaded(1), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 2 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r1.getTimeLoaded(2), "medium"), " ");
} }
function TabGroupLazyLoadedExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Content 3 - Loaded: ", i0.ɵɵpipeBind2(1, 1, ctx_r2.getTimeLoaded(3), "medium"), " ");
} }
/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
let TabGroupLazyLoadedExample = /** @class */ (() => {
    class TabGroupLazyLoadedExample {
        constructor() {
            this.tabLoadTimes = [];
        }
        getTimeLoaded(index) {
            if (!this.tabLoadTimes[index]) {
                this.tabLoadTimes[index] = new Date();
            }
            return this.tabLoadTimes[index];
        }
    }
    TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
    TabGroupLazyLoadedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab-group");
            i0.ɵɵelementStart(1, "mat-tab", 0);
            i0.ɵɵtemplate(2, TabGroupLazyLoadedExample_ng_template_2_Template, 2, 4, "ng-template", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-tab", 2);
            i0.ɵɵtemplate(4, TabGroupLazyLoadedExample_ng_template_4_Template, 2, 4, "ng-template", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-tab", 3);
            i0.ɵɵtemplate(6, TabGroupLazyLoadedExample_ng_template_6_Template, 2, 4, "ng-template", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatTabGroup, i1.MatTab, i1.MatTabContent], pipes: [i2.DatePipe], styles: [""] });
    return TabGroupLazyLoadedExample;
})();
export { TabGroupLazyLoadedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNJbEMsWUFDRjs7OztJQURFLDRHQUNGOzs7SUFLRSxZQUNGOzs7O0lBREUsNEdBQ0Y7OztJQUlFLFlBQ0Y7Ozs7SUFERSw0R0FDRjs7QURkSjs7R0FFRztBQUNIO0lBQUEsTUFLYSx5QkFBeUI7UUFMdEM7WUFNRSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztTQVMzQjtRQVBDLGFBQWEsQ0FBQyxLQUFhO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7YUFDdkM7WUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7c0dBVFUseUJBQXlCO2tFQUF6Qix5QkFBeUI7WUNWdEMscUNBQ0E7WUFDRSxrQ0FDRTtZQUFBLDBGQUNFO1lBRUosaUJBQVU7WUFFVixrQ0FDRTtZQUFBLDBGQUNFO1lBRUosaUJBQVU7WUFDVixrQ0FDRTtZQUFBLDBGQUNFO1lBRUosaUJBQVU7WUFDWixpQkFBZ0I7O29DRGxCaEI7S0FvQkM7U0FWWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aGVyZSB0aGUgdGFiIGNvbnRlbnQgaXMgbG9hZGVkIGxhemlseSAod2hlbiBhY3RpdmF0ZWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cExhenlMb2FkZWRFeGFtcGxlIHtcbiAgdGFiTG9hZFRpbWVzOiBEYXRlW10gPSBbXTtcblxuICBnZXRUaW1lTG9hZGVkKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSkge1xuICAgICAgdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdO1xuICB9XG59XG4iLCI8bWF0LXRhYi1ncm91cD5cbjwhLS0gI2RvY3JlZ2lvbiBtYXQtdGFiLWNvbnRlbnQgLS0+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgIENvbnRlbnQgMSAtIExvYWRlZDoge3tnZXRUaW1lTG9hZGVkKDEpIHwgZGF0ZTonbWVkaXVtJ319XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtdGFiPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC10YWItY29udGVudCAtLT5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgIENvbnRlbnQgMiAtIExvYWRlZDoge3tnZXRUaW1lTG9hZGVkKDIpIHwgZGF0ZTonbWVkaXVtJ319XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDMgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgzKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==