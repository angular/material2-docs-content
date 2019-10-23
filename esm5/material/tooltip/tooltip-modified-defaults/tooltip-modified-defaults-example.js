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
/*@__PURE__*/ i0.ɵsetClassMetadata(TooltipModifiedDefaultsExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-modified-defaults-example',
                templateUrl: 'tooltip-modified-defaults-example.html',
                styleUrls: ['tooltip-modified-defaults-example.css'],
                providers: [
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                ],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLDJCQUEyQixFQUEyQixNQUFNLDJCQUEyQixDQUFDOzs7O0FBRWhHLDJFQUEyRTtBQUMzRSxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBNkI7SUFDL0QsU0FBUyxFQUFFLElBQUk7SUFDZixTQUFTLEVBQUUsSUFBSTtJQUNmLGlCQUFpQixFQUFFLElBQUk7Q0FDeEIsQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBQTtLQVE4Qzs7Z0JBUjdDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxXQUFXLEVBQUUsd0NBQXdDO29CQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztvQkFDcEQsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztxQkFDMUU7aUJBQ0Y7O2dIQUNZLDhCQUE4Qjt1RUFBOUIsOEJBQThCLHVGQUo5QjtnQkFDVCxFQUFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7YUFDMUU7WUNuQkgsaUNBR0U7WUFBQSxvREFDRjtZQUFBLGlCQUFTOzt5Q0RKVDtDQXFCOEMsQUFSOUMsSUFROEM7U0FBakMsOEJBQThCO21DQUE5Qiw4QkFBOEI7Y0FSMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2dCQUNwRCxTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO2lCQUMxRTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlMsIE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbi8qKiBDdXN0b20gb3B0aW9ucyB0aGUgY29uZmlndXJlIHRoZSB0b29sdGlwJ3MgZGVmYXVsdCBzaG93L2hpZGUgZGVsYXlzLiAqL1xuZXhwb3J0IGNvbnN0IG15Q3VzdG9tVG9vbHRpcERlZmF1bHRzOiBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnMgPSB7XG4gIHNob3dEZWxheTogMTAwMCxcbiAgaGlkZURlbGF5OiAxMDAwLFxuICB0b3VjaGVuZEhpZGVEZWxheTogMTAwMCxcbn07XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIHNob3cgYW5kIGhpZGUgZGVsYXlcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlMsIHVzZVZhbHVlOiBteUN1c3RvbVRvb2x0aXBEZWZhdWx0c31cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIG1hdFRvb2x0aXA9XCJCeSBkZWZhdWx0LCBJIGRlbGF5XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB0aGF0IGhhcyBjdXN0b20gZGVsYXlzIHRocm91Z2ggYSBkZWZhdWx0IGNvbmZpZ1wiPlxuICBCdXR0b24gd2l0aCBkZWxheS1kZWZhdWx0IHRvb2x0aXBcbjwvYnV0dG9uPlxuIl19