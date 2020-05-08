/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/chips/chips-input/chips-input-example.ts
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
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 5);
    i0.ɵɵlistener("removed", function ChipsInputExample_mat_chip_3_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r5); const fruit_r2 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.remove(fruit_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsInputExample_mat_chip_3_mat_icon_2_Template, 2, 0, "mat-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r2.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.removable);
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
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.fruits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
    } }, directives: [i1.MatFormField, i2.MatChipList, i3.NgForOf, i2.MatChipInput, i2.MatChip, i3.NgIf, i4.MatIcon, i2.MatChipRemove], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChipsInputExample, [{
        type: Component,
        args: [{
                selector: 'chips-input-example',
                templateUrl: 'chips-input-example.html',
                styleUrls: ['chips-input-example.css'],
            }]
    }], null, null); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNJbEMsbUNBQTBDO0lBQUEsc0JBQU07SUFBQSxpQkFBVzs7OztJQUg3RCxtQ0FFRTtJQUQrQixvT0FBeUI7SUFDeEQsWUFDQTtJQUFBLHVGQUEwQztJQUM1QyxpQkFBVzs7OztJQUo0Qiw4Q0FBeUIsK0JBQUE7SUFFOUQsZUFDQTtJQURBLDhDQUNBO0lBQXdCLGVBQWlCO0lBQWpCLHVDQUFpQjs7Ozs7QUREL0MsMkJBRUM7OztJQURDLHFCQUFhOzs7OztBQVdmLE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFNRSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDUix1QkFBa0IsR0FBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxXQUFNLEdBQVk7WUFDaEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQ2QsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1NBQ2hCLENBQUM7S0F3Qkg7Ozs7O0lBdEJDLEdBQUcsQ0FBQyxLQUF3Qjs7Y0FDcEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLOztjQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7UUFFekIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQztTQUN4QztRQUVELHdCQUF3QjtRQUN4QixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBWTs7Y0FDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRXhDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7O3FHQUNZLGlCQUFpQjt5RUFBakIsaUJBQWlCO1FDaEI5Qix5Q0FDRTtRQUFBLDJDQUNFO1FBQUEsNEVBRUU7UUFHRixnQ0FLRjtRQURTLGlJQUF3QixlQUFXLElBQUM7UUFKM0MsaUJBS0Y7UUFBQSxpQkFBZ0I7UUFDbEIsaUJBQWlCOzs7UUFYSCxlQUE0QjtRQUE1QixvQ0FBNEI7UUFNL0IsZUFBNEI7UUFBNUIscUNBQTRCLHlEQUFBLHdDQUFBOztrRERRMUIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2Qzs7OztJQUVDLG9DQUFlOztJQUNmLHVDQUFrQjs7SUFDbEIsc0NBQWlCOztJQUNqQixzQ0FBaUI7O0lBQ2pCLCtDQUF1RDs7SUFDdkQsbUNBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NPTU1BLCBFTlRFUn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcblxuZXhwb3J0IGludGVyZmFjZSBGcnVpdCB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgd2l0aCBpbnB1dFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1pbnB1dC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtaW5wdXQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNJbnB1dEV4YW1wbGUge1xuICB2aXNpYmxlID0gdHJ1ZTtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gIHJlbW92YWJsZSA9IHRydWU7XG4gIGFkZE9uQmx1ciA9IHRydWU7XG4gIHJlYWRvbmx5IHNlcGFyYXRvcktleXNDb2RlczogbnVtYmVyW10gPSBbRU5URVIsIENPTU1BXTtcbiAgZnJ1aXRzOiBGcnVpdFtdID0gW1xuICAgIHtuYW1lOiAnTGVtb24nfSxcbiAgICB7bmFtZTogJ0xpbWUnfSxcbiAgICB7bmFtZTogJ0FwcGxlJ30sXG4gIF07XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcblxuICAgIC8vIEFkZCBvdXIgZnJ1aXRcbiAgICBpZiAoKHZhbHVlIHx8ICcnKS50cmltKCkpIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnB1c2goe25hbWU6IHZhbHVlLnRyaW0oKX0pO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoZSBpbnB1dCB2YWx1ZVxuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZnJ1aXQ6IEZydWl0KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZydWl0cy5pbmRleE9mKGZydWl0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZydWl0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1jaGlwLWxpc3RcIj5cbiAgPG1hdC1jaGlwLWxpc3QgI2NoaXBMaXN0IGFyaWEtbGFiZWw9XCJGcnVpdCBzZWxlY3Rpb25cIj5cbiAgICA8bWF0LWNoaXAgKm5nRm9yPVwibGV0IGZydWl0IG9mIGZydWl0c1wiIFtzZWxlY3RhYmxlXT1cInNlbGVjdGFibGVcIlxuICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwicmVtb3ZhYmxlXCIgKHJlbW92ZWQpPVwicmVtb3ZlKGZydWl0KVwiPlxuICAgICAge3tmcnVpdC5uYW1lfX1cbiAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlICpuZ0lmPVwicmVtb3ZhYmxlXCI+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICA8L21hdC1jaGlwPlxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk5ldyBmcnVpdC4uLlwiXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxuICAgICAgICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCJcbiAgICAgICAgICAgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJhZGRPbkJsdXJcIlxuICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIj5cbiAgPC9tYXQtY2hpcC1saXN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==