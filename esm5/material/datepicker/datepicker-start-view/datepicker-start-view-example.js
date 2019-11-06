import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
var _c0 = ["picker", ""];
/** @title Datepicker start date */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-start-view-example',
                    templateUrl: 'datepicker-start-view-example.html',
                    styleUrls: ['datepicker-start-view-example.css'],
                },] },
    ];
    DatepickerStartViewExample.ɵfac = function DatepickerStartViewExample_Factory(t) { return new (t || DatepickerStartViewExample)(); };
    DatepickerStartViewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerStartViewExample, selectors: [["datepicker-start-view-example"]], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"]], template: function DatepickerStartViewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelement(1, "input", 0);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(3, "mat-datepicker", 2, _c0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r19 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r19);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r19);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("startAt", ctx.startDate);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerStartViewExample;
}());
export { DatepickerStartViewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerStartViewExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-start-view-example',
                templateUrl: 'datepicker-start-view-example.html',
                styleUrls: ['datepicker-start-view-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItc3RhcnQtdmlldy9kYXRlcGlja2VyLXN0YXJ0LXZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1zdGFydC12aWV3L2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLG1DQUFtQztBQUNuQztJQUFBO1FBTUUsY0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbEM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxXQUFXLEVBQUUsb0NBQW9DO29CQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDakQ7O3dHQUNZLDBCQUEwQjttRUFBMUIsMEJBQTBCO1lDUnZDLHNDQUNFO1lBQUEsMkJBQ0E7WUFBQSwyQ0FBd0U7WUFDeEUseUNBQWdGO1lBQ2xGLGlCQUFpQjs7O1lBSEMsZUFBd0I7WUFBeEIsb0NBQXdCO1lBQ1AsZUFBYztZQUFkLDBCQUFjO1lBQ04sZUFBcUI7WUFBckIsdUNBQXFCOztxQ0RIaEU7Q0FVQyxBQVBELElBT0M7U0FGWSwwQkFBMEI7bUNBQTFCLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBzdGFydCBkYXRlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXN0YXJ0LXZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXN0YXJ0LXZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclN0YXJ0Vmlld0V4YW1wbGUge1xuICBzdGFydERhdGUgPSBuZXcgRGF0ZSgxOTkwLCAwLCAxKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgZGF0ZVwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlciBzdGFydFZpZXc9XCJ5ZWFyXCIgW3N0YXJ0QXRdPVwic3RhcnREYXRlXCI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=