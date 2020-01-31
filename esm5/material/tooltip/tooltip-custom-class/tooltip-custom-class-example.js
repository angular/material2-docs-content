import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can have a custom class applied.
 */
var TooltipCustomClassExample = /** @class */ (function () {
    function TooltipCustomClassExample() {
    }
    TooltipCustomClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-custom-class-example',
                    templateUrl: 'tooltip-custom-class-example.html',
                    styleUrls: ['tooltip-custom-class-example.css'],
                    // Need to remove view encapsulation so that the custom tooltip style defined in
                    // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    TooltipCustomClassExample.ɵfac = function TooltipCustomClassExample_Factory(t) { return new (t || TooltipCustomClassExample)(); };
    TooltipCustomClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipCustomClassExample, selectors: [["tooltip-custom-class-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 1, "example-button"]], template: function TooltipCustomClassExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Red-tooltip Action\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatButton, i2.MatTooltip], styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"], encapsulation: 2 });
    return TooltipCustomClassExample;
}());
export { TooltipCustomClassExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipCustomClassExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-custom-class-example',
                templateUrl: 'tooltip-custom-class-example.html',
                styleUrls: ['tooltip-custom-class-example.css'],
                // Need to remove view encapsulation so that the custom tooltip style defined in
                // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFM0Q7O0dBRUc7QUFDSDtJQUFBO0tBUXlDOztnQkFSeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7b0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO29CQUMvQyxnRkFBZ0Y7b0JBQ2hGLGtGQUFrRjtvQkFDbEYsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztzR0FDWSx5QkFBeUI7a0VBQXpCLHlCQUF5QjtZQ2J0QyxpQ0FLRTtZQUFBLHFDQUNGO1lBQUEsaUJBQVM7O29DRE5UO0NBYXlDLEFBUnpDLElBUXlDO1NBQTVCLHlCQUF5QjtrREFBekIseUJBQXlCO2NBUnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsZ0ZBQWdGO2dCQUNoRixrRkFBa0Y7Z0JBQ2xGLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGNhbiBoYXZlIGEgY3VzdG9tIGNsYXNzIGFwcGxpZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlLmNzcyddLFxuICAvLyBOZWVkIHRvIHJlbW92ZSB2aWV3IGVuY2Fwc3VsYXRpb24gc28gdGhhdCB0aGUgY3VzdG9tIHRvb2x0aXAgc3R5bGUgZGVmaW5lZCBpblxuICAvLyBgdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5jc3NgIHdpbGwgbm90IGJlIHNjb3BlZCB0byB0aGlzIGNvbXBvbmVudCdzIHZpZXcuXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGUge31cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXG4gICAgICAgIG1hdFRvb2x0aXBDbGFzcz1cImV4YW1wbGUtdG9vbHRpcC1yZWRcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgc2hvd3MgYSByZWQgdG9vbHRpcFwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1idXR0b25cIj5cbiAgUmVkLXRvb2x0aXAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==