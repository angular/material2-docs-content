import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
/** @title Fixed size virtual scroll with custom buffer parameters */
var CdkVirtualScrollFixedBufferExample = /** @class */ (function () {
    function CdkVirtualScrollFixedBufferExample() {
        this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
    }
    CdkVirtualScrollFixedBufferExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-virtual-scroll-fixed-buffer-example',
            template: "<cdk-virtual-scroll-viewport itemSize=\"50\" minBufferPx=\"200\" maxBufferPx=\"400\"\n                             class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
        })
    ], CdkVirtualScrollFixedBufferExample);
    return CdkVirtualScrollFixedBufferExample;
}());
export { CdkVirtualScrollFixedBufferExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWZpeGVkLWJ1ZmZlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWZpeGVkLWJ1ZmZlci9jZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakUscUVBQXFFO0FBT3JFO0lBTkE7UUFPRSxVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxXQUFTLENBQUcsRUFBWixDQUFZLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRlksa0NBQWtDO1FBTjlDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5Q0FBeUM7WUFFbkQsK1FBQTJEO1lBQzNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csa0NBQWtDLENBRTlDO0lBQUQseUNBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEZpeGVkIHNpemUgdmlydHVhbCBzY3JvbGwgd2l0aCBjdXN0b20gYnVmZmVyIHBhcmFtZXRlcnMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1maXhlZC1idWZmZXItZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWZpeGVkLWJ1ZmZlci1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbEZpeGVkQnVmZmVyRXhhbXBsZSB7XG4gIGl0ZW1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDAwMDB9KS5tYXAoKF8sIGkpID0+IGBJdGVtICMke2l9YCk7XG59XG4iXX0=