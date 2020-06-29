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
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
                styleUrls: ['cdk-platform-overview-example.css'],
            }]
    }], function () { return [{ type: i1.Platform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsNkJBQTZCLEVBQzdCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0I7O0dBRUc7QUFNSCxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGtDQUE2QixHQUFHLDZCQUE2QixFQUFFLENBQUM7UUFDaEUsMkJBQXNCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUVWLENBQUM7O29HQUw5QiwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ2hCdkMsMEJBQUk7UUFBQSxxQ0FBcUI7UUFBQSxpQkFBSztRQUM5Qix5QkFBRztRQUFBLFlBQWdDO1FBQUEsaUJBQUk7UUFDdkMseUJBQUc7UUFBQSxZQUF3QjtRQUFBLGlCQUFJO1FBQy9CLHlCQUFHO1FBQUEsWUFBZ0M7UUFBQSxpQkFBSTtRQUN2Qyx5QkFBRztRQUFBLFlBQTRCO1FBQUEsaUJBQUk7UUFDbkMsMEJBQUc7UUFBQSxhQUE4QjtRQUFBLGlCQUFJO1FBQ3JDLDBCQUFHO1FBQUEsYUFBZ0M7UUFBQSxpQkFBSTtRQUN2QywwQkFBRztRQUFBLGFBQTBCO1FBQUEsaUJBQUk7UUFDakMsMEJBQUc7UUFBQSxhQUE4QjtRQUFBLGlCQUFJO1FBQ3JDLDBCQUFHO1FBQUEsYUFBOEM7UUFBQSxpQkFBSTtRQUNyRCwwQkFBRztRQUFBLGFBQW1FO1FBQUEsaUJBQUk7UUFDMUUsMEJBQUc7UUFBQSxhQUFvRDtRQUFBLGlCQUFJOztRQVZ4RCxlQUFnQztRQUFoQywrREFBZ0M7UUFDaEMsZUFBd0I7UUFBeEIsdURBQXdCO1FBQ3hCLGVBQWdDO1FBQWhDLCtEQUFnQztRQUNoQyxlQUE0QjtRQUE1QiwyREFBNEI7UUFDNUIsZUFBOEI7UUFBOUIsNkRBQThCO1FBQzlCLGVBQWdDO1FBQWhDLCtEQUFnQztRQUNoQyxlQUEwQjtRQUExQix5REFBMEI7UUFDMUIsZUFBOEI7UUFBOUIsNkRBQThCO1FBQzlCLGVBQThDO1FBQTlDLDZFQUE4QztRQUM5QyxlQUFtRTtRQUFuRSxrR0FBbUU7UUFDbkUsZUFBb0Q7UUFBcEQsbUZBQW9EOztrRERLMUMsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldFN1cHBvcnRlZElucHV0VHlwZXMsXG4gIFBsYXRmb3JtLFxuICBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyxcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuLyoqXG4gKiBAdGl0bGUgUGxhdGZvcm0gb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1BsYXRmb3JtT3ZlcnZpZXdFeGFtcGxlIHtcbiAgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IEFycmF5LmZyb20oZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcygpKS5qb2luKCcsICcpO1xuICBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IgPSBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cbn1cbiIsIjxoMj5QbGF0Zm9ybSBpbmZvcm1hdGlvbjo8L2gyPlxuPHA+SXMgQW5kcm9pZDoge3twbGF0Zm9ybS5BTkRST0lEfX08L3A+XG48cD5JcyBpT1M6IHt7cGxhdGZvcm0uSU9TfX08L3A+XG48cD5JcyBGaXJlZm94OiB7e3BsYXRmb3JtLkZJUkVGT1h9fTwvcD5cbjxwPklzIEJsaW5rOiB7e3BsYXRmb3JtLkJMSU5LfX08L3A+XG48cD5JcyBXZWJraXQ6IHt7cGxhdGZvcm0uV0VCS0lUfX08L3A+XG48cD5JcyBUcmlkZW50OiB7e3BsYXRmb3JtLlRSSURFTlR9fTwvcD5cbjxwPklzIEVkZ2U6IHt7cGxhdGZvcm0uRURHRX19PC9wPlxuPHA+SXMgU2FmYXJpOiB7e3BsYXRmb3JtLlNBRkFSSX19PC9wPlxuPHA+U3VwcG9ydGVkIGlucHV0IHR5cGVzOiB7e3N1cHBvcnRlZElucHV0VHlwZXN9fTwvcD5cbjxwPlN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzOiB7e3N1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzfX08L3A+XG48cD5TdXBwb3J0cyBzY3JvbGwgYmVoYXZpb3I6IHt7c3VwcG9ydHNTY3JvbGxCZWhhdmlvcn19PC9wPlxuIl19