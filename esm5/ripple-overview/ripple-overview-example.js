import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title MatRipple basic usage
 */
var RippleOverviewExample = /** @class */ (function () {
    function RippleOverviewExample() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    RippleOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'ripple-overview-example',
            template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n",
            styles: [".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n"]
        })
    ], RippleOverviewExample);
    return RippleOverviewExample;
}());
export { RippleOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvcmlwcGxlLW92ZXJ2aWV3L3JpcHBsZS1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSXBCLENBQUM7SUFQWSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxzNEJBQTJDOztTQUU1QyxDQUFDO09BQ1cscUJBQXFCLENBT2pDO0lBQUQsNEJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE1hdFJpcHBsZSBiYXNpYyB1c2FnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyaXBwbGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyaXBwbGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmlwcGxlT3ZlcnZpZXdFeGFtcGxlIHtcbiAgY2VudGVyZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdW5ib3VuZGVkID0gZmFsc2U7XG5cbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG4iXX0=