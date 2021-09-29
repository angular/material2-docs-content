import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function CheckboxOverviewExample_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "mat-checkbox", 6);
    i0.ɵɵlistener("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r3); const subtask_r1 = restoredCtx.$implicit; return subtask_r1.completed = $event; })("ngModelChange", function CheckboxOverviewExample_li_11_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.updateAllComplete(); });
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
CheckboxOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 12, vars: 6, consts: [[1, "example-section"], [1, "example-margin"], [1, "example-margin", 3, "disabled"], [1, "example-list-section"], [1, "example-margin", 3, "checked", "color", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "ngModel", "color", "ngModelChange"]], template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("checked", ctx.allComplete)("color", ctx.task.color)("indeterminate", ctx.someComplete());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.task.name, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.task.subtasks);
    } }, directives: [i1.MatCheckbox, i2.NgForOf, i3.NgControlStatus, i3.NgModel], styles: [".example-section[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxOverviewExample, [{
        type: Component,
        args: [{ selector: 'checkbox-overview-example', template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ2lCbEMsMEJBQTBDO0lBQ3hDLHVDQUVvRDtJQUZ0Qyw0UEFBK0IsNktBRWQsMEJBQW1CLElBRkw7SUFHM0MsWUFDRjtJQUFBLGlCQUFlO0lBQ2pCLGlCQUFLOzs7SUFMVyxlQUErQjtJQUEvQiw4Q0FBK0IsMkJBQUE7SUFHM0MsZUFDRjtJQURFLGdEQUNGOztBRFpSOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLFNBQUksR0FBUztZQUNYLElBQUksRUFBRSxlQUFlO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRTtnQkFDUixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO2dCQUNyRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO2dCQUNuRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO2FBQ2hEO1NBQ0YsQ0FBQztRQUVGLGdCQUFXLEdBQVksS0FBSyxDQUFDO0tBb0I5QjtJQWxCQyxpQkFBaUI7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDckYsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OzhGQS9CVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ2xCcEMsa0NBQWlDO1FBQy9CLHVDQUFxQztRQUFBLHlCQUFTO1FBQUEsaUJBQWU7UUFDN0QsdUNBQXVEO1FBQUEsd0JBQVE7UUFBQSxpQkFBZTtRQUNoRixpQkFBVTtRQUVWLGtDQUFpQztRQUMvQiwrQkFBbUM7UUFDakMsdUNBSWdEO1FBQWxDLGtIQUFVLDBCQUFzQixJQUFDO1FBQzdDLFlBQ0Y7UUFBQSxpQkFBZTtRQUNqQixpQkFBTztRQUNQLCtCQUFtQztRQUNqQywyQkFBSTtRQUNGLHdFQU1LO1FBQ1AsaUJBQUs7UUFDUCxpQkFBTztRQUNULGlCQUFVOztRQXhCNkIsZUFBaUI7UUFBakIsK0JBQWlCO1FBTXRDLGVBQXVCO1FBQXZCLHlDQUF1Qix5QkFBQSxxQ0FBQTtRQUluQyxlQUNGO1FBREUsOENBQ0Y7UUFJMEIsZUFBZ0I7UUFBaEIsMkNBQWdCOzt1RkRDakMsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhc2sge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgc3VidGFza3M/OiBUYXNrW107XG59XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGNoZWNrYm94ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94T3ZlcnZpZXdFeGFtcGxlIHtcbiAgdGFzazogVGFzayA9IHtcbiAgICBuYW1lOiAnSW5kZXRlcm1pbmF0ZScsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHN1YnRhc2tzOiBbXG4gICAgICB7bmFtZTogJ1ByaW1hcnknLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICAgIHtuYW1lOiAnQWNjZW50JywgY29tcGxldGVkOiBmYWxzZSwgY29sb3I6ICdhY2NlbnQnfSxcbiAgICAgIHtuYW1lOiAnV2FybicsIGNvbXBsZXRlZDogZmFsc2UsIGNvbG9yOiAnd2Fybid9XG4gICAgXVxuICB9O1xuXG4gIGFsbENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgdXBkYXRlQWxsQ29tcGxldGUoKSB7XG4gICAgdGhpcy5hbGxDb21wbGV0ZSA9IHRoaXMudGFzay5zdWJ0YXNrcyAhPSBudWxsICYmIHRoaXMudGFzay5zdWJ0YXNrcy5ldmVyeSh0ID0+IHQuY29tcGxldGVkKTtcbiAgfVxuXG4gIHNvbWVDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy50YXNrLnN1YnRhc2tzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGFzay5zdWJ0YXNrcy5maWx0ZXIodCA9PiB0LmNvbXBsZXRlZCkubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDb21wbGV0ZTtcbiAgfVxuXG4gIHNldEFsbChjb21wbGV0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbENvbXBsZXRlID0gY29tcGxldGVkO1xuICAgIGlmICh0aGlzLnRhc2suc3VidGFza3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRhc2suc3VidGFza3MuZm9yRWFjaCh0ID0+IHQuY29tcGxldGVkID0gY29tcGxldGVkKTtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+Q2hlY2sgbWUhPC9tYXQtY2hlY2tib3g+XG4gIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxuICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJhbGxDb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICBbY29sb3JdPVwidGFzay5jb2xvclwiXG4gICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzb21lQ29tcGxldGUoKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInNldEFsbCgkZXZlbnQuY2hlY2tlZClcIj5cbiAgICAgIHt7dGFzay5uYW1lfX1cbiAgICA8L21hdC1jaGVja2JveD5cbiAgPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtbGlzdC1zZWN0aW9uXCI+XG4gICAgPHVsPlxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBzdWJ0YXNrIG9mIHRhc2suc3VidGFza3NcIj5cbiAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cInN1YnRhc2suY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwic3VidGFzay5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQWxsQ29tcGxldGUoKVwiPlxuICAgICAgICAgIHt7c3VidGFzay5uYW1lfX1cbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvc3Bhbj5cbjwvc2VjdGlvbj5cbiJdfQ==