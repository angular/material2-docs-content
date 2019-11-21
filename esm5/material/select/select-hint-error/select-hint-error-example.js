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
    i0.ɵɵelementStart(0, "mat-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var animal_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", animal_r14);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", animal_r14.name, " ");
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
var SelectHintErrorExample = /** @class */ (function () {
    function SelectHintErrorExample() {
        this.animalControl = new FormControl('', [Validators.required]);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    SelectHintErrorExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-hint-error-example',
                    templateUrl: 'select-hint-error-example.html',
                    styleUrls: ['select-hint-error-example.css'],
                },] },
    ];
    SelectHintErrorExample.ɵfac = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
    SelectHintErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "mat select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Favorite animal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select", 0);
            i0.ɵɵelementStart(6, "mat-option");
            i0.ɵɵtext(7, "--");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, SelectHintErrorExample_mat_option_8_Template, 2, 2, "mat-option", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, SelectHintErrorExample_mat_error_9_Template, 2, 0, "mat-error", 2);
            i0.ɵɵelementStart(10, "mat-hint");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "h4");
            i0.ɵɵtext(13, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field");
            i0.ɵɵelementStart(15, "mat-label");
            i0.ɵɵtext(16, "Select your car (required)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "select", 3);
            i0.ɵɵelement(18, "option", 4);
            i0.ɵɵelementStart(19, "option", 5);
            i0.ɵɵtext(20, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "option", 6);
            i0.ɵɵtext(22, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "option", 7);
            i0.ɵɵtext(24, "Audi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(25, SelectHintErrorExample_mat_error_25_Template, 2, 0, "mat-error", 2);
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
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i5.NgIf, i1.MatHint, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1.MatError], styles: [""] });
    return SelectHintErrorExample;
}());
export { SelectHintErrorExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
                styleUrls: ['select-hint-error-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oaW50LWVycm9yL3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0luRCxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhCLGtDQUFnQjtJQUN6RCxlQUNGO0lBREUsZ0RBQ0Y7OztJQUVGLGlDQUFzRDtJQUFBLHVDQUF1QjtJQUFBLGlCQUFZOzs7SUFhekYsaUNBQ0U7SUFBQSx3Q0FDRjtJQUFBLGlCQUFZOztBRGhCZCw2Q0FBNkM7QUFDN0M7SUFBQTtRQU1FLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0Qsc0JBQWlCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxZQUFPLEdBQWE7WUFDbEIsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBQztTQUMvQyxDQUFDO0tBQ0g7O2dCQWRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDZG5DLDBCQUFJO1lBQUEsMEJBQVU7WUFBQSxpQkFBSztZQUNuQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsK0JBQWU7WUFBQSxpQkFBWTtZQUN0QyxxQ0FDRTtZQUFBLGtDQUFZO1lBQUEsa0JBQUU7WUFBQSxpQkFBYTtZQUMzQixxRkFDRTtZQUVKLGlCQUFhO1lBQ2IsbUZBQXNEO1lBQ3RELGlDQUFVO1lBQUEsYUFBOEI7WUFBQSxpQkFBVztZQUNyRCxpQkFBaUI7WUFFakIsMkJBQUk7WUFBQSxtQ0FBa0I7WUFBQSxpQkFBSztZQUMzQix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsMkNBQTBCO1lBQUEsaUJBQVk7WUFDakQsa0NBQ0U7WUFBQSw2QkFBK0M7WUFDL0Msa0NBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNsQyxrQ0FBeUI7WUFBQSx5QkFBUTtZQUFBLGlCQUFTO1lBQzFDLGtDQUFxQjtZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDcEMsaUJBQVM7WUFDVCxxRkFDRTtZQUVGLGlDQUFVO1lBQUEsdURBQXNDO1lBQUEsaUJBQVc7WUFDN0QsaUJBQWlCOztZQXZCSCxlQUE2QjtZQUE3QiwrQ0FBNkI7WUFFM0IsZUFBOEI7WUFBOUIscUNBQThCO1lBSWpDLGVBQTBDO1lBQTFDLDZEQUEwQztZQUMzQyxlQUE4QjtZQUE5Qiw0RkFBOEI7WUFNTixlQUFpQztZQUFqQyxtREFBaUM7WUFNeEQsZUFBOEM7WUFBOUMsaUVBQThDOztpQ0R0QjNEO0NBdUJDLEFBZEQsSUFjQztTQVRZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBBbmltYWwge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNvdW5kOiBzdHJpbmc7XG59XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggZm9ybSBmaWVsZCBmZWF0dXJlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEhpbnRFcnJvckV4YW1wbGUge1xuICBhbmltYWxDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xuICBzZWxlY3RGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIGFuaW1hbHM6IEFuaW1hbFtdID0gW1xuICAgIHtuYW1lOiAnRG9nJywgc291bmQ6ICdXb29mISd9LFxuICAgIHtuYW1lOiAnQ2F0Jywgc291bmQ6ICdNZW93ISd9LFxuICAgIHtuYW1lOiAnQ293Jywgc291bmQ6ICdNb28hJ30sXG4gICAge25hbWU6ICdGb3gnLCBzb3VuZDogJ1dhLXBhLXBhLXBhLXBhLXBhLXBvdyEnfSxcbiAgXTtcbn1cbiIsIjxoND5tYXQgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBhbmltYWw8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImFuaW1hbENvbnRyb2xcIiByZXF1aXJlZD5cbiAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgYW5pbWFsIG9mIGFuaW1hbHNcIiBbdmFsdWVdPVwiYW5pbWFsXCI+XG4gICAgICB7e2FuaW1hbC5uYW1lfX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbiAgPG1hdC1lcnJvciAqbmdJZj1cImFuaW1hbENvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5QbGVhc2UgY2hvb3NlIGFuIGFuaW1hbDwvbWF0LWVycm9yPlxuICA8bWF0LWhpbnQ+e3thbmltYWxDb250cm9sLnZhbHVlPy5zb3VuZH19PC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhciAocmVxdWlyZWQpPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCByZXF1aXJlZCBbZm9ybUNvbnRyb2xdPVwic2VsZWN0Rm9ybUNvbnRyb2xcIj5cbiAgICA8b3B0aW9uIGxhYmVsPVwiLS1zZWxlY3Qgc29tZXRoaW5nIC0tXCI+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWxlY3RGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWRcbiAgPC9tYXQtZXJyb3I+XG4gIDxtYXQtaGludD5Zb3UgY2FuIHBpY2sgdXAgeW91ciBmYXZvcml0ZSBjYXIgaGVyZTwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG4iXX0=