(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/menu')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/menu', ['exports', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/menu'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.menu = {}), global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.menu));
}(this, function (exports, core, button, icon, menu) { 'use strict';

    /**
     * @title Menu with icons
     */
    var MenuIconsExample = /** @class */ (function () {
        function MenuIconsExample() {
        }
        MenuIconsExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'menu-icons-example',
                        template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return MenuIconsExample;
    }());

    /**
     * @title Basic menu
     */
    var MenuOverviewExample = /** @class */ (function () {
        function MenuOverviewExample() {
        }
        MenuOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'menu-overview-example',
                        template: "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return MenuOverviewExample;
    }());

    /**
     * @title Menu positioning
     */
    var MenuPositionExample = /** @class */ (function () {
        function MenuPositionExample() {
        }
        MenuPositionExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'menu-position-example',
                        template: "<button mat-button [matMenuTriggerFor]=\"aboveMenu\">Above</button>\n<mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\">Below</button>\n<mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"beforeMenu\">Before</button>\n<mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n\n<button mat-button [matMenuTriggerFor]=\"afterMenu\">After</button>\n<mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return MenuPositionExample;
    }());

    /**
     * @title Nested menu
     */
    var NestedMenuExample = /** @class */ (function () {
        function NestedMenuExample() {
        }
        NestedMenuExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'nested-menu-example',
                        template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return NestedMenuExample;
    }());

    var EXAMPLES = [
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample,
    ];
    var MenuExamplesModule = /** @class */ (function () {
        function MenuExamplesModule() {
        }
        MenuExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            button.MatButtonModule,
                            icon.MatIconModule,
                            menu.MatMenuModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return MenuExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MenuIconsExample = MenuIconsExample;
    exports.MenuOverviewExample = MenuOverviewExample;
    exports.MenuPositionExample = MenuPositionExample;
    exports.NestedMenuExample = NestedMenuExample;
    exports.MenuExamplesModule = MenuExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-menu.umd.js.map
