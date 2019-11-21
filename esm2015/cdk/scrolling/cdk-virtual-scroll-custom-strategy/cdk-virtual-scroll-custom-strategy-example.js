/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollCustomStrategyExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r9);
} }
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}
/**
 * \@title Virtual scroll with a custom strategy
 */
export class CdkVirtualScrollCustomStrategyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Item #${i}`));
    }
}
CdkVirtualScrollCustomStrategyExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
            },] },
];
/** @nocollapse */ CdkVirtualScrollCustomStrategyExample.ɵfac = function CdkVirtualScrollCustomStrategyExample_Factory(t) { return new (t || CdkVirtualScrollCustomStrategyExample)(); };
/** @nocollapse */ CdkVirtualScrollCustomStrategyExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollCustomStrategyExample, selectors: [["cdk-virtual-scroll-custom-strategy-example"]], features: [i0.ɵɵProvidersFeature([{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }])], decls: 2, vars: 1, consts: [[1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollCustomStrategyExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollCustomStrategyExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollCustomStrategyExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                styleUrls: ['cdk-virtual-scroll-custom-strategy-example.css'],
                templateUrl: 'cdk-virtual-scroll-custom-strategy-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkVirtualScrollCustomStrategyExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5L2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS9jZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLDhCQUE4QixFQUFFLHVCQUF1QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0YsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0EvRCw4QkFBNkQ7SUFBQSxZQUFRO0lBQUEsaUJBQU07OztJQUFkLGVBQVE7SUFBUiw2QkFBUTs7QURFdkUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLDhCQUE4QjtJQUM3RTtRQUNFLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjs7OztBQVVELE1BQU0sT0FBTyxxQ0FBcUM7SUFQbEQ7UUFRRSxVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLENBQUM7S0FDbEU7OztZQVRBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsQ0FBQztnQkFDN0QsV0FBVyxFQUFFLGlEQUFpRDtnQkFDOUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO2FBQ3ZGOzswSEFDWSxxQ0FBcUM7MEVBQXJDLHFDQUFxQyxnR0FGckMsQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQztRQ2Z4RixzREFDRTtRQUFBLHNGQUE2RDtRQUMvRCxpQkFBOEI7O1FBRHZCLGVBQWtDO1FBQWxDLDJDQUFrQzs7a0REZ0I1QixxQ0FBcUM7Y0FQakQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxDQUFDO2dCQUM3RCxXQUFXLEVBQUUsaURBQWlEO2dCQUM5RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFDLENBQUM7YUFDdkY7Ozs7SUFFQyxzREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpeGVkU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneSwgVklSVFVBTF9TQ1JPTExfU1RSQVRFR1l9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZpcnR1YWxTY3JvbGxTdHJhdGVneSBleHRlbmRzIEZpeGVkU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDUwLCAyNTAsIDUwMCk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbCB3aXRoIGEgY3VzdG9tIHN0cmF0ZWd5ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3ktZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBWSVJUVUFMX1NDUk9MTF9TVFJBVEVHWSwgdXNlQ2xhc3M6IEN1c3RvbVZpcnR1YWxTY3JvbGxTdHJhdGVneX1dXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxDdXN0b21TdHJhdGVneUV4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIj5cbiAgPGRpdiAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgY2xhc3M9XCJleGFtcGxlLWl0ZW1cIj57e2l0ZW19fTwvZGl2PlxuPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4iXX0=