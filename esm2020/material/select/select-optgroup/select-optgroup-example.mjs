import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
/** @title Select with option groups */
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
SelectOptgroupExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: SelectOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectOptgroupExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: SelectOptgroupExample, selector: "select-optgroup-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i3.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: SelectOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-optgroup-example', template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQWEzQyx1Q0FBdUM7QUFLdkMsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFtQjtZQUM5QjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7b0JBQzlDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO29CQUN4QyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztpQkFDakQ7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztvQkFDNUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7b0JBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUN6QzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO29CQUNoRCxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztvQkFDeEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7aUJBQzNDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7b0JBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztLQUNIOzswSEFwQ1kscUJBQXFCOzhHQUFyQixxQkFBcUIsK0RDbkJsQyx3OEJBNEJBO21HRFRhLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmludGVyZmFjZSBQb2tlbW9uIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQb2tlbW9uR3JvdXAge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgcG9rZW1vbjogUG9rZW1vbltdO1xufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIG9wdGlvbiBncm91cHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlIHtcbiAgcG9rZW1vbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcG9rZW1vbkdyb3VwczogUG9rZW1vbkdyb3VwW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0dyYXNzJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnYnVsYmFzYXVyLTAnLCB2aWV3VmFsdWU6ICdCdWxiYXNhdXInfSxcbiAgICAgICAge3ZhbHVlOiAnb2RkaXNoLTEnLCB2aWV3VmFsdWU6ICdPZGRpc2gnfSxcbiAgICAgICAge3ZhbHVlOiAnYmVsbHNwcm91dC0yJywgdmlld1ZhbHVlOiAnQmVsbHNwcm91dCd9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV2F0ZXInLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdzcXVpcnRsZS0zJywgdmlld1ZhbHVlOiAnU3F1aXJ0bGUnfSxcbiAgICAgICAge3ZhbHVlOiAncHN5ZHVjay00Jywgdmlld1ZhbHVlOiAnUHN5ZHVjayd9LFxuICAgICAgICB7dmFsdWU6ICdob3JzZWEtNScsIHZpZXdWYWx1ZTogJ0hvcnNlYSd9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRmlyZScsXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnY2hhcm1hbmRlci02Jywgdmlld1ZhbHVlOiAnQ2hhcm1hbmRlcid9LFxuICAgICAgICB7dmFsdWU6ICd2dWxwaXgtNycsIHZpZXdWYWx1ZTogJ1Z1bHBpeCd9LFxuICAgICAgICB7dmFsdWU6ICdmbGFyZW9uLTgnLCB2aWV3VmFsdWU6ICdGbGFyZW9uJ31cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQc3ljaGljJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnbWV3LTknLCB2aWV3VmFsdWU6ICdNZXcnfSxcbiAgICAgICAge3ZhbHVlOiAnbWV3dHdvLTEwJywgdmlld1ZhbHVlOiAnTWV3dHdvJ30sXG4gICAgICBdXG4gICAgfVxuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+UG9rZW1vbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwicG9rZW1vbkNvbnRyb2xcIj5cbiAgICA8bWF0LW9wdGlvbj4tLSBOb25lIC0tPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0Z3JvdXAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHBva2Vtb25Hcm91cHNcIiBbbGFiZWxdPVwiZ3JvdXAubmFtZVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZ3JvdXAuZGlzYWJsZWRcIj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBwb2tlbW9uIG9mIGdyb3VwLnBva2Vtb25cIiBbdmFsdWVdPVwicG9rZW1vbi52YWx1ZVwiPlxuICAgICAgICB7e3Bva2Vtb24udmlld1ZhbHVlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1vcHRncm91cD5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5DYXJzPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbD5cbiAgICA8b3B0Z3JvdXAgbGFiZWw9XCJTd2VkaXNoIENhcnNcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPnZvbHZvPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICA8L29wdGdyb3VwPlxuICAgIDxvcHRncm91cCBsYWJlbD1cIkdlcm1hbiBDYXJzXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gICAgPC9vcHRncm91cD5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19