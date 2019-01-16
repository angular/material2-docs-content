/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Basic use of the tab nav bar
 */
export class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = '';
    }
    /**
     * @return {?}
     */
    toggleBackground() {
        this.background = this.background ? '' : 'primary';
    }
}
TabNavBarBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-nav-bar-basic-example',
                template: "<button mat-raised-button\n        class=\"example-action-button\"\n        (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n\n<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n",
                styles: [".example-action-button {\n  margin-bottom: 8px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TabNavBarBasicExample.prototype.links;
    /** @type {?} */
    TabNavBarBasicExample.prototype.activeLink;
    /** @type {?} */
    TabNavBarBasicExample.prototype.background;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90YWItbmF2LWJhci1iYXNpYy90YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFLbEIsQ0FBQzs7OztJQUhDLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckQsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGtaQUE2Qzs7YUFFOUM7Ozs7SUFFQyxzQ0FBcUM7O0lBQ3JDLDJDQUEyQjs7SUFDM0IsMkNBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB1c2Ugb2YgdGhlIHRhYiBuYXYgYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJOYXZCYXJCYXNpY0V4YW1wbGUge1xuICBsaW5rcyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIGFjdGl2ZUxpbmsgPSB0aGlzLmxpbmtzWzBdO1xuICBiYWNrZ3JvdW5kID0gJyc7XG5cbiAgdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmQgPyAnJyA6ICdwcmltYXJ5JztcbiAgfVxufVxuIl19