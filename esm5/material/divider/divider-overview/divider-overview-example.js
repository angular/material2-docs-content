import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/divider";
/**
 * @title Basic divider
 */
var DividerOverviewExample = /** @class */ (function () {
    function DividerOverviewExample() {
    }
    DividerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'divider-overview-example',
                    templateUrl: 'divider-overview-example.html',
                    styleUrls: ['divider-overview-example.css'],
                },] },
    ];
    DividerOverviewExample.ɵfac = function DividerOverviewExample_Factory(t) { return new (t || DividerOverviewExample)(); };
    DividerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DividerOverviewExample, selectors: [["divider-overview-example"]], decls: 9, vars: 0, template: function DividerOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list");
            i0.ɵɵelementStart(1, "mat-list-item");
            i0.ɵɵtext(2, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "mat-divider");
            i0.ɵɵelementStart(4, "mat-list-item");
            i0.ɵɵtext(5, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "mat-divider");
            i0.ɵɵelementStart(7, "mat-list-item");
            i0.ɵɵtext(8, "Item 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatList, i1.MatListItem, i2.MatDivider], styles: [""] });
    return DividerOverviewExample;
}());
export { DividerOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DividerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'divider-overview-example',
                templateUrl: 'divider-overview-example.html',
                styleUrls: ['divider-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RpdmlkZXIvZGl2aWRlci1vdmVydmlldy9kaXZpZGVyLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvZGl2aWRlci9kaXZpZGVyLW92ZXJ2aWV3L2RpdmlkZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS3NDOztnQkFMckMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7Z0dBQ1ksc0JBQXNCOytEQUF0QixzQkFBc0I7WUNWbkMsZ0NBQ0U7WUFBQSxxQ0FBZTtZQUFBLHNCQUFNO1lBQUEsaUJBQWdCO1lBQ3JDLDhCQUEyQjtZQUMzQixxQ0FBZTtZQUFBLHNCQUFNO1lBQUEsaUJBQWdCO1lBQ3JDLDhCQUEyQjtZQUMzQixxQ0FBZTtZQUFBLHNCQUFNO1lBQUEsaUJBQWdCO1lBQ3ZDLGlCQUFXOztpQ0ROWDtDQVVzQyxBQUx0QyxJQUtzQztTQUF6QixzQkFBc0I7bUNBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGRpdmlkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGl2aWRlci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaXZpZGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaXZpZGVyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtbGlzdD5cbiAgPG1hdC1saXN0LWl0ZW0+SXRlbSAxPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgPG1hdC1saXN0LWl0ZW0+SXRlbSAyPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgPG1hdC1saXN0LWl0ZW0+SXRlbSAzPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==