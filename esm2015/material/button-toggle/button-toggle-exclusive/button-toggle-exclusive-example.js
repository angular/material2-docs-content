import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/icon";
/**
 * @title Exclusive selection
 */
export class ButtonToggleExclusiveExample {
}
ButtonToggleExclusiveExample.ɵfac = function ButtonToggleExclusiveExample_Factory(t) { return new (t || ButtonToggleExclusiveExample)(); };
ButtonToggleExclusiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["group", "matButtonToggleGroup"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-button-toggle-group", null, 0);
        i0.ɵɵelementStart(2, "mat-button-toggle", 1);
        i0.ɵɵelementStart(3, "mat-icon");
        i0.ɵɵtext(4, "format_align_left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "format_align_center");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-button-toggle", 3);
        i0.ɵɵelementStart(9, "mat-icon");
        i0.ɵɵtext(10, "format_align_right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-button-toggle", 4);
        i0.ɵɵelementStart(12, "mat-icon");
        i0.ɵɵtext(13, "format_align_justify");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 5);
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(15);
        i0.ɵɵtextInterpolate1("Selected value: ", _r0.value, "");
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatIcon], styles: [".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-exclusive-example',
                templateUrl: 'button-toggle-exclusive-example.html',
                styleUrls: ['button-toggle-exclusive-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sNEJBQTRCOzt3R0FBNUIsNEJBQTRCO2lFQUE1Qiw0QkFBNEI7UUNWekMsd0RBQXVEO1FBQ3JELDRDQUE2RDtRQUMzRCxnQ0FBVTtRQUFBLGlDQUFpQjtRQUFBLGlCQUFXO1FBQ3hDLGlCQUFvQjtRQUNwQiw0Q0FBaUU7UUFDL0QsZ0NBQVU7UUFBQSxtQ0FBbUI7UUFBQSxpQkFBVztRQUMxQyxpQkFBb0I7UUFDcEIsNENBQStEO1FBQzdELGdDQUFVO1FBQUEsbUNBQWtCO1FBQUEsaUJBQVc7UUFDekMsaUJBQW9CO1FBQ3BCLDZDQUE0RTtRQUMxRSxpQ0FBVTtRQUFBLHFDQUFvQjtRQUFBLGlCQUFXO1FBQzNDLGlCQUFvQjtRQUN0QixpQkFBMEI7UUFDMUIsK0JBQW9DO1FBQUEsYUFBK0I7UUFBQSxpQkFBTTs7O1FBQXJDLGdCQUErQjtRQUEvQix3REFBK0I7O3VGREp0RCw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBFeGNsdXNpdmUgc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydidXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlIHt9XG4iLCI8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgI2dyb3VwPVwibWF0QnV0dG9uVG9nZ2xlR3JvdXBcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwibGVmdFwiIGFyaWEtbGFiZWw9XCJUZXh0IGFsaWduIGxlZnRcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX2xlZnQ8L21hdC1pY29uPlxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJjZW50ZXJcIiBhcmlhLWxhYmVsPVwiVGV4dCBhbGlnbiBjZW50ZXJcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX2NlbnRlcjwvbWF0LWljb24+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInJpZ2h0XCIgYXJpYS1sYWJlbD1cIlRleHQgYWxpZ24gcmlnaHRcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX3JpZ2h0PC9tYXQtaWNvbj5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwianVzdGlmeVwiIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJUZXh0IGFsaWduIGp1c3RpZnlcIj5cbiAgICA8bWF0LWljb24+Zm9ybWF0X2FsaWduX2p1c3RpZnk8L21hdC1pY29uPlxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxuPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLXNlbGVjdGVkLXZhbHVlXCI+U2VsZWN0ZWQgdmFsdWU6IHt7Z3JvdXAudmFsdWV9fTwvZGl2PlxuIl19