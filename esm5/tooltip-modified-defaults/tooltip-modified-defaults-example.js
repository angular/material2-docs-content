import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material';
/** Custom options the configure the tooltip's default show/hide delays. */
export var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * @title Tooltip with a show and hide delay
 */
var TooltipModifiedDefaultsExample = /** @class */ (function () {
    function TooltipModifiedDefaultsExample() {
    }
    TooltipModifiedDefaultsExample = tslib_1.__decorate([
        Component({
            selector: 'tooltip-modified-defaults-example',
            template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n",
            providers: [
                { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
            ],
            styles: ["/** No CSS for this example */\n"]
        })
    ], TooltipModifiedDefaultsExample);
    return TooltipModifiedDefaultsExample;
}());
export { TooltipModifiedDefaultsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQywyQkFBMkIsRUFBMkIsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RiwyRUFBMkU7QUFDM0UsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQTZCO0lBQy9ELFNBQVMsRUFBRSxJQUFJO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixpQkFBaUIsRUFBRSxJQUFJO0NBQ3hCLENBQUM7QUFFRjs7R0FFRztBQVNIO0lBQUE7SUFBNkMsQ0FBQztJQUFqQyw4QkFBOEI7UUFSMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1DQUFtQztZQUM3QywyT0FBcUQ7WUFFckQsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQzthQUMxRTs7U0FDRixDQUFDO09BQ1csOEJBQThCLENBQUc7SUFBRCxxQ0FBQztDQUFBLEFBQTlDLElBQThDO1NBQWpDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX1RPT0xUSVBfREVGQVVMVF9PUFRJT05TLCBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLyoqIEN1c3RvbSBvcHRpb25zIHRoZSBjb25maWd1cmUgdGhlIHRvb2x0aXAncyBkZWZhdWx0IHNob3cvaGlkZSBkZWxheXMuICovXG5leHBvcnQgY29uc3QgbXlDdXN0b21Ub29sdGlwRGVmYXVsdHM6IE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9ucyA9IHtcbiAgc2hvd0RlbGF5OiAxMDAwLFxuICBoaWRlRGVsYXk6IDEwMDAsXG4gIHRvdWNoZW5kSGlkZURlbGF5OiAxMDAwLFxufTtcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB3aXRoIGEgc2hvdyBhbmQgaGlkZSBkZWxheVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE1BVF9UT09MVElQX0RFRkFVTFRfT1BUSU9OUywgdXNlVmFsdWU6IG15Q3VzdG9tVG9vbHRpcERlZmF1bHRzfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGUge31cbiJdfQ==