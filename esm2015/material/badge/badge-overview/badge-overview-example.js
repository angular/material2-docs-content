import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/badge";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Badge overview
 */
export class BadgeOverviewExample {
    constructor() {
        this.hidden = false;
    }
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
}
BadgeOverviewExample.ɵfac = function BadgeOverviewExample_Factory(t) { return new (t || BadgeOverviewExample)(); };
BadgeOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 20, vars: 1, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["matBadge", "1", "matBadgeSize", "large"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["mat-raised-button", "", "matBadge", "7", 3, "matBadgeHidden", "click"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "span", 0);
        i0.ɵɵtext(2, "Text with a badge");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵelementStart(4, "span", 1);
        i0.ɵɵtext(5, "Text with large badge");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, " Button with a badge on the left\n");
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵtext(9, " Action ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11, " Button toggles badge visibility\n");
        i0.ɵɵelementStart(12, "button", 3);
        i0.ɵɵlistener("click", function BadgeOverviewExample_Template_button_click_12_listener() { return ctx.toggleBadgeVisibility(); });
        i0.ɵɵtext(13, " Hide ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵtext(15, " Icon with a badge\n");
        i0.ɵɵelementStart(16, "mat-icon", 4);
        i0.ɵɵtext(17, "home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "span", 5);
        i0.ɵɵtext(19, " Example with a home icon with overlaid badge showing the number 15 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("matBadgeHidden", ctx.hidden);
    } }, directives: [i1.MatBadge, i2.MatButton, i3.MatIcon], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
                styleUrls: ['badge-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTUUsV0FBTSxHQUFHLEtBQUssQ0FBQztLQUtoQjtJQUhDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzt3RkFMVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1ZqQyx5QkFDQTtRQUNFLCtCQUEyQztRQUFBLGlDQUFpQjtRQUFBLGlCQUFPO1FBRXJFLGlCQUFJO1FBRUoseUJBQ0E7UUFDSSwrQkFBd0M7UUFBQSxxQ0FBcUI7UUFBQSxpQkFBTztRQUV4RSxpQkFBSTtRQUVKLHlCQUNFO1FBQUEsa0RBQ0Y7UUFDRSxpQ0FFRTtRQUFBLHdCQUNGO1FBQUEsaUJBQVM7UUFFWCxpQkFBSTtRQUVKLDBCQUNJO1FBQUEsbURBQ0o7UUFDSSxrQ0FDSTtRQUQ2RCxrR0FBUywyQkFBdUIsSUFBQztRQUM5Rix1QkFDSjtRQUFBLGlCQUFTO1FBRWIsaUJBQUk7UUFFSiwwQkFDRTtRQUFBLHFDQUNGO1FBQ0Usb0NBQTZDO1FBQUEscUJBQUk7UUFBQSxpQkFBVztRQUcxRCxnQ0FDRTtRQUFBLHFGQUNGO1FBQUEsaUJBQU87UUFDWCxpQkFBSTs7UUFmdUMsZ0JBQXlCO1FBQXpCLDJDQUF5Qjs7a0REZnZELG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhZGdlIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydiYWRnZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZU92ZXJ2aWV3RXhhbXBsZSB7XG4gIGhpZGRlbiA9IGZhbHNlO1xuXG4gIHRvZ2dsZUJhZGdlVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLmhpZGRlbiA9ICF0aGlzLmhpZGRlbjtcbiAgfVxufVxuIiwiPHA+XG48IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLW92ZXJsYXAgLS0+XG4gIDxzcGFuIG1hdEJhZGdlPVwiNFwiIG1hdEJhZGdlT3ZlcmxhcD1cImZhbHNlXCI+VGV4dCB3aXRoIGEgYmFkZ2U8L3NwYW4+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLW92ZXJsYXAgLS0+XG48L3A+XG5cbjxwPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1zaXplIC0tPlxuICAgIDxzcGFuIG1hdEJhZGdlPVwiMVwiIG1hdEJhZGdlU2l6ZT1cImxhcmdlXCI+VGV4dCB3aXRoIGxhcmdlIGJhZGdlPC9zcGFuPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1zaXplIC0tPlxuPC9wPlxuXG48cD5cbiAgQnV0dG9uIHdpdGggYSBiYWRnZSBvbiB0aGUgbGVmdFxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1wb3NpdGlvbiAtLT5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgbWF0QmFkZ2U9XCI4XCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiIG1hdEJhZGdlQ29sb3I9XCJhY2NlbnRcIj5cbiAgICBBY3Rpb25cbiAgPC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLXBvc2l0aW9uIC0tPlxuPC9wPlxuXG48cD5cbiAgICBCdXR0b24gdG9nZ2xlcyBiYWRnZSB2aXNpYmlsaXR5XG48IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLWhpZGUgLS0+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBtYXRCYWRnZT1cIjdcIiBbbWF0QmFkZ2VIaWRkZW5dPVwiaGlkZGVuXCIgKGNsaWNrKT1cInRvZ2dsZUJhZGdlVmlzaWJpbGl0eSgpXCI+XG4gICAgICAgIEhpZGVcbiAgICA8L2J1dHRvbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2UtaGlkZSAtLT5cbjwvcD5cblxuPHA+XG4gIEljb24gd2l0aCBhIGJhZGdlXG48IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLWNvbG9yIC0tPlxuICA8bWF0LWljb24gbWF0QmFkZ2U9XCIxNVwiIG1hdEJhZGdlQ29sb3I9XCJ3YXJuXCI+aG9tZTwvbWF0LWljb24+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLWNvbG9yIC0tPlxuICAgIDwhLS0gSW5jbHVkZSB0ZXh0IGRlc2NyaXB0aW9uIG9mIHRoZSBpY29uJ3MgbWVhbmluZyBmb3Igc2NyZWVuLXJlYWRlcnMgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJjZGstdmlzdWFsbHktaGlkZGVuXCI+XG4gICAgICBFeGFtcGxlIHdpdGggYSBob21lIGljb24gd2l0aCBvdmVybGFpZCBiYWRnZSBzaG93aW5nIHRoZSBudW1iZXIgMTVcbiAgICA8L3NwYW4+XG48L3A+XG5cblxuIl19