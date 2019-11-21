import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/core";
function SelectOverviewExample_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var food_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r22.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r22.viewValue, " ");
} }
/**
 * @title Basic select
 */
var SelectOverviewExample = /** @class */ (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-overview-example',
                    templateUrl: 'select-overview-example.html',
                    styleUrls: ['select-overview-example.css'],
                },] },
    ];
    SelectOverviewExample.ɵfac = function SelectOverviewExample_Factory(t) { return new (t || SelectOverviewExample)(); };
    SelectOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectOverviewExample, selectors: [["select-overview-example"]], decls: 21, vars: 1, consts: [[3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "required", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "Basic mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Favorite food");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select");
            i0.ɵɵtemplate(6, SelectOverviewExample_mat_option_6_Template, 2, 2, "mat-option", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h4");
            i0.ɵɵtext(8, "Basic native select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field");
            i0.ɵɵelementStart(10, "mat-label");
            i0.ɵɵtext(11, "Cars");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "select", 1);
            i0.ɵɵelementStart(13, "option", 2);
            i0.ɵɵtext(14, "Volvo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "option", 3);
            i0.ɵɵtext(16, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "option", 4);
            i0.ɵɵtext(18, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option", 5);
            i0.ɵɵtext(20, "Audi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.foods);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgForOf, i4.MatInput, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i6.MatOption], styles: [""] });
    return SelectOverviewExample;
}());
export { SelectOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectOverviewExample, [{
        type: Component,
        args: [{
                selector: 'select-overview-example',
                templateUrl: 'select-overview-example.html',
                styleUrls: ['select-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW92ZXJ2aWV3L3NlbGVjdC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vdmVydmlldy9zZWxlY3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0lwQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjBCLHNDQUFvQjtJQUN6RCxlQUNGO0lBREUsbURBQ0Y7O0FEQ0o7O0dBRUc7QUFDSDtJQUFBO1FBTUUsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztLQUNIOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzNDOzs4RkFDWSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ2ZsQywwQkFBSTtZQUFBLGdDQUFnQjtZQUFBLGlCQUFLO1lBQ3pCLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSw2QkFBYTtZQUFBLGlCQUFZO1lBQ3BDLGtDQUNFO1lBQUEsb0ZBQ0U7WUFFSixpQkFBYTtZQUNmLGlCQUFpQjtZQUVqQiwwQkFBSTtZQUFBLG1DQUFtQjtZQUFBLGlCQUFLO1lBQzVCLHNDQUNFO1lBQUEsa0NBQVc7WUFBQSxxQkFBSTtZQUFBLGlCQUFZO1lBQzNCLGtDQUNFO1lBQUEsa0NBQXNCO1lBQUEsc0JBQUs7WUFBQSxpQkFBUztZQUNwQyxrQ0FBcUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2xDLGtDQUF5QjtZQUFBLHlCQUFRO1lBQUEsaUJBQVM7WUFDMUMsa0NBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNwQyxpQkFBUztZQUNYLGlCQUFpQjs7WUFmRCxlQUEwQjtZQUExQixtQ0FBMEI7O2dDREoxQztDQXFCQyxBQVhELElBV0M7U0FOWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9vZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBzZWxlY3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE92ZXJ2aWV3RXhhbXBsZSB7XG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ31cbiAgXTtcbn1cbiIsIjxoND5CYXNpYyBtYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBmb29kPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0PlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmb29kIG9mIGZvb2RzXCIgW3ZhbHVlXT1cImZvb2QudmFsdWVcIj5cbiAgICAgIHt7Zm9vZC52aWV3VmFsdWV9fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0PkJhc2ljIG5hdGl2ZSBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkNhcnM8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIHJlcXVpcmVkPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19