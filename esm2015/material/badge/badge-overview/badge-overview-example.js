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
BadgeOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 20, vars: 1, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["matBadge", "1", "matBadgeSize", "large"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["mat-raised-button", "", "matBadge", "7", 3, "matBadgeHidden", "click"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.MatBadge, i2.MatButton, i3.MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBS0UsV0FBTSxHQUFHLEtBQUssQ0FBQztLQUtoQjtJQUhDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzt3RkFMVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ1RqQyx5QkFBRztRQUVELCtCQUEyQztRQUFBLGlDQUFpQjtRQUFBLGlCQUFPO1FBRXJFLGlCQUFJO1FBRUoseUJBQUc7UUFFQywrQkFBd0M7UUFBQSxxQ0FBcUI7UUFBQSxpQkFBTztRQUV4RSxpQkFBSTtRQUVKLHlCQUFHO1FBQ0Qsa0RBQ0Y7UUFDRSxpQ0FDa0U7UUFDaEUsd0JBQ0Y7UUFBQSxpQkFBUztRQUVYLGlCQUFJO1FBRUosMEJBQUc7UUFDQyxtREFDSjtRQUNJLGtDQUFtRztRQUFsQyxrR0FBUywyQkFBdUIsSUFBQztRQUM5Rix1QkFDSjtRQUFBLGlCQUFTO1FBRWIsaUJBQUk7UUFFSiwwQkFBRztRQUNELHFDQUNGO1FBQ0Usb0NBQTZDO1FBQUEscUJBQUk7UUFBQSxpQkFBVztRQUcxRCxnQ0FBa0M7UUFDaEMscUZBQ0Y7UUFBQSxpQkFBTztRQUNYLGlCQUFJOztRQWZ1QyxnQkFBeUI7UUFBekIsMkNBQXlCOzt1RkRoQnZELG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFkZ2Ugb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VPdmVydmlld0V4YW1wbGUge1xuICBoaWRkZW4gPSBmYWxzZTtcblxuICB0b2dnbGVCYWRnZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5oaWRkZW4gPSAhdGhpcy5oaWRkZW47XG4gIH1cbn1cbiIsIjxwPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1vdmVybGFwIC0tPlxuICA8c3BhbiBtYXRCYWRnZT1cIjRcIiBtYXRCYWRnZU92ZXJsYXA9XCJmYWxzZVwiPlRleHQgd2l0aCBhIGJhZGdlPC9zcGFuPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1vdmVybGFwIC0tPlxuPC9wPlxuXG48cD5cbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2Utc2l6ZSAtLT5cbiAgICA8c3BhbiBtYXRCYWRnZT1cIjFcIiBtYXRCYWRnZVNpemU9XCJsYXJnZVwiPlRleHQgd2l0aCBsYXJnZSBiYWRnZTwvc3Bhbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2Utc2l6ZSAtLT5cbjwvcD5cblxuPHA+XG4gIEJ1dHRvbiB3aXRoIGEgYmFkZ2Ugb24gdGhlIGxlZnRcbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2UtcG9zaXRpb24gLS0+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIG1hdEJhZGdlPVwiOFwiIG1hdEJhZGdlUG9zaXRpb249XCJiZWZvcmVcIiBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCI+XG4gICAgQWN0aW9uXG4gIDwvYnV0dG9uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1wb3NpdGlvbiAtLT5cbjwvcD5cblxuPHA+XG4gICAgQnV0dG9uIHRvZ2dsZXMgYmFkZ2UgdmlzaWJpbGl0eVxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1oaWRlIC0tPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gbWF0QmFkZ2U9XCI3XCIgW21hdEJhZGdlSGlkZGVuXT1cImhpZGRlblwiIChjbGljayk9XCJ0b2dnbGVCYWRnZVZpc2liaWxpdHkoKVwiPlxuICAgICAgICBIaWRlXG4gICAgPC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLWhpZGUgLS0+XG48L3A+XG5cbjxwPlxuICBJY29uIHdpdGggYSBiYWRnZVxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1jb2xvciAtLT5cbiAgPG1hdC1pY29uIG1hdEJhZGdlPVwiMTVcIiBtYXRCYWRnZUNvbG9yPVwid2FyblwiPmhvbWU8L21hdC1pY29uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1jb2xvciAtLT5cbiAgICA8IS0tIEluY2x1ZGUgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgaWNvbidzIG1lYW5pbmcgZm9yIHNjcmVlbi1yZWFkZXJzIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2RrLXZpc3VhbGx5LWhpZGRlblwiPlxuICAgICAgRXhhbXBsZSB3aXRoIGEgaG9tZSBpY29uIHdpdGggb3ZlcmxhaWQgYmFkZ2Ugc2hvd2luZyB0aGUgbnVtYmVyIDE1XG4gICAgPC9zcGFuPlxuPC9wPlxuXG5cbiJdfQ==