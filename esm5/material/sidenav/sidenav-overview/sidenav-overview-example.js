import { Component } from '@angular/core';
/** @title Basic sidenav */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-overview-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"]
                }] }
    ];
    return SidenavOverviewExample;
}());
export { SidenavOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vdmVydmlldy9zaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QywyQkFBMkI7QUFDM0I7SUFBQTtRQU1FLGNBQVMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDcEcsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHdUQUE0Qzs7aUJBRTdDOztJQUdELDZCQUFDO0NBQUEsQUFQRCxJQU9DO1NBRlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEJhc2ljIHNpZGVuYXYgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2T3ZlcnZpZXdFeGFtcGxlIHtcbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iXX0=