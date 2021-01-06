import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/menu";
/**
 * @title Testing with MatMenuHarness
 */
export class MenuHarnessExample {
}
MenuHarnessExample.ɵfac = function MenuHarnessExample_Factory(t) { return new (t || MenuHarnessExample)(); };
MenuHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuHarnessExample, selectors: [["menu-harness-example"]], decls: 10, vars: 2, consts: [["type", "button", 3, "matMenuTriggerFor"], ["type", "button", "disabled", "", 3, "matMenuTriggerFor"], ["settingsMenu", ""], ["mat-menu-item", ""]], template: function MenuHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵtext(3, "Disabled menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-menu", null, 2);
        i0.ɵɵelementStart(6, "menu", 3);
        i0.ɵɵtext(7, "Profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "menu", 3);
        i0.ɵɵtext(9, "Account");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
    } }, directives: [i1.MatMenuTrigger, i1.MatMenu, i1.MatMenuItem], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuHarnessExample, [{
        type: Component,
        args: [{
                selector: 'menu-harness-example',
                templateUrl: 'menu-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L21lbnUtaGFybmVzcy9tZW51LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1oYXJuZXNzL21lbnUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDVC9CLGlDQUF5RDtRQUFBLHdCQUFRO1FBQUEsaUJBQVM7UUFDMUUsaUNBQWtFO1FBQUEsNkJBQWE7UUFBQSxpQkFBUztRQUV4Rix5Q0FDRTtRQUFBLCtCQUFvQjtRQUFBLHVCQUFPO1FBQUEsaUJBQU87UUFDbEMsK0JBQW9CO1FBQUEsdUJBQU87UUFBQSxpQkFBTztRQUNwQyxpQkFBVzs7O1FBTlcsdUNBQWtDO1FBQ3pCLGVBQWtDO1FBQWxDLHVDQUFrQzs7a0REUXBELGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdE1lbnVIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbbWF0TWVudVRyaWdnZXJGb3JdPVwic2V0dGluZ3NNZW51XCI+U2V0dGluZ3M8L2J1dHRvbj5cbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkIFttYXRNZW51VHJpZ2dlckZvcl09XCJzZXR0aW5nc01lbnVcIj5EaXNhYmxlZCBtZW51PC9idXR0b24+XG5cbjxtYXQtbWVudSAjc2V0dGluZ3NNZW51PlxuICA8bWVudSBtYXQtbWVudS1pdGVtPlByb2ZpbGU8L21lbnU+XG4gIDxtZW51IG1hdC1tZW51LWl0ZW0+QWNjb3VudDwvbWVudT5cbjwvbWF0LW1lbnU+XG4iXX0=