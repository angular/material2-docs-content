import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
/** @title Sidenav with custom escape and backdrop click behavior */
var SidenavDisableCloseExample = /** @class */ (function () {
    function SidenavDisableCloseExample() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavDisableCloseExample.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    tslib_1.__decorate([
        ViewChild('sidenav'),
        tslib_1.__metadata("design:type", MatSidenav)
    ], SidenavDisableCloseExample.prototype, "sidenav", void 0);
    SidenavDisableCloseExample = tslib_1.__decorate([
        Component({
            selector: 'sidenav-disable-close-example',
            template: "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
            styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
        })
    ], SidenavDisableCloseExample);
    return SidenavDisableCloseExample;
}());
export { SidenavDisableCloseExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2lkZW5hdi1kaXNhYmxlLWNsb3NlL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFckQsb0VBQW9FO0FBTXBFO0lBTEE7UUFRRSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBT1osY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBTkMsMENBQUssR0FBTCxVQUFNLE1BQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBUHFCO1FBQXJCLFNBQVMsQ0FBQyxTQUFTLENBQUM7MENBQVUsVUFBVTsrREFBQztJQUQvQiwwQkFBMEI7UUFMdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUN6Qyx3akJBQWlEOztTQUVsRCxDQUFDO09BQ1csMEJBQTBCLENBV3RDO0lBQUQsaUNBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2lkZW5hdn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbi8qKiBAdGl0bGUgU2lkZW5hdiB3aXRoIGN1c3RvbSBlc2NhcGUgYW5kIGJhY2tkcm9wIGNsaWNrIGJlaGF2aW9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkRpc2FibGVDbG9zZUV4YW1wbGUge1xuICBAVmlld0NoaWxkKCdzaWRlbmF2Jykgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICByZWFzb24gPSAnJztcblxuICBjbG9zZShyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMuc2lkZW5hdi5jbG9zZSgpO1xuICB9XG5cbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iXX0=