import * as tslib_1 from "tslib";
import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
/** @title Virtual scroll with a custom data source */
var CdkVirtualScrollDataSourceExample = /** @class */ (function () {
    function CdkVirtualScrollDataSourceExample() {
        this.ds = new MyDataSource();
    }
    CdkVirtualScrollDataSourceExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-virtual-scroll-data-source-example',
            template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
        })
    ], CdkVirtualScrollDataSourceExample);
    return CdkVirtualScrollDataSourceExample;
}());
export { CdkVirtualScrollDataSourceExample };
var MyDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(MyDataSource, _super);
    function MyDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.length = 100000;
        _this.pageSize = 100;
        _this.cachedData = Array.from({ length: _this.length });
        _this.fetchedPages = new Set();
        _this.dataStream = new BehaviorSubject(_this.cachedData);
        _this.subscription = new Subscription();
        return _this;
    }
    MyDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.subscription.add(collectionViewer.viewChange.subscribe(function (range) {
            var startPage = _this.getPageForIndex(range.start);
            var endPage = _this.getPageForIndex(range.end - 1);
            for (var i = startPage; i <= endPage; i++) {
                _this.fetchPage(i);
            }
        }));
        return this.dataStream;
    };
    MyDataSource.prototype.disconnect = function () {
        this.subscription.unsubscribe();
    };
    MyDataSource.prototype.getPageForIndex = function (index) {
        return Math.floor(index / this.pageSize);
    };
    MyDataSource.prototype.fetchPage = function (page) {
        var _this = this;
        if (this.fetchedPages.has(page)) {
            return;
        }
        this.fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(function () {
            var _a;
            (_a = _this.cachedData).splice.apply(_a, tslib_1.__spread([page * _this.pageSize, _this.pageSize], Array.from({ length: _this.pageSize })
                .map(function (_, i) { return "Item #" + (page * _this.pageSize + i); })));
            _this.dataStream.next(_this.cachedData);
        }, Math.random() * 1000 + 200);
    };
    return MyDataSource;
}(DataSource));
export { MyDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQW1CLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBYyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFL0Qsc0RBQXNEO0FBT3REO0lBTkE7UUFPRSxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRlksaUNBQWlDO1FBTjdDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3Q0FBd0M7WUFFbEQsc05BQTBEO1lBQzFELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csaUNBQWlDLENBRTdDO0lBQUQsd0NBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSxpQ0FBaUM7QUFJOUM7SUFBa0Msd0NBQThCO0lBQWhFO1FBQUEscUVBeUNDO1FBeENTLFlBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGdCQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBUyxFQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUN2RCxrQkFBWSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDakMsZ0JBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBeUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFtQzVDLENBQUM7SUFqQ0MsOEJBQU8sR0FBUCxVQUFRLGdCQUFrQztRQUExQyxpQkFTQztRQVJDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQy9ELElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVPLHNDQUFlLEdBQXZCLFVBQXdCLEtBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGdDQUFTLEdBQWpCLFVBQWtCLElBQVk7UUFBOUIsaUJBYUM7UUFaQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLDBEQUEwRDtRQUMxRCxVQUFVLENBQUM7O1lBQ1QsQ0FBQSxLQUFBLEtBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxNQUFNLDZCQUFDLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLEdBQ25ELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO2lCQUNqQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsWUFBUyxJQUFJLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUUsRUFBbkMsQ0FBbUMsQ0FBQyxHQUFFO1lBQzdELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBekNELENBQWtDLFVBQVUsR0F5QzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIHdpdGggYSBjdXN0b20gZGF0YSBzb3VyY2UgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbERhdGFTb3VyY2VFeGFtcGxlIHtcbiAgZHMgPSBuZXcgTXlEYXRhU291cmNlKCk7XG59XG5cbmV4cG9ydCBjbGFzcyBNeURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBwcml2YXRlIGxlbmd0aCA9IDEwMDAwMDtcbiAgcHJpdmF0ZSBwYWdlU2l6ZSA9IDEwMDtcbiAgcHJpdmF0ZSBjYWNoZWREYXRhID0gQXJyYXkuZnJvbTxzdHJpbmc+KHtsZW5ndGg6IHRoaXMubGVuZ3RofSk7XG4gIHByaXZhdGUgZmV0Y2hlZFBhZ2VzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gIHByaXZhdGUgZGF0YVN0cmVhbSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8KHN0cmluZyB8IHVuZGVmaW5lZClbXT4odGhpcy5jYWNoZWREYXRhKTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29ubmVjdChjb2xsZWN0aW9uVmlld2VyOiBDb2xsZWN0aW9uVmlld2VyKTogT2JzZXJ2YWJsZTwoc3RyaW5nIHwgdW5kZWZpbmVkKVtdPiB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKGNvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZS5zdWJzY3JpYmUocmFuZ2UgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRQYWdlID0gdGhpcy5nZXRQYWdlRm9ySW5kZXgocmFuZ2Uuc3RhcnQpO1xuICAgICAgY29uc3QgZW5kUGFnZSA9IHRoaXMuZ2V0UGFnZUZvckluZGV4KHJhbmdlLmVuZCAtIDEpO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpKyspIHtcbiAgICAgICAgdGhpcy5mZXRjaFBhZ2UoaSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiB0aGlzLmRhdGFTdHJlYW07XG4gIH1cblxuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VGb3JJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZmV0Y2hlZFBhZ2VzLmhhcyhwYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZldGNoZWRQYWdlcy5hZGQocGFnZSk7XG5cbiAgICAvLyBVc2UgYHNldFRpbWVvdXRgIHRvIHNpbXVsYXRlIGZldGNoaW5nIGRhdGEgZnJvbSBzZXJ2ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNhY2hlZERhdGEuc3BsaWNlKHBhZ2UgKiB0aGlzLnBhZ2VTaXplLCB0aGlzLnBhZ2VTaXplLFxuICAgICAgICAgIC4uLkFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5wYWdlU2l6ZX0pXG4gICAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IGBJdGVtICMke3BhZ2UgKiB0aGlzLnBhZ2VTaXplICsgaX1gKSk7XG4gICAgICB0aGlzLmRhdGFTdHJlYW0ubmV4dCh0aGlzLmNhY2hlZERhdGEpO1xuICAgIH0sIE1hdGgucmFuZG9tKCkgKiAxMDAwICsgMjAwKTtcbiAgfVxufVxuIl19