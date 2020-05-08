/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tooltip/tooltip-custom-class/tooltip-custom-class-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * \@title Tooltip that can have a custom class applied.
 */
export class TooltipCustomClassExample {
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
/** @nocollapse */ TooltipCustomClassExample.ɵfac = function TooltipCustomClassExample_Factory(t) { return new (t || TooltipCustomClassExample)(); };
/** @nocollapse */ TooltipCustomClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipCustomClassExample, selectors: [["tooltip-custom-class-example"]], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipClass", "example-tooltip-red", "aria-label", "Button that shows a red tooltip", 1, "example-button"]], template: function TooltipCustomClassExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, " Red-tooltip Action\n");
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton, i2.MatTooltip], styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQWEzRCxNQUFNLE9BQU8seUJBQXlCOzs7WUFSckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDOzs7Z0JBRy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztxSEFDWSx5QkFBeUI7aUZBQXpCLHlCQUF5QjtRQ2J0QyxpQ0FLRTtRQUFBLHFDQUNGO1FBQUEsaUJBQVM7O2tERE9JLHlCQUF5QjtjQVJyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7OztnQkFHL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgY2FuIGhhdmUgYSBjdXN0b20gY2xhc3MgYXBwbGllZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUuY3NzJ10sXG4gIC8vIE5lZWQgdG8gcmVtb3ZlIHZpZXcgZW5jYXBzdWxhdGlvbiBzbyB0aGF0IHRoZSBjdXN0b20gdG9vbHRpcCBzdHlsZSBkZWZpbmVkIGluXG4gIC8vIGB0b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlLmNzc2Agd2lsbCBub3QgYmUgc2NvcGVkIHRvIHRoaXMgY29tcG9uZW50J3Mgdmlldy5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgbWF0VG9vbHRpcENsYXNzPVwiZXhhbXBsZS10b29sdGlwLXJlZFwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBzaG93cyBhIHJlZCB0b29sdGlwXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLWJ1dHRvblwiPlxuICBSZWQtdG9vbHRpcCBBY3Rpb25cbjwvYnV0dG9uPlxuIl19