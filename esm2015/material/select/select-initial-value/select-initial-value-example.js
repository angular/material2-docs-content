import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
function SelectInitialValueExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r2.viewValue);
} }
function SelectInitialValueExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r3.value)("selected", ctx_r1.selectedCar === option_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.viewValue);
} }
/**
 * @title Basic select with initial value and no form
 */
let SelectInitialValueExample = /** @class */ (() => {
    class SelectInitialValueExample {
        constructor() {
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
        selectCar(event) {
            this.selectedCar = event.target.value;
        }
    }
    SelectInitialValueExample.ɵfac = function SelectInitialValueExample_Factory(t) { return new (t || SelectInitialValueExample)(); };
    SelectInitialValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectInitialValueExample, selectors: [["select-initial-value-example"]], decls: 20, vars: 5, consts: [["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "selected"]], template: function SelectInitialValueExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h4");
            i0.ɵɵtext(1, "Basic mat-select with initial value");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-form-field", 0);
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Favorite Food");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select", 1);
            i0.ɵɵlistener("valueChange", function SelectInitialValueExample_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedFood = $event; });
            i0.ɵɵelement(6, "mat-option");
            i0.ɵɵtemplate(7, SelectInitialValueExample_mat_option_7_Template, 2, 2, "mat-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "h4");
            i0.ɵɵtext(11, "Basic native select with initial value");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-form-field", 0);
            i0.ɵɵelementStart(13, "mat-label");
            i0.ɵɵtext(14, "Favorite Car");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "select", 3);
            i0.ɵɵlistener("change", function SelectInitialValueExample_Template_select_change_15_listener($event) { return ctx.selectCar($event); });
            i0.ɵɵelement(16, "option", 4);
            i0.ɵɵtemplate(17, SelectInitialValueExample_option_17_Template, 2, 3, "option", 5);
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
})();
export { SelectInitialValueExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectInitialValueExample, [{
        type: Component,
        args: [{
                selector: 'select-initial-value-example',
                templateUrl: 'select-initial-value-example.html',
                styleUrls: ['select-initial-value-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLcEMscUNBQWdFO0lBQUEsWUFBc0I7SUFBQSxpQkFBYTs7O0lBQXZGLHVDQUFzQjtJQUE4QixlQUFzQjtJQUF0Qix5Q0FBc0I7OztJQVV0RixpQ0FDa0Q7SUFBQSxZQUFzQjtJQUFBLGlCQUFTOzs7O0lBRDdDLHVDQUFzQixvREFBQTtJQUNSLGVBQXNCO0lBQXRCLHlDQUFzQjs7QURKNUU7O0dBRUc7QUFDSDtJQUFBLE1BS2EseUJBQXlCO1FBTHRDO1lBTUUsVUFBSyxHQUFXO2dCQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO2dCQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztnQkFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7YUFDdkMsQ0FBQztZQUNGLFNBQUksR0FBVTtnQkFDWixFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztnQkFDbEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7Z0JBQzVDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO2FBQ3JDLENBQUM7WUFDRixpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25DLGdCQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FLbEM7UUFIQyxTQUFTLENBQUMsS0FBWTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFJLEtBQUssQ0FBQyxNQUE0QixDQUFDLEtBQUssQ0FBQztRQUMvRCxDQUFDOztzR0FoQlUseUJBQXlCO2tFQUF6Qix5QkFBeUI7WUNwQnRDLDBCQUFJO1lBQUEsbURBQW1DO1lBQUEsaUJBQUs7WUFDNUMseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLDZCQUFhO1lBQUEsaUJBQVk7WUFDcEMscUNBQ0U7WUFEVSx5SkFBd0I7WUFDbEMsNkJBQXlCO1lBQ3pCLHdGQUFnRTtZQUNsRSxpQkFBYTtZQUNmLGlCQUFpQjtZQUNqQix5QkFBRztZQUFBLFlBQThCO1lBQUEsaUJBQUk7WUFFckMsMkJBQUk7WUFBQSx1REFBc0M7WUFBQSxpQkFBSztZQUMvQywwQ0FDRTtZQUFBLGtDQUFXO1lBQUEsNkJBQVk7WUFBQSxpQkFBWTtZQUNuQyxrQ0FDRTtZQUR1QiwrR0FBVSxxQkFBaUIsSUFBQztZQUNuRCw2QkFBMEI7WUFDMUIsa0ZBQ2tEO1lBQ3BELGlCQUFTO1lBQ1gsaUJBQWlCO1lBQ2pCLDBCQUFHO1lBQUEsYUFBNkI7WUFBQSxpQkFBSTs7WUFoQnRCLGVBQXdCO1lBQXhCLHdDQUF3QjtZQUVDLGVBQTRCO1lBQTVCLG1DQUE0QjtZQUdoRSxlQUE4QjtZQUE5Qiw2REFBOEI7WUFPckIsZUFBMkI7WUFBM0Isa0NBQTJCO1lBSXBDLGVBQTZCO1lBQTdCLDREQUE2Qjs7b0NEbkJoQztLQXFDQztTQWpCWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc2VsZWN0IHdpdGggaW5pdGlhbCB2YWx1ZSBhbmQgbm8gZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SW5pdGlhbFZhbHVlRXhhbXBsZSB7XG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ31cbiAgXTtcbiAgY2FyczogQ2FyW10gPSBbXG4gICAge3ZhbHVlOiAnZm9yZCcsIHZpZXdWYWx1ZTogJ0ZvcmQnfSxcbiAgICB7dmFsdWU6ICdjaGV2cm9sZXQnLCB2aWV3VmFsdWU6ICdDaGV2cm9sZXQnfSxcbiAgICB7dmFsdWU6ICdkb2RnZScsIHZpZXdWYWx1ZTogJ0RvZGdlJ31cbiAgXTtcbiAgc2VsZWN0ZWRGb29kID0gdGhpcy5mb29kc1syXS52YWx1ZTtcbiAgc2VsZWN0ZWRDYXIgPSB0aGlzLmNhcnNbMF0udmFsdWU7XG5cbiAgc2VsZWN0Q2FyKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDYXIgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcbiAgfVxufVxuIiwiPGg0PkJhc2ljIG1hdC1zZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlPC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZvb2Q8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgWyh2YWx1ZSldPVwic2VsZWN0ZWRGb29kXCI+XG4gICAgPG1hdC1vcHRpb24+PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZvb2RzXCI+e3sgb3B0aW9uLnZpZXdWYWx1ZSB9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZEZvb2R9fTwvcD5cblxuPGg0PkJhc2ljIG5hdGl2ZSBzZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlPC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgKGNoYW5nZSk9XCJzZWxlY3RDYXIoJGV2ZW50KVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cbiAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY2Fyc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkQ2FyID09PSBvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmlld1ZhbHVlIH19PC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZENhcn19PC9wPlxuIl19