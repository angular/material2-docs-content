/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * @record
 */
export function ExampleTab() { }
if (false) {
    /** @type {?} */
    ExampleTab.prototype.label;
    /** @type {?} */
    ExampleTab.prototype.content;
}
/**
 * \@title Tab group with asynchronously loading tab contents
 */
export class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((observer) => {
            setTimeout(() => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
}
TabGroupAsyncExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-group-async-example',
                template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
TabGroupAsyncExample.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TabGroupAsyncExample.prototype.asyncTabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7Ozs7QUFFMUMsZ0NBR0M7OztJQUZDLDJCQUFjOztJQUNkLDZCQUFnQjs7Ozs7QUFXbEIsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFnQyxFQUFFLEVBQUU7WUFDbkUsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO29CQUN0QyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztvQkFDdkMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7aUJBQ3ZDLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxnU0FBMkM7O2FBRTVDOzs7Ozs7SUFFQyx5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBFeGFtcGxlVGFiIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBhc3luY2hyb25vdXNseSBsb2FkaW5nIHRhYiBjb250ZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBBc3luY0V4YW1wbGUge1xuICBhc3luY1RhYnM6IE9ic2VydmFibGU8RXhhbXBsZVRhYltdPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFzeW5jVGFicyA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RXhhbXBsZVRhYltdPikgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoW1xuICAgICAgICAgIHtsYWJlbDogJ0ZpcnN0JywgY29udGVudDogJ0NvbnRlbnQgMSd9LFxuICAgICAgICAgIHtsYWJlbDogJ1NlY29uZCcsIGNvbnRlbnQ6ICdDb250ZW50IDInfSxcbiAgICAgICAgICB7bGFiZWw6ICdUaGlyZCcsIGNvbnRlbnQ6ICdDb250ZW50IDMnfSxcbiAgICAgICAgXSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuIl19