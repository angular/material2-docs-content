import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/** @title Simple form field */
var FormFieldOverviewExample = /** @class */ (function () {
    function FormFieldOverviewExample() {
    }
    FormFieldOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-overview-example',
                    templateUrl: 'form-field-overview-example.html',
                    styleUrls: ['form-field-overview-example.css'],
                },] },
    ];
    FormFieldOverviewExample.ɵfac = function FormFieldOverviewExample_Factory(t) { return new (t || FormFieldOverviewExample)(); };
    FormFieldOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldOverviewExample, selectors: [["form-field-overview-example"]], decls: 9, vars: 0, consts: [[1, "example-container"], ["matInput", "", "placeholder", "Input"], ["matInput", "", "placeholder", "Textarea"], ["placeholder", "Select"], ["value", "option"]], template: function FormFieldOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelement(2, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field");
            i0.ɵɵelement(4, "textarea", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "mat-select", 3);
            i0.ɵɵelementStart(7, "mat-option", 4);
            i0.ɵɵtext(8, "Option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatSelect, i4.MatOption], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return FormFieldOverviewExample;
}());
export { FormFieldOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldOverviewExample, [{
        type: Component,
        args: [{
                selector: 'form-field-overview-example',
                templateUrl: 'form-field-overview-example.html',
                styleUrls: ['form-field-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLW92ZXJ2aWV3L2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEMsK0JBQStCO0FBQy9CO0lBQUE7S0FLd0M7O2dCQUx2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOztvR0FDWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1JyQyw4QkFDRTtZQUFBLHNDQUNFO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsc0NBQ0U7WUFBQSw4QkFBcUQ7WUFDdkQsaUJBQWlCO1lBRWpCLHNDQUNFO1lBQUEscUNBQ0U7WUFBQSxxQ0FBMkI7WUFBQSxzQkFBTTtZQUFBLGlCQUFhO1lBQ2hELGlCQUFhO1lBQ2YsaUJBQWlCO1lBQ25CLGlCQUFNOzttQ0RkTjtDQVF3QyxBQUx4QyxJQUt3QztTQUEzQix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgU2ltcGxlIGZvcm0gZmllbGQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRPdmVydmlld0V4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXRcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPHRleHRhcmVhIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiVGV4dGFyZWFcIj48L3RleHRhcmVhPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG4iXX0=