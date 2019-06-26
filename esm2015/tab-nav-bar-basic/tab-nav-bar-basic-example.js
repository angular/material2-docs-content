/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @return {?}
     */
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
}
TabNavBarBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-nav-bar-basic-example',
                template: "<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n",
                styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90YWItbmF2LWJhci1iYXNpYy90YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFTbEIsQ0FBQzs7OztJQVBDLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyx5ZUFBNkM7O2FBRTlDOzs7O0lBRUMsc0NBQXFDOztJQUNyQywyQ0FBMkI7O0lBQzNCLDJDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdXNlIG9mIHRoZSB0YWIgbmF2IGJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiTmF2QmFyQmFzaWNFeGFtcGxlIHtcbiAgbGlua3MgPSBbJ0ZpcnN0JywgJ1NlY29uZCcsICdUaGlyZCddO1xuICBhY3RpdmVMaW5rID0gdGhpcy5saW5rc1swXTtcbiAgYmFja2dyb3VuZCA9ICcnO1xuXG4gIHRvZ2dsZUJhY2tncm91bmQoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5iYWNrZ3JvdW5kID8gJycgOiAncHJpbWFyeSc7XG4gIH1cblxuICBhZGRMaW5rKCkge1xuICAgIHRoaXMubGlua3MucHVzaChgTGluayAke3RoaXMubGlua3MubGVuZ3RoICsgMX1gKTtcbiAgfVxufVxuIl19