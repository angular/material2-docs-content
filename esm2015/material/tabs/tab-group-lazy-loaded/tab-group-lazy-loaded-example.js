/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tabs/tab-group-lazy-loaded/tab-group-lazy-loaded-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * \@title Tab group where the tab content is loaded lazily (when activated)
 */
export class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            },] },
];
/** @nocollapse */ TabGroupLazyLoadedExample.ɵfac = function TabGroupLazyLoadedExample_Factory(t) { return new (t || TabGroupLazyLoadedExample)(); };
/** @nocollapse */ TabGroupLazyLoadedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupLazyLoadedExample, selectors: [["tab-group-lazy-loaded-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["matTabContent", ""], ["label", "Second"], ["label", "Third"]], template: function TabGroupLazyLoadedExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupLazyLoadedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-lazy-loaded-example',
                templateUrl: 'tab-group-lazy-loaded-example.html',
                styleUrls: ['tab-group-lazy-loaded-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TabGroupLazyLoadedExample.prototype.tabLoadTimes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0dsQyxZQUNGOzs7O0lBREUsNEdBQ0Y7OztJQUlFLFlBQ0Y7Ozs7SUFERSw0R0FDRjs7O0lBSUUsWUFDRjs7OztJQURFLDRHQUNGOzs7OztBREpKLE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFNRSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztLQVMzQjs7Ozs7SUFQQyxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOztxSEFDWSx5QkFBeUI7aUZBQXpCLHlCQUF5QjtRQ1Z0QyxxQ0FDRTtRQUFBLGtDQUNFO1FBQUEsMEZBQ0U7UUFFSixpQkFBVTtRQUNWLGtDQUNFO1FBQUEsMEZBQ0U7UUFFSixpQkFBVTtRQUNWLGtDQUNFO1FBQUEsMEZBQ0U7UUFFSixpQkFBVTtRQUNaLGlCQUFnQjs7a0RETkgseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7OztJQUVDLGlEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdoZXJlIHRoZSB0YWIgY29udGVudCBpcyBsb2FkZWQgbGF6aWx5ICh3aGVuIGFjdGl2YXRlZClcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwTGF6eUxvYWRlZEV4YW1wbGUge1xuICB0YWJMb2FkVGltZXM6IERhdGVbXSA9IFtdO1xuXG4gIGdldFRpbWVMb2FkZWQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdKSB7XG4gICAgICB0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF0gPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF07XG4gIH1cbn1cbiIsIjxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDEgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgxKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5cbiAgICA8bmctdGVtcGxhdGUgbWF0VGFiQ29udGVudD5cbiAgICAgIENvbnRlbnQgMiAtIExvYWRlZDoge3tnZXRUaW1lTG9hZGVkKDIpIHwgZGF0ZTonbWVkaXVtJ319XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFRhYkNvbnRlbnQ+XG4gICAgICBDb250ZW50IDMgLSBMb2FkZWQ6IHt7Z2V0VGltZUxvYWRlZCgzKSB8IGRhdGU6J21lZGl1bSd9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==