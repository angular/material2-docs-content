import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
function DialogHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Hello from the dialog!\n");
} }
/**
 * @title Testing with MatDialogHarness
 */
export class DialogHarnessExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(config) {
        return this.dialog.open(this.dialogTemplate, config);
    }
}
DialogHarnessExample.ɵfac = function DialogHarnessExample_Factory(t) { return new (t || DialogHarnessExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogHarnessExample, selectors: [["dialog-harness-example"]], viewQuery: function DialogHarnessExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dialogTemplate = _t.first);
    } }, decls: 1, vars: 0, template: function DialogHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DialogHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogHarnessExample, [{
        type: Component,
        args: [{
                selector: 'dialog-harness-example',
                templateUrl: 'dialog-harness-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, { dialogTemplate: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQzs7OztJQ0FsRSx5Q0FDRjs7QURDQTs7R0FFRztBQUtILE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBcUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFMUMsSUFBSSxDQUFDLE1BQXdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDOzt3RkFQVSxvQkFBb0I7eURBQXBCLG9CQUFvQjt1QkFDcEIsV0FBVzs7Ozs7UUNYeEIsa0ZBRWM7O2tERFFELG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjthQUMzQzs0REFFeUIsY0FBYztrQkFBckMsU0FBUzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERpYWxvZ0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nSGFybmVzc0V4YW1wbGUge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBkaWFsb2dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuKGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZy5vcGVuKHRoaXMuZGlhbG9nVGVtcGxhdGUsIGNvbmZpZyk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgSGVsbG8gZnJvbSB0aGUgZGlhbG9nIVxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==