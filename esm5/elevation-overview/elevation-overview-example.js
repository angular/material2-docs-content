import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Elevation CSS classes
 */
var ElevationOverviewExample = /** @class */ (function () {
    function ElevationOverviewExample() {
        this.isActive = false;
    }
    ElevationOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'elevation-overview-example',
            template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n",
            styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"]
        })
    ], ElevationOverviewExample);
    return ElevationOverviewExample;
}());
export { ElevationOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUZZLHdCQUF3QjtRQUxwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNEJBQTRCO1lBRXRDLDBPQUE4Qzs7U0FDL0MsQ0FBQztPQUNXLHdCQUF3QixDQUVwQztJQUFELCtCQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBFbGV2YXRpb24gQ1NTIGNsYXNzZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVsZXZhdGlvbk92ZXJ2aWV3RXhhbXBsZSB7XG4gIGlzQWN0aXZlID0gZmFsc2U7XG59XG4iXX0=