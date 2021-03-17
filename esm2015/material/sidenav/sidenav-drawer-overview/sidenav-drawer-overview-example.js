import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Basic drawer */
export class SidenavDrawerOverviewExample {
}
SidenavDrawerOverviewExample.ɵfac = function SidenavDrawerOverviewExample_Factory(t) { return new (t || SidenavDrawerOverviewExample)(); };
SidenavDrawerOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidenavDrawerOverviewExample, selectors: [["sidenav-drawer-overview-example"]], decls: 5, vars: 0, consts: [[1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavDrawerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-drawer-container", 0);
        i0.ɵɵelementStart(1, "mat-drawer", 1);
        i0.ɵɵtext(2, "Drawer content");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-drawer-content");
        i0.ɵɵtext(4, "Main content");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i1.MatDrawerContent], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavDrawerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-drawer-overview-example',
                templateUrl: 'sidenav-drawer-overview-example.html',
                styleUrls: ['sidenav-drawer-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4QywwQkFBMEI7QUFNMUIsTUFBTSxPQUFPLDRCQUE0Qjs7d0dBQTVCLDRCQUE0QjsrRUFBNUIsNEJBQTRCO1FDUnpDLCtDQUFnRDtRQUM5QyxxQ0FBK0I7UUFBQSw4QkFBYztRQUFBLGlCQUFhO1FBQzFELDBDQUFvQjtRQUFBLDRCQUFZO1FBQUEsaUJBQXFCO1FBQ3ZELGlCQUF1Qjs7dUZES1YsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBCYXNpYyBkcmF3ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWRyYXdlci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2RHJhd2VyT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LWRyYXdlci1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8bWF0LWRyYXdlciBtb2RlPVwic2lkZVwiIG9wZW5lZD5EcmF3ZXIgY29udGVudDwvbWF0LWRyYXdlcj5cbiAgPG1hdC1kcmF3ZXItY29udGVudD5NYWluIGNvbnRlbnQ8L21hdC1kcmF3ZXItY29udGVudD5cbjwvbWF0LWRyYXdlci1jb250YWluZXI+XG4iXX0=