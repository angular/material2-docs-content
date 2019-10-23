import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Basic drawer */
var SidenavDrawerOverviewExample = /** @class */ (function () {
    function SidenavDrawerOverviewExample() {
    }
    SidenavDrawerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-drawer-overview-example',
                    templateUrl: 'sidenav-drawer-overview-example.html',
                    styleUrls: ['sidenav-drawer-overview-example.css'],
                },] },
    ];
    SidenavDrawerOverviewExample.ɵfac = function SidenavDrawerOverviewExample_Factory(t) { return new (t || SidenavDrawerOverviewExample)(); };
    SidenavDrawerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavDrawerOverviewExample, selectors: [["sidenav-drawer-overview-example"]], decls: 5, vars: 0, consts: [[1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavDrawerOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-drawer-container", 0);
            i0.ɵɵelementStart(1, "mat-drawer", 1);
            i0.ɵɵtext(2, "Drawer content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-drawer-content");
            i0.ɵɵtext(4, "Main content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i1.MatDrawerContent], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}"] });
    return SidenavDrawerOverviewExample;
}());
export { SidenavDrawerOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(SidenavDrawerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-drawer-overview-example',
                templateUrl: 'sidenav-drawer-overview-example.html',
                styleUrls: ['sidenav-drawer-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3L3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWRyYXdlci1vdmVydmlldy9zaWRlbmF2LWRyYXdlci1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDLDBCQUEwQjtBQUMxQjtJQUFBO0tBSzRDOztnQkFMM0MsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFdBQVcsRUFBRSxzQ0FBc0M7b0JBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2lCQUNuRDs7NEdBQ1ksNEJBQTRCO3FFQUE1Qiw0QkFBNEI7WUNSekMsK0NBQ0U7WUFBQSxxQ0FBK0I7WUFBQSw4QkFBYztZQUFBLGlCQUFhO1lBQzFELDBDQUFvQjtZQUFBLDRCQUFZO1lBQUEsaUJBQXFCO1lBQ3ZELGlCQUF1Qjs7dUNESHZCO0NBUTRDLEFBTDVDLElBSzRDO1NBQS9CLDRCQUE0QjttQ0FBNUIsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBCYXNpYyBkcmF3ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWRyYXdlci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2RHJhd2VyT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LWRyYXdlci1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8bWF0LWRyYXdlciBtb2RlPVwic2lkZVwiIG9wZW5lZD5EcmF3ZXIgY29udGVudDwvbWF0LWRyYXdlcj5cbiAgPG1hdC1kcmF3ZXItY29udGVudD5NYWluIGNvbnRlbnQ8L21hdC1kcmF3ZXItY29udGVudD5cbjwvbWF0LWRyYXdlci1jb250YWluZXI+XG4iXX0=