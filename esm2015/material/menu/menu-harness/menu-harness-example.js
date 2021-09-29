import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/menu";
/**
 * @title Testing with MatMenuHarness
 */
export class MenuHarnessExample {
}
MenuHarnessExample.ɵfac = function MenuHarnessExample_Factory(t) { return new (t || MenuHarnessExample)(); };
MenuHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuHarnessExample, selectors: [["menu-harness-example"]], decls: 10, vars: 2, consts: [["type", "button", 3, "matMenuTriggerFor"], ["type", "button", "disabled", "", 3, "matMenuTriggerFor"], ["settingsMenu", ""], ["mat-menu-item", ""]], template: function MenuHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuHarnessExample, [{
        type: Component,
        args: [{ selector: 'menu-harness-example', template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L21lbnUtaGFybmVzcy9tZW51LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1oYXJuZXNzL21lbnUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDVC9CLGlDQUF5RDtRQUFBLHdCQUFRO1FBQUEsaUJBQVM7UUFDMUUsaUNBQWtFO1FBQUEsNkJBQWE7UUFBQSxpQkFBUztRQUV4Rix5Q0FBd0I7UUFDdEIsK0JBQW9CO1FBQUEsdUJBQU87UUFBQSxpQkFBTztRQUNsQywrQkFBb0I7UUFBQSx1QkFBTztRQUFBLGlCQUFPO1FBQ3BDLGlCQUFXOzs7UUFOVyx1Q0FBa0M7UUFDekIsZUFBa0M7UUFBbEMsdUNBQWtDOzt1RkRRcEQsa0JBQWtCO2NBSjlCLFNBQVM7MkJBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0TWVudUhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51SGFybmVzc0V4YW1wbGUge31cbiIsIjxidXR0b24gdHlwZT1cImJ1dHRvblwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJzZXR0aW5nc01lbnVcIj5TZXR0aW5nczwvYnV0dG9uPlxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQgW21hdE1lbnVUcmlnZ2VyRm9yXT1cInNldHRpbmdzTWVudVwiPkRpc2FibGVkIG1lbnU8L2J1dHRvbj5cblxuPG1hdC1tZW51ICNzZXR0aW5nc01lbnU+XG4gIDxtZW51IG1hdC1tZW51LWl0ZW0+UHJvZmlsZTwvbWVudT5cbiAgPG1lbnUgbWF0LW1lbnUtaXRlbT5BY2NvdW50PC9tZW51PlxuPC9tYXQtbWVudT5cbiJdfQ==