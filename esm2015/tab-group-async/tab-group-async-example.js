/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.asyncTabs = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }), 1000);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7Ozs7QUFFMUMsZ0NBR0M7OztJQUZDLDJCQUFjOztJQUNkLDZCQUFnQjs7Ozs7QUFXbEIsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUFnQyxFQUFFLEVBQUU7WUFDbkUsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ1osRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7b0JBQ3RDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO29CQUN2QyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztpQkFDdkMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGdTQUEyQzs7YUFFNUM7Ozs7OztJQUVDLHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4YW1wbGVUYWIge1xuICBsYWJlbDogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGFzeW5jaHJvbm91c2x5IGxvYWRpbmcgdGFiIGNvbnRlbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEFzeW5jRXhhbXBsZSB7XG4gIGFzeW5jVGFiczogT2JzZXJ2YWJsZTxFeGFtcGxlVGFiW10+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXN5bmNUYWJzID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxFeGFtcGxlVGFiW10+KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChbXG4gICAgICAgICAge2xhYmVsOiAnRmlyc3QnLCBjb250ZW50OiAnQ29udGVudCAxJ30sXG4gICAgICAgICAge2xhYmVsOiAnU2Vjb25kJywgY29udGVudDogJ0NvbnRlbnQgMid9LFxuICAgICAgICAgIHtsYWJlbDogJ1RoaXJkJywgY29udGVudDogJ0NvbnRlbnQgMyd9LFxuICAgICAgICBdKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=