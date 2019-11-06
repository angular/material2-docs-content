/**
 * @fileoverview added by tsickle
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
    const state_r24 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r24);
} }
/**
 * \@title Select with reset option
 */
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
/*@__PURE__*/ i0.ɵsetClassMetadata(SelectResetExample, [{
        type: Component,
        args: [{
                selector: 'select-reset-example',
                templateUrl: 'select-reset-example.html',
                styleUrls: ['select-reset-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    SelectResetExample.prototype.states;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlc2V0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLcEMscUNBQXlEO0lBQUEsWUFBUztJQUFBLGlCQUFhOzs7SUFBdEMsaUNBQWU7SUFBQyxlQUFTO0lBQVQsK0JBQVM7Ozs7O0FER3RFLE1BQU0sT0FBTyxrQkFBa0I7SUFML0I7UUFNRSxXQUFNLEdBQWE7WUFDakIsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFVBQVU7WUFDL0YsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQzVGLFdBQVcsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWE7WUFDekYsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWTtZQUN4RixVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWM7WUFDMUYsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTO1lBQ3pGLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTO1NBQ2xFLENBQUM7S0FDSDs7O1lBZkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDOztvRkFDWSxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQ1IvQiwwQkFBSTtRQUFBLDBCQUFVO1FBQUEsaUJBQUs7UUFDbkIsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLHFCQUFLO1FBQUEsaUJBQVk7UUFDNUIsa0NBQ0U7UUFBQSxrQ0FBWTtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDN0IsaUZBQXlEO1FBQzNELGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLDBCQUFJO1FBQUEsbUNBQWtCO1FBQUEsaUJBQUs7UUFDM0IsdUNBQ0U7UUFBQSxrQ0FBVztRQUFBLGdDQUFlO1FBQUEsaUJBQVk7UUFDdEMsa0NBQ0U7UUFBQSw2QkFBNEM7UUFDNUMsa0NBQXNCO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUNwQyxrQ0FBcUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2xDLGtDQUF5QjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDMUMsa0NBQXFCO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNwQyxpQkFBUztRQUNYLGlCQUFpQjs7UUFkRCxlQUE0QjtRQUE1QixvQ0FBNEI7O21DREcvQixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDOzs7O0lBRUMsb0NBUUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggcmVzZXQgb3B0aW9uICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtcmVzZXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXJlc2V0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtcmVzZXQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UmVzZXRFeGFtcGxlIHtcbiAgc3RhdGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsICdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJyxcbiAgICAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLCAnS2Fuc2FzJywgJ0tlbnR1Y2t5JyxcbiAgICAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLFxuICAgICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJyxcbiAgICAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JyxcbiAgICAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ1xuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlN0YXRlPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0PlxuICAgIDxtYXQtb3B0aW9uPk5vbmU8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0YXRlIG9mIHN0YXRlc1wiIFt2YWx1ZV09XCJzdGF0ZVwiPnt7c3RhdGV9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IHlvdXIgY2FyPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBpZD1cIm15U2VsZWN0SWRcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+Vm9sdm88L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=