import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQywyQkFBMkIsRUFBMkIsTUFBTSwyQkFBMkIsQ0FBQztBQUVoRywyRUFBMkU7QUFDM0UsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQTZCO0lBQy9ELFNBQVMsRUFBRSxJQUFJO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixpQkFBaUIsRUFBRSxJQUFJO0NBQ3hCLENBQUM7QUFFRjs7R0FFRztBQVNIO0lBQUE7SUFBNkMsQ0FBQztJQUFqQyw4QkFBOEI7UUFSMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1DQUFtQztZQUM3QywyT0FBcUQ7WUFFckQsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQzthQUMxRTs7U0FDRixDQUFDO09BQ1csOEJBQThCLENBQUc7SUFBRCxxQ0FBQztDQUFBLEFBQTlDLElBQThDO1NBQWpDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX1RPT0xUSVBfREVGQVVMVF9PUFRJT05TLCBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG4vKiogQ3VzdG9tIG9wdGlvbnMgdGhlIGNvbmZpZ3VyZSB0aGUgdG9vbHRpcCdzIGRlZmF1bHQgc2hvdy9oaWRlIGRlbGF5cy4gKi9cbmV4cG9ydCBjb25zdCBteUN1c3RvbVRvb2x0aXBEZWZhdWx0czogTWF0VG9vbHRpcERlZmF1bHRPcHRpb25zID0ge1xuICBzaG93RGVsYXk6IDEwMDAsXG4gIGhpZGVEZWxheTogMTAwMCxcbiAgdG91Y2hlbmRIaWRlRGVsYXk6IDEwMDAsXG59O1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHdpdGggYSBzaG93IGFuZCBoaWRlIGRlbGF5XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogTUFUX1RPT0xUSVBfREVGQVVMVF9PUFRJT05TLCB1c2VWYWx1ZTogbXlDdXN0b21Ub29sdGlwRGVmYXVsdHN9XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZSB7fVxuIl19