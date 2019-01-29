import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Tooltip with a show and hide delay
 */
var TooltipDelayExample = /** @class */ (function () {
    function TooltipDelayExample() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
    TooltipDelayExample = tslib_1.__decorate([
        Component({
            selector: 'tooltip-delay-example',
            template: "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Show delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\"\n         [formControl]=\"showDelay\">\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Hide delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\"\n         [formControl]=\"hideDelay\">\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n",
            styles: [".example-user-input {\n  display: block;\n  width: 150px;\n}\n"]
        })
    ], TooltipDelayExample);
    return TooltipDelayExample;
}());
export { TooltipDelayExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3Rvb2x0aXAtZGVsYXkvdG9vbHRpcC1kZWxheS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQzs7R0FFRztBQU1IO0lBTEE7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFIWSxtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQywrM0JBQXlDOztTQUUxQyxDQUFDO09BQ1csbUJBQW1CLENBRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIHNob3cgYW5kIGhpZGUgZGVsYXlcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1kZWxheS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWRlbGF5LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEZWxheUV4YW1wbGUge1xuICBzaG93RGVsYXkgPSBuZXcgRm9ybUNvbnRyb2woMTAwMCk7XG4gIGhpZGVEZWxheSA9IG5ldyBGb3JtQ29udHJvbCgyMDAwKTtcbn1cbiJdfQ==