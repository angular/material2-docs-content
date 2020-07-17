import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/core";
function AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", name_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", name_r4, " ");
} }
function AutocompleteOptgroupExample_mat_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 4);
    i0.ɵɵtemplate(1, AutocompleteOptgroupExample_mat_optgroup_5_mat_option_1_Template, 2, 2, "mat-option", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r2.letter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r2.names);
} }
export const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
/**
 * @title Option groups autocomplete
 */
export class AutocompleteOptgroupExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.stateForm = this._formBuilder.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
    }
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(startWith(''), map(value => this._filterGroup(value)));
    }
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
}
AutocompleteOptgroupExample.ɵfac = function AutocompleteOptgroupExample_Factory(t) { return new (t || AutocompleteOptgroupExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
AutocompleteOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteOptgroupExample, selectors: [["autocomplete-optgroup-example"]], decls: 7, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "States Group", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteOptgroupExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelement(2, "input", 1);
        i0.ɵɵelementStart(3, "mat-autocomplete", null, 2);
        i0.ɵɵtemplate(5, AutocompleteOptgroupExample_mat_optgroup_5_Template, 2, 2, "mat-optgroup", 3);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.stateForm);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matAutocomplete", _r0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx.stateGroupOptions));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i4.MatAutocomplete, i5.NgForOf, i6.MatOptgroup, i6.MatOption], pipes: [i5.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-optgroup-example',
                templateUrl: './autocomplete-optgroup-example.html',
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ1FwQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRmdDLCtCQUFjO0lBQ3pELGVBQ0Y7SUFERSx3Q0FDRjs7O0lBSEYsdUNBQ0U7SUFBQSx5R0FDRTtJQUVOLGlCQUFlOzs7SUFKaUQsdUNBQXNCO0lBQ3RFLGVBQWdDO0lBQWhDLHdDQUFnQzs7QUREdEQsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBYSxFQUFFLEtBQWEsRUFBWSxFQUFFO0lBQ2hFLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV4QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNFLENBQUMsQ0FBQztBQUVGOztHQUVHO0FBTUgsTUFBTSxPQUFPLDJCQUEyQjtJQW9FdEMsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFuRTdDLGNBQVMsR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztRQUVILGdCQUFXLEdBQWlCLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQzthQUNwRCxFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDO2FBQ2pELEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQ3BCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO2FBQ25CLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO2FBQ25CLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ2xCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDO2FBQ2hELEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQzthQUM5QixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNyQixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFVBQVU7b0JBQ3RELFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQzthQUNyRCxFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFlBQVk7b0JBQ3pELFlBQVksRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO2FBQzlELEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7YUFDdEMsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDeEIsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDeEIsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7YUFDMUMsRUFBRTtnQkFDRCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO2FBQzlCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO2FBQ2hCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQzthQUMvQixFQUFFO2dCQUNELE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQzthQUMvRCxDQUFDLENBQUM7SUFJNkMsQ0FBQztJQUVqRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxDQUFDLFlBQVk7YUFDcEUsSUFBSSxDQUNILFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3ZDLENBQUM7SUFDTixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXO2lCQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDMUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7c0dBdEZVLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FDeEJ4QywrQkFDRTtRQUFBLHNDQUNFO1FBQUEsMkJBTUo7UUFDTSxpREFDRTtRQUFBLDhGQUNFOztRQUlOLGlCQUFtQjtRQUVyQixpQkFBaUI7UUFDbkIsaUJBQU87OztRQWxCRCx5Q0FBdUI7UUFPbEIsZUFBNkI7UUFBN0IscUNBQTZCO1FBR2xCLGVBQStDO1FBQS9DLHFFQUErQzs7a0REY3hELDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLHNDQUFzQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlR3JvdXAge1xuICBsZXR0ZXI6IHN0cmluZztcbiAgbmFtZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgX2ZpbHRlciA9IChvcHQ6IHN0cmluZ1tdLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIG9wdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xufTtcblxuLyoqXG4gKiBAdGl0bGUgT3B0aW9uIGdyb3VwcyBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwLWV4YW1wbGUuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGVGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc3RhdGVHcm91cDogJycsXG4gIH0pO1xuXG4gIHN0YXRlR3JvdXBzOiBTdGF0ZUdyb3VwW10gPSBbe1xuICAgIGxldHRlcjogJ0EnLFxuICAgIG5hbWVzOiBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnQycsXG4gICAgbmFtZXM6IFsnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsICdDb25uZWN0aWN1dCddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdEJyxcbiAgICBuYW1lczogWydEZWxhd2FyZSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdGJyxcbiAgICBuYW1lczogWydGbG9yaWRhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0cnLFxuICAgIG5hbWVzOiBbJ0dlb3JnaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnSCcsXG4gICAgbmFtZXM6IFsnSGF3YWlpJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ0knLFxuICAgIG5hbWVzOiBbJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdLJyxcbiAgICBuYW1lczogWydLYW5zYXMnLCAnS2VudHVja3knXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnTCcsXG4gICAgbmFtZXM6IFsnTG91aXNpYW5hJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ00nLFxuICAgIG5hbWVzOiBbJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLFxuICAgICAgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ04nLFxuICAgIG5hbWVzOiBbJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLFxuICAgICAgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnTm9ydGggRGFrb3RhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ08nLFxuICAgIG5hbWVzOiBbJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1AnLFxuICAgIG5hbWVzOiBbJ1Blbm5zeWx2YW5pYSddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdSJyxcbiAgICBuYW1lczogWydSaG9kZSBJc2xhbmQnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnUycsXG4gICAgbmFtZXM6IFsnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1QnLFxuICAgIG5hbWVzOiBbJ1Rlbm5lc3NlZScsICdUZXhhcyddXG4gIH0sIHtcbiAgICBsZXR0ZXI6ICdVJyxcbiAgICBuYW1lczogWydVdGFoJ11cbiAgfSwge1xuICAgIGxldHRlcjogJ1YnLFxuICAgIG5hbWVzOiBbJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnXVxuICB9LCB7XG4gICAgbGV0dGVyOiAnVycsXG4gICAgbmFtZXM6IFsnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ11cbiAgfV07XG5cbiAgc3RhdGVHcm91cE9wdGlvbnM6IE9ic2VydmFibGU8U3RhdGVHcm91cFtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMuc3RhdGVGb3JtLmdldCgnc3RhdGVHcm91cCcpIS52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckdyb3VwKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZUdyb3VwW10ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHNcbiAgICAgICAgLm1hcChncm91cCA9PiAoe2xldHRlcjogZ3JvdXAubGV0dGVyLCBuYW1lczogX2ZpbHRlcihncm91cC5uYW1lcywgdmFsdWUpfSkpXG4gICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAubmFtZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVHcm91cHM7XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwic3RhdGVGb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlcyBHcm91cFwiXG4gICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXRlR3JvdXBcIlxuICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9Hcm91cFwiPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC1hdXRvY29tcGxldGUgLS0+XG4gICAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0b0dyb3VwPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICAgIDxtYXQtb3B0Z3JvdXAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHN0YXRlR3JvdXBPcHRpb25zIHwgYXN5bmNcIiBbbGFiZWxdPVwiZ3JvdXAubGV0dGVyXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG5hbWUgb2YgZ3JvdXAubmFtZXNcIiBbdmFsdWVdPVwibmFtZVwiPlxuICAgICAgICAgICAge3tuYW1lfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1vcHRncm91cD5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWF1dG9jb21wbGV0ZSAtLT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==