/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/menu/nested-menu/nested-menu-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * \@title Nested menu
 */
export class NestedMenuExample {
}
NestedMenuExample.decorators = [
    { type: Component, args: [{
                selector: 'nested-menu-example',
                templateUrl: 'nested-menu-example.html',
                styleUrls: ['nested-menu-example.css'],
            },] },
];
/** @nocollapse */ NestedMenuExample.ɵfac = function NestedMenuExample_Factory(t) { return new (t || NestedMenuExample)(); };
/** @nocollapse */ NestedMenuExample.ɵcmp = i0.ɵɵdefineComponent({ type: NestedMenuExample, selectors: [["nested-menu-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function NestedMenuExample_Template(rf, ctx) { if (rf & 1) {
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
        const _r6 = i0.ɵɵreference(3);
        const _r7 = i0.ɵɵreference(9);
        const _r8 = i0.ɵɵreference(21);
        const _r9 = i0.ɵɵreference(37);
        const _r10 = i0.ɵɵreference(49);
        const _r11 = i0.ɵɵreference(59);
        i0.ɵɵproperty("matMenuTriggerFor", _r6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r7);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r8);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r9);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r10);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r11);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NestedMenuExample, [{
        type: Component,
        args: [{
                selector: 'nested-menu-example',
                templateUrl: 'nested-menu-example.html',
                styleUrls: ['nested-menu-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW1lbnUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbmVzdGVkLW1lbnUvbmVzdGVkLW1lbnUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbmVzdGVkLW1lbnUvbmVzdGVkLW1lbnUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVV4QyxNQUFNLE9BQU8saUJBQWlCOzs7WUFMN0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztrRkFDWSxpQkFBaUI7c0RBQWpCLGlCQUFpQjtRQ1Y5QixpQ0FBaUQ7UUFBQSw0QkFBWTtRQUFBLGlCQUFTO1FBRXRFLHlDQUNFO1FBQUEsaUNBQXdEO1FBQUEsMkJBQVc7UUFBQSxpQkFBUztRQUM1RSxpQ0FBMEQ7UUFBQSw2QkFBYTtRQUFBLGlCQUFTO1FBQ2xGLGlCQUFXO1FBRVgseUNBQ0U7UUFBQSxrQ0FBaUQ7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ2hFLGtDQUF1RDtRQUFBLDJCQUFVO1FBQUEsaUJBQVM7UUFDMUUsa0NBQXFEO1FBQUEseUJBQVE7UUFBQSxpQkFBUztRQUN0RSxrQ0FBc0I7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ3BDLGtDQUFzQjtRQUFBLHdCQUFPO1FBQUEsaUJBQVM7UUFDeEMsaUJBQVc7UUFFWCwwQ0FDRTtRQUFBLGtDQUFzQjtRQUFBLHdCQUFPO1FBQUEsaUJBQVM7UUFDdEMsa0NBQXNCO1FBQUEseUJBQVE7UUFBQSxpQkFBUztRQUN2QyxrQ0FBc0I7UUFBQSw0QkFBVztRQUFBLGlCQUFTO1FBQzFDLGtDQUFzQjtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDckMsa0NBQXNCO1FBQUEsMEJBQVM7UUFBQSxpQkFBUztRQUN4QyxrQ0FBc0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQzNDLGtDQUFzQjtRQUFBLGdDQUFlO1FBQUEsaUJBQVM7UUFDaEQsaUJBQVc7UUFFWCwwQ0FDRTtRQUFBLGtDQUFzQjtRQUFBLCtCQUFjO1FBQUEsaUJBQVM7UUFDN0Msa0NBQXNCO1FBQUEsMkJBQVU7UUFBQSxpQkFBUztRQUN6QyxrQ0FBc0I7UUFBQSw4QkFBYTtRQUFBLGlCQUFTO1FBQzVDLGtDQUFzQjtRQUFBLDZCQUFZO1FBQUEsaUJBQVM7UUFDM0Msa0NBQXNCO1FBQUEsaUNBQWdCO1FBQUEsaUJBQVM7UUFDakQsaUJBQVc7UUFFWCwwQ0FDRTtRQUFBLGtDQUFzQjtRQUFBLG9DQUFtQjtRQUFBLGlCQUFTO1FBQ2xELGtDQUFzQjtRQUFBLDZCQUFZO1FBQUEsaUJBQVM7UUFDM0Msa0NBQXNCO1FBQUEsNEJBQVc7UUFBQSxpQkFBUztRQUMxQyxrQ0FBc0I7UUFBQSw4QkFBYTtRQUFBLGlCQUFTO1FBQzlDLGlCQUFXO1FBRVgsMENBQ0U7UUFBQSxrQ0FBc0I7UUFBQSxpQ0FBZ0I7UUFBQSxpQkFBUztRQUMvQyxrQ0FBc0I7UUFBQSxvQ0FBbUI7UUFBQSxpQkFBUztRQUNsRCxrQ0FBc0I7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBUztRQUNqRCxrQ0FBc0I7UUFBQSxrQ0FBaUI7UUFBQSxpQkFBUztRQUNoRCxrQ0FBK0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQ3RELGlCQUFXOzs7Ozs7OztRQTlDUSx1Q0FBNkI7UUFHeEIsZUFBaUM7UUFBakMsdUNBQWlDO1FBQ2pDLGVBQW1DO1FBQW5DLHVDQUFtQztRQUluQyxlQUEwQjtRQUExQix1Q0FBMEI7UUFDMUIsZUFBZ0M7UUFBaEMsd0NBQWdDO1FBQ2hDLGVBQThCO1FBQTlCLHdDQUE4Qjs7a0REQXpDLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE5lc3RlZCBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25lc3RlZC1tZW51LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ25lc3RlZC1tZW51LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZXN0ZWQtbWVudS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZXN0ZWRNZW51RXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJhbmltYWxzXCI+QW5pbWFsIGluZGV4PC9idXR0b24+XG5cbjxtYXQtbWVudSAjYW5pbWFscz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJ2ZXJ0ZWJyYXRlc1wiPlZlcnRlYnJhdGVzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwiaW52ZXJ0ZWJyYXRlc1wiPkludmVydGVicmF0ZXM8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjdmVydGVicmF0ZXM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwiZmlzaFwiPkZpc2hlczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFtcGhpYmlhbnNcIj5BbXBoaWJpYW5zPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwicmVwdGlsZXNcIj5SZXB0aWxlczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmlyZHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPk1hbW1hbHM8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjaW52ZXJ0ZWJyYXRlcz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkluc2VjdHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPk1vbGx1c2NzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5DcnVzdGFjZWFuczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+Q29yYWxzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5BcmFjaG5pZHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlZlbHZldCB3b3JtczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SG9yc2VzaG9lIGNyYWJzPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI2Zpc2g9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYWlrYWwgb2lsZmlzaDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFsYSBzaGFyazwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFsbGFuIHdyYXNzZTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFtYm9vIHNoYXJrPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW5kZWQga2lsbGlmaXNoPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI2FtcGhpYmlhbnM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Tb25vcmFuIGRlc2VydCB0b2FkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5XZXN0ZXJuIHRvYWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkFycm95byB0b2FkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Zb3NlbWl0ZSB0b2FkPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI3JlcHRpbGVzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFuZGVkIERheSBHZWNrbzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFuZGVkIEdpbGEgTW9uc3RlcjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmxhY2sgVHJlZSBNb25pdG9yPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CbHVlIFNwaW55IExpemFyZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gZGlzYWJsZWQ+VmVsb2NpcmFwdG9yPC9idXR0b24+XG48L21hdC1tZW51PlxuIl19