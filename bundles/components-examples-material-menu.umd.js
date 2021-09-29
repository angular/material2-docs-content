(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/menu')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/menu', ['exports', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/menu'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.menu = {}), global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.menu));
}(this, (function (exports, i0, i1, i3, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    /**
     * @title Menu with icons
     */
    var MenuIconsExample = /** @class */ (function () {
        function MenuIconsExample() {
        }
        return MenuIconsExample;
    }());
    MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
    MenuIconsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵelementStart(1, "mat-icon");
                i0__namespace.ɵɵtext(2, "more_vert");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-menu", null, 1);
                i0__namespace.ɵɵelementStart(5, "button", 2);
                i0__namespace.ɵɵelementStart(6, "mat-icon");
                i0__namespace.ɵɵtext(7, "dialpad");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "span");
                i0__namespace.ɵɵtext(9, "Redial");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "button", 3);
                i0__namespace.ɵɵelementStart(11, "mat-icon");
                i0__namespace.ɵɵtext(12, "voicemail");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "span");
                i0__namespace.ɵɵtext(14, "Check voice mail");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "button", 2);
                i0__namespace.ɵɵelementStart(16, "mat-icon");
                i0__namespace.ɵɵtext(17, "notifications_off");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "span");
                i0__namespace.ɵɵtext(19, "Disable alerts");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(4);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r0);
            }
        }, directives: [i1__namespace.MatButton, i2__namespace.MatMenuTrigger, i3__namespace.MatIcon, i2__namespace.MatMenu, i2__namespace.MatMenuItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MenuIconsExample, [{
                type: i0.Component,
                args: [{ selector: 'menu-icons-example', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n" }]
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
    MenuOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-menu", null, 1);
                i0__namespace.ɵɵelementStart(4, "button", 2);
                i0__namespace.ɵɵtext(5, "Item 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 2);
                i0__namespace.ɵɵtext(7, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r0);
            }
        }, directives: [i1__namespace.MatButton, i2__namespace.MatMenuTrigger, i2__namespace.MatMenu, i2__namespace.MatMenuItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MenuOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'menu-overview-example', template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
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
    MenuPositionExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["aboveMenu", "matMenu"], ["mat-menu-item", ""], ["yPosition", "below"], ["belowMenu", "matMenu"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["xPosition", "after"], ["afterMenu", "matMenu"]], template: function MenuPositionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Above");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-menu", 1, 2);
                i0__namespace.ɵɵelementStart(4, "button", 3);
                i0__namespace.ɵɵtext(5, "Item 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵtext(7, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "button", 0);
                i0__namespace.ɵɵtext(9, "Below");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-menu", 4, 5);
                i0__namespace.ɵɵelementStart(12, "button", 3);
                i0__namespace.ɵɵtext(13, "Item 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "button", 3);
                i0__namespace.ɵɵtext(15, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "button", 0);
                i0__namespace.ɵɵtext(17, "Before");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-menu", 6, 7);
                i0__namespace.ɵɵelementStart(20, "button", 3);
                i0__namespace.ɵɵtext(21, "Item 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "button", 3);
                i0__namespace.ɵɵtext(23, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 0);
                i0__namespace.ɵɵtext(25, "After");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "mat-menu", 8, 9);
                i0__namespace.ɵɵelementStart(28, "button", 3);
                i0__namespace.ɵɵtext(29, "Item 1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "button", 3);
                i0__namespace.ɵɵtext(31, "Item 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                var _r1 = i0__namespace.ɵɵreference(11);
                var _r2 = i0__namespace.ɵɵreference(19);
                var _r3 = i0__namespace.ɵɵreference(27);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r0);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r1);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r2);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r3);
            }
        }, directives: [i1__namespace.MatButton, i2__namespace.MatMenuTrigger, i2__namespace.MatMenu, i2__namespace.MatMenuItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MenuPositionExample, [{
                type: i0.Component,
                args: [{ selector: 'menu-position-example', template: "<button mat-button [matMenuTriggerFor]=\"aboveMenu\">Above</button>\n<!-- #docregion menu-position -->\n<mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n<!-- #enddocregion menu-position -->\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\">Below</button>\n<mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"beforeMenu\">Before</button>\n<mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n\n<button mat-button [matMenuTriggerFor]=\"afterMenu\">After</button>\n<mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
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
    MenuNestedExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MenuNestedExample, selectors: [["menu-nested-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function MenuNestedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Animal index");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-menu", null, 1);
                i0__namespace.ɵɵelementStart(4, "button", 2);
                i0__namespace.ɵɵtext(5, "Vertebrates");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 2);
                i0__namespace.ɵɵtext(7, "Invertebrates");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-menu", null, 3);
                i0__namespace.ɵɵelementStart(10, "button", 2);
                i0__namespace.ɵɵtext(11, "Fishes");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 2);
                i0__namespace.ɵɵtext(13, "Amphibians");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "button", 2);
                i0__namespace.ɵɵtext(15, "Reptiles");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "button", 4);
                i0__namespace.ɵɵtext(17, "Birds");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "button", 4);
                i0__namespace.ɵɵtext(19, "Mammals");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "mat-menu", null, 5);
                i0__namespace.ɵɵelementStart(22, "button", 4);
                i0__namespace.ɵɵtext(23, "Insects");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 4);
                i0__namespace.ɵɵtext(25, "Molluscs");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "button", 4);
                i0__namespace.ɵɵtext(27, "Crustaceans");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "button", 4);
                i0__namespace.ɵɵtext(29, "Corals");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "button", 4);
                i0__namespace.ɵɵtext(31, "Arachnids");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "button", 4);
                i0__namespace.ɵɵtext(33, "Velvet worms");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(34, "button", 4);
                i0__namespace.ɵɵtext(35, "Horseshoe crabs");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(36, "mat-menu", null, 6);
                i0__namespace.ɵɵelementStart(38, "button", 4);
                i0__namespace.ɵɵtext(39, "Baikal oilfish");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(40, "button", 4);
                i0__namespace.ɵɵtext(41, "Bala shark");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(42, "button", 4);
                i0__namespace.ɵɵtext(43, "Ballan wrasse");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(44, "button", 4);
                i0__namespace.ɵɵtext(45, "Bamboo shark");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(46, "button", 4);
                i0__namespace.ɵɵtext(47, "Banded killifish");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(48, "mat-menu", null, 7);
                i0__namespace.ɵɵelementStart(50, "button", 4);
                i0__namespace.ɵɵtext(51, "Sonoran desert toad");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(52, "button", 4);
                i0__namespace.ɵɵtext(53, "Western toad");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(54, "button", 4);
                i0__namespace.ɵɵtext(55, "Arroyo toad");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(56, "button", 4);
                i0__namespace.ɵɵtext(57, "Yosemite toad");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(58, "mat-menu", null, 8);
                i0__namespace.ɵɵelementStart(60, "button", 4);
                i0__namespace.ɵɵtext(61, "Banded Day Gecko");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(62, "button", 4);
                i0__namespace.ɵɵtext(63, "Banded Gila Monster");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(64, "button", 4);
                i0__namespace.ɵɵtext(65, "Black Tree Monitor");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(66, "button", 4);
                i0__namespace.ɵɵtext(67, "Blue Spiny Lizard");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(68, "button", 9);
                i0__namespace.ɵɵtext(69, "Velociraptor");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                var _r1 = i0__namespace.ɵɵreference(9);
                var _r2 = i0__namespace.ɵɵreference(21);
                var _r3 = i0__namespace.ɵɵreference(37);
                var _r4 = i0__namespace.ɵɵreference(49);
                var _r5 = i0__namespace.ɵɵreference(59);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r0);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r1);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r2);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r3);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r4);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r5);
            }
        }, directives: [i1__namespace.MatButton, i2__namespace.MatMenuTrigger, i2__namespace.MatMenu, i2__namespace.MatMenuItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MenuNestedExample, [{
                type: i0.Component,
                args: [{ selector: 'menu-nested-example', template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n<!-- #docregion sub-menu -->\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n<!-- #enddocregion sub-menu -->\n\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n" }]
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
    MenuHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MenuHarnessExample, selectors: [["menu-harness-example"]], decls: 10, vars: 2, consts: [["type", "button", 3, "matMenuTriggerFor"], ["type", "button", "disabled", "", 3, "matMenuTriggerFor"], ["settingsMenu", ""], ["mat-menu-item", ""]], template: function MenuHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Settings");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "button", 1);
                i0__namespace.ɵɵtext(3, "Disabled menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-menu", null, 2);
                i0__namespace.ɵɵelementStart(6, "menu", 3);
                i0__namespace.ɵɵtext(7, "Profile");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "menu", 3);
                i0__namespace.ɵɵtext(9, "Account");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(5);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r0);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r0);
            }
        }, directives: [i2__namespace.MatMenuTrigger, i2__namespace.MatMenu, i2__namespace.MatMenuItem], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MenuHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'menu-harness-example', template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n" }]
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
    MenuExamplesModule.ɵfac = function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); };
    MenuExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: MenuExamplesModule });
    MenuExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.MatButtonModule,
                i3.MatIconModule,
                i2.MatMenuModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MenuExamplesModule, [{
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
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuHarnessExample,
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
