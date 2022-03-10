import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
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
SnackBarHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: SnackBarHarnessExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
SnackBarHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: SnackBarHarnessExample, selector: "snack-bar-harness-example", ngImport: i0, template: "<ng-template>Hello from the snackbar</ng-template>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: SnackBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-harness-example', template: "<ng-template>Hello from the snackbar</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItaGFybmVzcy9zbmFjay1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1oYXJuZXNzL3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQW9CLE1BQU0sNkJBQTZCLENBQUM7OztBQUUzRTs7R0FFRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBcUIsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUFHLENBQUM7SUFFOUMsSUFBSSxDQUFDLE9BQWUsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLE1BQTBCO1FBQzNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzswSEFMVSxzQkFBc0I7OEdBQXRCLHNCQUFzQixpRUNWbkMsc0RBQ0E7a0dEU2Esc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0U25hY2tCYXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFySGFybmVzc0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgb3BlbihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbiA9ICcnLCBjb25maWc/OiBNYXRTbmFja0JhckNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCBjb25maWcpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGU+SGVsbG8gZnJvbSB0aGUgc25hY2tiYXI8L25nLXRlbXBsYXRlPlxuIl19