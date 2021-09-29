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
ButtonToggleExclusiveExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["group", "matButtonToggleGroup"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'button-toggle-exclusive-example', template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n", styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sNEJBQTRCOzt3R0FBNUIsNEJBQTRCOytFQUE1Qiw0QkFBNEI7UUNWekMsd0RBQXVEO1FBQ3JELDRDQUE2RDtRQUMzRCxnQ0FBVTtRQUFBLGlDQUFpQjtRQUFBLGlCQUFXO1FBQ3hDLGlCQUFvQjtRQUNwQiw0Q0FBaUU7UUFDL0QsZ0NBQVU7UUFBQSxtQ0FBbUI7UUFBQSxpQkFBVztRQUMxQyxpQkFBb0I7UUFDcEIsNENBQStEO1FBQzdELGdDQUFVO1FBQUEsbUNBQWtCO1FBQUEsaUJBQVc7UUFDekMsaUJBQW9CO1FBQ3BCLDZDQUE0RTtRQUMxRSxpQ0FBVTtRQUFBLHFDQUFvQjtRQUFBLGlCQUFXO1FBQzNDLGlCQUFvQjtRQUN0QixpQkFBMEI7UUFDMUIsK0JBQW9DO1FBQUEsYUFBK0I7UUFBQSxpQkFBTTs7O1FBQXJDLGdCQUErQjtRQUEvQix3REFBK0I7O3VGREp0RCw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDRSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEV4Y2x1c2l2ZSBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUV4Y2x1c2l2ZUV4YW1wbGUge31cbiIsIjxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAjZ3JvdXA9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJsZWZ0XCIgYXJpYS1sYWJlbD1cIlRleHQgYWxpZ24gbGVmdFwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fbGVmdDwvbWF0LWljb24+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImNlbnRlclwiIGFyaWEtbGFiZWw9XCJUZXh0IGFsaWduIGNlbnRlclwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fY2VudGVyPC9tYXQtaWNvbj5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwicmlnaHRcIiBhcmlhLWxhYmVsPVwiVGV4dCBhbGlnbiByaWdodFwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fcmlnaHQ8L21hdC1pY29uPlxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJqdXN0aWZ5XCIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIlRleHQgYWxpZ24ganVzdGlmeVwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fanVzdGlmeTwvbWF0LWljb24+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtc2VsZWN0ZWQtdmFsdWVcIj5TZWxlY3RlZCB2YWx1ZToge3tncm91cC52YWx1ZX19PC9kaXY+XG4iXX0=