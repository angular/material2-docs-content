import { ChangeDetectionStrategy, Component } from '@angular/core';
/** @title Virtual scroll with no template caching */
var CdkVirtualScrollTemplateCacheExample = /** @class */ (function () {
    function CdkVirtualScrollTemplateCacheExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollTemplateCacheExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-virtual-scroll-template-cache-example',
                    template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
                }] }
    ];
    return CdkVirtualScrollTemplateCacheExample;
}());
export { CdkVirtualScrollTemplateCacheExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtdGVtcGxhdGUtY2FjaGUvY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVqRSxxREFBcUQ7QUFDckQ7SUFBQTtRQU9FLFVBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLFdBQVMsQ0FBRyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkNBQTJDO29CQUVyRCwrTkFBNkQ7b0JBQzdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7O0lBR0QsMkNBQUM7Q0FBQSxBQVJELElBUUM7U0FGWSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIHdpdGggbm8gdGVtcGxhdGUgY2FjaGluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsVGVtcGxhdGVDYWNoZUV4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIl19