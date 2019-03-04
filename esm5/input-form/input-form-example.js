import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Inputs in a form
 */
var InputFormExample = /** @class */ (function () {
    function InputFormExample() {
    }
    InputFormExample = tslib_1.__decorate([
        Component({
            selector: 'input-form-example',
            template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First name\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address 2\"></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"City\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"State\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n",
            styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"]
        })
    ], InputFormExample);
    return InputFormExample;
}());
export { InputFormExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2lucHV0LWZvcm0vaW5wdXQtZm9ybS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQUw1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLDY4Q0FBc0M7O1NBRXZDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dHMgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1FeGFtcGxlIHt9XG4iXX0=