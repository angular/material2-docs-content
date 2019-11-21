import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/icon";
/**
 * @title Exclusive selection
 */
var ButtonToggleExclusiveExample = /** @class */ (function () {
    function ButtonToggleExclusiveExample() {
    }
    ButtonToggleExclusiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'button-toggle-exclusive-example',
                    templateUrl: 'button-toggle-exclusive-example.html',
                    styleUrls: ['button-toggle-exclusive-example.css'],
                },] },
    ];
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
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate1("Selected value: ", _r0.value, "");
        } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatIcon], styles: [".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"] });
    return ButtonToggleExclusiveExample;
}());
export { ButtonToggleExclusiveExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-exclusive-example',
                templateUrl: 'button-toggle-exclusive-example.html',
                styleUrls: ['button-toggle-exclusive-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBSzRDOztnQkFMM0MsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFdBQVcsRUFBRSxzQ0FBc0M7b0JBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2lCQUNuRDs7NEdBQ1ksNEJBQTRCO3FFQUE1Qiw0QkFBNEI7WUNWekMsd0RBQ0U7WUFBQSw0Q0FDRTtZQUFBLGdDQUFVO1lBQUEsaUNBQWlCO1lBQUEsaUJBQVc7WUFDeEMsaUJBQW9CO1lBQ3BCLDRDQUNFO1lBQUEsZ0NBQVU7WUFBQSxtQ0FBbUI7WUFBQSxpQkFBVztZQUMxQyxpQkFBb0I7WUFDcEIsNENBQ0U7WUFBQSxnQ0FBVTtZQUFBLG1DQUFrQjtZQUFBLGlCQUFXO1lBQ3pDLGlCQUFvQjtZQUNwQiw2Q0FDRTtZQUFBLGlDQUFVO1lBQUEscUNBQW9CO1lBQUEsaUJBQVc7WUFDM0MsaUJBQW9CO1lBQ3RCLGlCQUEwQjtZQUMxQiwrQkFBb0M7WUFBQSxhQUErQjtZQUFBLGlCQUFNOzs7WUFBckMsZ0JBQStCO1lBQS9CLHdEQUErQjs7dUNEZG5FO0NBVTRDLEFBTDVDLElBSzRDO1NBQS9CLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgRXhjbHVzaXZlIHNlbGVjdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSB7fVxuIiwiPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwICNncm91cD1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCI+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImxlZnRcIiBhcmlhLWxhYmVsPVwiVGV4dCBhbGlnbiBsZWZ0XCI+XG4gICAgPG1hdC1pY29uPmZvcm1hdF9hbGlnbl9sZWZ0PC9tYXQtaWNvbj5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiY2VudGVyXCIgYXJpYS1sYWJlbD1cIlRleHQgYWxpZ24gY2VudGVyXCI+XG4gICAgPG1hdC1pY29uPmZvcm1hdF9hbGlnbl9jZW50ZXI8L21hdC1pY29uPlxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJyaWdodFwiIGFyaWEtbGFiZWw9XCJUZXh0IGFsaWduIHJpZ2h0XCI+XG4gICAgPG1hdC1pY29uPmZvcm1hdF9hbGlnbl9yaWdodDwvbWF0LWljb24+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImp1c3RpZnlcIiBkaXNhYmxlZCBhcmlhLWxhYmVsPVwiVGV4dCBhbGlnbiBqdXN0aWZ5XCI+XG4gICAgPG1hdC1pY29uPmZvcm1hdF9hbGlnbl9qdXN0aWZ5PC9tYXQtaWNvbj5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbjwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1zZWxlY3RlZC12YWx1ZVwiPlNlbGVjdGVkIHZhbHVlOiB7e2dyb3VwLnZhbHVlfX08L2Rpdj5cbiJdfQ==