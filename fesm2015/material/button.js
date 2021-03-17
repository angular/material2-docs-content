import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵsetClassMetadata, Component, ɵɵlistener, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';

/**
 * @title Basic buttons
 */
class ButtonOverviewExample {
}
ButtonOverviewExample.ɵfac = function ButtonOverviewExample_Factory(t) { return new (t || ButtonOverviewExample)(); };
ButtonOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonOverviewExample, selectors: [["button-overview-example"]], decls: 132, vars: 0, consts: [[1, "example-label"], [1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "href", "https://www.google.com/", "target", "_blank"], [1, "example-flex-container"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon button with a menu icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a open in new tab icon"], [1, "example-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], ["mat-fab", "", "disabled", "", "aria-label", "Example icon button with a heart icon"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a filter list icon"], ["mat-mini-fab", "", "disabled", "", "aria-label", "Example icon button with a home icon"]], template: function ButtonOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section");
        ɵɵelementStart(1, "div", 0);
        ɵɵtext(2, "Basic");
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 1);
        ɵɵelementStart(4, "button", 2);
        ɵɵtext(5, "Basic");
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 3);
        ɵɵtext(7, "Primary");
        ɵɵelementEnd();
        ɵɵelementStart(8, "button", 4);
        ɵɵtext(9, "Accent");
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 5);
        ɵɵtext(11, "Warn");
        ɵɵelementEnd();
        ɵɵelementStart(12, "button", 6);
        ɵɵtext(13, "Disabled");
        ɵɵelementEnd();
        ɵɵelementStart(14, "a", 7);
        ɵɵtext(15, "Link");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(16, "mat-divider");
        ɵɵelementStart(17, "section");
        ɵɵelementStart(18, "div", 0);
        ɵɵtext(19, "Raised");
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 1);
        ɵɵelementStart(21, "button", 8);
        ɵɵtext(22, "Basic");
        ɵɵelementEnd();
        ɵɵelementStart(23, "button", 9);
        ɵɵtext(24, "Primary");
        ɵɵelementEnd();
        ɵɵelementStart(25, "button", 10);
        ɵɵtext(26, "Accent");
        ɵɵelementEnd();
        ɵɵelementStart(27, "button", 11);
        ɵɵtext(28, "Warn");
        ɵɵelementEnd();
        ɵɵelementStart(29, "button", 12);
        ɵɵtext(30, "Disabled");
        ɵɵelementEnd();
        ɵɵelementStart(31, "a", 13);
        ɵɵtext(32, "Link");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(33, "mat-divider");
        ɵɵelementStart(34, "section");
        ɵɵelementStart(35, "div", 0);
        ɵɵtext(36, "Stroked");
        ɵɵelementEnd();
        ɵɵelementStart(37, "div", 1);
        ɵɵelementStart(38, "button", 14);
        ɵɵtext(39, "Basic");
        ɵɵelementEnd();
        ɵɵelementStart(40, "button", 15);
        ɵɵtext(41, "Primary");
        ɵɵelementEnd();
        ɵɵelementStart(42, "button", 16);
        ɵɵtext(43, "Accent");
        ɵɵelementEnd();
        ɵɵelementStart(44, "button", 17);
        ɵɵtext(45, "Warn");
        ɵɵelementEnd();
        ɵɵelementStart(46, "button", 18);
        ɵɵtext(47, "Disabled");
        ɵɵelementEnd();
        ɵɵelementStart(48, "a", 19);
        ɵɵtext(49, "Link");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(50, "mat-divider");
        ɵɵelementStart(51, "section");
        ɵɵelementStart(52, "div", 0);
        ɵɵtext(53, "Flat");
        ɵɵelementEnd();
        ɵɵelementStart(54, "div", 1);
        ɵɵelementStart(55, "button", 20);
        ɵɵtext(56, "Basic");
        ɵɵelementEnd();
        ɵɵelementStart(57, "button", 21);
        ɵɵtext(58, "Primary");
        ɵɵelementEnd();
        ɵɵelementStart(59, "button", 22);
        ɵɵtext(60, "Accent");
        ɵɵelementEnd();
        ɵɵelementStart(61, "button", 23);
        ɵɵtext(62, "Warn");
        ɵɵelementEnd();
        ɵɵelementStart(63, "button", 24);
        ɵɵtext(64, "Disabled");
        ɵɵelementEnd();
        ɵɵelementStart(65, "a", 25);
        ɵɵtext(66, "Link");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(67, "mat-divider");
        ɵɵelementStart(68, "section");
        ɵɵelementStart(69, "div", 0);
        ɵɵtext(70, "Icon");
        ɵɵelementEnd();
        ɵɵelementStart(71, "div", 1);
        ɵɵelementStart(72, "div", 26);
        ɵɵelementStart(73, "button", 27);
        ɵɵelementStart(74, "mat-icon");
        ɵɵtext(75, "more_vert");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(76, "button", 28);
        ɵɵelementStart(77, "mat-icon");
        ɵɵtext(78, "home");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(79, "button", 29);
        ɵɵelementStart(80, "mat-icon");
        ɵɵtext(81, "menu");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(82, "button", 30);
        ɵɵelementStart(83, "mat-icon");
        ɵɵtext(84, "favorite");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(85, "button", 31);
        ɵɵelementStart(86, "mat-icon");
        ɵɵtext(87, "open_in_new");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(88, "mat-divider");
        ɵɵelementStart(89, "section");
        ɵɵelementStart(90, "div", 0);
        ɵɵtext(91, "FAB");
        ɵɵelementEnd();
        ɵɵelementStart(92, "div", 1);
        ɵɵelementStart(93, "div", 26);
        ɵɵelementStart(94, "div", 32);
        ɵɵelementStart(95, "button", 33);
        ɵɵelementStart(96, "mat-icon");
        ɵɵtext(97, "delete");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(98, "div", 32);
        ɵɵelementStart(99, "button", 34);
        ɵɵelementStart(100, "mat-icon");
        ɵɵtext(101, "bookmark");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(102, "div", 32);
        ɵɵelementStart(103, "button", 35);
        ɵɵelementStart(104, "mat-icon");
        ɵɵtext(105, "home");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(106, "div", 32);
        ɵɵelementStart(107, "button", 36);
        ɵɵelementStart(108, "mat-icon");
        ɵɵtext(109, "favorite");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(110, "mat-divider");
        ɵɵelementStart(111, "section");
        ɵɵelementStart(112, "div", 0);
        ɵɵtext(113, "Mini FAB");
        ɵɵelementEnd();
        ɵɵelementStart(114, "div", 1);
        ɵɵelementStart(115, "div", 26);
        ɵɵelementStart(116, "div", 32);
        ɵɵelementStart(117, "button", 37);
        ɵɵelementStart(118, "mat-icon");
        ɵɵtext(119, "menu");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(120, "div", 32);
        ɵɵelementStart(121, "button", 38);
        ɵɵelementStart(122, "mat-icon");
        ɵɵtext(123, "plus_one");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(124, "div", 32);
        ɵɵelementStart(125, "button", 39);
        ɵɵelementStart(126, "mat-icon");
        ɵɵtext(127, "filter_list");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(128, "div", 32);
        ɵɵelementStart(129, "button", 40);
        ɵɵelementStart(130, "mat-icon");
        ɵɵtext(131, "home");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatButton, MatAnchor, MatDivider, MatIcon], styles: ["section[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonOverviewExample, [{
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
class ButtonTypesExample {
}
ButtonTypesExample.ɵfac = function ButtonTypesExample_Factory(t) { return new (t || ButtonTypesExample)(); };
ButtonTypesExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonTypesExample, selectors: [["button-types-example"]], decls: 114, vars: 0, consts: [[1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "routerLink", "."], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-mini-fab", "", "routerLink", "."]], template: function ButtonTypesExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonTypesExample, [{
        type: Component,
        args: [{
                selector: 'button-types-example',
                templateUrl: 'button-types-example.html',
                styleUrls: ['button-types-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatButtonHarness
 */
class ButtonHarnessExample {
    constructor() {
        this.clicked = false;
    }
}
ButtonHarnessExample.ɵfac = function ButtonHarnessExample_Factory(t) { return new (t || ButtonHarnessExample)(); };
ButtonHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ButtonHarnessExample, selectors: [["button-harness-example"]], decls: 2, vars: 0, consts: [["id", "basic", "type", "button", "mat-button", "", 3, "click"]], template: function ButtonHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function ButtonHarnessExample_Template_button_click_0_listener() { return ctx.clicked = true; });
        ɵɵtext(1, " Basic button\n");
        ɵɵelementEnd();
    } }, directives: [MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonHarnessExample, [{
        type: Component,
        args: [{
                selector: 'button-harness-example',
                templateUrl: 'button-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    ButtonOverviewExample,
    ButtonTypesExample,
    ButtonHarnessExample,
];
class ButtonExamplesModule {
}
ButtonExamplesModule.ɵfac = function ButtonExamplesModule_Factory(t) { return new (t || ButtonExamplesModule)(); };
ButtonExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: ButtonExamplesModule });
ButtonExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatDividerModule,
            MatIconModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatDividerModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonExamplesModule, { declarations: [ButtonOverviewExample,
        ButtonTypesExample,
        ButtonHarnessExample], imports: [MatButtonModule,
        MatDividerModule,
        MatIconModule], exports: [ButtonOverviewExample,
        ButtonTypesExample,
        ButtonHarnessExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonExamplesModule, ButtonHarnessExample, ButtonOverviewExample, ButtonTypesExample };
//# sourceMappingURL=button.js.map
