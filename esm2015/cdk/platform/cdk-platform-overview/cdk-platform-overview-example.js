/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * \@title Platform overview
 */
export class CdkPlatformOverviewExample {
    /**
     * @param {?} platform
     */
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
}
CdkPlatformOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
                styleUrls: ['cdk-platform-overview-example.css'],
            },] },
];
/** @nocollapse */
CdkPlatformOverviewExample.ctorParameters = () => [
    { type: Platform }
];
/** @nocollapse */ CdkPlatformOverviewExample.ɵfac = function CdkPlatformOverviewExample_Factory(t) { return new (t || CdkPlatformOverviewExample)(i0.ɵɵdirectiveInject(i1.Platform)); };
/** @nocollapse */ CdkPlatformOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPlatformOverviewExample, selectors: [["cdk-platform-overview-example"]], decls: 22, vars: 10, template: function CdkPlatformOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1, "Platform information:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "p");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p");
        i0.ɵɵtext(17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "p");
        i0.ɵɵtext(21);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Is Android: ", ctx.platform.ANDROID, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Is iOS: ", ctx.platform.IOS, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Is Firefox: ", ctx.platform.FIREFOX, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Is Blink: ", ctx.platform.BLINK, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Is Webkit: ", ctx.platform.WEBKIT, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Is Trident: ", ctx.platform.TRIDENT, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Is Edge: ", ctx.platform.EDGE, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Supported input types: ", ctx.supportedInputTypes, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Supports passive event listeners: ", ctx.supportsPassiveEventListeners, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Supports scroll behavior: ", ctx.supportsScrollBehavior, "");
    } }, styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
                styleUrls: ['cdk-platform-overview-example.css'],
            }]
    }], function () { return [{ type: i1.Platform }]; }, null);
if (false) {
    /** @type {?} */
    CdkPlatformOverviewExample.prototype.supportedInputTypes;
    /** @type {?} */
    CdkPlatformOverviewExample.prototype.supportsPassiveEventListeners;
    /** @type {?} */
    CdkPlatformOverviewExample.prototype.supportsScrollBehavior;
    /** @type {?} */
    CdkPlatformOverviewExample.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsNkJBQTZCLEVBQzdCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFVL0IsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUtyQyxZQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSnJDLHdCQUFtQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxrQ0FBNkIsR0FBRyw2QkFBNkIsRUFBRSxDQUFDO1FBQ2hFLDJCQUFzQixHQUFHLHNCQUFzQixFQUFFLENBQUM7SUFFVixDQUFDOzs7WUFWMUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOzs7O1lBWkMsUUFBUTs7b0dBYUcsMEJBQTBCOytEQUExQiwwQkFBMEI7UUNoQnZDLDBCQUFJO1FBQUEscUNBQXFCO1FBQUEsaUJBQUs7UUFDOUIseUJBQUc7UUFBQSxZQUFnQztRQUFBLGlCQUFJO1FBQ3ZDLHlCQUFHO1FBQUEsWUFBd0I7UUFBQSxpQkFBSTtRQUMvQix5QkFBRztRQUFBLFlBQWdDO1FBQUEsaUJBQUk7UUFDdkMseUJBQUc7UUFBQSxZQUE0QjtRQUFBLGlCQUFJO1FBQ25DLDBCQUFHO1FBQUEsYUFBOEI7UUFBQSxpQkFBSTtRQUNyQywwQkFBRztRQUFBLGFBQWdDO1FBQUEsaUJBQUk7UUFDdkMsMEJBQUc7UUFBQSxhQUEwQjtRQUFBLGlCQUFJO1FBQ2pDLDBCQUFHO1FBQUEsYUFBOEM7UUFBQSxpQkFBSTtRQUNyRCwwQkFBRztRQUFBLGFBQW1FO1FBQUEsaUJBQUk7UUFDMUUsMEJBQUc7UUFBQSxhQUFvRDtRQUFBLGlCQUFJOztRQVR4RCxlQUFnQztRQUFoQywrREFBZ0M7UUFDaEMsZUFBd0I7UUFBeEIsdURBQXdCO1FBQ3hCLGVBQWdDO1FBQWhDLCtEQUFnQztRQUNoQyxlQUE0QjtRQUE1QiwyREFBNEI7UUFDNUIsZUFBOEI7UUFBOUIsNkRBQThCO1FBQzlCLGVBQWdDO1FBQWhDLCtEQUFnQztRQUNoQyxlQUEwQjtRQUExQix5REFBMEI7UUFDMUIsZUFBOEM7UUFBOUMsNkVBQThDO1FBQzlDLGVBQW1FO1FBQW5FLGtHQUFtRTtRQUNuRSxlQUFvRDtRQUFwRCxtRkFBb0Q7O21DRE0xQywwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOzs7O0lBRUMseURBQXNFOztJQUN0RSxtRUFBZ0U7O0lBQ2hFLDREQUFrRDs7SUFFdEMsOENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcyxcbiAgUGxhdGZvcm0sXG4gIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzLFxuICBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yLFxufSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuXG4vKipcbiAqIEB0aXRsZSBQbGF0Zm9ybSBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUGxhdGZvcm1PdmVydmlld0V4YW1wbGUge1xuICBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gQXJyYXkuZnJvbShnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzKCkpLmpvaW4oJywgJyk7XG4gIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvciA9IHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxufVxuIiwiPGgyPlBsYXRmb3JtIGluZm9ybWF0aW9uOjwvaDI+XG48cD5JcyBBbmRyb2lkOiB7e3BsYXRmb3JtLkFORFJPSUR9fTwvcD5cbjxwPklzIGlPUzoge3twbGF0Zm9ybS5JT1N9fTwvcD5cbjxwPklzIEZpcmVmb3g6IHt7cGxhdGZvcm0uRklSRUZPWH19PC9wPlxuPHA+SXMgQmxpbms6IHt7cGxhdGZvcm0uQkxJTkt9fTwvcD5cbjxwPklzIFdlYmtpdDoge3twbGF0Zm9ybS5XRUJLSVR9fTwvcD5cbjxwPklzIFRyaWRlbnQ6IHt7cGxhdGZvcm0uVFJJREVOVH19PC9wPlxuPHA+SXMgRWRnZToge3twbGF0Zm9ybS5FREdFfX08L3A+XG48cD5TdXBwb3J0ZWQgaW5wdXQgdHlwZXM6IHt7c3VwcG9ydGVkSW5wdXRUeXBlc319PC9wPlxuPHA+U3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnM6IHt7c3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnN9fTwvcD5cbjxwPlN1cHBvcnRzIHNjcm9sbCBiZWhhdmlvcjoge3tzdXBwb3J0c1Njcm9sbEJlaGF2aW9yfX08L3A+XG4iXX0=