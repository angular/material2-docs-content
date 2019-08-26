import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
var LOAD_MORE = 'LOAD_MORE';
/** Nested node */
var LoadmoreNode = /** @class */ (function () {
    function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
        if (hasChildren === void 0) { hasChildren = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    Object.defineProperty(LoadmoreNode.prototype, "children", {
        get: function () {
            return this.childrenChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return LoadmoreNode;
}());
export { LoadmoreNode };
/** Flat node with expandable and level information */
var LoadmoreFlatNode = /** @class */ (function () {
    function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
    return LoadmoreFlatNode;
}());
export { LoadmoreFlatNode };
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
var LoadmoreDatabase = /** @class */ (function () {
    function LoadmoreDatabase() {
        this.batchNumber = 5;
        this.dataChange = new BehaviorSubject([]);
        this.nodeMap = new Map();
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    LoadmoreDatabase.prototype.initialize = function () {
        var _this = this;
        var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
        this.dataChange.next(data);
    };
    /** Expand a node whose children are not loaded */
    LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
        var _this = this;
        if (onlyFirstTime === void 0) { onlyFirstTime = false; }
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        var parent = this.nodeMap.get(item);
        var children = this.dataMap.get(item);
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        var newChildrenNumber = parent.children.length + this.batchNumber;
        var nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    LoadmoreDatabase.prototype._generateNode = function (item) {
        if (this.nodeMap.has(item)) {
            return this.nodeMap.get(item);
        }
        var result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase = tslib_1.__decorate([
        Injectable()
    ], LoadmoreDatabase);
    return LoadmoreDatabase;
}());
export { LoadmoreDatabase };
/**
 * @title Tree with partially loaded data
 */
var TreeLoadmoreExample = /** @class */ (function () {
    function TreeLoadmoreExample(_database) {
        var _this = this;
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = function (node) { return node.childrenChange; };
        this.transformer = function (node, level) {
            var existingNode = _this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        _database.initialize();
    }
    /** Load more nodes from data source */
    TreeLoadmoreExample.prototype.loadMore = function (item) {
        this._database.loadMore(item);
    };
    TreeLoadmoreExample.prototype.loadChildren = function (node) {
        this._database.loadMore(node.item, true);
    };
    TreeLoadmoreExample = tslib_1.__decorate([
        Component({
            selector: 'tree-loadmore-example',
            template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n",
            providers: [LoadmoreDatabase],
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [LoadmoreDatabase])
    ], TreeLoadmoreExample);
    return TreeLoadmoreExample;
}());
export { TreeLoadmoreExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBRWpELElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUU5QixrQkFBa0I7QUFDbEI7SUFPRSxzQkFBbUIsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLGtCQUF3QztRQUR4Qyw0QkFBQSxFQUFBLG1CQUFtQjtRQUNuQixtQ0FBQSxFQUFBLHlCQUF3QztRQUZ4QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFzQjtRQVIzRCxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztJQVFLLENBQUM7SUFOL0Qsc0JBQUksa0NBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFLSCxtQkFBQztBQUFELENBQUMsQUFWRCxJQVVDOztBQUVELHNEQUFzRDtBQUN0RDtJQUNFLDBCQUFtQixJQUFZLEVBQ1osS0FBUyxFQUNULFVBQWtCLEVBQ2xCLGtCQUF3QztRQUZ4QyxzQkFBQSxFQUFB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LEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBeUJELHVDQUF1QztJQUN2QyxzQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLElBQXNCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXBEVSxtQkFBbUI7UUFOL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyw2NkJBQXlDO1lBRXpDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDOztTQUM5QixDQUFDO2lEQVErQixnQkFBZ0I7T0FQcEMsbUJBQW1CLENBcUQvQjtJQUFELDBCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBMT0FEX01PUkUgPSAnTE9BRF9NT1JFJztcblxuLyoqIE5lc3RlZCBub2RlICovXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVOb2RlIHtcbiAgY2hpbGRyZW5DaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvYWRtb3JlTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IExvYWRtb3JlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbkNoYW5nZS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBoYXNDaGlsZHJlbiA9IGZhbHNlLFxuICAgICAgICAgICAgICBwdWJsaWMgbG9hZE1vcmVQYXJlbnRJdGVtOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge31cbn1cblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVGbGF0Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBsZXZlbCA9IDEsXG4gICAgICAgICAgICAgIHB1YmxpYyBleHBhbmRhYmxlID0gZmFsc2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBsb2FkTW9yZVBhcmVudEl0ZW06IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxufVxuXG4vKipcbiAqIEEgZGF0YWJhc2UgdGhhdCBvbmx5IGxvYWQgcGFydCBvZiB0aGUgZGF0YSBpbml0aWFsbHkuIEFmdGVyIHVzZXIgY2xpY2tzIG9uIHRoZSBgTG9hZCBtb3JlYFxuICogYnV0dG9uLCBtb3JlIGRhdGEgd2lsbCBiZSBsb2FkZWQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkbW9yZURhdGFiYXNlIHtcbiAgYmF0Y2hOdW1iZXIgPSA1O1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2FkbW9yZU5vZGVbXT4oW10pO1xuICBub2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsIExvYWRtb3JlTm9kZT4oKTtcblxuICAvKiogVGhlIGRhdGEgKi9cbiAgcm9vdExldmVsTm9kZXM6IHN0cmluZ1tdID0gWydWZWdldGFibGVzJywgJ0ZydWl0cyddO1xuICBkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPihbXG4gICAgWydGcnVpdHMnLCBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnXV0sXG4gICAgWydWZWdldGFibGVzJywgWydUb21hdG8nLCAnUG90YXRvJywgJ09uaW9uJ11dLFxuICAgIFsnQXBwbGUnLCBbJ0Z1amknLCAnTWFjaW50b3NoJ11dLFxuICAgIFsnT25pb24nLCBbJ1llbGxvdycsICdXaGl0ZScsICdQdXJwbGUnLCAnR3JlZW4nLCAnU2hhbGxvdCcsICdTd2VldCcsICdSZWQnLCAnTGVlayddXSxcbiAgXSk7XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAobmFtZSA9PiB0aGlzLl9nZW5lcmF0ZU5vZGUobmFtZSkpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqIEV4cGFuZCBhIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIG5vdCBsb2FkZWQgKi9cbiAgbG9hZE1vcmUoaXRlbTogc3RyaW5nLCBvbmx5Rmlyc3RUaW1lID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMubm9kZU1hcC5oYXMoaXRlbSkgfHwgIXRoaXMuZGF0YU1hcC5oYXMoaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2RlTWFwLmdldChpdGVtKSE7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmRhdGFNYXAuZ2V0KGl0ZW0pITtcbiAgICBpZiAob25seUZpcnN0VGltZSAmJiBwYXJlbnQuY2hpbGRyZW4hLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3Q2hpbGRyZW5OdW1iZXIgPSBwYXJlbnQuY2hpbGRyZW4hLmxlbmd0aCArIHRoaXMuYmF0Y2hOdW1iZXI7XG4gICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbi5zbGljZSgwLCBuZXdDaGlsZHJlbk51bWJlcilcbiAgICAgIC5tYXAobmFtZSA9PiB0aGlzLl9nZW5lcmF0ZU5vZGUobmFtZSkpO1xuICAgIGlmIChuZXdDaGlsZHJlbk51bWJlciA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgLy8gTmVlZCBhIG5ldyBsb2FkIG1vcmUgbm9kZVxuICAgICAgbm9kZXMucHVzaChuZXcgTG9hZG1vcmVOb2RlKExPQURfTU9SRSwgZmFsc2UsIGl0ZW0pKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuY2hpbGRyZW5DaGFuZ2UubmV4dChub2Rlcyk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhQ2hhbmdlLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlTm9kZShpdGVtOiBzdHJpbmcpOiBMb2FkbW9yZU5vZGUge1xuICAgIGlmICh0aGlzLm5vZGVNYXAuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlTWFwLmdldChpdGVtKSE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMb2FkbW9yZU5vZGUoaXRlbSwgdGhpcy5kYXRhTWFwLmhhcyhpdGVtKSk7XG4gICAgdGhpcy5ub2RlTWFwLnNldChpdGVtLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIHBhcnRpYWxseSBsb2FkZWQgZGF0YVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWxvYWRtb3JlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbTG9hZG1vcmVEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUxvYWRtb3JlRXhhbXBsZSB7XG4gIG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTG9hZG1vcmVGbGF0Tm9kZT4oKTtcbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxMb2FkbW9yZUZsYXROb2RlPjtcbiAgdHJlZUZsYXR0ZW5lcjogTWF0VHJlZUZsYXR0ZW5lcjxMb2FkbW9yZU5vZGUsIExvYWRtb3JlRmxhdE5vZGU+O1xuICAvLyBGbGF0IHRyZWUgZGF0YSBzb3VyY2VcbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPExvYWRtb3JlTm9kZSwgTG9hZG1vcmVGbGF0Tm9kZT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IExvYWRtb3JlRGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcih0aGlzLnRyYW5zZm9ybWVyLCB0aGlzLmdldExldmVsLFxuICAgICAgdGhpcy5pc0V4cGFuZGFibGUsIHRoaXMuZ2V0Q2hpbGRyZW4pO1xuXG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8TG9hZG1vcmVGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgX2RhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgX2RhdGFiYXNlLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IExvYWRtb3JlTm9kZSk6IE9ic2VydmFibGU8TG9hZG1vcmVOb2RlW10+ID0+IG5vZGUuY2hpbGRyZW5DaGFuZ2U7XG5cbiAgdHJhbnNmb3JtZXIgPSAobm9kZTogTG9hZG1vcmVOb2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gdGhpcy5ub2RlTWFwLmdldChub2RlLml0ZW0pO1xuXG4gICAgaWYgKGV4aXN0aW5nTm9kZSkge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdOb2RlID1cbiAgICAgICAgbmV3IExvYWRtb3JlRmxhdE5vZGUobm9kZS5pdGVtLCBsZXZlbCwgbm9kZS5oYXNDaGlsZHJlbiwgbm9kZS5sb2FkTW9yZVBhcmVudEl0ZW0pO1xuICAgIHRoaXMubm9kZU1hcC5zZXQobm9kZS5pdGVtLCBuZXdOb2RlKTtcbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuXG4gIGdldExldmVsID0gKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaXNMb2FkTW9yZSA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLml0ZW0gPT09IExPQURfTU9SRTtcblxuICAvKiogTG9hZCBtb3JlIG5vZGVzIGZyb20gZGF0YSBzb3VyY2UgKi9cbiAgbG9hZE1vcmUoaXRlbTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2UubG9hZE1vcmUoaXRlbSk7XG4gIH1cblxuICBsb2FkQ2hpbGRyZW4obm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkge1xuICAgIHRoaXMuX2RhdGFiYXNlLmxvYWRNb3JlKG5vZGUuaXRlbSwgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==