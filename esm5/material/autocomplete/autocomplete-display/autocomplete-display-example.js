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
var _c0 = ["auto", "matAutocomplete"];
function AutocompleteDisplayExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r5.name, " ");
} }
/**
 * @title Display value autocomplete
 */
var AutocompleteDisplayExample = /** @class */ (function () {
    function AutocompleteDisplayExample() {
        this.myControl = new FormControl();
        this.options = [
            { name: 'Mary' },
            { name: 'Shelley' },
            { name: 'Igor' }
        ];
    }
    AutocompleteDisplayExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(function (value) { return typeof value === 'string' ? value : value.name; }), map(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
    };
    AutocompleteDisplayExample.prototype.displayFn = function (user) {
        return user.name;
    };
    AutocompleteDisplayExample.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteDisplayExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-display-example',
                    templateUrl: 'autocomplete-display-example.html',
                    styleUrls: ['autocomplete-display-example.css'],
                },] },
    ];
    AutocompleteDisplayExample.ɵfac = function AutocompleteDisplayExample_Factory(t) { return new (t || AutocompleteDisplayExample)(); };
    AutocompleteDisplayExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteDisplayExample, selectors: [["autocomplete-display-example"]], decls: 7, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Assignee", "aria-label", "Assignee", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteDisplayExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2);
            i0.ɵɵelementStart(3, "mat-autocomplete", 3, _c0);
            i0.ɵɵtemplate(5, AutocompleteDisplayExample_mat_option_5_Template, 2, 2, "mat-option", 4);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r3 = i0.ɵɵreference(4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("displayWith", ctx.displayFn);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 4, ctx.filteredOptions));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i4.MatAutocomplete, i5.NgForOf, i6.MatOption], pipes: [i5.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteDisplayExample;
}());
export { AutocompleteDisplayExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(AutocompleteDisplayExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-display-example',
                templateUrl: 'autocomplete-display-example.html',
                styleUrls: ['autocomplete-display-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtZGlzcGxheS9hdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1kaXNwbGF5L2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0lDQ3hDLHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGOEMsaUNBQWdCO0lBQ3pFLGVBQ0Y7SUFERSwrQ0FDRjs7QURHTjs7R0FFRztBQUNIO0lBQUE7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQVc7WUFDaEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQ2QsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQ2pCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztTQUNmLENBQUM7S0FxQkg7SUFsQkMsNkNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7YUFDL0MsSUFBSSxDQUNILFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBOUMsQ0FBOEMsQ0FBQyxFQUM1RCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQWhELENBQWdELENBQUMsQ0FDOUQsQ0FBQztJQUNOLENBQUM7SUFFRCw4Q0FBUyxHQUFULFVBQVUsSUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVPLDRDQUFPLEdBQWYsVUFBZ0IsSUFBWTtRQUMxQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDO0lBQzdGLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztvQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7aUJBQ2hEOzt3R0FDWSwwQkFBMEI7bUVBQTFCLDBCQUEwQjtZQ2pCdkMsK0JBQ0U7WUFBQSx5Q0FDRTtZQUFBLDJCQUNBO1lBQUEsZ0RBQ0U7WUFBQSx5RkFDRTs7WUFFSixpQkFBbUI7WUFDckIsaUJBQWlCO1lBQ25CLGlCQUFPOzs7WUFQc0UsZUFBeUI7WUFBekIsMkNBQXlCLHdCQUFBO1lBQ3hELGVBQXlCO1lBQXpCLDJDQUF5QjtZQUNyRCxlQUE4QztZQUE5QyxtRUFBOEM7O3FDREpoRTtDQTRDQyxBQWhDRCxJQWdDQztTQTNCWSwwQkFBMEI7bUNBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRGlzcGxheSB2YWx1ZSBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIG9wdGlvbnM6IFVzZXJbXSA9IFtcbiAgICB7bmFtZTogJ01hcnknfSxcbiAgICB7bmFtZTogJ1NoZWxsZXknfSxcbiAgICB7bmFtZTogJ0lnb3InfVxuICBdO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8VXNlcltdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB2YWx1ZS5uYW1lKSxcbiAgICAgICAgbWFwKG5hbWUgPT4gbmFtZSA/IHRoaXMuX2ZpbHRlcihuYW1lKSA6IHRoaXMub3B0aW9ucy5zbGljZSgpKVxuICAgICAgKTtcbiAgfVxuXG4gIGRpc3BsYXlGbih1c2VyOiBVc2VyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXNlci5uYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKG5hbWU6IHN0cmluZyk6IFVzZXJbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWduZWVcIiBhcmlhLWxhYmVsPVwiQXNzaWduZWVcIiBtYXRJbnB1dCBbZm9ybUNvbnRyb2xdPVwibXlDb250cm9sXCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCI+XG4gICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiBbZGlzcGxheVdpdGhdPVwiZGlzcGxheUZuXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvblwiPlxuICAgICAgICB7e29wdGlvbi5uYW1lfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=