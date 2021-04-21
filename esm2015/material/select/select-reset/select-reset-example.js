import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
function SelectResetExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r1);
} }
/** @title Select with reset option */
export class SelectResetExample {
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
SelectResetExample.ɵfac = function SelectResetExample_Factory(t) { return new (t || SelectResetExample)(); };
SelectResetExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectResetExample, selectors: [["select-reset-example"]], decls: 24, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "id", "mySelectId"], ["value", "", "disabled", "", "selected", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectResetExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select");
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectResetExample_mat_option_8_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h4");
        i0.ɵɵtext(10, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field", 0);
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13, "Select your car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "select", 2);
        i0.ɵɵelement(15, "option", 3);
        i0.ɵɵelementStart(16, "option", 4);
        i0.ɵɵtext(17, "Volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "option", 5);
        i0.ɵɵtext(19, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "option", 6);
        i0.ɵɵtext(21, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "option", 7);
        i0.ɵɵtext(23, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.states);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.NgForOf, i5.MatInput, i6.NgSelectOption, i6.ɵangular_packages_forms_forms_ba], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectResetExample, [{
        type: Component,
        args: [{
                selector: 'select-reset-example',
                templateUrl: 'select-reset-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0twQyxxQ0FBeUQ7SUFBQSxZQUFTO0lBQUEsaUJBQWE7OztJQUF0QyxnQ0FBZTtJQUFDLGVBQVM7SUFBVCw4QkFBUzs7QURIdEUsc0NBQXNDO0FBS3RDLE1BQU0sT0FBTyxrQkFBa0I7SUFKL0I7UUFLRSxXQUFNLEdBQWE7WUFDakIsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFVBQVU7WUFDL0YsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQzVGLFdBQVcsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWE7WUFDekYsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWTtZQUN4RixVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWM7WUFDMUYsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTO1lBQ3pGLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTO1NBQ2xFLENBQUM7S0FDSDs7b0ZBVlksa0JBQWtCO3FFQUFsQixrQkFBa0I7UUNQL0IsMEJBQUk7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBQ25CLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLHFCQUFLO1FBQUEsaUJBQVk7UUFDNUIsa0NBQVk7UUFDVixrQ0FBWTtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDN0IsaUZBQStFO1FBQ2pGLGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLDBCQUFJO1FBQUEsbUNBQWtCO1FBQUEsaUJBQUs7UUFDM0IsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsZ0NBQWU7UUFBQSxpQkFBWTtRQUN0QyxrQ0FBeUM7UUFDdkMsNkJBQTRDO1FBQzVDLGtDQUFzQjtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDcEMsa0NBQXFCO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNsQyxrQ0FBeUI7UUFBQSx5QkFBUTtRQUFBLGlCQUFTO1FBQzFDLGtDQUFxQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDcEMsaUJBQVM7UUFDWCxpQkFBaUI7O1FBZGlCLGVBQVM7UUFBVCxvQ0FBUzs7dUZERTlCLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCByZXNldCBvcHRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1yZXNldC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UmVzZXRFeGFtcGxlIHtcbiAgc3RhdGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsICdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJyxcbiAgICAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLCAnS2Fuc2FzJywgJ0tlbnR1Y2t5JyxcbiAgICAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLFxuICAgICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJyxcbiAgICAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JyxcbiAgICAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ1xuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3Q+XG4gICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2Ygc3RhdGVzXCIgW3ZhbHVlXT1cInN0YXRlXCI+e3tzdGF0ZX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgaWQ9XCJteVNlbGVjdElkXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19