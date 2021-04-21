import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/core";
function AutocompleteFilterExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r2, " ");
} }
/**
 * @title Filter autocomplete
 */
export class AutocompleteFilterExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
AutocompleteFilterExample.ɵfac = function AutocompleteFilterExample_Factory(t) { return new (t || AutocompleteFilterExample)(); };
AutocompleteFilterExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AutocompleteFilterExample, selectors: [["autocomplete-filter-example"]], decls: 9, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteFilterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementStart(5, "mat-autocomplete", null, 3);
        i0.ɵɵtemplate(7, AutocompleteFilterExample_mat_option_7_Template, 2, 2, "mat-option", 4);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 3, ctx.filteredOptions));
    } }, directives: [i1.ɵangular_packages_forms_forms_bb, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i4.MatAutocomplete, i5.NgForOf, i6.MatOption], pipes: [i5.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutocompleteFilterExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-filter-example',
                templateUrl: 'autocomplete-filter-example.html',
                styleUrls: ['autocomplete-filter-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1maWx0ZXIvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1maWx0ZXIvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDT3hDLHFDQUE0RTtJQUMxRSxZQUNGO0lBQUEsaUJBQWE7OztJQUY4QyxpQ0FBZ0I7SUFDekUsZUFDRjtJQURFLDBDQUNGOztBRFBOOztHQUVHO0FBTUgsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1FLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FnQjdDO0lBYkMsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQy9DLElBQUksQ0FDSCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVPLE9BQU8sQ0FBQyxLQUFhO1FBQzNCLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2tHQWpCVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ2J0QywrQkFBMkI7UUFDekIseUNBQTJDO1FBQ3pDLGlDQUFXO1FBQUEsc0JBQU07UUFBQSxpQkFBWTtRQUM3QiwyQkFLZ0M7UUFDaEMsaURBQTBDO1FBQ3hDLHdGQUVhOztRQUNmLGlCQUFtQjtRQUNyQixpQkFBaUI7UUFDbkIsaUJBQU87OztRQVJJLGVBQXlCO1FBQXpCLDJDQUF5Qix3QkFBQTtRQUdDLGVBQTBCO1FBQTFCLG1FQUEwQjs7dUZER2xELHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIEZpbHRlciBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtZmlsdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtZmlsdGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ09uZScsICdUd28nLCAnVGhyZWUnXTtcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8bWF0LWxhYmVsPk51bWJlcjwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGljayBvbmVcIlxuICAgICAgICAgICBhcmlhLWxhYmVsPVwiTnVtYmVyXCJcbiAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15Q29udHJvbFwiXG4gICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvblwiPlxuICAgICAgICB7e29wdGlvbn19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19