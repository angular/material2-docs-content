import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: DialogHarnessExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: DialogHarnessExample, isStandalone: true, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', standalone: true, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { dialogTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXBFOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFxQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUUxQyxJQUFJLENBQUMsTUFBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7bUhBUFUsb0JBQW9CO3VHQUFwQixvQkFBb0Isa0lBQ3BCLFdBQVcsZ0RDWnhCLDJEQUdBOztnR0RRYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBRXRCLElBQUk7OEVBR1EsY0FBYztzQkFBckMsU0FBUzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERpYWxvZ0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nSGFybmVzc0V4YW1wbGUge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBkaWFsb2dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuKGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZy5vcGVuKHRoaXMuZGlhbG9nVGVtcGxhdGUsIGNvbmZpZyk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cbiAgSGVsbG8gZnJvbSB0aGUgZGlhbG9nIVxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==