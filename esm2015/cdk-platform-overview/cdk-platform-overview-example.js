/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
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
                template: "<h3>Platform information:</h3>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
CdkPlatformOverviewExample.ctorParameters = () => [
    { type: Platform }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsUUFBUSxFQUNSLDZCQUE2QixFQUM3QixzQkFBc0IsR0FDdkIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQVUvQixNQUFNLE9BQU8sMEJBQTBCOzs7O0lBS3JDLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGtDQUE2QixHQUFHLDZCQUE2QixFQUFFLENBQUM7UUFDaEUsMkJBQXNCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUVWLENBQUM7OztZQVYxQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsdWZBQWlEOzthQUVsRDs7OztZQVpDLFFBQVE7Ozs7SUFjUix5REFBc0U7O0lBQ3RFLG1FQUFnRTs7SUFDaEUsNERBQWtEOztJQUV0Qyw4Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzLFxuICBQbGF0Zm9ybSxcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMsXG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbi8qKlxuICogQHRpdGxlIFBsYXRmb3JtIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQbGF0Zm9ybU92ZXJ2aWV3RXhhbXBsZSB7XG4gIHN1cHBvcnRlZElucHV0VHlwZXMgPSBBcnJheS5mcm9tKGdldFN1cHBvcnRlZElucHV0VHlwZXMoKSkuam9pbignLCAnKTtcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpO1xuICBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yID0gc3VwcG9ydHNTY3JvbGxCZWhhdmlvcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG59XG4iXX0=