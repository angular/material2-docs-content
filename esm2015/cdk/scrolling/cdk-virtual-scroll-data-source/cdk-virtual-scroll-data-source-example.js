/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollDataSourceExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r11 || "Loading...");
} }
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
                styleUrls: ['cdk-virtual-scroll-data-source-example.css'],
                templateUrl: 'cdk-virtual-scroll-data-source-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ CdkVirtualScrollDataSourceExample.ngFactoryDef = function CdkVirtualScrollDataSourceExample_Factory(t) { return new (t || CdkVirtualScrollDataSourceExample)(); };
/** @nocollapse */ CdkVirtualScrollDataSourceExample.ngComponentDef = i0.ɵɵdefineComponent({ type: CdkVirtualScrollDataSourceExample, selectors: [["cdk-virtual-scroll-data-source-example"]], decls: 2, vars: 1, consts: [["itemSize", "50", 1, "example-viewport"], ["class", "example-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item"]], template: function CdkVirtualScrollDataSourceExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollDataSourceExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.ds);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}"], changeDetection: 0 });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkVirtualScrollDataSourceExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-data-source-example',
                styleUrls: ['cdk-virtual-scroll-data-source-example.css'],
                templateUrl: 'cdk-virtual-scroll-data-source-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0lDRDdELDhCQUEwRDtJQUFBLFlBQXdCO0lBQUEsaUJBQU07OztJQUE5QixlQUF3QjtJQUF4Qiw4Q0FBd0I7Ozs7O0FEVXBGLE1BQU0sT0FBTyxpQ0FBaUM7SUFOOUM7UUFPRSxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2dCQUN6RCxXQUFXLEVBQUUsNkNBQTZDO2dCQUMxRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7MEhBQ1ksaUNBQWlDO2dGQUFqQyxpQ0FBaUM7UUNYOUMsc0RBQ0U7UUFBQSxrRkFBMEQ7UUFDNUQsaUJBQThCOztRQUR2QixlQUErQjtRQUEvQix3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ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvblZpZXdlciwgRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbCB3aXRoIGEgY3VzdG9tIGRhdGEgc291cmNlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZSB7XG4gIGRzID0gbmV3IE15RGF0YVNvdXJjZSgpO1xufVxuXG5leHBvcnQgY2xhc3MgTXlEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgcHJpdmF0ZSBfbGVuZ3RoID0gMTAwMDAwO1xuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwMDtcbiAgcHJpdmF0ZSBfY2FjaGVkRGF0YSA9IEFycmF5LmZyb208c3RyaW5nPih7bGVuZ3RoOiB0aGlzLl9sZW5ndGh9KTtcbiAgcHJpdmF0ZSBfZmV0Y2hlZFBhZ2VzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX2RhdGFTdHJlYW0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PChzdHJpbmcgfCB1bmRlZmluZWQpW10+KHRoaXMuX2NhY2hlZERhdGEpO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogT2JzZXJ2YWJsZTwoc3RyaW5nIHwgdW5kZWZpbmVkKVtdPiB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2Uuc3Vic2NyaWJlKHJhbmdlID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0UGFnZSA9IHRoaXMuX2dldFBhZ2VGb3JJbmRleChyYW5nZS5zdGFydCk7XG4gICAgICBjb25zdCBlbmRQYWdlID0gdGhpcy5fZ2V0UGFnZUZvckluZGV4KHJhbmdlLmVuZCAtIDEpO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZmV0Y2hQYWdlKGkpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVN0cmVhbTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdlRm9ySW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLl9wYWdlU2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIF9mZXRjaFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX2ZldGNoZWRQYWdlcy5oYXMocGFnZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZmV0Y2hlZFBhZ2VzLmFkZChwYWdlKTtcblxuICAgIC8vIFVzZSBgc2V0VGltZW91dGAgdG8gc2ltdWxhdGUgZmV0Y2hpbmcgZGF0YSBmcm9tIHNlcnZlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2NhY2hlZERhdGEuc3BsaWNlKHBhZ2UgKiB0aGlzLl9wYWdlU2l6ZSwgdGhpcy5fcGFnZVNpemUsXG4gICAgICAgICAgLi4uQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLl9wYWdlU2l6ZX0pXG4gICAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IGBJdGVtICMke3BhZ2UgKiB0aGlzLl9wYWdlU2l6ZSArIGl9YCkpO1xuICAgICAgdGhpcy5fZGF0YVN0cmVhbS5uZXh0KHRoaXMuX2NhY2hlZERhdGEpO1xuICAgIH0sIE1hdGgucmFuZG9tKCkgKiAxMDAwICsgMjAwKTtcbiAgfVxufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBpdGVtU2l6ZT1cIjUwXCIgY2xhc3M9XCJleGFtcGxlLXZpZXdwb3J0XCI+XG4gIDxkaXYgKmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBkc1wiIGNsYXNzPVwiZXhhbXBsZS1pdGVtXCI+e3tpdGVtIHx8ICdMb2FkaW5nLi4uJ319PC9kaXY+XG48L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiJdfQ==