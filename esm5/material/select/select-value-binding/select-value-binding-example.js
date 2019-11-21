import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/** @title Select with 2-way value binding */
var SelectValueBindingExample = /** @class */ (function () {
    function SelectValueBindingExample() {
        this.selected = 'option2';
    }
    SelectValueBindingExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-value-binding-example',
                    templateUrl: 'select-value-binding-example.html',
                    styleUrls: ['select-value-binding-example.css'],
                },] },
    ];
    SelectValueBindingExample.ɵfac = function SelectValueBindingExample_Factory(t) { return new (t || SelectValueBindingExample)(); };
    SelectValueBindingExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectValueBindingExample, selectors: [["select-value-binding-example"]], decls: 14, vars: 2, consts: [[3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function SelectValueBindingExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Select an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 0);
            i0.ɵɵlistener("valueChange", function SelectValueBindingExample_Template_mat_select_valueChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementStart(4, "mat-option");
            i0.ɵɵtext(5, "None");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-option", 1);
            i0.ɵɵtext(7, "Option 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-option", 2);
            i0.ɵɵtext(9, "Option 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-option", 3);
            i0.ɵɵtext(11, "Option 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.selected);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate1("You selected: ", ctx.selected, "");
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption], styles: [""] });
    return SelectValueBindingExample;
}());
export { SelectValueBindingExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectValueBindingExample, [{
        type: Component,
        args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
                styleUrls: ['select-value-binding-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtdmFsdWUtYmluZGluZy9zZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC12YWx1ZS1iaW5kaW5nL3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qyw2Q0FBNkM7QUFDN0M7SUFBQTtRQU1FLGFBQVEsR0FBRyxTQUFTLENBQUM7S0FDdEI7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7O3NHQUNZLHlCQUF5QjtrRUFBekIseUJBQXlCO1lDUnRDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxnQ0FBZ0I7WUFBQSxpQkFBWTtZQUN2QyxxQ0FDRTtZQURVLHFKQUFvQjtZQUM5QixrQ0FBWTtZQUFBLG9CQUFJO1lBQUEsaUJBQWE7WUFDN0IscUNBQTRCO1lBQUEsd0JBQVE7WUFBQSxpQkFBYTtZQUNqRCxxQ0FBNEI7WUFBQSx3QkFBUTtZQUFBLGlCQUFhO1lBQ2pELHNDQUE0QjtZQUFBLHlCQUFRO1lBQUEsaUJBQWE7WUFDbkQsaUJBQWE7WUFDZixpQkFBaUI7WUFFakIsMEJBQUc7WUFBQSxhQUEwQjtZQUFBLGlCQUFJOztZQVJuQixlQUFvQjtZQUFwQixvQ0FBb0I7WUFRL0IsZ0JBQTBCO1lBQTFCLHlEQUEwQjs7b0NEVjdCO0NBVUMsQUFQRCxJQU9DO1NBRlkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIDItd2F5IHZhbHVlIGJpbmRpbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RWYWx1ZUJpbmRpbmdFeGFtcGxlIHtcbiAgc2VsZWN0ZWQgPSAnb3B0aW9uMic7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IGFuIG9wdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJzZWxlY3RlZFwiPlxuICAgIDxtYXQtb3B0aW9uPk5vbmU8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24xXCI+T3B0aW9uIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24yXCI+T3B0aW9uIDI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24zXCI+T3B0aW9uIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZH19PC9wPlxuIl19