import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/slide-toggle";
import * as i7 from "@angular/material/core";
function AutocompleteOverviewExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵelement(1, "img", 7);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " | ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r2.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", state_r2.flag, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(state_r2.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Population: ", state_r2.population, "");
} }
/**
 * @title Autocomplete overview
 */
export class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(startWith(''), map(state => state ? this._filterStates(state) : this.states.slice()));
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }
}
AutocompleteOverviewExample.ɵfac = function AutocompleteOverviewExample_Factory(t) { return new (t || AutocompleteOverviewExample)(); };
AutocompleteOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AutocompleteOverviewExample, selectors: [["autocomplete-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "aria-label", "State", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [3, "value"], ["aria-hidden", "", "height", "25", 1, "example-option-img", 3, "src"]], template: function AutocompleteOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementStart(5, "mat-autocomplete", null, 3);
        i0.ɵɵtemplate(7, AutocompleteOverviewExample_mat_option_7_Template, 7, 4, "mat-option", 4);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "br");
        i0.ɵɵelementStart(10, "mat-slide-toggle", 5);
        i0.ɵɵlistener("change", function AutocompleteOverviewExample_Template_mat_slide_toggle_change_10_listener() { return ctx.stateCtrl.disabled ? ctx.stateCtrl.enable() : ctx.stateCtrl.disable(); });
        i0.ɵɵtext(11, " Disable Input? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matAutocomplete", _r0)("formControl", ctx.stateCtrl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 4, ctx.filteredStates));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("checked", ctx.stateCtrl.disabled);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.MatAutocompleteTrigger, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i4.MatAutocomplete, i5.NgForOf, i6.MatSlideToggle, i7.MatOption], pipes: [i5.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-option-img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutocompleteOverviewExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-overview-example',
                templateUrl: 'autocomplete-overview-example.html',
                styleUrls: ['autocomplete-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUNLeEMscUNBQThFO0lBQzVFLHlCQUEyRTtJQUMzRSw0QkFBTTtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUFDLG1CQUM1QjtJQUFBLDZCQUFPO0lBQUEsWUFBZ0M7SUFBQSxpQkFBUTtJQUNqRCxpQkFBYTs7O0lBSjRDLHFDQUFvQjtJQUMvQixlQUFrQjtJQUFsQixxREFBa0I7SUFDeEQsZUFBYztJQUFkLG1DQUFjO0lBQ2IsZUFBZ0M7SUFBaEMsOERBQWdDOztBREEvQzs7R0FFRztBQU1ILE1BQU0sT0FBTywyQkFBMkI7SUErQnRDO1FBOUJBLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRzlCLFdBQU0sR0FBWTtZQUNoQjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLCtEQUErRDtnQkFDL0QsSUFBSSxFQUFFLDBFQUEwRTthQUNqRjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsaUVBQWlFO2dCQUNqRSxJQUFJLEVBQUUsNEVBQTRFO2FBQ25GO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLDhEQUE4RDtnQkFDOUQsSUFBSSxFQUFFLHlFQUF5RTthQUNoRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiw0REFBNEQ7Z0JBQzVELElBQUksRUFBRSx1RUFBdUU7YUFDOUU7U0FDRixDQUFDO1FBR0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7YUFDOUMsSUFBSSxDQUNILFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FDdEUsQ0FBQztJQUNOLENBQUM7SUFFTyxhQUFhLENBQUMsS0FBYTtRQUNqQyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7c0dBM0NVLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDbkJ4QywrQkFBMkI7UUFDekIseUNBQTZEO1FBQzNELGlDQUFXO1FBQUEscUJBQUs7UUFBQSxpQkFBWTtRQUM1QiwyQkFHaUM7UUFDakMsaURBQTBDO1FBQ3hDLDBGQUlhOztRQUNmLGlCQUFtQjtRQUNyQixpQkFBaUI7UUFFakIscUJBQUk7UUFFSiw0Q0FFMkU7UUFBekUsOElBQStCLHNCQUFrQixHQUFHLHVCQUFtQixJQUFDO1FBQ3hFLGlDQUNGO1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFPOzs7UUFsQkksZUFBd0I7UUFBeEIscUNBQXdCLDhCQUFBO1FBR0MsZUFBeUI7UUFBekIsa0VBQXlCO1FBV3pELGVBQThCO1FBQTlCLGdEQUE4Qjs7dUZEQXJCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgZmxhZzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvcHVsYXRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQXV0b2NvbXBsZXRlIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUge1xuICBzdGF0ZUN0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZmlsdGVyZWRTdGF0ZXM6IE9ic2VydmFibGU8U3RhdGVbXT47XG5cbiAgc3RhdGVzOiBTdGF0ZVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBcmthbnNhcycsXG4gICAgICBwb3B1bGF0aW9uOiAnMi45NzhNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0Fya2Fuc2FzLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85ZC9GbGFnX29mX0Fya2Fuc2FzLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYWxpZm9ybmlhJyxcbiAgICAgIHBvcHVsYXRpb246ICczOS4xNE0nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfQ2FsaWZvcm5pYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzAvMDEvRmxhZ19vZl9DYWxpZm9ybmlhLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGbG9yaWRhJyxcbiAgICAgIHBvcHVsYXRpb246ICcyMC4yN00nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfRmxvcmlkYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZjcvRmxhZ19vZl9GbG9yaWRhLnN2ZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdUZXhhcycsXG4gICAgICBwb3B1bGF0aW9uOiAnMjcuNDdNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX1RleGFzLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZi9mNy9GbGFnX29mX1RleGFzLnN2ZydcbiAgICB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZFN0YXRlcyA9IHRoaXMuc3RhdGVDdHJsLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZSA/IHRoaXMuX2ZpbHRlclN0YXRlcyhzdGF0ZSkgOiB0aGlzLnN0YXRlcy5zbGljZSgpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlclN0YXRlcyh2YWx1ZTogc3RyaW5nKTogU3RhdGVbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmZpbHRlcihzdGF0ZSA9PiBzdGF0ZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPlN0YXRlPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0XG4gICAgICAgICAgIGFyaWEtbGFiZWw9XCJTdGF0ZVwiXG4gICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzdGF0ZUN0cmxcIj5cbiAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHN0YXRlIG9mIGZpbHRlcmVkU3RhdGVzIHwgYXN5bmNcIiBbdmFsdWVdPVwic3RhdGUubmFtZVwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZXhhbXBsZS1vcHRpb24taW1nXCIgYXJpYS1oaWRkZW4gW3NyY109XCJzdGF0ZS5mbGFnXCIgaGVpZ2h0PVwiMjVcIj5cbiAgICAgICAgPHNwYW4+e3tzdGF0ZS5uYW1lfX08L3NwYW4+IHxcbiAgICAgICAgPHNtYWxsPlBvcHVsYXRpb246IHt7c3RhdGUucG9wdWxhdGlvbn19PC9zbWFsbD5cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGJyPlxuXG4gIDxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgW2NoZWNrZWRdPVwic3RhdGVDdHJsLmRpc2FibGVkXCJcbiAgICAoY2hhbmdlKT1cInN0YXRlQ3RybC5kaXNhYmxlZCA/IHN0YXRlQ3RybC5lbmFibGUoKSA6IHN0YXRlQ3RybC5kaXNhYmxlKClcIj5cbiAgICBEaXNhYmxlIElucHV0P1xuICA8L21hdC1zbGlkZS10b2dnbGU+XG48L2Zvcm0+XG4iXX0=