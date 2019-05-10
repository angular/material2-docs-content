/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
/**
 * \@title Snack-bar with a custom component
 */
export class SnackBarComponentExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
}
SnackBarComponentExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
SnackBarComponentExample.ctorParameters = () => [
    { type: MatSnackBar }
];
if (false) {
    /** @type {?} */
    SnackBarComponentExample.prototype.durationInSeconds;
    /**
     * @type {?}
     * @private
     */
    SnackBarComponentExample.prototype.snackBar;
}
export class PizzaPartyComponent {
}
PizzaPartyComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n",
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQVV4RCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR25DLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGekMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRXNCLENBQUM7Ozs7SUFFN0MsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUU7WUFDbkQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxtU0FBK0M7O2FBRWhEOzs7O1lBVE8sV0FBVzs7OztJQVdqQixxREFBc0I7Ozs7O0lBRVYsNENBQTZCOztBQW1CM0MsTUFBTSxPQUFPLG1CQUFtQjs7O1lBVC9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QywwRkFBcUQ7eUJBQzVDOzs7O0dBSVI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIFNuYWNrLWJhciB3aXRoIGEgY3VzdG9tIGNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlIHtcbiAgZHVyYXRpb25JblNlY29uZHMgPSA1O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFBpenphUGFydHlDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uSW5TZWNvbmRzICogMTAwMCxcbiAgICB9KTtcbiAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGl6emFQYXJ0eUNvbXBvbmVudCB7fVxuIl19