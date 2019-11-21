/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tabs";
function TabGroupAsyncExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Loading tabs...\n");
    i0.ɵɵelementContainerEnd();
} }
function TabGroupAsyncExample_mat_tab_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const tab_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate(tab_r2.label);
} }
function TabGroupAsyncExample_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab");
    i0.ɵɵtemplate(1, TabGroupAsyncExample_mat_tab_3_ng_template_1_Template, 1, 1, "ng-template", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tab_r2.content, " ");
} }
/**
 * @record
 */
export function ExampleTab() { }
if (false) {
    /** @type {?} */
    ExampleTab.prototype.label;
    /** @type {?} */
    ExampleTab.prototype.content;
}
/**
 * \@title Tab group with asynchronously loading tab contents
 */
export class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }), 1000);
        }));
    }
}
TabGroupAsyncExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
                styleUrls: ['tab-group-async-example.css'],
            },] },
];
/** @nocollapse */
TabGroupAsyncExample.ctorParameters = () => [];
/** @nocollapse */ TabGroupAsyncExample.ɵfac = function TabGroupAsyncExample_Factory(t) { return new (t || TabGroupAsyncExample)(); };
/** @nocollapse */ TabGroupAsyncExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAsyncExample, selectors: [["tab-group-async-example"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""]], template: function TabGroupAsyncExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TabGroupAsyncExample_ng_container_0_Template, 2, 0, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵelementStart(2, "mat-tab-group");
        i0.ɵɵtemplate(3, TabGroupAsyncExample_mat_tab_3_Template, 3, 1, "mat-tab", 1);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.asyncTabs) === null);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 4, ctx.asyncTabs));
    } }, directives: [i1.NgIf, i2.MatTabGroup, i1.NgForOf, i2.MatTab, i2.MatTabLabel], pipes: [i1.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupAsyncExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-async-example',
                templateUrl: 'tab-group-async-example.html',
                styleUrls: ['tab-group-async-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    TabGroupAsyncExample.prototype.asyncTabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hc3luYy90YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7Ozs7SUNEMUMsNkJBQ0U7SUFBQSxrQ0FDRjtJQUFBLDBCQUFlOzs7SUFJZ0IsWUFBYTs7O0lBQWIsa0NBQWE7OztJQUQxQywrQkFDRTtJQUFBLCtGQUEyQjtJQUMzQixZQUNGO0lBQUEsaUJBQVU7OztJQURSLGVBQ0Y7SUFERSwrQ0FDRjs7Ozs7QURMRixnQ0FHQzs7O0lBRkMsMkJBQWM7O0lBQ2QsNkJBQWdCOzs7OztBQVdsQixNQUFNLE9BQU8sb0JBQW9CO0lBRy9CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVU7Ozs7UUFBQyxDQUFDLFFBQWdDLEVBQUUsRUFBRTtZQUNuRSxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztvQkFDdEMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7b0JBQ3ZDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO2lCQUN2QyxDQUFDLENBQUM7WUFDTCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7d0ZBQ1ksb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNoQmpDLHVGQUNFOztRQUdGLHFDQUNFO1FBQUEsNkVBQ0U7O1FBR0osaUJBQWdCOztRQVRGLG1FQUFvQztRQUt2QyxlQUFxQztRQUFyQyw2REFBcUM7O2tERFduQyxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBRUMseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhhbXBsZVRhYiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggYXN5bmNocm9ub3VzbHkgbG9hZGluZyB0YWIgY29udGVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQXN5bmNFeGFtcGxlIHtcbiAgYXN5bmNUYWJzOiBPYnNlcnZhYmxlPEV4YW1wbGVUYWJbXT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hc3luY1RhYnMgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV4YW1wbGVUYWJbXT4pID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KFtcbiAgICAgICAgICB7bGFiZWw6ICdGaXJzdCcsIGNvbnRlbnQ6ICdDb250ZW50IDEnfSxcbiAgICAgICAgICB7bGFiZWw6ICdTZWNvbmQnLCBjb250ZW50OiAnQ29udGVudCAyJ30sXG4gICAgICAgICAge2xhYmVsOiAnVGhpcmQnLCBjb250ZW50OiAnQ29udGVudCAzJ30sXG4gICAgICAgIF0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIoYXN5bmNUYWJzIHwgYXN5bmMpID09PSBudWxsXCI+XG4gIExvYWRpbmcgdGFicy4uLlxuPC9uZy1jb250YWluZXI+XG5cbjxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiAqbmdGb3I9XCJsZXQgdGFiIG9mIGFzeW5jVGFicyB8IGFzeW5jXCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+e3t0YWIubGFiZWx9fTwvbmctdGVtcGxhdGU+XG4gICAge3t0YWIuY29udGVudH19XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==