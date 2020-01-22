import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
function SelectInitialValueExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r31.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r31.viewValue);
} }
function SelectInitialValueExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r32 = ctx.$implicit;
    var ctx_r30 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r32.value)("selected", ctx_r30.selectedCar === option_r32.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r32.viewValue);
} }
/**
 * @title Basic select with initial value and no form
 */
var SelectInitialValueExample = /** @class */ (function () {
    function SelectInitialValueExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'ford', viewValue: 'Ford' },
            { value: 'chevrolet', viewValue: 'Chevrolet' },
            { value: 'dodge', viewValue: 'Dodge' }
        ];
        this.selectedFood = this.foods[2].value;
        this.selectedCar = this.cars[0].value;
    }
    SelectInitialValueExample.ɵfac = function SelectInitialValueExample_Factory(t) { return new (t || SelectInitialValueExample)(); };
    SelectInitialValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectInitialValueExample, selectors: [["select-initial-value-example"]], decls: 20, vars: 5, consts: [[3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "selected"]], template: function SelectInitialValueExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "Basic mat-select with initial value");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Favorite Food");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select", 0);
            i0.ɵɵlistener("valueChange", function SelectInitialValueExample_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedFood = $event; });
            i0.ɵɵelement(6, "mat-option");
            i0.ɵɵtemplate(7, SelectInitialValueExample_mat_option_7_Template, 2, 2, "mat-option", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "h4");
            i0.ɵɵtext(11, "Basic native select with initial value");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-form-field");
            i0.ɵɵelementStart(13, "mat-label");
            i0.ɵɵtext(14, "Favorite Car");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "select", 2);
            i0.ɵɵlistener("change", function SelectInitialValueExample_Template_select_change_15_listener($event) { return ctx.selectedCar = $event.target.value; });
            i0.ɵɵelement(16, "option", 3);
            i0.ɵɵtemplate(17, SelectInitialValueExample_option_17_Template, 2, 3, "option", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.selectedFood);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.foods);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedFood, "");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.cars);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedCar, "");
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.NgForOf, i5.MatInput, i6.NgSelectOption, i6.ɵangular_packages_forms_forms_x], styles: [""] });
    return SelectInitialValueExample;
}());
export { SelectInitialValueExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectInitialValueExample, [{
        type: Component,
        args: [{
                selector: 'select-initial-value-example',
                templateUrl: 'select-initial-value-example.html',
                styleUrls: ['select-initial-value-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLcEMscUNBQWdFO0lBQUEsWUFBc0I7SUFBQSxpQkFBYTs7O0lBQXZGLHdDQUFzQjtJQUE4QixlQUFzQjtJQUF0QiwwQ0FBc0I7OztJQVV0RixpQ0FDa0Q7SUFBQSxZQUFzQjtJQUFBLGlCQUFTOzs7O0lBRDdDLHdDQUFzQixzREFBQTtJQUNSLGVBQXNCO0lBQXRCLDBDQUFzQjs7QURKNUU7O0dBRUc7QUFDSDtJQUFBO1FBTUUsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO1lBQzVDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3JDLENBQUM7UUFDRixpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDbEM7c0dBYlkseUJBQXlCO2tFQUF6Qix5QkFBeUI7WUNwQnRDLDBCQUFJO1lBQUEsbURBQW1DO1lBQUEsaUJBQUs7WUFDNUMsc0NBQ0U7WUFBQSxpQ0FBVztZQUFBLDZCQUFhO1lBQUEsaUJBQVk7WUFDcEMscUNBQ0U7WUFEVSx5SkFBd0I7WUFDbEMsNkJBQXlCO1lBQ3pCLHdGQUFnRTtZQUNsRSxpQkFBYTtZQUNmLGlCQUFpQjtZQUNqQix5QkFBRztZQUFBLFlBQThCO1lBQUEsaUJBQUk7WUFFckMsMkJBQUk7WUFBQSx1REFBc0M7WUFBQSxpQkFBSztZQUMvQyx1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsNkJBQVk7WUFBQSxpQkFBWTtZQUNuQyxrQ0FDRTtZQUR1Qix3SkFBNEM7WUFDbkUsNkJBQTBCO1lBQzFCLGtGQUNrRDtZQUNwRCxpQkFBUztZQUNYLGlCQUFpQjtZQUNqQiwwQkFBRztZQUFBLGFBQTZCO1lBQUEsaUJBQUk7O1lBaEJ0QixlQUF3QjtZQUF4Qix3Q0FBd0I7WUFFQyxlQUE0QjtZQUE1QixtQ0FBNEI7WUFHaEUsZUFBOEI7WUFBOUIsNkRBQThCO1lBT3JCLGVBQTJCO1lBQTNCLGtDQUEyQjtZQUlwQyxlQUE2QjtZQUE3Qiw0REFBNkI7O29DRG5CaEM7Q0FpQ0MsQUFsQkQsSUFrQkM7U0FiWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc2VsZWN0IHdpdGggaW5pdGlhbCB2YWx1ZSBhbmQgbm8gZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SW5pdGlhbFZhbHVlRXhhbXBsZSB7XG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ31cbiAgXTtcbiAgY2FyczogQ2FyW10gPSBbXG4gICAge3ZhbHVlOiAnZm9yZCcsIHZpZXdWYWx1ZTogJ0ZvcmQnfSxcbiAgICB7dmFsdWU6ICdjaGV2cm9sZXQnLCB2aWV3VmFsdWU6ICdDaGV2cm9sZXQnfSxcbiAgICB7dmFsdWU6ICdkb2RnZScsIHZpZXdWYWx1ZTogJ0RvZGdlJ31cbiAgXTtcbiAgc2VsZWN0ZWRGb29kID0gdGhpcy5mb29kc1syXS52YWx1ZTtcbiAgc2VsZWN0ZWRDYXIgPSB0aGlzLmNhcnNbMF0udmFsdWU7XG59XG4iLCI8aDQ+QmFzaWMgbWF0LXNlbGVjdCB3aXRoIGluaXRpYWwgdmFsdWU8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZvb2Q8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgWyh2YWx1ZSldPVwic2VsZWN0ZWRGb29kXCI+XG4gICAgPG1hdC1vcHRpb24+PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZvb2RzXCI+e3sgb3B0aW9uLnZpZXdWYWx1ZSB9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZEZvb2R9fTwvcD5cblxuPGg0PkJhc2ljIG5hdGl2ZSBzZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlPC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBDYXI8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIChjaGFuZ2UpPVwic2VsZWN0ZWRDYXIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjYXJzXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRDYXIgPT09IG9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi52aWV3VmFsdWUgfX08L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPHA+WW91IHNlbGVjdGVkOiB7e3NlbGVjdGVkQ2FyfX08L3A+XG4iXX0=