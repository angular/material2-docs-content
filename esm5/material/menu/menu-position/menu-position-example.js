import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Menu positioning
 */
var MenuPositionExample = /** @class */ (function () {
    function MenuPositionExample() {
    }
    MenuPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-position-example',
                    templateUrl: 'menu-position-example.html',
                    styleUrls: ['menu-position-example.css'],
                },] },
    ];
    MenuPositionExample.ɵfac = function MenuPositionExample_Factory(t) { return new (t || MenuPositionExample)(); };
    MenuPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["aboveMenu", "matMenu"], ["mat-menu-item", ""], ["yPosition", "below"], ["belowMenu", "matMenu"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["xPosition", "after"], ["afterMenu", "matMenu"]], template: function MenuPositionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, "Above");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-menu", 1, 2);
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵtext(5, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵtext(7, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 0);
            i0.ɵɵtext(9, "Below");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-menu", 4, 5);
            i0.ɵɵelementStart(12, "button", 3);
            i0.ɵɵtext(13, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 3);
            i0.ɵɵtext(15, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 0);
            i0.ɵɵtext(17, "Before");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-menu", 6, 7);
            i0.ɵɵelementStart(20, "button", 3);
            i0.ɵɵtext(21, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 3);
            i0.ɵɵtext(23, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 0);
            i0.ɵɵtext(25, "After");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "mat-menu", 8, 9);
            i0.ɵɵelementStart(28, "button", 3);
            i0.ɵɵtext(29, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 3);
            i0.ɵɵtext(31, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(3);
            var _r3 = i0.ɵɵreference(11);
            var _r4 = i0.ɵɵreference(19);
            var _r5 = i0.ɵɵreference(27);
            i0.ɵɵproperty("matMenuTriggerFor", _r2);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("matMenuTriggerFor", _r3);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("matMenuTriggerFor", _r4);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("matMenuTriggerFor", _r5);
        } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
    return MenuPositionExample;
}());
export { MenuPositionExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuPositionExample, [{
        type: Component,
        args: [{
                selector: 'menu-position-example',
                templateUrl: 'menu-position-example.html',
                styleUrls: ['menu-position-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LXBvc2l0aW9uL21lbnUtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUttQzs7Z0JBTGxDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxXQUFXLEVBQUUsNEJBQTRCO29CQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDekM7OzBGQUNZLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDVmhDLGlDQUFtRDtZQUFBLHFCQUFLO1lBQUEsaUJBQVM7WUFDakUsc0NBQ0U7WUFBQSxpQ0FBc0I7WUFBQSxzQkFBTTtZQUFBLGlCQUFTO1lBQ3JDLGlDQUFzQjtZQUFBLHNCQUFNO1lBQUEsaUJBQVM7WUFDdkMsaUJBQVc7WUFFWCxpQ0FBbUQ7WUFBQSxxQkFBSztZQUFBLGlCQUFTO1lBQ2pFLHVDQUNFO1lBQUEsa0NBQXNCO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUNyQyxrQ0FBc0I7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ3ZDLGlCQUFXO1lBRVgsa0NBQW9EO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUNuRSx1Q0FDRTtZQUFBLGtDQUFzQjtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDckMsa0NBQXNCO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUN2QyxpQkFBVztZQUdYLGtDQUFtRDtZQUFBLHNCQUFLO1lBQUEsaUJBQVM7WUFDakUsdUNBQ0U7WUFBQSxrQ0FBc0I7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ3JDLGtDQUFzQjtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDdkMsaUJBQVc7Ozs7OztZQXZCUSx1Q0FBK0I7WUFNL0IsZUFBK0I7WUFBL0IsdUNBQStCO1lBTS9CLGVBQWdDO1lBQWhDLHVDQUFnQztZQU9oQyxlQUErQjtZQUEvQix1Q0FBK0I7OzhCRG5CbEQ7Q0FVbUMsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNZW51IHBvc2l0aW9uaW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWVudS1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51UG9zaXRpb25FeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFib3ZlTWVudVwiPkFib3ZlPC9idXR0b24+XG48bWF0LW1lbnUgI2Fib3ZlTWVudT1cIm1hdE1lbnVcIiB5UG9zaXRpb249XCJhYm92ZVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYmVsb3dNZW51XCI+QmVsb3c8L2J1dHRvbj5cbjxtYXQtbWVudSAjYmVsb3dNZW51PVwibWF0TWVudVwiIHlQb3NpdGlvbj1cImJlbG93XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDE8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJiZWZvcmVNZW51XCI+QmVmb3JlPC9idXR0b24+XG48bWF0LW1lbnUgI2JlZm9yZU1lbnU9XCJtYXRNZW51XCIgeFBvc2l0aW9uPVwiYmVmb3JlXCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDE8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuXG48YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFmdGVyTWVudVwiPkFmdGVyPC9idXR0b24+XG48bWF0LW1lbnUgI2FmdGVyTWVudT1cIm1hdE1lbnVcIiB4UG9zaXRpb249XCJhZnRlclwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG4iXX0=