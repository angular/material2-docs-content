import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Input with hints
 */
export class InputHintExample {
}
InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
InputHintExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 11, vars: 1, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Ex. I need help with..."], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2, 3);
        i0.ɵɵelementStart(6, "mat-hint", 4);
        i0.ɵɵelementStart(7, "strong");
        i0.ɵɵtext(8, "Don't disclose personal info");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-hint", 5);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("", _r0.value.length, " / 256");
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{ selector: 'input-hint-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Message</mat-label>\n    <input matInput #message maxlength=\"256\" placeholder=\"Ex. I need help with...\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oaW50L2lucHV0LWhpbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjttRUFBaEIsZ0JBQWdCO1FDVjdCLCtCQUEyQjtRQUN6Qix5Q0FBNkQ7UUFDM0QsaUNBQVc7UUFBQSx1QkFBTztRQUFBLGlCQUFZO1FBQzlCLDhCQUErRTtRQUMvRSxtQ0FBd0I7UUFBQSw4QkFBUTtRQUFBLDRDQUE0QjtRQUFBLGlCQUFTO1FBQUMsaUJBQVc7UUFDakYsbUNBQXNCO1FBQUEsYUFBOEI7UUFBQSxpQkFBVztRQUNqRSxpQkFBaUI7UUFDbkIsaUJBQU87OztRQUZtQixnQkFBOEI7UUFBOUIscURBQThCOzt1RkRLM0MsZ0JBQWdCO2NBTDVCLFNBQVM7MkJBQ0Usb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dCB3aXRoIGhpbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWhpbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtaGludC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtaGludC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhpbnRFeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+TWVzc2FnZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAjbWVzc2FnZSBtYXhsZW5ndGg9XCIyNTZcIiBwbGFjZWhvbGRlcj1cIkV4LiBJIG5lZWQgaGVscCB3aXRoLi4uXCI+XG4gICAgPG1hdC1oaW50IGFsaWduPVwic3RhcnRcIj48c3Ryb25nPkRvbid0IGRpc2Nsb3NlIHBlcnNvbmFsIGluZm88L3N0cm9uZz4gPC9tYXQtaGludD5cbiAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIj57e21lc3NhZ2UudmFsdWUubGVuZ3RofX0gLyAyNTY8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19