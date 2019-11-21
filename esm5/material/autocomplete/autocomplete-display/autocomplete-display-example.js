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
function AutocompleteDisplayExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
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
    AutocompleteDisplayExample.ɵcmp = i0.ɵɵdefineComponent({ type: AutocompleteDisplayExample, selectors: [["autocomplete-display-example"]], decls: 7, vars: 6, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Assignee", "aria-label", "Assignee", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteDisplayExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2);
            i0.ɵɵelementStart(3, "mat-autocomplete", 3, 4);
            i0.ɵɵtemplate(5, AutocompleteDisplayExample_mat_option_5_Template, 2, 2, "mat-option", 5);
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteDisplayExample, [{
        type: Component,
        args: [{
                selector: 'autocomplete-display-example',
                templateUrl: 'autocomplete-display-example.html',
                styleUrls: ['autocomplete-display-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtZGlzcGxheS9hdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1kaXNwbGF5L2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNDeEMscUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUY4QyxpQ0FBZ0I7SUFDekUsZUFDRjtJQURFLCtDQUNGOztBREdOOztHQUVHO0FBQ0g7SUFBQTtRQU1FLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBVztZQUNoQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7WUFDZCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDakIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO1NBQ2YsQ0FBQztLQXFCSDtJQWxCQyw2Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTthQUMvQyxJQUFJLENBQ0gsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUE5QyxDQUE4QyxDQUFDLEVBQzVELEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUM5RCxDQUFDO0lBQ04sQ0FBQztJQUVELDhDQUFTLEdBQVQsVUFBVSxJQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRU8sNENBQU8sR0FBZixVQUFnQixJQUFZO1FBQzFCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFwRCxDQUFvRCxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7O3dHQUNZLDBCQUEwQjttRUFBMUIsMEJBQTBCO1lDakJ2QywrQkFDRTtZQUFBLHlDQUNFO1lBQUEsMkJBQ0E7WUFBQSw4Q0FDRTtZQUFBLHlGQUNFOztZQUVKLGlCQUFtQjtZQUNyQixpQkFBaUI7WUFDbkIsaUJBQU87OztZQVBzRSxlQUF5QjtZQUF6QiwyQ0FBeUIsd0JBQUE7WUFDeEQsZUFBeUI7WUFBekIsMkNBQXlCO1lBQ3JELGVBQThDO1lBQTlDLG1FQUE4Qzs7cUNESmhFO0NBNENDLEFBaENELElBZ0NDO1NBM0JZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEaXNwbGF5IHZhbHVlIGF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgb3B0aW9uczogVXNlcltdID0gW1xuICAgIHtuYW1lOiAnTWFyeSd9LFxuICAgIHtuYW1lOiAnU2hlbGxleSd9LFxuICAgIHtuYW1lOiAnSWdvcid9XG4gIF07XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxVc2VyW10+O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgbWFwKHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IHZhbHVlLm5hbWUpLFxuICAgICAgICBtYXAobmFtZSA9PiBuYW1lID8gdGhpcy5fZmlsdGVyKG5hbWUpIDogdGhpcy5vcHRpb25zLnNsaWNlKCkpXG4gICAgICApO1xuICB9XG5cbiAgZGlzcGxheUZuKHVzZXI6IFVzZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB1c2VyLm5hbWU7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIobmFtZTogc3RyaW5nKTogVXNlcltdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcbiAgfVxufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25lZVwiIGFyaWEtbGFiZWw9XCJBc3NpZ25lZVwiIG1hdElucHV0IFtmb3JtQ29udHJvbF09XCJteUNvbnRyb2xcIiBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIj5cbiAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiIFtkaXNwbGF5V2l0aF09XCJkaXNwbGF5Rm5cIj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmlsdGVyZWRPcHRpb25zIHwgYXN5bmNcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgIHt7b3B0aW9uLm5hbWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==