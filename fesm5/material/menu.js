import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵreference, ɵɵproperty, ɵsetClassMetadata, ɵɵadvance, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger, _MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';

/**
 * @title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-icons-example',
                    templateUrl: 'menu-icons-example.html',
                    styleUrls: ['menu-icons-example.css'],
                },] },
    ];
    MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
    MenuIconsExample.ɵcmp = ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵelementStart(1, "mat-icon");
            ɵɵtext(2, "more_vert");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-menu", null, 1);
            ɵɵelementStart(5, "button", 2);
            ɵɵelementStart(6, "mat-icon");
            ɵɵtext(7, "dialpad");
            ɵɵelementEnd();
            ɵɵelementStart(8, "span");
            ɵɵtext(9, "Redial");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "button", 3);
            ɵɵelementStart(11, "mat-icon");
            ɵɵtext(12, "voicemail");
            ɵɵelementEnd();
            ɵɵelementStart(13, "span");
            ɵɵtext(14, "Check voice mail");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(15, "button", 2);
            ɵɵelementStart(16, "mat-icon");
            ɵɵtext(17, "notifications_off");
            ɵɵelementEnd();
            ɵɵelementStart(18, "span");
            ɵɵtext(19, "Disable alerts");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = ɵɵreference(4);
            ɵɵproperty("matMenuTriggerFor", _r0);
        } }, directives: [MatButton, MatMenuTrigger, MatIcon, _MatMenu, MatMenuItem], styles: [""] });
    return MenuIconsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MenuIconsExample, [{
        type: Component,
        args: [{
                selector: 'menu-icons-example',
                templateUrl: 'menu-icons-example.html',
                styleUrls: ['menu-icons-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic menu
 */
var MenuOverviewExample = /** @class */ (function () {
    function MenuOverviewExample() {
    }
    MenuOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-overview-example',
                    templateUrl: 'menu-overview-example.html',
                    styleUrls: ['menu-overview-example.css'],
                },] },
    ];
    MenuOverviewExample.ɵfac = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
    MenuOverviewExample.ɵcmp = ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, "Menu");
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-menu", null, 1);
            ɵɵelementStart(4, "button", 2);
            ɵɵtext(5, "Item 1");
            ɵɵelementEnd();
            ɵɵelementStart(6, "button", 2);
            ɵɵtext(7, "Item 2");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = ɵɵreference(3);
            ɵɵproperty("matMenuTriggerFor", _r1);
        } }, directives: [MatButton, MatMenuTrigger, _MatMenu, MatMenuItem], styles: [""] });
    return MenuOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MenuOverviewExample, [{
        type: Component,
        args: [{
                selector: 'menu-overview-example',
                templateUrl: 'menu-overview-example.html',
                styleUrls: ['menu-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @title Menu positioning
 */
var MenuPositionExample = /** @class */ (function () {
    function MenuPositionExample() {
    }
    MenuPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'menu-position-example',
                    templateUrl: 'menu-position-example.html',
                    styleUrls: ['menu-position-example.css'],
                },] },
    ];
    MenuPositionExample.ɵfac = function MenuPositionExample_Factory(t) { return new (t || MenuPositionExample)(); };
    MenuPositionExample.ɵcmp = ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["aboveMenu", "matMenu"], ["mat-menu-item", ""], ["yPosition", "below"], ["belowMenu", "matMenu"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["xPosition", "after"], ["afterMenu", "matMenu"]], template: function MenuPositionExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, "Above");
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-menu", 1, 2);
            ɵɵelementStart(4, "button", 3);
            ɵɵtext(5, "Item 1");
            ɵɵelementEnd();
            ɵɵelementStart(6, "button", 3);
            ɵɵtext(7, "Item 2");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "button", 0);
            ɵɵtext(9, "Below");
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-menu", 4, 5);
            ɵɵelementStart(12, "button", 3);
            ɵɵtext(13, "Item 1");
            ɵɵelementEnd();
            ɵɵelementStart(14, "button", 3);
            ɵɵtext(15, "Item 2");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(16, "button", 0);
            ɵɵtext(17, "Before");
            ɵɵelementEnd();
            ɵɵelementStart(18, "mat-menu", 6, 7);
            ɵɵelementStart(20, "button", 3);
            ɵɵtext(21, "Item 1");
            ɵɵelementEnd();
            ɵɵelementStart(22, "button", 3);
            ɵɵtext(23, "Item 2");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(24, "button", 0);
            ɵɵtext(25, "After");
            ɵɵelementEnd();
            ɵɵelementStart(26, "mat-menu", 8, 9);
            ɵɵelementStart(28, "button", 3);
            ɵɵtext(29, "Item 1");
            ɵɵelementEnd();
            ɵɵelementStart(30, "button", 3);
            ɵɵtext(31, "Item 2");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = ɵɵreference(3);
            var _r3 = ɵɵreference(11);
            var _r4 = ɵɵreference(19);
            var _r5 = ɵɵreference(27);
            ɵɵproperty("matMenuTriggerFor", _r2);
            ɵɵadvance(8);
            ɵɵproperty("matMenuTriggerFor", _r3);
            ɵɵadvance(8);
            ɵɵproperty("matMenuTriggerFor", _r4);
            ɵɵadvance(8);
            ɵɵproperty("matMenuTriggerFor", _r5);
        } }, directives: [MatButton, MatMenuTrigger, _MatMenu, MatMenuItem], styles: [""] });
    return MenuPositionExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MenuPositionExample, [{
        type: Component,
        args: [{
                selector: 'menu-position-example',
                templateUrl: 'menu-position-example.html',
                styleUrls: ['menu-position-example.css'],
            }]
    }], null, null); })();

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
    NestedMenuExample.ɵcmp = ɵɵdefineComponent({ type: NestedMenuExample, selectors: [["nested-menu-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function NestedMenuExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, "Animal index");
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-menu", null, 1);
            ɵɵelementStart(4, "button", 2);
            ɵɵtext(5, "Vertebrates");
            ɵɵelementEnd();
            ɵɵelementStart(6, "button", 2);
            ɵɵtext(7, "Invertebrates");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-menu", null, 3);
            ɵɵelementStart(10, "button", 2);
            ɵɵtext(11, "Fishes");
            ɵɵelementEnd();
            ɵɵelementStart(12, "button", 2);
            ɵɵtext(13, "Amphibians");
            ɵɵelementEnd();
            ɵɵelementStart(14, "button", 2);
            ɵɵtext(15, "Reptiles");
            ɵɵelementEnd();
            ɵɵelementStart(16, "button", 4);
            ɵɵtext(17, "Birds");
            ɵɵelementEnd();
            ɵɵelementStart(18, "button", 4);
            ɵɵtext(19, "Mammals");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-menu", null, 5);
            ɵɵelementStart(22, "button", 4);
            ɵɵtext(23, "Insects");
            ɵɵelementEnd();
            ɵɵelementStart(24, "button", 4);
            ɵɵtext(25, "Molluscs");
            ɵɵelementEnd();
            ɵɵelementStart(26, "button", 4);
            ɵɵtext(27, "Crustaceans");
            ɵɵelementEnd();
            ɵɵelementStart(28, "button", 4);
            ɵɵtext(29, "Corals");
            ɵɵelementEnd();
            ɵɵelementStart(30, "button", 4);
            ɵɵtext(31, "Arachnids");
            ɵɵelementEnd();
            ɵɵelementStart(32, "button", 4);
            ɵɵtext(33, "Velvet worms");
            ɵɵelementEnd();
            ɵɵelementStart(34, "button", 4);
            ɵɵtext(35, "Horseshoe crabs");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(36, "mat-menu", null, 6);
            ɵɵelementStart(38, "button", 4);
            ɵɵtext(39, "Baikal oilfish");
            ɵɵelementEnd();
            ɵɵelementStart(40, "button", 4);
            ɵɵtext(41, "Bala shark");
            ɵɵelementEnd();
            ɵɵelementStart(42, "button", 4);
            ɵɵtext(43, "Ballan wrasse");
            ɵɵelementEnd();
            ɵɵelementStart(44, "button", 4);
            ɵɵtext(45, "Bamboo shark");
            ɵɵelementEnd();
            ɵɵelementStart(46, "button", 4);
            ɵɵtext(47, "Banded killifish");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(48, "mat-menu", null, 7);
            ɵɵelementStart(50, "button", 4);
            ɵɵtext(51, "Sonoran desert toad");
            ɵɵelementEnd();
            ɵɵelementStart(52, "button", 4);
            ɵɵtext(53, "Western toad");
            ɵɵelementEnd();
            ɵɵelementStart(54, "button", 4);
            ɵɵtext(55, "Arroyo toad");
            ɵɵelementEnd();
            ɵɵelementStart(56, "button", 4);
            ɵɵtext(57, "Yosemite toad");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(58, "mat-menu", null, 8);
            ɵɵelementStart(60, "button", 4);
            ɵɵtext(61, "Banded Day Gecko");
            ɵɵelementEnd();
            ɵɵelementStart(62, "button", 4);
            ɵɵtext(63, "Banded Gila Monster");
            ɵɵelementEnd();
            ɵɵelementStart(64, "button", 4);
            ɵɵtext(65, "Black Tree Monitor");
            ɵɵelementEnd();
            ɵɵelementStart(66, "button", 4);
            ɵɵtext(67, "Blue Spiny Lizard");
            ɵɵelementEnd();
            ɵɵelementStart(68, "button", 9);
            ɵɵtext(69, "Velociraptor");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r6 = ɵɵreference(3);
            var _r7 = ɵɵreference(9);
            var _r8 = ɵɵreference(21);
            var _r9 = ɵɵreference(37);
            var _r10 = ɵɵreference(49);
            var _r11 = ɵɵreference(59);
            ɵɵproperty("matMenuTriggerFor", _r6);
            ɵɵadvance(4);
            ɵɵproperty("matMenuTriggerFor", _r7);
            ɵɵadvance(2);
            ɵɵproperty("matMenuTriggerFor", _r8);
            ɵɵadvance(4);
            ɵɵproperty("matMenuTriggerFor", _r9);
            ɵɵadvance(2);
            ɵɵproperty("matMenuTriggerFor", _r10);
            ɵɵadvance(2);
            ɵɵproperty("matMenuTriggerFor", _r11);
        } }, directives: [MatButton, MatMenuTrigger, _MatMenu, MatMenuItem], styles: [""] });
    return NestedMenuExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NestedMenuExample, [{
        type: Component,
        args: [{
                selector: 'nested-menu-example',
                templateUrl: 'nested-menu-example.html',
                styleUrls: ['nested-menu-example.css'],
            }]
    }], null, null); })();

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
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatMenuModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    MenuExamplesModule.ɵmod = ɵɵdefineNgModule({ type: MenuExamplesModule });
    MenuExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
            ]] });
    return MenuExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample], imports: [MatButtonModule,
        MatIconModule,
        MatMenuModule], exports: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MenuExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatMenuModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { MenuExamplesModule, MenuIconsExample, MenuOverviewExample, MenuPositionExample, NestedMenuExample };
//# sourceMappingURL=menu.js.map
