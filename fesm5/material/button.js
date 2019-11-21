import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * @title Basic buttons
 */
var ButtonOverviewExample = /** @class */ (function () {
    function ButtonOverviewExample() {
    }
    ButtonOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-overview-example',
                    templateUrl: 'button-overview-example.html',
                    styleUrls: ['button-overview-example.css'],
                },] },
    ];
    ButtonOverviewExample.ɵfac = function ButtonOverviewExample_Factory(t) { return new (t || ButtonOverviewExample)(); };
    ButtonOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ButtonOverviewExample, selectors: [["button-overview-example"]], decls: 2, vars: 0, consts: [["mat-button", ""]], template: function ButtonOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0);
            ɵɵtext(1, "Click me!");
            ɵɵelementEnd();
        } }, directives: [MatButton], styles: [""] });
    return ButtonOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonOverviewExample, [{
        type: Component,
        args: [{
                selector: 'button-overview-example',
                templateUrl: 'button-overview-example.html',
                styleUrls: ['button-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @title Button varieties
 */
var ButtonTypesExample = /** @class */ (function () {
    function ButtonTypesExample() {
    }
    ButtonTypesExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-types-example',
                    templateUrl: 'button-types-example.html',
                    styleUrls: ['button-types-example.css'],
                },] },
    ];
    ButtonTypesExample.ɵfac = function ButtonTypesExample_Factory(t) { return new (t || ButtonTypesExample)(); };
    ButtonTypesExample.ɵcmp = ɵɵdefineComponent({ type: ButtonTypesExample, selectors: [["button-types-example"]], decls: 114, vars: 0, consts: [[1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "routerLink", "."], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-mini-fab", "", "routerLink", "."]], template: function ButtonTypesExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "h3");
            ɵɵtext(1, "Basic Buttons");
            ɵɵelementEnd();
            ɵɵelementStart(2, "div", 0);
            ɵɵelementStart(3, "button", 1);
            ɵɵtext(4, "Basic");
            ɵɵelementEnd();
            ɵɵelementStart(5, "button", 2);
            ɵɵtext(6, "Primary");
            ɵɵelementEnd();
            ɵɵelementStart(7, "button", 3);
            ɵɵtext(8, "Accent");
            ɵɵelementEnd();
            ɵɵelementStart(9, "button", 4);
            ɵɵtext(10, "Warn");
            ɵɵelementEnd();
            ɵɵelementStart(11, "button", 5);
            ɵɵtext(12, "Disabled");
            ɵɵelementEnd();
            ɵɵelementStart(13, "a", 6);
            ɵɵtext(14, "Link");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(15, "h3");
            ɵɵtext(16, "Raised Buttons");
            ɵɵelementEnd();
            ɵɵelementStart(17, "div", 0);
            ɵɵelementStart(18, "button", 7);
            ɵɵtext(19, "Basic");
            ɵɵelementEnd();
            ɵɵelementStart(20, "button", 8);
            ɵɵtext(21, "Primary");
            ɵɵelementEnd();
            ɵɵelementStart(22, "button", 9);
            ɵɵtext(23, "Accent");
            ɵɵelementEnd();
            ɵɵelementStart(24, "button", 10);
            ɵɵtext(25, "Warn");
            ɵɵelementEnd();
            ɵɵelementStart(26, "button", 11);
            ɵɵtext(27, "Disabled");
            ɵɵelementEnd();
            ɵɵelementStart(28, "a", 12);
            ɵɵtext(29, "Link");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(30, "h3");
            ɵɵtext(31, "Stroked Buttons");
            ɵɵelementEnd();
            ɵɵelementStart(32, "div", 0);
            ɵɵelementStart(33, "button", 13);
            ɵɵtext(34, "Basic");
            ɵɵelementEnd();
            ɵɵelementStart(35, "button", 14);
            ɵɵtext(36, "Primary");
            ɵɵelementEnd();
            ɵɵelementStart(37, "button", 15);
            ɵɵtext(38, "Accent");
            ɵɵelementEnd();
            ɵɵelementStart(39, "button", 16);
            ɵɵtext(40, "Warn");
            ɵɵelementEnd();
            ɵɵelementStart(41, "button", 17);
            ɵɵtext(42, "Disabled");
            ɵɵelementEnd();
            ɵɵelementStart(43, "a", 18);
            ɵɵtext(44, "Link");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(45, "h3");
            ɵɵtext(46, "Flat Buttons");
            ɵɵelementEnd();
            ɵɵelementStart(47, "div", 0);
            ɵɵelementStart(48, "button", 19);
            ɵɵtext(49, "Basic");
            ɵɵelementEnd();
            ɵɵelementStart(50, "button", 20);
            ɵɵtext(51, "Primary");
            ɵɵelementEnd();
            ɵɵelementStart(52, "button", 21);
            ɵɵtext(53, "Accent");
            ɵɵelementEnd();
            ɵɵelementStart(54, "button", 22);
            ɵɵtext(55, "Warn");
            ɵɵelementEnd();
            ɵɵelementStart(56, "button", 23);
            ɵɵtext(57, "Disabled");
            ɵɵelementEnd();
            ɵɵelementStart(58, "a", 24);
            ɵɵtext(59, "Link");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(60, "h3");
            ɵɵtext(61, "Icon Buttons");
            ɵɵelementEnd();
            ɵɵelementStart(62, "div", 0);
            ɵɵelementStart(63, "button", 25);
            ɵɵelementStart(64, "mat-icon");
            ɵɵtext(65, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(66, "button", 26);
            ɵɵelementStart(67, "mat-icon");
            ɵɵtext(68, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(69, "button", 27);
            ɵɵelementStart(70, "mat-icon");
            ɵɵtext(71, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(72, "button", 28);
            ɵɵelementStart(73, "mat-icon");
            ɵɵtext(74, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(75, "button", 29);
            ɵɵelementStart(76, "mat-icon");
            ɵɵtext(77, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(78, "h3");
            ɵɵtext(79, "Fab Buttons");
            ɵɵelementEnd();
            ɵɵelementStart(80, "div", 0);
            ɵɵelementStart(81, "button", 30);
            ɵɵtext(82, "Basic");
            ɵɵelementEnd();
            ɵɵelementStart(83, "button", 31);
            ɵɵtext(84, "Primary");
            ɵɵelementEnd();
            ɵɵelementStart(85, "button", 32);
            ɵɵtext(86, "Accent");
            ɵɵelementEnd();
            ɵɵelementStart(87, "button", 33);
            ɵɵtext(88, "Warn");
            ɵɵelementEnd();
            ɵɵelementStart(89, "button", 34);
            ɵɵtext(90, "Disabled");
            ɵɵelementEnd();
            ɵɵelementStart(91, "button", 35);
            ɵɵelementStart(92, "mat-icon");
            ɵɵtext(93, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(94, "a", 36);
            ɵɵtext(95, "Link");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(96, "h3");
            ɵɵtext(97, "Mini Fab Buttons");
            ɵɵelementEnd();
            ɵɵelementStart(98, "div", 0);
            ɵɵelementStart(99, "button", 37);
            ɵɵtext(100, "Basic");
            ɵɵelementEnd();
            ɵɵelementStart(101, "button", 38);
            ɵɵtext(102, "Primary");
            ɵɵelementEnd();
            ɵɵelementStart(103, "button", 39);
            ɵɵtext(104, "Accent");
            ɵɵelementEnd();
            ɵɵelementStart(105, "button", 40);
            ɵɵtext(106, "Warn");
            ɵɵelementEnd();
            ɵɵelementStart(107, "button", 41);
            ɵɵtext(108, "Disabled");
            ɵɵelementEnd();
            ɵɵelementStart(109, "button", 42);
            ɵɵelementStart(110, "mat-icon");
            ɵɵtext(111, "favorite");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(112, "a", 43);
            ɵɵtext(113, "Link");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatButton, MatAnchor, MatIcon], styles: [".example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return ButtonTypesExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonTypesExample, [{
        type: Component,
        args: [{
                selector: 'button-types-example',
                templateUrl: 'button-types-example.html',
                styleUrls: ['button-types-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    ButtonOverviewExample,
    ButtonTypesExample,
];
var ButtonExamplesModule = /** @class */ (function () {
    function ButtonExamplesModule() {
    }
    ButtonExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    ButtonExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ButtonExamplesModule });
    ButtonExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonExamplesModule_Factory(t) { return new (t || ButtonExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
            ]] });
    return ButtonExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonExamplesModule, { declarations: [ButtonOverviewExample,
        ButtonTypesExample], imports: [MatButtonModule,
        MatIconModule], exports: [ButtonOverviewExample,
        ButtonTypesExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { ButtonExamplesModule, ButtonOverviewExample, ButtonTypesExample };
//# sourceMappingURL=button.js.map
