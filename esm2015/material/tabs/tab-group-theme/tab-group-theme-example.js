import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/tabs";
/**
 * @title Customizing the theme options on the tab group
 */
export class TabGroupThemeExample {
}
TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
TabGroupThemeExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["colorToggle", "matButtonToggleGroup"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], ["backgroundColorToggle", "matButtonToggleGroup"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "mat-button-toggle-group", 0, 1);
        i0.ɵɵelementStart(3, "mat-button-toggle", 2);
        i0.ɵɵtext(4, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 3);
        i0.ɵɵtext(6, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 4);
        i0.ɵɵtext(8, " Color ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "mat-button-toggle-group", 0, 5);
        i0.ɵɵelementStart(12, "mat-button-toggle", 2);
        i0.ɵɵtext(13, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-button-toggle", 3);
        i0.ɵɵtext(15, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "span", 4);
        i0.ɵɵtext(17, " Background Color ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-tab-group", 6);
        i0.ɵɵelementStart(19, "mat-tab", 7);
        i0.ɵɵtext(20, " Content 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-tab", 8);
        i0.ɵɵtext(22, " Content 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-tab", 9);
        i0.ɵɵtext(24, " Content 3 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        const _r1 = i0.ɵɵreference(11);
        i0.ɵɵadvance(18);
        i0.ɵɵproperty("color", _r0.value)("backgroundColor", _r1.value);
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatTabGroup, i2.MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupThemeExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-theme-example',
                templateUrl: 'tab-group-theme-example.html',
                styleUrls: ['tab-group-theme-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC10aGVtZS90YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXRoZW1lL3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7O3dGQUFwQixvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1ZqQywyQkFBSztRQUNILHFEQUVtRDtRQUNqRCw0Q0FBbUM7UUFBQyx5QkFBUTtRQUFBLGlCQUFvQjtRQUNoRSw0Q0FBa0M7UUFBQyx3QkFBTztRQUFBLGlCQUFvQjtRQUNoRSxpQkFBMEI7UUFDMUIsK0JBQTBDO1FBQUMsdUJBQU07UUFBQSxpQkFBTztRQUMxRCxpQkFBTTtRQUVOLDJCQUFLO1FBQ0gsc0RBRW1EO1FBQ2pELDZDQUFtQztRQUFDLDBCQUFRO1FBQUEsaUJBQW9CO1FBQ2hFLDZDQUFrQztRQUFDLHlCQUFPO1FBQUEsaUJBQW9CO1FBQ2hFLGlCQUEwQjtRQUMxQixnQ0FBMEM7UUFBQyxtQ0FBaUI7UUFBQSxpQkFBTztRQUNyRSxpQkFBTTtRQUVOLHlDQUEyRjtRQUN6RixtQ0FBdUI7UUFBQyw0QkFBVTtRQUFBLGlCQUFVO1FBQzVDLG1DQUF3QjtRQUFDLDRCQUFVO1FBQUEsaUJBQVU7UUFDN0MsbUNBQXVCO1FBQUMsNEJBQVU7UUFBQSxpQkFBVTtRQUM5QyxpQkFBZ0I7Ozs7UUFKRCxnQkFBMkI7UUFBM0IsaUNBQTJCLDhCQUFBOzt1RkRWN0Isb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ3VzdG9taXppbmcgdGhlIHRoZW1lIG9wdGlvbnMgb24gdGhlIHRhYiBncm91cFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBUaGVtZUV4YW1wbGUge31cbiIsIjxkaXY+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAjY29sb3JUb2dnbGU9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNoYW5nZSBjb2xvclwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInByaW1hcnlcIj4gUHJpbWFyeSA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImFjY2VudFwiPiBBY2NlbnQgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi10b2dnbGUtbGFiZWxcIj4gQ29sb3IgPC9zcGFuPlxuPC9kaXY+XG5cbjxkaXY+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAjYmFja2dyb3VuZENvbG9yVG9nZ2xlPVwibWF0QnV0dG9uVG9nZ2xlR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDaGFuZ2UgY29sb3JcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJwcmltYXJ5XCI+IFByaW1hcnkgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJhY2NlbnRcIj4gQWNjZW50IDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1idXR0b24tdG9nZ2xlLWxhYmVsXCI+IEJhY2tncm91bmQgQ29sb3IgPC9zcGFuPlxuPC9kaXY+XG5cbjxtYXQtdGFiLWdyb3VwIFtjb2xvcl09XCJjb2xvclRvZ2dsZS52YWx1ZVwiIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yVG9nZ2xlLnZhbHVlXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj4gQ29udGVudCAxIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj4gQ29udGVudCAyIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPiBDb250ZW50IDMgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19