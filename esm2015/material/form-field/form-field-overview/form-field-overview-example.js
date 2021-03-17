import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/** @title Simple form field */
export class FormFieldOverviewExample {
}
FormFieldOverviewExample.ɵfac = function FormFieldOverviewExample_Factory(t) { return new (t || FormFieldOverviewExample)(); };
FormFieldOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldOverviewExample, selectors: [["form-field-overview-example"]], decls: 16, vars: 0, consts: [["appearance", "fill"], ["matInput", ""], ["value", "one"], ["value", "two"]], template: function FormFieldOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Input");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 0);
        i0.ɵɵelementStart(5, "mat-label");
        i0.ɵɵtext(6, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-select");
        i0.ɵɵelementStart(8, "mat-option", 2);
        i0.ɵɵtext(9, "First option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Second option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 0);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Textarea");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "textarea", 1);
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatSelect, i4.MatOption], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldOverviewExample, [{
        type: Component,
        args: [{
                selector: 'form-field-overview-example',
                templateUrl: 'form-field-overview-example.html',
                styleUrls: ['form-field-overview-example.css']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLW92ZXJ2aWV3L2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEMsK0JBQStCO0FBTS9CLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1JyQyx5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSxxQkFBSztRQUFBLGlCQUFZO1FBQzVCLDJCQUFnQjtRQUNsQixpQkFBaUI7UUFDakIseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEsc0JBQU07UUFBQSxpQkFBWTtRQUM3QixrQ0FBWTtRQUNWLHFDQUF3QjtRQUFBLDRCQUFZO1FBQUEsaUJBQWE7UUFDakQsc0NBQXdCO1FBQUEsOEJBQWE7UUFBQSxpQkFBYTtRQUNwRCxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQiwwQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSx5QkFBUTtRQUFBLGlCQUFZO1FBQy9CLCtCQUE4QjtRQUNoQyxpQkFBaUI7O3VGRE5KLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgU2ltcGxlIGZvcm0gZmllbGQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+SW5wdXQ8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNlbGVjdDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9uZVwiPkZpcnN0IG9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInR3b1wiPlNlY29uZCBvcHRpb248L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5UZXh0YXJlYTwvbWF0LWxhYmVsPlxuICA8dGV4dGFyZWEgbWF0SW5wdXQ+PC90ZXh0YXJlYT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=