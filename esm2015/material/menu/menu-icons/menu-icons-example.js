import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
import * as i3 from "@angular/material/icon";
/**
 * @title Menu with icons
 */
export class MenuIconsExample {
}
MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
MenuIconsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "more_vert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-menu", null, 1);
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "dialpad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "span");
        i0.ɵɵtext(9, "Redial");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 3);
        i0.ɵɵelementStart(11, "mat-icon");
        i0.ɵɵtext(12, "voicemail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵtext(14, "Check voice mail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 2);
        i0.ɵɵelementStart(16, "mat-icon");
        i0.ɵɵtext(17, "notifications_off");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "span");
        i0.ɵɵtext(19, "Disable alerts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i3.MatIcon, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuIconsExample, [{
        type: Component,
        args: [{ selector: 'menu-icons-example', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pY29ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxnQkFBZ0I7O2dGQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjtRQ1Q3QixpQ0FBZ0c7UUFDOUYsZ0NBQVU7UUFBQSx5QkFBUztRQUFBLGlCQUFXO1FBQ2hDLGlCQUFTO1FBQ1QseUNBQTBCO1FBQ3hCLGlDQUFzQjtRQUNwQixnQ0FBVTtRQUFBLHVCQUFPO1FBQUEsaUJBQVc7UUFDNUIsNEJBQU07UUFBQSxzQkFBTTtRQUFBLGlCQUFPO1FBQ3JCLGlCQUFTO1FBQ1Qsa0NBQStCO1FBQzdCLGlDQUFVO1FBQUEsMEJBQVM7UUFBQSxpQkFBVztRQUM5Qiw2QkFBTTtRQUFBLGlDQUFnQjtRQUFBLGlCQUFPO1FBQy9CLGlCQUFTO1FBQ1Qsa0NBQXNCO1FBQ3BCLGlDQUFVO1FBQUEsa0NBQWlCO1FBQUEsaUJBQVc7UUFDdEMsNkJBQU07UUFBQSwrQkFBYztRQUFBLGlCQUFPO1FBQzdCLGlCQUFTO1FBQ1gsaUJBQVc7OztRQWhCYSx1Q0FBMEI7O3VGRFNyQyxnQkFBZ0I7Y0FKNUIsU0FBUzsyQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE1lbnUgd2l0aCBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LWljb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtaWNvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUljb25zRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgbWVudVwiPlxuICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgPG1hdC1pY29uPmRpYWxwYWQ8L21hdC1pY29uPlxuICAgIDxzcGFuPlJlZGlhbDwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBkaXNhYmxlZD5cbiAgICA8bWF0LWljb24+dm9pY2VtYWlsPC9tYXQtaWNvbj5cbiAgICA8c3Bhbj5DaGVjayB2b2ljZSBtYWlsPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgIDxtYXQtaWNvbj5ub3RpZmljYXRpb25zX29mZjwvbWF0LWljb24+XG4gICAgPHNwYW4+RGlzYWJsZSBhbGVydHM8L3NwYW4+XG4gIDwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==