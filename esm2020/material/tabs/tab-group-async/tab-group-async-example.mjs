import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
/**
 * @title Tab group with asynchronously loading tab contents
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
TabGroupAsyncExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TabGroupAsyncExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupAsyncExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.4", type: TabGroupAsyncExample, selector: "tab-group-async-example", ngImport: i0, template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n", components: [{ type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple"], exportAs: ["matTabGroup"] }, { type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }], pipes: { "async": i2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.4", ngImport: i0, type: TabGroupAsyncExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-async-example', template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n" }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hc3luYy90YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDOzs7O0FBTzFDOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFnQyxFQUFFLEVBQUU7WUFDbkUsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO29CQUN0QyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztvQkFDdkMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7aUJBQ3ZDLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7d0hBYlUsb0JBQW9COzRHQUFwQixvQkFBb0IsK0RDZmpDLHNSQVVBO2tHREthLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBFeGFtcGxlVGFiIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBhc3luY2hyb25vdXNseSBsb2FkaW5nIHRhYiBjb250ZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtYXN5bmMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQXN5bmNFeGFtcGxlIHtcbiAgYXN5bmNUYWJzOiBPYnNlcnZhYmxlPEV4YW1wbGVUYWJbXT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hc3luY1RhYnMgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV4YW1wbGVUYWJbXT4pID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KFtcbiAgICAgICAgICB7bGFiZWw6ICdGaXJzdCcsIGNvbnRlbnQ6ICdDb250ZW50IDEnfSxcbiAgICAgICAgICB7bGFiZWw6ICdTZWNvbmQnLCBjb250ZW50OiAnQ29udGVudCAyJ30sXG4gICAgICAgICAge2xhYmVsOiAnVGhpcmQnLCBjb250ZW50OiAnQ29udGVudCAzJ30sXG4gICAgICAgIF0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIoYXN5bmNUYWJzIHwgYXN5bmMpID09PSBudWxsXCI+XG4gIExvYWRpbmcgdGFicy4uLlxuPC9uZy1jb250YWluZXI+XG5cbjxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiAqbmdGb3I9XCJsZXQgdGFiIG9mIGFzeW5jVGFicyB8IGFzeW5jXCI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+e3t0YWIubGFiZWx9fTwvbmctdGVtcGxhdGU+XG4gICAge3t0YWIuY29udGVudH19XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==