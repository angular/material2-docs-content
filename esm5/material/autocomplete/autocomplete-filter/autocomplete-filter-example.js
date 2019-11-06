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
function AutocompleteFilterExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r8, " ");
} }
/**
 * @title Filter autocomplete
 */
var AutocompleteFilterExample = /** @class */ (function () {
    function AutocompleteFilterExample() {
        this.myControl = new FormControl();
        this.options = ['One', 'Two', 'Three'];
    }
    AutocompleteFilterExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filter(value); }));
    };
    AutocompleteFilterExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    AutocompleteFilterExample.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete-filter-example',
                    templateUrl: 'autocomplete-filter-example.html',
                    styleUrls: ['autocomplete-filter-example.css'],
                },] },
    ];
    AutocompleteFilterExample.ɵfac = function AutocompleteFilterExample_Factory(t) { return new (t || AutocompleteFilterExample)(); };
    AutocompleteFilterExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteFilterExample, selectors: [["autocomplete-filter-example"]], decls: 7, vars: 5, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick one", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteFilterExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2);
            i0.ɵɵelementStart(3, "mat-autocomplete", null, _c0);
            i0.ɵɵtemplate(5, AutocompleteFilterExample_mat_option_5_Template, 2, 2, "mat-option", 3);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r6 = i0.ɵɵreference(4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formControl", ctx.myControl)("matAutocomplete", _r6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx.filteredOptions));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i4.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i4.MatAutocomplete, i5.NgForOf, i6.MatOption], pipes: [i5.AsyncPipe], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return AutocompleteFilterExample;
}());
export { AutocompleteFilterExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(AutocompleteFilterExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-filter-example',
                templateUrl: 'autocomplete-filter-example.html',
                styleUrls: ['autocomplete-filter-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1maWx0ZXIvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1maWx0ZXIvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0N4QyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhDLGlDQUFnQjtJQUN6RSxlQUNGO0lBREUsMENBQ0Y7O0FERE47O0dBRUc7QUFDSDtJQUFBO1FBTUUsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQWdCN0M7SUFiQyw0Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTthQUMvQyxJQUFJLENBQ0gsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FDbEMsQ0FBQztJQUNOLENBQUM7SUFFTywyQ0FBTyxHQUFmLFVBQWdCLEtBQWE7UUFDM0IsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXhDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDL0M7O3NHQUNZLHlCQUF5QjtrRUFBekIseUJBQXlCO1lDYnRDLCtCQUNFO1lBQUEseUNBQ0U7WUFBQSwyQkFDQTtZQUFBLG1EQUNFO1lBQUEsd0ZBQ0U7O1lBRUosaUJBQW1CO1lBQ3JCLGlCQUFpQjtZQUNuQixpQkFBTzs7O1lBUG9FLGVBQXlCO1lBQXpCLDJDQUF5Qix3QkFBQTtZQUVsRixlQUE4QztZQUE5QyxtRUFBOEM7O29DREpoRTtDQStCQyxBQXZCRCxJQXVCQztTQWxCWSx5QkFBeUI7bUNBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIEZpbHRlciBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtZmlsdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUtZmlsdGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ09uZScsICdUd28nLCAnVGhyZWUnXTtcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXIodmFsdWUpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBpY2sgb25lXCIgYXJpYS1sYWJlbD1cIk51bWJlclwiIG1hdElucHV0IFtmb3JtQ29udHJvbF09XCJteUNvbnRyb2xcIiBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIj5cbiAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnMgfCBhc3luY1wiIFt2YWx1ZV09XCJvcHRpb25cIj5cbiAgICAgICAge3tvcHRpb259fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==