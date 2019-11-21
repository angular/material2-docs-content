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
    ChipsStackedExample.ɵfac = function ChipsStackedExample_Factory(t) { return new (t || ChipsStackedExample)(); };
    ChipsStackedExample.ɵcmp = i0.ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChipsStackedExample, [{
        type: Component,
        args: [{
                selector: 'chips-stacked-example',
                templateUrl: 'chips-stacked-example.html',
                styleUrls: ['chips-stacked-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1zdGFja2VkL2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQ3RDLG1DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXOzs7SUFGNkMsc0NBQW9CO0lBQzFFLGVBQ0Y7SUFERSw4Q0FDRjs7QURLRjs7R0FFRztBQUNIO0lBQUE7UUFNRSxvQkFBZSxHQUFnQjtZQUM3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUNqQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztTQUM5QixDQUFDO0tBQ0g7O2dCQVpBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxXQUFXLEVBQUUsNEJBQTRCO29CQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDekM7OzBGQUNZLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDaEJoQyx3Q0FDRTtZQUFBLDhFQUNFO1lBRUosaUJBQWdCOztZQUhKLGVBQW9DO1lBQXBDLDZDQUFvQzs7OEJERGhEO0NBdUJDLEFBWkQsSUFZQztTQVBZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGlwQ29sb3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG59XG5cbi8qKlxuICogQHRpdGxlIFN0YWNrZWQgY2hpcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1zdGFja2VkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1zdGFja2VkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzU3RhY2tlZEV4YW1wbGUge1xuICBhdmFpbGFibGVDb2xvcnM6IENoaXBDb2xvcltdID0gW1xuICAgIHtuYW1lOiAnbm9uZScsIGNvbG9yOiB1bmRlZmluZWR9LFxuICAgIHtuYW1lOiAnUHJpbWFyeScsIGNvbG9yOiAncHJpbWFyeSd9LFxuICAgIHtuYW1lOiAnQWNjZW50JywgY29sb3I6ICdhY2NlbnQnfSxcbiAgICB7bmFtZTogJ1dhcm4nLCBjb2xvcjogJ3dhcm4nfVxuICBdO1xufVxuIiwiPG1hdC1jaGlwLWxpc3QgY2xhc3M9XCJtYXQtY2hpcC1saXN0LXN0YWNrZWRcIiBhcmlhLWxhYmVsPVwiQ29sb3Igc2VsZWN0aW9uXCI+XG4gIDxtYXQtY2hpcCAqbmdGb3I9XCJsZXQgY2hpcCBvZiBhdmFpbGFibGVDb2xvcnNcIiBzZWxlY3RlZCBbY29sb3JdPVwiY2hpcC5jb2xvclwiPlxuICAgIHt7Y2hpcC5uYW1lfX1cbiAgPC9tYXQtY2hpcD5cbjwvbWF0LWNoaXAtbGlzdD5cbiJdfQ==