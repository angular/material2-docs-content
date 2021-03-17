import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/**
 * @title Testing with MatSidenavHarness
 */
export class SidenavHarnessExample {
}
SidenavHarnessExample.ɵfac = function SidenavHarnessExample_Factory(t) { return new (t || SidenavHarnessExample)(); };
SidenavHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidenavHarnessExample, selectors: [["sidenav-harness-example"]], decls: 5, vars: 0, consts: [["mode", "side"]], template: function SidenavHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-drawer-container");
        i0.ɵɵelementStart(1, "mat-drawer", 0);
        i0.ɵɵtext(2, "Hello from the drawer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-drawer-content");
        i0.ɵɵtext(4, "Hello from the content");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i1.MatDrawerContent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavHarnessExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-harness-example',
                templateUrl: 'sidenav-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtaGFybmVzcy9zaWRlbmF2LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1oYXJuZXNzL3NpZGVuYXYtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDVGxDLDRDQUFzQjtRQUNwQixxQ0FBd0I7UUFBQSxxQ0FBcUI7UUFBQSxpQkFBYTtRQUMxRCwwQ0FBb0I7UUFBQSxzQ0FBc0I7UUFBQSxpQkFBcUI7UUFDakUsaUJBQXVCOzt1RkRNVixxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTaWRlbmF2SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC1kcmF3ZXItY29udGFpbmVyPlxuICA8bWF0LWRyYXdlciBtb2RlPVwic2lkZVwiPkhlbGxvIGZyb20gdGhlIGRyYXdlcjwvbWF0LWRyYXdlcj5cbiAgPG1hdC1kcmF3ZXItY29udGVudD5IZWxsbyBmcm9tIHRoZSBjb250ZW50PC9tYXQtZHJhd2VyLWNvbnRlbnQ+XG48L21hdC1kcmF3ZXItY29udGFpbmVyPlxuIl19