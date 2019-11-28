/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/scrolling/cdk-virtual-scroll-template-cache/cdk-virtual-scroll-template-cache-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollTemplateCacheExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r21);
} }
/**
 * \@title Virtual scroll with no template caching
 */
export class CdkVirtualScrollTemplateCacheExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollTemplateCacheExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-template-cache-example',
                styleUrls: ['cdk-virtual-scroll-template-cache-example.css'],
                templateUrl: 'cdk-virtual-scroll-template-cache-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollTemplateCacheExample.ɵfac = function CdkVirtualScrollTemplateCacheExample_Factory(t) { return new (t || CdkVirtualScrollTemplateCacheExample)(); };
/** @nocollapse */ CdkVirtualScrollTemplateCacheExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollTemplateCacheExample, selectors: [["cdk-virtual-scroll-template-cache-example"]], decls: 2, vars: 2, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], [1, "example-item"]], template: function CdkVirtualScrollTemplateCacheExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollTemplateCacheExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items)("cdkVirtualForTemplateCacheSize", 0);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollTemplateCacheExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-template-cache-example',
                styleUrls: ['cdk-virtual-scroll-template-cache-example.css'],
                templateUrl: 'cdk-virtual-scroll-template-cache-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollTemplateCacheExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS9jZGstdmlydHVhbC1zY3JvbGwtdGVtcGxhdGUtY2FjaGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlL2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0lDQy9ELDhCQUFtRjtJQUFBLFlBQVE7SUFBQSxpQkFBTTs7O0lBQWQsZUFBUTtJQUFSLDhCQUFROzs7OztBRFE3RixNQUFNLE9BQU8sb0NBQW9DO0lBTmpEO1FBT0UsVUFBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxDQUFDO0tBQ2xFOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7Z0JBQzVELFdBQVcsRUFBRSxnREFBZ0Q7Z0JBQzdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzt3SEFDWSxvQ0FBb0M7eUVBQXBDLG9DQUFvQztRQ1RqRCxzREFDRTtRQUFBLHFGQUFtRjtRQUNyRixpQkFBOEI7O1FBRHZCLGVBQXdEO1FBQXhELDJDQUF3RCxxQ0FBQTs7a0REUWxELG9DQUFvQztjQU5oRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7Z0JBQzVELFdBQVcsRUFBRSxnREFBZ0Q7Z0JBQzdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O0lBRUMscURBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbCB3aXRoIG5vIHRlbXBsYXRlIGNhY2hpbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbFRlbXBsYXRlQ2FjaGVFeGFtcGxlIHtcbiAgaXRlbXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMDAwMH0pLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7aX1gKTtcbn1cbiIsIjxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgaXRlbVNpemU9XCI1MFwiIGNsYXNzPVwiZXhhbXBsZS12aWV3cG9ydFwiPlxuICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IHRlbXBsYXRlQ2FjaGVTaXplOiAwXCIgY2xhc3M9XCJleGFtcGxlLWl0ZW1cIj57e2l0ZW19fTwvZGl2PlxuPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4iXX0=