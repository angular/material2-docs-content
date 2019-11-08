/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const _c0 = ["fruitInput"];
const _c1 = ["auto"];
function ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 11);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ChipsAutocompleteExample_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 9);
    i0.ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_3_Template_mat_chip_removed_0_listener($event) { i0.ɵɵrestoreView(_r8); const fruit_r5 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.remove(fruit_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 10);
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
function ChipsAutocompleteExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
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
 * \@title Chips Autocomplete
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
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((/**
         * @param {?} fruit
         * @return {?}
         */
        (fruit) => fruit ? this._filter(fruit) : this.allFruits.slice())));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        /** @type {?} */
        const input = event.input;
        /** @type {?} */
        const value = event.value;
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
    /**
     * @param {?} fruit
     * @return {?}
     */
    remove(fruit) {
        /** @type {?} */
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.allFruits.filter((/**
         * @param {?} fruit
         * @return {?}
         */
        fruit => fruit.toLowerCase().indexOf(filterValue) === 0));
    }
}
ChipsAutocompleteExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-autocomplete-example',
                templateUrl: 'chips-autocomplete-example.html',
                styleUrls: ['chips-autocomplete-example.css'],
            },] },
];
/** @nocollapse */
ChipsAutocompleteExample.ctorParameters = () => [];
ChipsAutocompleteExample.propDecorators = {
    fruitInput: [{ type: ViewChild, args: ['fruitInput',] }],
    matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
};
/** @nocollapse */ ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
/** @nocollapse */ ChipsAutocompleteExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.fruitInput = _t.first);
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.matAutocomplete = _t.first);
    } }, decls: 10, vars: 8, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-chip-list", 1, 2);
        i0.ɵɵtemplate(3, ChipsAutocompleteExample_mat_chip_3_Template, 3, 4, "mat-chip", 3);
        i0.ɵɵelementStart(4, "input", 4, 5);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_4_listener($event) { return ctx.add($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-autocomplete", 6, 7);
        i0.ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.selected($event); });
        i0.ɵɵtemplate(8, ChipsAutocompleteExample_mat_option_8_Template, 2, 2, "mat-option", 8);
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(7);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.fruits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 6, ctx.filteredFruits));
    } }, directives: [i1.MatFormField, i2.MatChipList, i3.NgForOf, i4.DefaultValueAccessor, i5.MatAutocompleteTrigger, i2.MatChipInput, i4.NgControlStatus, i4.FormControlDirective, i5.MatAutocomplete, i2.MatChip, i3.NgIf, i6.MatIcon, i2.MatChipRemove, i7.MatOption], pipes: [i3.AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
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
if (false) {
    /** @type {?} */
    ChipsAutocompleteExample.prototype.visible;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.selectable;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.removable;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.separatorKeysCodes;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.fruitCtrl;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.filteredFruits;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.fruits;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.allFruits;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.fruitInput;
    /** @type {?} */
    ChipsAutocompleteExample.prototype.matAutocomplete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBK0IsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0YsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDRXhDLG9DQUEwQztJQUFBLHNCQUFNO0lBQUEsaUJBQVc7Ozs7SUFON0QsbUNBS0U7SUFEQSxpUEFBeUI7SUFDekIsWUFDQTtJQUFBLCtGQUEwQztJQUM1QyxpQkFBVzs7OztJQUxULDhDQUF5QiwrQkFBQTtJQUd6QixlQUNBO0lBREEseUNBQ0E7SUFBd0IsZUFBaUI7SUFBakIsdUNBQWlCOzs7SUFZM0Msc0NBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUY0QyxnQ0FBZTtJQUN0RSxlQUNGO0lBREUseUNBQ0Y7Ozs7O0FETkosTUFBTSxPQUFPLHdCQUF3QjtJQWFuQztRQVpBLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixl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QjtRQUNyQixpQkFBaUI7Ozs7UUFyQlgsZUFBNEI7UUFBNUIsb0NBQTRCO1FBVTVCLGVBQXlCO1FBQXpCLDJDQUF5Qix3QkFBQSx3QkFBQSx5REFBQTtRQU9mLGVBQTRDO1FBQTVDLGtFQUE0Qzs7bUNESi9DLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7O2tCQVdFLFNBQVM7bUJBQUMsWUFBWTs7a0JBQ3RCLFNBQVM7bUJBQUMsTUFBTTs7OztJQVZqQiwyQ0FBZTs7SUFDZiw4Q0FBa0I7O0lBQ2xCLDZDQUFpQjs7SUFDakIsc0RBQThDOztJQUM5Qyw2Q0FBOEI7O0lBQzlCLGtEQUFxQzs7SUFDckMsMENBQTZCOztJQUM3Qiw2Q0FBeUU7O0lBRXpFLDhDQUFrRTs7SUFDbEUsbURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT01NQSwgRU5URVJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCwgTWF0QXV0b2NvbXBsZXRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRDaGlwSW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgQXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0F1dG9jb21wbGV0ZUV4YW1wbGUge1xuICB2aXNpYmxlID0gdHJ1ZTtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gIHJlbW92YWJsZSA9IHRydWU7XG4gIHNlcGFyYXRvcktleXNDb2RlczogbnVtYmVyW10gPSBbRU5URVIsIENPTU1BXTtcbiAgZnJ1aXRDdHJsID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGZpbHRlcmVkRnJ1aXRzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgZnJ1aXRzOiBzdHJpbmdbXSA9IFsnTGVtb24nXTtcbiAgYWxsRnJ1aXRzOiBzdHJpbmdbXSA9IFsnQXBwbGUnLCAnTGVtb24nLCAnTGltZScsICdPcmFuZ2UnLCAnU3RyYXdiZXJyeSddO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZydWl0SW5wdXQnKSBmcnVpdElucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdhdXRvJykgbWF0QXV0b2NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZEZydWl0cyA9IHRoaXMuZnJ1aXRDdHJsLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgIG1hcCgoZnJ1aXQ6IHN0cmluZyB8IG51bGwpID0+IGZydWl0ID8gdGhpcy5fZmlsdGVyKGZydWl0KSA6IHRoaXMuYWxsRnJ1aXRzLnNsaWNlKCkpKTtcbiAgfVxuXG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG5cbiAgICAvLyBBZGQgb3VyIGZydWl0XG4gICAgaWYgKCh2YWx1ZSB8fCAnJykudHJpbSgpKSB7XG4gICAgICB0aGlzLmZydWl0cy5wdXNoKHZhbHVlLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuZnJ1aXRDdHJsLnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcmVtb3ZlKGZydWl0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZnJ1aXRzLmluZGV4T2YoZnJ1aXQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWQoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZydWl0cy5wdXNoKGV2ZW50Lm9wdGlvbi52aWV3VmFsdWUpO1xuICAgIHRoaXMuZnJ1aXRJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5mcnVpdEN0cmwuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5hbGxGcnVpdHMuZmlsdGVyKGZydWl0ID0+IGZydWl0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWNoaXAtbGlzdFwiPlxuICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIkZydWl0IHNlbGVjdGlvblwiPlxuICAgIDxtYXQtY2hpcFxuICAgICAgKm5nRm9yPVwibGV0IGZydWl0IG9mIGZydWl0c1wiXG4gICAgICBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCJcbiAgICAgIFtyZW1vdmFibGVdPVwicmVtb3ZhYmxlXCJcbiAgICAgIChyZW1vdmVkKT1cInJlbW92ZShmcnVpdClcIj5cbiAgICAgIHt7ZnJ1aXR9fVxuICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmUgKm5nSWY9XCJyZW1vdmFibGVcIj5jYW5jZWw8L21hdC1pY29uPlxuICAgIDwvbWF0LWNoaXA+XG4gICAgPGlucHV0XG4gICAgICBwbGFjZWhvbGRlcj1cIk5ldyBmcnVpdC4uLlwiXG4gICAgICAjZnJ1aXRJbnB1dFxuICAgICAgW2Zvcm1Db250cm9sXT1cImZydWl0Q3RybFwiXG4gICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgICAgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiXG4gICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCJcbiAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiPlxuICA8L21hdC1jaGlwLWxpc3Q+XG4gIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCIgKG9wdGlvblNlbGVjdGVkKT1cInNlbGVjdGVkKCRldmVudClcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZnJ1aXQgb2YgZmlsdGVyZWRGcnVpdHMgfCBhc3luY1wiIFt2YWx1ZV09XCJmcnVpdFwiPlxuICAgICAge3tmcnVpdH19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1hdXRvY29tcGxldGU+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19