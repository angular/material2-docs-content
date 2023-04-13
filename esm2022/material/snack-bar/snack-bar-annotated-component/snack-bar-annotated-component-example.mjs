import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/form-field";
/**
 * @title Snack-bar with an annotated custom component
 */
class SnackBarAnnotatedComponentExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SnackBarAnnotatedComponentExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: SnackBarAnnotatedComponentExample, selector: "snack-bar-annotated-component-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }] }); }
}
export { SnackBarAnnotatedComponentExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SnackBarAnnotatedComponentExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-annotated-component-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
class PizzaPartyAnnotatedComponent {
    constructor() {
        this.snackBarRef = inject(MatSnackBarRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: PizzaPartyAnnotatedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: PizzaPartyAnnotatedComponent, selector: "snack-bar-annotated-component-example-snack", ngImport: i0, template: "<span class=\"example-pizza-party\" matSnackBarLabel>\n  Pizza party!!!\n</span>\n<span matSnackBarActions>\n  <button mat-button matSnackBarAction (click)=\"snackBarRef.dismissWithAction()\">\uD83C\uDF55</button>\n</span>\n\n", styles: ["\n    :host {\n      display: flex;\n    }\n\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "], dependencies: [{ kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1.MatSnackBarLabel, selector: "[matSnackBarLabel]" }, { kind: "directive", type: i1.MatSnackBarActions, selector: "[matSnackBarActions]" }, { kind: "directive", type: i1.MatSnackBarAction, selector: "[matSnackBarAction]" }] }); }
}
export { PizzaPartyAnnotatedComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: PizzaPartyAnnotatedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-annotated-component-example-snack', template: "<span class=\"example-pizza-party\" matSnackBarLabel>\n  Pizza party!!!\n</span>\n<span matSnackBarActions>\n  <button mat-button matSnackBarAction (click)=\"snackBarRef.dismissWithAction()\">\uD83C\uDF55</button>\n</span>\n\n", styles: ["\n    :host {\n      display: flex;\n    }\n\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1hbm5vdGF0ZWQtY29tcG9uZW50L3NuYWNrLWJhci1hbm5vdGF0ZWQtY29tcG9uZW50LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQUV4RTs7R0FFRztBQUNILE1BS2EsaUNBQWlDO0lBRzVDLFlBQW9CLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFGMUMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRXVCLENBQUM7SUFFOUMsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsNEJBQTRCLEVBQUU7WUFDN0QsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7cUhBVFUsaUNBQWlDO3lHQUFqQyxpQ0FBaUMsNkVDWDlDLHFUQVFBOztTREdhLGlDQUFpQztrR0FBakMsaUNBQWlDO2tCQUw3QyxTQUFTOytCQUNFLHVDQUF1Qzs7QUFnQm5ELE1BZWEsNEJBQTRCO0lBZnpDO1FBZ0JFLGdCQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3RDO3FIQUZZLDRCQUE0Qjt5R0FBNUIsNEJBQTRCLG1GRXRDekMsb09BT0E7O1NGK0JhLDRCQUE0QjtrR0FBNUIsNEJBQTRCO2tCQWZ4QyxTQUFTOytCQUNFLDZDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIFNuYWNrLWJhciB3aXRoIGFuIGFubm90YXRlZCBjdXN0b20gY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1hbm5vdGF0ZWQtY29tcG9uZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1hbm5vdGF0ZWQtY29tcG9uZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhckFubm90YXRlZENvbXBvbmVudEV4YW1wbGUge1xuICBkdXJhdGlvbkluU2Vjb25kcyA9IDU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChQaXp6YVBhcnR5QW5ub3RhdGVkQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQaXp6YVBhcnR5QW5ub3RhdGVkQ29tcG9uZW50IHtcbiAgc25hY2tCYXJSZWYgPSBpbmplY3QoTWF0U25hY2tCYXJSZWYpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+U25hY2sgYmFyIGR1cmF0aW9uIChzZWNvbmRzKTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwiZHVyYXRpb25JblNlY29uZHNcIiBtYXRJbnB1dD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIChjbGljayk9XCJvcGVuU25hY2tCYXIoKVwiIGFyaWEtbGFiZWw9XCJTaG93IGFuIGV4YW1wbGUgc25hY2stYmFyXCI+XG4gIFBpenphIHBhcnR5XG48L2J1dHRvbj5cbiIsIjxzcGFuIGNsYXNzPVwiZXhhbXBsZS1waXp6YS1wYXJ0eVwiIG1hdFNuYWNrQmFyTGFiZWw+XG4gIFBpenphIHBhcnR5ISEhXG48L3NwYW4+XG48c3BhbiBtYXRTbmFja0JhckFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTbmFja0JhckFjdGlvbiAoY2xpY2spPVwic25hY2tCYXJSZWYuZGlzbWlzc1dpdGhBY3Rpb24oKVwiPvCfjZU8L2J1dHRvbj5cbjwvc3Bhbj5cblxuIl19