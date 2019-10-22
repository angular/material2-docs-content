import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵreference, ɵɵproperty, ɵsetClassMetadata, ɵɵadvance, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger, _MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0 = ["menu", "matMenu"];
/**
 * \@title Menu with icons
 */
class MenuIconsExample {
}
MenuIconsExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-icons-example',
                templateUrl: 'menu-icons-example.html',
                styleUrls: ['menu-icons-example.css'],
            },] },
];
/** @nocollapse */ MenuIconsExample.ngFactoryDef = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
/** @nocollapse */ MenuIconsExample.ngComponentDef = ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵelementStart(1, "mat-icon");
        ɵɵtext(2, "more_vert");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-menu", null, _c0);
        ɵɵelementStart(5, "button", 1);
        ɵɵelementStart(6, "mat-icon");
        ɵɵtext(7, "dialpad");
        ɵɵelementEnd();
        ɵɵelementStart(8, "span");
        ɵɵtext(9, "Redial");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 2);
        ɵɵelementStart(11, "mat-icon");
        ɵɵtext(12, "voicemail");
        ɵɵelementEnd();
        ɵɵelementStart(13, "span");
        ɵɵtext(14, "Check voice mail");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "button", 1);
        ɵɵelementStart(16, "mat-icon");
        ɵɵtext(17, "notifications_off");
        ɵɵelementEnd();
        ɵɵelementStart(18, "span");
        ɵɵtext(19, "Disable alerts");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(4);
        ɵɵproperty("matMenuTriggerFor", _r0);
    } }, directives: [MatButton, MatMenuTrigger, MatIcon, _MatMenu, MatMenuItem], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(MenuIconsExample, [{
        type: Component,
        args: [{
                selector: 'menu-icons-example',
                templateUrl: 'menu-icons-example.html',
                styleUrls: ['menu-icons-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0$1 = ["menu", "matMenu"];
/**
 * \@title Basic menu
 */
class MenuOverviewExample {
}
MenuOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-overview-example',
                templateUrl: 'menu-overview-example.html',
                styleUrls: ['menu-overview-example.css'],
            },] },
];
/** @nocollapse */ MenuOverviewExample.ngFactoryDef = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
/** @nocollapse */ MenuOverviewExample.ngComponentDef = ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵtext(1, "Menu");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-menu", null, _c0$1);
        ɵɵelementStart(4, "button", 1);
        ɵɵtext(5, "Item 1");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 1);
        ɵɵtext(7, "Item 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(3);
        ɵɵproperty("matMenuTriggerFor", _r1);
    } }, directives: [MatButton, MatMenuTrigger, _MatMenu, MatMenuItem], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(MenuOverviewExample, [{
        type: Component,
        args: [{
                selector: 'menu-overview-example',
                templateUrl: 'menu-overview-example.html',
                styleUrls: ['menu-overview-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0$2 = ["aboveMenu", "matMenu"];
const _c1 = ["belowMenu", "matMenu"];
const _c2 = ["beforeMenu", "matMenu"];
const _c3 = ["afterMenu", "matMenu"];
/**
 * \@title Menu positioning
 */
class MenuPositionExample {
}
MenuPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-position-example',
                templateUrl: 'menu-position-example.html',
                styleUrls: ['menu-position-example.css'],
            },] },
];
/** @nocollapse */ MenuPositionExample.ngFactoryDef = function MenuPositionExample_Factory(t) { return new (t || MenuPositionExample)(); };
/** @nocollapse */ MenuPositionExample.ngComponentDef = ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["mat-menu-item", ""], ["yPosition", "below"], ["xPosition", "before"], ["xPosition", "after"]], template: function MenuPositionExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵtext(1, "Above");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-menu", 1, _c0$2);
        ɵɵelementStart(4, "button", 2);
        ɵɵtext(5, "Item 1");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 2);
        ɵɵtext(7, "Item 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "button", 0);
        ɵɵtext(9, "Below");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-menu", 3, _c1);
        ɵɵelementStart(12, "button", 2);
        ɵɵtext(13, "Item 1");
        ɵɵelementEnd();
        ɵɵelementStart(14, "button", 2);
        ɵɵtext(15, "Item 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "button", 0);
        ɵɵtext(17, "Before");
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-menu", 4, _c2);
        ɵɵelementStart(20, "button", 2);
        ɵɵtext(21, "Item 1");
        ɵɵelementEnd();
        ɵɵelementStart(22, "button", 2);
        ɵɵtext(23, "Item 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(24, "button", 0);
        ɵɵtext(25, "After");
        ɵɵelementEnd();
        ɵɵelementStart(26, "mat-menu", 5, _c3);
        ɵɵelementStart(28, "button", 2);
        ɵɵtext(29, "Item 1");
        ɵɵelementEnd();
        ɵɵelementStart(30, "button", 2);
        ɵɵtext(31, "Item 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵɵreference(3);
        const _r3 = ɵɵreference(11);
        const _r4 = ɵɵreference(19);
        const _r5 = ɵɵreference(27);
        ɵɵproperty("matMenuTriggerFor", _r2);
        ɵɵadvance(8);
        ɵɵproperty("matMenuTriggerFor", _r3);
        ɵɵadvance(8);
        ɵɵproperty("matMenuTriggerFor", _r4);
        ɵɵadvance(8);
        ɵɵproperty("matMenuTriggerFor", _r5);
    } }, directives: [MatButton, MatMenuTrigger, _MatMenu, MatMenuItem], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(MenuPositionExample, [{
        type: Component,
        args: [{
                selector: 'menu-position-example',
                templateUrl: 'menu-position-example.html',
                styleUrls: ['menu-position-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0$3 = ["animals", "matMenu"];
const _c1$1 = ["vertebrates", "matMenu"];
const _c2$1 = ["invertebrates", "matMenu"];
const _c3$1 = ["fish", "matMenu"];
const _c4 = ["amphibians", "matMenu"];
const _c5 = ["reptiles", "matMenu"];
/**
 * \@title Nested menu
 */
class NestedMenuExample {
}
NestedMenuExample.decorators = [
    { type: Component, args: [{
                selector: 'nested-menu-example',
                templateUrl: 'nested-menu-example.html',
                styleUrls: ['nested-menu-example.css'],
            },] },
];
/** @nocollapse */ NestedMenuExample.ngFactoryDef = function NestedMenuExample_Factory(t) { return new (t || NestedMenuExample)(); };
/** @nocollapse */ NestedMenuExample.ngComponentDef = ɵɵdefineComponent({ type: NestedMenuExample, selectors: [["nested-menu-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function NestedMenuExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵtext(1, "Animal index");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-menu", null, _c0$3);
        ɵɵelementStart(4, "button", 1);
        ɵɵtext(5, "Vertebrates");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 1);
        ɵɵtext(7, "Invertebrates");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-menu", null, _c1$1);
        ɵɵelementStart(10, "button", 1);
        ɵɵtext(11, "Fishes");
        ɵɵelementEnd();
        ɵɵelementStart(12, "button", 1);
        ɵɵtext(13, "Amphibians");
        ɵɵelementEnd();
        ɵɵelementStart(14, "button", 1);
        ɵɵtext(15, "Reptiles");
        ɵɵelementEnd();
        ɵɵelementStart(16, "button", 2);
        ɵɵtext(17, "Birds");
        ɵɵelementEnd();
        ɵɵelementStart(18, "button", 2);
        ɵɵtext(19, "Mammals");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "mat-menu", null, _c2$1);
        ɵɵelementStart(22, "button", 2);
        ɵɵtext(23, "Insects");
        ɵɵelementEnd();
        ɵɵelementStart(24, "button", 2);
        ɵɵtext(25, "Molluscs");
        ɵɵelementEnd();
        ɵɵelementStart(26, "button", 2);
        ɵɵtext(27, "Crustaceans");
        ɵɵelementEnd();
        ɵɵelementStart(28, "button", 2);
        ɵɵtext(29, "Corals");
        ɵɵelementEnd();
        ɵɵelementStart(30, "button", 2);
        ɵɵtext(31, "Arachnids");
        ɵɵelementEnd();
        ɵɵelementStart(32, "button", 2);
        ɵɵtext(33, "Velvet worms");
        ɵɵelementEnd();
        ɵɵelementStart(34, "button", 2);
        ɵɵtext(35, "Horseshoe crabs");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(36, "mat-menu", null, _c3$1);
        ɵɵelementStart(38, "button", 2);
        ɵɵtext(39, "Baikal oilfish");
        ɵɵelementEnd();
        ɵɵelementStart(40, "button", 2);
        ɵɵtext(41, "Bala shark");
        ɵɵelementEnd();
        ɵɵelementStart(42, "button", 2);
        ɵɵtext(43, "Ballan wrasse");
        ɵɵelementEnd();
        ɵɵelementStart(44, "button", 2);
        ɵɵtext(45, "Bamboo shark");
        ɵɵelementEnd();
        ɵɵelementStart(46, "button", 2);
        ɵɵtext(47, "Banded killifish");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(48, "mat-menu", null, _c4);
        ɵɵelementStart(50, "button", 2);
        ɵɵtext(51, "Sonoran desert toad");
        ɵɵelementEnd();
        ɵɵelementStart(52, "button", 2);
        ɵɵtext(53, "Western toad");
        ɵɵelementEnd();
        ɵɵelementStart(54, "button", 2);
        ɵɵtext(55, "Arroyo toad");
        ɵɵelementEnd();
        ɵɵelementStart(56, "button", 2);
        ɵɵtext(57, "Yosemite toad");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(58, "mat-menu", null, _c5);
        ɵɵelementStart(60, "button", 2);
        ɵɵtext(61, "Banded Day Gecko");
        ɵɵelementEnd();
        ɵɵelementStart(62, "button", 2);
        ɵɵtext(63, "Banded Gila Monster");
        ɵɵelementEnd();
        ɵɵelementStart(64, "button", 2);
        ɵɵtext(65, "Black Tree Monitor");
        ɵɵelementEnd();
        ɵɵelementStart(66, "button", 2);
        ɵɵtext(67, "Blue Spiny Lizard");
        ɵɵelementEnd();
        ɵɵelementStart(68, "button", 3);
        ɵɵtext(69, "Velociraptor");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r6 = ɵɵreference(3);
        const _r7 = ɵɵreference(9);
        const _r8 = ɵɵreference(21);
        const _r9 = ɵɵreference(37);
        const _r10 = ɵɵreference(49);
        const _r11 = ɵɵreference(59);
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
/*@__PURE__*/ ɵsetClassMetadata(NestedMenuExample, [{
        type: Component,
        args: [{
                selector: 'nested-menu-example',
                templateUrl: 'nested-menu-example.html',
                styleUrls: ['nested-menu-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    NestedMenuExample,
];
class MenuExamplesModule {
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
/** @nocollapse */ MenuExamplesModule.ngModuleDef = ɵɵdefineNgModule({ type: MenuExamplesModule });
/** @nocollapse */ MenuExamplesModule.ngInjectorDef = ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatMenuModule,
        ]] });
/*@__PURE__*/ ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample], imports: [MatButtonModule,
        MatIconModule,
        MatMenuModule], exports: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        NestedMenuExample] });
/*@__PURE__*/ ɵsetClassMetadata(MenuExamplesModule, [{
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
    }], null, null);

/**
 * Generated bundle index. Do not edit.
 */

export { MenuIconsExample, MenuOverviewExample, MenuPositionExample, NestedMenuExample, MenuExamplesModule };
//# sourceMappingURL=menu.js.map
