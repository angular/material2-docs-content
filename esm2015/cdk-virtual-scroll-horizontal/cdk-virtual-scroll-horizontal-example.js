/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
/**
 * \@title Horizontal virtual scroll
 */
export class CdkVirtualScrollHorizontalExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollHorizontalExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-horizontal-example',
                template: "<div class=\"cdk-virtual-scroll-data-source-example\">\n  <cdk-virtual-scroll-viewport orientation=\"horizontal\" itemSize=\"50\" class=\"example-viewport\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkVirtualScrollHorizontalExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC9jZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXBGLE1BQU0sT0FBTyxpQ0FBaUM7SUFQOUM7UUFRRSxVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUFUQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFFakQsMFNBQXlEO2dCQUN6RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O0lBRUMsa0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgSG9yaXpvbnRhbCB2aXJ0dWFsIHNjcm9sbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtaG9yaXpvbnRhbC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1ob3Jpem9udGFsLWV4YW1wbGUuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbEV4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIl19