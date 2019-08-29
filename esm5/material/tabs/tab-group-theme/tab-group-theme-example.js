import { Component } from '@angular/core';
/**
 * @title Customizing the theme options on the tab group
 */
var TabGroupThemeExample = /** @class */ (function () {
    function TabGroupThemeExample() {
    }
    TabGroupThemeExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-theme-example',
                    template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Color </span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Background Color </span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                    styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"]
                }] }
    ];
    return TabGroupThemeExample;
}());
export { TabGroupThemeExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtdGhlbWUvdGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLbUMsQ0FBQzs7Z0JBTG5DLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxtbkNBQTJDOztpQkFFNUM7O0lBQ2tDLDJCQUFDO0NBQUEsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDdXN0b21pemluZyB0aGUgdGhlbWUgb3B0aW9ucyBvbiB0aGUgdGFiIGdyb3VwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC10aGVtZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cFRoZW1lRXhhbXBsZSB7fVxuIl19