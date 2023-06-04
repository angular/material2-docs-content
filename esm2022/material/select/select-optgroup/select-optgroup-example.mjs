import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/input";
/** @title Select with option groups */
export class SelectOptgroupExample {
    constructor() {
        this.pokemonControl = new FormControl('');
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SelectOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: SelectOptgroupExample, isStandalone: true, selector: "select-optgroup-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i3.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: SelectOptgroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-optgroup-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatSelectModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgFor,
                        MatInputModule,
                    ], template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQWFoRSx1Q0FBdUM7QUFjdkMsTUFBTSxPQUFPLHFCQUFxQjtJQWJsQztRQWNFLG1CQUFjLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsa0JBQWEsR0FBbUI7WUFDOUI7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO29CQUM5QyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztvQkFDeEMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7aUJBQ2pEO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUM7b0JBQzVDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDO29CQUMxQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztpQkFDekM7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztvQkFDaEQsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7b0JBQ3hDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDO2lCQUMzQzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO29CQUNsQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztpQkFDMUM7YUFDRjtTQUNGLENBQUM7S0FDSDtxSEFwQ1kscUJBQXFCO3lHQUFyQixxQkFBcUIsbUZDaENsQyxnNkJBNEJBLDJDREpJLGtCQUFrQiwwU0FDbEIsZUFBZSwrYUFDZixXQUFXLG1WQUNYLG1CQUFtQixrTkFDbkIsS0FBSyxrSEFDTCxjQUFjOztrR0FHTCxxQkFBcUI7a0JBYmpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUDt3QkFDUCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLEtBQUs7d0JBQ0wsY0FBYztxQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge05nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBQb2tlbW9uIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQb2tlbW9uR3JvdXAge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgcG9rZW1vbjogUG9rZW1vbltdO1xufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIG9wdGlvbiBncm91cHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZ0ZvcixcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlIHtcbiAgcG9rZW1vbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBwb2tlbW9uR3JvdXBzOiBQb2tlbW9uR3JvdXBbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnR3Jhc3MnLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdidWxiYXNhdXItMCcsIHZpZXdWYWx1ZTogJ0J1bGJhc2F1cid9LFxuICAgICAgICB7dmFsdWU6ICdvZGRpc2gtMScsIHZpZXdWYWx1ZTogJ09kZGlzaCd9LFxuICAgICAgICB7dmFsdWU6ICdiZWxsc3Byb3V0LTInLCB2aWV3VmFsdWU6ICdCZWxsc3Byb3V0J30sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dhdGVyJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnc3F1aXJ0bGUtMycsIHZpZXdWYWx1ZTogJ1NxdWlydGxlJ30sXG4gICAgICAgIHt2YWx1ZTogJ3BzeWR1Y2stNCcsIHZpZXdWYWx1ZTogJ1BzeWR1Y2snfSxcbiAgICAgICAge3ZhbHVlOiAnaG9yc2VhLTUnLCB2aWV3VmFsdWU6ICdIb3JzZWEnfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRmlyZScsXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnY2hhcm1hbmRlci02Jywgdmlld1ZhbHVlOiAnQ2hhcm1hbmRlcid9LFxuICAgICAgICB7dmFsdWU6ICd2dWxwaXgtNycsIHZpZXdWYWx1ZTogJ1Z1bHBpeCd9LFxuICAgICAgICB7dmFsdWU6ICdmbGFyZW9uLTgnLCB2aWV3VmFsdWU6ICdGbGFyZW9uJ30sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BzeWNoaWMnLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdtZXctOScsIHZpZXdWYWx1ZTogJ01ldyd9LFxuICAgICAgICB7dmFsdWU6ICdtZXd0d28tMTAnLCB2aWV3VmFsdWU6ICdNZXd0d28nfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbn1cbiIsIjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5Qb2tlbW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJwb2tlbW9uQ29udHJvbFwiPlxuICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRncm91cCAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcG9rZW1vbkdyb3Vwc1wiIFtsYWJlbF09XCJncm91cC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJncm91cC5kaXNhYmxlZFwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHBva2Vtb24gb2YgZ3JvdXAucG9rZW1vblwiIFt2YWx1ZV09XCJwb2tlbW9uLnZhbHVlXCI+XG4gICAgICAgIHt7cG9rZW1vbi52aWV3VmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LW9wdGdyb3VwPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DYXJzPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbD5cbiAgICA8b3B0Z3JvdXAgbGFiZWw9XCJTd2VkaXNoIENhcnNcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPnZvbHZvPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwic2FhYlwiPlNhYWI8L29wdGlvbj5cbiAgICA8L29wdGdyb3VwPlxuICAgIDxvcHRncm91cCBsYWJlbD1cIkdlcm1hbiBDYXJzXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWVyY2VkZXNcIj5NZXJjZWRlczwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gICAgPC9vcHRncm91cD5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19