/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Tooltip that can be manually shown/hidden.
 */
export class TooltipManualExample {
}
TooltipManualExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-manual-example',
                template: "<div>\n  <span> Mouse over to </span>\n  <button mat-button\n          (mouseenter)=\"tooltip.show()\"\n          aria-label=\"Button that progamatically shows a tooltip on another button\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (mouseenter)=\"tooltip.hide()\"\n          aria-label=\"Button that progamatically hides a tooltip on another button\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (mouseenter)=\"tooltip.toggle()\"\n          aria-label=\"Button that progamatically toggles a tooltip on another button to show/hide\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>\n",
                styles: [".example-action-button {\n  margin-top: 16px;\n}\n"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90b29sdGlwLW1hbnVhbC90b29sdGlwLW1hbnVhbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyxvQkFBb0I7OztZQUxoQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMscytCQUEwQzs7YUFFM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBjYW4gYmUgbWFudWFsbHkgc2hvd24vaGlkZGVuLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLW1hbnVhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW1hbnVhbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tYW51YWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1hbnVhbEV4YW1wbGUge31cbiJdfQ==