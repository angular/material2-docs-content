import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/mdc-card";
import * as i2 from "@angular/material-experimental/mdc-button";
/**
 * @title Card with multiple sections
 */
export class MdcCardFancyExample {
}
MdcCardFancyExample.ɵfac = function MdcCardFancyExample_Factory(t) { return new (t || MdcCardFancyExample)(); };
MdcCardFancyExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MdcCardFancyExample, selectors: [["mdc-card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function MdcCardFancyExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-header");
        i0.ɵɵelement(2, "div", 1);
        i0.ɵɵelementStart(3, "mat-card-title");
        i0.ɵɵtext(4, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-subtitle");
        i0.ɵɵtext(6, "Dog Breed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "img", 2);
        i0.ɵɵelementStart(8, "mat-card-content");
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-card-actions");
        i0.ɵɵelementStart(12, "button", 3);
        i0.ɵɵtext(13, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 3);
        i0.ɵɵtext(15, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatCard, i1.MatCardHeader, i1.MatCardAvatar, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardImage, i1.MatCardContent, i1.MatCardActions, i2.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdcCardFancyExample, [{
        type: Component,
        args: [{
                selector: 'mdc-card-fancy-example',
                templateUrl: 'mdc-card-fancy-example.html',
                styleUrls: ['mdc-card-fancy-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRjLWNhcmQtZmFuY3ktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtY2FyZC9tZGMtY2FyZC1mYW5jeS9tZGMtY2FyZC1mYW5jeS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1jYXJkL21kYy1jYXJkLWZhbmN5L21kYy1jYXJkLWZhbmN5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDVmhDLG1DQUErQjtRQUM3Qix1Q0FBaUI7UUFDZix5QkFBd0Q7UUFDeEQsc0NBQWdCO1FBQUEseUJBQVM7UUFBQSxpQkFBaUI7UUFDMUMseUNBQW1CO1FBQUEseUJBQVM7UUFBQSxpQkFBb0I7UUFDbEQsaUJBQWtCO1FBQ2xCLHlCQUFnSDtRQUNoSCx3Q0FBa0I7UUFDaEIseUJBQUc7UUFDRCxrT0FHRjtRQUFBLGlCQUFJO1FBQ04saUJBQW1CO1FBQ25CLHlDQUFrQjtRQUNoQixrQ0FBbUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2hDLGtDQUFtQjtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDbkMsaUJBQW1CO1FBQ3JCLGlCQUFXOzt1RkRSRSxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggbXVsdGlwbGUgc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRjLWNhcmQtZmFuY3ktZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWRjLWNhcmQtZmFuY3ktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21kYy1jYXJkLWZhbmN5LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1kY0NhcmRGYW5jeUV4YW1wbGUge31cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxuICA8bWF0LWNhcmQtaGVhZGVyPlxuICAgIDxkaXYgbWF0LWNhcmQtYXZhdGFyIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXItaW1hZ2VcIj48L2Rpdj5cbiAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+RG9nIEJyZWVkPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmEyLmpwZ1wiIGFsdD1cIlBob3RvIG9mIGEgU2hpYmEgSW51XCI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxwPlxuICAgICAgVGhlIFNoaWJhIEludSBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIHNpeCBvcmlnaW5hbCBhbmQgZGlzdGluY3Qgc3BpdHogYnJlZWRzIG9mIGRvZyBmcm9tIEphcGFuLlxuICAgICAgQSBzbWFsbCwgYWdpbGUgZG9nIHRoYXQgY29wZXMgdmVyeSB3ZWxsIHdpdGggbW91bnRhaW5vdXMgdGVycmFpbiwgdGhlIFNoaWJhIEludSB3YXMgb3JpZ2luYWxseVxuICAgICAgYnJlZCBmb3IgaHVudGluZy5cbiAgICA8L3A+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cbiJdfQ==