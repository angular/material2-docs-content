/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/snack-bar/snack-bar-component/snack-bar-component-example.ts
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
let SnackBarComponentExample = /** @class */ (() => {
    /**
     * \@title Snack-bar with a custom component
     */
    class SnackBarComponentExample {
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
    /** @nocollapse */ SnackBarComponentExample.ɵcmp = i0.ɵɵdefineComponent({ type: SnackBarComponentExample, selectors: [["snack-bar-component-example"]], decls: 6, vars: 1, consts: [["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "aria-label", "Show an example snack-bar", 3, "click"]], template: function SnackBarComponentExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Snack bar duration (seconds)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 0);
            i0.ɵɵlistener("ngModelChange", function SnackBarComponentExample_Template_input_ngModelChange_3_listener($event) { return ctx.durationInSeconds = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 1);
            i0.ɵɵlistener("click", function SnackBarComponentExample_Template_button_click_4_listener() { return ctx.openSnackBar(); });
            i0.ɵɵtext(5, " Pizza party\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.durationInSeconds);
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.NumberValueAccessor, i4.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i5.MatButton], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return SnackBarComponentExample;
})();
export { SnackBarComponentExample };
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
let PizzaPartyComponent = /** @class */ (() => {
    class PizzaPartyComponent {
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
    return PizzaPartyComponent;
})();
export { PizzaPartyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7O0FBS3hEOzs7O0lBQUEsTUFLYSx3QkFBd0I7Ozs7UUFHbkMsWUFBb0IsU0FBc0I7WUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtZQUYxQyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFFdUIsQ0FBQzs7OztRQUU5QyxZQUFZO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDcEQsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJO2FBQ3hDLENBQUMsQ0FBQztRQUNMLENBQUM7OztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOzs7O2dCQVRPLFdBQVc7O3VIQVVOLHdCQUF3QjtvRkFBeEIsd0JBQXdCO1lDWHJDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSw0Q0FBNEI7WUFBQSxpQkFBWTtZQUNuRCxnQ0FDRjtZQUR1Qiw0SkFBK0I7WUFBcEQsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsaUNBQ0U7WUFEeUIscUdBQVMsa0JBQWMsSUFBQztZQUNqRCw4QkFDRjtZQUFBLGlCQUFTOztZQUxjLGVBQStCO1lBQS9CLCtDQUErQjs7bUNERnREO0tBcUJDO1NBVlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOzs7O0lBRUMscURBQXNCOzs7OztJQUVWLDZDQUE4Qjs7QUFVNUM7SUFBQSxNQVNhLG1CQUFtQjs7O2dCQVQvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsV0FBVyxFQUFFLHdDQUF3QztvQkFDckQsTUFBTSxFQUFFLENBQUM7Ozs7R0FJUixDQUFDO2lCQUNIOzs2R0FDWSxtQkFBbUI7K0VBQW5CLG1CQUFtQjtZRWpDaEMsK0JBQ0U7WUFBQSw4Q0FDRjtZQUFBLGlCQUFPOzs4QkZGUDtLQWlDbUM7U0FBdEIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FUL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELE1BQU0sRUFBRSxDQUFDOzs7O0dBSVIsQ0FBQzthQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgU25hY2stYmFyIHdpdGggYSBjdXN0b20gY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUge1xuICBkdXJhdGlvbkluU2Vjb25kcyA9IDU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChQaXp6YVBhcnR5Q29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2snLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICAgIGNvbG9yOiBob3RwaW5rO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIFBpenphUGFydHlDb21wb25lbnQge31cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TbmFjayBiYXIgZHVyYXRpb24gKHNlY29uZHMpPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJkdXJhdGlvbkluU2Vjb25kc1wiIG1hdElucHV0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5TbmFja0JhcigpXCIgYXJpYS1sYWJlbD1cIlNob3cgYW4gZXhhbXBsZSBzbmFjay1iYXJcIj5cbiAgUGl6emEgcGFydHlcbjwvYnV0dG9uPlxuIiwiPHNwYW4gY2xhc3M9XCJleGFtcGxlLXBpenphLXBhcnR5XCI+XG4gIFBpenphIHBhcnR5ISEhIPCfjZVcbjwvc3Bhbj5cbiJdfQ==