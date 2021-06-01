import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
function ChipsFormControlExample_mat_chip_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 7);
    i0.ɵɵlistener("removed", function ChipsFormControlExample_mat_chip_12_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const keyword_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.removeKeyword(keyword_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const keyword_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", keyword_r2, " ");
} }
/**
 * @title Chips with form control
 */
export class ChipsFormControlExample {
    constructor() {
        this.keywords = new Set(['angular', 'how-to', 'tutorial']);
        this.formControl = new FormControl();
    }
    addKeywordFromInput(event) {
        if (event.value) {
            this.keywords.add(event.value);
            event.chipInput.clear();
        }
    }
    removeKeyword(keyword) {
        this.keywords.delete(keyword);
    }
}
ChipsFormControlExample.ɵfac = function ChipsFormControlExample_Factory(t) { return new (t || ChipsFormControlExample)(); };
ChipsFormControlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsFormControlExample, selectors: [["chips-form-control-example"]], decls: 14, vars: 4, consts: [[1, "example-button-container"], ["mat-raised-button", "", 3, "click"], ["appearance", "fill", 1, "example-chip-list"], ["aria-label", "Video keywords", "multiple", "", 3, "formControl"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New keyword...", 3, "matChipInputFor", "matChipInputTokenEnd"], [3, "removed"]], template: function ChipsFormControlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ChipsFormControlExample_Template_button_click_1_listener() { return ctx.formControl.disable(); });
        i0.ɵɵtext(2, "Disable form control");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function ChipsFormControlExample_Template_button_click_3_listener() { return ctx.formControl.enable(); });
        i0.ɵɵtext(4, "Enable form control");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field", 2);
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Video keywords");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-chip-list", 3, 4);
        i0.ɵɵtemplate(12, ChipsFormControlExample_mat_chip_12_Template, 2, 1, "mat-chip", 5);
        i0.ɵɵelementStart(13, "input", 6);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsFormControlExample_Template_input_matChipInputTokenEnd_13_listener($event) { return ctx.addKeywordFromInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(11);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" Selected keywords: ", ctx.formControl.value, "\n");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.formControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.keywords);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matChipInputFor", _r0);
    } }, directives: [i1.MatButton, i2.MatFormField, i2.MatLabel, i3.MatChipList, i4.NgControlStatus, i4.FormControlDirective, i5.NgForOf, i3.MatChipInput, i3.MatChip], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsFormControlExample, [{
        type: Component,
        args: [{
                selector: 'chips-form-control-example',
                templateUrl: 'chips-form-control-example.html',
                styleUrls: ['chips-form-control-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDV3ZDLG1DQUVxQztJQUFuQyxrUkFBa0M7SUFDbEMsWUFDRjtJQUFBLGlCQUFXOzs7SUFEVCxlQUNGO0lBREUsMkNBQ0Y7O0FEWko7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsYUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RELGdCQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztLQVlqQztJQVZDLG1CQUFtQixDQUFDLEtBQXdCO1FBQzFDLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OzhGQWJVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDWnBDLDhCQUFzQztRQUNwQyxpQ0FBMEQ7UUFBaEMsb0dBQVMseUJBQXFCLElBQUM7UUFBQyxvQ0FBb0I7UUFBQSxpQkFBUztRQUN2RixpQ0FBeUQ7UUFBL0Isb0dBQVMsd0JBQW9CLElBQUM7UUFBQyxtQ0FBbUI7UUFBQSxpQkFBUztRQUN2RixpQkFBTTtRQUVOLHlCQUFHO1FBQ0QsWUFDRjtRQUFBLGlCQUFJO1FBRUoseUNBQTREO1FBQzFELGlDQUFXO1FBQUEsOEJBQWM7UUFBQSxpQkFBWTtRQUNyQyw0Q0FBMEY7UUFDeEYsb0ZBSVc7UUFDWCxpQ0FHdUQ7UUFBckQsd0lBQXdCLCtCQUEyQixJQUFDO1FBSHRELGlCQUd1RDtRQUN6RCxpQkFBZ0I7UUFDbEIsaUJBQWlCOzs7UUFoQmYsZUFDRjtRQURFLDBFQUNGO1FBSWdFLGVBQTJCO1FBQTNCLDZDQUEyQjtRQUVqRSxlQUFXO1FBQVgsc0NBQVc7UUFNL0IsZUFBNEI7UUFBNUIscUNBQTRCOzt1RkRQckIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgd2l0aCBmb3JtIGNvbnRyb2xcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRm9ybUNvbnRyb2xFeGFtcGxlIHtcbiAga2V5d29yZHMgPSBuZXcgU2V0KFsnYW5ndWxhcicsICdob3ctdG8nLCAndHV0b3JpYWwnXSk7XG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudmFsdWUpIHtcbiAgICAgIHRoaXMua2V5d29yZHMuYWRkKGV2ZW50LnZhbHVlKTtcbiAgICAgIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHRoaXMua2V5d29yZHMuZGVsZXRlKGtleXdvcmQpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImZvcm1Db250cm9sLmRpc2FibGUoKVwiPkRpc2FibGUgZm9ybSBjb250cm9sPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImZvcm1Db250cm9sLmVuYWJsZSgpXCI+RW5hYmxlIGZvcm0gY29udHJvbDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxwPlxuICBTZWxlY3RlZCBrZXl3b3Jkczoge3tmb3JtQ29udHJvbC52YWx1ZX19XG48L3A+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5WaWRlbyBrZXl3b3JkczwvbWF0LWxhYmVsPlxuICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIlZpZGVvIGtleXdvcmRzXCIgbXVsdGlwbGUgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCI+XG4gICAgPG1hdC1jaGlwXG4gICAgICAqbmdGb3I9XCJsZXQga2V5d29yZCBvZiBrZXl3b3Jkc1wiXG4gICAgICAocmVtb3ZlZCk9XCJyZW1vdmVLZXl3b3JkKGtleXdvcmQpXCI+XG4gICAgICB7e2tleXdvcmR9fVxuICAgIDwvbWF0LWNoaXA+XG4gICAgPGlucHV0XG4gICAgICBwbGFjZWhvbGRlcj1cIk5ldyBrZXl3b3JkLi4uXCJcbiAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxuICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50KVwiPlxuICA8L21hdC1jaGlwLWxpc3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19