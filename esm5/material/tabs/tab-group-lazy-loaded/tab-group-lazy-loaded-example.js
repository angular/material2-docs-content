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
    TabGroupLazyLoadedExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-lazy-loaded-example',
                    template: "<mat-tab-group>\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n",
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return TabGroupLazyLoadedExample;
}());
export { TabGroupLazyLoadedExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtbGF6eS1sb2FkZWQvdGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQVM1QixDQUFDO0lBUEMsaURBQWEsR0FBYixVQUFjLEtBQWE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxnaEJBQWlEOztpQkFFbEQ7O0lBV0QsZ0NBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aGVyZSB0aGUgdGFiIGNvbnRlbnQgaXMgbG9hZGVkIGxhemlseSAod2hlbiBhY3RpdmF0ZWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cExhenlMb2FkZWRFeGFtcGxlIHtcbiAgdGFiTG9hZFRpbWVzOiBEYXRlW10gPSBbXTtcblxuICBnZXRUaW1lTG9hZGVkKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSkge1xuICAgICAgdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdO1xuICB9XG59XG4iXX0=