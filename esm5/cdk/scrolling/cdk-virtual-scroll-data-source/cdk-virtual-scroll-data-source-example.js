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
        _this._length = 100000;
        _this._pageSize = 100;
        _this._cachedData = Array.from({ length: _this._length });
        _this._fetchedPages = new Set();
        _this._dataStream = new BehaviorSubject(_this._cachedData);
        _this._subscription = new Subscription();
        return _this;
    }
    MyDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this._subscription.add(collectionViewer.viewChange.subscribe(function (range) {
            var startPage = _this._getPageForIndex(range.start);
            var endPage = _this._getPageForIndex(range.end - 1);
            for (var i = startPage; i <= endPage; i++) {
                _this._fetchPage(i);
            }
        }));
        return this._dataStream;
    };
    MyDataSource.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    MyDataSource.prototype._getPageForIndex = function (index) {
        return Math.floor(index / this._pageSize);
    };
    MyDataSource.prototype._fetchPage = function (page) {
        var _this = this;
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(function () {
            var _a;
            (_a = _this._cachedData).splice.apply(_a, tslib_1.__spread([page * _this._pageSize, _this._pageSize], Array.from({ length: _this._pageSize })
                .map(function (_, i) { return "Item #" + (page * _this._pageSize + i); })));
            _this._dataStream.next(_this._cachedData);
        }, Math.random() * 1000 + 200);
    };
    return MyDataSource;
}(DataSource));
export { MyDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBbUIsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZUFBZSxFQUFjLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUUvRCxzREFBc0Q7QUFPdEQ7SUFOQTtRQU9FLE9BQUUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFGWSxpQ0FBaUM7UUFON0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdDQUF3QztZQUVsRCxzTkFBMEQ7WUFDMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7T0FDVyxpQ0FBaUMsQ0FFN0M7SUFBRCx3Q0FBQztDQUFBLEFBRkQsSUFFQztTQUZZLGlDQUFpQztBQUk5QztJQUFrQyx3Q0FBOEI7SUFBaEU7UUFBQSxxRUF5Q0M7UUF4Q1MsYUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBUyxFQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUN6RCxtQkFBYSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDbEMsaUJBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBeUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFtQzdDLENBQUM7SUFqQ0MsOEJBQU8sR0FBUCxVQUFRLGdCQUFrQztRQUExQyxpQkFTQztRQVJDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2hFLElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTyx1Q0FBZ0IsR0FBeEIsVUFBeUIsS0FBYTtRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8saUNBQVUsR0FBbEIsVUFBbUIsSUFBWTtRQUEvQixpQkFhQztRQVpDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsMERBQTBEO1FBQzFELFVBQVUsQ0FBQzs7WUFDVCxDQUFBLEtBQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQSxDQUFDLE1BQU0sNkJBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsR0FDdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUM7aUJBQ2xDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxZQUFTLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBRSxFQUFwQyxDQUFvQyxDQUFDLEdBQUU7WUFDOUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF6Q0QsQ0FBa0MsVUFBVSxHQXlDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIERhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGwgd2l0aCBhIGN1c3RvbSBkYXRhIHNvdXJjZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsRGF0YVNvdXJjZUV4YW1wbGUge1xuICBkcyA9IG5ldyBNeURhdGFTb3VyY2UoKTtcbn1cblxuZXhwb3J0IGNsYXNzIE15RGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIHByaXZhdGUgX2xlbmd0aCA9IDEwMDAwMDtcbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSAxMDA7XG4gIHByaXZhdGUgX2NhY2hlZERhdGEgPSBBcnJheS5mcm9tPHN0cmluZz4oe2xlbmd0aDogdGhpcy5fbGVuZ3RofSk7XG4gIHByaXZhdGUgX2ZldGNoZWRQYWdlcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICBwcml2YXRlIF9kYXRhU3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDwoc3RyaW5nIHwgdW5kZWZpbmVkKVtdPih0aGlzLl9jYWNoZWREYXRhKTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IE9ic2VydmFibGU8KHN0cmluZyB8IHVuZGVmaW5lZClbXT4ge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQoY29sbGVjdGlvblZpZXdlci52aWV3Q2hhbmdlLnN1YnNjcmliZShyYW5nZSA9PiB7XG4gICAgICBjb25zdCBzdGFydFBhZ2UgPSB0aGlzLl9nZXRQYWdlRm9ySW5kZXgocmFuZ2Uuc3RhcnQpO1xuICAgICAgY29uc3QgZW5kUGFnZSA9IHRoaXMuX2dldFBhZ2VGb3JJbmRleChyYW5nZS5lbmQgLSAxKTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPD0gZW5kUGFnZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoUGFnZShpKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTdHJlYW07XG4gIH1cblxuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnZUZvckluZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5fcGFnZVNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmV0Y2hQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9mZXRjaGVkUGFnZXMuaGFzKHBhZ2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2ZldGNoZWRQYWdlcy5hZGQocGFnZSk7XG5cbiAgICAvLyBVc2UgYHNldFRpbWVvdXRgIHRvIHNpbXVsYXRlIGZldGNoaW5nIGRhdGEgZnJvbSBzZXJ2ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9jYWNoZWREYXRhLnNwbGljZShwYWdlICogdGhpcy5fcGFnZVNpemUsIHRoaXMuX3BhZ2VTaXplLFxuICAgICAgICAgIC4uLkFycmF5LmZyb20oe2xlbmd0aDogdGhpcy5fcGFnZVNpemV9KVxuICAgICAgICAgICAgICAubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtwYWdlICogdGhpcy5fcGFnZVNpemUgKyBpfWApKTtcbiAgICAgIHRoaXMuX2RhdGFTdHJlYW0ubmV4dCh0aGlzLl9jYWNoZWREYXRhKTtcbiAgICB9LCBNYXRoLnJhbmRvbSgpICogMTAwMCArIDIwMCk7XG4gIH1cbn1cbiJdfQ==