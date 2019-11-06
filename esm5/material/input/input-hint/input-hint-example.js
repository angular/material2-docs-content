import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
var _c0 = ["message", ""];
/**
 * @title Input with hints
 */
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-hint-example',
                    templateUrl: 'input-hint-example.html',
                    styleUrls: ['input-hint-example.css'],
                },] },
    ];
    InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
    InputHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 9, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Message"], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2, _c0);
            i0.ɵɵelementStart(4, "mat-hint", 3);
            i0.ɵɵelementStart(5, "strong");
            i0.ɵɵtext(6, "Don't disclose personal info");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-hint", 4);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r8 = i0.ɵɵreference(3);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", _r8.value.length, " / 256");
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputHintExample;
}());
export { InputHintExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{
                selector: 'input-hint-example',
                templateUrl: 'input-hint-example.html',
                styleUrls: ['input-hint-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oaW50L2lucHV0LWhpbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLZ0M7O2dCQUwvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtvQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDOztvRkFDWSxnQkFBZ0I7eURBQWhCLGdCQUFnQjtZQ1Y3QiwrQkFFRTtZQUFBLHlDQUNFO1lBQUEsZ0NBQ0E7WUFBQSxtQ0FBd0I7WUFBQSw4QkFBUTtZQUFBLDRDQUE0QjtZQUFBLGlCQUFTO1lBQUMsaUJBQVc7WUFDakYsbUNBQXNCO1lBQUEsWUFBOEI7WUFBQSxpQkFBVztZQUNqRSxpQkFBaUI7WUFFbkIsaUJBQU87OztZQUhtQixlQUE4QjtZQUE5QixxREFBOEI7OzJCREx4RDtDQVVnQyxBQUxoQyxJQUtnQztTQUFuQixnQkFBZ0I7bUNBQWhCLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIElucHV0IHdpdGggaGludHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtaGludC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1oaW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1oaW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0SGludEV4YW1wbGUge31cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPGlucHV0IG1hdElucHV0ICNtZXNzYWdlIG1heGxlbmd0aD1cIjI1NlwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiPlxuICAgIDxtYXQtaGludCBhbGlnbj1cInN0YXJ0XCI+PHN0cm9uZz5Eb24ndCBkaXNjbG9zZSBwZXJzb25hbCBpbmZvPC9zdHJvbmc+IDwvbWF0LWhpbnQ+XG4gICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+e3ttZXNzYWdlLnZhbHVlLmxlbmd0aH19IC8gMjU2PC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgXG48L2Zvcm0+XG4iXX0=