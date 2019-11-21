import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
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
    TooltipModifiedDefaultsExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-modified-defaults-example',
                    templateUrl: 'tooltip-modified-defaults-example.html',
                    styleUrls: ['tooltip-modified-defaults-example.css'],
                    providers: [
                        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                    ],
                },] },
    ];
    TooltipModifiedDefaultsExample.ɵfac = function TooltipModifiedDefaultsExample_Factory(t) { return new (t || TooltipModifiedDefaultsExample)(); };
    TooltipModifiedDefaultsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipModifiedDefaultsExample, selectors: [["tooltip-modified-defaults-example"]], features: [i0.ɵɵProvidersFeature([
                { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
            ])], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "By default, I delay", "aria-label", "Button that displays a tooltip that has custom delays through a default config"]], template: function TooltipModifiedDefaultsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Button with delay-default tooltip\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatButton, i2.MatTooltip], styles: [""] });
    return TooltipModifiedDefaultsExample;
}());
export { TooltipModifiedDefaultsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipModifiedDefaultsExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-modified-defaults-example',
                templateUrl: 'tooltip-modified-defaults-example.html',
                styleUrls: ['tooltip-modified-defaults-example.css'],
                providers: [
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQywyQkFBMkIsRUFBMkIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUVoRywyRUFBMkU7QUFDM0UsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQTZCO0lBQy9ELFNBQVMsRUFBRSxJQUFJO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixpQkFBaUIsRUFBRSxJQUFJO0NBQ3hCLENBQUM7QUFFRjs7R0FFRztBQUNIO0lBQUE7S0FROEM7O2dCQVI3QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsV0FBVyxFQUFFLHdDQUF3QztvQkFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7b0JBQ3BELFNBQVMsRUFBRTt3QkFDVCxFQUFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7cUJBQzFFO2lCQUNGOztnSEFDWSw4QkFBOEI7dUVBQTlCLDhCQUE4Qix1RkFKOUI7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO2FBQzFFO1lDbkJILGlDQUdFO1lBQUEsb0RBQ0Y7WUFBQSxpQkFBUzs7eUNESlQ7Q0FxQjhDLEFBUjlDLElBUThDO1NBQWpDLDhCQUE4QjtrREFBOUIsOEJBQThCO2NBUjFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDcEQsU0FBUyxFQUFFO29CQUNULEVBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztpQkFDMUU7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX1RPT0xUSVBfREVGQVVMVF9PUFRJT05TLCBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG4vKiogQ3VzdG9tIG9wdGlvbnMgdGhlIGNvbmZpZ3VyZSB0aGUgdG9vbHRpcCdzIGRlZmF1bHQgc2hvdy9oaWRlIGRlbGF5cy4gKi9cbmV4cG9ydCBjb25zdCBteUN1c3RvbVRvb2x0aXBEZWZhdWx0czogTWF0VG9vbHRpcERlZmF1bHRPcHRpb25zID0ge1xuICBzaG93RGVsYXk6IDEwMDAsXG4gIGhpZGVEZWxheTogMTAwMCxcbiAgdG91Y2hlbmRIaWRlRGVsYXk6IDEwMDAsXG59O1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHdpdGggYSBzaG93IGFuZCBoaWRlIGRlbGF5XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogTUFUX1RPT0xUSVBfREVGQVVMVF9PUFRJT05TLCB1c2VWYWx1ZTogbXlDdXN0b21Ub29sdGlwRGVmYXVsdHN9XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBtYXRUb29sdGlwPVwiQnkgZGVmYXVsdCwgSSBkZWxheVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgdGhhdCBoYXMgY3VzdG9tIGRlbGF5cyB0aHJvdWdoIGEgZGVmYXVsdCBjb25maWdcIj5cbiAgQnV0dG9uIHdpdGggZGVsYXktZGVmYXVsdCB0b29sdGlwXG48L2J1dHRvbj5cbiJdfQ==