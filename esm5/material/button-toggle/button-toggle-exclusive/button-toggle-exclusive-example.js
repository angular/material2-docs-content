import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/icon";
var _c0 = ["group", "matButtonToggleGroup"];
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
    ButtonToggleExclusiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-button-toggle-group", null, _c0);
            i0.ɵɵelementStart(2, "mat-button-toggle", 0);
            i0.ɵɵelementStart(3, "mat-icon");
            i0.ɵɵtext(4, "format_align_left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-button-toggle", 1);
            i0.ɵɵelementStart(6, "mat-icon");
            i0.ɵɵtext(7, "format_align_center");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-button-toggle", 2);
            i0.ɵɵelementStart(9, "mat-icon");
            i0.ɵɵtext(10, "format_align_right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-button-toggle", 3);
            i0.ɵɵelementStart(12, "mat-icon");
            i0.ɵɵtext(13, "format_align_justify");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 4);
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
/*@__PURE__*/ i0.ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
        type: Component,
        args: [{
                selector: 'button-toggle-exclusive-example',
                templateUrl: 'button-toggle-exclusive-example.html',
                styleUrls: ['button-toggle-exclusive-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUs0Qzs7Z0JBTDNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxXQUFXLEVBQUUsc0NBQXNDO29CQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztpQkFDbkQ7OzRHQUNZLDRCQUE0QjtxRUFBNUIsNEJBQTRCO1lDVnpDLDBEQUNFO1lBQUEsNENBQ0U7WUFBQSxnQ0FBVTtZQUFBLGlDQUFpQjtZQUFBLGlCQUFXO1lBQ3hDLGlCQUFvQjtZQUNwQiw0Q0FDRTtZQUFBLGdDQUFVO1lBQUEsbUNBQW1CO1lBQUEsaUJBQVc7WUFDMUMsaUJBQW9CO1lBQ3BCLDRDQUNFO1lBQUEsZ0NBQVU7WUFBQSxtQ0FBa0I7WUFBQSxpQkFBVztZQUN6QyxpQkFBb0I7WUFDcEIsNkNBQ0U7WUFBQSxpQ0FBVTtZQUFBLHFDQUFvQjtZQUFBLGlCQUFXO1lBQzNDLGlCQUFvQjtZQUN0QixpQkFBMEI7WUFDMUIsK0JBQW9DO1lBQUEsYUFBK0I7WUFBQSxpQkFBTTs7O1lBQXJDLGdCQUErQjtZQUEvQix3REFBK0I7O3VDRGRuRTtDQVU0QyxBQUw1QyxJQUs0QztTQUEvQiw0QkFBNEI7bUNBQTVCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEV4Y2x1c2l2ZSBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUV4Y2x1c2l2ZUV4YW1wbGUge31cbiIsIjxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAjZ3JvdXA9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJsZWZ0XCIgYXJpYS1sYWJlbD1cIlRleHQgYWxpZ24gbGVmdFwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fbGVmdDwvbWF0LWljb24+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImNlbnRlclwiIGFyaWEtbGFiZWw9XCJUZXh0IGFsaWduIGNlbnRlclwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fY2VudGVyPC9tYXQtaWNvbj5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwicmlnaHRcIiBhcmlhLWxhYmVsPVwiVGV4dCBhbGlnbiByaWdodFwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fcmlnaHQ8L21hdC1pY29uPlxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJqdXN0aWZ5XCIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIlRleHQgYWxpZ24ganVzdGlmeVwiPlxuICAgIDxtYXQtaWNvbj5mb3JtYXRfYWxpZ25fanVzdGlmeTwvbWF0LWljb24+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtc2VsZWN0ZWQtdmFsdWVcIj5TZWxlY3RlZCB2YWx1ZToge3tncm91cC52YWx1ZX19PC9kaXY+XG4iXX0=