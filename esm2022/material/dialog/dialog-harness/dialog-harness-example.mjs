import { ChangeDetectionStrategy, Component, TemplateRef, inject, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
/**
 * @title Testing with MatDialogHarness
 */
export class DialogHarnessExample {
    constructor() {
        this.dialogTemplate = viewChild.required(TemplateRef);
        this.dialog = inject(MatDialog);
    }
    open(config) {
        return this.dialog.open(this.dialogTemplate(), config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DialogHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "18.1.0", type: DialogHarnessExample, isStandalone: true, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true, isSignal: true }], ngImport: i0, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxTQUFTLEVBQWtCLE1BQU0sMEJBQTBCLENBQUM7O0FBRXBFOztHQUVHO0FBT0gsTUFBTSxPQUFPLG9CQUFvQjtJQU5qQztRQU9XLG1CQUFjLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVqRCxXQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBS3JDO0lBSEMsSUFBSSxDQUFDLE1BQXdCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7OEdBUFUsb0JBQW9CO2tHQUFwQixvQkFBb0Isa0lBQ2MsV0FBVyxnRUNiMUQsMkRBR0E7OzJGRFNhLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxtQkFDQyx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgaW5qZWN0LCB2aWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERpYWxvZ0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0hhcm5lc3NFeGFtcGxlIHtcbiAgcmVhZG9ubHkgZGlhbG9nVGVtcGxhdGUgPSB2aWV3Q2hpbGQucmVxdWlyZWQoVGVtcGxhdGVSZWYpO1xuXG4gIHJlYWRvbmx5IGRpYWxvZyA9IGluamVjdChNYXREaWFsb2cpO1xuXG4gIG9wZW4oY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4odGhpcy5kaWFsb2dUZW1wbGF0ZSgpLCBjb25maWcpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+XG4gIEhlbGxvIGZyb20gdGhlIGRpYWxvZyFcbjwvbmctdGVtcGxhdGU+XG4iXX0=