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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkVirtualScrollDataSourceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: CdkVirtualScrollDataSourceExample, isStandalone: true, selector: "cdk-virtual-scroll-data-source-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkVirtualScrollDataSourceExample, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQW1CLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXZELHNEQUFzRDtBQVN0RCxNQUFNLE9BQU8saUNBQWlDO0lBUjlDO1FBU0UsT0FBRSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FDekI7bUhBRlksaUNBQWlDO3VHQUFqQyxpQ0FBaUMsa0dDZDlDLDRNQUdBLHVMRFNZLGVBQWU7O2dHQUVkLGlDQUFpQztrQkFSN0MsU0FBUzsrQkFDRSx3Q0FBd0MsbUJBR2pDLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDOztBQU01QixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQThCO0lBQWhFOztRQUNVLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFDakIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQVMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF1Q3RELENBQUM7SUFyQ0MsT0FBTyxDQUFDLGdCQUFrQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFZO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdCLDBEQUEwRDtRQUMxRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxFQUNyQixJQUFJLENBQUMsU0FBUyxFQUNkLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQzVGLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sbGVjdGlvblZpZXdlciwgRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIHdpdGggYSBjdXN0b20gZGF0YSBzb3VyY2UgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1Njcm9sbGluZ01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZSB7XG4gIGRzID0gbmV3IE15RGF0YVNvdXJjZSgpO1xufVxuXG5leHBvcnQgY2xhc3MgTXlEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgcHJpdmF0ZSBfbGVuZ3RoID0gMTAwMDAwO1xuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwMDtcbiAgcHJpdmF0ZSBfY2FjaGVkRGF0YSA9IEFycmF5LmZyb208c3RyaW5nPih7bGVuZ3RoOiB0aGlzLl9sZW5ndGh9KTtcbiAgcHJpdmF0ZSBfZmV0Y2hlZFBhZ2VzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2RhdGFTdHJlYW0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PChzdHJpbmcgfCB1bmRlZmluZWQpW10+KHRoaXMuX2NhY2hlZERhdGEpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogT2JzZXJ2YWJsZTwoc3RyaW5nIHwgdW5kZWZpbmVkKVtdPiB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIGNvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZS5zdWJzY3JpYmUocmFuZ2UgPT4ge1xuICAgICAgICBjb25zdCBzdGFydFBhZ2UgPSB0aGlzLl9nZXRQYWdlRm9ySW5kZXgocmFuZ2Uuc3RhcnQpO1xuICAgICAgICBjb25zdCBlbmRQYWdlID0gdGhpcy5fZ2V0UGFnZUZvckluZGV4KHJhbmdlLmVuZCAtIDEpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDw9IGVuZFBhZ2U7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2ZldGNoUGFnZShpKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVN0cmVhbTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdlRm9ySW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLl9wYWdlU2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIF9mZXRjaFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX2ZldGNoZWRQYWdlcy5oYXMocGFnZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZmV0Y2hlZFBhZ2VzLmFkZChwYWdlKTtcblxuICAgIC8vIFVzZSBgc2V0VGltZW91dGAgdG8gc2ltdWxhdGUgZmV0Y2hpbmcgZGF0YSBmcm9tIHNlcnZlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2NhY2hlZERhdGEuc3BsaWNlKFxuICAgICAgICBwYWdlICogdGhpcy5fcGFnZVNpemUsXG4gICAgICAgIHRoaXMuX3BhZ2VTaXplLFxuICAgICAgICAuLi5BcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuX3BhZ2VTaXplfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtwYWdlICogdGhpcy5fcGFnZVNpemUgKyBpfWApLFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2RhdGFTdHJlYW0ubmV4dCh0aGlzLl9jYWNoZWREYXRhKTtcbiAgICB9LCBNYXRoLnJhbmRvbSgpICogMTAwMCArIDIwMCk7XG4gIH1cbn1cbiIsIjxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgaXRlbVNpemU9XCI1MFwiIGNsYXNzPVwiZXhhbXBsZS12aWV3cG9ydFwiPlxuICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgZHNcIiBjbGFzcz1cImV4YW1wbGUtaXRlbVwiPnt7aXRlbSB8fCAnTG9hZGluZy4uLid9fTwvZGl2PlxuPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4iXX0=