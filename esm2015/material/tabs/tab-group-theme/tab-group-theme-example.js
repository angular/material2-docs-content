/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/tabs";
const _c0 = ["colorToggle", "matButtonToggleGroup"];
const _c1 = ["backgroundColorToggle", "matButtonToggleGroup"];
/**
 * \@title Customizing the theme options on the tab group
 */
export class TabGroupThemeExample {
}
TabGroupThemeExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-theme-example',
                templateUrl: 'tab-group-theme-example.html',
                styleUrls: ['tab-group-theme-example.css'],
            },] },
];
/** @nocollapse */ TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
/** @nocollapse */ TabGroupThemeExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "mat-button-toggle-group", 0, _c0);
        i0.ɵɵelementStart(3, "mat-button-toggle", 1);
        i0.ɵɵtext(4, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵtext(6, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 3);
        i0.ɵɵtext(8, " Color ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "mat-button-toggle-group", 0, _c1);
        i0.ɵɵelementStart(12, "mat-button-toggle", 1);
        i0.ɵɵtext(13, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-button-toggle", 2);
        i0.ɵɵtext(15, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "span", 3);
        i0.ɵɵtext(17, " Background Color ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-tab-group", 4);
        i0.ɵɵelementStart(19, "mat-tab", 5);
        i0.ɵɵtext(20, " Content 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-tab", 6);
        i0.ɵɵtext(22, " Content 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-tab", 7);
        i0.ɵɵtext(24, " Content 3 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r18 = i0.ɵɵreference(2);
        const _r19 = i0.ɵɵreference(11);
        i0.ɵɵadvance(18);
        i0.ɵɵproperty("color", _r18.value)("backgroundColor", _r19.value);
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatTabGroup, i2.MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TabGroupThemeExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-theme-example',
                templateUrl: 'tab-group-theme-example.html',
                styleUrls: ['tab-group-theme-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC10aGVtZS90YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXRoZW1lL3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVV4QyxNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzt3RkFDWSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1ZqQywyQkFDRTtRQUFBLHVEQUdFO1FBQUEsNENBQW9DO1FBQUEseUJBQVE7UUFBQSxpQkFBb0I7UUFDaEUsNENBQW1DO1FBQUEsd0JBQU87UUFBQSxpQkFBb0I7UUFDaEUsaUJBQTBCO1FBQzFCLCtCQUEyQztRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDMUQsaUJBQU07UUFFTiwyQkFDRTtRQUFBLHdEQUdFO1FBQUEsNkNBQW9DO1FBQUEsMEJBQVE7UUFBQSxpQkFBb0I7UUFDaEUsNkNBQW1DO1FBQUEseUJBQU87UUFBQSxpQkFBb0I7UUFDaEUsaUJBQTBCO1FBQzFCLGdDQUEyQztRQUFBLG1DQUFpQjtRQUFBLGlCQUFPO1FBQ3JFLGlCQUFNO1FBRU4seUNBQ0U7UUFBQSxtQ0FBd0I7UUFBQSw0QkFBVTtRQUFBLGlCQUFVO1FBQzVDLG1DQUF5QjtRQUFBLDRCQUFVO1FBQUEsaUJBQVU7UUFDN0MsbUNBQXdCO1FBQUEsNEJBQVU7UUFBQSxpQkFBVTtRQUM5QyxpQkFBZ0I7Ozs7UUFKRCxnQkFBMkI7UUFBM0Isa0NBQTJCLCtCQUFBOzttQ0RWN0Isb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ3VzdG9taXppbmcgdGhlIHRoZW1lIG9wdGlvbnMgb24gdGhlIHRhYiBncm91cFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBUaGVtZUV4YW1wbGUge31cbiIsIjxkaXY+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAjY29sb3JUb2dnbGU9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNoYW5nZSBjb2xvclwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInByaW1hcnlcIj4gUHJpbWFyeSA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImFjY2VudFwiPiBBY2NlbnQgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi10b2dnbGUtbGFiZWxcIj4gQ29sb3IgPC9zcGFuPlxuPC9kaXY+XG5cbjxkaXY+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAjYmFja2dyb3VuZENvbG9yVG9nZ2xlPVwibWF0QnV0dG9uVG9nZ2xlR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDaGFuZ2UgY29sb3JcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJwcmltYXJ5XCI+IFByaW1hcnkgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJhY2NlbnRcIj4gQWNjZW50IDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1idXR0b24tdG9nZ2xlLWxhYmVsXCI+IEJhY2tncm91bmQgQ29sb3IgPC9zcGFuPlxuPC9kaXY+XG5cbjxtYXQtdGFiLWdyb3VwIFtjb2xvcl09XCJjb2xvclRvZ2dsZS52YWx1ZVwiIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yVG9nZ2xlLnZhbHVlXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj4gQ29udGVudCAxIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj4gQ29udGVudCAyIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPiBDb250ZW50IDMgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19