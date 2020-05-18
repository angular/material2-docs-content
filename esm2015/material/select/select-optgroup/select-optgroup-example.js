/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-optgroup/select-optgroup-example.ts
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
    const pokemon_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", pokemon_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", pokemon_r3.viewValue, " ");
} }
function SelectOptgroupExample_mat_optgroup_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 9);
    i0.ɵɵtemplate(1, SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r1.name)("disabled", group_r1.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r1.pokemon);
} }
/**
 * @record
 */
function Pokemon() { }
if (false) {
    /** @type {?} */
    Pokemon.prototype.value;
    /** @type {?} */
    Pokemon.prototype.viewValue;
}
/**
 * @record
 */
function PokemonGroup() { }
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
let SelectOptgroupExample = /** @class */ (() => {
    /**
     * \@title Select with option groups
     */
    class SelectOptgroupExample {
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
    return SelectOptgroupExample;
})();
export { SelectOptgroupExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
                styleUrls: ['select-optgroup-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectOptgroupExample.prototype.pokemonControl;
    /** @type {?} */
    SelectOptgroupExample.prototype.pokemonGroups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ01yQyxzQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRnFDLHdDQUF1QjtJQUN2RSxlQUNGO0lBREUscURBQ0Y7OztJQUpGLHVDQUVFO0lBQUEsb0dBQ0U7SUFFSixpQkFBZTs7O0lBTG1DLHFDQUFvQiwrQkFBQTtJQUV4RCxlQUFxQztJQUFyQywwQ0FBcUM7Ozs7O0FESnZELHNCQUdDOzs7SUFGQyx3QkFBYzs7SUFDZCw0QkFBa0I7Ozs7O0FBR3BCLDJCQUlDOzs7SUFIQyxnQ0FBbUI7O0lBQ25CLDRCQUFhOztJQUNiLCtCQUFtQjs7Ozs7QUFJckI7Ozs7SUFBQSxNQUthLHFCQUFxQjtRQUxsQztZQU1FLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNuQyxrQkFBYSxHQUFtQjtnQkFDOUI7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFO3dCQUNQLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO3dCQUM5QyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQzt3QkFDeEMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7cUJBQ2pEO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRTt3QkFDUCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQzt3QkFDNUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7d0JBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO3FCQUN6QztpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPLEVBQUU7d0JBQ1AsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7d0JBQ2hELEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO3dCQUN4QyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQztxQkFDM0M7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFO3dCQUNQLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO3dCQUNsQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztxQkFDMUM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7OztnQkF6Q0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzs7aUhBQ1kscUJBQXFCO2lGQUFyQixxQkFBcUI7WUNwQmxDLDBCQUFJO1lBQUEsMEJBQVU7WUFBQSxpQkFBSztZQUNuQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsdUJBQU87WUFBQSxpQkFBWTtZQUM5QixxQ0FDRTtZQUFBLGtDQUFZO1lBQUEsMEJBQVU7WUFBQSxpQkFBYTtZQUNuQyx3RkFFRTtZQUlKLGlCQUFhO1lBQ2YsaUJBQWlCO1lBRWpCLDBCQUFJO1lBQUEsbUNBQWtCO1lBQUEsaUJBQUs7WUFDM0IsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLHFCQUFJO1lBQUEsaUJBQVk7WUFDM0Isa0NBQ0U7WUFBQSxvQ0FDRTtZQUFBLGtDQUFzQjtZQUFBLHNCQUFLO1lBQUEsaUJBQVM7WUFDcEMsa0NBQXFCO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNwQyxpQkFBVztZQUNYLG9DQUNFO1lBQUEsa0NBQXlCO1lBQUEseUJBQVE7WUFBQSxpQkFBUztZQUMxQyxrQ0FBcUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ3BDLGlCQUFXO1lBQ2IsaUJBQVM7WUFDWCxpQkFBaUI7O1lBeEJILGVBQThCO1lBQTlCLGdEQUE4QjtZQUUxQixlQUFtQztZQUFuQywyQ0FBbUM7O2dDRExyRDtLQXdEQztTQXBDWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFFQywrQ0FBbUM7O0lBQ25DLDhDQWlDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIFBva2Vtb24ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFBva2Vtb25Hcm91cCB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBwb2tlbW9uOiBQb2tlbW9uW107XG59XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggb3B0aW9uIGdyb3VwcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE9wdGdyb3VwRXhhbXBsZSB7XG4gIHBva2Vtb25Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHBva2Vtb25Hcm91cHM6IFBva2Vtb25Hcm91cFtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdHcmFzcycsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ2J1bGJhc2F1ci0wJywgdmlld1ZhbHVlOiAnQnVsYmFzYXVyJ30sXG4gICAgICAgIHt2YWx1ZTogJ29kZGlzaC0xJywgdmlld1ZhbHVlOiAnT2RkaXNoJ30sXG4gICAgICAgIHt2YWx1ZTogJ2JlbGxzcHJvdXQtMicsIHZpZXdWYWx1ZTogJ0JlbGxzcHJvdXQnfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dhdGVyJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnc3F1aXJ0bGUtMycsIHZpZXdWYWx1ZTogJ1NxdWlydGxlJ30sXG4gICAgICAgIHt2YWx1ZTogJ3BzeWR1Y2stNCcsIHZpZXdWYWx1ZTogJ1BzeWR1Y2snfSxcbiAgICAgICAge3ZhbHVlOiAnaG9yc2VhLTUnLCB2aWV3VmFsdWU6ICdIb3JzZWEnfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZpcmUnLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ2NoYXJtYW5kZXItNicsIHZpZXdWYWx1ZTogJ0NoYXJtYW5kZXInfSxcbiAgICAgICAge3ZhbHVlOiAndnVscGl4LTcnLCB2aWV3VmFsdWU6ICdWdWxwaXgnfSxcbiAgICAgICAge3ZhbHVlOiAnZmxhcmVvbi04Jywgdmlld1ZhbHVlOiAnRmxhcmVvbid9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUHN5Y2hpYycsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ21ldy05Jywgdmlld1ZhbHVlOiAnTWV3J30sXG4gICAgICAgIHt2YWx1ZTogJ21ld3R3by0xMCcsIHZpZXdWYWx1ZTogJ01ld3R3byd9LFxuICAgICAgXVxuICAgIH1cbiAgXTtcbn1cbiIsIjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5Qb2tlbW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJwb2tlbW9uQ29udHJvbFwiPlxuICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRncm91cCAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcG9rZW1vbkdyb3Vwc1wiIFtsYWJlbF09XCJncm91cC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJncm91cC5kaXNhYmxlZFwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHBva2Vtb24gb2YgZ3JvdXAucG9rZW1vblwiIFt2YWx1ZV09XCJwb2tlbW9uLnZhbHVlXCI+XG4gICAgICAgIHt7cG9rZW1vbi52aWV3VmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LW9wdGdyb3VwPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DYXJzPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbD5cbiAgICA8b3B0Z3JvdXAgbGFiZWw9XCJTd2VkaXNoIENhcnNcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPnZvbHZvPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICA8L29wdGdyb3VwPlxuICAgIDxvcHRncm91cCBsYWJlbD1cIkdlcm1hbiBDYXJzXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gICAgPC9vcHRncm91cD5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19