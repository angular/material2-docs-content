import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r23); var link_r21 = ctx.$implicit; var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.activeLink = link_r21; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r21 = ctx.$implicit;
    var ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r20.activeLink == link_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", link_r21, " ");
} }
/**
 * @title Basic use of the tab nav bar
 */
var TabNavBarBasicExample = /** @class */ (function () {
    function TabNavBarBasicExample() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    TabNavBarBasicExample.prototype.toggleBackground = function () {
        this.background = this.background ? undefined : 'primary';
    };
    TabNavBarBasicExample.prototype.addLink = function () {
        this.links.push("Link " + (this.links.length + 1));
    };
    TabNavBarBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-nav-bar-basic-example',
                    templateUrl: 'tab-nav-bar-basic-example.html',
                    styleUrls: ['tab-nav-bar-basic-example.css'],
                },] },
    ];
    TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
    TabNavBarBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0);
            i0.ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
            i0.ɵɵelementStart(2, "a", 2);
            i0.ɵɵtext(3, "Disabled Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener($event) { return ctx.toggleBackground(); });
            i0.ɵɵtext(5, " Toggle background\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener($event) { return ctx.addLink(); });
            i0.ɵɵtext(7, " Add link\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("backgroundColor", ctx.background);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.links);
        } }, directives: [i1.MatTabNav, i2.NgForOf, i1.MatTabLink, i3.MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
    return TabNavBarBasicExample;
}());
export { TabNavBarBasicExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1uYXYtYmFyLWJhc2ljL3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItbmF2LWJhci1iYXNpYy90YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0N0Qyw0QkFFa0M7SUFEL0IsZ09BQTJCO0lBQ0ksWUFBUztJQUFBLGlCQUFJOzs7O0lBQTVDLHVEQUE2QjtJQUFFLGVBQVM7SUFBVCx5Q0FBUzs7QURBN0M7O0dBRUc7QUFDSDtJQUFBO1FBTUUsVUFBSyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxlQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixlQUFVLEdBQWlCLFNBQVMsQ0FBQztLQVN0QztJQVBDLGdEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUQsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7OzhGQUNZLHFCQUFxQjs4REFBckIscUJBQXFCO1lDWGxDLDhCQUNFO1lBQUEsa0VBRWtDO1lBQ2xDLDRCQUF5QjtZQUFBLDZCQUFhO1lBQUEsaUJBQUk7WUFDNUMsaUJBQU07WUFFTixpQ0FDRTtZQURzRCx3R0FBUyxzQkFBa0IsSUFBQztZQUNsRixvQ0FDRjtZQUFBLGlCQUFTO1lBQ1QsaUNBQ0U7WUFEc0Qsd0dBQVMsYUFBUyxJQUFDO1lBQ3pFLDJCQUNGO1lBQUEsaUJBQVM7O1lBWlksZ0RBQThCO1lBQ2pDLGVBQTBCO1lBQTFCLG1DQUEwQjs7Z0NERDVDO0NBdUJDLEFBakJELElBaUJDO1NBWlkscUJBQXFCO21DQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB1c2Ugb2YgdGhlIHRhYiBuYXYgYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJOYXZCYXJCYXNpY0V4YW1wbGUge1xuICBsaW5rcyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIGFjdGl2ZUxpbmsgPSB0aGlzLmxpbmtzWzBdO1xuICBiYWNrZ3JvdW5kOiBUaGVtZVBhbGV0dGUgPSB1bmRlZmluZWQ7XG5cbiAgdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmQgPyB1bmRlZmluZWQgOiAncHJpbWFyeSc7XG4gIH1cblxuICBhZGRMaW5rKCkge1xuICAgIHRoaXMubGlua3MucHVzaChgTGluayAke3RoaXMubGlua3MubGVuZ3RoICsgMX1gKTtcbiAgfVxufVxuIiwiPG5hdiBtYXQtdGFiLW5hdi1iYXIgW2JhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kXCI+XG4gIDxhIG1hdC10YWItbGluayAqbmdGb3I9XCJsZXQgbGluayBvZiBsaW5rc1wiXG4gICAgIChjbGljayk9XCJhY3RpdmVMaW5rID0gbGlua1wiXG4gICAgIFthY3RpdmVdPVwiYWN0aXZlTGluayA9PSBsaW5rXCI+IHt7bGlua319IDwvYT5cbiAgPGEgbWF0LXRhYi1saW5rIGRpc2FibGVkPkRpc2FibGVkIExpbms8L2E+XG48L25hdj5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVCYWNrZ3JvdW5kKClcIj5cbiAgVG9nZ2xlIGJhY2tncm91bmRcbjwvYnV0dG9uPlxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJhZGRMaW5rKClcIj5cbiAgQWRkIGxpbmtcbjwvYnV0dG9uPlxuIl19