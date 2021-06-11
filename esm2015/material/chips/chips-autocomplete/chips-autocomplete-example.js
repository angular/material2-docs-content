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
        return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNHeEMsb0NBQTBDO0lBQUEsc0JBQU07SUFBQSxpQkFBVzs7OztJQU43RCxtQ0FJNEI7SUFBMUIsdVFBQXlCO0lBQ3pCLFlBQ0E7SUFBQSwrRkFBMkQ7SUFDN0QsaUJBQVc7Ozs7SUFMVCw4Q0FBeUIsK0JBQUE7SUFHekIsZUFDQTtJQURBLHlDQUNBO0lBQXlCLGVBQWU7SUFBZix1Q0FBZTs7O0lBWTFDLHNDQUF5RTtJQUN2RSxZQUNGO0lBQUEsaUJBQWE7OztJQUY0QyxnQ0FBZTtJQUN0RSxlQUNGO0lBREUseUNBQ0Y7O0FEZko7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBWW5DO1FBWEEsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUks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QztzQ0FXMEIsVUFBVTtrQkFBbEMsU0FBUzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT01NQSwgRU5URVJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIEF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNBdXRvY29tcGxldGVFeGFtcGxlIHtcbiAgdmlzaWJsZSA9IHRydWU7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICByZW1vdmFibGUgPSB0cnVlO1xuICBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQV07XG4gIGZydWl0Q3RybCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBmaWx0ZXJlZEZydWl0czogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIGZydWl0czogc3RyaW5nW10gPSBbJ0xlbW9uJ107XG4gIGFsbEZydWl0czogc3RyaW5nW10gPSBbJ0FwcGxlJywgJ0xlbW9uJywgJ0xpbWUnLCAnT3JhbmdlJywgJ1N0cmF3YmVycnknXTtcblxuICBAVmlld0NoaWxkKCdmcnVpdElucHV0JykgZnJ1aXRJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlcmVkRnJ1aXRzID0gdGhpcy5mcnVpdEN0cmwudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgbWFwKChmcnVpdDogc3RyaW5nIHwgbnVsbCkgPT4gZnJ1aXQgPyB0aGlzLl9maWx0ZXIoZnJ1aXQpIDogdGhpcy5hbGxGcnVpdHMuc2xpY2UoKSkpO1xuICB9XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnZhbHVlIHx8ICcnKS50cmltKCk7XG5cbiAgICAvLyBBZGQgb3VyIGZydWl0XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZydWl0cy5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcbiAgICBldmVudC5jaGlwSW5wdXQhLmNsZWFyKCk7XG5cbiAgICB0aGlzLmZydWl0Q3RybC5zZXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHJlbW92ZShmcnVpdDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZydWl0cy5pbmRleE9mKGZydWl0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZydWl0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkKGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mcnVpdHMucHVzaChldmVudC5vcHRpb24udmlld1ZhbHVlKTtcbiAgICB0aGlzLmZydWl0SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZnJ1aXRDdHJsLnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuYWxsRnJ1aXRzLmZpbHRlcihmcnVpdCA9PiBmcnVpdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBGcnVpdHM8L21hdC1sYWJlbD5cbiAgPG1hdC1jaGlwLWxpc3QgI2NoaXBMaXN0IGFyaWEtbGFiZWw9XCJGcnVpdCBzZWxlY3Rpb25cIj5cbiAgICA8bWF0LWNoaXBcbiAgICAgICpuZ0Zvcj1cImxldCBmcnVpdCBvZiBmcnVpdHNcIlxuICAgICAgW3NlbGVjdGFibGVdPVwic2VsZWN0YWJsZVwiXG4gICAgICBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiXG4gICAgICAocmVtb3ZlZCk9XCJyZW1vdmUoZnJ1aXQpXCI+XG4gICAgICB7e2ZydWl0fX1cbiAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlICpuZ0lmPVwicmVtb3ZhYmxlXCI+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICA8L21hdC1jaGlwPlxuICAgIDxpbnB1dFxuICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgZnJ1aXQuLi5cIlxuICAgICAgI2ZydWl0SW5wdXRcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmcnVpdEN0cmxcIlxuICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxuICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXG4gICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIj5cbiAgPC9tYXQtY2hpcC1saXN0PlxuICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiIChvcHRpb25TZWxlY3RlZCk9XCJzZWxlY3RlZCgkZXZlbnQpXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZydWl0IG9mIGZpbHRlcmVkRnJ1aXRzIHwgYXN5bmNcIiBbdmFsdWVdPVwiZnJ1aXRcIj5cbiAgICAgIHt7ZnJ1aXR9fVxuICAgIDwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==