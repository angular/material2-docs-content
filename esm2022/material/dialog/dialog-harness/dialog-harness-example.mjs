import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DialogHarnessExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: DialogHarnessExample, isStandalone: true, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', standalone: true, imports: [MatDialogModule], template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; }, propDecorators: { dialogTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBbUIsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7OztBQUVyRjs7R0FFRztBQU9ILE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBcUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFMUMsSUFBSSxDQUFDLE1BQXdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDOzhHQVBVLG9CQUFvQjtrR0FBcEIsb0JBQW9CLGtJQUNwQixXQUFXLGdEQ2J4QiwyREFHQSwyQ0RPWSxlQUFlOzsyRkFFZCxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBRXRCLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQztnR0FHRixjQUFjO3NCQUFyQyxTQUFTO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nQ29uZmlnLCBNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXREaWFsb2dIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXREaWFsb2dNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dIYXJuZXNzRXhhbXBsZSB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGRpYWxvZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW4oY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4odGhpcy5kaWFsb2dUZW1wbGF0ZSwgY29uZmlnKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPlxuICBIZWxsbyBmcm9tIHRoZSBkaWFsb2chXG48L25nLXRlbXBsYXRlPlxuIl19