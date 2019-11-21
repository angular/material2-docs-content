/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/radio";
/**
 * \@title Configurable checkbox
 */
export class CheckboxConfigurableExample {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
}
CheckboxConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-configurable-example',
                templateUrl: 'checkbox-configurable-example.html',
                styleUrls: ['checkbox-configurable-example.css'],
            },] },
];
/** @nocollapse */ CheckboxConfigurableExample.ɵfac = function CheckboxConfigurableExample_Factory(t) { return new (t || CheckboxConfigurableExample)(); };
/** @nocollapse */ CheckboxConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Checkbox configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "mat-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.checked = $event; });
        i0.ɵɵtext(6, "Checked");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_7_listener($event) { return ctx.indeterminate = $event; });
        i0.ɵɵtext(8, "Indeterminate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "section", 1);
        i0.ɵɵelementStart(10, "label", 3);
        i0.ɵɵtext(11, "Align:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-radio-group", 4);
        i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_radio_group_ngModelChange_12_listener($event) { return ctx.labelPosition = $event; });
        i0.ɵɵelementStart(13, "mat-radio-button", 5);
        i0.ɵɵtext(14, "After");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-radio-button", 6);
        i0.ɵɵtext(16, "Before");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "section", 1);
        i0.ɵɵelementStart(18, "mat-checkbox", 2);
        i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
        i0.ɵɵtext(19, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-card", 7);
        i0.ɵɵelementStart(21, "mat-card-content");
        i0.ɵɵelementStart(22, "h2", 0);
        i0.ɵɵtext(23, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "section", 1);
        i0.ɵɵelementStart(25, "mat-checkbox", 8);
        i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.checked = $event; });
        i0.ɵɵlistener("indeterminateChange", function CheckboxConfigurableExample_Template_mat_checkbox_indeterminateChange_25_listener($event) { return ctx.indeterminate = $event; });
        i0.ɵɵtext(26, " I'm a checkbox ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.checked);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.indeterminate);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.labelPosition);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.disabled);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.checked)("indeterminate", ctx.indeterminate)("labelPosition", ctx.labelPosition)("disabled", ctx.disabled);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatCheckbox, i3.NgControlStatus, i3.NgModel, i4.MatRadioGroup, i4.MatRadioButton], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-configurable-example',
                templateUrl: 'checkbox-configurable-example.html',
                styleUrls: ['checkbox-configurable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CheckboxConfigurableExample.prototype.checked;
    /** @type {?} */
    CheckboxConfigurableExample.prototype.indeterminate;
    /** @type {?} */
    CheckboxConfigurableExample.prototype.labelPosition;
    /** @type {?} */
    CheckboxConfigurableExample.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBVXhDLE1BQU0sT0FBTywyQkFBMkI7SUFMeEM7UUFNRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQXVCLE9BQU8sQ0FBQztRQUM1QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2xCOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7O3NHQUNZLDJCQUEyQjtnRUFBM0IsMkJBQTJCO1FDVnhDLGdDQUNFO1FBQUEsd0NBQ0U7UUFBQSw2QkFBdUI7UUFBQSxzQ0FBc0I7UUFBQSxpQkFBSztRQUVsRCxrQ0FDRTtRQUFBLHVDQUEyRDtRQUF0Qiw0SkFBcUI7UUFBQyx1QkFBTztRQUFBLGlCQUFlO1FBQ2pGLHVDQUFpRTtRQUE1QixrS0FBMkI7UUFBQyw2QkFBYTtRQUFBLGlCQUFlO1FBQy9GLGlCQUFVO1FBRVYsa0NBQ0U7UUFBQSxpQ0FBOEI7UUFBQSx1QkFBTTtRQUFBLGlCQUFRO1FBQzVDLDJDQUNFO1FBRGUsc0tBQTJCO1FBQzFDLDRDQUF1RDtRQUFBLHNCQUFLO1FBQUEsaUJBQW1CO1FBQy9FLDRDQUF3RDtRQUFBLHVCQUFNO1FBQUEsaUJBQW1CO1FBQ25GLGlCQUFrQjtRQUNwQixpQkFBVTtRQUVWLG1DQUNFO1FBQUEsd0NBQTREO1FBQXZCLDhKQUFzQjtRQUFDLHlCQUFRO1FBQUEsaUJBQWU7UUFDckYsaUJBQVU7UUFDWixpQkFBbUI7UUFDckIsaUJBQVc7UUFFWCxvQ0FDRTtRQUFBLHlDQUNFO1FBQUEsOEJBQXVCO1FBQUEsdUJBQU07UUFBQSxpQkFBSztRQUVsQyxtQ0FDRTtRQUFBLHdDQU1FO1FBSkUsNkpBQXFCO1FBQ3JCLCtLQUFpQztRQUduQyxpQ0FDRjtRQUFBLGlCQUFlO1FBQ2pCLGlCQUFVO1FBQ1osaUJBQW1CO1FBQ3JCLGlCQUFXOztRQWpDZ0MsZUFBcUI7UUFBckIscUNBQXFCO1FBQ3JCLGVBQTJCO1FBQTNCLDJDQUEyQjtRQUsvQyxlQUEyQjtRQUEzQiwyQ0FBMkI7UUFPUCxlQUFzQjtRQUF0QixzQ0FBc0I7UUFZdkQsZUFBcUI7UUFBckIscUNBQXFCLG9DQUFBLG9DQUFBLDBCQUFBOztrRERwQmxCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7SUFFQyw4Q0FBZ0I7O0lBQ2hCLG9EQUFzQjs7SUFDdEIsb0RBQTRDOztJQUM1QywrQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBjaGVja2JveFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgY2hlY2tlZCA9IGZhbHNlO1xuICBpbmRldGVybWluYXRlID0gZmFsc2U7XG4gIGxhYmVsUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG4iLCI8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5DaGVja2JveCBjb25maWd1cmF0aW9uPC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImNoZWNrZWRcIj5DaGVja2VkPC9tYXQtY2hlY2tib3g+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImluZGV0ZXJtaW5hdGVcIj5JbmRldGVybWluYXRlPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+QWxpZ246PC9sYWJlbD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJsYWJlbFBvc2l0aW9uXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImFmdGVyXCI+QWZ0ZXI8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cImJlZm9yZVwiPkJlZm9yZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImRpc2FibGVkXCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cInJlc3VsdFwiPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UmVzdWx0PC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94XG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJjaGVja2VkXCJcbiAgICAgICAgICBbKGluZGV0ZXJtaW5hdGUpXT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICBJJ20gYSBjaGVja2JveFxuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19