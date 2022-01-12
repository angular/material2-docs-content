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
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' },
                ],
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' },
                ],
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' },
                ],
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ],
            },
        ];
    }
}
SelectOptgroupExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: SelectOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectOptgroupExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: SelectOptgroupExample, selector: "select-optgroup-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i3.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: SelectOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-optgroup-example', template: "<h4>mat-select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQWEzQyx1Q0FBdUM7QUFLdkMsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFtQjtZQUM5QjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7b0JBQzlDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO29CQUN4QyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztpQkFDakQ7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztvQkFDNUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7b0JBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUN6QzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO29CQUNoRCxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztvQkFDeEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7aUJBQzNDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7b0JBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztLQUNIOzt5SEFwQ1kscUJBQXFCOzZHQUFyQixxQkFBcUIsK0RDbkJsQyx3OEJBNEJBO2tHRFRhLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmludGVyZmFjZSBQb2tlbW9uIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQb2tlbW9uR3JvdXAge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgcG9rZW1vbjogUG9rZW1vbltdO1xufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIG9wdGlvbiBncm91cHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlIHtcbiAgcG9rZW1vbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcG9rZW1vbkdyb3VwczogUG9rZW1vbkdyb3VwW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0dyYXNzJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnYnVsYmFzYXVyLTAnLCB2aWV3VmFsdWU6ICdCdWxiYXNhdXInfSxcbiAgICAgICAge3ZhbHVlOiAnb2RkaXNoLTEnLCB2aWV3VmFsdWU6ICdPZGRpc2gnfSxcbiAgICAgICAge3ZhbHVlOiAnYmVsbHNwcm91dC0yJywgdmlld1ZhbHVlOiAnQmVsbHNwcm91dCd9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXYXRlcicsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ3NxdWlydGxlLTMnLCB2aWV3VmFsdWU6ICdTcXVpcnRsZSd9LFxuICAgICAgICB7dmFsdWU6ICdwc3lkdWNrLTQnLCB2aWV3VmFsdWU6ICdQc3lkdWNrJ30sXG4gICAgICAgIHt2YWx1ZTogJ2hvcnNlYS01Jywgdmlld1ZhbHVlOiAnSG9yc2VhJ30sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZpcmUnLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ2NoYXJtYW5kZXItNicsIHZpZXdWYWx1ZTogJ0NoYXJtYW5kZXInfSxcbiAgICAgICAge3ZhbHVlOiAndnVscGl4LTcnLCB2aWV3VmFsdWU6ICdWdWxwaXgnfSxcbiAgICAgICAge3ZhbHVlOiAnZmxhcmVvbi04Jywgdmlld1ZhbHVlOiAnRmxhcmVvbid9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQc3ljaGljJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnbWV3LTknLCB2aWV3VmFsdWU6ICdNZXcnfSxcbiAgICAgICAge3ZhbHVlOiAnbWV3dHdvLTEwJywgdmlld1ZhbHVlOiAnTWV3dHdvJ30sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG4iLCI8aDQ+bWF0LXNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5Qb2tlbW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJwb2tlbW9uQ29udHJvbFwiPlxuICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRncm91cCAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcG9rZW1vbkdyb3Vwc1wiIFtsYWJlbF09XCJncm91cC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJncm91cC5kaXNhYmxlZFwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHBva2Vtb24gb2YgZ3JvdXAucG9rZW1vblwiIFt2YWx1ZV09XCJwb2tlbW9uLnZhbHVlXCI+XG4gICAgICAgIHt7cG9rZW1vbi52aWV3VmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LW9wdGdyb3VwPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkNhcnM8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sPlxuICAgIDxvcHRncm91cCBsYWJlbD1cIlN3ZWRpc2ggQ2Fyc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+dm9sdm88L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDwvb3B0Z3JvdXA+XG4gICAgPG9wdGdyb3VwIGxhYmVsPVwiR2VybWFuIENhcnNcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgICA8L29wdGdyb3VwPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=