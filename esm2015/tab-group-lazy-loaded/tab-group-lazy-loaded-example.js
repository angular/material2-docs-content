/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Tab group where the tab content is loaded lazily (when activated)
 */
export class TabGroupLazyLoadedExample {
    constructor() {
        this.tabLoadTimes = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getTimeLoaded(index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    }
}
TabGroupLazyLoadedExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-lazy-loaded-example',
                template: "<mat-tab-group>\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TabGroupLazyLoadedExample.prototype.tabLoadTimes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWxhenktbG9hZGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFNRSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQVM1QixDQUFDOzs7OztJQVBDLGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsZ2hCQUFpRDs7YUFFbEQ7Ozs7SUFFQyxpREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aGVyZSB0aGUgdGFiIGNvbnRlbnQgaXMgbG9hZGVkIGxhemlseSAod2hlbiBhY3RpdmF0ZWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cExhenlMb2FkZWRFeGFtcGxlIHtcbiAgdGFiTG9hZFRpbWVzOiBEYXRlW10gPSBbXTtcblxuICBnZXRUaW1lTG9hZGVkKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFiTG9hZFRpbWVzW2luZGV4XSkge1xuICAgICAgdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWJMb2FkVGltZXNbaW5kZXhdO1xuICB9XG59XG4iXX0=