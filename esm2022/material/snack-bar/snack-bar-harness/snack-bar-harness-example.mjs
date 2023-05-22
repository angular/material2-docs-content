import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
/**
 * @title Testing with MatSnackBarHarness
 */
class SnackBarHarnessExample {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message, action = '', config) {
        return this.snackBar.open(message, action, config);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SnackBarHarnessExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SnackBarHarnessExample, isStandalone: true, selector: "snack-bar-harness-example", ngImport: i0, template: "<ng-template>Hello from the snackbar</ng-template>\n", dependencies: [{ kind: "ngmodule", type: MatSnackBarModule }] }); }
}
export { SnackBarHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SnackBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-harness-example', standalone: true, imports: [MatSnackBarModule], template: "<ng-template>Hello from the snackbar</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItaGFybmVzcy9zbmFjay1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1oYXJuZXNzL3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQXFCLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7OztBQUU5Rjs7R0FFRztBQUNILE1BTWEsc0JBQXNCO0lBQ2pDLFlBQXFCLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFBRyxDQUFDO0lBRTlDLElBQUksQ0FBQyxPQUFlLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxNQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQzs4R0FMVSxzQkFBc0I7a0dBQXRCLHNCQUFzQixxRkNabkMsc0RBQ0EsMkNEU1ksaUJBQWlCOztTQUVoQixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFObEMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZywgTWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTbmFja0Jhckhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFNuYWNrQmFyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJIYXJuZXNzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuKG1lc3NhZ2U6IHN0cmluZywgYWN0aW9uID0gJycsIGNvbmZpZz86IE1hdFNuYWNrQmFyQ29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIGNvbmZpZyk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZT5IZWxsbyBmcm9tIHRoZSBzbmFja2JhcjwvbmctdGVtcGxhdGU+XG4iXX0=