/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/scrolling/cdk-virtual-scroll-horizontal/cdk-virtual-scroll-horizontal-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollHorizontalExample_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r17);
} }
/**
 * \@title Horizontal virtual scroll
 */
export class CdkVirtualScrollHorizontalExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollHorizontalExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollHorizontalExample.ɵfac = function CdkVirtualScrollHorizontalExample_Factory(t) { return new (t || CdkVirtualScrollHorizontalExample)(); };
/** @nocollapse */ CdkVirtualScrollHorizontalExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollHorizontalExample, selectors: [["cdk-virtual-scroll-horizontal-example"]], decls: 3, vars: 1, consts: [[1, "cdk-virtual-scroll-data-source-example"], ["orientation", "horizontal", "itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollHorizontalExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
        i0.ɵɵtemplate(2, CdkVirtualScrollHorizontalExample_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollHorizontalExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
                templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollHorizontalExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0VoRiw4QkFBNkQ7SUFBQSxZQUFRO0lBQUEsaUJBQU07OztJQUFkLGVBQVE7SUFBUiw4QkFBUTs7Ozs7QURRekUsTUFBTSxPQUFPLGlDQUFpQztJQVA5QztRQVFFLFVBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztLQUNsRTs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2dCQUN4RCxXQUFXLEVBQUUsNENBQTRDO2dCQUN6RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tIQUNZLGlDQUFpQztzRUFBakMsaUNBQWlDO1FDVjlDLDhCQUNFO1FBQUEsc0RBQ0U7UUFBQSxrRkFBNkQ7UUFDL0QsaUJBQThCO1FBQ2hDLGlCQUFNOztRQUZHLGVBQWtDO1FBQWxDLDJDQUFrQzs7a0REUTlCLGlDQUFpQztjQVA3QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7Z0JBQ3hELFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztJQUVDLGtEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEhvcml6b250YWwgdmlydHVhbCBzY3JvbGwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1ob3Jpem9udGFsLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC1leGFtcGxlLmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbEhvcml6b250YWxFeGFtcGxlIHtcbiAgaXRlbXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMDAwMH0pLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7aX1gKTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZVwiPlxuICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGl0ZW1TaXplPVwiNTBcIiBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIj5cbiAgICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBjbGFzcz1cImV4YW1wbGUtaXRlbVwiPnt7aXRlbX19PC9kaXY+XG4gIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuPC9kaXY+XG4iXX0=