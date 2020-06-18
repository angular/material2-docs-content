import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/badge";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Badge overview
 */
let BadgeOverviewExample = /** @class */ (() => {
    class BadgeOverviewExample {
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
    return BadgeOverviewExample;
})();
export { BadgeOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BadgeOverviewExample, [{
        type: Component,
        args: [{
                selector: 'badge-overview-example',
                templateUrl: 'badge-overview-example.html',
                styleUrls: ['badge-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBLE1BS2Esb0JBQW9CO1FBTGpDO1lBTUUsV0FBTSxHQUFHLEtBQUssQ0FBQztTQUtoQjtRQUhDLHFCQUFxQjtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixDQUFDOzs0RkFMVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ1ZqQyx5QkFDQTtZQUNFLCtCQUEyQztZQUFBLGlDQUFpQjtZQUFBLGlCQUFPO1lBRXJFLGlCQUFJO1lBRUoseUJBQ0E7WUFDSSwrQkFBd0M7WUFBQSxxQ0FBcUI7WUFBQSxpQkFBTztZQUV4RSxpQkFBSTtZQUVKLHlCQUNFO1lBQUEsa0RBQ0Y7WUFDRSxpQ0FFRTtZQUFBLHdCQUNGO1lBQUEsaUJBQVM7WUFFWCxpQkFBSTtZQUVKLDBCQUNJO1lBQUEsbURBQ0o7WUFDSSxrQ0FDSTtZQUQ2RCxrR0FBUywyQkFBdUIsSUFBQztZQUM5Rix1QkFDSjtZQUFBLGlCQUFTO1lBRWIsaUJBQUk7WUFFSiwwQkFDRTtZQUFBLHFDQUNGO1lBQ0Usb0NBQTZDO1lBQUEscUJBQUk7WUFBQSxpQkFBVztZQUcxRCxnQ0FDRTtZQUFBLHFGQUNGO1lBQUEsaUJBQU87WUFDWCxpQkFBSTs7WUFmdUMsZ0JBQXlCO1lBQXpCLDJDQUF5Qjs7K0JEekJwRTtLQWdCQztTQU5ZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFkZ2Ugb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlT3ZlcnZpZXdFeGFtcGxlIHtcbiAgaGlkZGVuID0gZmFsc2U7XG5cbiAgdG9nZ2xlQmFkZ2VWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuaGlkZGVuID0gIXRoaXMuaGlkZGVuO1xuICB9XG59XG4iLCI8cD5cbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2Utb3ZlcmxhcCAtLT5cbiAgPHNwYW4gbWF0QmFkZ2U9XCI0XCIgbWF0QmFkZ2VPdmVybGFwPVwiZmFsc2VcIj5UZXh0IHdpdGggYSBiYWRnZTwvc3Bhbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2Utb3ZlcmxhcCAtLT5cbjwvcD5cblxuPHA+XG48IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLXNpemUgLS0+XG4gICAgPHNwYW4gbWF0QmFkZ2U9XCIxXCIgbWF0QmFkZ2VTaXplPVwibGFyZ2VcIj5UZXh0IHdpdGggbGFyZ2UgYmFkZ2U8L3NwYW4+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLXNpemUgLS0+XG48L3A+XG5cbjxwPlxuICBCdXR0b24gd2l0aCBhIGJhZGdlIG9uIHRoZSBsZWZ0XG48IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLXBvc2l0aW9uIC0tPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBtYXRCYWRnZT1cIjhcIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCIgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiPlxuICAgIEFjdGlvblxuICA8L2J1dHRvbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2UtcG9zaXRpb24gLS0+XG48L3A+XG5cbjxwPlxuICAgIEJ1dHRvbiB0b2dnbGVzIGJhZGdlIHZpc2liaWxpdHlcbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2UtaGlkZSAtLT5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIG1hdEJhZGdlPVwiN1wiIFttYXRCYWRnZUhpZGRlbl09XCJoaWRkZW5cIiAoY2xpY2spPVwidG9nZ2xlQmFkZ2VWaXNpYmlsaXR5KClcIj5cbiAgICAgICAgSGlkZVxuICAgIDwvYnV0dG9uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1oaWRlIC0tPlxuPC9wPlxuXG48cD5cbiAgSWNvbiB3aXRoIGEgYmFkZ2VcbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2UtY29sb3IgLS0+XG4gIDxtYXQtaWNvbiBtYXRCYWRnZT1cIjE1XCIgbWF0QmFkZ2VDb2xvcj1cIndhcm5cIj5ob21lPC9tYXQtaWNvbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2UtY29sb3IgLS0+XG4gICAgPCEtLSBJbmNsdWRlIHRleHQgZGVzY3JpcHRpb24gb2YgdGhlIGljb24ncyBtZWFuaW5nIGZvciBzY3JlZW4tcmVhZGVycyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cImNkay12aXN1YWxseS1oaWRkZW5cIj5cbiAgICAgIEV4YW1wbGUgd2l0aCBhIGhvbWUgaWNvbiB3aXRoIG92ZXJsYWlkIGJhZGdlIHNob3dpbmcgdGhlIG51bWJlciAxNVxuICAgIDwvc3Bhbj5cbjwvcD5cblxuXG4iXX0=