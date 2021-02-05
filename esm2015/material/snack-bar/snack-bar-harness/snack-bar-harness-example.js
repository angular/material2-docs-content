import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
function SnackBarHarnessExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Hello from the snackbar");
} }
/**
 * @title Testing with MatSnackBarHarness
 */
export class SnackBarHarnessExample {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message, action = '', config) {
        return this.snackBar.open(message, action, config);
    }
}
SnackBarHarnessExample.ɵfac = function SnackBarHarnessExample_Factory(t) { return new (t || SnackBarHarnessExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
SnackBarHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarHarnessExample, selectors: [["snack-bar-harness-example"]], decls: 1, vars: 0, template: function SnackBarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SnackBarHarnessExample_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarHarnessExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-harness-example',
                templateUrl: 'snack-bar-harness-example.html',
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItaGFybmVzcy9zbmFjay1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1oYXJuZXNzL3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQW9CLE1BQU0sNkJBQTZCLENBQUM7Ozs7SUNEOUQsdUNBQXVCOztBREdwQzs7R0FFRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBcUIsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUFHLENBQUM7SUFFOUMsSUFBSSxDQUFDLE9BQWUsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLE1BQTBCO1FBQzNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs0RkFMVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1ZuQyxvRkFBa0Q7O3VGRFVyQyxzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNuYWNrQmFySGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0Jhckhhcm5lc3NFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW4obWVzc2FnZTogc3RyaW5nLCBhY3Rpb24gPSAnJywgY29uZmlnPzogTWF0U25hY2tCYXJDb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwgY29uZmlnKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPkhlbGxvIGZyb20gdGhlIHNuYWNrYmFyPC9uZy10ZW1wbGF0ZT5cbiJdfQ==