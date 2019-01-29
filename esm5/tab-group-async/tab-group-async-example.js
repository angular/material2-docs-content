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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFPMUM7O0dBRUc7QUFNSDtJQUdFO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFDLFFBQWdDO1lBQy9ELFVBQVUsQ0FBQztnQkFDVCxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO29CQUN0QyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztvQkFDdkMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7aUJBQ3ZDLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWJVLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLGdTQUEyQzs7U0FFNUMsQ0FBQzs7T0FDVyxvQkFBb0IsQ0FjaEM7SUFBRCwyQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4YW1wbGVUYWIge1xuICBsYWJlbDogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGFzeW5jaHJvbm91c2x5IGxvYWRpbmcgdGFiIGNvbnRlbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEFzeW5jRXhhbXBsZSB7XG4gIGFzeW5jVGFiczogT2JzZXJ2YWJsZTxFeGFtcGxlVGFiW10+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXN5bmNUYWJzID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxFeGFtcGxlVGFiW10+KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChbXG4gICAgICAgICAge2xhYmVsOiAnRmlyc3QnLCBjb250ZW50OiAnQ29udGVudCAxJ30sXG4gICAgICAgICAge2xhYmVsOiAnU2Vjb25kJywgY29udGVudDogJ0NvbnRlbnQgMid9LFxuICAgICAgICAgIHtsYWJlbDogJ1RoaXJkJywgY29udGVudDogJ0NvbnRlbnQgMyd9LFxuICAgICAgICBdKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=