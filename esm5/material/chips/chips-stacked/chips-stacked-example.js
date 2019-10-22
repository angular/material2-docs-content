import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
import * as i2 from "@angular/common";
function ChipsStackedExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var chip_r19 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r19.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r19.name, " ");
} }
/**
 * @title Stacked chips
 */
var ChipsStackedExample = /** @class */ (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-stacked-example',
                    templateUrl: 'chips-stacked-example.html',
                    styleUrls: ['chips-stacked-example.css'],
                },] },
    ];
    ChipsStackedExample.ngFactoryDef = function ChipsStackedExample_Factory(t) { return new (t || ChipsStackedExample)(); };
    ChipsStackedExample.ngComponentDef = i0.ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-chip-list", 0);
            i0.ɵɵtemplate(1, ChipsStackedExample_mat_chip_1_Template, 2, 2, "mat-chip", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.availableColors);
        } }, directives: [i1.MatChipList, i2.NgForOf, i1.MatChip], styles: ["mat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}"] });
    return ChipsStackedExample;
}());
export { ChipsStackedExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(ChipsStackedExample, [{
        type: Component,
        args: [{
                selector: 'chips-stacked-example',
                templateUrl: 'chips-stacked-example.html',
                styleUrls: ['chips-stacked-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDdEMsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7OztJQUY2QyxzQ0FBb0I7SUFDMUUsZUFDRjtJQURFLDhDQUNGOztBREtGOztHQUVHO0FBQ0g7SUFBQTtRQU1FLG9CQUFlLEdBQWdCO1lBQzdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ2hDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQ2pDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1NBQzlCLENBQUM7S0FDSDs7Z0JBWkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN6Qzs7a0dBQ1ksbUJBQW1CO3NFQUFuQixtQkFBbUI7WUNoQmhDLHdDQUNFO1lBQUEsOEVBQ0U7WUFFSixpQkFBZ0I7O1lBSEosZUFBb0M7WUFBcEMsNkNBQW9DOzs4QkREaEQ7Q0F1QkMsQUFaRCxJQVlDO1NBUFksbUJBQW1CO21DQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoaXBDb2xvciB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgU3RhY2tlZCBjaGlwc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1zdGFja2VkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNTdGFja2VkRXhhbXBsZSB7XG4gIGF2YWlsYWJsZUNvbG9yczogQ2hpcENvbG9yW10gPSBbXG4gICAge25hbWU6ICdub25lJywgY29sb3I6IHVuZGVmaW5lZH0sXG4gICAge25hbWU6ICdQcmltYXJ5JywgY29sb3I6ICdwcmltYXJ5J30sXG4gICAge25hbWU6ICdBY2NlbnQnLCBjb2xvcjogJ2FjY2VudCd9LFxuICAgIHtuYW1lOiAnV2FybicsIGNvbG9yOiAnd2Fybid9XG4gIF07XG59XG4iLCI8bWF0LWNoaXAtbGlzdCBjbGFzcz1cIm1hdC1jaGlwLWxpc3Qtc3RhY2tlZFwiIGFyaWEtbGFiZWw9XCJDb2xvciBzZWxlY3Rpb25cIj5cbiAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCBjaGlwIG9mIGF2YWlsYWJsZUNvbG9yc1wiIHNlbGVjdGVkIFtjb2xvcl09XCJjaGlwLmNvbG9yXCI+XG4gICAge3tjaGlwLm5hbWV9fVxuICA8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0PlxuIl19