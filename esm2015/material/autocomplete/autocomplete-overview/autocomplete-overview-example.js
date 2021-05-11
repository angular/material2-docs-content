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
        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }
}
AutocompleteOverviewExample.ɵfac = function AutocompleteOverviewExample_Factory(t) { return new (t || AutocompleteOverviewExample)(); };
AutocompleteOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AutocompleteOverviewExample, selectors: [["autocomplete-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "aria-label", "State", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [3, "value"], ["aria-hidden", "", "height", "25", 1, "example-option-img", 3, "src"]], template: function AutocompleteOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUNLeEMscUNBQThFO0lBQzVFLHlCQUEyRTtJQUMzRSw0QkFBTTtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUFDLG1CQUM1QjtJQUFBLDZCQUFPO0lBQUEsWUFBZ0M7SUFBQSxpQkFBUTtJQUNqRCxpQkFBYTs7O0lBSjRDLHFDQUFvQjtJQUMvQixlQUFrQjtJQUFsQixxREFBa0I7SUFDeEQsZUFBYztJQUFkLG1DQUFjO0lBQ2IsZUFBZ0M7SUFBaEMsOERBQWdDOztBREEvQzs7R0FFRztBQU1ILE1BQU0sT0FBTywyQkFBMkI7SUErQnRDO1FBOUJBLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRzlCLFdBQU0sR0FBWTtZQUNoQjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLCtEQUErRDtnQkFDL0QsSUFBSSxFQUFFLDBFQUEwRTthQUNqRjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsaUVBQWlFO2dCQUNqRSxJQUFJLEVBQUUsNEVBQTRFO2FBQ25GO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLDhEQUE4RDtnQkFDOUQsSUFBSSxFQUFFLHlFQUF5RTthQUNoRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiw0REFBNEQ7Z0JBQzVELElBQUksRUFBRSx1RUFBdUU7YUFDOUU7U0FDRixDQUFDO1FBR0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7YUFDOUMsSUFBSSxDQUNILFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FDdEUsQ0FBQztJQUNOLENBQUM7SUFFTyxhQUFhLENBQUMsS0FBYTtRQUNqQyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O3NHQTNDVSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ25CeEMsK0JBQTJCO1FBQ3pCLHlDQUEyQztRQUN6QyxpQ0FBVztRQUFBLHFCQUFLO1FBQUEsaUJBQVk7UUFDNUIsMkJBR2lDO1FBQ2pDLGlEQUEwQztRQUN4QywwRkFJYTs7UUFDZixpQkFBbUI7UUFDckIsaUJBQWlCO1FBRWpCLHFCQUFJO1FBRUosNENBRTJFO1FBQXpFLDhJQUErQixzQkFBa0IsR0FBRyx1QkFBbUIsSUFBQztRQUN4RSxpQ0FDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBTzs7O1FBbEJJLGVBQXdCO1FBQXhCLHFDQUF3Qiw4QkFBQTtRQUdDLGVBQXlCO1FBQXpCLGtFQUF5QjtRQVd6RCxlQUE4QjtRQUE5QixnREFBOEI7O3VGREFyQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGZsYWc6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwb3B1bGF0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIEF1dG9jb21wbGV0ZSBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlIHtcbiAgc3RhdGVDdHJsID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGZpbHRlcmVkU3RhdGVzOiBPYnNlcnZhYmxlPFN0YXRlW10+O1xuXG4gIHN0YXRlczogU3RhdGVbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQXJrYW5zYXMnLFxuICAgICAgcG9wdWxhdGlvbjogJzIuOTc4TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9BcmthbnNhcy5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvRmxhZ19vZl9BcmthbnNhcy5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FsaWZvcm5pYScsXG4gICAgICBwb3B1bGF0aW9uOiAnMzkuMTRNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0NhbGlmb3JuaWEuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8wLzAxL0ZsYWdfb2ZfQ2FsaWZvcm5pYS5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRmxvcmlkYScsXG4gICAgICBwb3B1bGF0aW9uOiAnMjAuMjdNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0Zsb3JpZGEuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9mL2Y3L0ZsYWdfb2ZfRmxvcmlkYS5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVGV4YXMnLFxuICAgICAgcG9wdWxhdGlvbjogJzI3LjQ3TScsXG4gICAgICAvLyBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0ZpbGU6RmxhZ19vZl9UZXhhcy5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2YvZjcvRmxhZ19vZl9UZXhhcy5zdmcnXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyZWRTdGF0ZXMgPSB0aGlzLnN0YXRlQ3RybC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAoc3RhdGUgPT4gc3RhdGUgPyB0aGlzLl9maWx0ZXJTdGF0ZXMoc3RhdGUpIDogdGhpcy5zdGF0ZXMuc2xpY2UoKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJTdGF0ZXModmFsdWU6IHN0cmluZyk6IFN0YXRlW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnN0YXRlcy5maWx0ZXIoc3RhdGUgPT4gc3RhdGUubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcbiAgfVxufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPG1hdC1sYWJlbD5TdGF0ZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dFxuICAgICAgICAgICBhcmlhLWxhYmVsPVwiU3RhdGVcIlxuICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwic3RhdGVDdHJsXCI+XG4gICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzdGF0ZSBvZiBmaWx0ZXJlZFN0YXRlcyB8IGFzeW5jXCIgW3ZhbHVlXT1cInN0YXRlLm5hbWVcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImV4YW1wbGUtb3B0aW9uLWltZ1wiIGFyaWEtaGlkZGVuIFtzcmNdPVwic3RhdGUuZmxhZ1wiIGhlaWdodD1cIjI1XCI+XG4gICAgICAgIDxzcGFuPnt7c3RhdGUubmFtZX19PC9zcGFuPiB8XG4gICAgICAgIDxzbWFsbD5Qb3B1bGF0aW9uOiB7e3N0YXRlLnBvcHVsYXRpb259fTwvc21hbGw+XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxicj5cblxuICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgIFtjaGVja2VkXT1cInN0YXRlQ3RybC5kaXNhYmxlZFwiXG4gICAgKGNoYW5nZSk9XCJzdGF0ZUN0cmwuZGlzYWJsZWQgPyBzdGF0ZUN0cmwuZW5hYmxlKCkgOiBzdGF0ZUN0cmwuZGlzYWJsZSgpXCI+XG4gICAgRGlzYWJsZSBJbnB1dD9cbiAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuPC9mb3JtPlxuIl19