(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/button', ['exports', '@angular/core', '@angular/material/button', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.button = {}), global.ng.core, global.ng.material.button, global.ng.material.icon));
}(this, (function (exports, i0, i1, i2) { 'use strict';

    /**
     * @title Basic buttons
     */
    var ButtonOverviewExample = /** @class */ (function () {
        function ButtonOverviewExample() {
        }
        ButtonOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'button-overview-example',
                        templateUrl: 'button-overview-example.html',
                        styleUrls: ['button-overview-example.css'],
                    },] },
        ];
        ButtonOverviewExample.ɵfac = function ButtonOverviewExample_Factory(t) { return new (t || ButtonOverviewExample)(); };
        ButtonOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonOverviewExample, selectors: [["button-overview-example"]], decls: 2, vars: 0, consts: [["mat-button", ""]], template: function ButtonOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵtext(1, "Click me!");
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatButton], styles: [""] });
        return ButtonOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonOverviewExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'button-types-example',
                        templateUrl: 'button-types-example.html',
                        styleUrls: ['button-types-example.css'],
                    },] },
        ];
        ButtonTypesExample.ɵfac = function ButtonTypesExample_Factory(t) { return new (t || ButtonTypesExample)(); };
        ButtonTypesExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonTypesExample, selectors: [["button-types-example"]], decls: 114, vars: 0, consts: [[1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "routerLink", "."], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-mini-fab", "", "routerLink", "."]], template: function ButtonTypesExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "h3");
                i0.ɵɵtext(1, "Basic Buttons");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 0);
                i0.ɵɵelementStart(3, "button", 1);
                i0.ɵɵtext(4, "Basic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "button", 2);
                i0.ɵɵtext(6, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "button", 3);
                i0.ɵɵtext(8, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "button", 4);
                i0.ɵɵtext(10, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "button", 5);
                i0.ɵɵtext(12, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "a", 6);
                i0.ɵɵtext(14, "Link");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "h3");
                i0.ɵɵtext(16, "Raised Buttons");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 0);
                i0.ɵɵelementStart(18, "button", 7);
                i0.ɵɵtext(19, "Basic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "button", 8);
                i0.ɵɵtext(21, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "button", 9);
                i0.ɵɵtext(23, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "button", 10);
                i0.ɵɵtext(25, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "button", 11);
                i0.ɵɵtext(27, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "a", 12);
                i0.ɵɵtext(29, "Link");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "h3");
                i0.ɵɵtext(31, "Stroked Buttons");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "div", 0);
                i0.ɵɵelementStart(33, "button", 13);
                i0.ɵɵtext(34, "Basic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "button", 14);
                i0.ɵɵtext(36, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(37, "button", 15);
                i0.ɵɵtext(38, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(39, "button", 16);
                i0.ɵɵtext(40, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(41, "button", 17);
                i0.ɵɵtext(42, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(43, "a", 18);
                i0.ɵɵtext(44, "Link");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(45, "h3");
                i0.ɵɵtext(46, "Flat Buttons");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(47, "div", 0);
                i0.ɵɵelementStart(48, "button", 19);
                i0.ɵɵtext(49, "Basic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(50, "button", 20);
                i0.ɵɵtext(51, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(52, "button", 21);
                i0.ɵɵtext(53, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(54, "button", 22);
                i0.ɵɵtext(55, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(56, "button", 23);
                i0.ɵɵtext(57, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(58, "a", 24);
                i0.ɵɵtext(59, "Link");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(60, "h3");
                i0.ɵɵtext(61, "Icon Buttons");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(62, "div", 0);
                i0.ɵɵelementStart(63, "button", 25);
                i0.ɵɵelementStart(64, "mat-icon");
                i0.ɵɵtext(65, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(66, "button", 26);
                i0.ɵɵelementStart(67, "mat-icon");
                i0.ɵɵtext(68, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(69, "button", 27);
                i0.ɵɵelementStart(70, "mat-icon");
                i0.ɵɵtext(71, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(72, "button", 28);
                i0.ɵɵelementStart(73, "mat-icon");
                i0.ɵɵtext(74, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(75, "button", 29);
                i0.ɵɵelementStart(76, "mat-icon");
                i0.ɵɵtext(77, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(78, "h3");
                i0.ɵɵtext(79, "Fab Buttons");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(80, "div", 0);
                i0.ɵɵelementStart(81, "button", 30);
                i0.ɵɵtext(82, "Basic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(83, "button", 31);
                i0.ɵɵtext(84, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(85, "button", 32);
                i0.ɵɵtext(86, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(87, "button", 33);
                i0.ɵɵtext(88, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(89, "button", 34);
                i0.ɵɵtext(90, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(91, "button", 35);
                i0.ɵɵelementStart(92, "mat-icon");
                i0.ɵɵtext(93, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(94, "a", 36);
                i0.ɵɵtext(95, "Link");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(96, "h3");
                i0.ɵɵtext(97, "Mini Fab Buttons");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(98, "div", 0);
                i0.ɵɵelementStart(99, "button", 37);
                i0.ɵɵtext(100, "Basic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(101, "button", 38);
                i0.ɵɵtext(102, "Primary");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(103, "button", 39);
                i0.ɵɵtext(104, "Accent");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(105, "button", 40);
                i0.ɵɵtext(106, "Warn");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(107, "button", 41);
                i0.ɵɵtext(108, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(109, "button", 42);
                i0.ɵɵelementStart(110, "mat-icon");
                i0.ɵɵtext(111, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(112, "a", 43);
                i0.ɵɵtext(113, "Link");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatButton, i1.MatAnchor, i2.MatIcon], styles: [".example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
        return ButtonTypesExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonTypesExample, [{
            type: i0.Component,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.MatButtonModule,
                            i2.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        ButtonExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonExamplesModule });
        ButtonExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonExamplesModule_Factory(t) { return new (t || ButtonExamplesModule)(); }, imports: [[
                    i1.MatButtonModule,
                    i2.MatIconModule,
                ]] });
        return ButtonExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonExamplesModule, { declarations: [ButtonOverviewExample,
            ButtonTypesExample], imports: [i1.MatButtonModule,
            i2.MatIconModule], exports: [ButtonOverviewExample,
            ButtonTypesExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatButtonModule,
                        i2.MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.ButtonExamplesModule = ButtonExamplesModule;
    exports.ButtonOverviewExample = ButtonOverviewExample;
    exports.ButtonTypesExample = ButtonTypesExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-button.umd.js.map
