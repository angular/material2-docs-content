import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
/**
 * @title Tooltip that can have a custom class applied.
 */
var TooltipCustomClassExample = /** @class */ (function () {
    function TooltipCustomClassExample() {
    }
    TooltipCustomClassExample = tslib_1.__decorate([
        Component({
            selector: 'tooltip-custom-class-example',
            template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n",
            // Need to remove view encapsulation so that the custom tooltip style defined in
            // `tooltip-custom-class-example.css` will not be scoped to this component's view.
            encapsulation: ViewEncapsulation.None,
            styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"]
        })
    ], TooltipCustomClassExample);
    return TooltipCustomClassExample;
}());
export { TooltipCustomClassExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtY3VzdG9tLWNsYXNzL3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0Q7O0dBRUc7QUFTSDtJQUFBO0lBQXdDLENBQUM7SUFBNUIseUJBQXlCO1FBUnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsa1FBQWdEO1lBRWhELGdGQUFnRjtZQUNoRixrRkFBa0Y7WUFDbEYsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyx5QkFBeUIsQ0FBRztJQUFELGdDQUFDO0NBQUEsQUFBekMsSUFBeUM7U0FBNUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGNhbiBoYXZlIGEgY3VzdG9tIGNsYXNzIGFwcGxpZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlLmNzcyddLFxuICAvLyBOZWVkIHRvIHJlbW92ZSB2aWV3IGVuY2Fwc3VsYXRpb24gc28gdGhhdCB0aGUgY3VzdG9tIHRvb2x0aXAgc3R5bGUgZGVmaW5lZCBpblxuICAvLyBgdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5jc3NgIHdpbGwgbm90IGJlIHNjb3BlZCB0byB0aGlzIGNvbXBvbmVudCdzIHZpZXcuXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGUge31cbiJdfQ==