import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatLegacyDialog } from '@angular/material/legacy-dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-dialog";
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
DialogHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DialogHarnessExample, deps: [{ token: i1.MatLegacyDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: DialogHarnessExample, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatLegacyDialog }]; }, propDecorators: { dialogTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBd0IsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBRXZGOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFxQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUFHLENBQUM7SUFFaEQsSUFBSSxDQUFDLE1BQThCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDOztzSEFQVSxvQkFBb0I7MEdBQXBCLG9CQUFvQiw4R0FDcEIsV0FBVyxnRENYeEIsMkRBR0E7Z0dET2Esb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLHdCQUF3QjtzR0FJVixjQUFjO3NCQUFyQyxTQUFTO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExlZ2FjeURpYWxvZywgTWF0TGVnYWN5RGlhbG9nQ29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERpYWxvZ0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nSGFybmVzc0V4YW1wbGUge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBkaWFsb2dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBkaWFsb2c6IE1hdExlZ2FjeURpYWxvZykge31cblxuICBvcGVuKGNvbmZpZz86IE1hdExlZ2FjeURpYWxvZ0NvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZy5vcGVuKHRoaXMuZGlhbG9nVGVtcGxhdGUsIGNvbmZpZyk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgSGVsbG8gZnJvbSB0aGUgZGlhbG9nIVxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==