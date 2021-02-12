import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Menu positioning
 */
export class MenuPositionExample {
}
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
        const _r0 = i0.ɵɵreference(3);
        const _r1 = i0.ɵɵreference(11);
        const _r2 = i0.ɵɵreference(19);
        const _r3 = i0.ɵɵreference(27);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matMenuTriggerFor", _r1);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matMenuTriggerFor", _r2);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matMenuTriggerFor", _r3);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuPositionExample, [{
        type: Component,
        args: [{
                selector: 'menu-position-example',
                templateUrl: 'menu-position-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LXBvc2l0aW9uL21lbnUtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDVGhDLGlDQUFtRDtRQUFBLHFCQUFLO1FBQUEsaUJBQVM7UUFFakUsc0NBQWlEO1FBRS9DLGlDQUFzQjtRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDckMsaUNBQXNCO1FBQUEsc0JBQU07UUFBQSxpQkFBUztRQUN2QyxpQkFBVztRQUVYLGlDQUFtRDtRQUFBLHFCQUFLO1FBQUEsaUJBQVM7UUFDakUsdUNBQWlEO1FBQy9DLGtDQUFzQjtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDckMsa0NBQXNCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUN2QyxpQkFBVztRQUVYLGtDQUFvRDtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDbkUsdUNBQW1EO1FBQ2pELGtDQUFzQjtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDckMsa0NBQXNCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUN2QyxpQkFBVztRQUdYLGtDQUFtRDtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDakUsdUNBQWlEO1FBQy9DLGtDQUFzQjtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDckMsa0NBQXNCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUN2QyxpQkFBVzs7Ozs7O1FBekJRLHVDQUErQjtRQVEvQixlQUErQjtRQUEvQix1Q0FBK0I7UUFNL0IsZUFBZ0M7UUFBaEMsdUNBQWdDO1FBT2hDLGVBQStCO1FBQS9CLHVDQUErQjs7dUZEWnJDLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTWVudSBwb3NpdGlvbmluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudVBvc2l0aW9uRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJhYm92ZU1lbnVcIj5BYm92ZTwvYnV0dG9uPlxuPCEtLSAjZG9jcmVnaW9uIG1lbnUtcG9zaXRpb24gLS0+XG48bWF0LW1lbnUgI2Fib3ZlTWVudT1cIm1hdE1lbnVcIiB5UG9zaXRpb249XCJhYm92ZVwiPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1lbnUtcG9zaXRpb24gLS0+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDE8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJiZWxvd01lbnVcIj5CZWxvdzwvYnV0dG9uPlxuPG1hdC1tZW51ICNiZWxvd01lbnU9XCJtYXRNZW51XCIgeVBvc2l0aW9uPVwiYmVsb3dcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImJlZm9yZU1lbnVcIj5CZWZvcmU8L2J1dHRvbj5cbjxtYXQtbWVudSAjYmVmb3JlTWVudT1cIm1hdE1lbnVcIiB4UG9zaXRpb249XCJiZWZvcmVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuXG5cbjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYWZ0ZXJNZW51XCI+QWZ0ZXI8L2J1dHRvbj5cbjxtYXQtbWVudSAjYWZ0ZXJNZW51PVwibWF0TWVudVwiIHhQb3NpdGlvbj1cImFmdGVyXCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDE8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==