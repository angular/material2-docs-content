/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
const _c0 = ["animals", "matMenu"];
const _c1 = ["vertebrates", "matMenu"];
const _c2 = ["invertebrates", "matMenu"];
const _c3 = ["fish", "matMenu"];
const _c4 = ["amphibians", "matMenu"];
const _c5 = ["reptiles", "matMenu"];
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
/** @nocollapse */ NestedMenuExample.ngFactoryDef = function NestedMenuExample_Factory(t) { return new (t || NestedMenuExample)(); };
/** @nocollapse */ NestedMenuExample.ngComponentDef = i0.ɵɵdefineComponent({ type: NestedMenuExample, selectors: [["nested-menu-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function NestedMenuExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Animal index");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-menu", null, _c0);
        i0.ɵɵelementStart(4, "button", 1);
        i0.ɵɵtext(5, "Vertebrates");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 1);
        i0.ɵɵtext(7, "Invertebrates");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-menu", null, _c1);
        i0.ɵɵelementStart(10, "button", 1);
        i0.ɵɵtext(11, "Fishes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 1);
        i0.ɵɵtext(13, "Amphibians");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 1);
        i0.ɵɵtext(15, "Reptiles");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 2);
        i0.ɵɵtext(17, "Birds");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 2);
        i0.ɵɵtext(19, "Mammals");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-menu", null, _c2);
        i0.ɵɵelementStart(22, "button", 2);
        i0.ɵɵtext(23, "Insects");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 2);
        i0.ɵɵtext(25, "Molluscs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "button", 2);
        i0.ɵɵtext(27, "Crustaceans");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "button", 2);
        i0.ɵɵtext(29, "Corals");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "button", 2);
        i0.ɵɵtext(31, "Arachnids");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "button", 2);
        i0.ɵɵtext(33, "Velvet worms");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 2);
        i0.ɵɵtext(35, "Horseshoe crabs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "mat-menu", null, _c3);
        i0.ɵɵelementStart(38, "button", 2);
        i0.ɵɵtext(39, "Baikal oilfish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "button", 2);
        i0.ɵɵtext(41, "Bala shark");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "button", 2);
        i0.ɵɵtext(43, "Ballan wrasse");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "button", 2);
        i0.ɵɵtext(45, "Bamboo shark");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "button", 2);
        i0.ɵɵtext(47, "Banded killifish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "mat-menu", null, _c4);
        i0.ɵɵelementStart(50, "button", 2);
        i0.ɵɵtext(51, "Sonoran desert toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "button", 2);
        i0.ɵɵtext(53, "Western toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "button", 2);
        i0.ɵɵtext(55, "Arroyo toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "button", 2);
        i0.ɵɵtext(57, "Yosemite toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "mat-menu", null, _c5);
        i0.ɵɵelementStart(60, "button", 2);
        i0.ɵɵtext(61, "Banded Day Gecko");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "button", 2);
        i0.ɵɵtext(63, "Banded Gila Monster");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "button", 2);
        i0.ɵɵtext(65, "Black Tree Monitor");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "button", 2);
        i0.ɵɵtext(67, "Blue Spiny Lizard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "button", 3);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(NestedMenuExample, [{
        type: Component,
        args: [{
                selector: 'nested-menu-example',
                templateUrl: 'nested-menu-example.html',
                styleUrls: ['nested-menu-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW1lbnUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9tZW51L25lc3RlZC1tZW51L25lc3RlZC1tZW51LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9uZXN0ZWQtbWVudS9uZXN0ZWQtbWVudS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVeEMsTUFBTSxPQUFPLGlCQUFpQjs7O1lBTDdCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2Qzs7MEZBQ1ksaUJBQWlCO2dFQUFqQixpQkFBaUI7UUNWOUIsaUNBQWlEO1FBQUEsNEJBQVk7UUFBQSxpQkFBUztRQUV0RSwyQ0FDRTtRQUFBLGlDQUF3RDtRQUFBLDJCQUFXO1FBQUEsaUJBQVM7UUFDNUUsaUNBQTBEO1FBQUEsNkJBQWE7UUFBQSxpQkFBUztRQUNsRixpQkFBVztRQUVYLDJDQUNFO1FBQUEsa0NBQWlEO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUNoRSxrQ0FBdUQ7UUFBQSwyQkFBVTtRQUFBLGlCQUFTO1FBQzFFLGtDQUFxRDtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDdEUsa0NBQXNCO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUNwQyxrQ0FBc0I7UUFBQSx3QkFBTztRQUFBLGlCQUFTO1FBQ3hDLGlCQUFXO1FBRVgsNENBQ0U7UUFBQSxrQ0FBc0I7UUFBQSx3QkFBTztRQUFBLGlCQUFTO1FBQ3RDLGtDQUFzQjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDdkMsa0NBQXNCO1FBQUEsNEJBQVc7UUFBQSxpQkFBUztRQUMxQyxrQ0FBc0I7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ3JDLGtDQUFzQjtRQUFBLDBCQUFTO1FBQUEsaUJBQVM7UUFDeEMsa0NBQXNCO1FBQUEsNkJBQVk7UUFBQSxpQkFBUztRQUMzQyxrQ0FBc0I7UUFBQSxnQ0FBZTtRQUFBLGlCQUFTO1FBQ2hELGlCQUFXO1FBRVgsNENBQ0U7UUFBQSxrQ0FBc0I7UUFBQSwrQkFBYztRQUFBLGlCQUFTO1FBQzdDLGtDQUFzQjtRQUFBLDJCQUFVO1FBQUEsaUJBQVM7UUFDekMsa0NBQXNCO1FBQUEsOEJBQWE7UUFBQSxpQkFBUztRQUM1QyxrQ0FBc0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQzNDLGtDQUFzQjtRQUFBLGlDQUFnQjtRQUFBLGlCQUFTO1FBQ2pELGlCQUFXO1FBRVgsNENBQ0U7UUFBQSxrQ0FBc0I7UUFBQSxvQ0FBbUI7UUFBQSxpQkFBUztRQUNsRCxrQ0FBc0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQzNDLGtDQUFzQjtRQUFBLDRCQUFXO1FBQUEsaUJBQVM7UUFDMUMsa0NBQXNCO1FBQUEsOEJBQWE7UUFBQSxpQkFBUztRQUM5QyxpQkFBVztRQUVYLDRDQUNFO1FBQUEsa0NBQXNCO1FBQUEsaUNBQWdCO1FBQUEsaUJBQVM7UUFDL0Msa0NBQXNCO1FBQUEsb0NBQW1CO1FBQUEsaUJBQVM7UUFDbEQsa0NBQXNCO1FBQUEsbUNBQWtCO1FBQUEsaUJBQVM7UUFDakQsa0NBQXNCO1FBQUEsa0NBQWlCO1FBQUEsaUJBQVM7UUFDaEQsa0NBQStCO1FBQUEsNkJBQVk7UUFBQSxpQkFBUztRQUN0RCxpQkFBVzs7Ozs7Ozs7UUE5Q1EsdUNBQTZCO1FBR3hCLGVBQWlDO1FBQWpDLHVDQUFpQztRQUNqQyxlQUFtQztRQUFuQyx1Q0FBbUM7UUFJbkMsZUFBMEI7UUFBMUIsdUNBQTBCO1FBQzFCLGVBQWdDO1FBQWhDLHdDQUFnQztRQUNoQyxlQUE4QjtRQUE5Qix3Q0FBOEI7O21DREF6QyxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBOZXN0ZWQgbWVudVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZXN0ZWQtbWVudS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICduZXN0ZWQtbWVudS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmVzdGVkLW1lbnUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmVzdGVkTWVudUV4YW1wbGUge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYW5pbWFsc1wiPkFuaW1hbCBpbmRleDwvYnV0dG9uPlxuXG48bWF0LW1lbnUgI2FuaW1hbHM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwidmVydGVicmF0ZXNcIj5WZXJ0ZWJyYXRlczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImludmVydGVicmF0ZXNcIj5JbnZlcnRlYnJhdGVzPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI3ZlcnRlYnJhdGVzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImZpc2hcIj5GaXNoZXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJhbXBoaWJpYW5zXCI+QW1waGliaWFuczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInJlcHRpbGVzXCI+UmVwdGlsZXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJpcmRzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5NYW1tYWxzPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI2ludmVydGVicmF0ZXM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JbnNlY3RzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Nb2xsdXNjczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+Q3J1c3RhY2VhbnM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkNvcmFsczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QXJhY2huaWRzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5WZWx2ZXQgd29ybXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkhvcnNlc2hvZSBjcmFiczwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICNmaXNoPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFpa2FsIG9pbGZpc2g8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbGEgc2hhcms8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbGxhbiB3cmFzc2U8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbWJvbyBzaGFyazwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFuZGVkIGtpbGxpZmlzaDwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICNhbXBoaWJpYW5zPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+U29ub3JhbiBkZXNlcnQgdG9hZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+V2VzdGVybiB0b2FkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5BcnJveW8gdG9hZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+WW9zZW1pdGUgdG9hZDwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICNyZXB0aWxlcz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbmRlZCBEYXkgR2Vja288L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbmRlZCBHaWxhIE1vbnN0ZXI8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJsYWNrIFRyZWUgTW9uaXRvcjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+Qmx1ZSBTcGlueSBMaXphcmQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGRpc2FibGVkPlZlbG9jaXJhcHRvcjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==