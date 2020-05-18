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
let ChipsInputExample = /** @class */ (() => {
    /**
     * \@title Chips with input
     */
    class ChipsInputExample {
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
    return ChipsInputExample;
})();
export { ChipsInputExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNJbEMsbUNBQTBDO0lBQUEsc0JBQU07SUFBQSxpQkFBVzs7OztJQUg3RCxtQ0FFRTtJQUQrQixvT0FBeUI7SUFDeEQsWUFDQTtJQUFBLHVGQUEwQztJQUM1QyxpQkFBVzs7OztJQUo0Qiw4Q0FBeUIsK0JBQUE7SUFFOUQsZUFDQTtJQURBLDhDQUNBO0lBQXdCLGVBQWlCO0lBQWpCLHVDQUFpQjs7Ozs7QUREL0MsMkJBRUM7OztJQURDLHFCQUFhOzs7OztBQU1mOzs7O0lBQUEsTUFLYSxpQkFBaUI7UUFMOUI7WUFNRSxZQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsZUFBVSxHQUFHLElBQUksQ0FBQztZQUNsQixjQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7WUFDUix1QkFBa0IsR0FBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RCxXQUFNLEdBQVk7Z0JBQ2hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztnQkFDZixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7Z0JBQ2QsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO2FBQ2hCLENBQUM7U0F3Qkg7Ozs7O1FBdEJDLEdBQUcsQ0FBQyxLQUF3Qjs7a0JBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSzs7a0JBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSztZQUV6QixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQzthQUN4QztZQUVELHdCQUF3QjtZQUN4QixJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUM7Ozs7O1FBRUQsTUFBTSxDQUFDLEtBQVk7O2tCQUNYLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFFeEMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUM7OztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUN2Qzs7eUdBQ1ksaUJBQWlCOzZFQUFqQixpQkFBaUI7WUNoQjlCLHlDQUNFO1lBQUEsMkNBQ0U7WUFBQSw0RUFFRTtZQUdGLGdDQUtGO1lBRFMsaUlBQXdCLGVBQVcsSUFBQztZQUozQyxpQkFLRjtZQUFBLGlCQUFnQjtZQUNsQixpQkFBaUI7OztZQVhILGVBQTRCO1lBQTVCLG9DQUE0QjtZQU0vQixlQUE0QjtZQUE1QixxQ0FBNEIseURBQUEsd0NBQUE7OzRCRFJ2QztLQWtEQztTQWxDWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7Ozs7SUFFQyxvQ0FBZTs7SUFDZix1Q0FBa0I7O0lBQ2xCLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQiwrQ0FBdUQ7O0lBQ3ZELG1DQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT01NQSwgRU5URVJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoaXBJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnJ1aXQge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIHdpdGggaW5wdXRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtaW5wdXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtaW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWlucHV0LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzSW5wdXRFeGFtcGxlIHtcbiAgdmlzaWJsZSA9IHRydWU7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICByZW1vdmFibGUgPSB0cnVlO1xuICBhZGRPbkJsdXIgPSB0cnVlO1xuICByZWFkb25seSBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQV07XG4gIGZydWl0czogRnJ1aXRbXSA9IFtcbiAgICB7bmFtZTogJ0xlbW9uJ30sXG4gICAge25hbWU6ICdMaW1lJ30sXG4gICAge25hbWU6ICdBcHBsZSd9LFxuICBdO1xuXG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG5cbiAgICAvLyBBZGQgb3VyIGZydWl0XG4gICAgaWYgKCh2YWx1ZSB8fCAnJykudHJpbSgpKSB7XG4gICAgICB0aGlzLmZydWl0cy5wdXNoKHtuYW1lOiB2YWx1ZS50cmltKCl9KTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB0aGUgaW5wdXQgdmFsdWVcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGZydWl0OiBGcnVpdCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5mcnVpdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCI+XG4gIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiRnJ1aXQgc2VsZWN0aW9uXCI+XG4gICAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCBmcnVpdCBvZiBmcnVpdHNcIiBbc2VsZWN0YWJsZV09XCJzZWxlY3RhYmxlXCJcbiAgICAgICAgICAgICBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiIChyZW1vdmVkKT1cInJlbW92ZShmcnVpdClcIj5cbiAgICAgIHt7ZnJ1aXQubmFtZX19XG4gICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZSAqbmdJZj1cInJlbW92YWJsZVwiPmNhbmNlbDwvbWF0LWljb24+XG4gICAgPC9tYXQtY2hpcD5cbiAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOZXcgZnJ1aXQuLi5cIlxuICAgICAgICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcbiAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwiYWRkT25CbHVyXCJcbiAgICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZCgkZXZlbnQpXCI+XG4gIDwvbWF0LWNoaXAtbGlzdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=