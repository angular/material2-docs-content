/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}
/**
 * \@title Virtual scroll with a custom strategy
 */
export class CdkVirtualScrollCustomStrategyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollCustomStrategyExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                template: "<cdk-virtual-scroll-viewport class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }],
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkVirtualScrollCustomStrategyExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3kvY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsOEJBQThCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSw4QkFBOEI7SUFDN0U7UUFDRSxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7Ozs7QUFVRCxNQUFNLE9BQU8scUNBQXFDO0lBUGxEO1FBUUUsVUFBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0Q0FBNEM7Z0JBRXRELHlMQUE4RDtnQkFDOUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBQyxDQUFDOzthQUN2Rjs7OztJQUVDLHNEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5LCBWSVJUVUFMX1NDUk9MTF9TVFJBVEVHWX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmlydHVhbFNjcm9sbFN0cmF0ZWd5IGV4dGVuZHMgRml4ZWRTaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoNTAsIDI1MCwgNTAwKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIHdpdGggYSBjdXN0b20gc3RyYXRlZ3kgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3ktZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFZJUlRVQUxfU0NST0xMX1NUUkFURUdZLCB1c2VDbGFzczogQ3VzdG9tVmlydHVhbFNjcm9sbFN0cmF0ZWd5fV1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbEN1c3RvbVN0cmF0ZWd5RXhhbXBsZSB7XG4gIGl0ZW1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDAwMDB9KS5tYXAoKF8sIGkpID0+IGBJdGVtICMke2l9YCk7XG59XG4iXX0=