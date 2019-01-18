/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
/**
 * \@title Accordion with expand/collapse all toggles
 */
export class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-toggle-all-example',
                template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<mat-accordion class=\"example-headers-align\" multi>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel disabled>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n",
                styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"]
            }] }
];
ExpansionExpandCollapseAllExample.propDecorators = {
    accordion: [{ type: ViewChild, args: [MatAccordion,] }]
};
if (false) {
    /** @type {?} */
    ExpansionExpandCollapseAllExample.prototype.accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFVL0MsTUFBTSxPQUFPLGlDQUFpQzs7O1lBTDdDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxneERBQXlEOzthQUUxRDs7O3dCQUVFLFNBQVMsU0FBQyxZQUFZOzs7O0lBQXZCLHNEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRBY2NvcmRpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIHdpdGggZXhwYW5kL2NvbGxhcHNlIGFsbCB0b2dnbGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi10b2dnbGUtYWxsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUge1xuICBAVmlld0NoaWxkKE1hdEFjY29yZGlvbikgYWNjb3JkaW9uOiBNYXRBY2NvcmRpb247XG59XG4iXX0=