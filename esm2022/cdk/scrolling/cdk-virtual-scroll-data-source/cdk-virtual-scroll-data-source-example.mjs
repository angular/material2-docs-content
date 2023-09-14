import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scroll with a custom data source */
export class CdkVirtualScrollDataSourceExample {
    constructor() {
        this.ds = new MyDataSource();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkVirtualScrollDataSourceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.4", type: CdkVirtualScrollDataSourceExample, isStandalone: true, selector: "cdk-virtual-scroll-data-source-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.4", ngImport: i0, type: CdkVirtualScrollDataSourceExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-data-source-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"] }]
        }] });
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
    connect(collectionViewer) {
        this._subscription.add(collectionViewer.viewChange.subscribe(range => {
            const startPage = this._getPageForIndex(range.start);
            const endPage = this._getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this._fetchPage(i);
            }
        }));
        return this._dataStream;
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
    _getPageForIndex(index) {
        return Math.floor(index / this._pageSize);
    }
    _fetchPage(page) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this._cachedData.splice(page * this._pageSize, this._pageSize, ...Array.from({ length: this._pageSize }).map((_, i) => `Item #${page * this._pageSize + i}`));
            this._dataStream.next(this._cachedData);
        }, Math.random() * 1000 + 200);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQW1CLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXZELHNEQUFzRDtBQVN0RCxNQUFNLE9BQU8saUNBQWlDO0lBUjlDO1FBU0UsT0FBRSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FDekI7cUhBRlksaUNBQWlDO3lHQUFqQyxpQ0FBaUMsa0dDZDlDLDRNQUdBLHVMRFNZLGVBQWU7O2tHQUVkLGlDQUFpQztrQkFSN0MsU0FBUzsrQkFDRSx3Q0FBd0MsbUJBR2pDLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDOztBQU01QixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQThCO0lBQWhFOztRQUNVLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFDakIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQVMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF1Q3RELENBQUM7SUFyQ0MsT0FBTyxDQUFDLGdCQUFrQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBYTtRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sVUFBVSxDQUFDLElBQVk7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QiwwREFBMEQ7UUFDMUQsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFDckIsSUFBSSxDQUFDLFNBQVMsRUFDZCxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUM1RixDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIERhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7U2Nyb2xsaW5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbCB3aXRoIGEgY3VzdG9tIGRhdGEgc291cmNlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTY3JvbGxpbmdNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsRGF0YVNvdXJjZUV4YW1wbGUge1xuICBkcyA9IG5ldyBNeURhdGFTb3VyY2UoKTtcbn1cblxuZXhwb3J0IGNsYXNzIE15RGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIHByaXZhdGUgX2xlbmd0aCA9IDEwMDAwMDtcbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSAxMDA7XG4gIHByaXZhdGUgX2NhY2hlZERhdGEgPSBBcnJheS5mcm9tPHN0cmluZz4oe2xlbmd0aDogdGhpcy5fbGVuZ3RofSk7XG4gIHByaXZhdGUgX2ZldGNoZWRQYWdlcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhU3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDwoc3RyaW5nIHwgdW5kZWZpbmVkKVtdPih0aGlzLl9jYWNoZWREYXRhKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IE9ic2VydmFibGU8KHN0cmluZyB8IHVuZGVmaW5lZClbXT4ge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQoXG4gICAgICBjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2Uuc3Vic2NyaWJlKHJhbmdlID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRQYWdlID0gdGhpcy5fZ2V0UGFnZUZvckluZGV4KHJhbmdlLnN0YXJ0KTtcbiAgICAgICAgY29uc3QgZW5kUGFnZSA9IHRoaXMuX2dldFBhZ2VGb3JJbmRleChyYW5nZS5lbmQgLSAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9mZXRjaFBhZ2UoaSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTdHJlYW07XG4gIH1cblxuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnZUZvckluZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5fcGFnZVNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmV0Y2hQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9mZXRjaGVkUGFnZXMuaGFzKHBhZ2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2ZldGNoZWRQYWdlcy5hZGQocGFnZSk7XG5cbiAgICAvLyBVc2UgYHNldFRpbWVvdXRgIHRvIHNpbXVsYXRlIGZldGNoaW5nIGRhdGEgZnJvbSBzZXJ2ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9jYWNoZWREYXRhLnNwbGljZShcbiAgICAgICAgcGFnZSAqIHRoaXMuX3BhZ2VTaXplLFxuICAgICAgICB0aGlzLl9wYWdlU2l6ZSxcbiAgICAgICAgLi4uQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLl9wYWdlU2l6ZX0pLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7cGFnZSAqIHRoaXMuX3BhZ2VTaXplICsgaX1gKSxcbiAgICAgICk7XG4gICAgICB0aGlzLl9kYXRhU3RyZWFtLm5leHQodGhpcy5fY2FjaGVkRGF0YSk7XG4gICAgfSwgTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG4iLCI8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IGl0ZW1TaXplPVwiNTBcIiBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIj5cbiAgPGRpdiAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGRzXCIgY2xhc3M9XCJleGFtcGxlLWl0ZW1cIj57e2l0ZW0gfHwgJ0xvYWRpbmcuLi4nfX08L2Rpdj5cbjwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuIl19