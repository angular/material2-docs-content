import * as tslib_1 from "tslib";
import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';
var CustomVirtualScrollStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(CustomVirtualScrollStrategy, _super);
    function CustomVirtualScrollStrategy() {
        return _super.call(this, 50, 250, 500) || this;
    }
    return CustomVirtualScrollStrategy;
}(FixedSizeVirtualScrollStrategy));
export { CustomVirtualScrollStrategy };
/** @title Virtual scroll with a custom strategy */
var CdkVirtualScrollCustomStrategyExample = /** @class */ (function () {
    function CdkVirtualScrollCustomStrategyExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
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
    return CdkVirtualScrollCustomStrategyExample;
}());
export { CdkVirtualScrollCustomStrategyExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS9jZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyw4QkFBOEIsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9GLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakU7SUFBaUQsdURBQThCO0lBQzdFO2VBQ0Usa0JBQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0FBQyxBQUpELENBQWlELDhCQUE4QixHQUk5RTs7QUFFRCxtREFBbUQ7QUFDbkQ7SUFBQTtRQVFFLFVBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLFdBQVMsQ0FBRyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNENBQTRDO29CQUV0RCx5TEFBOEQ7b0JBQzlELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQzs7aUJBQ3ZGOztJQUdELDRDQUFDO0NBQUEsQUFURCxJQVNDO1NBRlkscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXhlZFNpemVWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3ksIFZJUlRVQUxfU0NST0xMX1NUUkFURUdZfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kgZXh0ZW5kcyBGaXhlZFNpemVWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcig1MCwgMjUwLCA1MDApO1xuICB9XG59XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGwgd2l0aCBhIGN1c3RvbSBzdHJhdGVneSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWN1c3RvbS1zdHJhdGVneS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3ktZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5LWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogVklSVFVBTF9TQ1JPTExfU1RSQVRFR1ksIHVzZUNsYXNzOiBDdXN0b21WaXJ0dWFsU2Nyb2xsU3RyYXRlZ3l9XVxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsQ3VzdG9tU3RyYXRlZ3lFeGFtcGxlIHtcbiAgaXRlbXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMDAwMH0pLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7aX1gKTtcbn1cbiJdfQ==