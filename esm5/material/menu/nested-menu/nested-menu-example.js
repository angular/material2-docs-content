import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
var _c0 = ["animals", "matMenu"];
var _c1 = ["vertebrates", "matMenu"];
var _c2 = ["invertebrates", "matMenu"];
var _c3 = ["fish", "matMenu"];
var _c4 = ["amphibians", "matMenu"];
var _c5 = ["reptiles", "matMenu"];
/**
 * @title Nested menu
 */
var NestedMenuExample = /** @class */ (function () {
    function NestedMenuExample() {
    }
    NestedMenuExample.decorators = [
        { type: Component, args: [{
                    selector: 'nested-menu-example',
                    templateUrl: 'nested-menu-example.html',
                    styleUrls: ['nested-menu-example.css'],
                },] },
    ];
    NestedMenuExample.ɵfac = function NestedMenuExample_Factory(t) { return new (t || NestedMenuExample)(); };
    NestedMenuExample.ɵcmp = i0.ɵɵdefineComponent({ type: NestedMenuExample, selectors: [["nested-menu-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function NestedMenuExample_Template(rf, ctx) { if (rf & 1) {
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
            var _r6 = i0.ɵɵreference(3);
            var _r7 = i0.ɵɵreference(9);
            var _r8 = i0.ɵɵreference(21);
            var _r9 = i0.ɵɵreference(37);
            var _r10 = i0.ɵɵreference(49);
            var _r11 = i0.ɵɵreference(59);
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
    return NestedMenuExample;
}());
export { NestedMenuExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(NestedMenuExample, [{
        type: Component,
        args: [{
                selector: 'nested-menu-example',
                templateUrl: 'nested-menu-example.html',
                styleUrls: ['nested-menu-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW1lbnUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9tZW51L25lc3RlZC1tZW51L25lc3RlZC1tZW51LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9uZXN0ZWQtbWVudS9uZXN0ZWQtbWVudS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLaUM7O2dCQUxoQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtvQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7aUJBQ3ZDOztzRkFDWSxpQkFBaUI7MERBQWpCLGlCQUFpQjtZQ1Y5QixpQ0FBaUQ7WUFBQSw0QkFBWTtZQUFBLGlCQUFTO1lBRXRFLDJDQUNFO1lBQUEsaUNBQXdEO1lBQUEsMkJBQVc7WUFBQSxpQkFBUztZQUM1RSxpQ0FBMEQ7WUFBQSw2QkFBYTtZQUFBLGlCQUFTO1lBQ2xGLGlCQUFXO1lBRVgsMkNBQ0U7WUFBQSxrQ0FBaUQ7WUFBQSx1QkFBTTtZQUFBLGlCQUFTO1lBQ2hFLGtDQUF1RDtZQUFBLDJCQUFVO1lBQUEsaUJBQVM7WUFDMUUsa0NBQXFEO1lBQUEseUJBQVE7WUFBQSxpQkFBUztZQUN0RSxrQ0FBc0I7WUFBQSxzQkFBSztZQUFBLGlCQUFTO1lBQ3BDLGtDQUFzQjtZQUFBLHdCQUFPO1lBQUEsaUJBQVM7WUFDeEMsaUJBQVc7WUFFWCw0Q0FDRTtZQUFBLGtDQUFzQjtZQUFBLHdCQUFPO1lBQUEsaUJBQVM7WUFDdEMsa0NBQXNCO1lBQUEseUJBQVE7WUFBQSxpQkFBUztZQUN2QyxrQ0FBc0I7WUFBQSw0QkFBVztZQUFBLGlCQUFTO1lBQzFDLGtDQUFzQjtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDckMsa0NBQXNCO1lBQUEsMEJBQVM7WUFBQSxpQkFBUztZQUN4QyxrQ0FBc0I7WUFBQSw2QkFBWTtZQUFBLGlCQUFTO1lBQzNDLGtDQUFzQjtZQUFBLGdDQUFlO1lBQUEsaUJBQVM7WUFDaEQsaUJBQVc7WUFFWCw0Q0FDRTtZQUFBLGtDQUFzQjtZQUFBLCtCQUFjO1lBQUEsaUJBQVM7WUFDN0Msa0NBQXNCO1lBQUEsMkJBQVU7WUFBQSxpQkFBUztZQUN6QyxrQ0FBc0I7WUFBQSw4QkFBYTtZQUFBLGlCQUFTO1lBQzVDLGtDQUFzQjtZQUFBLDZCQUFZO1lBQUEsaUJBQVM7WUFDM0Msa0NBQXNCO1lBQUEsaUNBQWdCO1lBQUEsaUJBQVM7WUFDakQsaUJBQVc7WUFFWCw0Q0FDRTtZQUFBLGtDQUFzQjtZQUFBLG9DQUFtQjtZQUFBLGlCQUFTO1lBQ2xELGtDQUFzQjtZQUFBLDZCQUFZO1lBQUEsaUJBQVM7WUFDM0Msa0NBQXNCO1lBQUEsNEJBQVc7WUFBQSxpQkFBUztZQUMxQyxrQ0FBc0I7WUFBQSw4QkFBYTtZQUFBLGlCQUFTO1lBQzlDLGlCQUFXO1lBRVgsNENBQ0U7WUFBQSxrQ0FBc0I7WUFBQSxpQ0FBZ0I7WUFBQSxpQkFBUztZQUMvQyxrQ0FBc0I7WUFBQSxvQ0FBbUI7WUFBQSxpQkFBUztZQUNsRCxrQ0FBc0I7WUFBQSxtQ0FBa0I7WUFBQSxpQkFBUztZQUNqRCxrQ0FBc0I7WUFBQSxrQ0FBaUI7WUFBQSxpQkFBUztZQUNoRCxrQ0FBK0I7WUFBQSw2QkFBWTtZQUFBLGlCQUFTO1lBQ3RELGlCQUFXOzs7Ozs7OztZQTlDUSx1Q0FBNkI7WUFHeEIsZUFBaUM7WUFBakMsdUNBQWlDO1lBQ2pDLGVBQW1DO1lBQW5DLHVDQUFtQztZQUluQyxlQUEwQjtZQUExQix1Q0FBMEI7WUFDMUIsZUFBZ0M7WUFBaEMsd0NBQWdDO1lBQ2hDLGVBQThCO1lBQTlCLHdDQUE4Qjs7NEJEVnREO0NBVWlDLEFBTGpDLElBS2lDO1NBQXBCLGlCQUFpQjttQ0FBakIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTmVzdGVkIG1lbnVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmVzdGVkLW1lbnUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbmVzdGVkLW1lbnUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25lc3RlZC1tZW51LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5lc3RlZE1lbnVFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFuaW1hbHNcIj5BbmltYWwgaW5kZXg8L2J1dHRvbj5cblxuPG1hdC1tZW51ICNhbmltYWxzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInZlcnRlYnJhdGVzXCI+VmVydGVicmF0ZXM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJpbnZlcnRlYnJhdGVzXCI+SW52ZXJ0ZWJyYXRlczwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICN2ZXJ0ZWJyYXRlcz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJmaXNoXCI+RmlzaGVzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYW1waGliaWFuc1wiPkFtcGhpYmlhbnM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJyZXB0aWxlc1wiPlJlcHRpbGVzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CaXJkczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+TWFtbWFsczwvYnV0dG9uPlxuPC9tYXQtbWVudT5cblxuPG1hdC1tZW51ICNpbnZlcnRlYnJhdGVzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SW5zZWN0czwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+TW9sbHVzY3M8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkNydXN0YWNlYW5zPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Db3JhbHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkFyYWNobmlkczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+VmVsdmV0IHdvcm1zPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Ib3JzZXNob2UgY3JhYnM8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjZmlzaD1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhaWthbCBvaWxmaXNoPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYWxhIHNoYXJrPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYWxsYW4gd3Jhc3NlPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW1ib28gc2hhcms8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJhbmRlZCBraWxsaWZpc2g8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjYW1waGliaWFucz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlNvbm9yYW4gZGVzZXJ0IHRvYWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPldlc3Rlcm4gdG9hZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QXJyb3lvIHRvYWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPllvc2VtaXRlIHRvYWQ8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjcmVwdGlsZXM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW5kZWQgRGF5IEdlY2tvPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW5kZWQgR2lsYSBNb25zdGVyPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CbGFjayBUcmVlIE1vbml0b3I8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkJsdWUgU3BpbnkgTGl6YXJkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBkaXNhYmxlZD5WZWxvY2lyYXB0b3I8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG4iXX0=