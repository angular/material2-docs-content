import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
function ChipsFormControlExample_mat_chip_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 7);
    i0.ɵɵlistener("removed", function ChipsFormControlExample_mat_chip_15_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const keyword_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.removeKeyword(keyword_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const keyword_r2 = ctx.$implicit;
    i0.ɵɵproperty("selected", keyword_r2)("value", keyword_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", keyword_r2, " ");
} }
/**
 * @title Chips with form control
 */
export class ChipsFormControlExample {
    constructor() {
        this.keywords = new Set(['angular', 'how-to', 'tutorial']);
        this.formControl = new FormControl(['angular']);
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
ChipsFormControlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsFormControlExample, selectors: [["chips-form-control-example"]], decls: 21, vars: 4, consts: [[1, "example-button-container"], ["mat-raised-button", "", 3, "click"], [1, "example-chip-list"], ["aria-label", "Video keywords", "multiple", "", 3, "formControl"], ["chipList", ""], [3, "selected", "value", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New keyword...", 3, "matChipInputFor", "matChipInputTokenEnd"], [3, "selected", "value", "removed"]], template: function ChipsFormControlExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(6, "i");
        i0.ɵɵtext(7, "Select a focused chip by pressing ");
        i0.ɵɵelementStart(8, "code");
        i0.ɵɵtext(9, "SPACE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-form-field", 2);
        i0.ɵɵelementStart(11, "mat-label");
        i0.ɵɵtext(12, "Video keywords");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-chip-list", 3, 4);
        i0.ɵɵtemplate(15, ChipsFormControlExample_mat_chip_15_Template, 2, 3, "mat-chip", 5);
        i0.ɵɵelementStart(16, "input", 6);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsFormControlExample_Template_input_matChipInputTokenEnd_16_listener($event) { return ctx.addKeywordFromInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p");
        i0.ɵɵelementStart(18, "b");
        i0.ɵɵtext(19, "The following keywords are selected:");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(14);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("formControl", ctx.formControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.keywords);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matChipInputFor", _r0);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.formControl.value, "\n");
    } }, directives: [i1.MatButton, i2.MatFormField, i2.MatLabel, i3.MatChipList, i4.NgControlStatus, i4.FormControlDirective, i5.NgForOf, i3.MatChipInput, i3.MatChip], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsFormControlExample, [{
        type: Component,
        args: [{
                selector: 'chips-form-control-example',
                templateUrl: 'chips-form-control-example.html',
                styleUrls: ['chips-form-control-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDV3ZDLG1DQUl1QztJQUFuQyxrUkFBa0M7SUFDcEMsWUFDRjtJQUFBLGlCQUFXOzs7SUFKUCxxQ0FBb0IscUJBQUE7SUFHdEIsZUFDRjtJQURFLDJDQUNGOztBRGRKOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLGFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN0RCxnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztLQVk1QztJQVZDLG1CQUFtQixDQUFDLEtBQXdCO1FBQzFDLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OzhGQWJVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDWnBDLDhCQUFzQztRQUNwQyxpQ0FBMEQ7UUFBaEMsb0dBQVMseUJBQXFCLElBQUM7UUFBQyxvQ0FBb0I7UUFBQSxpQkFBUztRQUN2RixpQ0FBeUQ7UUFBL0Isb0dBQVMsd0JBQW9CLElBQUM7UUFBQyxtQ0FBbUI7UUFBQSxpQkFBUztRQUN2RixpQkFBTTtRQUVOLHlCQUFHO1FBQ0QseUJBQUc7UUFBQSxrREFBa0M7UUFBQSw0QkFBTTtRQUFBLHFCQUFLO1FBQUEsaUJBQU87UUFBQSxpQkFBSTtRQUM3RCxpQkFBSTtRQUVKLDBDQUEwQztRQUN4QyxrQ0FBVztRQUFBLCtCQUFjO1FBQUEsaUJBQVk7UUFDckMsNENBQTBGO1FBQ3hGLG9GQU1XO1FBQ1gsaUNBR3VEO1FBQXJELHdJQUF3QiwrQkFBMkIsSUFBQztRQUh0RCxpQkFHdUQ7UUFDekQsaUJBQWdCO1FBQ2xCLGlCQUFpQjtRQUVqQiwwQkFBRztRQUNELDBCQUFHO1FBQUEscURBQW9DO1FBQUEsaUJBQUk7UUFBQyxhQUM5QztRQUFBLGlCQUFJOzs7UUFqQjRELGdCQUEyQjtRQUEzQiw2Q0FBMkI7UUFFL0QsZUFBVztRQUFYLHNDQUFXO1FBUWpDLGVBQTRCO1FBQTVCLHFDQUE0QjtRQU1ZLGVBQzlDO1FBRDhDLHVEQUM5Qzs7dUZEaEJhLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoaXBJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIHdpdGggZm9ybSBjb250cm9sXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1mb3JtLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0Zvcm1Db250cm9sRXhhbXBsZSB7XG4gIGtleXdvcmRzID0gbmV3IFNldChbJ2FuZ3VsYXInLCAnaG93LXRvJywgJ3R1dG9yaWFsJ10pO1xuICBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChbJ2FuZ3VsYXInXSk7XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudmFsdWUpIHtcbiAgICAgIHRoaXMua2V5d29yZHMuYWRkKGV2ZW50LnZhbHVlKTtcbiAgICAgIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHRoaXMua2V5d29yZHMuZGVsZXRlKGtleXdvcmQpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImZvcm1Db250cm9sLmRpc2FibGUoKVwiPkRpc2FibGUgZm9ybSBjb250cm9sPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImZvcm1Db250cm9sLmVuYWJsZSgpXCI+RW5hYmxlIGZvcm0gY29udHJvbDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxwPlxuICA8aT5TZWxlY3QgYSBmb2N1c2VkIGNoaXAgYnkgcHJlc3NpbmcgPGNvZGU+U1BBQ0U8L2NvZGU+PC9pPlxuPC9wPlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWNoaXAtbGlzdFwiPlxuICA8bWF0LWxhYmVsPlZpZGVvIGtleXdvcmRzPC9tYXQtbGFiZWw+XG4gIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiVmlkZW8ga2V5d29yZHNcIiBtdWx0aXBsZSBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj5cbiAgICA8bWF0LWNoaXBcbiAgICAgICAgKm5nRm9yPVwibGV0IGtleXdvcmQgb2Yga2V5d29yZHNcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwia2V5d29yZFwiXG4gICAgICAgIFt2YWx1ZV09XCJrZXl3b3JkXCJcbiAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZChrZXl3b3JkKVwiPlxuICAgICAge3trZXl3b3JkfX1cbiAgICA8L21hdC1jaGlwPlxuICAgIDxpbnB1dFxuICAgICAgcGxhY2Vob2xkZXI9XCJOZXcga2V5d29yZC4uLlwiXG4gICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcbiAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudClcIj5cbiAgPC9tYXQtY2hpcC1saXN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPHA+XG4gIDxiPlRoZSBmb2xsb3dpbmcga2V5d29yZHMgYXJlIHNlbGVjdGVkOjwvYj4ge3tmb3JtQ29udHJvbC52YWx1ZX19XG48L3A+XG4iXX0=