/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
function ChipsInputExample_mat_chip_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 7);
    i0.ɵɵtext(1, "cancel");
    i0.ɵɵelementEnd();
} }
function ChipsInputExample_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 5);
    i0.ɵɵlistener("removed", function ChipsInputExample_mat_chip_3_Template_mat_chip_removed_0_listener($event) { i0.ɵɵrestoreView(_r17); const fruit_r14 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.remove(fruit_r14); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsInputExample_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectable", ctx_r13.selectable)("removable", ctx_r13.removable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r14.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r13.removable);
} }
/**
 * @record
 */
export function Fruit() { }
if (false) {
    /** @type {?} */
    Fruit.prototype.name;
}
/**
 * \@title Chips with input
 */
export class ChipsInputExample {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
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
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
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
}
ChipsInputExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-input-example',
                templateUrl: 'chips-input-example.html',
                styleUrls: ['chips-input-example.css'],
            },] },
];
/** @nocollapse */ ChipsInputExample.ɵfac = function ChipsInputExample_Factory(t) { return new (t || ChipsInputExample)(); };
/** @nocollapse */ ChipsInputExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsInputExample, selectors: [["chips-input-example"]], decls: 5, vars: 4, consts: [[1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function ChipsInputExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-chip-list", 1, 2);
        i0.ɵɵtemplate(3, ChipsInputExample_mat_chip_3_Template, 3, 4, "mat-chip", 3);
        i0.ɵɵelementStart(4, "input", 4);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsInputExample_Template_input_matChipInputTokenEnd_4_listener($event) { return ctx.add($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r12 = i0.ɵɵreference(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.fruits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matChipInputFor", _r12)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
    } }, directives: [i1.MatFormField, i2.MatChipList, i3.NgForOf, i2.MatChipInput, i2.MatChip, i3.NgIf, i4.MatIcon, i2.MatChipRemove], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ChipsInputExample, [{
        type: Component,
        args: [{
                selector: 'chips-input-example',
                templateUrl: 'chips-input-example.html',
                styleUrls: ['chips-input-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ChipsInputExample.prototype.visible;
    /** @type {?} */
    ChipsInputExample.prototype.selectable;
    /** @type {?} */
    ChipsInputExample.prototype.removable;
    /** @type {?} */
    ChipsInputExample.prototype.addOnBlur;
    /** @type {?} */
    ChipsInputExample.prototype.separatorKeysCodes;
    /** @type {?} */
    ChipsInputExample.prototype.fruits;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0lsQyxtQ0FBMEM7SUFBQSxzQkFBTTtJQUFBLGlCQUFXOzs7O0lBSDdELG1DQUVFO0lBRCtCLCtPQUF5QjtJQUN4RCxZQUNBO0lBQUEsdUZBQTBDO0lBQzVDLGlCQUFXOzs7O0lBSjRCLCtDQUF5QixnQ0FBQTtJQUU5RCxlQUNBO0lBREEsK0NBQ0E7SUFBd0IsZUFBaUI7SUFBakIsd0NBQWlCOzs7OztBREQvQywyQkFFQzs7O0lBREMscUJBQWE7Ozs7O0FBV2YsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU1FLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNSLHVCQUFrQixHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELFdBQU0sR0FBWTtZQUNoQixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDZixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7WUFDZCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7U0FDaEIsQ0FBQztLQXdCSDs7Ozs7SUF0QkMsR0FBRyxDQUFDLEtBQXdCOztjQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7O2NBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSztRQUV6QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFZOztjQUNYLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFeEMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2Qzs7a0ZBQ1ksaUJBQWlCO3NEQUFqQixpQkFBaUI7UUNoQjlCLHlDQUNFO1FBQUEsMkNBQ0U7UUFBQSw0RUFFRTtRQUdGLGdDQUtGO1FBRFMsaUlBQXdCLGVBQVcsSUFBQztRQUozQyxpQkFLRjtRQUFBLGlCQUFnQjtRQUNsQixpQkFBaUI7OztRQVhILGVBQTRCO1FBQTVCLG9DQUE0QjtRQU0vQixlQUE0QjtRQUE1QixzQ0FBNEIseURBQUEsd0NBQUE7O21DRFExQixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOzs7O0lBRUMsb0NBQWU7O0lBQ2YsdUNBQWtCOztJQUNsQixzQ0FBaUI7O0lBQ2pCLHNDQUFpQjs7SUFDakIsK0NBQXVEOztJQUN2RCxtQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDaGlwSW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZydWl0IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyB3aXRoIGlucHV0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWlucHV0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1pbnB1dC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0lucHV0RXhhbXBsZSB7XG4gIHZpc2libGUgPSB0cnVlO1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgYWRkT25CbHVyID0gdHJ1ZTtcbiAgcmVhZG9ubHkgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xuICBmcnVpdHM6IEZydWl0W10gPSBbXG4gICAge25hbWU6ICdMZW1vbid9LFxuICAgIHtuYW1lOiAnTGltZSd9LFxuICAgIHtuYW1lOiAnQXBwbGUnfSxcbiAgXTtcblxuICBhZGQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXG4gICAgLy8gQWRkIG91ciBmcnVpdFxuICAgIGlmICgodmFsdWUgfHwgJycpLnRyaW0oKSkge1xuICAgICAgdGhpcy5mcnVpdHMucHVzaCh7bmFtZTogdmFsdWUudHJpbSgpfSk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShmcnVpdDogRnJ1aXQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZnJ1aXRzLmluZGV4T2YoZnJ1aXQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWNoaXAtbGlzdFwiPlxuICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIkZydWl0IHNlbGVjdGlvblwiPlxuICAgIDxtYXQtY2hpcCAqbmdGb3I9XCJsZXQgZnJ1aXQgb2YgZnJ1aXRzXCIgW3NlbGVjdGFibGVdPVwic2VsZWN0YWJsZVwiXG4gICAgICAgICAgICAgW3JlbW92YWJsZV09XCJyZW1vdmFibGVcIiAocmVtb3ZlZCk9XCJyZW1vdmUoZnJ1aXQpXCI+XG4gICAgICB7e2ZydWl0Lm5hbWV9fVxuICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmUgKm5nSWY9XCJyZW1vdmFibGVcIj5jYW5jZWw8L21hdC1pY29uPlxuICAgIDwvbWF0LWNoaXA+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTmV3IGZydWl0Li4uXCJcbiAgICAgICAgICAgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxuICAgICAgICAgICBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cImFkZE9uQmx1clwiXG4gICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiPlxuICA8L21hdC1jaGlwLWxpc3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19