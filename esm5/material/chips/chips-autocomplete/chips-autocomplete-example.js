import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/core";
var _c0 = ["fruitInput"];
var _c1 = ["auto"];
var _c2 = ["chipList", ""];
var _c3 = ["fruitInput", ""];
var _c4 = ["auto", "matAutocomplete"];
function ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 8);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ChipsAutocompleteExample_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 6);
    i0.ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_3_Template_mat_chip_removed_0_listener($event) { i0.ɵɵrestoreView(_r8); var fruit_r5 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.remove(fruit_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var fruit_r5 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r5, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.removable);
} }
function ChipsAutocompleteExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var fruit_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", fruit_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r9, " ");
} }
/**
 * @title Chips Autocomplete
 */
var ChipsAutocompleteExample = /** @class */ (function () {
    function ChipsAutocompleteExample() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
    }
    ChipsAutocompleteExample.prototype.add = function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.fruitCtrl.setValue(null);
        }
    };
    ChipsAutocompleteExample.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsAutocompleteExample.prototype.selected = function (event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    ChipsAutocompleteExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
    };
    ChipsAutocompleteExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-autocomplete-example',
                    templateUrl: 'chips-autocomplete-example.html',
                    styleUrls: ['chips-autocomplete-example.css'],
                },] },
    ];
    /** @nocollapse */
    ChipsAutocompleteExample.ctorParameters = function () { return []; };
    ChipsAutocompleteExample.propDecorators = {
        fruitInput: [{ type: ViewChild, args: ['fruitInput',] }],
        matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
    };
    ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
    ChipsAutocompleteExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.fruitInput = _t.first);
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.matAutocomplete = _t.first);
        } }, decls: 10, vars: 9, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-chip-list", 1, _c2);
            i0.ɵɵtemplate(3, ChipsAutocompleteExample_mat_chip_3_Template, 3, 4, "mat-chip", 2);
            i0.ɵɵelementStart(4, "input", 3, _c3);
            i0.ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_4_listener($event) { return ctx.add($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-autocomplete", 4, _c4);
            i0.ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.selected($event); });
            i0.ɵɵtemplate(8, ChipsAutocompleteExample_mat_option_8_Template, 2, 2, "mat-option", 5);
            i0.ɵɵpipe(9, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(2);
            var _r3 = i0.ɵɵreference(7);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.fruits);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 7, ctx.filteredFruits));
        } }, directives: [i1.MatFormField, i2.MatChipList, i3.NgForOf, i4.DefaultValueAccessor, i5.MatAutocompleteTrigger, i2.MatChipInput, i4.NgControlStatus, i4.FormControlDirective, i5.MatAutocomplete, i2.MatChip, i3.NgIf, i6.MatIcon, i2.MatChipRemove, i7.MatOption], pipes: [i3.AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return ChipsAutocompleteExample;
}());
export { ChipsAutocompleteExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(ChipsAutocompleteExample, [{
        type: Component,
        args: [{
                selector: 'chips-autocomplete-example',
                templateUrl: 'chips-autocomplete-example.html',
                styleUrls: ['chips-autocomplete-example.css'],
            }]
    }], function () { return []; }, { fruitInput: [{
            type: ViewChild,
            args: ['fruitInput']
        }], matAutocomplete: [{
            type: ViewChild,
            args: ['auto']
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtYXV0b2NvbXBsZXRlL2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWF1dG9jb21wbGV0ZS9jaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQStCLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRzdGLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ0V4QyxtQ0FBMEM7SUFBQSxzQkFBTTtJQUFBLGlCQUFXOzs7O0lBTjdELG1DQUtFO0lBREEsNk9BQXlCO0lBQ3pCLFlBQ0E7SUFBQSw4RkFBMEM7SUFDNUMsaUJBQVc7Ozs7SUFMVCw4Q0FBeUIsK0JBQUE7SUFHekIsZUFDQTtJQURBLHlDQUNBO0lBQXdCLGVBQWlCO0lBQWpCLHVDQUFpQjs7O0lBYTNDLHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGNEMsZ0NBQWU7SUFDdEUsZUFDRjtJQURFLHlDQUNGOztBRGZKOztHQUVHO0FBQ0g7SUFtQkU7UUFBQSxpQkFJQztRQWpCRCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsdUJBQWtCLEdBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsY0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFFOUIsV0FBTSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsY0FBUyxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTXZFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsRCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsR0FBRyxDQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELHNDQUFHLEdBQUgsVUFBSSxLQUF3QjtRQUMxQixrREFBa0Q7UUFDbEQsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFMUIsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsd0JBQXdCO1lBQ3hCLElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ2xCO1lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQseUNBQU0sR0FBTixVQUFPLEtBQWE7UUFDbEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxLQUFtQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLDBDQUFPLEdBQWYsVUFBZ0IsS0FBYTtRQUMzQixJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDOUM7Ozs7OzZCQVlFLFNBQVMsU0FBQyxZQUFZO2tDQUN0QixTQUFTLFNBQUMsTUFBTTs7b0dBWk4sd0JBQXdCO2lFQUF4Qix3QkFBd0I7Ozs7Ozs7O1lDaEJyQyx5Q0FDRTtZQUFBLDZDQUNFO1lBQUEsbUZBS0U7WUFHRixxQ0FTRjtZQURJLHdJQUF3QixlQUFXLElBQUM7WUFSdEMsaUJBU0Y7WUFBQSxpQkFBZ0I7WUFDaEIsZ0RBQ0U7WUFEd0MsdUlBQWtCLG9CQUFnQixJQUFDO1lBQzNFLHVGQUNFOztZQUVKLGlCQUFtQjtZQUNyQixpQkFBaUI7Ozs7WUF0QlgsZUFBNEI7WUFBNUIsb0NBQTRCO1lBVTVCLGVBQXlCO1lBQXpCLDJDQUF5Qix3QkFBQSx3QkFBQSx5REFBQSx3Q0FBQTtZQVFmLGVBQTRDO1lBQTVDLGtFQUE0Qzs7bUNEckI1RDtDQTRFQyxBQWpFRCxJQWlFQztTQTVEWSx3QkFBd0I7bUNBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7O2tCQVlFLFNBQVM7bUJBQUMsWUFBWTs7a0JBQ3RCLFNBQVM7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsIE1hdEF1dG9jb21wbGV0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIEF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNBdXRvY29tcGxldGVFeGFtcGxlIHtcbiAgdmlzaWJsZSA9IHRydWU7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICByZW1vdmFibGUgPSB0cnVlO1xuICBhZGRPbkJsdXIgPSB0cnVlO1xuICBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQV07XG4gIGZydWl0Q3RybCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBmaWx0ZXJlZEZydWl0czogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIGZydWl0czogc3RyaW5nW10gPSBbJ0xlbW9uJ107XG4gIGFsbEZydWl0czogc3RyaW5nW10gPSBbJ0FwcGxlJywgJ0xlbW9uJywgJ0xpbWUnLCAnT3JhbmdlJywgJ1N0cmF3YmVycnknXTtcblxuICBAVmlld0NoaWxkKCdmcnVpdElucHV0JykgZnJ1aXRJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnYXV0bycpIG1hdEF1dG9jb21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyZWRGcnVpdHMgPSB0aGlzLmZydWl0Q3RybC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgICBtYXAoKGZydWl0OiBzdHJpbmcgfCBudWxsKSA9PiBmcnVpdCA/IHRoaXMuX2ZpbHRlcihmcnVpdCkgOiB0aGlzLmFsbEZydWl0cy5zbGljZSgpKSk7XG4gIH1cblxuICBhZGQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgLy8gQWRkIGZydWl0IG9ubHkgd2hlbiBNYXRBdXRvY29tcGxldGUgaXMgbm90IG9wZW5cbiAgICAvLyBUbyBtYWtlIHN1cmUgdGhpcyBkb2VzIG5vdCBjb25mbGljdCB3aXRoIE9wdGlvblNlbGVjdGVkIEV2ZW50XG4gICAgaWYgKCF0aGlzLm1hdEF1dG9jb21wbGV0ZS5pc09wZW4pIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXG4gICAgICAvLyBBZGQgb3VyIGZydWl0XG4gICAgICBpZiAoKHZhbHVlIHx8ICcnKS50cmltKCkpIHtcbiAgICAgICAgdGhpcy5mcnVpdHMucHVzaCh2YWx1ZS50cmltKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXNldCB0aGUgaW5wdXQgdmFsdWVcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZydWl0Q3RybC5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZnJ1aXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5mcnVpdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RlZChldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZnJ1aXRzLnB1c2goZXZlbnQub3B0aW9uLnZpZXdWYWx1ZSk7XG4gICAgdGhpcy5mcnVpdElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLmZydWl0Q3RybC5zZXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLmFsbEZydWl0cy5maWx0ZXIoZnJ1aXQgPT4gZnJ1aXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCI+XG4gIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiRnJ1aXQgc2VsZWN0aW9uXCI+XG4gICAgPG1hdC1jaGlwXG4gICAgICAqbmdGb3I9XCJsZXQgZnJ1aXQgb2YgZnJ1aXRzXCJcbiAgICAgIFtzZWxlY3RhYmxlXT1cInNlbGVjdGFibGVcIlxuICAgICAgW3JlbW92YWJsZV09XCJyZW1vdmFibGVcIlxuICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlKGZydWl0KVwiPlxuICAgICAge3tmcnVpdH19XG4gICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZSAqbmdJZj1cInJlbW92YWJsZVwiPmNhbmNlbDwvbWF0LWljb24+XG4gICAgPC9tYXQtY2hpcD5cbiAgICA8aW5wdXRcbiAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IGZydWl0Li4uXCJcbiAgICAgICNmcnVpdElucHV0XG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZnJ1aXRDdHJsXCJcbiAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcbiAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxuICAgICAgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJhZGRPbkJsdXJcIlxuICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZCgkZXZlbnQpXCI+XG4gIDwvbWF0LWNoaXAtbGlzdD5cbiAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiAob3B0aW9uU2VsZWN0ZWQpPVwic2VsZWN0ZWQoJGV2ZW50KVwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmcnVpdCBvZiBmaWx0ZXJlZEZydWl0cyB8IGFzeW5jXCIgW3ZhbHVlXT1cImZydWl0XCI+XG4gICAgICB7e2ZydWl0fX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LWF1dG9jb21wbGV0ZT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=