import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function CheckboxOverviewExample_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "mat-checkbox", 6);
    i0.ɵɵlistener("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const subtask_r1 = ctx.$implicit; return subtask_r1.completed = $event; })("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.updateAllComplete(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subtask_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", subtask_r1.completed)("color", subtask_r1.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", subtask_r1.name, " ");
} }
/**
 * @title Basic checkboxes
 */
export class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' }
            ]
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => t.completed = completed);
    }
}
CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) { return new (t || CheckboxOverviewExample)(); };
CheckboxOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 12, vars: 5, consts: [[1, "example-section"], [1, "example-margin"], [1, "example-margin", 3, "disabled"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]], template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "mat-checkbox", 1);
        i0.ɵɵtext(2, "Check me!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-checkbox", 2);
        i0.ɵɵtext(4, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "section", 0);
        i0.ɵɵelementStart(6, "span", 3);
        i0.ɵɵelementStart(7, "mat-checkbox", 4);
        i0.ɵɵlistener("change", function CheckboxOverviewExample_Template_mat_checkbox_change_7_listener($event) { return ctx.setAll($event.checked); });
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "span", 3);
        i0.ɵɵelementStart(10, "ul");
        i0.ɵɵtemplate(11, CheckboxOverviewExample_li_11_Template, 3, 3, "li", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", true);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("checked", ctx.allComplete)("indeterminate", ctx.someComplete());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.task.name, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.task.subtasks);
    } }, directives: [i1.MatCheckbox, i2.NgForOf, i3.NgControlStatus, i3.NgModel], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxOverviewExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-overview-example',
                templateUrl: 'checkbox-overview-example.html',
                styleUrls: ['checkbox-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ2dCbEMsMEJBQ0U7SUFBQSx1Q0FHRTtJQUhZLGdPQUErQiwyTUFBQTtJQUczQyxZQUNGO0lBQUEsaUJBQWU7SUFDakIsaUJBQUs7OztJQUxXLGVBQStCO0lBQS9CLDhDQUErQiwyQkFBQTtJQUczQyxlQUNGO0lBREUsZ0RBQ0Y7O0FEWFI7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsU0FBSSxHQUFTO1lBQ1gsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFO2dCQUNSLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7Z0JBQ3JELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7Z0JBQ25ELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7YUFDaEQ7U0FDRixDQUFDO1FBRUYsZ0JBQVcsR0FBWSxLQUFLLENBQUM7S0FvQjlCO0lBbEJDLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyRixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OEZBL0JVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDbEJwQyxrQ0FDRTtRQUFBLHVDQUFxQztRQUFBLHlCQUFTO1FBQUEsaUJBQWU7UUFDN0QsdUNBQXVEO1FBQUEsd0JBQVE7UUFBQSxpQkFBZTtRQUNoRixpQkFBVTtRQUVWLGtDQUNFO1FBQUEsK0JBQ0U7UUFBQSx1Q0FJRTtRQURZLGtIQUFVLDBCQUFzQixJQUFDO1FBQzdDLFlBQ0Y7UUFBQSxpQkFBZTtRQUNqQixpQkFBTztRQUNQLCtCQUNFO1FBQUEsMkJBQ0U7UUFBQSx3RUFDRTtRQU1KLGlCQUFLO1FBQ1AsaUJBQU87UUFDVCxpQkFBVTs7UUF2QjZCLGVBQWlCO1FBQWpCLCtCQUFpQjtRQU10QyxlQUF1QjtRQUF2Qix5Q0FBdUIscUNBQUE7UUFHbkMsZUFDRjtRQURFLDhDQUNGO1FBSU0sZUFBcUM7UUFBckMsMkNBQXFDOztrRERFbEMsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG4gIHN1YnRhc2tzPzogVGFza1tdO1xufVxuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBjaGVja2JveGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHRhc2s6IFRhc2sgPSB7XG4gICAgbmFtZTogJ0luZGV0ZXJtaW5hdGUnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICBzdWJ0YXNrczogW1xuICAgICAge25hbWU6ICdQcmltYXJ5JywgY29tcGxldGVkOiBmYWxzZSwgY29sb3I6ICdwcmltYXJ5J30sXG4gICAgICB7bmFtZTogJ0FjY2VudCcsIGNvbXBsZXRlZDogZmFsc2UsIGNvbG9yOiAnYWNjZW50J30sXG4gICAgICB7bmFtZTogJ1dhcm4nLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ3dhcm4nfVxuICAgIF1cbiAgfTtcblxuICBhbGxDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHVwZGF0ZUFsbENvbXBsZXRlKCkge1xuICAgIHRoaXMuYWxsQ29tcGxldGUgPSB0aGlzLnRhc2suc3VidGFza3MgIT0gbnVsbCAmJiB0aGlzLnRhc2suc3VidGFza3MuZXZlcnkodCA9PiB0LmNvbXBsZXRlZCk7XG4gIH1cblxuICBzb21lQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudGFzay5zdWJ0YXNrcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRhc2suc3VidGFza3MuZmlsdGVyKHQgPT4gdC5jb21wbGV0ZWQpLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ29tcGxldGU7XG4gIH1cblxuICBzZXRBbGwoY29tcGxldGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxDb21wbGV0ZSA9IGNvbXBsZXRlZDtcbiAgICBpZiAodGhpcy50YXNrLnN1YnRhc2tzID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50YXNrLnN1YnRhc2tzLmZvckVhY2godCA9PiB0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZCk7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPkNoZWNrIG1lITwvbWF0LWNoZWNrYm94PlxuICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1saXN0LXNlY3Rpb25cIj5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiYWxsQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwic29tZUNvbXBsZXRlKClcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZXRBbGwoJGV2ZW50LmNoZWNrZWQpXCI+XG4gICAgICB7e3Rhc2submFtZX19XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxuICAgIDx1bD5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc3VidGFzayBvZiB0YXNrLnN1YnRhc2tzXCI+XG4gICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzdWJ0YXNrLmNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cInN1YnRhc2suY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUFsbENvbXBsZXRlKClcIj5cbiAgICAgICAgICB7e3N1YnRhc2submFtZX19XG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L3NwYW4+XG48L3NlY3Rpb24+XG4iXX0=