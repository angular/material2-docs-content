import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/badge";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Badge overview
 */
var BadgeOverviewExample = /** @class */ (function () {
    function BadgeOverviewExample() {
    }
    BadgeOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'badge-overview-example',
                    templateUrl: 'badge-overview-example.html',
                    styleUrls: ['badge-overview-example.css'],
                },] },
    ];
    BadgeOverviewExample.ɵfac = function BadgeOverviewExample_Factory(t) { return new (t || BadgeOverviewExample)(); };
    BadgeOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: BadgeOverviewExample, selectors: [["badge-overview-example"]], decls: 13, vars: 0, consts: [["matBadge", "4", "matBadgeOverlap", "false"], ["mat-raised-button", "", "color", "primary", "matBadge", "8", "matBadgePosition", "before", "matBadgeColor", "accent"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "cdk-visually-hidden"]], template: function BadgeOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "span", 0);
            i0.ɵɵtext(2, "Text with a badge");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, " Button with a badge on the left ");
            i0.ɵɵelementStart(5, "button", 1);
            i0.ɵɵtext(6, " Action ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, " Icon with a badge ");
            i0.ɵɵelementStart(9, "mat-icon", 2);
            i0.ɵɵtext(10, "home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 3);
            i0.ɵɵtext(12, " Example with a home icon with overlaid badge showing the number 15 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatBadge, i2.MatButton, i3.MatIcon], styles: [""] });
    return BadgeOverviewExample;
}());
export { BadgeOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
                styleUrls: ['badge-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLb0M7O2dCQUxuQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzFDOzs0RkFDWSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ1ZqQyx5QkFDRTtZQUFBLCtCQUEyQztZQUFBLGlDQUFpQjtZQUFBLGlCQUFPO1lBQ3JFLGlCQUFJO1lBRUoseUJBQ0U7WUFBQSxpREFDQTtZQUFBLGlDQUVFO1lBQUEsd0JBQ0Y7WUFBQSxpQkFBUztZQUNYLGlCQUFJO1lBRUoseUJBQ0U7WUFBQSxtQ0FDQTtZQUFBLG1DQUE2QztZQUFBLHFCQUFJO1lBQUEsaUJBQVc7WUFFMUQsZ0NBQ0U7WUFBQSxxRkFDRjtZQUFBLGlCQUFPO1lBQ1gsaUJBQUk7OytCRG5CSjtDQVVvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7bUNBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhZGdlIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydiYWRnZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZU92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxzcGFuIG1hdEJhZGdlPVwiNFwiIG1hdEJhZGdlT3ZlcmxhcD1cImZhbHNlXCI+VGV4dCB3aXRoIGEgYmFkZ2U8L3NwYW4+XG48L3A+XG5cbjxwPlxuICBCdXR0b24gd2l0aCBhIGJhZGdlIG9uIHRoZSBsZWZ0XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIG1hdEJhZGdlPVwiOFwiIG1hdEJhZGdlUG9zaXRpb249XCJiZWZvcmVcIiBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCI+XG4gICAgQWN0aW9uXG4gIDwvYnV0dG9uPlxuPC9wPlxuXG48cD5cbiAgSWNvbiB3aXRoIGEgYmFkZ2VcbiAgPG1hdC1pY29uIG1hdEJhZGdlPVwiMTVcIiBtYXRCYWRnZUNvbG9yPVwid2FyblwiPmhvbWU8L21hdC1pY29uPlxuICAgIDwhLS0gSW5jbHVkZSB0ZXh0IGRlc2NyaXB0aW9uIG9mIHRoZSBpY29uJ3MgbWVhbmluZyBmb3Igc2NyZWVuLXJlYWRlcnMgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJjZGstdmlzdWFsbHktaGlkZGVuXCI+XG4gICAgICBFeGFtcGxlIHdpdGggYSBob21lIGljb24gd2l0aCBvdmVybGFpZCBiYWRnZSBzaG93aW5nIHRoZSBudW1iZXIgMTVcbiAgICA8L3NwYW4+XG48L3A+XG5cbiJdfQ==