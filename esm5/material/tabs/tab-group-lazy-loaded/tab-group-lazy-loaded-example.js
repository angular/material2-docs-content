import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
var TabGroupLazyLoadedExample = /** @class */ (function () {
    function TabGroupLazyLoadedExample() {
        this.tabLoadTimes = [];
    }
    TabGroupLazyLoadedExample.prototype.getTimeLoaded = function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    TabGroupLazyLoadedExample = tslib_1.__decorate([
        Component({
            selector: 'tab-group-lazy-loaded-example',
            template: "<mat-tab-group>\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], TabGroupLazyLoadedExample);
    return TabGroupLazyLoadedExample;
}());
export { TabGroupLazyLoadedExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtbGF6eS1sb2FkZWQvdGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFNSDtJQUxBO1FBTUUsaUJBQVksR0FBVyxFQUFFLENBQUM7SUFTNUIsQ0FBQztJQVBDLGlEQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBVFUseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsZ2hCQUFpRDs7U0FFbEQsQ0FBQztPQUNXLHlCQUF5QixDQVVyQztJQUFELGdDQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2hlcmUgdGhlIHRhYiBjb250ZW50IGlzIGxvYWRlZCBsYXppbHkgKHdoZW4gYWN0aXZhdGVkKVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBMYXp5TG9hZGVkRXhhbXBsZSB7XG4gIHRhYkxvYWRUaW1lczogRGF0ZVtdID0gW107XG5cbiAgZ2V0VGltZUxvYWRlZChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYkxvYWRUaW1lc1tpbmRleF0pIHtcbiAgICAgIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGFiTG9hZFRpbWVzW2luZGV4XTtcbiAgfVxufVxuIl19