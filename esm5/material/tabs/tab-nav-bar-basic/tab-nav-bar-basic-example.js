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
    TabNavBarBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-nav-bar-basic-example',
                    template: "<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n",
                    styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"]
                }] }
    ];
    return TabNavBarBasicExample;
}());
export { TabNavBarBasicExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1uYXYtYmFyLWJhc2ljL3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFTbEIsQ0FBQztJQVBDLGdEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckQsQ0FBQztJQUVELHVDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyx5ZUFBNkM7O2lCQUU5Qzs7SUFhRCw0QkFBQztDQUFBLEFBakJELElBaUJDO1NBWlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB1c2Ugb2YgdGhlIHRhYiBuYXYgYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJOYXZCYXJCYXNpY0V4YW1wbGUge1xuICBsaW5rcyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIGFjdGl2ZUxpbmsgPSB0aGlzLmxpbmtzWzBdO1xuICBiYWNrZ3JvdW5kID0gJyc7XG5cbiAgdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmQgPyAnJyA6ICdwcmltYXJ5JztcbiAgfVxuXG4gIGFkZExpbmsoKSB7XG4gICAgdGhpcy5saW5rcy5wdXNoKGBMaW5rICR7dGhpcy5saW5rcy5sZW5ndGggKyAxfWApO1xuICB9XG59XG4iXX0=