/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/button/button-types/button-types-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
/**
 * \@title Button varieties
 */
let ButtonTypesExample = /** @class */ (() => {
    /**
     * \@title Button varieties
     */
    class ButtonTypesExample {
    }
    ButtonTypesExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-types-example',
                    templateUrl: 'button-types-example.html',
                    styleUrls: ['button-types-example.css'],
                },] },
    ];
    /** @nocollapse */ ButtonTypesExample.ɵfac = function ButtonTypesExample_Factory(t) { return new (t || ButtonTypesExample)(); };
    /** @nocollapse */ ButtonTypesExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonTypesExample, selectors: [["button-types-example"]], decls: 114, vars: 0, consts: [[1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "routerLink", "."], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "routerLink", "."], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "aria-label", "Example icon-button with a heart icon"], ["mat-mini-fab", "", "routerLink", "."]], template: function ButtonTypesExample_Template(rf, ctx) { if (rf & 1) {
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
})();
export { ButtonTypesExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonTypesExample, [{
        type: Component,
        args: [{
                selector: 'button-types-example',
                templateUrl: 'button-types-example.html',
                styleUrls: ['button-types-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXR5cGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUt4Qzs7OztJQUFBLE1BS2Esa0JBQWtCOzs7Z0JBTDlCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDeEM7OzJHQUNZLGtCQUFrQjs4RUFBbEIsa0JBQWtCO1lDVi9CLDBCQUFJO1lBQUEsNkJBQWE7WUFBQSxpQkFBSztZQUN0Qiw4QkFDRTtZQUFBLGlDQUFtQjtZQUFBLHFCQUFLO1lBQUEsaUJBQVM7WUFDakMsaUNBQW1DO1lBQUEsdUJBQU87WUFBQSxpQkFBUztZQUNuRCxpQ0FBa0M7WUFBQSxzQkFBTTtZQUFBLGlCQUFTO1lBQ2pELGlDQUFnQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDN0Msa0NBQTRCO1lBQUEseUJBQVE7WUFBQSxpQkFBUztZQUM3Qyw2QkFBNkI7WUFBQSxxQkFBSTtZQUFBLGlCQUFJO1lBQ3ZDLGlCQUFNO1lBRU4sMkJBQUk7WUFBQSwrQkFBYztZQUFBLGlCQUFLO1lBQ3ZCLCtCQUNFO1lBQUEsa0NBQTBCO1lBQUEsc0JBQUs7WUFBQSxpQkFBUztZQUN4QyxrQ0FBMEM7WUFBQSx3QkFBTztZQUFBLGlCQUFTO1lB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O2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCdXR0b24gdmFyaWV0aWVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10eXBlcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdHlwZXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10eXBlcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25UeXBlc0V4YW1wbGUge31cbiIsIjxoMz5CYXNpYyBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPlJhaXNlZCBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPlN0cm9rZWQgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtc3Ryb2tlZC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5GbGF0IEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LWZsYXQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+SWNvbiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZCBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxoMz5GYWIgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LWZhYj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YSBtYXQtZmFiIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+TWluaSBGYWIgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YSBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG4iXX0=