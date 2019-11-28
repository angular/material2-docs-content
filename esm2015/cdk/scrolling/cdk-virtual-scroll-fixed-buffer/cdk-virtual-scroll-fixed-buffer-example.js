/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/scrolling/cdk-virtual-scroll-fixed-buffer/cdk-virtual-scroll-fixed-buffer-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollFixedBufferExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r15);
} }
/**
 * \@title Fixed size virtual scroll with custom buffer parameters
 */
export class CdkVirtualScrollFixedBufferExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollFixedBufferExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-fixed-buffer-example',
                styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
                templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollFixedBufferExample.ɵfac = function CdkVirtualScrollFixedBufferExample_Factory(t) { return new (t || CdkVirtualScrollFixedBufferExample)(); };
/** @nocollapse */ CdkVirtualScrollFixedBufferExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollFixedBufferExample, selectors: [["cdk-virtual-scroll-fixed-buffer-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", "minBufferPx", "200", "maxBufferPx", "400", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollFixedBufferExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollFixedBufferExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollFixedBufferExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-fixed-buffer-example',
                styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
                templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollFixedBufferExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWZpeGVkLWJ1ZmZlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyL2Nkay12aXJ0dWFsLXNjcm9sbC1maXhlZC1idWZmZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWZpeGVkLWJ1ZmZlci9jZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7SUNFL0QsOEJBQTZEO0lBQUEsWUFBUTtJQUFBLGlCQUFNOzs7SUFBZCxlQUFRO0lBQVIsOEJBQVE7Ozs7O0FET3ZFLE1BQU0sT0FBTyxrQ0FBa0M7SUFOL0M7UUFPRSxVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLENBQUM7S0FDbEU7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQztnQkFDMUQsV0FBVyxFQUFFLDhDQUE4QztnQkFDM0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O29IQUNZLGtDQUFrQzt1RUFBbEMsa0NBQWtDO1FDVC9DLHNEQUVFO1FBQUEsbUZBQTZEO1FBQy9ELGlCQUE4Qjs7UUFEdkIsZUFBa0M7UUFBbEMsMkNBQWtDOztrRERPNUIsa0NBQWtDO2NBTjlDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQztnQkFDMUQsV0FBVyxFQUFFLDhDQUE4QztnQkFDM0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7SUFFQyxtREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEZpeGVkIHNpemUgdmlydHVhbCBzY3JvbGwgd2l0aCBjdXN0b20gYnVmZmVyIHBhcmFtZXRlcnMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1maXhlZC1idWZmZXItZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWZpeGVkLWJ1ZmZlci1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbEZpeGVkQnVmZmVyRXhhbXBsZSB7XG4gIGl0ZW1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDAwMDB9KS5tYXAoKF8sIGkpID0+IGBJdGVtICMke2l9YCk7XG59XG4iLCI8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IGl0ZW1TaXplPVwiNTBcIiBtaW5CdWZmZXJQeD1cIjIwMFwiIG1heEJ1ZmZlclB4PVwiNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXZpZXdwb3J0XCI+XG4gIDxkaXYgKmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGNsYXNzPVwiZXhhbXBsZS1pdGVtXCI+e3tpdGVtfX08L2Rpdj5cbjwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuIl19