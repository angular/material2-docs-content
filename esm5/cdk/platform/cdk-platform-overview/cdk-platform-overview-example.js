import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * @title Platform overview
 */
var CdkPlatformOverviewExample = /** @class */ (function () {
    function CdkPlatformOverviewExample(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
    CdkPlatformOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-platform-overview-example',
                    templateUrl: 'cdk-platform-overview-example.html',
                    styleUrls: ['cdk-platform-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    CdkPlatformOverviewExample.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    CdkPlatformOverviewExample.ɵfac = function CdkPlatformOverviewExample_Factory(t) { return new (t || CdkPlatformOverviewExample)(i0.ɵɵdirectiveInject(i1.Platform)); };
    CdkPlatformOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPlatformOverviewExample, selectors: [["cdk-platform-overview-example"]], decls: 22, vars: 10, template: function CdkPlatformOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h3");
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
    return CdkPlatformOverviewExample;
}());
export { CdkPlatformOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
                styleUrls: ['cdk-platform-overview-example.css'],
            }]
    }], function () { return [{ type: i1.Platform }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFFBQVEsRUFDUiw2QkFBNkIsRUFDN0Isc0JBQXNCLEdBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7OztBQUUvQjs7R0FFRztBQUNIO0lBVUUsb0NBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGtDQUE2QixHQUFHLDZCQUE2QixFQUFFLENBQUM7UUFDaEUsMkJBQXNCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUVWLENBQUM7O2dCQVYxQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsV0FBVyxFQUFFLG9DQUFvQztvQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7aUJBQ2pEOzs7O2dCQVpDLFFBQVE7O3dHQWFHLDBCQUEwQjttRUFBMUIsMEJBQTBCO1lDaEJ2QywwQkFBSTtZQUFBLHFDQUFxQjtZQUFBLGlCQUFLO1lBQzlCLHlCQUFHO1lBQUEsWUFBZ0M7WUFBQSxpQkFBSTtZQUN2Qyx5QkFBRztZQUFBLFlBQXdCO1lBQUEsaUJBQUk7WUFDL0IseUJBQUc7WUFBQSxZQUFnQztZQUFBLGlCQUFJO1lBQ3ZDLHlCQUFHO1lBQUEsWUFBNEI7WUFBQSxpQkFBSTtZQUNuQywwQkFBRztZQUFBLGFBQThCO1lBQUEsaUJBQUk7WUFDckMsMEJBQUc7WUFBQSxhQUFnQztZQUFBLGlCQUFJO1lBQ3ZDLDBCQUFHO1lBQUEsYUFBMEI7WUFBQSxpQkFBSTtZQUNqQywwQkFBRztZQUFBLGFBQThDO1lBQUEsaUJBQUk7WUFDckQsMEJBQUc7WUFBQSxhQUFtRTtZQUFBLGlCQUFJO1lBQzFFLDBCQUFHO1lBQUEsYUFBb0Q7WUFBQSxpQkFBSTs7WUFUeEQsZUFBZ0M7WUFBaEMsK0RBQWdDO1lBQ2hDLGVBQXdCO1lBQXhCLHVEQUF3QjtZQUN4QixlQUFnQztZQUFoQywrREFBZ0M7WUFDaEMsZUFBNEI7WUFBNUIsMkRBQTRCO1lBQzVCLGVBQThCO1lBQTlCLDZEQUE4QjtZQUM5QixlQUFnQztZQUFoQywrREFBZ0M7WUFDaEMsZUFBMEI7WUFBMUIseURBQTBCO1lBQzFCLGVBQThDO1lBQTlDLDZFQUE4QztZQUM5QyxlQUFtRTtZQUFuRSxrR0FBbUU7WUFDbkUsZUFBb0Q7WUFBcEQsbUZBQW9EOztxQ0RWdkQ7Q0FzQkMsQUFYRCxJQVdDO1NBTlksMEJBQTBCO21DQUExQiwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcyxcbiAgUGxhdGZvcm0sXG4gIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzLFxuICBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yLFxufSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuXG4vKipcbiAqIEB0aXRsZSBQbGF0Zm9ybSBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUGxhdGZvcm1PdmVydmlld0V4YW1wbGUge1xuICBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gQXJyYXkuZnJvbShnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzKCkpLmpvaW4oJywgJyk7XG4gIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvciA9IHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxufVxuIiwiPGgzPlBsYXRmb3JtIGluZm9ybWF0aW9uOjwvaDM+XG48cD5JcyBBbmRyb2lkOiB7e3BsYXRmb3JtLkFORFJPSUR9fTwvcD5cbjxwPklzIGlPUzoge3twbGF0Zm9ybS5JT1N9fTwvcD5cbjxwPklzIEZpcmVmb3g6IHt7cGxhdGZvcm0uRklSRUZPWH19PC9wPlxuPHA+SXMgQmxpbms6IHt7cGxhdGZvcm0uQkxJTkt9fTwvcD5cbjxwPklzIFdlYmtpdDoge3twbGF0Zm9ybS5XRUJLSVR9fTwvcD5cbjxwPklzIFRyaWRlbnQ6IHt7cGxhdGZvcm0uVFJJREVOVH19PC9wPlxuPHA+SXMgRWRnZToge3twbGF0Zm9ybS5FREdFfX08L3A+XG48cD5TdXBwb3J0ZWQgaW5wdXQgdHlwZXM6IHt7c3VwcG9ydGVkSW5wdXRUeXBlc319PC9wPlxuPHA+U3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnM6IHt7c3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnN9fTwvcD5cbjxwPlN1cHBvcnRzIHNjcm9sbCBiZWhhdmlvcjoge3tzdXBwb3J0c1Njcm9sbEJlaGF2aW9yfX08L3A+XG4iXX0=