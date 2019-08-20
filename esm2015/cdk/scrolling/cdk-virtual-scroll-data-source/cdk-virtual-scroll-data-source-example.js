/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this._length = 100000;
        this._pageSize = 100;
        this._cachedData = Array.from({ length: this._length });
        this._fetchedPages = new Set();
        this._dataStream = new BehaviorSubject(this._cachedData);
        this._subscription = new Subscription();
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        this._subscription.add(collectionViewer.viewChange.subscribe((/**
         * @param {?} range
         * @return {?}
         */
        range => {
            /** @type {?} */
            const startPage = this._getPageForIndex(range.start);
            /** @type {?} */
            const endPage = this._getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this._fetchPage(i);
            }
        })));
        return this._dataStream;
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _getPageForIndex(index) {
        return Math.floor(index / this._pageSize);
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    _fetchPage(page) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._cachedData.splice(page * this._pageSize, this._pageSize, ...Array.from({ length: this._pageSize })
                .map((/**
             * @param {?} _
             * @param {?} i
             * @return {?}
             */
            (_, i) => `Item #${page * this._pageSize + i}`)));
            this._dataStream.next(this._cachedData);
        }), Math.random() * 1000 + 200);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._length;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._pageSize;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._cachedData;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._fetchedPages;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._dataStream;
    /**
     * @type {?}
     * @private
     */
    MyDataSource.prototype._subscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBbUIsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZUFBZSxFQUFjLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQVMvRCxNQUFNLE9BQU8saUNBQWlDO0lBTjlDO1FBT0UsT0FBRSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBRWxELHNOQUEwRDtnQkFDMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O0lBRUMsK0NBQXdCOztBQUcxQixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQThCO0lBQWhFOztRQUNVLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFDakIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQVMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFtQzdDLENBQUM7Ozs7O0lBakNDLE9BQU8sQ0FBQyxnQkFBa0M7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTs7a0JBQzdELFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7a0JBQzlDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLEtBQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQVk7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QiwwREFBMEQ7UUFDMUQsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDekQsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQztpQkFDbEMsR0FBRzs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7Ozs7OztJQXhDQywrQkFBeUI7Ozs7O0lBQ3pCLGlDQUF3Qjs7Ozs7SUFDeEIsbUNBQWlFOzs7OztJQUNqRSxxQ0FBMEM7Ozs7O0lBQzFDLG1DQUFvRjs7Ozs7SUFDcEYscUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIHdpdGggYSBjdXN0b20gZGF0YSBzb3VyY2UgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbERhdGFTb3VyY2VFeGFtcGxlIHtcbiAgZHMgPSBuZXcgTXlEYXRhU291cmNlKCk7XG59XG5cbmV4cG9ydCBjbGFzcyBNeURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBwcml2YXRlIF9sZW5ndGggPSAxMDAwMDA7XG4gIHByaXZhdGUgX3BhZ2VTaXplID0gMTAwO1xuICBwcml2YXRlIF9jYWNoZWREYXRhID0gQXJyYXkuZnJvbTxzdHJpbmc+KHtsZW5ndGg6IHRoaXMuX2xlbmd0aH0pO1xuICBwcml2YXRlIF9mZXRjaGVkUGFnZXMgPSBuZXcgU2V0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfZGF0YVN0cmVhbSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8KHN0cmluZyB8IHVuZGVmaW5lZClbXT4odGhpcy5fY2FjaGVkRGF0YSk7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPChzdHJpbmcgfCB1bmRlZmluZWQpW10+IHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKGNvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZS5zdWJzY3JpYmUocmFuZ2UgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRQYWdlID0gdGhpcy5fZ2V0UGFnZUZvckluZGV4KHJhbmdlLnN0YXJ0KTtcbiAgICAgIGNvbnN0IGVuZFBhZ2UgPSB0aGlzLl9nZXRQYWdlRm9ySW5kZXgocmFuZ2UuZW5kIC0gMSk7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDw9IGVuZFBhZ2U7IGkrKykge1xuICAgICAgICB0aGlzLl9mZXRjaFBhZ2UoaSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiB0aGlzLl9kYXRhU3RyZWFtO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2VGb3JJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuX3BhZ2VTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZldGNoUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fZmV0Y2hlZFBhZ2VzLmhhcyhwYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9mZXRjaGVkUGFnZXMuYWRkKHBhZ2UpO1xuXG4gICAgLy8gVXNlIGBzZXRUaW1lb3V0YCB0byBzaW11bGF0ZSBmZXRjaGluZyBkYXRhIGZyb20gc2VydmVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY2FjaGVkRGF0YS5zcGxpY2UocGFnZSAqIHRoaXMuX3BhZ2VTaXplLCB0aGlzLl9wYWdlU2l6ZSxcbiAgICAgICAgICAuLi5BcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuX3BhZ2VTaXplfSlcbiAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7cGFnZSAqIHRoaXMuX3BhZ2VTaXplICsgaX1gKSk7XG4gICAgICB0aGlzLl9kYXRhU3RyZWFtLm5leHQodGhpcy5fY2FjaGVkRGF0YSk7XG4gICAgfSwgTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG4iXX0=