/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/slide-toggle/slide-toggle-configurable/slide-toggle-configurable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/checkbox";
import * as i5 from "@angular/material/slide-toggle";
/**
 * \@title Configurable slide-toggle
 */
export class SlideToggleConfigurableExample {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
}
SlideToggleConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-configurable-example',
                templateUrl: 'slide-toggle-configurable-example.html',
                styleUrls: ['slide-toggle-configurable-example.css'],
            },] },
];
/** @nocollapse */ SlideToggleConfigurableExample.ɵfac = function SlideToggleConfigurableExample_Factory(t) { return new (t || SlideToggleConfigurableExample)(); };
/** @nocollapse */ SlideToggleConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: SlideToggleConfigurableExample, selectors: [["slide-toggle-configurable-example"]], decls: 27, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "result"], [1, "example-margin", 3, "color", "checked", "disabled"]], template: function SlideToggleConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Slider configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "label", 2);
        i0.ɵɵtext(6, "Color:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
        i0.ɵɵelementStart(8, "mat-radio-button", 4);
        i0.ɵɵtext(9, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-radio-button", 5);
        i0.ɵɵtext(11, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-radio-button", 6);
        i0.ɵɵtext(13, " Warn ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "section", 1);
        i0.ɵɵelementStart(15, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_15_listener($event) { return ctx.checked = $event; });
        i0.ɵɵtext(16, "Checked");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "section", 1);
        i0.ɵɵelementStart(18, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
        i0.ɵɵtext(19, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-card", 8);
        i0.ɵɵelementStart(21, "mat-card-content");
        i0.ɵɵelementStart(22, "h2", 0);
        i0.ɵɵtext(23, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "section", 1);
        i0.ɵɵelementStart(25, "mat-slide-toggle", 9);
        i0.ɵɵtext(26, " Slide me! ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.color);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.checked);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.disabled);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.MatCheckbox, i5.MatSlideToggle], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-configurable-example',
                templateUrl: 'slide-toggle-configurable-example.html',
                styleUrls: ['slide-toggle-configurable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SlideToggleConfigurableExample.prototype.color;
    /** @type {?} */
    SlideToggleConfigurableExample.prototype.checked;
    /** @type {?} */
    SlideToggleConfigurableExample.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUvc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUvc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBV3hDLE1BQU0sT0FBTyw4QkFBOEI7SUFMM0M7UUFNRSxVQUFLLEdBQWlCLFFBQVEsQ0FBQztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDbEI7OztZQVRBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDs7K0hBQ1ksOEJBQThCO3NGQUE5Qiw4QkFBOEI7UUNYM0MsZ0NBQ0U7UUFBQSx3Q0FDRTtRQUFBLDZCQUF1QjtRQUFBLG9DQUFvQjtRQUFBLGlCQUFLO1FBRWhELGtDQUNFO1FBQUEsZ0NBQThCO1FBQUEsc0JBQU07UUFBQSxpQkFBUTtRQUM1QywwQ0FDRTtRQURlLGdLQUFtQjtRQUNsQywyQ0FDRTtRQUFBLHlCQUNGO1FBQUEsaUJBQW1CO1FBQ25CLDRDQUNFO1FBQUEseUJBQ0Y7UUFBQSxpQkFBbUI7UUFDbkIsNENBQ0U7UUFBQSx1QkFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBa0I7UUFDcEIsaUJBQVU7UUFFVixtQ0FDRTtRQUFBLHdDQUEyRDtRQUF0QixnS0FBcUI7UUFBQyx3QkFBTztRQUFBLGlCQUFlO1FBQ25GLGlCQUFVO1FBRVYsbUNBQ0U7UUFBQSx3Q0FBNEQ7UUFBdkIsaUtBQXNCO1FBQUMseUJBQVE7UUFBQSxpQkFBZTtRQUNyRixpQkFBVTtRQUNaLGlCQUFtQjtRQUNyQixpQkFBVztRQUVYLG9DQUNFO1FBQUEseUNBQ0U7UUFBQSw4QkFBdUI7UUFBQSx1QkFBTTtRQUFBLGlCQUFLO1FBRWxDLG1DQUNFO1FBQUEsNENBS0U7UUFBQSw0QkFDRjtRQUFBLGlCQUFtQjtRQUNyQixpQkFBVTtRQUNaLGlCQUFtQjtRQUNyQixpQkFBVzs7UUFyQ1ksZUFBbUI7UUFBbkIsbUNBQW1CO1FBY0MsZUFBcUI7UUFBckIscUNBQXFCO1FBSXJCLGVBQXNCO1FBQXRCLHNDQUFzQjtRQVl2RCxlQUFlO1FBQWYsaUNBQWUsd0JBQUEsMEJBQUE7O2tERHpCWiw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOzs7O0lBRUMsK0NBQStCOztJQUMvQixpREFBZ0I7O0lBQ2hCLGtEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHNsaWRlLXRvZ2dsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZS10b2dnbGUtY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlIHtcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdhY2NlbnQnO1xuICBjaGVja2VkID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG4iLCI8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5TbGlkZXIgY29uZmlndXJhdGlvbjwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5Db2xvcjo8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbKG5nTW9kZWwpXT1cImNvbG9yXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiB2YWx1ZT1cInByaW1hcnlcIj5cbiAgICAgICAgICBQcmltYXJ5XG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiYWNjZW50XCI+XG4gICAgICAgICAgQWNjZW50XG4gICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwid2FyblwiPlxuICAgICAgICAgIFdhcm5cbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiY2hlY2tlZFwiPkNoZWNrZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJkaXNhYmxlZFwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJyZXN1bHRcIj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlJlc3VsdDwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICBTbGlkZSBtZSFcbiAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=