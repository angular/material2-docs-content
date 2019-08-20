import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/** @title Select with 2-way value binding */
var SelectValueBindingExample = /** @class */ (function () {
    function SelectValueBindingExample() {
        this.selected = 'option2';
    }
    SelectValueBindingExample = tslib_1.__decorate([
        Component({
            selector: 'select-value-binding-example',
            template: "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<p>You selected: {{selected}}</p>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], SelectValueBindingExample);
    return SelectValueBindingExample;
}());
export { SelectValueBindingExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXZhbHVlLWJpbmRpbmcvc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qyw2Q0FBNkM7QUFNN0M7SUFMQTtRQU1FLGFBQVEsR0FBRyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUZZLHlCQUF5QjtRQUxyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLHVZQUFnRDs7U0FFakQsQ0FBQztPQUNXLHlCQUF5QixDQUVyQztJQUFELGdDQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIDItd2F5IHZhbHVlIGJpbmRpbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RWYWx1ZUJpbmRpbmdFeGFtcGxlIHtcbiAgc2VsZWN0ZWQgPSAnb3B0aW9uMic7XG59XG4iXX0=