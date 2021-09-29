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
ChipsFormControlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsFormControlExample, selectors: [["chips-form-control-example"]], decls: 21, vars: 4, consts: [[1, "example-button-container"], ["mat-raised-button", "", 3, "click"], ["appearance", "fill", 1, "example-chip-list"], ["aria-label", "Video keywords", "multiple", "", 3, "formControl"], ["chipList", ""], [3, "selected", "value", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New keyword...", 3, "matChipInputFor", "matChipInputTokenEnd"], [3, "selected", "value", "removed"]], template: function ChipsFormControlExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'chips-form-control-example', template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n\n<p>\n  <i>Select a focused chip by pressing <code>SPACE</code></i>\n</p>\n\n<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-list #chipList aria-label=\"Video keywords\" multiple [formControl]=\"formControl\">\n    <mat-chip\n        *ngFor=\"let keyword of keywords\"\n        [selected]=\"keyword\"\n        [value]=\"keyword\"\n        (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n    </mat-chip>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"chipList\"\n      (matChipInputTokenEnd)=\"addKeywordFromInput($event)\">\n  </mat-chip-list>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are selected:</b> {{formControl.value}}\n</p>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDV3ZDLG1DQUl1QztJQUFuQyw4T0FBVyxnQ0FBc0IsSUFBQztJQUNwQyxZQUNGO0lBQUEsaUJBQVc7OztJQUpQLHFDQUFvQixxQkFBQTtJQUd0QixlQUNGO0lBREUsMkNBQ0Y7O0FEZEo7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsYUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RELGdCQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBWTVDO0lBVkMsbUJBQW1CLENBQUMsS0FBd0I7UUFDMUMsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxTQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OEZBYlUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNacEMsOEJBQXNDO1FBQ3BDLGlDQUEwRDtRQUFoQyxvR0FBUyx5QkFBcUIsSUFBQztRQUFDLG9DQUFvQjtRQUFBLGlCQUFTO1FBQ3ZGLGlDQUF5RDtRQUEvQixvR0FBUyx3QkFBb0IsSUFBQztRQUFDLG1DQUFtQjtRQUFBLGlCQUFTO1FBQ3ZGLGlCQUFNO1FBRU4seUJBQUc7UUFDRCx5QkFBRztRQUFBLGtEQUFrQztRQUFBLDRCQUFNO1FBQUEscUJBQUs7UUFBQSxpQkFBTztRQUFBLGlCQUFJO1FBQzdELGlCQUFJO1FBRUosMENBQTREO1FBQzFELGtDQUFXO1FBQUEsK0JBQWM7UUFBQSxpQkFBWTtRQUNyQyw0Q0FBMEY7UUFDeEYsb0ZBTVc7UUFDWCxpQ0FHdUQ7UUFBckQsd0lBQXdCLCtCQUEyQixJQUFDO1FBSHRELGlCQUd1RDtRQUN6RCxpQkFBZ0I7UUFDbEIsaUJBQWlCO1FBRWpCLDBCQUFHO1FBQ0QsMEJBQUc7UUFBQSxxREFBb0M7UUFBQSxpQkFBSTtRQUFDLGFBQzlDO1FBQUEsaUJBQUk7OztRQWpCNEQsZ0JBQTJCO1FBQTNCLDZDQUEyQjtRQUUvRCxlQUFXO1FBQVgsc0NBQVc7UUFRakMsZUFBNEI7UUFBNUIscUNBQTRCO1FBTVksZUFDOUM7UUFEOEMsdURBQzlDOzt1RkRoQmEsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0UsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDaGlwSW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyB3aXRoIGZvcm0gY29udHJvbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1mb3JtLWNvbnRyb2wtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1mb3JtLWNvbnRyb2wtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNGb3JtQ29udHJvbEV4YW1wbGUge1xuICBrZXl3b3JkcyA9IG5ldyBTZXQoWydhbmd1bGFyJywgJ2hvdy10bycsICd0dXRvcmlhbCddKTtcbiAgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woWydhbmd1bGFyJ10pO1xuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLmtleXdvcmRzLmFkZChldmVudC52YWx1ZSk7XG4gICAgICBldmVudC5jaGlwSW5wdXQhLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmtleXdvcmRzLmRlbGV0ZShrZXl3b3JkKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJmb3JtQ29udHJvbC5kaXNhYmxlKClcIj5EaXNhYmxlIGZvcm0gY29udHJvbDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJmb3JtQ29udHJvbC5lbmFibGUoKVwiPkVuYWJsZSBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cbjwvZGl2PlxuXG48cD5cbiAgPGk+U2VsZWN0IGEgZm9jdXNlZCBjaGlwIGJ5IHByZXNzaW5nIDxjb2RlPlNQQUNFPC9jb2RlPjwvaT5cbjwvcD5cblxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1jaGlwLWxpc3RcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlZpZGVvIGtleXdvcmRzPC9tYXQtbGFiZWw+XG4gIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiVmlkZW8ga2V5d29yZHNcIiBtdWx0aXBsZSBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj5cbiAgICA8bWF0LWNoaXBcbiAgICAgICAgKm5nRm9yPVwibGV0IGtleXdvcmQgb2Yga2V5d29yZHNcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwia2V5d29yZFwiXG4gICAgICAgIFt2YWx1ZV09XCJrZXl3b3JkXCJcbiAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZChrZXl3b3JkKVwiPlxuICAgICAge3trZXl3b3JkfX1cbiAgICA8L21hdC1jaGlwPlxuICAgIDxpbnB1dFxuICAgICAgcGxhY2Vob2xkZXI9XCJOZXcga2V5d29yZC4uLlwiXG4gICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcbiAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudClcIj5cbiAgPC9tYXQtY2hpcC1saXN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPHA+XG4gIDxiPlRoZSBmb2xsb3dpbmcga2V5d29yZHMgYXJlIHNlbGVjdGVkOjwvYj4ge3tmb3JtQ29udHJvbC52YWx1ZX19XG48L3A+XG4iXX0=