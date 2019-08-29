import { Component, ViewEncapsulation } from '@angular/core';
/**
 * @title Tooltip that can have a custom class applied.
 */
var TooltipCustomClassExample = /** @class */ (function () {
    function TooltipCustomClassExample() {
    }
    TooltipCustomClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-custom-class-example',
                    template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n",
                    // Need to remove view encapsulation so that the custom tooltip style defined in
                    // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                    encapsulation: ViewEncapsulation.None,
                    styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"]
                }] }
    ];
    return TooltipCustomClassExample;
}());
export { TooltipCustomClassExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtY3VzdG9tLWNsYXNzL3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzRDs7R0FFRztBQUNIO0lBQUE7SUFRd0MsQ0FBQzs7Z0JBUnhDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxrUUFBZ0Q7b0JBRWhELGdGQUFnRjtvQkFDaEYsa0ZBQWtGO29CQUNsRixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOztJQUN1QyxnQ0FBQztDQUFBLEFBUnpDLElBUXlDO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBjYW4gaGF2ZSBhIGN1c3RvbSBjbGFzcyBhcHBsaWVkLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5jc3MnXSxcbiAgLy8gTmVlZCB0byByZW1vdmUgdmlldyBlbmNhcHN1bGF0aW9uIHNvIHRoYXQgdGhlIGN1c3RvbSB0b29sdGlwIHN0eWxlIGRlZmluZWQgaW5cbiAgLy8gYHRvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUuY3NzYCB3aWxsIG5vdCBiZSBzY29wZWQgdG8gdGhpcyBjb21wb25lbnQncyB2aWV3LlxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlIHt9XG4iXX0=