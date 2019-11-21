/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollContextExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 2);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 2);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 2);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 2);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 2);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 2);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const count_r3 = ctx.count;
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    const even_r6 = ctx.even;
    const odd_r7 = ctx.odd;
    i0.ɵɵclassProp("example-alternate", odd_r7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Item: ", item_r1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Index: ", index_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Count: ", count_r3, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("First: ", first_r4 ? "Yes" : "No", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Last: ", last_r5 ? "Yes" : "No", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Even: ", even_r6 ? "Yes" : "No", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Odd: ", odd_r7 ? "Yes" : "No", "");
} }
/**
 * \@title Virtual scroll context variables
 */
export class CdkVirtualScrollContextExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollContextExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-context-example',
                styleUrls: ['cdk-virtual-scroll-context-example.css'],
                templateUrl: 'cdk-virtual-scroll-context-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollContextExample.ɵfac = function CdkVirtualScrollContextExample_Factory(t) { return new (t || CdkVirtualScrollContextExample)(); };
/** @nocollapse */ CdkVirtualScrollContextExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollContextExample, selectors: [["cdk-virtual-scroll-context-example"]], decls: 2, vars: 2, consts: [[1, "example-viewport", 3, "itemSize"], [3, "example-alternate", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item-detail"]], template: function CdkVirtualScrollContextExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollContextExample_div_1_Template, 15, 8, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("itemSize", 18 * 7);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 18px;\n}\n\n.example-alternate[_ngcontent-%COMP%] {\n  background: rgba(127, 127, 127, 0.3);\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollContextExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-context-example',
                styleUrls: ['cdk-virtual-scroll-context-example.css'],
                templateUrl: 'cdk-virtual-scroll-context-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollContextExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0lDQy9ELDJCQU9FO0lBQUEsOEJBQWlDO0lBQUEsWUFBYztJQUFBLGlCQUFNO0lBQ3JELDhCQUFpQztJQUFBLFlBQWdCO0lBQUEsaUJBQU07SUFDdkQsOEJBQWlDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTTtJQUN2RCw4QkFBaUM7SUFBQSxZQUErQjtJQUFBLGlCQUFNO0lBQ3RFLDhCQUFpQztJQUFBLGFBQTZCO0lBQUEsaUJBQU07SUFDcEUsK0JBQWlDO0lBQUEsYUFBNkI7SUFBQSxpQkFBTTtJQUNwRSwrQkFBaUM7SUFBQSxhQUEyQjtJQUFBLGlCQUFNO0lBQ3BFLGlCQUFNOzs7Ozs7Ozs7SUFSK0IsMkNBQStCO0lBQ2pDLGVBQWM7SUFBZCw0Q0FBYztJQUNkLGVBQWdCO0lBQWhCLDhDQUFnQjtJQUNoQixlQUFnQjtJQUFoQiw4Q0FBZ0I7SUFDaEIsZUFBK0I7SUFBL0IsNkRBQStCO0lBQy9CLGVBQTZCO0lBQTdCLDJEQUE2QjtJQUM3QixlQUE2QjtJQUE3QiwyREFBNkI7SUFDN0IsZUFBMkI7SUFBM0IseURBQTJCOzs7OztBRExoRSxNQUFNLE9BQU8sOEJBQThCO0lBTjNDO1FBT0UsVUFBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxDQUFDO0tBQ2xFOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7Z0JBQ3JELFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs0R0FDWSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQ1QzQyxzREFDRTtRQUFBLGdGQU9FO1FBUUosaUJBQThCOztRQWhCRCxpQ0FBbUI7UUFDekMsZUFNK0I7UUFOL0IsMkNBTStCOztrRERFekIsOEJBQThCO2NBTjFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztnQkFDckQsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7SUFFQywrQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIGNvbnRleHQgdmFyaWFibGVzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtY29udGV4dC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZXh0LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxDb250ZXh0RXhhbXBsZSB7XG4gIGl0ZW1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDAwMDB9KS5tYXAoKF8sIGkpID0+IGBJdGVtICMke2l9YCk7XG59XG4iLCI8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IFtpdGVtU2l6ZV09XCIxOCAqIDdcIiBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIj5cbiAgPGRpdiAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gY291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdCA9IGZpcnN0O1xuICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdCA9IGxhc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBldmVuID0gZXZlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9kZCA9IG9kZDtcIiBbY2xhc3MuZXhhbXBsZS1hbHRlcm5hdGVdPVwib2RkXCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaXRlbS1kZXRhaWxcIj5JdGVtOiB7e2l0ZW19fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWl0ZW0tZGV0YWlsXCI+SW5kZXg6IHt7aW5kZXh9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWl0ZW0tZGV0YWlsXCI+Q291bnQ6IHt7Y291bnR9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWl0ZW0tZGV0YWlsXCI+Rmlyc3Q6IHt7Zmlyc3QgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWl0ZW0tZGV0YWlsXCI+TGFzdDoge3tsYXN0ID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pdGVtLWRldGFpbFwiPkV2ZW46IHt7ZXZlbiA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaXRlbS1kZXRhaWxcIj5PZGQ6IHt7b2RkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiJdfQ==