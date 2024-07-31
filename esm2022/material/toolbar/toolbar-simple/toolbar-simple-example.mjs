import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
/**
 * @title Toolbar with just text
 */
export class ToolbarSimpleExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: ToolbarSimpleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: ToolbarSimpleExample, isStandalone: true, selector: "toolbar-simple-example", ngImport: i0, template: "<mat-toolbar>\n  <span>My Application</span>\n</mat-toolbar>\n", dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: ToolbarSimpleExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-simple-example', standalone: true, imports: [MatToolbarModule], template: "<mat-toolbar>\n  <span>My Application</span>\n</mat-toolbar>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1zaW1wbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1zaW1wbGUvdG9vbGJhci1zaW1wbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1zaW1wbGUvdG9vbGJhci1zaW1wbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7OztBQUUzRDs7R0FFRztBQU9ILE1BQU0sT0FBTyxvQkFBb0I7cUhBQXBCLG9CQUFvQjt5R0FBcEIsb0JBQW9CLGtGQ1pqQyxnRUFHQSwyQ0RPWSxnQkFBZ0I7O2tHQUVmLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FFdEIsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sYmFyIHdpdGgganVzdCB0ZXh0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItc2ltcGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXItc2ltcGxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUb29sYmFyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhclNpbXBsZUV4YW1wbGUge31cbiIsIjxtYXQtdG9vbGJhcj5cbiAgPHNwYW4+TXkgQXBwbGljYXRpb248L3NwYW4+XG48L21hdC10b29sYmFyPlxuIl19