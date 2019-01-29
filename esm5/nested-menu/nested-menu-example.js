import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Nested menu
 */
var NestedMenuExample = /** @class */ (function () {
    function NestedMenuExample() {
    }
    NestedMenuExample = tslib_1.__decorate([
        Component({
            selector: 'nested-menu-example',
            template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n<mat-menu #animals=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n</mat-menu>\r\n\r\n<mat-menu #vertebrates=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n  <button mat-menu-item>Birds</button>\r\n  <button mat-menu-item>Mammals</button>\r\n</mat-menu>\r\n\r\n<mat-menu #invertebrates=\"matMenu\">\r\n  <button mat-menu-item>Insects</button>\r\n  <button mat-menu-item>Molluscs</button>\r\n  <button mat-menu-item>Crustaceans</button>\r\n  <button mat-menu-item>Corals</button>\r\n  <button mat-menu-item>Arachnids</button>\r\n  <button mat-menu-item>Velvet worms</button>\r\n  <button mat-menu-item>Horseshoe crabs</button>\r\n</mat-menu>\r\n\r\n<mat-menu #fish=\"matMenu\">\r\n  <button mat-menu-item>Baikal oilfish</button>\r\n  <button mat-menu-item>Bala shark</button>\r\n  <button mat-menu-item>Ballan wrasse</button>\r\n  <button mat-menu-item>Bamboo shark</button>\r\n  <button mat-menu-item>Banded killifish</button>\r\n</mat-menu>\r\n\r\n<mat-menu #amphibians=\"matMenu\">\r\n  <button mat-menu-item>Sonoran desert toad</button>\r\n  <button mat-menu-item>Western toad</button>\r\n  <button mat-menu-item>Arroyo toad</button>\r\n  <button mat-menu-item>Yosemite toad</button>\r\n</mat-menu>\r\n\r\n<mat-menu #reptiles=\"matMenu\">\r\n  <button mat-menu-item>Banded Day Gecko</button>\r\n  <button mat-menu-item>Banded Gila Monster</button>\r\n  <button mat-menu-item>Black Tree Monitor</button>\r\n  <button mat-menu-item>Blue Spiny Lizard</button>\r\n  <button mat-menu-item disabled>Velociraptor</button>\r\n</mat-menu>\r\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], NestedMenuExample);
    return NestedMenuExample;
}());
export { NestedMenuExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW1lbnUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9uZXN0ZWQtbWVudS9uZXN0ZWQtbWVudS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLGk3REFBdUM7O1NBRXhDLENBQUM7T0FDVyxpQkFBaUIsQ0FBRztJQUFELHdCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBOZXN0ZWQgbWVudVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZXN0ZWQtbWVudS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICduZXN0ZWQtbWVudS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmVzdGVkLW1lbnUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmVzdGVkTWVudUV4YW1wbGUge31cbiJdfQ==