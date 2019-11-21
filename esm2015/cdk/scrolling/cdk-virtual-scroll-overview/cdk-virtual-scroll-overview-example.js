/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollOverviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r19);
} }
/**
 * \@title Basic virtual scroll
 */
export class CdkVirtualScrollOverviewExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-overview-example',
                styleUrls: ['cdk-virtual-scroll-overview-example.css'],
                templateUrl: 'cdk-virtual-scroll-overview-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollOverviewExample.ɵfac = function CdkVirtualScrollOverviewExample_Factory(t) { return new (t || CdkVirtualScrollOverviewExample)(); };
/** @nocollapse */ CdkVirtualScrollOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollOverviewExample, selectors: [["cdk-virtual-scroll-overview-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollOverviewExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-overview-example',
                styleUrls: ['cdk-virtual-scroll-overview-example.css'],
                templateUrl: 'cdk-virtual-scroll-overview-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollOverviewExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1vdmVydmlldy9jZGstdmlydHVhbC1zY3JvbGwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLW92ZXJ2aWV3L2Nkay12aXJ0dWFsLXNjcm9sbC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7SUNDL0QsOEJBQTZEO0lBQUEsWUFBUTtJQUFBLGlCQUFNOzs7SUFBZCxlQUFRO0lBQVIsOEJBQVE7Ozs7O0FEUXZFLE1BQU0sT0FBTywrQkFBK0I7SUFONUM7UUFPRSxVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLENBQUM7S0FDbEU7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztnQkFDdEQsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OzhHQUNZLCtCQUErQjtvRUFBL0IsK0JBQStCO1FDVDVDLHNEQUNFO1FBQUEsZ0ZBQTZEO1FBQy9ELGlCQUE4Qjs7UUFEdkIsZUFBa0M7UUFBbEMsMkNBQWtDOztrRERRNUIsK0JBQStCO2NBTjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztnQkFDdEQsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7SUFFQyxnREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEJhc2ljIHZpcnR1YWwgc2Nyb2xsICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxPdmVydmlld0V4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBpdGVtU2l6ZT1cIjUwXCIgY2xhc3M9XCJleGFtcGxlLXZpZXdwb3J0XCI+XG4gIDxkaXYgKmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGNsYXNzPVwiZXhhbXBsZS1pdGVtXCI+e3tpdGVtfX08L2Rpdj5cbjwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuIl19