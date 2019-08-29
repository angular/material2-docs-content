import { Component } from '@angular/core';
/**
 * @title Radios with ngModel
 */
var RadioNgModelExample = /** @class */ (function () {
    function RadioNgModelExample() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    RadioNgModelExample.decorators = [
        { type: Component, args: [{
                    selector: 'radio-ng-model-example',
                    template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n",
                    styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"]
                }] }
    ];
    return RadioNgModelExample;
}());
export { RadioNgModelExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO1FBT0UsWUFBTyxHQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDBiQUEwQzs7aUJBRTNDOztJQUlELDBCQUFDO0NBQUEsQUFSRCxJQVFDO1NBSFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBSYWRpb3Mgd2l0aCBuZ01vZGVsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyYWRpby1uZy1tb2RlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb05nTW9kZWxFeGFtcGxlIHtcbiAgZmF2b3JpdGVTZWFzb246IHN0cmluZztcbiAgc2Vhc29uczogc3RyaW5nW10gPSBbJ1dpbnRlcicsICdTcHJpbmcnLCAnU3VtbWVyJywgJ0F1dHVtbiddO1xufVxuIl19