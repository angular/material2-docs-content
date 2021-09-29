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
DialogHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogHarnessExample, selectors: [["dialog-harness-example"]], viewQuery: function DialogHarnessExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dialogTemplate = _t.first);
    } }, decls: 1, vars: 0, template: function DialogHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DialogHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogHarnessExample, [{
        type: Component,
        args: [{ selector: 'dialog-harness-example', template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
    }], function () { return [{ type: i1.MatDialog }]; }, { dialogTemplate: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQzs7OztJQ0FsRSx5Q0FDRjs7QURDQTs7R0FFRztBQUtILE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBcUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFMUMsSUFBSSxDQUFDLE1BQXdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDOzt3RkFQVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjt1QkFDcEIsV0FBVzs7Ozs7UUNYeEIsa0ZBRWM7O3VGRFFELG9CQUFvQjtjQUpoQyxTQUFTOzJCQUNFLHdCQUF3Qjs0REFJVixjQUFjO2tCQUFyQyxTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nQ29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0RGlhbG9nSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dIYXJuZXNzRXhhbXBsZSB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGRpYWxvZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW4oY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4odGhpcy5kaWFsb2dUZW1wbGF0ZSwgY29uZmlnKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPlxuICBIZWxsbyBmcm9tIHRoZSBkaWFsb2chXG48L25nLXRlbXBsYXRlPlxuIl19