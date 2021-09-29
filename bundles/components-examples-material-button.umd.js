(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/divider'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/button', ['exports', '@angular/core', '@angular/material/button', '@angular/material/divider', '@angular/material/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.button = {}), global.ng.core, global.ng.material.button, global.ng.material.divider, global.ng.material.icon));
}(this, (function (exports, i0, i1, i2, i3) { 'use strict';

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
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    /**
     * @title Basic buttons
     */
    var ButtonOverviewExample = /** @class */ (function () {
        function ButtonOverviewExample() {
        }
        return ButtonOverviewExample;
    }());
    ButtonOverviewExample.ɵfac = function ButtonOverviewExample_Factory(t) { return new (t || ButtonOverviewExample)(); };
    ButtonOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonOverviewExample, selectors: [["button-overview-example"]], decls: 132, vars: 0, consts: [[1, "example-label"], [1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "href", "https://www.google.com/", "target", "_blank"], [1, "example-flex-container"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon button with a menu icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a open in new tab icon"], [1, "example-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], ["mat-fab", "", "disabled", "", "aria-label", "Example icon button with a heart icon"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a filter list icon"], ["mat-mini-fab", "", "disabled", "", "aria-label", "Example icon button with a home icon"]], template: function ButtonOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section");
                i0__namespace.ɵɵelementStart(1, "div", 0);
                i0__namespace.ɵɵtext(2, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 1);
                i0__namespace.ɵɵelementStart(4, "button", 2);
                i0__namespace.ɵɵtext(5, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵtext(7, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "button", 4);
                i0__namespace.ɵɵtext(9, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "button", 5);
                i0__namespace.ɵɵtext(11, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 6);
                i0__namespace.ɵɵtext(13, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "a", 7);
                i0__namespace.ɵɵtext(15, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(16, "mat-divider");
                i0__namespace.ɵɵelementStart(17, "section");
                i0__namespace.ɵɵelementStart(18, "div", 0);
                i0__namespace.ɵɵtext(19, "Raised");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "div", 1);
                i0__namespace.ɵɵelementStart(21, "button", 8);
                i0__namespace.ɵɵtext(22, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "button", 9);
                i0__namespace.ɵɵtext(24, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "button", 10);
                i0__namespace.ɵɵtext(26, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(27, "button", 11);
                i0__namespace.ɵɵtext(28, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(29, "button", 12);
                i0__namespace.ɵɵtext(30, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(31, "a", 13);
                i0__namespace.ɵɵtext(32, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(33, "mat-divider");
                i0__namespace.ɵɵelementStart(34, "section");
                i0__namespace.ɵɵelementStart(35, "div", 0);
                i0__namespace.ɵɵtext(36, "Stroked");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "div", 1);
                i0__namespace.ɵɵelementStart(38, "button", 14);
                i0__namespace.ɵɵtext(39, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(40, "button", 15);
                i0__namespace.ɵɵtext(41, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(42, "button", 16);
                i0__namespace.ɵɵtext(43, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(44, "button", 17);
                i0__namespace.ɵɵtext(45, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(46, "button", 18);
                i0__namespace.ɵɵtext(47, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(48, "a", 19);
                i0__namespace.ɵɵtext(49, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(50, "mat-divider");
                i0__namespace.ɵɵelementStart(51, "section");
                i0__namespace.ɵɵelementStart(52, "div", 0);
                i0__namespace.ɵɵtext(53, "Flat");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(54, "div", 1);
                i0__namespace.ɵɵelementStart(55, "button", 20);
                i0__namespace.ɵɵtext(56, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(57, "button", 21);
                i0__namespace.ɵɵtext(58, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(59, "button", 22);
                i0__namespace.ɵɵtext(60, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(61, "button", 23);
                i0__namespace.ɵɵtext(62, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(63, "button", 24);
                i0__namespace.ɵɵtext(64, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(65, "a", 25);
                i0__namespace.ɵɵtext(66, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(67, "mat-divider");
                i0__namespace.ɵɵelementStart(68, "section");
                i0__namespace.ɵɵelementStart(69, "div", 0);
                i0__namespace.ɵɵtext(70, "Icon");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(71, "div", 1);
                i0__namespace.ɵɵelementStart(72, "div", 26);
                i0__namespace.ɵɵelementStart(73, "button", 27);
                i0__namespace.ɵɵelementStart(74, "mat-icon");
                i0__namespace.ɵɵtext(75, "more_vert");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(76, "button", 28);
                i0__namespace.ɵɵelementStart(77, "mat-icon");
                i0__namespace.ɵɵtext(78, "home");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(79, "button", 29);
                i0__namespace.ɵɵelementStart(80, "mat-icon");
                i0__namespace.ɵɵtext(81, "menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(82, "button", 30);
                i0__namespace.ɵɵelementStart(83, "mat-icon");
                i0__namespace.ɵɵtext(84, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(85, "button", 31);
                i0__namespace.ɵɵelementStart(86, "mat-icon");
                i0__namespace.ɵɵtext(87, "open_in_new");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(88, "mat-divider");
                i0__namespace.ɵɵelementStart(89, "section");
                i0__namespace.ɵɵelementStart(90, "div", 0);
                i0__namespace.ɵɵtext(91, "FAB");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(92, "div", 1);
                i0__namespace.ɵɵelementStart(93, "div", 26);
                i0__namespace.ɵɵelementStart(94, "div", 32);
                i0__namespace.ɵɵelementStart(95, "button", 33);
                i0__namespace.ɵɵelementStart(96, "mat-icon");
                i0__namespace.ɵɵtext(97, "delete");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(98, "div", 32);
                i0__namespace.ɵɵelementStart(99, "button", 34);
                i0__namespace.ɵɵelementStart(100, "mat-icon");
                i0__namespace.ɵɵtext(101, "bookmark");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(102, "div", 32);
                i0__namespace.ɵɵelementStart(103, "button", 35);
                i0__namespace.ɵɵelementStart(104, "mat-icon");
                i0__namespace.ɵɵtext(105, "home");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(106, "div", 32);
                i0__namespace.ɵɵelementStart(107, "button", 36);
                i0__namespace.ɵɵelementStart(108, "mat-icon");
                i0__namespace.ɵɵtext(109, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(110, "mat-divider");
                i0__namespace.ɵɵelementStart(111, "section");
                i0__namespace.ɵɵelementStart(112, "div", 0);
                i0__namespace.ɵɵtext(113, "Mini FAB");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(114, "div", 1);
                i0__namespace.ɵɵelementStart(115, "div", 26);
                i0__namespace.ɵɵelementStart(116, "div", 32);
                i0__namespace.ɵɵelementStart(117, "button", 37);
                i0__namespace.ɵɵelementStart(118, "mat-icon");
                i0__namespace.ɵɵtext(119, "menu");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(120, "div", 32);
                i0__namespace.ɵɵelementStart(121, "button", 38);
                i0__namespace.ɵɵelementStart(122, "mat-icon");
                i0__namespace.ɵɵtext(123, "plus_one");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(124, "div", 32);
                i0__namespace.ɵɵelementStart(125, "button", 39);
                i0__namespace.ɵɵelementStart(126, "mat-icon");
                i0__namespace.ɵɵtext(127, "filter_list");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(128, "div", 32);
                i0__namespace.ɵɵelementStart(129, "button", 40);
                i0__namespace.ɵɵelementStart(130, "mat-icon");
                i0__namespace.ɵɵtext(131, "home");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatButton, i1__namespace.MatAnchor, i2__namespace.MatDivider, i3__namespace.MatIcon], styles: ["section[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'button-overview-example', template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row .mat-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Button varieties
     */
    var ButtonTypesExample = /** @class */ (function () {
        function ButtonTypesExample() {
        }
        return ButtonTypesExample;
    }());
    ButtonTypesExample.ɵfac = function ButtonTypesExample_Factory(t) { return new (t || ButtonTypesExample)(); };
    ButtonTypesExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonTypesExample, selectors: [["button-types-example"]], decls: 114, vars: 0, consts: [[1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "routerLink", "."], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-mini-fab", "", "routerLink", "."]], template: function ButtonTypesExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h3");
                i0__namespace.ɵɵtext(1, "Basic Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 0);
                i0__namespace.ɵɵelementStart(3, "button", 1);
                i0__namespace.ɵɵtext(4, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 2);
                i0__namespace.ɵɵtext(6, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "button", 3);
                i0__namespace.ɵɵtext(8, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button", 4);
                i0__namespace.ɵɵtext(10, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 5);
                i0__namespace.ɵɵtext(12, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "a", 6);
                i0__namespace.ɵɵtext(14, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "h3");
                i0__namespace.ɵɵtext(16, "Raised Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "div", 0);
                i0__namespace.ɵɵelementStart(18, "button", 7);
                i0__namespace.ɵɵtext(19, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "button", 8);
                i0__namespace.ɵɵtext(21, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "button", 9);
                i0__namespace.ɵɵtext(23, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 10);
                i0__namespace.ɵɵtext(25, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "button", 11);
                i0__namespace.ɵɵtext(27, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "a", 12);
                i0__namespace.ɵɵtext(29, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "h3");
                i0__namespace.ɵɵtext(31, "Stroked Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "div", 0);
                i0__namespace.ɵɵelementStart(33, "button", 13);
                i0__namespace.ɵɵtext(34, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(35, "button", 14);
                i0__namespace.ɵɵtext(36, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "button", 15);
                i0__namespace.ɵɵtext(38, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(39, "button", 16);
                i0__namespace.ɵɵtext(40, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(41, "button", 17);
                i0__namespace.ɵɵtext(42, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(43, "a", 18);
                i0__namespace.ɵɵtext(44, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(45, "h3");
                i0__namespace.ɵɵtext(46, "Flat Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(47, "div", 0);
                i0__namespace.ɵɵelementStart(48, "button", 19);
                i0__namespace.ɵɵtext(49, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(50, "button", 20);
                i0__namespace.ɵɵtext(51, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(52, "button", 21);
                i0__namespace.ɵɵtext(53, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(54, "button", 22);
                i0__namespace.ɵɵtext(55, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(56, "button", 23);
                i0__namespace.ɵɵtext(57, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(58, "a", 24);
                i0__namespace.ɵɵtext(59, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(60, "h3");
                i0__namespace.ɵɵtext(61, "Icon Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(62, "div", 0);
                i0__namespace.ɵɵelementStart(63, "button", 25);
                i0__namespace.ɵɵelementStart(64, "mat-icon");
                i0__namespace.ɵɵtext(65, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(66, "button", 26);
                i0__namespace.ɵɵelementStart(67, "mat-icon");
                i0__namespace.ɵɵtext(68, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(69, "button", 27);
                i0__namespace.ɵɵelementStart(70, "mat-icon");
                i0__namespace.ɵɵtext(71, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(72, "button", 28);
                i0__namespace.ɵɵelementStart(73, "mat-icon");
                i0__namespace.ɵɵtext(74, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(75, "button", 29);
                i0__namespace.ɵɵelementStart(76, "mat-icon");
                i0__namespace.ɵɵtext(77, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(78, "h3");
                i0__namespace.ɵɵtext(79, "Fab Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(80, "div", 0);
                i0__namespace.ɵɵelementStart(81, "button", 30);
                i0__namespace.ɵɵtext(82, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(83, "button", 31);
                i0__namespace.ɵɵtext(84, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(85, "button", 32);
                i0__namespace.ɵɵtext(86, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(87, "button", 33);
                i0__namespace.ɵɵtext(88, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(89, "button", 34);
                i0__namespace.ɵɵtext(90, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(91, "button", 35);
                i0__namespace.ɵɵelementStart(92, "mat-icon");
                i0__namespace.ɵɵtext(93, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(94, "a", 36);
                i0__namespace.ɵɵtext(95, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(96, "h3");
                i0__namespace.ɵɵtext(97, "Mini Fab Buttons");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(98, "div", 0);
                i0__namespace.ɵɵelementStart(99, "button", 37);
                i0__namespace.ɵɵtext(100, "Basic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(101, "button", 38);
                i0__namespace.ɵɵtext(102, "Primary");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(103, "button", 39);
                i0__namespace.ɵɵtext(104, "Accent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(105, "button", 40);
                i0__namespace.ɵɵtext(106, "Warn");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(107, "button", 41);
                i0__namespace.ɵɵtext(108, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(109, "button", 42);
                i0__namespace.ɵɵelementStart(110, "mat-icon");
                i0__namespace.ɵɵtext(111, "favorite");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(112, "a", 43);
                i0__namespace.ɵɵtext(113, "Link");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatButton, i1__namespace.MatAnchor, i3__namespace.MatIcon], styles: [".example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonTypesExample, [{
                type: i0.Component,
                args: [{ selector: 'button-types-example', template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n"] }]
            }], null, null);
    })();

    /**
     * @title Testing with MatButtonHarness
     */
    var ButtonHarnessExample = /** @class */ (function () {
        function ButtonHarnessExample() {
            this.clicked = false;
        }
        return ButtonHarnessExample;
    }());
    ButtonHarnessExample.ɵfac = function ButtonHarnessExample_Factory(t) { return new (t || ButtonHarnessExample)(); };
    ButtonHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonHarnessExample, selectors: [["button-harness-example"]], decls: 2, vars: 0, consts: [["id", "basic", "type", "button", "mat-button", "", 3, "click"]], template: function ButtonHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function ButtonHarnessExample_Template_button_click_0_listener() { return ctx.clicked = true; });
                i0__namespace.ɵɵtext(1, " Basic button\n");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatButton], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'button-harness-example', template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n" }]
            }], null, null);
    })();

    var EXAMPLES = [
        ButtonOverviewExample,
        ButtonTypesExample,
        ButtonHarnessExample,
    ];
    var ButtonExamplesModule = /** @class */ (function () {
        function ButtonExamplesModule() {
        }
        return ButtonExamplesModule;
    }());
    ButtonExamplesModule.ɵfac = function ButtonExamplesModule_Factory(t) { return new (t || ButtonExamplesModule)(); };
    ButtonExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ButtonExamplesModule });
    ButtonExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.MatButtonModule,
                i2.MatDividerModule,
                i3.MatIconModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatButtonModule,
                            i2.MatDividerModule,
                            i3.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ButtonExamplesModule, { declarations: [ButtonOverviewExample,
                ButtonTypesExample,
                ButtonHarnessExample], imports: [i1.MatButtonModule,
                i2.MatDividerModule,
                i3.MatIconModule], exports: [ButtonOverviewExample,
                ButtonTypesExample,
                ButtonHarnessExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonExamplesModule = ButtonExamplesModule;
    exports.ButtonHarnessExample = ButtonHarnessExample;
    exports.ButtonOverviewExample = ButtonOverviewExample;
    exports.ButtonTypesExample = ButtonTypesExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-button.umd.js.map
