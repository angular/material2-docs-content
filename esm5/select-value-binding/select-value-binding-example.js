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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9zZWxlY3QtdmFsdWUtYmluZGluZy9zZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLDZDQUE2QztBQU03QztJQUxBO1FBTUUsYUFBUSxHQUFHLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRlkseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsdVlBQWdEOztTQUVqRCxDQUFDO09BQ1cseUJBQXlCLENBRXJDO0lBQUQsZ0NBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggMi13YXkgdmFsdWUgYmluZGluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFZhbHVlQmluZGluZ0V4YW1wbGUge1xuICBzZWxlY3RlZCA9ICdvcHRpb24yJztcbn1cbiJdfQ==