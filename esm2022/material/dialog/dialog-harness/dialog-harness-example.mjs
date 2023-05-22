import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
/**
 * @title Testing with MatDialogHarness
 */
class DialogHarnessExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(config) {
        return this.dialog.open(this.dialogTemplate, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogHarnessExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DialogHarnessExample, isStandalone: true, selector: "dialog-harness-example", viewQueries: [{ propertyName: "dialogTemplate", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }] }); }
}
export { DialogHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-harness-example', standalone: true, imports: [MatDialogModule], template: "<ng-template>\n  Hello from the dialog!\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; }, propDecorators: { dialogTemplate: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctaGFybmVzcy9kaWFsb2ctaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1oYXJuZXNzL2RpYWxvZy1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBbUIsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7OztBQUVyRjs7R0FFRztBQUNILE1BTWEsb0JBQW9CO0lBRy9CLFlBQXFCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRTFDLElBQUksQ0FBQyxNQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs4R0FQVSxvQkFBb0I7a0dBQXBCLG9CQUFvQixrSUFDcEIsV0FBVyxnRENieEIsMkRBR0EsMkNET1ksZUFBZTs7U0FFZCxvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDO2dHQUdGLGNBQWM7c0JBQXJDLFNBQVM7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERpYWxvZ0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdERpYWxvZ01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0hhcm5lc3NFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgZGlhbG9nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3Blbihjb25maWc/OiBNYXREaWFsb2dDb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3Blbih0aGlzLmRpYWxvZ1RlbXBsYXRlLCBjb25maWcpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+XG4gIEhlbGxvIGZyb20gdGhlIGRpYWxvZyFcbjwvbmctdGVtcGxhdGU+XG4iXX0=