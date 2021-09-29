import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
function BottomSheetHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Hello from the bottom sheet!\n");
} }
/**
 * @title Testing with MatBottomSheetHarness
 */
export class BottomSheetHarnessExample {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    open(config) {
        return this.bottomSheet.open(this.template, config);
    }
}
BottomSheetHarnessExample.ɵfac = function BottomSheetHarnessExample_Factory(t) { return new (t || BottomSheetHarnessExample)(i0.ɵɵdirectiveInject(i1.MatBottomSheet)); };
BottomSheetHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomSheetHarnessExample, selectors: [["bottom-sheet-harness-example"]], viewQuery: function BottomSheetHarnessExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, decls: 1, vars: 0, template: function BottomSheetHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BottomSheetHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheetHarnessExample, [{
        type: Component,
        args: [{ selector: 'bottom-sheet-harness-example', template: "<ng-template>\n  Hello from the bottom sheet!\n</ng-template>\n" }]
    }], function () { return [{ type: i1.MatBottomSheet }]; }, { template: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtaGFybmVzcy9ib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1oYXJuZXNzL2JvdHRvbS1zaGVldC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBdUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztJQ0FsRiwrQ0FDRjs7QURDQTs7R0FFRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFHcEMsWUFBcUIsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBQUcsQ0FBQztJQUVwRCxJQUFJLENBQUMsTUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2tHQVBVLHlCQUF5Qjs0RUFBekIseUJBQXlCO3VCQUN6QixXQUFXOzs7OztRQ1h4Qix1RkFFYzs7dUZEUUQseUJBQXlCO2NBSnJDLFNBQVM7MkJBQ0UsOEJBQThCO2lFQUloQixRQUFRO2tCQUEvQixTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldENvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEJvdHRvbVNoZWV0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldEhhcm5lc3NFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7fVxuXG4gIG9wZW4oY29uZmlnPzogTWF0Qm90dG9tU2hlZXRDb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b21TaGVldC5vcGVuKHRoaXMudGVtcGxhdGUsIGNvbmZpZyk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgSGVsbG8gZnJvbSB0aGUgYm90dG9tIHNoZWV0IVxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==