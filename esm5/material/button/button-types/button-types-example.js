import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
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
export { ButtonTypesExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonTypesExample, [{
        type: Component,
        args: [{
                selector: 'button-types-example',
                templateUrl: 'button-types-example.html',
                styleUrls: ['button-types-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXR5cGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS2tDOztnQkFMakMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUN4Qzs7d0ZBQ1ksa0JBQWtCOzJEQUFsQixrQkFBa0I7WUNWL0IsMEJBQUk7WUFBQSw2QkFBYTtZQUFBLGlCQUFLO1lBQ3RCLDhCQUNFO1lBQUEsaUNBQW1CO1lBQUEscUJBQUs7WUFBQSxpQkFBUztZQUNqQyxpQ0FBbUM7WUFBQSx1QkFBTztZQUFBLGlCQUFTO1lBQ25ELGlDQUFrQztZQUFBLHNCQUFNO1lBQUEsaUJBQVM7WUFDakQsaUNBQWdDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUM3QyxrQ0FBNEI7WUFBQSx5QkFBUTtZQUFBLGlCQUFTO1lBQzdDLDZCQUE2QjtZQUFBLHFCQUFJO1lBQUEsaUJBQUk7WUFDdkMsaUJBQU07WUFFTiwyQkFBSTtZQUFBLCtCQUFjO1lBQUEsaUJBQUs7WUFDdkIsK0JBQ0U7WUFBQSxrQ0FBMEI7WUFBQSxzQkFBSztZQUFBLGlCQUFTO1lBQ3hDLGtDQUEwQztZ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QjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJ1dHRvbiB2YXJpZXRpZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXR5cGVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10eXBlcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnV0dG9uLXR5cGVzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblR5cGVzRXhhbXBsZSB7fVxuIiwiPGgzPkJhc2ljIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+UmFpc2VkIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+U3Ryb2tlZCBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1zdHJva2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPkZsYXQgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtZmxhdC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5JY29uIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPGgzPkZhYiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtZmFiPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxhIG1hdC1mYWIgcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5NaW5pIEZhYiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWI+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxhIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cbiJdfQ==