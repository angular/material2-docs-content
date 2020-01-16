import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
import * as i3 from "@angular/material/icon";
/**
 * @title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
    MenuIconsExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) { if (rf & 1) {
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
            var _r0 = i0.ɵɵreference(4);
            i0.ɵɵproperty("matMenuTriggerFor", _r0);
        } }, directives: [i1.MatButton, i2.MatMenuTrigger, i3.MatIcon, i2._MatMenu, i2.MatMenuItem], styles: [""] });
    return MenuIconsExample;
}());
export { MenuIconsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuIconsExample, [{
        type: Component,
        args: [{
                selector: 'menu-icons-example',
                templateUrl: 'menu-icons-example.html',
                styleUrls: ['menu-icons-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pY29ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLZ0M7b0ZBQW5CLGdCQUFnQjt5REFBaEIsZ0JBQWdCO1lDVjdCLGlDQUNFO1lBQUEsZ0NBQVU7WUFBQSx5QkFBUztZQUFBLGlCQUFXO1lBQ2hDLGlCQUFTO1lBQ1QseUNBQ0U7WUFBQSxpQ0FDRTtZQUFBLGdDQUFVO1lBQUEsdUJBQU87WUFBQSxpQkFBVztZQUM1Qiw0QkFBTTtZQUFBLHNCQUFNO1lBQUEsaUJBQU87WUFDckIsaUJBQVM7WUFDVCxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEsMEJBQVM7WUFBQSxpQkFBVztZQUM5Qiw2QkFBTTtZQUFBLGlDQUFnQjtZQUFBLGlCQUFPO1lBQy9CLGlCQUFTO1lBQ1Qsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLGtDQUFpQjtZQUFBLGlCQUFXO1lBQ3RDLDZCQUFNO1lBQUEsK0JBQWM7WUFBQSxpQkFBTztZQUM3QixpQkFBUztZQUNYLGlCQUFXOzs7WUFoQmEsdUNBQTBCOzsyQkRBbEQ7Q0FVZ0MsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNZW51IHdpdGggaWNvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1pY29ucy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LWljb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtZW51LWljb25zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVJY29uc0V4YW1wbGUge31cbiIsIjxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIG1lbnVcIj5cbiAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG48L2J1dHRvbj5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgIDxtYXQtaWNvbj5kaWFscGFkPC9tYXQtaWNvbj5cbiAgICA8c3Bhbj5SZWRpYWw8L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gZGlzYWJsZWQ+XG4gICAgPG1hdC1pY29uPnZvaWNlbWFpbDwvbWF0LWljb24+XG4gICAgPHNwYW4+Q2hlY2sgdm9pY2UgbWFpbDwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5cbiAgICA8bWF0LWljb24+bm90aWZpY2F0aW9uc19vZmY8L21hdC1pY29uPlxuICAgIDxzcGFuPkRpc2FibGUgYWxlcnRzPC9zcGFuPlxuICA8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG4iXX0=