import { Component } from '@angular/core';
import { MatLegacySnackBar } from '@angular/material/legacy-snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-snack-bar";
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
SnackBarHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: SnackBarHarnessExample, deps: [{ token: i1.MatLegacySnackBar }], target: i0.ɵɵFactoryTarget.Component });
SnackBarHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: SnackBarHarnessExample, selector: "snack-bar-harness-example", ngImport: i0, template: "<ng-template>Hello from the snackbar</ng-template>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: SnackBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-harness-example', template: "<ng-template>Hello from the snackbar</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatLegacySnackBar }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItaGFybmVzcy9zbmFjay1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1oYXJuZXNzL3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBMEIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBRTlGOztHQUVHO0FBS0gsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUFxQixRQUEyQjtRQUEzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtJQUFHLENBQUM7SUFFcEQsSUFBSSxDQUFDLE9BQWUsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLE1BQWdDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzt3SEFMVSxzQkFBc0I7NEdBQXRCLHNCQUFzQixpRUNWbkMsc0RBQ0E7Z0dEU2Esc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0TGVnYWN5U25hY2tCYXIsIE1hdExlZ2FjeVNuYWNrQmFyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc25hY2stYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNuYWNrQmFySGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0Jhckhhcm5lc3NFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc25hY2tCYXI6IE1hdExlZ2FjeVNuYWNrQmFyKSB7fVxuXG4gIG9wZW4obWVzc2FnZTogc3RyaW5nLCBhY3Rpb24gPSAnJywgY29uZmlnPzogTWF0TGVnYWN5U25hY2tCYXJDb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwgY29uZmlnKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPkhlbGxvIGZyb20gdGhlIHNuYWNrYmFyPC9uZy10ZW1wbGF0ZT5cbiJdfQ==