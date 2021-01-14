import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * @title Platform overview
 */
export class CdkPlatformOverviewExample {
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
}
CdkPlatformOverviewExample.ɵfac = function CdkPlatformOverviewExample_Factory(t) { return new (t || CdkPlatformOverviewExample)(i0.ɵɵdirectiveInject(i1.Platform)); };
CdkPlatformOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPlatformOverviewExample, selectors: [["cdk-platform-overview-example"]], decls: 24, vars: 11, template: function CdkPlatformOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵtext(23);
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
        i0.ɵɵtextInterpolate1("Is Safari: ", ctx.platform.SAFARI, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Supported input types: ", ctx.supportedInputTypes, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Supports passive event listeners: ", ctx.supportsPassiveEventListeners, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Supports scroll behavior: ", ctx.supportsScrollBehavior, "");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
            }]
    }], function () { return [{ type: i1.Platform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsNkJBQTZCLEVBQzdCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0I7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGtDQUE2QixHQUFHLDZCQUE2QixFQUFFLENBQUM7UUFDaEUsMkJBQXNCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUVWLENBQUM7O29HQUw5QiwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ2Z2QywwQkFBSTtRQUFBLHFDQUFxQjtRQUFBLGlCQUFLO1FBQzlCLHlCQUFHO1FBQUEsWUFBZ0M7UUFBQSxpQkFBSTtRQUN2Qyx5QkFBRztRQUFBLFlBQXdCO1FBQUEsaUJBQUk7UUFDL0IseUJBQUc7UUFBQSxZQUFnQztRQUFBLGlCQUFJO1FBQ3ZDLHlCQUFHO1FBQUEsWUFBNEI7UUFBQSxpQkFBSTtRQUNuQywwQkFBRztRQUFBLGFBQThCO1FBQUEsaUJBQUk7UUFDckMsMEJBQUc7UUFBQSxhQUFnQztRQUFBLGlCQUFJO1FBQ3ZDLDBCQUFHO1FBQUEsYUFBMEI7UUFBQSxpQkFBSTtRQUNqQywwQkFBRztRQUFBLGFBQThCO1FBQUEsaUJBQUk7UUFDckMsMEJBQUc7UUFBQSxhQUE4QztRQUFBLGlCQUFJO1FBQ3JELDBCQUFHO1FBQUEsYUFBbUU7UUFBQSxpQkFBSTtRQUMxRSwwQkFBRztRQUFBLGFBQW9EO1FBQUEsaUJBQUk7O1FBVnhELGVBQWdDO1FBQWhDLCtEQUFnQztRQUNoQyxlQUF3QjtRQUF4Qix1REFBd0I7UUFDeEIsZUFBZ0M7UUFBaEMsK0RBQWdDO1FBQ2hDLGVBQTRCO1FBQTVCLDJEQUE0QjtRQUM1QixlQUE4QjtRQUE5Qiw2REFBOEI7UUFDOUIsZUFBZ0M7UUFBaEMsK0RBQWdDO1FBQ2hDLGVBQTBCO1FBQTFCLHlEQUEwQjtRQUMxQixlQUE4QjtRQUE5Qiw2REFBOEI7UUFDOUIsZUFBOEM7UUFBOUMsNkVBQThDO1FBQzlDLGVBQW1FO1FBQW5FLGtHQUFtRTtRQUNuRSxlQUFvRDtRQUFwRCxtRkFBb0Q7O3VGREkxQywwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzLFxuICBQbGF0Zm9ybSxcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMsXG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbi8qKlxuICogQHRpdGxlIFBsYXRmb3JtIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUGxhdGZvcm1PdmVydmlld0V4YW1wbGUge1xuICBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gQXJyYXkuZnJvbShnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzKCkpLmpvaW4oJywgJyk7XG4gIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvciA9IHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxufVxuIiwiPGgyPlBsYXRmb3JtIGluZm9ybWF0aW9uOjwvaDI+XG48cD5JcyBBbmRyb2lkOiB7e3BsYXRmb3JtLkFORFJPSUR9fTwvcD5cbjxwPklzIGlPUzoge3twbGF0Zm9ybS5JT1N9fTwvcD5cbjxwPklzIEZpcmVmb3g6IHt7cGxhdGZvcm0uRklSRUZPWH19PC9wPlxuPHA+SXMgQmxpbms6IHt7cGxhdGZvcm0uQkxJTkt9fTwvcD5cbjxwPklzIFdlYmtpdDoge3twbGF0Zm9ybS5XRUJLSVR9fTwvcD5cbjxwPklzIFRyaWRlbnQ6IHt7cGxhdGZvcm0uVFJJREVOVH19PC9wPlxuPHA+SXMgRWRnZToge3twbGF0Zm9ybS5FREdFfX08L3A+XG48cD5JcyBTYWZhcmk6IHt7cGxhdGZvcm0uU0FGQVJJfX08L3A+XG48cD5TdXBwb3J0ZWQgaW5wdXQgdHlwZXM6IHt7c3VwcG9ydGVkSW5wdXRUeXBlc319PC9wPlxuPHA+U3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnM6IHt7c3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnN9fTwvcD5cbjxwPlN1cHBvcnRzIHNjcm9sbCBiZWhhdmlvcjoge3tzdXBwb3J0c1Njcm9sbEJlaGF2aW9yfX08L3A+XG4iXX0=