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
    return CdkPlatformOverviewExample;
}());
export { CdkPlatformOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
                styleUrls: ['cdk-platform-overview-example.css'],
            }]
    }], function () { return [{ type: i1.Platform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsNkJBQTZCLEVBQzdCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0I7O0dBRUc7QUFDSDtJQVVFLG9DQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSnJDLHdCQUFtQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxrQ0FBNkIsR0FBRyw2QkFBNkIsRUFBRSxDQUFDO1FBQ2hFLDJCQUFzQixHQUFHLHNCQUFzQixFQUFFLENBQUM7SUFFVixDQUFDOztnQkFWMUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7b0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2lCQUNqRDs7OztnQkFaQyxRQUFROzt3R0FhRywwQkFBMEI7bUVBQTFCLDBCQUEwQjtZQ2hCdkMsMEJBQUk7WUFBQSxxQ0FBcUI7WUFBQSxpQkFBSztZQUM5Qix5QkFBRztZQUFBLFlBQWdDO1lBQUEsaUJBQUk7WUFDdkMseUJBQUc7WUFBQSxZQUF3QjtZQUFBLGlCQUFJO1lBQy9CLHlCQUFHO1lBQUEsWUFBZ0M7WUFBQSxpQkFBSTtZQUN2Qyx5QkFBRztZQUFBLFlBQTRCO1lBQUEsaUJBQUk7WUFDbkMsMEJBQUc7WUFBQSxhQUE4QjtZQUFBLGlCQUFJO1lBQ3JDLDBCQUFHO1lBQUEsYUFBZ0M7WUFBQSxpQkFBSTtZQUN2QywwQkFBRztZQUFBLGFBQTBCO1lBQUEsaUJBQUk7WUFDakMsMEJBQUc7WUFBQSxhQUE4QztZQUFBLGlCQUFJO1lBQ3JELDBCQUFHO1lBQUEsYUFBbUU7WUFBQSxpQkFBSTtZQUMxRSwwQkFBRztZQUFBLGFBQW9EO1lBQUEsaUJBQUk7O1lBVHhELGVBQWdDO1lBQWhDLCtEQUFnQztZQUNoQyxlQUF3QjtZQUF4Qix1REFBd0I7WUFDeEIsZUFBZ0M7WUFBaEMsK0RBQWdDO1lBQ2hDLGVBQTRCO1lBQTVCLDJEQUE0QjtZQUM1QixlQUE4QjtZQUE5Qiw2REFBOEI7WUFDOUIsZUFBZ0M7WUFBaEMsK0RBQWdDO1lBQ2hDLGVBQTBCO1lBQTFCLHlEQUEwQjtZQUMxQixlQUE4QztZQUE5Qyw2RUFBOEM7WUFDOUMsZUFBbUU7WUFBbkUsa0dBQW1FO1lBQ25FLGVBQW9EO1lBQXBELG1GQUFvRDs7cUNEVnZEO0NBc0JDLEFBWEQsSUFXQztTQU5ZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldFN1cHBvcnRlZElucHV0VHlwZXMsXG4gIFBsYXRmb3JtLFxuICBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyxcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuLyoqXG4gKiBAdGl0bGUgUGxhdGZvcm0gb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1BsYXRmb3JtT3ZlcnZpZXdFeGFtcGxlIHtcbiAgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IEFycmF5LmZyb20oZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcygpKS5qb2luKCcsICcpO1xuICBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IgPSBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cbn1cbiIsIjxoMj5QbGF0Zm9ybSBpbmZvcm1hdGlvbjo8L2gyPlxuPHA+SXMgQW5kcm9pZDoge3twbGF0Zm9ybS5BTkRST0lEfX08L3A+XG48cD5JcyBpT1M6IHt7cGxhdGZvcm0uSU9TfX08L3A+XG48cD5JcyBGaXJlZm94OiB7e3BsYXRmb3JtLkZJUkVGT1h9fTwvcD5cbjxwPklzIEJsaW5rOiB7e3BsYXRmb3JtLkJMSU5LfX08L3A+XG48cD5JcyBXZWJraXQ6IHt7cGxhdGZvcm0uV0VCS0lUfX08L3A+XG48cD5JcyBUcmlkZW50OiB7e3BsYXRmb3JtLlRSSURFTlR9fTwvcD5cbjxwPklzIEVkZ2U6IHt7cGxhdGZvcm0uRURHRX19PC9wPlxuPHA+U3VwcG9ydGVkIGlucHV0IHR5cGVzOiB7e3N1cHBvcnRlZElucHV0VHlwZXN9fTwvcD5cbjxwPlN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzOiB7e3N1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzfX08L3A+XG48cD5TdXBwb3J0cyBzY3JvbGwgYmVoYXZpb3I6IHt7c3VwcG9ydHNTY3JvbGxCZWhhdmlvcn19PC9wPlxuIl19