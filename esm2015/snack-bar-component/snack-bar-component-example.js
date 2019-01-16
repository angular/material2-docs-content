/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
/**
 * \@title Snack-bar with a custom component
 */
export class SnackBarComponentExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    }
}
SnackBarComponentExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
SnackBarComponentExample.ctorParameters = () => [
    { type: MatSnackBar }
];
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVU5QyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFBRyxDQUFDOzs7O0lBRTdDLFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLCtIQUErQzs7YUFFaEQ7Ozs7WUFUTyxXQUFXOzs7Ozs7O0lBV0wsNENBQTZCOztBQW1CM0MsTUFBTSxPQUFPLG1CQUFtQjs7O1lBVC9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QywwRkFBcUQ7eUJBQzVDOzs7O0dBSVI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U25hY2tCYXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLyoqXG4gKiBAdGl0bGUgU25hY2stYmFyIHdpdGggYSBjdXN0b20gY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChQaXp6YVBhcnR5Q29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgIH0pO1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZS1waXp6YS1wYXJ0eSB7XG4gICAgICBjb2xvcjogaG90cGluaztcbiAgICB9XG4gIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBQaXp6YVBhcnR5Q29tcG9uZW50IHt9XG4iXX0=