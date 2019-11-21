import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/radio";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/checkbox";
import * as i5 from "@angular/material/slide-toggle";
/**
 * @title Configurable slide-toggle
 */
var SlideToggleConfigurableExample = /** @class */ (function () {
    function SlideToggleConfigurableExample() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    SlideToggleConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'slide-toggle-configurable-example',
                    templateUrl: 'slide-toggle-configurable-example.html',
                    styleUrls: ['slide-toggle-configurable-example.css'],
                },] },
    ];
    SlideToggleConfigurableExample.ɵfac = function SlideToggleConfigurableExample_Factory(t) { return new (t || SlideToggleConfigurableExample)(); };
    SlideToggleConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: SlideToggleConfigurableExample, selectors: [["slide-toggle-configurable-example"]], decls: 27, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "result"], [1, "example-margin", 3, "color", "checked", "disabled"]], template: function SlideToggleConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
    return SlideToggleConfigurableExample;
}());
export { SlideToggleConfigurableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-configurable-example',
                templateUrl: 'slide-toggle-configurable-example.html',
                styleUrls: ['slide-toggle-configurable-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUvc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUvc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUd4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxVQUFLLEdBQWlCLFFBQVEsQ0FBQztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDbEI7O2dCQVRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxXQUFXLEVBQUUsd0NBQXdDO29CQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztpQkFDckQ7O2dIQUNZLDhCQUE4Qjt1RUFBOUIsOEJBQThCO1lDWDNDLGdDQUNFO1lBQUEsd0NBQ0U7WUFBQSw2QkFBdUI7WUFBQSxvQ0FBb0I7WUFBQSxpQkFBSztZQUVoRCxrQ0FDRTtZQUFBLGdDQUE4QjtZQUFBLHNCQUFNO1lBQUEsaUJBQVE7WUFDNUMsMENBQ0U7WUFEZSxnS0FBbUI7WUFDbEMsMkNBQ0U7WUFBQSx5QkFDRjtZQUFBLGlCQUFtQjtZQUNuQiw0Q0FDRTtZQUFBLHlCQUNGO1lBQUEsaUJBQW1CO1lBQ25CLDRDQUNFO1lBQUEsdUJBQ0Y7WUFBQSxpQkFBbUI7WUFDckIsaUJBQWtCO1lBQ3BCLGlCQUFVO1lBRVYsbUNBQ0U7WUFBQSx3Q0FBMkQ7WUFBdEIsZ0tBQXFCO1lBQUMsd0JBQU87WUFBQSxpQkFBZTtZQUNuRixpQkFBVTtZQUVWLG1DQUNFO1lBQUEsd0NBQTREO1lBQXZCLGlLQUFzQjtZQUFDLHlCQUFRO1lBQUEsaUJBQWU7WUFDckYsaUJBQVU7WUFDWixpQkFBbUI7WUFDckIsaUJBQVc7WUFFWCxvQ0FDRTtZQUFBLHlDQUNFO1lBQUEsOEJBQXVCO1lBQUEsdUJBQU07WUFBQSxpQkFBSztZQUVsQyxtQ0FDRTtZQUFBLDRDQUtFO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBbUI7WUFDckIsaUJBQVU7WUFDWixpQkFBbUI7WUFDckIsaUJBQVc7O1lBckNZLGVBQW1CO1lBQW5CLG1DQUFtQjtZQWNDLGVBQXFCO1lBQXJCLHFDQUFxQjtZQUlyQixlQUFzQjtZQUF0QixzQ0FBc0I7WUFZdkQsZUFBZTtZQUFmLGlDQUFlLHdCQUFBLDBCQUFBOzt5Q0RwQ3pCO0NBZUMsQUFURCxJQVNDO1NBSlksOEJBQThCO2tEQUE5Qiw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgc2xpZGUtdG9nZ2xlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZVRvZ2dsZUNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ2FjY2VudCc7XG4gIGNoZWNrZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPlNsaWRlciBjb25maWd1cmF0aW9uPC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPkNvbG9yOjwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwiY29sb3JcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwicHJpbWFyeVwiPlxuICAgICAgICAgIFByaW1hcnlcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJhY2NlbnRcIj5cbiAgICAgICAgICBBY2NlbnRcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgdmFsdWU9XCJ3YXJuXCI+XG4gICAgICAgICAgV2FyblxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJjaGVja2VkXCI+Q2hlY2tlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImRpc2FibGVkXCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cInJlc3VsdFwiPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDIgY2xhc3M9XCJleGFtcGxlLWgyXCI+UmVzdWx0PC9oMj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIFNsaWRlIG1lIVxuICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbiJdfQ==