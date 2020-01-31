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
    MenuIconsExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-icons-example',
                    templateUrl: 'menu-icons-example.html',
                    styleUrls: ['menu-icons-example.css'],
                },] },
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pY29ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLZ0M7O2dCQUwvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtvQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDOztvRkFDWSxnQkFBZ0I7eURBQWhCLGdCQUFnQjtZQ1Y3QixpQ0FDRTtZQUFBLGdDQUFVO1lBQUEseUJBQVM7WUFBQSxpQkFBVztZQUNoQyxpQkFBUztZQUNULHlDQUNFO1lBQUEsaUNBQ0U7WUFBQSxnQ0FBVTtZQUFBLHVCQUFPO1lBQUEsaUJBQVc7WUFDNUIsNEJBQU07WUFBQSxzQkFBTTtZQUFBLGlCQUFPO1lBQ3JCLGlCQUFTO1lBQ1Qsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLDBCQUFTO1lBQUEsaUJBQVc7WUFDOUIsNkJBQU07WUFBQSxpQ0FBZ0I7WUFBQSxpQkFBTztZQUMvQixpQkFBUztZQUNULGtDQUNFO1lBQUEsaUNBQVU7WUFBQSxrQ0FBaUI7WUFBQSxpQkFBVztZQUN0Qyw2QkFBTTtZQUFBLCtCQUFjO1lBQUEsaUJBQU87WUFDN0IsaUJBQVM7WUFDWCxpQkFBVzs7O1lBaEJhLHVDQUEwQjs7MkJEQWxEO0NBVWdDLEFBTGhDLElBS2dDO1NBQW5CLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTWVudSB3aXRoIGljb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtaWNvbnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1pY29ucy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWVudS1pY29ucy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51SWNvbnNFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBtZW51XCI+XG4gIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuPC9idXR0b24+XG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5cbiAgICA8bWF0LWljb24+ZGlhbHBhZDwvbWF0LWljb24+XG4gICAgPHNwYW4+UmVkaWFsPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGRpc2FibGVkPlxuICAgIDxtYXQtaWNvbj52b2ljZW1haWw8L21hdC1pY29uPlxuICAgIDxzcGFuPkNoZWNrIHZvaWNlIG1haWw8L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnNfb2ZmPC9tYXQtaWNvbj5cbiAgICA8c3Bhbj5EaXNhYmxlIGFsZXJ0czwvc3Bhbj5cbiAgPC9idXR0b24+XG48L21hdC1tZW51PlxuIl19