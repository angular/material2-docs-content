/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/menu/menu-nested/menu-nested-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * \@title Nested menu
 */
let MenuNestedExample = /** @class */ (() => {
    /**
     * \@title Nested menu
     */
    class MenuNestedExample {
    }
    MenuNestedExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-nested-example',
                    templateUrl: 'menu-nested-example.html',
                    styleUrls: ['menu-nested-example.css'],
                },] },
    ];
    /** @nocollapse */ MenuNestedExample.ɵfac = function MenuNestedExample_Factory(t) { return new (t || MenuNestedExample)(); };
    /** @nocollapse */ MenuNestedExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuNestedExample, selectors: [["menu-nested-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function MenuNestedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, "Animal index");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-menu", null, 1);
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, "Vertebrates");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵtext(7, "Invertebrates");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-menu", null, 3);
            i0.ɵɵelementStart(10, "button", 2);
            i0.ɵɵtext(11, "Fishes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 2);
            i0.ɵɵtext(13, "Amphibians");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 2);
            i0.ɵɵtext(15, "Reptiles");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 4);
            i0.ɵɵtext(17, "Birds");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 4);
            i0.ɵɵtext(19, "Mammals");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-menu", null, 5);
            i0.ɵɵelementStart(22, "button", 4);
            i0.ɵɵtext(23, "Insects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 4);
            i0.ɵɵtext(25, "Molluscs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 4);
            i0.ɵɵtext(27, "Crustaceans");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 4);
            i0.ɵɵtext(29, "Corals");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 4);
            i0.ɵɵtext(31, "Arachnids");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "button", 4);
            i0.ɵɵtext(33, "Velvet worms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "button", 4);
            i0.ɵɵtext(35, "Horseshoe crabs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "mat-menu", null, 6);
            i0.ɵɵelementStart(38, "button", 4);
            i0.ɵɵtext(39, "Baikal oilfish");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "button", 4);
            i0.ɵɵtext(41, "Bala shark");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "button", 4);
            i0.ɵɵtext(43, "Ballan wrasse");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 4);
            i0.ɵɵtext(45, "Bamboo shark");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "button", 4);
            i0.ɵɵtext(47, "Banded killifish");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "mat-menu", null, 7);
            i0.ɵɵelementStart(50, "button", 4);
            i0.ɵɵtext(51, "Sonoran desert toad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "button", 4);
            i0.ɵɵtext(53, "Western toad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "button", 4);
            i0.ɵɵtext(55, "Arroyo toad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "button", 4);
            i0.ɵɵtext(57, "Yosemite toad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "mat-menu", null, 8);
            i0.ɵɵelementStart(60, "button", 4);
            i0.ɵɵtext(61, "Banded Day Gecko");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "button", 4);
            i0.ɵɵtext(63, "Banded Gila Monster");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "button", 4);
            i0.ɵɵtext(65, "Black Tree Monitor");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "button", 4);
            i0.ɵɵtext(67, "Blue Spiny Lizard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "button", 9);
            i0.ɵɵtext(69, "Velociraptor");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(3);
            const _r1 = i0.ɵɵreference(9);
            const _r2 = i0.ɵɵreference(21);
            const _r3 = i0.ɵɵreference(37);
            const _r4 = i0.ɵɵreference(49);
            const _r5 = i0.ɵɵreference(59);
            i0.ɵɵproperty("matMenuTriggerFor", _r0);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("matMenuTriggerFor", _r1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matMenuTriggerFor", _r2);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("matMenuTriggerFor", _r3);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matMenuTriggerFor", _r4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matMenuTriggerFor", _r5);
        } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
    return MenuNestedExample;
})();
export { MenuNestedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuNestedExample, [{
        type: Component,
        args: [{
                selector: 'menu-nested-example',
                templateUrl: 'menu-nested-example.html',
                styleUrls: ['menu-nested-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uZXN0ZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUt4Qzs7OztJQUFBLE1BS2EsaUJBQWlCOzs7Z0JBTDdCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDdkM7O3lHQUNZLGlCQUFpQjs2RUFBakIsaUJBQWlCO1lDVjlCLGlDQUFpRDtZQUFBLDRCQUFZO1lBQUEsaUJBQVM7WUFFdEUseUNBQ0U7WUFBQSxpQ0FBd0Q7WUFBQSwyQkFBVztZQUFBLGlCQUFTO1lBQzVFLGlDQUEwRDtZQUFBLDZCQUFhO1lBQUEsaUJBQVM7WUFDbEYsaUJBQVc7WUFFWCx5Q0FDRTtZQUFBLGtDQUFpRDtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDaEUsa0NBQXVEO1lBQUEsMkJBQVU7WUFBQSxpQkFBUztZQUMxRSxrQ0FBcUQ7WUFBQSx5QkFBUTtZQUFBLGlCQUFTO1lBQ3RFLGtDQUFzQjtZQUFBLHNCQUFLO1lBQUEsaUJBQVM7WUFDcEMsa0NBQXNCO1lBQUEsd0JBQU87WUFBQSxpQkFBUztZQUN4QyxpQkFBVztZQUVYLDBDQUNFO1lBQUEsa0NBQXNCO1lBQUEsd0JBQU87WUFBQSxpQkFBUztZQUN0QyxrQ0FBc0I7WUFBQSx5QkFBUTtZQUFBLGlCQUFTO1lBQ3ZDLGtDQUFzQjtZQUFBLDRCQUFXO1lBQUEsaUJBQVM7WUFDMUMsa0NBQXNCO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUNyQyxrQ0FBc0I7WUFBQSwwQkFBUztZQUFBLGlCQUFTO1lBQ3hDLGtDQUFzQjtZQUFBLDZCQUFZO1lBQUEsaUJBQVM7WUFDM0Msa0NBQXNCO1lBQUEsZ0NBQWU7WUFBQSxpQkFBUztZQUNoRCxpQkFBVztZQUVYLDBDQUNFO1lBQUEsa0NBQXNCO1lBQUEsK0JBQWM7WUFBQSxpQkFBUztZQUM3QyxrQ0FBc0I7WUFBQSwyQkFBVTtZQUFBLGlCQUFTO1lBQ3pDLGtDQUFzQjtZQUFBLDhCQUFhO1lBQUEsaUJBQVM7WUFDNUMsa0NBQXNCO1lBQUEsNkJBQVk7WUFBQSxpQkFBUztZQUMzQyxrQ0FBc0I7WUFBQSxpQ0FBZ0I7WUFBQSxpQkFBUztZQUNqRCxpQkFBVztZQUVYLDBDQUNFO1lBQUEsa0NBQXNCO1lBQUEsb0NBQW1CO1lBQUEsaUJBQVM7WUFDbEQsa0NBQXNCO1lBQUEsNkJBQVk7WUFBQSxpQkFBUztZQUMzQyxrQ0FBc0I7WUFBQSw0QkFBVztZQUFBLGlCQUFTO1lBQzFDLGtDQUFzQjtZQUFBLDhCQUFhO1lBQUEsaUJBQVM7WUFDOUMsaUJBQVc7WUFFWCwwQ0FDRTtZQUFBLGtDQUFzQjtZQUFBLGlDQUFnQjtZQUFBLGlCQUFTO1lBQy9DLGtDQUFzQjtZQUFBLG9DQUFtQjtZQUFBLGlCQUFTO1lBQ2xELGtDQUFzQjtZQUFBLG1DQUFrQjtZQUFBLGlCQUFTO1lBQ2pELGtDQUFzQjtZQUFBLGtDQUFpQjtZQUFBLGlCQUFTO1lBQ2hELGtDQUErQjtZQUFBLDZCQUFZO1lBQUEsaUJBQVM7WUFDdEQsaUJBQVc7Ozs7Ozs7O1lBOUNRLHVDQUE2QjtZQUd4QixlQUFpQztZQUFqQyx1Q0FBaUM7WUFDakMsZUFBbUM7WUFBbkMsdUNBQW1DO1lBSW5DLGVBQTBCO1lBQTFCLHVDQUEwQjtZQUMxQixlQUFnQztZQUFoQyx1Q0FBZ0M7WUFDaEMsZUFBOEI7WUFBOUIsdUNBQThCOzs0QkRWdEQ7S0FVaUM7U0FBcEIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBOZXN0ZWQgbWVudVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LW5lc3RlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LW5lc3RlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWVudS1uZXN0ZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudU5lc3RlZEV4YW1wbGUge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYW5pbWFsc1wiPkFuaW1hbCBpbmRleDwvYnV0dG9uPlxuXG48bWF0LW1lbnUgI2FuaW1hbHM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwidmVydGVicmF0ZXNcIj5WZXJ0ZWJyYXRlczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImludmVydGVicmF0ZXNcIj5JbnZlcnRlYnJhdGVzPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI3ZlcnRlYnJhdGVzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImZpc2hcIj5GaXNoZXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJhbXBoaWJpYW5zXCI+QW1waGliaWFuczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInJlcHRpbGVzXCI+UmVwdGlsZXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJpcmRzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5NYW1tYWxzPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI2ludmVydGVicmF0ZXM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JbnNlY3RzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Nb2xsdXNjczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+Q3J1c3RhY2VhbnM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkNvcmFsczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QXJhY2huaWRzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5WZWx2ZXQgd29ybXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkhvcnNlc2hvZSBjcmFiczwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICNmaXNoPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFpa2FsIG9pbGZpc2g8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbGEgc2hhcms8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbGxhbiB3cmFzc2U8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbWJvbyBzaGFyazwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFuZGVkIGtpbGxpZmlzaDwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICNhbXBoaWJpYW5zPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+U29ub3JhbiBkZXNlcnQgdG9hZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+V2VzdGVybiB0b2FkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5BcnJveW8gdG9hZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+WW9zZW1pdGUgdG9hZDwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICNyZXB0aWxlcz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbmRlZCBEYXkgR2Vja288L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbmRlZCBHaWxhIE1vbnN0ZXI8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJsYWNrIFRyZWUgTW9uaXRvcjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+Qmx1ZSBTcGlueSBMaXphcmQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGRpc2FibGVkPlZlbG9jaXJhcHRvcjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==