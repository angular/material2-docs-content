/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Nested menu
 */
export class NestedMenuExample {
}
NestedMenuExample.decorators = [
    { type: Component, args: [{
                selector: 'nested-menu-example',
                template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n<mat-menu #animals=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n</mat-menu>\r\n\r\n<mat-menu #vertebrates=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n  <button mat-menu-item>Birds</button>\r\n  <button mat-menu-item>Mammals</button>\r\n</mat-menu>\r\n\r\n<mat-menu #invertebrates=\"matMenu\">\r\n  <button mat-menu-item>Insects</button>\r\n  <button mat-menu-item>Molluscs</button>\r\n  <button mat-menu-item>Crustaceans</button>\r\n  <button mat-menu-item>Corals</button>\r\n  <button mat-menu-item>Arachnids</button>\r\n  <button mat-menu-item>Velvet worms</button>\r\n  <button mat-menu-item>Horseshoe crabs</button>\r\n</mat-menu>\r\n\r\n<mat-menu #fish=\"matMenu\">\r\n  <button mat-menu-item>Baikal oilfish</button>\r\n  <button mat-menu-item>Bala shark</button>\r\n  <button mat-menu-item>Ballan wrasse</button>\r\n  <button mat-menu-item>Bamboo shark</button>\r\n  <button mat-menu-item>Banded killifish</button>\r\n</mat-menu>\r\n\r\n<mat-menu #amphibians=\"matMenu\">\r\n  <button mat-menu-item>Sonoran desert toad</button>\r\n  <button mat-menu-item>Western toad</button>\r\n  <button mat-menu-item>Arroyo toad</button>\r\n  <button mat-menu-item>Yosemite toad</button>\r\n</mat-menu>\r\n\r\n<mat-menu #reptiles=\"matMenu\">\r\n  <button mat-menu-item>Banded Day Gecko</button>\r\n  <button mat-menu-item>Banded Gila Monster</button>\r\n  <button mat-menu-item>Black Tree Monitor</button>\r\n  <button mat-menu-item>Blue Spiny Lizard</button>\r\n  <button mat-menu-item disabled>Velociraptor</button>\r\n</mat-menu>\r\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW1lbnUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9uZXN0ZWQtbWVudS9uZXN0ZWQtbWVudS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyxpQkFBaUI7OztZQUw3QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsaTdEQUF1Qzs7YUFFeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE5lc3RlZCBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25lc3RlZC1tZW51LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ25lc3RlZC1tZW51LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZXN0ZWQtbWVudS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZXN0ZWRNZW51RXhhbXBsZSB7fVxuIl19