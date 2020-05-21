import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * @title Platform overview
 */
let CdkPlatformOverviewExample = /** @class */ (() => {
    class CdkPlatformOverviewExample {
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
    return CdkPlatformOverviewExample;
})();
export { CdkPlatformOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPlatformOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-platform-overview-example',
                templateUrl: 'cdk-platform-overview-example.html',
                styleUrls: ['cdk-platform-overview-example.css'],
            }]
    }], function () { return [{ type: i1.Platform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsNkJBQTZCLEVBQzdCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0I7O0dBRUc7QUFDSDtJQUFBLE1BS2EsMEJBQTBCO1FBS3JDLFlBQW1CLFFBQWtCO1lBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7WUFKckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RFLGtDQUE2QixHQUFHLDZCQUE2QixFQUFFLENBQUM7WUFDaEUsMkJBQXNCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztRQUVWLENBQUM7O3dHQUw5QiwwQkFBMEI7bUVBQTFCLDBCQUEwQjtZQ2hCdkMsMEJBQUk7WUFBQSxxQ0FBcUI7WUFBQSxpQkFBSztZQUM5Qix5QkFBRztZQUFBLFlBQWdDO1lBQUEsaUJBQUk7WUFDdkMseUJBQUc7WUFBQSxZQUF3QjtZQUFBLGlCQUFJO1lBQy9CLHlCQUFHO1lBQUEsWUFBZ0M7WUFBQSxpQkFBSTtZQUN2Qyx5QkFBRztZQUFBLFlBQTRCO1lBQUEsaUJBQUk7WUFDbkMsMEJBQUc7WUFBQSxhQUE4QjtZQUFBLGlCQUFJO1lBQ3JDLDBCQUFHO1lBQUEsYUFBZ0M7WUFBQSxpQkFBSTtZQUN2QywwQkFBRztZQUFBLGFBQTBCO1lBQUEsaUJBQUk7WUFDakMsMEJBQUc7WUFBQSxhQUE4QjtZQUFBLGlCQUFJO1lBQ3JDLDBCQUFHO1lBQUEsYUFBOEM7WUFBQSxpQkFBSTtZQUNyRCwwQkFBRztZQUFBLGFBQW1FO1lBQUEsaUJBQUk7WUFDMUUsMEJBQUc7WUFBQSxhQUFvRDtZQUFBLGlCQUFJOztZQVZ4RCxlQUFnQztZQUFoQywrREFBZ0M7WUFDaEMsZUFBd0I7WUFBeEIsdURBQXdCO1lBQ3hCLGVBQWdDO1lBQWhDLCtEQUFnQztZQUNoQyxlQUE0QjtZQUE1QiwyREFBNEI7WUFDNUIsZUFBOEI7WUFBOUIsNkRBQThCO1lBQzlCLGVBQWdDO1lBQWhDLCtEQUFnQztZQUNoQyxlQUEwQjtZQUExQix5REFBMEI7WUFDMUIsZUFBOEI7WUFBOUIsNkRBQThCO1lBQzlCLGVBQThDO1lBQTlDLDZFQUE4QztZQUM5QyxlQUFtRTtZQUFuRSxrR0FBbUU7WUFDbkUsZUFBb0Q7WUFBcEQsbUZBQW9EOztxQ0RYdkQ7S0FzQkM7U0FOWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzLFxuICBQbGF0Zm9ybSxcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMsXG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbi8qKlxuICogQHRpdGxlIFBsYXRmb3JtIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQbGF0Zm9ybU92ZXJ2aWV3RXhhbXBsZSB7XG4gIHN1cHBvcnRlZElucHV0VHlwZXMgPSBBcnJheS5mcm9tKGdldFN1cHBvcnRlZElucHV0VHlwZXMoKSkuam9pbignLCAnKTtcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpO1xuICBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yID0gc3VwcG9ydHNTY3JvbGxCZWhhdmlvcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG59XG4iLCI8aDI+UGxhdGZvcm0gaW5mb3JtYXRpb246PC9oMj5cbjxwPklzIEFuZHJvaWQ6IHt7cGxhdGZvcm0uQU5EUk9JRH19PC9wPlxuPHA+SXMgaU9TOiB7e3BsYXRmb3JtLklPU319PC9wPlxuPHA+SXMgRmlyZWZveDoge3twbGF0Zm9ybS5GSVJFRk9YfX08L3A+XG48cD5JcyBCbGluazoge3twbGF0Zm9ybS5CTElOS319PC9wPlxuPHA+SXMgV2Via2l0OiB7e3BsYXRmb3JtLldFQktJVH19PC9wPlxuPHA+SXMgVHJpZGVudDoge3twbGF0Zm9ybS5UUklERU5UfX08L3A+XG48cD5JcyBFZGdlOiB7e3BsYXRmb3JtLkVER0V9fTwvcD5cbjxwPklzIFNhZmFyaToge3twbGF0Zm9ybS5TQUZBUkl9fTwvcD5cbjxwPlN1cHBvcnRlZCBpbnB1dCB0eXBlczoge3tzdXBwb3J0ZWRJbnB1dFR5cGVzfX08L3A+XG48cD5TdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyczoge3tzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc319PC9wPlxuPHA+U3VwcG9ydHMgc2Nyb2xsIGJlaGF2aW9yOiB7e3N1cHBvcnRzU2Nyb2xsQmVoYXZpb3J9fTwvcD5cbiJdfQ==