/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
/**
 * \@title Virtual scroll with a custom data source
 */
export class CdkVirtualScrollDataSourceExample {
    constructor() {
        this.ds = new MyDataSource();
    }
}
CdkVirtualScrollDataSourceExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-data-source-example',
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkVirtualScrollDataSourceExample.prototype.ds;
}
export class MyDataSource extends DataSource {
    constructor() {
        super(...arguments);
        this.length = 100000;
        this.pageSize = 100;
        this.cachedData = Array.from({ length: this.length });
        this.fetchedPages = new Set();
        this.dataStream = new BehaviorSubject(this.cachedData);
        this.subscription = new Subscription();
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        this.subscription.add(collectionViewer.viewChange.subscribe(range => {
            /** @type {?} */
            const startPage = this.getPageForIndex(range.start);
            /** @type {?} */
            const endPage = this.getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this.fetchPage(i);
            }
        }));
        return this.dataStream;
    }
    /**
     * @return {?}
     */
    disconnect() {
        this.subscription.unsubscribe();
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    getPageForIndex(index) {
        return Math.floor(index / this.pageSize);
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    fetchPage(page) {
        if (this.fetchedPages.has(page)) {
            return;
        }
        this.fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this.cachedData.splice(page * this.pageSize, this.pageSize, ...Array.from({ length: this.pageSize })
                .map((_, i) => `Item #${page * this.pageSize + i}`));
            this.dataStream.next(this.cachedData);
        }, Math.random() * 1000 + 200);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype.length;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype.cachedData;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype.fetchedPages;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype.dataStream;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype.subscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1CLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBYyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFTL0QsTUFBTSxPQUFPLGlDQUFpQztJQU45QztRQU9FLE9BQUUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0NBQXdDO2dCQUVsRCxzTkFBMEQ7Z0JBQzFELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztJQUVDLCtDQUF3Qjs7QUFHMUIsTUFBTSxPQUFPLFlBQWEsU0FBUSxVQUE4QjtJQUFoRTs7UUFDVSxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBUyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUN2RCxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDakMsZUFBVSxHQUFHLElBQUksZUFBZSxDQUF5QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBbUM1QyxDQUFDOzs7OztJQWpDQyxPQUFPLENBQUMsZ0JBQWtDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUM1RCxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztrQkFDN0MsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxLQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxJQUFZO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUIsMERBQTBEO1FBQzFELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUN0RCxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO2lCQUNqQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGOzs7Ozs7SUF4Q0MsOEJBQXdCOzs7OztJQUN4QixnQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUErRDs7Ozs7SUFDL0Qsb0NBQXlDOzs7OztJQUN6QyxrQ0FBa0Y7Ozs7O0lBQ2xGLG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvblZpZXdlciwgRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbCB3aXRoIGEgY3VzdG9tIGRhdGEgc291cmNlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZSB7XG4gIGRzID0gbmV3IE15RGF0YVNvdXJjZSgpO1xufVxuXG5leHBvcnQgY2xhc3MgTXlEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgcHJpdmF0ZSBsZW5ndGggPSAxMDAwMDA7XG4gIHByaXZhdGUgcGFnZVNpemUgPSAxMDA7XG4gIHByaXZhdGUgY2FjaGVkRGF0YSA9IEFycmF5LmZyb208c3RyaW5nPih7bGVuZ3RoOiB0aGlzLmxlbmd0aH0pO1xuICBwcml2YXRlIGZldGNoZWRQYWdlcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICBwcml2YXRlIGRhdGFTdHJlYW0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PChzdHJpbmcgfCB1bmRlZmluZWQpW10+KHRoaXMuY2FjaGVkRGF0YSk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IE9ic2VydmFibGU8KHN0cmluZyB8IHVuZGVmaW5lZClbXT4ge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2Uuc3Vic2NyaWJlKHJhbmdlID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0UGFnZSA9IHRoaXMuZ2V0UGFnZUZvckluZGV4KHJhbmdlLnN0YXJ0KTtcbiAgICAgIGNvbnN0IGVuZFBhZ2UgPSB0aGlzLmdldFBhZ2VGb3JJbmRleChyYW5nZS5lbmQgLSAxKTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPD0gZW5kUGFnZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hQYWdlKGkpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhU3RyZWFtO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlRm9ySW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmZldGNoZWRQYWdlcy5oYXMocGFnZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mZXRjaGVkUGFnZXMuYWRkKHBhZ2UpO1xuXG4gICAgLy8gVXNlIGBzZXRUaW1lb3V0YCB0byBzaW11bGF0ZSBmZXRjaGluZyBkYXRhIGZyb20gc2VydmVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jYWNoZWREYXRhLnNwbGljZShwYWdlICogdGhpcy5wYWdlU2l6ZSwgdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgICAuLi5BcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMucGFnZVNpemV9KVxuICAgICAgICAgICAgICAubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtwYWdlICogdGhpcy5wYWdlU2l6ZSArIGl9YCkpO1xuICAgICAgdGhpcy5kYXRhU3RyZWFtLm5leHQodGhpcy5jYWNoZWREYXRhKTtcbiAgICB9LCBNYXRoLnJhbmRvbSgpICogMTAwMCArIDIwMCk7XG4gIH1cbn1cbiJdfQ==