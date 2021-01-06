(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/menu')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/menu', ['exports', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/menu'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.menu = {}), global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.menu));
}(this, (function (exports, i0, i1, i3, i2) { 'use strict';

    /**
     * @title Menu with icons
     */
    var MenuIconsExample = /** @class */ (function () {
        function MenuIconsExample() {
        }
        return MenuIconsExample;
    }());
    MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
    MenuIconsExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵelementStart(1, "mat-icon");
                i0.ɵɵtext(2, "more_vert");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-menu", null, 1);
                i0.ɵɵelementStart(5, "button", 2);
                i0.ɵɵelementStart(6, "mat-icon");
                i0.ɵɵtext(7, "dialpad");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "span");
                i0.ɵɵtext(9, "Redial");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "button", 3);
                i0.ɵɵelementStart(11, "mat-icon");
                i0.ɵɵtext(12, "voicemail");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "span");
                i0.ɵɵtext(14, "Check voice mail");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "button", 2);
                i0.ɵɵelementStart(16, "mat-icon");
                i0.ɵɵtext(17, "notifications_off");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "span");
                i0.ɵɵtext(19, "Disable alerts");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                i0.ɵɵproperty("matMenuTriggerFor", _r0);
            }
        }, directives: [i1.MatButton, i2.MatMenuTrigger, i3.MatIcon, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuIconsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'menu-icons-example',
                        templateUrl: 'menu-icons-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Basic menu
     */
    var MenuOverviewExample = /** @class */ (function () {
        function MenuOverviewExample() {
        }
        return MenuOverviewExample;
    }());
    MenuOverviewExample.ɵfac = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
    MenuOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, "Menu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-menu", null, 1);
                i0.ɵɵelementStart(4, "button", 2);
                i0.ɵɵtext(5, "Item 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 2);
                i0.ɵɵtext(7, "Item 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(3);
                i0.ɵɵproperty("matMenuTriggerFor", _r0);
            }
        }, directives: [i1.MatButton, i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'menu-overview-example',
                        templateUrl: 'menu-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Menu positioning
     */
    var MenuPositionExample = /** @class */ (function () {
        function MenuPositionExample() {
        }
        return MenuPositionExample;
    }());
    MenuPositionExample.ɵfac = function MenuPositionExample_Factory(t) { return new (t || MenuPositionExample)(); };
    MenuPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["aboveMenu", "matMenu"], ["mat-menu-item", ""], ["yPosition", "below"], ["belowMenu", "matMenu"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["xPosition", "after"], ["afterMenu", "matMenu"]], template: function MenuPositionExample_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(3);
                var _r1 = i0.ɵɵreference(11);
                var _r2 = i0.ɵɵreference(19);
                var _r3 = i0.ɵɵreference(27);
                i0.ɵɵproperty("matMenuTriggerFor", _r0);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("matMenuTriggerFor", _r1);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("matMenuTriggerFor", _r2);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("matMenuTriggerFor", _r3);
            }
        }, directives: [i1.MatButton, i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuPositionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'menu-position-example',
                        templateUrl: 'menu-position-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Nested menu
     */
    var MenuNestedExample = /** @class */ (function () {
        function MenuNestedExample() {
        }
        return MenuNestedExample;
    }());
    MenuNestedExample.ɵfac = function MenuNestedExample_Factory(t) { return new (t || MenuNestedExample)(); };
    MenuNestedExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuNestedExample, selectors: [["menu-nested-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function MenuNestedExample_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(3);
                var _r1 = i0.ɵɵreference(9);
                var _r2 = i0.ɵɵreference(21);
                var _r3 = i0.ɵɵreference(37);
                var _r4 = i0.ɵɵreference(49);
                var _r5 = i0.ɵɵreference(59);
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
            }
        }, directives: [i1.MatButton, i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuNestedExample, [{
                type: i0.Component,
                args: [{
                        selector: 'menu-nested-example',
                        templateUrl: 'menu-nested-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatMenuHarness
     */
    var MenuHarnessExample = /** @class */ (function () {
        function MenuHarnessExample() {
        }
        return MenuHarnessExample;
    }());
    MenuHarnessExample.ɵfac = function MenuHarnessExample_Factory(t) { return new (t || MenuHarnessExample)(); };
    MenuHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuHarnessExample, selectors: [["menu-harness-example"]], decls: 10, vars: 2, consts: [["type", "button", 3, "matMenuTriggerFor"], ["type", "button", "disabled", "", 3, "matMenuTriggerFor"], ["settingsMenu", ""], ["mat-menu-item", ""]], template: function MenuHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, "Settings");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "button", 1);
                i0.ɵɵtext(3, "Disabled menu");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-menu", null, 2);
                i0.ɵɵelementStart(6, "menu", 3);
                i0.ɵɵtext(7, "Profile");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "menu", 3);
                i0.ɵɵtext(9, "Account");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(5);
                i0.ɵɵproperty("matMenuTriggerFor", _r0);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("matMenuTriggerFor", _r0);
            }
        }, directives: [i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'menu-harness-example',
                        templateUrl: 'menu-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        MenuHarnessExample,
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample,
    ];
    var MenuExamplesModule = /** @class */ (function () {
        function MenuExamplesModule() {
        }
        return MenuExamplesModule;
    }());
    MenuExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
    MenuExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
                i1.MatButtonModule,
                i3.MatIconModule,
                i2.MatMenuModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuHarnessExample,
                MenuIconsExample,
                MenuOverviewExample,
                MenuPositionExample,
                MenuNestedExample], imports: [i1.MatButtonModule,
                i3.MatIconModule,
                i2.MatMenuModule], exports: [MenuHarnessExample,
                MenuIconsExample,
                MenuOverviewExample,
                MenuPositionExample,
                MenuNestedExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatButtonModule,
                            i3.MatIconModule,
                            i2.MatMenuModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MenuExamplesModule = MenuExamplesModule;
    exports.MenuHarnessExample = MenuHarnessExample;
    exports.MenuIconsExample = MenuIconsExample;
    exports.MenuNestedExample = MenuNestedExample;
    exports.MenuOverviewExample = MenuOverviewExample;
    exports.MenuPositionExample = MenuPositionExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-menu.umd.js.map
