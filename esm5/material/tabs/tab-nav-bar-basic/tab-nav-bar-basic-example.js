import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Basic use of the tab nav bar
 */
var TabNavBarBasicExample = /** @class */ (function () {
    function TabNavBarBasicExample() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = '';
    }
    TabNavBarBasicExample.prototype.toggleBackground = function () {
        this.background = this.background ? '' : 'primary';
    };
    TabNavBarBasicExample.prototype.addLink = function () {
        this.links.push("Link " + (this.links.length + 1));
    };
    TabNavBarBasicExample = tslib_1.__decorate([
        Component({
            selector: 'tab-nav-bar-basic-example',
            template: "<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n",
            styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"]
        })
    ], TabNavBarBasicExample);
    return TabNavBarBasicExample;
}());
export { TabNavBarBasicExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1uYXYtYmFyLWJhc2ljL3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFNSDtJQUxBO1FBTUUsVUFBSyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxlQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixlQUFVLEdBQUcsRUFBRSxDQUFDO0lBU2xCLENBQUM7SUFQQyxnREFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFYVSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyx5ZUFBNkM7O1NBRTlDLENBQUM7T0FDVyxxQkFBcUIsQ0FZakM7SUFBRCw0QkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdXNlIG9mIHRoZSB0YWIgbmF2IGJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiTmF2QmFyQmFzaWNFeGFtcGxlIHtcbiAgbGlua3MgPSBbJ0ZpcnN0JywgJ1NlY29uZCcsICdUaGlyZCddO1xuICBhY3RpdmVMaW5rID0gdGhpcy5saW5rc1swXTtcbiAgYmFja2dyb3VuZCA9ICcnO1xuXG4gIHRvZ2dsZUJhY2tncm91bmQoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5iYWNrZ3JvdW5kID8gJycgOiAncHJpbWFyeSc7XG4gIH1cblxuICBhZGRMaW5rKCkge1xuICAgIHRoaXMubGlua3MucHVzaChgTGluayAke3RoaXMubGlua3MubGVuZ3RoICsgMX1gKTtcbiAgfVxufVxuIl19