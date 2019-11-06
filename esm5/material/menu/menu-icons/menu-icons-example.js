import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
import * as i3 from "@angular/material/icon";
var _c0 = ["menu", "matMenu"];
/**
 * @title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-icons-example',
                    templateUrl: 'menu-icons-example.html',
                    styleUrls: ['menu-icons-example.css'],
                },] },
    ];
    MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
    MenuIconsExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "more_vert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-menu", null, _c0);
            i0.ɵɵelementStart(5, "button", 1);
            i0.ɵɵelementStart(6, "mat-icon");
            i0.ɵɵtext(7, "dialpad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9, "Redial");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 2);
            i0.ɵɵelementStart(11, "mat-icon");
            i0.ɵɵtext(12, "voicemail");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "span");
            i0.ɵɵtext(14, "Check voice mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "button", 1);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(MenuIconsExample, [{
        type: Component,
        args: [{
                selector: 'menu-icons-example',
                templateUrl: 'menu-icons-example.html',
                styleUrls: ['menu-icons-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pY29ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS2dDOztnQkFML0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN0Qzs7b0ZBQ1ksZ0JBQWdCO3lEQUFoQixnQkFBZ0I7WUNWN0IsaUNBQ0U7WUFBQSxnQ0FBVTtZQUFBLHlCQUFTO1lBQUEsaUJBQVc7WUFDaEMsaUJBQVM7WUFDVCwyQ0FDRTtZQUFBLGlDQUNFO1lBQUEsZ0NBQVU7WUFBQSx1QkFBTztZQUFBLGlCQUFXO1lBQzVCLDRCQUFNO1lBQUEsc0JBQU07WUFBQSxpQkFBTztZQUNyQixpQkFBUztZQUNULGtDQUNFO1lBQUEsaUNBQVU7WUFBQSwwQkFBUztZQUFBLGlCQUFXO1lBQzlCLDZCQUFNO1lBQUEsaUNBQWdCO1lBQUEsaUJBQU87WUFDL0IsaUJBQVM7WUFDVCxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEsa0NBQWlCO1lBQUEsaUJBQVc7WUFDdEMsNkJBQU07WUFBQSwrQkFBYztZQUFBLGlCQUFPO1lBQzdCLGlCQUFTO1lBQ1gsaUJBQVc7OztZQWhCYSx1Q0FBMEI7OzJCREFsRDtDQVVnQyxBQUxoQyxJQUtnQztTQUFuQixnQkFBZ0I7bUNBQWhCLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE1lbnUgd2l0aCBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LWljb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtaWNvbnMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21lbnUtaWNvbnMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUljb25zRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgbWVudVwiPlxuICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgPG1hdC1pY29uPmRpYWxwYWQ8L21hdC1pY29uPlxuICAgIDxzcGFuPlJlZGlhbDwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBkaXNhYmxlZD5cbiAgICA8bWF0LWljb24+dm9pY2VtYWlsPC9tYXQtaWNvbj5cbiAgICA8c3Bhbj5DaGVjayB2b2ljZSBtYWlsPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgIDxtYXQtaWNvbj5ub3RpZmljYXRpb25zX29mZjwvbWF0LWljb24+XG4gICAgPHNwYW4+RGlzYWJsZSBhbGVydHM8L3NwYW4+XG4gIDwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==