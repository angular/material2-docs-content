import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Radios with ngModel
 */
var RadioNgModelExample = /** @class */ (function () {
    function RadioNgModelExample() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    RadioNgModelExample = tslib_1.__decorate([
        Component({
            selector: 'radio-ng-model-example',
            template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n",
            styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"]
        })
    ], RadioNgModelExample);
    return RadioNgModelExample;
}());
export { RadioNgModelExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbmctbW9kZWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU9FLFlBQU8sR0FBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFIWSxtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQywwYkFBMEM7O1NBRTNDLENBQUM7T0FDVyxtQkFBbUIsQ0FHL0I7SUFBRCwwQkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUmFkaW9zIHdpdGggbmdNb2RlbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYWRpby1uZy1tb2RlbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1uZy1tb2RlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8tbmctbW9kZWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9OZ01vZGVsRXhhbXBsZSB7XG4gIGZhdm9yaXRlU2Vhc29uOiBzdHJpbmc7XG4gIHNlYXNvbnM6IHN0cmluZ1tdID0gWydXaW50ZXInLCAnU3ByaW5nJywgJ1N1bW1lcicsICdBdXR1bW4nXTtcbn1cbiJdfQ==