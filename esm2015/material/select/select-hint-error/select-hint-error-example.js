import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectHintErrorExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const animal_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", animal_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", animal_r3.name, " ");
} }
function SelectHintErrorExample_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Please choose an animal");
    i0.ɵɵelementEnd();
} }
function SelectHintErrorExample_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " This field is required ");
    i0.ɵɵelementEnd();
} }
/** @title Select with form field features */
export class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl('', Validators.required);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
}
SelectHintErrorExample.ɵfac = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
SelectHintErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["appearance", "fill"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 1);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "--");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectHintErrorExample_mat_option_8_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, SelectHintErrorExample_mat_error_9_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementStart(10, "mat-hint");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "h4");
        i0.ɵɵtext(13, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 0);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Select your car (required)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 4);
        i0.ɵɵelement(18, "option", 5);
        i0.ɵɵelementStart(19, "option", 6);
        i0.ɵɵtext(20, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "option", 7);
        i0.ɵɵtext(22, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 8);
        i0.ɵɵtext(24, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, SelectHintErrorExample_mat_error_25_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementStart(26, "mat-hint");
        i0.ɵɵtext(27, "You can pick up your favorite car here");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.animalControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.animals);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.animalControl.hasError("required"));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.animalControl.value == null ? null : ctx.animalControl.value.sound);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.selectFormControl);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.selectFormControl.hasError("required"));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i5.NgIf, i1.MatHint, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1.MatError], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oaW50LWVycm9yL3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0luRCxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhCLGlDQUFnQjtJQUN6RCxlQUNGO0lBREUsK0NBQ0Y7OztJQUVGLGlDQUFzRDtJQUFBLHVDQUF1QjtJQUFBLGlCQUFZOzs7SUFhekYsaUNBQ0U7SUFBQSx3Q0FDRjtJQUFBLGlCQUFZOztBRGhCZCw2Q0FBNkM7QUFLN0MsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQUtFLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFlBQU8sR0FBYTtZQUNsQixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFDO1NBQy9DLENBQUM7S0FDSDs7NEZBVFksc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNibkMsMEJBQUk7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBQ25CLHlDQUNFO1FBQUEsaUNBQVc7UUFBQSwrQkFBZTtRQUFBLGlCQUFZO1FBQ3RDLHFDQUNFO1FBQUEsa0NBQVk7UUFBQSxrQkFBRTtRQUFBLGlCQUFhO1FBQzNCLHFGQUNFO1FBRUosaUJBQWE7UUFDYixtRkFBc0Q7UUFDdEQsaUNBQVU7UUFBQSxhQUE4QjtRQUFBLGlCQUFXO1FBQ3JELGlCQUFpQjtRQUVqQiwyQkFBSTtRQUFBLG1DQUFrQjtRQUFBLGlCQUFLO1FBQzNCLDBDQUNFO1FBQUEsa0NBQVc7UUFBQSwyQ0FBMEI7UUFBQSxpQkFBWTtRQUNqRCxrQ0FDRTtRQUFBLDZCQUErQztRQUMvQyxrQ0FBcUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2xDLGtDQUF5QjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDMUMsa0NBQXFCO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNwQyxpQkFBUztRQUNULHFGQUNFO1FBRUYsaUNBQVU7UUFBQSx1REFBc0M7UUFBQSxpQkFBVztRQUM3RCxpQkFBaUI7O1FBdkJILGVBQTZCO1FBQTdCLCtDQUE2QjtRQUUzQixlQUE4QjtRQUE5QixxQ0FBOEI7UUFJakMsZUFBMEM7UUFBMUMsNkRBQTBDO1FBQzNDLGVBQThCO1FBQTlCLDRGQUE4QjtRQU1OLGVBQWlDO1FBQWpDLG1EQUFpQztRQU14RCxlQUE4QztRQUE5QyxpRUFBOEM7O2tERFQ5QyxzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmludGVyZmFjZSBBbmltYWwge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNvdW5kOiBzdHJpbmc7XG59XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggZm9ybSBmaWVsZCBmZWF0dXJlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SGludEVycm9yRXhhbXBsZSB7XG4gIGFuaW1hbENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICBzZWxlY3RGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIGFuaW1hbHM6IEFuaW1hbFtdID0gW1xuICAgIHtuYW1lOiAnRG9nJywgc291bmQ6ICdXb29mISd9LFxuICAgIHtuYW1lOiAnQ2F0Jywgc291bmQ6ICdNZW93ISd9LFxuICAgIHtuYW1lOiAnQ293Jywgc291bmQ6ICdNb28hJ30sXG4gICAge25hbWU6ICdGb3gnLCBzb3VuZDogJ1dhLXBhLXBhLXBhLXBhLXBhLXBvdyEnfSxcbiAgXTtcbn1cbiIsIjxoND5tYXQgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIGFuaW1hbDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiYW5pbWFsQ29udHJvbFwiIHJlcXVpcmVkPlxuICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBhbmltYWwgb2YgYW5pbWFsc1wiIFt2YWx1ZV09XCJhbmltYWxcIj5cbiAgICAgIHt7YW5pbWFsLm5hbWV9fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuICA8bWF0LWVycm9yICpuZ0lmPVwiYW5pbWFsQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlBsZWFzZSBjaG9vc2UgYW4gYW5pbWFsPC9tYXQtZXJyb3I+XG4gIDxtYXQtaGludD57e2FuaW1hbENvbnRyb2wudmFsdWU/LnNvdW5kfX08L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgeW91ciBjYXIgKHJlcXVpcmVkKTwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgcmVxdWlyZWQgW2Zvcm1Db250cm9sXT1cInNlbGVjdEZvcm1Db250cm9sXCI+XG4gICAgPG9wdGlvbiBsYWJlbD1cIi0tc2VsZWN0IHNvbWV0aGluZyAtLVwiPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICA8bWF0LWVycm9yICpuZ0lmPVwic2VsZWN0Rm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXG4gIDwvbWF0LWVycm9yPlxuICA8bWF0LWhpbnQ+WW91IGNhbiBwaWNrIHVwIHlvdXIgZmF2b3JpdGUgY2FyIGhlcmU8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuIl19