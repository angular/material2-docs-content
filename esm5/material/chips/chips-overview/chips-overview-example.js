import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Basic chips
 */
var ChipsOverviewExample = /** @class */ (function () {
    function ChipsOverviewExample() {
    }
    ChipsOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-overview-example',
                    templateUrl: 'chips-overview-example.html',
                    styleUrls: ['chips-overview-example.css'],
                },] },
    ];
    ChipsOverviewExample.ɵfac = function ChipsOverviewExample_Factory(t) { return new (t || ChipsOverviewExample)(); };
    ChipsOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsOverviewExample, selectors: [["chips-overview-example"]], decls: 9, vars: 0, consts: [["aria-label", "Fish selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function ChipsOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-chip-list", 0);
            i0.ɵɵelementStart(1, "mat-chip");
            i0.ɵɵtext(2, "One fish");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-chip");
            i0.ɵɵtext(4, "Two fish");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-chip", 1);
            i0.ɵɵtext(6, "Primary fish");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-chip", 2);
            i0.ɵɵtext(8, "Accent fish");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatChipList, i1.MatChip], styles: [""] });
    return ChipsOverviewExample;
}());
export { ChipsOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChipsOverviewExample, [{
        type: Component,
        args: [{
                selector: 'chips-overview-example',
                templateUrl: 'chips-overview-example.html',
                styleUrls: ['chips-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLW92ZXJ2aWV3L2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1vdmVydmlldy9jaGlwcy1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtvQzs7Z0JBTG5DLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDMUM7OzRGQUNZLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lDVmpDLHdDQUNFO1lBQUEsZ0NBQVU7WUFBQSx3QkFBUTtZQUFBLGlCQUFXO1lBQzdCLGdDQUFVO1lBQUEsd0JBQVE7WUFBQSxpQkFBVztZQUM3QixtQ0FBbUM7WUFBQSw0QkFBWTtZQUFBLGlCQUFXO1lBQzFELG1DQUFrQztZQUFBLDJCQUFXO1lBQUEsaUJBQVc7WUFDMUQsaUJBQWdCOzsrQkRMaEI7Q0FVb0MsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBjaGlwc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtY2hpcC1saXN0IGFyaWEtbGFiZWw9XCJGaXNoIHNlbGVjdGlvblwiPlxuICA8bWF0LWNoaXA+T25lIGZpc2g8L21hdC1jaGlwPlxuICA8bWF0LWNoaXA+VHdvIGZpc2g8L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgY29sb3I9XCJwcmltYXJ5XCIgc2VsZWN0ZWQ+UHJpbWFyeSBmaXNoPC9tYXQtY2hpcD5cbiAgPG1hdC1jaGlwIGNvbG9yPVwiYWNjZW50XCIgc2VsZWN0ZWQ+QWNjZW50IGZpc2g8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0PlxuIl19