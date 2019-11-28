/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/platform/cdk-platform-overview/cdk-platform-overview-example.ts
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
                styleUrls: ['cdk-platform-overview-example.css'],
            }]
    }], function () { return [{ type: i1.Platform }]; }, null); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFFBQVEsRUFDUiw2QkFBNkIsRUFDN0Isc0JBQXNCLEdBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQVUvQixNQUFNLE9BQU8sMEJBQTBCOzs7O0lBS3JDLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGtDQUE2QixHQUFHLDZCQUE2QixFQUFFLENBQUM7UUFDaEUsMkJBQXNCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUVWLENBQUM7OztZQVYxQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7WUFaQyxRQUFROztvR0FhRywwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ2hCdkMsMEJBQUk7UUFBQSxxQ0FBcUI7UUFBQSxpQkFBSztRQUM5Qix5QkFBRztRQUFBLFlBQWdDO1FBQUEsaUJBQUk7UUFDdkMseUJBQUc7UUFBQSxZQUF3QjtRQUFBLGlCQUFJO1FBQy9CLHlCQUFHO1FBQUEsWUFBZ0M7UUFBQSxpQkFBSTtRQUN2Qyx5QkFBRztRQUFBLFlBQTRCO1FBQUEsaUJBQUk7UUFDbkMsMEJBQUc7UUFBQSxhQUE4QjtRQUFBLGlCQUFJO1FBQ3JDLDBCQUFHO1FBQUEsYUFBZ0M7UUFBQSxpQkFBSTtRQUN2QywwQkFBRztRQUFBLGFBQTBCO1FBQUEsaUJBQUk7UUFDakMsMEJBQUc7UUFBQSxhQUE4QztRQUFBLGlCQUFJO1FBQ3JELDBCQUFHO1FBQUEsYUFBbUU7UUFBQSxpQkFBSTtRQUMxRSwwQkFBRztRQUFBLGFBQW9EO1FBQUEsaUJBQUk7O1FBVHhELGVBQWdDO1FBQWhDLCtEQUFnQztRQUNoQyxlQUF3QjtRQUF4Qix1REFBd0I7UUFDeEIsZUFBZ0M7UUFBaEMsK0RBQWdDO1FBQ2hDLGVBQTRCO1FBQTVCLDJEQUE0QjtRQUM1QixlQUE4QjtRQUE5Qiw2REFBOEI7UUFDOUIsZUFBZ0M7UUFBaEMsK0RBQWdDO1FBQ2hDLGVBQTBCO1FBQTFCLHlEQUEwQjtRQUMxQixlQUE4QztRQUE5Qyw2RUFBOEM7UUFDOUMsZUFBbUU7UUFBbkUsa0dBQW1FO1FBQ25FLGVBQW9EO1FBQXBELG1GQUFvRDs7a0RETTFDLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7SUFFQyx5REFBc0U7O0lBQ3RFLG1FQUFnRTs7SUFDaEUsNERBQWtEOztJQUV0Qyw4Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzLFxuICBQbGF0Zm9ybSxcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMsXG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbi8qKlxuICogQHRpdGxlIFBsYXRmb3JtIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQbGF0Zm9ybU92ZXJ2aWV3RXhhbXBsZSB7XG4gIHN1cHBvcnRlZElucHV0VHlwZXMgPSBBcnJheS5mcm9tKGdldFN1cHBvcnRlZElucHV0VHlwZXMoKSkuam9pbignLCAnKTtcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpO1xuICBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yID0gc3VwcG9ydHNTY3JvbGxCZWhhdmlvcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG59XG4iLCI8aDI+UGxhdGZvcm0gaW5mb3JtYXRpb246PC9oMj5cbjxwPklzIEFuZHJvaWQ6IHt7cGxhdGZvcm0uQU5EUk9JRH19PC9wPlxuPHA+SXMgaU9TOiB7e3BsYXRmb3JtLklPU319PC9wPlxuPHA+SXMgRmlyZWZveDoge3twbGF0Zm9ybS5GSVJFRk9YfX08L3A+XG48cD5JcyBCbGluazoge3twbGF0Zm9ybS5CTElOS319PC9wPlxuPHA+SXMgV2Via2l0OiB7e3BsYXRmb3JtLldFQktJVH19PC9wPlxuPHA+SXMgVHJpZGVudDoge3twbGF0Zm9ybS5UUklERU5UfX08L3A+XG48cD5JcyBFZGdlOiB7e3BsYXRmb3JtLkVER0V9fTwvcD5cbjxwPlN1cHBvcnRlZCBpbnB1dCB0eXBlczoge3tzdXBwb3J0ZWRJbnB1dFR5cGVzfX08L3A+XG48cD5TdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyczoge3tzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc319PC9wPlxuPHA+U3VwcG9ydHMgc2Nyb2xsIGJlaGF2aW9yOiB7e3N1cHBvcnRzU2Nyb2xsQmVoYXZpb3J9fTwvcD5cbiJdfQ==