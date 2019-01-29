import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Basic sidenav */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'sidenav-overview-example',
            template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
            styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"]
        })
    ], SidenavOverviewExample);
    return SidenavOverviewExample;
}());
export { SidenavOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3NpZGVuYXYtb3ZlcnZpZXcvc2lkZW5hdi1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLDJCQUEyQjtBQU0zQjtJQUxBO1FBTUUsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRlksc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsd1RBQTRDOztTQUU3QyxDQUFDO09BQ1csc0JBQXNCLENBRWxDO0lBQUQsNkJBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgQmFzaWMgc2lkZW5hdiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZPdmVydmlld0V4YW1wbGUge1xuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiJdfQ==