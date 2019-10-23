import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Button toggle appearance
 */
var ButtonToggleAppearanceExample = /** @class */ (function () {
    function ButtonToggleAppearanceExample() {
    }
    ButtonToggleAppearanceExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-appearance-example',
                    templateUrl: 'button-toggle-appearance-example.html',
                    styleUrls: ['button-toggle-appearance-example.css'],
                },] },
    ];
    ButtonToggleAppearanceExample.ɵfac = function ButtonToggleAppearanceExample_Factory(t) { return new (t || ButtonToggleAppearanceExample)(); };
    ButtonToggleAppearanceExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleAppearanceExample, selectors: [["button-toggle-appearance-example"]], decls: 18, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"]], template: function ButtonToggleAppearanceExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " Default appearance: ");
            i0.ɵɵelementStart(2, "mat-button-toggle-group", 0);
            i0.ɵɵelementStart(3, "mat-button-toggle", 1);
            i0.ɵɵtext(4, "Bold");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-button-toggle", 2);
            i0.ɵɵtext(6, "Italic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-button-toggle", 3);
            i0.ɵɵtext(8, "Underline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, " Legacy appearance: ");
            i0.ɵɵelementStart(11, "mat-button-toggle-group", 4);
            i0.ɵɵelementStart(12, "mat-button-toggle", 1);
            i0.ɵɵtext(13, "Bold");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-button-toggle", 2);
            i0.ɵɵtext(15, "Italic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-button-toggle", 3);
            i0.ɵɵtext(17, "Underline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"] });
    return ButtonToggleAppearanceExample;
}());
export { ButtonToggleAppearanceExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(ButtonToggleAppearanceExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-appearance-example',
                templateUrl: 'button-toggle-appearance-example.html',
                styleUrls: ['button-toggle-appearance-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBSzZDOztnQkFMNUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7b0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2lCQUNwRDs7OEdBQ1ksNkJBQTZCO3NFQUE3Qiw2QkFBNkI7WUNWMUMseUJBQ0U7WUFBQSxxQ0FDQTtZQUFBLGtEQUNFO1lBQUEsNENBQWdDO1lBQUEsb0JBQUk7WUFBQSxpQkFBb0I7WUFDeEQsNENBQWtDO1lBQUEsc0JBQU07WUFBQSxpQkFBb0I7WUFDNUQsNENBQXFDO1lBQUEseUJBQVM7WUFBQSxpQkFBb0I7WUFDcEUsaUJBQTBCO1lBQzVCLGlCQUFJO1lBRUoseUJBQ0U7WUFBQSxxQ0FDQTtZQUFBLG1EQUNFO1lBQUEsNkNBQWdDO1lBQUEscUJBQUk7WUFBQSxpQkFBb0I7WUFDeEQsNkNBQWtDO1lBQUEsdUJBQU07WUFBQSxpQkFBb0I7WUFDNUQsNkNBQXFDO1lBQUEsMEJBQVM7WUFBQSxpQkFBb0I7WUFDcEUsaUJBQTBCO1lBQzVCLGlCQUFJOzt3Q0RoQko7Q0FVNkMsQUFMN0MsSUFLNkM7U0FBaEMsNkJBQTZCO21DQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCdXR0b24gdG9nZ2xlIGFwcGVhcmFuY2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlIHt9XG4iLCI8cD5cbiAgRGVmYXVsdCBhcHBlYXJhbmNlOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbmFtZT1cImZvbnRTdHlsZVwiIGFyaWEtbGFiZWw9XCJGb250IFN0eWxlXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYm9sZFwiPkJvbGQ8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIml0YWxpY1wiPkl0YWxpYzwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwidW5kZXJsaW5lXCI+VW5kZXJsaW5lPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvcD5cblxuPHA+XG4gIExlZ2FjeSBhcHBlYXJhbmNlOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgYXBwZWFyYW5jZT1cImxlZ2FjeVwiIG5hbWU9XCJmb250U3R5bGVcIiBhcmlhLWxhYmVsPVwiRm9udCBTdHlsZVwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJvbGRcIj5Cb2xkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJpdGFsaWNcIj5JdGFsaWM8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInVuZGVybGluZVwiPlVuZGVybGluZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48L3A+XG4iXX0=