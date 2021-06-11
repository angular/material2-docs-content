import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/core";
const _c0 = ["fruitInput"];
function ChipsAutocompleteExample_mat_chip_5_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 11);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ChipsAutocompleteExample_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 9);
    i0.ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const fruit_r5 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.remove(fruit_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_5_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r5, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.removable);
} }
function ChipsAutocompleteExample_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", fruit_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r9, " ");
} }
/**
 * @title Chips Autocomplete
 */
export class ChipsAutocompleteExample {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((fruit) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
        this.fruitCtrl.setValue(null);
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
}
ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
ChipsAutocompleteExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fruitInput = _t.first);
    } }, decls: 12, vars: 8, consts: [["appearance", "fill", 1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Favorite Fruits");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip-list", 1, 2);
        i0.ɵɵtemplate(5, ChipsAutocompleteExample_mat_chip_5_Template, 3, 4, "mat-chip", 3);
        i0.ɵɵelementStart(6, "input", 4, 5);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-autocomplete", 6, 7);
        i0.ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_8_listener($event) { return ctx.selected($event); });
        i0.ɵɵtemplate(10, ChipsAutocompleteExample_mat_option_10_Template, 2, 2, "mat-option", 8);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        const _r3 = i0.ɵɵreference(9);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.fruits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 6, ctx.filteredFruits));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatChipList, i3.NgForOf, i4.DefaultValueAccessor, i5.MatAutocompleteTrigger, i2.MatChipInput, i4.NgControlStatus, i4.FormControlDirective, i5.MatAutocomplete, i2.MatChip, i3.NgIf, i6.MatIcon, i2.MatChipRemove, i7.MatOption], pipes: [i3.AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsAutocompleteExample, [{
        type: Component,
        args: [{
                selector: 'chips-autocomplete-example',
                templateUrl: 'chips-autocomplete-example.html',
                styleUrls: ['chips-autocomplete-example.css'],
            }]
    }], function () { return []; }, { fruitInput: [{
            type: ViewChild,
            args: ['fruitInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNHeEMsb0NBQTBDO0lBQUEsc0JBQU07SUFBQSxpQkFBVzs7OztJQU43RCxtQ0FJNEI7SUFBMUIsdVFBQXlCO0lBQ3pCLFlBQ0E7SUFBQSwrRkFBMkQ7SUFDN0QsaUJBQVc7Ozs7SUFMVCw4Q0FBeUIsK0JBQUE7SUFHekIsZUFDQTtJQURBLHlDQUNBO0lBQXlCLGVBQWU7SUFBZix1Q0FBZTs7O0lBWTFDLHNDQUF5RTtJQUN2RSxZQUNGO0lBQUEsaUJBQWE7OztJQUY0QyxnQ0FBZTtJQUN0RSxlQUNGO0lBREUseUNBQ0Y7O0FEZko7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBWW5DO1FBWEEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUks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LENBQUM7YUFDOUM7c0NBVzBCLFVBQVU7a0JBQWxDLFNBQVM7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdENoaXBJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyBBdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSB7XG4gIHZpc2libGUgPSB0cnVlO1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xuICBmcnVpdEN0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZmlsdGVyZWRGcnVpdHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBmcnVpdHM6IHN0cmluZ1tdID0gWydMZW1vbiddO1xuICBhbGxGcnVpdHM6IHN0cmluZ1tdID0gWydBcHBsZScsICdMZW1vbicsICdMaW1lJywgJ09yYW5nZScsICdTdHJhd2JlcnJ5J107XG5cbiAgQFZpZXdDaGlsZCgnZnJ1aXRJbnB1dCcpIGZydWl0SW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZEZydWl0cyA9IHRoaXMuZnJ1aXRDdHJsLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgIG1hcCgoZnJ1aXQ6IHN0cmluZyB8IG51bGwpID0+IGZydWl0ID8gdGhpcy5fZmlsdGVyKGZydWl0KSA6IHRoaXMuYWxsRnJ1aXRzLnNsaWNlKCkpKTtcbiAgfVxuXG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC52YWx1ZSB8fCAnJykudHJpbSgpO1xuXG4gICAgLy8gQWRkIG91ciBmcnVpdFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mcnVpdHMucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIGlucHV0IHZhbHVlXG4gICAgZXZlbnQuY2hpcElucHV0IS5jbGVhcigpO1xuXG4gICAgdGhpcy5mcnVpdEN0cmwuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICByZW1vdmUoZnJ1aXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5mcnVpdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RlZChldmVudDogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZnJ1aXRzLnB1c2goZXZlbnQub3B0aW9uLnZpZXdWYWx1ZSk7XG4gICAgdGhpcy5mcnVpdElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLmZydWl0Q3RybC5zZXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLmFsbEZydWl0cy5maWx0ZXIoZnJ1aXQgPT4gZnJ1aXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSA9PT0gMCk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBGcnVpdHM8L21hdC1sYWJlbD5cbiAgPG1hdC1jaGlwLWxpc3QgI2NoaXBMaXN0IGFyaWEtbGFiZWw9XCJGcnVpdCBzZWxlY3Rpb25cIj5cbiAgICA8bWF0LWNoaXBcbiAgICAgICpuZ0Zvcj1cImxldCBmcnVpdCBvZiBmcnVpdHNcIlxuICAgICAgW3NlbGVjdGFibGVdPVwic2VsZWN0YWJsZVwiXG4gICAgICBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiXG4gICAgICAocmVtb3ZlZCk9XCJyZW1vdmUoZnJ1aXQpXCI+XG4gICAgICB7e2ZydWl0fX1cbiAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlICpuZ0lmPVwicmVtb3ZhYmxlXCI+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICA8L21hdC1jaGlwPlxuICAgIDxpbnB1dFxuICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgZnJ1aXQuLi5cIlxuICAgICAgI2ZydWl0SW5wdXRcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmcnVpdEN0cmxcIlxuICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxuICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXG4gICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIj5cbiAgPC9tYXQtY2hpcC1saXN0PlxuICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiIChvcHRpb25TZWxlY3RlZCk9XCJzZWxlY3RlZCgkZXZlbnQpXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZydWl0IG9mIGZpbHRlcmVkRnJ1aXRzIHwgYXN5bmNcIiBbdmFsdWVdPVwiZnJ1aXRcIj5cbiAgICAgIHt7ZnJ1aXR9fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==