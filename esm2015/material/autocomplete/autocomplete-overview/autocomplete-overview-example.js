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
        args: [{ selector: 'autocomplete-overview-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>State</mat-label>\n    <input matInput\n           aria-label=\"State\"\n           [matAutocomplete]=\"auto\"\n           [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUNLeEMscUNBQThFO0lBQzVFLHlCQUEyRTtJQUMzRSw0QkFBTTtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUFDLG1CQUM1QjtJQUFBLDZCQUFPO0lBQUEsWUFBZ0M7SUFBQSxpQkFBUTtJQUNqRCxpQkFBYTs7O0lBSjRDLHFDQUFvQjtJQUMvQixlQUFrQjtJQUFsQixxREFBa0I7SUFDeEQsZUFBYztJQUFkLG1DQUFjO0lBQ2IsZUFBZ0M7SUFBaEMsOERBQWdDOztBREEvQzs7R0FFRztBQU1ILE1BQU0sT0FBTywyQkFBMkI7SUErQnRDO1FBOUJBLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRzlCLFdBQU0sR0FBWTtZQUNoQjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLCtEQUErRDtnQkFDL0QsSUFBSSxFQUFFLDBFQUEwRTthQUNqRjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsaUVBQWlFO2dCQUNqRSxJQUFJLEVBQUUsNEVBQTRFO2FBQ25GO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLDhEQUE4RDtnQkFDOUQsSUFBSSxFQUFFLHlFQUF5RTthQUNoRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiw0REFBNEQ7Z0JBQzVELElBQUksRUFBRSx1RUFBdUU7YUFDOUU7U0FDRixDQUFDO1FBR0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7YUFDOUMsSUFBSSxDQUNILFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FDdEUsQ0FBQztJQUNOLENBQUM7SUFFTyxhQUFhLENBQUMsS0FBYTtRQUNqQyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7c0dBM0NVLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDbkJ4QywrQkFBMkI7UUFDekIseUNBQTZEO1FBQzNELGlDQUFXO1FBQUEscUJBQUs7UUFBQSxpQkFBWTtRQUM1QiwyQkFHaUM7UUFDakMsaURBQTBDO1FBQ3hDLDBGQUlhOztRQUNmLGlCQUFtQjtRQUNyQixpQkFBaUI7UUFFakIscUJBQUk7UUFFSiw0Q0FFMkU7UUFBekUsOElBQStCLHNCQUFrQixHQUFHLHVCQUFtQixJQUFDO1FBQ3hFLGlDQUNGO1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFPOzs7UUFsQkksZUFBd0I7UUFBeEIscUNBQXdCLDhCQUFBO1FBR0MsZUFBeUI7UUFBekIsa0VBQXlCO1FBV3pELGVBQThCO1FBQTlCLGdEQUE4Qjs7dUZEQXJCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBmbGFnOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9wdWxhdGlvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBBdXRvY29tcGxldGUgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZSB7XG4gIHN0YXRlQ3RybCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBmaWx0ZXJlZFN0YXRlczogT2JzZXJ2YWJsZTxTdGF0ZVtdPjtcblxuICBzdGF0ZXM6IFN0YXRlW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0Fya2Fuc2FzJyxcbiAgICAgIHBvcHVsYXRpb246ICcyLjk3OE0nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfQXJrYW5zYXMuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy85LzlkL0ZsYWdfb2ZfQXJrYW5zYXMuc3ZnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NhbGlmb3JuaWEnLFxuICAgICAgcG9wdWxhdGlvbjogJzM5LjE0TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9DYWxpZm9ybmlhLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMC8wMS9GbGFnX29mX0NhbGlmb3JuaWEuc3ZnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Zsb3JpZGEnLFxuICAgICAgcG9wdWxhdGlvbjogJzIwLjI3TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9GbG9yaWRhLnN2Z1xuICAgICAgZmxhZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZi9mNy9GbGFnX29mX0Zsb3JpZGEuc3ZnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1RleGFzJyxcbiAgICAgIHBvcHVsYXRpb246ICcyNy40N00nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfVGV4YXMuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9mL2Y3L0ZsYWdfb2ZfVGV4YXMuc3ZnJ1xuICAgIH1cbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlcmVkU3RhdGVzID0gdGhpcy5zdGF0ZUN0cmwudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgbWFwKHN0YXRlID0+IHN0YXRlID8gdGhpcy5fZmlsdGVyU3RhdGVzKHN0YXRlKSA6IHRoaXMuc3RhdGVzLnNsaWNlKCkpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyU3RhdGVzKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZVtdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZXMuZmlsdGVyKHN0YXRlID0+IHN0YXRlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cInN0YXRlQ3RybFwiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2YgZmlsdGVyZWRTdGF0ZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJzdGF0ZS5uYW1lXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJleGFtcGxlLW9wdGlvbi1pbWdcIiBhcmlhLWhpZGRlbiBbc3JjXT1cInN0YXRlLmZsYWdcIiBoZWlnaHQ9XCIyNVwiPlxuICAgICAgICA8c3Bhbj57e3N0YXRlLm5hbWV9fTwvc3Bhbj4gfFxuICAgICAgICA8c21hbGw+UG9wdWxhdGlvbjoge3tzdGF0ZS5wb3B1bGF0aW9ufX08L3NtYWxsPlxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8YnI+XG5cbiAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICBbY2hlY2tlZF09XCJzdGF0ZUN0cmwuZGlzYWJsZWRcIlxuICAgIChjaGFuZ2UpPVwic3RhdGVDdHJsLmRpc2FibGVkID8gc3RhdGVDdHJsLmVuYWJsZSgpIDogc3RhdGVDdHJsLmRpc2FibGUoKVwiPlxuICAgIERpc2FibGUgSW5wdXQ/XG4gIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbjwvZm9ybT5cbiJdfQ==