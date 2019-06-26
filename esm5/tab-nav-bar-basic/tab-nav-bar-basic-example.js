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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90YWItbmF2LWJhci1iYXNpYy90YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLFVBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQVNsQixDQUFDO0lBUEMsZ0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsdUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBWFUscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMseWVBQTZDOztTQUU5QyxDQUFDO09BQ1cscUJBQXFCLENBWWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHVzZSBvZiB0aGUgdGFiIG5hdiBiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYk5hdkJhckJhc2ljRXhhbXBsZSB7XG4gIGxpbmtzID0gWydGaXJzdCcsICdTZWNvbmQnLCAnVGhpcmQnXTtcbiAgYWN0aXZlTGluayA9IHRoaXMubGlua3NbMF07XG4gIGJhY2tncm91bmQgPSAnJztcblxuICB0b2dnbGVCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZCA/ICcnIDogJ3ByaW1hcnknO1xuICB9XG5cbiAgYWRkTGluaygpIHtcbiAgICB0aGlzLmxpbmtzLnB1c2goYExpbmsgJHt0aGlzLmxpbmtzLmxlbmd0aCArIDF9YCk7XG4gIH1cbn1cbiJdfQ==