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
class SelectOptgroupExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SelectOptgroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SelectOptgroupExample, isStandalone: true, selector: "select-optgroup-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i3.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
export { SelectOptgroupExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SelectOptgroupExample, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQWFoRSx1Q0FBdUM7QUFDdkMsTUFhYSxxQkFBcUI7SUFibEM7UUFjRSxtQkFBYyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLGtCQUFhLEdBQW1CO1lBQzlCO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQztvQkFDOUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7b0JBQ3hDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO2lCQUNqRDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO29CQUM1QyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQztvQkFDMUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7aUJBQ3pDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7b0JBQ2hELEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO29CQUN4QyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQztpQkFDM0M7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQztvQkFDbEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7aUJBQzFDO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7OEdBcENZLHFCQUFxQjtrR0FBckIscUJBQXFCLG1GQ2hDbEMsZzZCQTRCQSwyQ0RKSSxrQkFBa0IsMFNBQ2xCLGVBQWUsK2FBQ2YsV0FBVyxtVkFDWCxtQkFBbUIsa05BQ25CLEtBQUssa0hBQ0wsY0FBYzs7U0FHTCxxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFiakMsU0FBUzsrQkFDRSx5QkFBeUIsY0FFdkIsSUFBSSxXQUNQO3dCQUNQLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsS0FBSzt3QkFDTCxjQUFjO3FCQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIFBva2Vtb24ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFBva2Vtb25Hcm91cCB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBwb2tlbW9uOiBQb2tlbW9uW107XG59XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggb3B0aW9uIGdyb3VwcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1vcHRncm91cC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nRm9yLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RPcHRncm91cEV4YW1wbGUge1xuICBwb2tlbW9uQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIHBva2Vtb25Hcm91cHM6IFBva2Vtb25Hcm91cFtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdHcmFzcycsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ2J1bGJhc2F1ci0wJywgdmlld1ZhbHVlOiAnQnVsYmFzYXVyJ30sXG4gICAgICAgIHt2YWx1ZTogJ29kZGlzaC0xJywgdmlld1ZhbHVlOiAnT2RkaXNoJ30sXG4gICAgICAgIHt2YWx1ZTogJ2JlbGxzcHJvdXQtMicsIHZpZXdWYWx1ZTogJ0JlbGxzcHJvdXQnfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV2F0ZXInLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdzcXVpcnRsZS0zJywgdmlld1ZhbHVlOiAnU3F1aXJ0bGUnfSxcbiAgICAgICAge3ZhbHVlOiAncHN5ZHVjay00Jywgdmlld1ZhbHVlOiAnUHN5ZHVjayd9LFxuICAgICAgICB7dmFsdWU6ICdob3JzZWEtNScsIHZpZXdWYWx1ZTogJ0hvcnNlYSd9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGaXJlJyxcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdjaGFybWFuZGVyLTYnLCB2aWV3VmFsdWU6ICdDaGFybWFuZGVyJ30sXG4gICAgICAgIHt2YWx1ZTogJ3Z1bHBpeC03Jywgdmlld1ZhbHVlOiAnVnVscGl4J30sXG4gICAgICAgIHt2YWx1ZTogJ2ZsYXJlb24tOCcsIHZpZXdWYWx1ZTogJ0ZsYXJlb24nfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUHN5Y2hpYycsXG4gICAgICBwb2tlbW9uOiBbXG4gICAgICAgIHt2YWx1ZTogJ21ldy05Jywgdmlld1ZhbHVlOiAnTWV3J30sXG4gICAgICAgIHt2YWx1ZTogJ21ld3R3by0xMCcsIHZpZXdWYWx1ZTogJ01ld3R3byd9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlBva2Vtb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInBva2Vtb25Db250cm9sXCI+XG4gICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGdyb3VwICpuZ0Zvcj1cImxldCBncm91cCBvZiBwb2tlbW9uR3JvdXBzXCIgW2xhYmVsXT1cImdyb3VwLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdyb3VwLmRpc2FibGVkXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcG9rZW1vbiBvZiBncm91cC5wb2tlbW9uXCIgW3ZhbHVlXT1cInBva2Vtb24udmFsdWVcIj5cbiAgICAgICAge3twb2tlbW9uLnZpZXdWYWx1ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtb3B0Z3JvdXA+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkNhcnM8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sPlxuICAgIDxvcHRncm91cCBsYWJlbD1cIlN3ZWRpc2ggQ2Fyc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+dm9sdm88L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDwvb3B0Z3JvdXA+XG4gICAgPG9wdGdyb3VwIGxhYmVsPVwiR2VybWFuIENhcnNcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgICA8L29wdGdyb3VwPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=