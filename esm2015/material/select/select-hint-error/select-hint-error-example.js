/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-hint-error/select-hint-error-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * @record
 */
function Animal() { }
if (false) {
    /** @type {?} */
    Animal.prototype.name;
    /** @type {?} */
    Animal.prototype.sound;
}
/**
 * \@title Select with form field features
 */
let SelectHintErrorExample = /** @class */ (() => {
    /**
     * \@title Select with form field features
     */
    class SelectHintErrorExample {
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
    SelectHintErrorExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-hint-error-example',
                    templateUrl: 'select-hint-error-example.html',
                    styleUrls: ['select-hint-error-example.css'],
                },] },
    ];
    /** @nocollapse */ SelectHintErrorExample.ɵfac = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
    /** @nocollapse */ SelectHintErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
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
})();
export { SelectHintErrorExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
                styleUrls: ['select-hint-error-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectHintErrorExample.prototype.animalControl;
    /** @type {?} */
    SelectHintErrorExample.prototype.selectFormControl;
    /** @type {?} */
    SelectHintErrorExample.prototype.animals;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oaW50LWVycm9yL3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDSW5ELHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGOEIsaUNBQWdCO0lBQ3pELGVBQ0Y7SUFERSwrQ0FDRjs7O0lBRUYsaUNBQXNEO0lBQUEsdUNBQXVCO0lBQUEsaUJBQVk7OztJQWF6RixpQ0FDRTtJQUFBLHdDQUNGO0lBQUEsaUJBQVk7Ozs7O0FEckJkLHFCQUdDOzs7SUFGQyxzQkFBYTs7SUFDYix1QkFBYzs7Ozs7QUFJaEI7Ozs7SUFBQSxNQUthLHNCQUFzQjtRQUxuQztZQU1FLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELFlBQU8sR0FBYTtnQkFDbEIsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7Z0JBQzdCLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDO2dCQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztnQkFDNUIsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBQzthQUMvQyxDQUFDO1NBQ0g7OztnQkFkQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7aUJBQzdDOzttSEFDWSxzQkFBc0I7a0ZBQXRCLHNCQUFzQjtZQ2RuQywwQkFBSTtZQUFBLDBCQUFVO1lBQUEsaUJBQUs7WUFDbkIsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLCtCQUFlO1lBQUEsaUJBQVk7WUFDdEMscUNBQ0U7WUFBQSxrQ0FBWTtZQUFBLGtCQUFFO1lBQUEsaUJBQWE7WUFDM0IscUZBQ0U7WUFFSixpQkFBYTtZQUNiLG1GQUFzRDtZQUN0RCxpQ0FBVTtZQUFBLGFBQThCO1lBQUEsaUJBQVc7WUFDckQsaUJBQWlCO1lBRWpCLDJCQUFJO1lBQUEsbUNBQWtCO1lBQUEsaUJBQUs7WUFDM0IsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLDJDQUEwQjtZQUFBLGlCQUFZO1lBQ2pELGtDQUNFO1lBQUEsNkJBQStDO1lBQy9DLGtDQUFxQjtZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDbEMsa0NBQXlCO1lBQUEseUJBQVE7WUFBQSxpQkFBUztZQUMxQyxrQ0FBcUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ3BDLGlCQUFTO1lBQ1QscUZBQ0U7WUFFRixpQ0FBVTtZQUFBLHVEQUFzQztZQUFBLGlCQUFXO1lBQzdELGlCQUFpQjs7WUF2QkgsZUFBNkI7WUFBN0IsK0NBQTZCO1lBRTNCLGVBQThCO1lBQTlCLHFDQUE4QjtZQUlqQyxlQUEwQztZQUExQyw2REFBMEM7WUFDM0MsZUFBOEI7WUFBOUIsNEZBQThCO1lBTU4sZUFBaUM7WUFBakMsbURBQWlDO1lBTXhELGVBQThDO1lBQTlDLGlFQUE4Qzs7aUNEdEIzRDtLQXVCQztTQVRZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztJQUVDLCtDQUF5RDs7SUFDekQsbURBQTZEOztJQUM3RCx5Q0FLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIEFuaW1hbCB7XG4gIG5hbWU6IHN0cmluZztcbiAgc291bmQ6IHN0cmluZztcbn1cblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBmb3JtIGZpZWxkIGZlYXR1cmVzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtaGludC1lcnJvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtaGludC1lcnJvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SGludEVycm9yRXhhbXBsZSB7XG4gIGFuaW1hbENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICBzZWxlY3RGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIGFuaW1hbHM6IEFuaW1hbFtdID0gW1xuICAgIHtuYW1lOiAnRG9nJywgc291bmQ6ICdXb29mISd9LFxuICAgIHtuYW1lOiAnQ2F0Jywgc291bmQ6ICdNZW93ISd9LFxuICAgIHtuYW1lOiAnQ293Jywgc291bmQ6ICdNb28hJ30sXG4gICAge25hbWU6ICdGb3gnLCBzb3VuZDogJ1dhLXBhLXBhLXBhLXBhLXBhLXBvdyEnfSxcbiAgXTtcbn1cbiIsIjxoND5tYXQgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBhbmltYWw8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImFuaW1hbENvbnRyb2xcIiByZXF1aXJlZD5cbiAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgYW5pbWFsIG9mIGFuaW1hbHNcIiBbdmFsdWVdPVwiYW5pbWFsXCI+XG4gICAgICB7e2FuaW1hbC5uYW1lfX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbiAgPG1hdC1lcnJvciAqbmdJZj1cImFuaW1hbENvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5QbGVhc2UgY2hvb3NlIGFuIGFuaW1hbDwvbWF0LWVycm9yPlxuICA8bWF0LWhpbnQ+e3thbmltYWxDb250cm9sLnZhbHVlPy5zb3VuZH19PC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhciAocmVxdWlyZWQpPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCByZXF1aXJlZCBbZm9ybUNvbnRyb2xdPVwic2VsZWN0Rm9ybUNvbnRyb2xcIj5cbiAgICA8b3B0aW9uIGxhYmVsPVwiLS1zZWxlY3Qgc29tZXRoaW5nIC0tXCI+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWxlY3RGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWRcbiAgPC9tYXQtZXJyb3I+XG4gIDxtYXQtaGludD5Zb3UgY2FuIHBpY2sgdXAgeW91ciBmYXZvcml0ZSBjYXIgaGVyZTwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG4iXX0=