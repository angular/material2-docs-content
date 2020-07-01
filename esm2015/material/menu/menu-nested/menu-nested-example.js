import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Nested menu
 */
export class MenuNestedExample {
}
MenuNestedExample.ɵfac = function MenuNestedExample_Factory(t) { return new (t || MenuNestedExample)(); };
MenuNestedExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuNestedExample, selectors: [["menu-nested-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function MenuNestedExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuNestedExample, [{
        type: Component,
        args: [{
                selector: 'menu-nested-example',
                templateUrl: 'menu-nested-example.html',
                styleUrls: ['menu-nested-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uZXN0ZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8saUJBQWlCOztrRkFBakIsaUJBQWlCO3NEQUFqQixpQkFBaUI7UUNWOUIsaUNBQWlEO1FBQUEsNEJBQVk7UUFBQSxpQkFBUztRQUV0RSx5Q0FDRTtRQUFBLGlDQUF3RDtRQUFBLDJCQUFXO1FBQUEsaUJBQVM7UUFDNUUsaUNBQTBEO1FBQUEsNkJBQWE7UUFBQSxpQkFBUztRQUNsRixpQkFBVztRQUVYLHlDQUNFO1FBQUEsa0NBQWlEO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUNoRSxrQ0FBdUQ7UUFBQSwyQkFBVTtRQUFBLGlCQUFTO1FBQzFFLGtDQUFxRDtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDdEUsa0NBQXNCO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUNwQyxrQ0FBc0I7UUFBQSx3QkFBTztRQUFBLGlCQUFTO1FBQ3hDLGlCQUFXO1FBR1gsMENBQ0U7UUFBQSxrQ0FBc0I7UUFBQSx3QkFBTztRQUFBLGlCQUFTO1FBQ3RDLGtDQUFzQjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDdkMsa0NBQXNCO1FBQUEsNEJBQVc7UUFBQSxpQkFBUztRQUMxQyxrQ0FBc0I7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ3JDLGtDQUFzQjtRQUFBLDBCQUFTO1FBQUEsaUJBQVM7UUFDeEMsa0NBQXNCO1FBQUEsNkJBQVk7UUFBQSxpQkFBUztRQUMzQyxrQ0FBc0I7UUFBQSxnQ0FBZTtRQUFBLGlCQUFTO1FBQ2hELGlCQUFXO1FBRVgsMENBQ0U7UUFBQSxrQ0FBc0I7UUFBQSwrQkFBYztRQUFBLGlCQUFTO1FBQzdDLGtDQUFzQjtRQUFBLDJCQUFVO1FBQUEsaUJBQVM7UUFDekMsa0NBQXNCO1FBQUEsOEJBQWE7UUFBQSxpQkFBUztRQUM1QyxrQ0FBc0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQzNDLGtDQUFzQjtRQUFBLGlDQUFnQjtRQUFBLGlCQUFTO1FBQ2pELGlCQUFXO1FBRVgsMENBQ0U7UUFBQSxrQ0FBc0I7UUFBQSxvQ0FBbUI7UUFBQSxpQkFBUztRQUNsRCxrQ0FBc0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQzNDLGtDQUFzQjtRQUFBLDRCQUFXO1FBQUEsaUJBQVM7UUFDMUMsa0NBQXNCO1FBQUEsOEJBQWE7UUFBQSxpQkFBUztRQUM5QyxpQkFBVztRQUVYLDBDQUNFO1FBQUEsa0NBQXNCO1FBQUEsaUNBQWdCO1FBQUEsaUJBQVM7UUFDL0Msa0NBQXNCO1FBQUEsb0NBQW1CO1FBQUEsaUJBQVM7UUFDbEQsa0NBQXNCO1FBQUEsbUNBQWtCO1FBQUEsaUJBQVM7UUFDakQsa0NBQXNCO1FBQUEsa0NBQWlCO1FBQUEsaUJBQVM7UUFDaEQsa0NBQStCO1FBQUEsNkJBQVk7UUFBQSxpQkFBUztRQUN0RCxpQkFBVzs7Ozs7Ozs7UUEvQ1EsdUNBQTZCO1FBR3hCLGVBQWlDO1FBQWpDLHVDQUFpQztRQUNqQyxlQUFtQztRQUFuQyx1Q0FBbUM7UUFJbkMsZUFBMEI7UUFBMUIsdUNBQTBCO1FBQzFCLGVBQWdDO1FBQWhDLHVDQUFnQztRQUNoQyxlQUE4QjtRQUE5Qix1Q0FBOEI7O2tEREF6QyxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBOZXN0ZWQgbWVudVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LW5lc3RlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LW5lc3RlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWVudS1uZXN0ZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudU5lc3RlZEV4YW1wbGUge31cbiIsIjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYW5pbWFsc1wiPkFuaW1hbCBpbmRleDwvYnV0dG9uPlxuPCEtLSAjZG9jcmVnaW9uIHN1Yi1tZW51IC0tPlxuPG1hdC1tZW51ICNhbmltYWxzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInZlcnRlYnJhdGVzXCI+VmVydGVicmF0ZXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJpbnZlcnRlYnJhdGVzXCI+SW52ZXJ0ZWJyYXRlczwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICN2ZXJ0ZWJyYXRlcz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJmaXNoXCI+RmlzaGVzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYW1waGliaWFuc1wiPkFtcGhpYmlhbnM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJyZXB0aWxlc1wiPlJlcHRpbGVzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CaXJkczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+TWFtbWFsczwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBzdWItbWVudSAtLT5cblxuPG1hdC1tZW51ICNpbnZlcnRlYnJhdGVzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SW5zZWN0czwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+TW9sbHVzY3M8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkNydXN0YWNlYW5zPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Db3JhbHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkFyYWNobmlkczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+VmVsdmV0IHdvcm1zPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Ib3JzZXNob2UgY3JhYnM8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjZmlzaD1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhaWthbCBvaWxmaXNoPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYWxhIHNoYXJrPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYWxsYW4gd3Jhc3NlPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW1ib28gc2hhcms8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbmRlZCBraWxsaWZpc2g8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjYW1waGliaWFucz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlNvbm9yYW4gZGVzZXJ0IHRvYWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPldlc3Rlcm4gdG9hZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QXJyb3lvIHRvYWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPllvc2VtaXRlIHRvYWQ8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjcmVwdGlsZXM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW5kZWQgRGF5IEdlY2tvPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW5kZWQgR2lsYSBNb25zdGVyPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CbGFjayBUcmVlIE1vbml0b3I8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJsdWUgU3BpbnkgTGl6YXJkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBkaXNhYmxlZD5WZWxvY2lyYXB0b3I8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG4iXX0=