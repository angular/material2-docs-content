/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Configurable paginator
 */
export class PaginatorConfigurableExample {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((/**
         * @param {?} str
         * @return {?}
         */
        str => +str));
    }
}
PaginatorConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-configurable-example',
                template: "<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n\n<mat-form-field>\n  Page size:\n  <input matInput [(ngModel)]=\"pageSize\">\n</mat-form-field>\n<mat-form-field>\n  Page size options:\n  <input matInput\n         [ngModel]=\"pageSizeOptions\"\n         (ngModelChange)=\"setPageSizeOptions($event)\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    PaginatorConfigurableExample.prototype.length;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageSize;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageSizeOptions;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBV3hDLE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7O1FBT0UsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFRL0MsQ0FBQzs7Ozs7SUFIQyxrQkFBa0IsQ0FBQyx1QkFBK0I7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLGd5QkFBa0Q7O2FBRW5EOzs7O0lBR0MsOENBQWE7O0lBQ2IsZ0RBQWM7O0lBQ2QsdURBQTZDOztJQUc3QyxpREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHBhZ2luYXRvclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIC8vIE1hdFBhZ2luYXRvciBJbnB1dHNcbiAgbGVuZ3RoID0gMTAwO1xuICBwYWdlU2l6ZSA9IDEwO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyNSwgMTAwXTtcblxuICAvLyBNYXRQYWdpbmF0b3IgT3V0cHV0XG4gIHBhZ2VFdmVudDogUGFnZUV2ZW50O1xuXG4gIHNldFBhZ2VTaXplT3B0aW9ucyhzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMgPSBzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dC5zcGxpdCgnLCcpLm1hcChzdHIgPT4gK3N0cik7XG4gIH1cbn1cbiJdfQ==