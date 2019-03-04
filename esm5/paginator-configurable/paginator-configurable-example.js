import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Configurable paginator
 */
var PaginatorConfigurableExample = /** @class */ (function () {
    function PaginatorConfigurableExample() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorConfigurableExample = tslib_1.__decorate([
        Component({
            selector: 'paginator-configurable-example',
            template: "<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n\n<mat-form-field>\n  Page size:\n  <input matInput [(ngModel)]=\"pageSize\">\n</mat-form-field>\n<mat-form-field>\n  Page size options:\n  <input matInput\n         [ngModel]=\"pageSizeOptions\"\n         (ngModelChange)=\"setPageSizeOptions($event)\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n",
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        })
    ], PaginatorConfigurableExample);
    return PaginatorConfigurableExample;
}());
export { PaginatorConfigurableExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3hDOztHQUVHO0FBTUg7SUFMQTtRQU1FLHNCQUFzQjtRQUN0QixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFlLEdBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQVEvQyxDQUFDO0lBSEMseURBQWtCLEdBQWxCLFVBQW1CLHVCQUErQjtRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEdBQUcsRUFBSixDQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBWFUsNEJBQTRCO1FBTHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsZ3lCQUFrRDs7U0FFbkQsQ0FBQztPQUNXLDRCQUE0QixDQVl4QztJQUFELG1DQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHBhZ2luYXRvclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIC8vIE1hdFBhZ2luYXRvciBJbnB1dHNcbiAgbGVuZ3RoID0gMTAwO1xuICBwYWdlU2l6ZSA9IDEwO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyNSwgMTAwXTtcblxuICAvLyBNYXRQYWdpbmF0b3IgT3V0cHV0XG4gIHBhZ2VFdmVudDogUGFnZUV2ZW50O1xuXG4gIHNldFBhZ2VTaXplT3B0aW9ucyhzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMgPSBzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dC5zcGxpdCgnLCcpLm1hcChzdHIgPT4gK3N0cik7XG4gIH1cbn1cbiJdfQ==