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
    SelectHintErrorExample.ngFactoryDef = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
    SelectHintErrorExample.ngComponentDef = i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i5.NgIf, i1.MatHint, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_y, i1.MatError], styles: [""] });
    return SelectHintErrorExample;
}());
export { SelectHintErrorExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
                styleUrls: ['select-hint-error-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWhpbnQtZXJyb3Ivc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWhpbnQtZXJyb3Ivc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDSW5ELHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGOEIsa0NBQWdCO0lBQ3pELGVBQ0Y7SUFERSxnREFDRjs7O0lBRUYsaUNBQXNEO0lBQUEsdUNBQXVCO0lBQUEsaUJBQVk7OztJQWF6RixpQ0FDRTtJQUFBLHdDQUNGO0lBQUEsaUJBQVk7O0FEaEJkLDZDQUE2QztBQUM3QztJQUFBO1FBTUUsa0JBQWEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzRCxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFlBQU8sR0FBYTtZQUNsQixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFDO1NBQy9DLENBQUM7S0FDSDs7Z0JBZEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7d0dBQ1ksc0JBQXNCO3lFQUF0QixzQkFBc0I7WUNkbkMsMEJBQUk7WUFBQSwwQkFBVTtZQUFBLGlCQUFLO1lBQ25CLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSwrQkFBZTtZQUFBLGlCQUFZO1lBQ3RDLHFDQUNFO1lBQUEsa0NBQVk7WUFBQSxrQkFBRTtZQUFBLGlCQUFhO1lBQzNCLHFGQUNFO1lBRUosaUJBQWE7WUFDYixtRkFBc0Q7WUFDdEQsaUNBQVU7WUFBQSxhQUE4QjtZQUFBLGlCQUFXO1lBQ3JELGlCQUFpQjtZQUVqQiwyQkFBSTtZQUFBLG1DQUFrQjtZQUFBLGlCQUFLO1lBQzNCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSwyQ0FBMEI7WUFBQSxpQkFBWTtZQUNqRCxrQ0FDRTtZQUFBLDZCQUErQztZQUMvQyxrQ0FBcUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2xDLGtDQUF5QjtZQUFBLHlCQUFRO1lBQUEsaUJBQVM7WUFDMUMsa0NBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNwQyxpQkFBUztZQUNULHFGQUNFO1lBRUYsaUNBQVU7WUFBQSx1REFBc0M7WUFBQSxpQkFBVztZQUM3RCxpQkFBaUI7O1lBdkJILGVBQTZCO1lBQTdCLCtDQUE2QjtZQUUzQixlQUE4QjtZQUE5QixxQ0FBOEI7WUFJakMsZUFBMEM7WUFBMUMsNkRBQTBDO1lBQzNDLGVBQThCO1lBQTlCLDRGQUE4QjtZQU1OLGVBQWlDO1lBQWpDLG1EQUFpQztZQU14RCxlQUE4QztZQUE5QyxpRUFBOEM7O2lDRHRCM0Q7Q0F1QkMsQUFkRCxJQWNDO1NBVFksc0JBQXNCO21DQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hbCB7XG4gIG5hbWU6IHN0cmluZztcbiAgc291bmQ6IHN0cmluZztcbn1cblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBmb3JtIGZpZWxkIGZlYXR1cmVzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtaGludC1lcnJvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtaGludC1lcnJvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SGludEVycm9yRXhhbXBsZSB7XG4gIGFuaW1hbENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG4gIHNlbGVjdEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgYW5pbWFsczogQW5pbWFsW10gPSBbXG4gICAge25hbWU6ICdEb2cnLCBzb3VuZDogJ1dvb2YhJ30sXG4gICAge25hbWU6ICdDYXQnLCBzb3VuZDogJ01lb3chJ30sXG4gICAge25hbWU6ICdDb3cnLCBzb3VuZDogJ01vbyEnfSxcbiAgICB7bmFtZTogJ0ZveCcsIHNvdW5kOiAnV2EtcGEtcGEtcGEtcGEtcGEtcG93ISd9LFxuICBdO1xufVxuIiwiPGg0Pm1hdCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIGFuaW1hbDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiYW5pbWFsQ29udHJvbFwiIHJlcXVpcmVkPlxuICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBhbmltYWwgb2YgYW5pbWFsc1wiIFt2YWx1ZV09XCJhbmltYWxcIj5cbiAgICAgIHt7YW5pbWFsLm5hbWV9fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuICA8bWF0LWVycm9yICpuZ0lmPVwiYW5pbWFsQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlBsZWFzZSBjaG9vc2UgYW4gYW5pbWFsPC9tYXQtZXJyb3I+XG4gIDxtYXQtaGludD57e2FuaW1hbENvbnRyb2wudmFsdWU/LnNvdW5kfX08L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IHlvdXIgY2FyIChyZXF1aXJlZCk8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIHJlcXVpcmVkIFtmb3JtQ29udHJvbF09XCJzZWxlY3RGb3JtQ29udHJvbFwiPlxuICAgIDxvcHRpb24gbGFiZWw9XCItLXNlbGVjdCBzb21ldGhpbmcgLS1cIj48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgPG1hdC1lcnJvciAqbmdJZj1cInNlbGVjdEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZFxuICA8L21hdC1lcnJvcj5cbiAgPG1hdC1oaW50PllvdSBjYW4gcGljayB1cCB5b3VyIGZhdm9yaXRlIGNhciBoZXJlPC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbiJdfQ==