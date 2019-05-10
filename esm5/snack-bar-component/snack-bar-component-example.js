import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
/**
 * @title Snack-bar with a custom component
 */
var SnackBarComponentExample = /** @class */ (function () {
    function SnackBarComponentExample(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    SnackBarComponentExample.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    SnackBarComponentExample = tslib_1.__decorate([
        Component({
            selector: 'snack-bar-component-example',
            template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], SnackBarComponentExample);
    return SnackBarComponentExample;
}());
export { SnackBarComponentExample };
var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = tslib_1.__decorate([
        Component({
            selector: 'snack-bar-component-example-snack',
            template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n",
            styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());
export { PizzaPartyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RDs7R0FFRztBQU1IO0lBR0Usa0NBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGekMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRXNCLENBQUM7SUFFN0MsK0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUU7WUFDbkQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFUVSx3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxtU0FBK0M7O1NBRWhELENBQUM7aURBSThCLFdBQVc7T0FIOUIsd0JBQXdCLENBVXBDO0lBQUQsK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSx3QkFBd0I7QUFzQnJDO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixtQkFBbUI7UUFUL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1DQUFtQztZQUM3QywwRkFBcUQ7cUJBQzVDLGdFQUlSO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQUFHO0lBQUQsMEJBQUM7Q0FBQSxBQUFuQyxJQUFtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG4vKipcbiAqIEB0aXRsZSBTbmFjay1iYXIgd2l0aCBhIGN1c3RvbSBjb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyQ29tcG9uZW50RXhhbXBsZSB7XG4gIGR1cmF0aW9uSW5TZWNvbmRzID0gNTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChQaXp6YVBhcnR5Q29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2snLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICAgIGNvbG9yOiBob3RwaW5rO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIFBpenphUGFydHlDb21wb25lbnQge31cbiJdfQ==