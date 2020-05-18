/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-reset/select-reset-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
function SelectResetExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r1);
} }
/**
 * \@title Select with reset option
 */
let SelectResetExample = /** @class */ (() => {
    /**
     * \@title Select with reset option
     */
    class SelectResetExample {
        constructor() {
            this.states = [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ];
        }
    }
    SelectResetExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-reset-example',
                    templateUrl: 'select-reset-example.html',
                    styleUrls: ['select-reset-example.css'],
                },] },
    ];
    /** @nocollapse */ SelectResetExample.ɵfac = function SelectResetExample_Factory(t) { return new (t || SelectResetExample)(); };
    /** @nocollapse */ SelectResetExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectResetExample, selectors: [["select-reset-example"]], decls: 24, vars: 1, consts: [[3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "id", "mySelectId"], ["value", "", "disabled", "", "selected", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectResetExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "State");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select");
            i0.ɵɵelementStart(6, "mat-option");
            i0.ɵɵtext(7, "None");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, SelectResetExample_mat_option_8_Template, 2, 2, "mat-option", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h4");
            i0.ɵɵtext(10, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-form-field");
            i0.ɵɵelementStart(12, "mat-label");
            i0.ɵɵtext(13, "Select your car");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 1);
            i0.ɵɵelement(15, "option", 2);
            i0.ɵɵelementStart(16, "option", 3);
            i0.ɵɵtext(17, "Volvo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 4);
            i0.ɵɵtext(19, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option", 5);
            i0.ɵɵtext(21, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 6);
            i0.ɵɵtext(23, "Audi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.states);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.NgForOf, i5.MatInput, i6.NgSelectOption, i6.ɵangular_packages_forms_forms_x], styles: [""] });
    return SelectResetExample;
})();
export { SelectResetExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectResetExample, [{
        type: Component,
        args: [{
                selector: 'select-reset-example',
                templateUrl: 'select-reset-example.html',
                styleUrls: ['select-reset-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectResetExample.prototype.states;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDS3BDLHFDQUF5RDtJQUFBLFlBQVM7SUFBQSxpQkFBYTs7O0lBQXRDLGdDQUFlO0lBQUMsZUFBUztJQUFULDhCQUFTOzs7OztBREZ0RTs7OztJQUFBLE1BS2Esa0JBQWtCO1FBTC9CO1lBTUUsV0FBTSxHQUFhO2dCQUNqQixTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsVUFBVTtnQkFDL0YsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVO2dCQUM1RixXQUFXLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhO2dCQUN6RixVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZO2dCQUN4RixVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWM7Z0JBQzFGLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUztnQkFDekYsVUFBVSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFNBQVM7YUFDbEUsQ0FBQztTQUNIOzs7Z0JBZkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUN4Qzs7MkdBQ1ksa0JBQWtCOzhFQUFsQixrQkFBa0I7WUNSL0IsMEJBQUk7WUFBQSwwQkFBVTtZQUFBLGlCQUFLO1lBQ25CLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxxQkFBSztZQUFBLGlCQUFZO1lBQzVCLGtDQUNFO1lBQUEsa0NBQVk7WUFBQSxvQkFBSTtZQUFBLGlCQUFhO1lBQzdCLGlGQUF5RDtZQUMzRCxpQkFBYTtZQUNmLGlCQUFpQjtZQUVqQiwwQkFBSTtZQUFBLG1DQUFrQjtZQUFBLGlCQUFLO1lBQzNCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSxnQ0FBZTtZQUFBLGlCQUFZO1lBQ3RDLGtDQUNFO1lBQUEsNkJBQTRDO1lBQzVDLGtDQUFzQjtZQUFBLHNCQUFLO1lBQUEsaUJBQVM7WUFDcEMsa0NBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNsQyxrQ0FBeUI7WUFBQSx5QkFBUTtZQUFBLGlCQUFTO1lBQzFDLGtDQUFxQjtZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDcEMsaUJBQVM7WUFDWCxpQkFBaUI7O1lBZEQsZUFBNEI7WUFBNUIsb0NBQTRCOzs2QkRMNUM7S0FrQkM7U0FWWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEM7Ozs7SUFFQyxvQ0FRRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCByZXNldCBvcHRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1yZXNldC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1yZXNldC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZXNldEV4YW1wbGUge1xuICBzdGF0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLFxuICAgICdGbG9yaWRhJywgJ0dlb3JnaWEnLCAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsICdLYW5zYXMnLCAnS2VudHVja3knLFxuICAgICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLFxuICAgICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsXG4gICAgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJywgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLFxuICAgICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXG4gIF07XG59XG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3Q+XG4gICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCIgW3ZhbHVlXT1cInN0YXRlXCI+e3tzdGF0ZX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgeW91ciBjYXI8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIGlkPVwibXlTZWxlY3RJZFwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==