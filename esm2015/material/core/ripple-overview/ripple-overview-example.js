import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/core";
/**
 * @title MatRipple basic usage
 */
export class RippleOverviewExample {
    constructor() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
}
RippleOverviewExample.ɵfac = function RippleOverviewExample_Factory(t) { return new (t || RippleOverviewExample)(); };
RippleOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: RippleOverviewExample, selectors: [["ripple-overview-example"]], decls: 12, vars: 10, consts: [[1, "example-ripple-checkbox", 3, "ngModel", "ngModelChange"], [1, "example-ripple-form-field"], ["matInput", "", "type", "number", "placeholder", "Radius", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Color", 3, "ngModel", "ngModelChange"], ["matRipple", "", 1, "example-ripple-container", "mat-elevation-z4", 3, "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius", "matRippleColor"]], template: function RippleOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-checkbox", 0);
        i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_0_listener($event) { return ctx.centered = $event; });
        i0.ɵɵtext(1, "Centered");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-checkbox", 0);
        i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_2_listener($event) { return ctx.disabled = $event; });
        i0.ɵɵtext(3, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-checkbox", 0);
        i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_mat_checkbox_ngModelChange_4_listener($event) { return ctx.unbounded = $event; });
        i0.ɵɵtext(5, "Unbounded");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field", 1);
        i0.ɵɵelementStart(7, "input", 2);
        i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_7_listener($event) { return ctx.radius = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field", 1);
        i0.ɵɵelementStart(9, "input", 3);
        i0.ɵɵlistener("ngModelChange", function RippleOverviewExample_Template_input_ngModelChange_9_listener($event) { return ctx.color = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 4);
        i0.ɵɵtext(11, " Click me\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.centered);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.unbounded);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.radius);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.color);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRippleCentered", ctx.centered)("matRippleDisabled", ctx.disabled)("matRippleUnbounded", ctx.unbounded)("matRippleRadius", ctx.radius)("matRippleColor", ctx.color);
    } }, directives: [i1.MatCheckbox, i2.NgControlStatus, i2.NgModel, i3.MatFormField, i4.MatInput, i2.NumberValueAccessor, i2.DefaultValueAccessor, i5.MatRipple], styles: [".example-ripple-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n.example-ripple-checkbox[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field[_ngcontent-%COMP%] {\n  margin: 0 12px 0 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RippleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'ripple-overview-example',
                templateUrl: 'ripple-overview-example.html',
                styleUrls: ['ripple-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL3JpcHBsZS1vdmVydmlldy9yaXBwbGUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvcmlwcGxlLW92ZXJ2aWV3L3JpcHBsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztLQUluQjs7MEZBUFkscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNWbEMsdUNBQXFFO1FBQXZELHVKQUFzQjtRQUFpQyx3QkFBUTtRQUFBLGlCQUFlO1FBQzVGLHVDQUFxRTtRQUF2RCx1SkFBc0I7UUFBaUMsd0JBQVE7UUFBQSxpQkFBZTtRQUM1Rix1Q0FBc0U7UUFBeEQsd0pBQXVCO1FBQWlDLHlCQUFTO1FBQUEsaUJBQWU7UUFFOUYseUNBQWtEO1FBQ2hELGdDQUF3RTtRQUF4RCw4SUFBb0I7UUFBcEMsaUJBQXdFO1FBQzFFLGlCQUFpQjtRQUNqQix5Q0FBa0Q7UUFDaEQsZ0NBQW9FO1FBQXBELDZJQUFtQjtRQUFuQyxpQkFBb0U7UUFDdEUsaUJBQWlCO1FBR2pCLCtCQU04QjtRQUM1Qiw0QkFDRjtRQUFBLGlCQUFNOztRQXBCUSxzQ0FBc0I7UUFDdEIsZUFBc0I7UUFBdEIsc0NBQXNCO1FBQ3RCLGVBQXVCO1FBQXZCLHVDQUF1QjtRQUduQixlQUFvQjtRQUFwQixvQ0FBb0I7UUFHcEIsZUFBbUI7UUFBbkIsbUNBQW1CO1FBTWhDLGVBQThCO1FBQTlCLGdEQUE4QixtQ0FBQSxxQ0FBQSwrQkFBQSw2QkFBQTs7dUZESnRCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE1hdFJpcHBsZSBiYXNpYyB1c2FnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaXBwbGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyaXBwbGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmlwcGxlT3ZlcnZpZXdFeGFtcGxlIHtcbiAgY2VudGVyZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdW5ib3VuZGVkID0gZmFsc2U7XG5cbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG4iLCI8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2VudGVyZWRcIiBjbGFzcz1cImV4YW1wbGUtcmlwcGxlLWNoZWNrYm94XCI+Q2VudGVyZWQ8L21hdC1jaGVja2JveD5cbjxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJkaXNhYmxlZFwiIGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtY2hlY2tib3hcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxuPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cInVuYm91bmRlZFwiIGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtY2hlY2tib3hcIj5VbmJvdW5kZWQ8L21hdC1jaGVja2JveD5cblxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtZm9ybS1maWVsZFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJyYWRpdXNcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJSYWRpdXNcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1mb3JtLWZpZWxkXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImNvbG9yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvbG9yXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16NFwiXG4gICAgIG1hdFJpcHBsZVxuICAgICBbbWF0UmlwcGxlQ2VudGVyZWRdPVwiY2VudGVyZWRcIlxuICAgICBbbWF0UmlwcGxlRGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICBbbWF0UmlwcGxlVW5ib3VuZGVkXT1cInVuYm91bmRlZFwiXG4gICAgIFttYXRSaXBwbGVSYWRpdXNdPVwicmFkaXVzXCJcbiAgICAgW21hdFJpcHBsZUNvbG9yXT1cImNvbG9yXCI+XG4gIENsaWNrIG1lXG48L2Rpdj5cbiJdfQ==