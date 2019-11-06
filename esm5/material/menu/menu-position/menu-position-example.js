import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
var _c0 = ["aboveMenu", "matMenu"];
var _c1 = ["belowMenu", "matMenu"];
var _c2 = ["beforeMenu", "matMenu"];
var _c3 = ["afterMenu", "matMenu"];
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
    MenuPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["mat-menu-item", ""], ["yPosition", "below"], ["xPosition", "before"], ["xPosition", "after"]], template: function MenuPositionExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, "Above");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-menu", 1, _c0);
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵtext(7, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 0);
            i0.ɵɵtext(9, "Below");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-menu", 3, _c1);
            i0.ɵɵelementStart(12, "button", 2);
            i0.ɵɵtext(13, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 2);
            i0.ɵɵtext(15, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 0);
            i0.ɵɵtext(17, "Before");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-menu", 4, _c2);
            i0.ɵɵelementStart(20, "button", 2);
            i0.ɵɵtext(21, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 2);
            i0.ɵɵtext(23, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 0);
            i0.ɵɵtext(25, "After");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "mat-menu", 5, _c3);
            i0.ɵɵelementStart(28, "button", 2);
            i0.ɵɵtext(29, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 2);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(MenuPositionExample, [{
        type: Component,
        args: [{
                selector: 'menu-position-example',
                templateUrl: 'menu-position-example.html',
                styleUrls: ['menu-position-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LXBvc2l0aW9uL21lbnUtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLbUM7O2dCQUxsQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3pDOzswRkFDWSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQ1ZoQyxpQ0FBbUQ7WUFBQSxxQkFBSztZQUFBLGlCQUFTO1lBQ2pFLHdDQUNFO1lBQUEsaUNBQXNCO1lBQUEsc0JBQU07WUFBQSxpQkFBUztZQUNyQyxpQ0FBc0I7WUFBQSxzQkFBTTtZQUFBLGlCQUFTO1lBQ3ZDLGlCQUFXO1lBRVgsaUNBQW1EO1lBQUEscUJBQUs7WUFBQSxpQkFBUztZQUNqRSx5Q0FDRTtZQUFBLGtDQUFzQjtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDckMsa0NBQXNCO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUN2QyxpQkFBVztZQUVYLGtDQUFvRDtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDbkUseUNBQ0U7WUFBQSxrQ0FBc0I7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ3JDLGtDQUFzQjtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDdkMsaUJBQVc7WUFHWCxrQ0FBbUQ7WUFBQSxzQkFBSztZQUFBLGlCQUFTO1lBQ2pFLHlDQUNFO1lBQUEsa0NBQXNCO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUNyQyxrQ0FBc0I7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ3ZDLGlCQUFXOzs7Ozs7WUF2QlEsdUNBQStCO1lBTS9CLGVBQStCO1lBQS9CLHVDQUErQjtZQU0vQixlQUFnQztZQUFoQyx1Q0FBZ0M7WUFPaEMsZUFBK0I7WUFBL0IsdUNBQStCOzs4QkRuQmxEO0NBVW1DLEFBTG5DLElBS21DO1NBQXRCLG1CQUFtQjttQ0FBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTWVudSBwb3NpdGlvbmluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21lbnUtcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudVBvc2l0aW9uRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJhYm92ZU1lbnVcIj5BYm92ZTwvYnV0dG9uPlxuPG1hdC1tZW51ICNhYm92ZU1lbnU9XCJtYXRNZW51XCIgeVBvc2l0aW9uPVwiYWJvdmVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImJlbG93TWVudVwiPkJlbG93PC9idXR0b24+XG48bWF0LW1lbnUgI2JlbG93TWVudT1cIm1hdE1lbnVcIiB5UG9zaXRpb249XCJiZWxvd1wiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYmVmb3JlTWVudVwiPkJlZm9yZTwvYnV0dG9uPlxuPG1hdC1tZW51ICNiZWZvcmVNZW51PVwibWF0TWVudVwiIHhQb3NpdGlvbj1cImJlZm9yZVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJhZnRlck1lbnVcIj5BZnRlcjwvYnV0dG9uPlxuPG1hdC1tZW51ICNhZnRlck1lbnU9XCJtYXRNZW51XCIgeFBvc2l0aW9uPVwiYWZ0ZXJcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuIl19