/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
function RadioNgModelExample_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const season_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", season_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", season_r1, " ");
} }
/**
 * \@title Radios with ngModel
 */
export class RadioNgModelExample {
    constructor() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
}
RadioNgModelExample.decorators = [
    { type: Component, args: [{
                selector: 'radio-ng-model-example',
                templateUrl: 'radio-ng-model-example.html',
                styleUrls: ['radio-ng-model-example.css'],
            },] },
];
/** @nocollapse */ RadioNgModelExample.ngFactoryDef = function RadioNgModelExample_Factory(t) { return new (t || RadioNgModelExample)(); };
/** @nocollapse */ RadioNgModelExample.ngComponentDef = i0.ɵɵdefineComponent({ type: RadioNgModelExample, selectors: [["radio-ng-model-example"]], decls: 6, vars: 3, consts: [["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value"]], template: function RadioNgModelExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵtext(1, "Pick your favorite season");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-radio-group", 1);
        i0.ɵɵlistener("ngModelChange", function RadioNgModelExample_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.favoriteSeason = $event; });
        i0.ɵɵtemplate(3, RadioNgModelExample_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.favoriteSeason);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.seasons);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Your favorite season is: ", ctx.favoriteSeason, "");
    } }, directives: [i1.MatRadioGroup, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i1.MatRadioButton], styles: [".example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(RadioNgModelExample, [{
        type: Component,
        args: [{
                selector: 'radio-ng-model-example',
                templateUrl: 'radio-ng-model-example.html',
                styleUrls: ['radio-ng-model-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    RadioNgModelExample.prototype.favoriteSeason;
    /** @type {?} */
    RadioNgModelExample.prototype.seasons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDS3RDLDJDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFtQjs7O0lBRjJELGlDQUFnQjtJQUM1RixlQUNGO0lBREUsMENBQ0Y7Ozs7O0FER0YsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9FLFlBQU8sR0FBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlEOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUM7OzhGQUNZLG1CQUFtQjtrRUFBbkIsbUJBQW1CO1FDVmhDLGdDQUFzQztRQUFBLHlDQUF5QjtRQUFBLGlCQUFRO1FBQ3ZFLDBDQUlFO1FBREEsOEpBQTRCO1FBQzVCLDhGQUNFO1FBRUosaUJBQWtCO1FBQ2xCLDJCQUFLO1FBQUEsWUFBMkM7UUFBQSxpQkFBTTs7UUFMcEQsZUFBNEI7UUFBNUIsNENBQTRCO1FBQ21CLGVBQThCO1FBQTlCLHFDQUE4QjtRQUkxRSxlQUEyQztRQUEzQywwRUFBMkM7O21DRENuQyxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDOzs7O0lBRUMsNkNBQXVCOztJQUN2QixzQ0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFJhZGlvcyB3aXRoIG5nTW9kZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFkaW8tbmctbW9kZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8tbmctbW9kZWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvTmdNb2RlbEV4YW1wbGUge1xuICBmYXZvcml0ZVNlYXNvbjogc3RyaW5nO1xuICBzZWFzb25zOiBzdHJpbmdbXSA9IFsnV2ludGVyJywgJ1NwcmluZycsICdTdW1tZXInLCAnQXV0dW1uJ107XG59XG4iLCI8bGFiZWwgaWQ9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCI+UGljayB5b3VyIGZhdm9yaXRlIHNlYXNvbjwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIlxuICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cImZhdm9yaXRlU2Vhc29uXCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiAqbmdGb3I9XCJsZXQgc2Vhc29uIG9mIHNlYXNvbnNcIiBbdmFsdWVdPVwic2Vhc29uXCI+XG4gICAge3tzZWFzb259fVxuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjxkaXY+WW91ciBmYXZvcml0ZSBzZWFzb24gaXM6IHt7ZmF2b3JpdGVTZWFzb259fTwvZGl2PlxuIl19