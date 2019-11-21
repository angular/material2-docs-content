/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
/**
 * \@title Snack-bar with a custom component
 */
export class SnackBarComponentExample {
    /**
     * @param {?} _snackBar
     */
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
}
SnackBarComponentExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example',
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            },] },
];
/** @nocollapse */
SnackBarComponentExample.ctorParameters = () => [
    { type: MatSnackBar }
];
/** @nocollapse */ SnackBarComponentExample.ɵfac = function SnackBarComponentExample_Factory(t) { return new (t || SnackBarComponentExample)(i0.ɵɵdirectiveInject(i1.MatSnackBar)); };
/** @nocollapse */ SnackBarComponentExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarComponentExample, selectors: [["snack-bar-component-example"]], decls: 6, vars: 1, consts: [["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarComponentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Snack bar duration (seconds)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 0);
        i0.ɵɵlistener("ngModelChange", function SnackBarComponentExample_Template_input_ngModelChange_3_listener($event) { return ctx.durationInSeconds = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 1);
        i0.ɵɵlistener("click", function SnackBarComponentExample_Template_button_click_4_listener($event) { return ctx.openSnackBar(); });
        i0.ɵɵtext(5, " Pizza party\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.durationInSeconds);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.NumberValueAccessor, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i5.MatButton], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarComponentExample, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example',
                templateUrl: 'snack-bar-component-example.html',
                styleUrls: ['snack-bar-component-example.css'],
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
if (false) {
    /** @type {?} */
    SnackBarComponentExample.prototype.durationInSeconds;
    /**
     * @type {?}
     * @private
     */
    SnackBarComponentExample.prototype._snackBar;
}
export class PizzaPartyComponent {
}
PizzaPartyComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                templateUrl: 'snack-bar-component-example-snack.html',
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
            },] },
];
/** @nocollapse */ PizzaPartyComponent.ɵfac = function PizzaPartyComponent_Factory(t) { return new (t || PizzaPartyComponent)(); };
/** @nocollapse */ PizzaPartyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PizzaPartyComponent, selectors: [["snack-bar-component-example-snack"]], decls: 2, vars: 0, consts: [[1, "example-pizza-party"]], template: function PizzaPartyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtext(1, " Pizza party!!! \uD83C\uDF55\n");
        i0.ɵɵelementEnd();
    } }, styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PizzaPartyComponent, [{
        type: Component,
        args: [{
                selector: 'snack-bar-component-example-snack',
                templateUrl: 'snack-bar-component-example-snack.html',
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7QUFVeEQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUduQyxZQUFvQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBRjFDLHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUV1QixDQUFDOzs7O0lBRTlDLFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFO1lBQ3BELFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7Ozs7WUFUTyxXQUFXOztnR0FVTix3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1hyQyxzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsNENBQTRCO1FBQUEsaUJBQVk7UUFDbkQsZ0NBQ0Y7UUFEdUIsNEpBQStCO1FBQXBELGlCQUNGO1FBQUEsaUJBQWlCO1FBRWpCLGlDQUNFO1FBRGlCLDJHQUFTLGtCQUFjLElBQUM7UUFDekMsOEJBQ0Y7UUFBQSxpQkFBUzs7UUFMYyxlQUErQjtRQUEvQiwrQ0FBK0I7O2tERFN6Qyx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOzs7O0lBRUMscURBQXNCOzs7OztJQUVWLDZDQUE4Qjs7QUFtQjVDLE1BQU0sT0FBTyxtQkFBbUI7OztZQVQvQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsTUFBTSxFQUFFLENBQUM7Ozs7R0FJUixDQUFDO2FBQ0g7O3NGQUNZLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FFakNoQywrQkFDRTtRQUFBLDhDQUNGO1FBQUEsaUJBQU87O2tERitCTSxtQkFBbUI7Y0FUL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELE1BQU0sRUFBRSxDQUFDOzs7O0dBSVIsQ0FBQzthQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgU25hY2stYmFyIHdpdGggYSBjdXN0b20gY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUge1xuICBkdXJhdGlvbkluU2Vjb25kcyA9IDU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChQaXp6YVBhcnR5Q29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2snLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICAgIGNvbG9yOiBob3RwaW5rO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIFBpenphUGFydHlDb21wb25lbnQge31cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TbmFjayBiYXIgZHVyYXRpb24gKHNlY29uZHMpPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJkdXJhdGlvbkluU2Vjb25kc1wiIG1hdElucHV0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuU25hY2tCYXIoKVwiIGFyaWEtbGFiZWw9XCJTaG93IGFuIGV4YW1wbGUgc25hY2stYmFyXCI+XG4gIFBpenphIHBhcnR5XG48L2J1dHRvbj5cbiIsIjxzcGFuIGNsYXNzPVwiZXhhbXBsZS1waXp6YS1wYXJ0eVwiPlxuICBQaXp6YSBwYXJ0eSEhISDwn42VXG48L3NwYW4+XG4iXX0=