/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pokemon_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", pokemon_r20.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", pokemon_r20.viewValue, " ");
} }
function SelectOptgroupExample_mat_optgroup_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 9);
    i0.ɵɵtemplate(1, SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r18 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r18.name)("disabled", group_r18.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r18.pokemon);
} }
/**
 * @record
 */
export function Pokemon() { }
if (false) {
    /** @type {?} */
    Pokemon.prototype.value;
    /** @type {?} */
    Pokemon.prototype.viewValue;
}
/**
 * @record
 */
export function PokemonGroup() { }
if (false) {
    /** @type {?|undefined} */
    PokemonGroup.prototype.disabled;
    /** @type {?} */
    PokemonGroup.prototype.name;
    /** @type {?} */
    PokemonGroup.prototype.pokemon;
}
/**
 * \@title Select with option groups
 */
export class SelectOptgroupExample {
    constructor() {
        this.pokemonControl = new FormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
}
SelectOptgroupExample.decorators = [
    { type: Component, args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
                styleUrls: ['select-optgroup-example.css'],
            },] },
];
/** @nocollapse */ SelectOptgroupExample.ɵfac = function SelectOptgroupExample_Factory(t) { return new (t || SelectOptgroupExample)(); };
/** @nocollapse */ SelectOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectOptgroupExample, selectors: [["select-optgroup-example"]], decls: 25, vars: 2, consts: [[3, "formControl"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["matNativeControl", ""], ["label", "Swedish Cars"], ["value", "volvo"], ["value", "saab"], ["label", "German Cars"], ["value", "mercedes"], ["value", "audi"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectOptgroupExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Pokemon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 0);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "-- None --");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectOptgroupExample_mat_optgroup_8_Template, 2, 3, "mat-optgroup", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h4");
        i0.ɵɵtext(10, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field");
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13, "Cars");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "select", 2);
        i0.ɵɵelementStart(15, "optgroup", 3);
        i0.ɵɵelementStart(16, "option", 4);
        i0.ɵɵtext(17, "volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "option", 5);
        i0.ɵɵtext(19, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "optgroup", 6);
        i0.ɵɵelementStart(21, "option", 7);
        i0.ɵɵtext(22, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 8);
        i0.ɵɵtext(24, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.pokemonControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.pokemonGroups);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4.MatOptgroup], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SelectOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
                styleUrls: ['select-optgroup-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    SelectOptgroupExample.prototype.pokemonControl;
    /** @type {?} */
    SelectOptgroupExample.prototype.pokemonGroups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDTXJDLHNDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGcUMseUNBQXVCO0lBQ3ZFLGVBQ0Y7SUFERSxzREFDRjs7O0lBSkYsdUNBRUU7SUFBQSxvR0FDRTtJQUVKLGlCQUFlOzs7SUFMbUMsc0NBQW9CLGdDQUFBO0lBRXhELGVBQXFDO0lBQXJDLDJDQUFxQzs7Ozs7QURKdkQsNkJBR0M7OztJQUZDLHdCQUFjOztJQUNkLDRCQUFrQjs7Ozs7QUFHcEIsa0NBSUM7OztJQUhDLGdDQUFtQjs7SUFDbkIsNEJBQWE7O0lBQ2IsK0JBQW1COzs7OztBQVNyQixNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUsbUJBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQW1CO1lBQzlCO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQztvQkFDOUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7b0JBQ3hDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO2lCQUNqRDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO29CQUM1QyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQztvQkFDMUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7aUJBQ3pDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7b0JBQ2hELEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO29CQUN4QyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQztpQkFDM0M7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQztvQkFDbEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7aUJBQzFDO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7OztZQXpDQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7OzBGQUNZLHFCQUFxQjswREFBckIscUJBQXFCO1FDcEJsQywwQkFBSTtRQUFBLDBCQUFVO1FBQUEsaUJBQUs7UUFDbkIsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLHVCQUFPO1FBQUEsaUJBQVk7UUFDOUIscUNBQ0U7UUFBQSxrQ0FBWTtRQUFBLDBCQUFVO1FBQUEsaUJBQWE7UUFDbkMsd0ZBRUU7UUFJSixpQkFBYTtRQUNmLGlCQUFpQjtRQUVqQiwwQkFBSTtRQUFBLG1DQUFrQjtRQUFBLGlCQUFLO1FBQzNCLHVDQUNFO1FBQUEsa0NBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLGtDQUNFO1FBQUEsb0NBQ0U7UUFBQSxrQ0FBc0I7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ3BDLGtDQUFxQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDcEMsaUJBQVc7UUFDWCxvQ0FDRTtRQUFBLGtDQUF5QjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDMUMsa0NBQXFCO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNwQyxpQkFBVztRQUNiLGlCQUFTO1FBQ1gsaUJBQWlCOztRQXhCSCxlQUE4QjtRQUE5QixnREFBOEI7UUFFMUIsZUFBbUM7UUFBbkMsMkNBQW1DOzttQ0RleEMscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUVDLCtDQUFtQzs7SUFDbkMsOENBaUNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBva2Vtb24ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uR3JvdXAge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgcG9rZW1vbjogUG9rZW1vbltdO1xufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIG9wdGlvbiBncm91cHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RPcHRncm91cEV4YW1wbGUge1xuICBwb2tlbW9uQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwb2tlbW9uR3JvdXBzOiBQb2tlbW9uR3JvdXBbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnR3Jhc3MnLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdidWxiYXNhdXItMCcsIHZpZXdWYWx1ZTogJ0J1bGJhc2F1cid9LFxuICAgICAgICB7dmFsdWU6ICdvZGRpc2gtMScsIHZpZXdWYWx1ZTogJ09kZGlzaCd9LFxuICAgICAgICB7dmFsdWU6ICdiZWxsc3Byb3V0LTInLCB2aWV3VmFsdWU6ICdCZWxsc3Byb3V0J31cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXYXRlcicsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ3NxdWlydGxlLTMnLCB2aWV3VmFsdWU6ICdTcXVpcnRsZSd9LFxuICAgICAgICB7dmFsdWU6ICdwc3lkdWNrLTQnLCB2aWV3VmFsdWU6ICdQc3lkdWNrJ30sXG4gICAgICAgIHt2YWx1ZTogJ2hvcnNlYS01Jywgdmlld1ZhbHVlOiAnSG9yc2VhJ31cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGaXJlJyxcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdjaGFybWFuZGVyLTYnLCB2aWV3VmFsdWU6ICdDaGFybWFuZGVyJ30sXG4gICAgICAgIHt2YWx1ZTogJ3Z1bHBpeC03Jywgdmlld1ZhbHVlOiAnVnVscGl4J30sXG4gICAgICAgIHt2YWx1ZTogJ2ZsYXJlb24tOCcsIHZpZXdWYWx1ZTogJ0ZsYXJlb24nfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BzeWNoaWMnLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdtZXctOScsIHZpZXdWYWx1ZTogJ01ldyd9LFxuICAgICAgICB7dmFsdWU6ICdtZXd0d28tMTAnLCB2aWV3VmFsdWU6ICdNZXd0d28nfSxcbiAgICAgIF1cbiAgICB9XG4gIF07XG59XG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+UG9rZW1vbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwicG9rZW1vbkNvbnRyb2xcIj5cbiAgICA8bWF0LW9wdGlvbj4tLSBOb25lIC0tPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0Z3JvdXAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHBva2Vtb25Hcm91cHNcIiBbbGFiZWxdPVwiZ3JvdXAubmFtZVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZ3JvdXAuZGlzYWJsZWRcIj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwb2tlbW9uIG9mIGdyb3VwLnBva2Vtb25cIiBbdmFsdWVdPVwicG9rZW1vbi52YWx1ZVwiPlxuICAgICAgICB7e3Bva2Vtb24udmlld1ZhbHVlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1vcHRncm91cD5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+Q2FyczwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2w+XG4gICAgPG9wdGdyb3VwIGxhYmVsPVwiU3dlZGlzaCBDYXJzXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj52b2x2bzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPC9vcHRncm91cD5cbiAgICA8b3B0Z3JvdXAgbGFiZWw9XCJHZXJtYW4gQ2Fyc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICAgIDwvb3B0Z3JvdXA+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==