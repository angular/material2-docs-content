import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
import * as i2 from "@angular/common";
function ChipsStackedExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r1 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r1.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r1.name, " ");
} }
/**
 * @title Stacked chips
 */
export class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.ɵfac = function ChipsStackedExample_Factory(t) { return new (t || ChipsStackedExample)(); };
ChipsStackedExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵtemplate(1, ChipsStackedExample_mat_chip_1_Template, 2, 2, "mat-chip", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.availableColors);
    } }, directives: [i1.MatChipList, i2.NgForOf, i1.MatChip], styles: ["mat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsStackedExample, [{
        type: Component,
        args: [{ selector: 'chips-stacked-example', template: "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n", styles: ["mat-chip {\n  max-width: 200px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1zdGFja2VkL2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQ3RDLG1DQUE2RTtJQUMzRSxZQUNGO0lBQUEsaUJBQVc7OztJQUY2QyxxQ0FBb0I7SUFDMUUsZUFDRjtJQURFLDZDQUNGOztBREtGOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLG9CQUFlLEdBQWdCO1lBQzdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ2hDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQ2pDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1NBQzlCLENBQUM7S0FDSDs7c0ZBUFksbUJBQW1CO3NFQUFuQixtQkFBbUI7UUNoQmhDLHdDQUEwRTtRQUN4RSw4RUFFVztRQUNiLGlCQUFnQjs7UUFIYSxlQUFrQjtRQUFsQiw2Q0FBa0I7O3VGRGVsQyxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hpcENvbG9yIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGFja2VkIGNoaXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc1N0YWNrZWRFeGFtcGxlIHtcbiAgYXZhaWxhYmxlQ29sb3JzOiBDaGlwQ29sb3JbXSA9IFtcbiAgICB7bmFtZTogJ25vbmUnLCBjb2xvcjogdW5kZWZpbmVkfSxcbiAgICB7bmFtZTogJ1ByaW1hcnknLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICB7bmFtZTogJ0FjY2VudCcsIGNvbG9yOiAnYWNjZW50J30sXG4gICAge25hbWU6ICdXYXJuJywgY29sb3I6ICd3YXJuJ31cbiAgXTtcbn1cbiIsIjxtYXQtY2hpcC1saXN0IGNsYXNzPVwibWF0LWNoaXAtbGlzdC1zdGFja2VkXCIgYXJpYS1sYWJlbD1cIkNvbG9yIHNlbGVjdGlvblwiPlxuICA8bWF0LWNoaXAgKm5nRm9yPVwibGV0IGNoaXAgb2YgYXZhaWxhYmxlQ29sb3JzXCIgc2VsZWN0ZWQgW2NvbG9yXT1cImNoaXAuY29sb3JcIj5cbiAgICB7e2NoaXAubmFtZX19XG4gIDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLWxpc3Q+XG4iXX0=