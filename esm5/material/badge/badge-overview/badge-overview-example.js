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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
                styleUrls: ['badge-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS29DOztnQkFMbkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUMxQzs7NEZBQ1ksb0JBQW9COzZEQUFwQixvQkFBb0I7WUNWakMseUJBQ0U7WUFBQSwrQkFBMkM7WUFBQSxpQ0FBaUI7WUFBQSxpQkFBTztZQUNyRSxpQkFBSTtZQUVKLHlCQUNFO1lBQUEsaURBQ0E7WUFBQSxpQ0FFRTtZQUFBLHdCQUNGO1lBQUEsaUJBQVM7WUFDWCxpQkFBSTtZQUVKLHlCQUNFO1lBQUEsbUNBQ0E7WUFBQSxtQ0FBNkM7WUFBQSxxQkFBSTtZQUFBLGlCQUFXO1lBRTFELGdDQUNFO1lBQUEscUZBQ0Y7WUFBQSxpQkFBTztZQUNYLGlCQUFJOzsrQkRuQko7Q0FVb0MsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYWRnZSBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYWRnZS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdiYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VPdmVydmlld0V4YW1wbGUge31cbiIsIjxwPlxuICA8c3BhbiBtYXRCYWRnZT1cIjRcIiBtYXRCYWRnZU92ZXJsYXA9XCJmYWxzZVwiPlRleHQgd2l0aCBhIGJhZGdlPC9zcGFuPlxuPC9wPlxuXG48cD5cbiAgQnV0dG9uIHdpdGggYSBiYWRnZSBvbiB0aGUgbGVmdFxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBtYXRCYWRnZT1cIjhcIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCIgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiPlxuICAgIEFjdGlvblxuICA8L2J1dHRvbj5cbjwvcD5cblxuPHA+XG4gIEljb24gd2l0aCBhIGJhZGdlXG4gIDxtYXQtaWNvbiBtYXRCYWRnZT1cIjE1XCIgbWF0QmFkZ2VDb2xvcj1cIndhcm5cIj5ob21lPC9tYXQtaWNvbj5cbiAgICA8IS0tIEluY2x1ZGUgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgaWNvbidzIG1lYW5pbmcgZm9yIHNjcmVlbi1yZWFkZXJzIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2RrLXZpc3VhbGx5LWhpZGRlblwiPlxuICAgICAgRXhhbXBsZSB3aXRoIGEgaG9tZSBpY29uIHdpdGggb3ZlcmxhaWQgYmFkZ2Ugc2hvd2luZyB0aGUgbnVtYmVyIDE1XG4gICAgPC9zcGFuPlxuPC9wPlxuXG4iXX0=