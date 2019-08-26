import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * @title Tab group with asynchronously loading tab contents
 */
var TabGroupAsyncExample = /** @class */ (function () {
    function TabGroupAsyncExample() {
        this.asyncTabs = new Observable(function (observer) {
            setTimeout(function () {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
    TabGroupAsyncExample = tslib_1.__decorate([
        Component({
            selector: 'tab-group-async-example',
            template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TabGroupAsyncExample);
    return TabGroupAsyncExample;
}());
export { TabGroupAsyncExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtYXN5bmMvdGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQU8xQzs7R0FFRztBQU1IO0lBR0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLFVBQUMsUUFBZ0M7WUFDL0QsVUFBVSxDQUFDO2dCQUNULFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ1osRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7b0JBQ3RDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO29CQUN2QyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztpQkFDdkMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYlUsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsZ1NBQTJDOztTQUU1QyxDQUFDOztPQUNXLG9CQUFvQixDQWNoQztJQUFELDJCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhhbXBsZVRhYiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggYXN5bmNocm9ub3VzbHkgbG9hZGluZyB0YWIgY29udGVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQXN5bmNFeGFtcGxlIHtcbiAgYXN5bmNUYWJzOiBPYnNlcnZhYmxlPEV4YW1wbGVUYWJbXT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hc3luY1RhYnMgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV4YW1wbGVUYWJbXT4pID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KFtcbiAgICAgICAgICB7bGFiZWw6ICdGaXJzdCcsIGNvbnRlbnQ6ICdDb250ZW50IDEnfSxcbiAgICAgICAgICB7bGFiZWw6ICdTZWNvbmQnLCBjb250ZW50OiAnQ29udGVudCAyJ30sXG4gICAgICAgICAge2xhYmVsOiAnVGhpcmQnLCBjb250ZW50OiAnQ29udGVudCAzJ30sXG4gICAgICAgIF0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==