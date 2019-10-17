import * as tslib_1 from "tslib";
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());
export { DynamicFlatNode };
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        return this.dataMap.get(node);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());
export { DynamicDatabase };
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        set: function (value) {
            this._treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this._treeControl.expansionModel.changed.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(function () { return _this.data; }));
    };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this._database.getChildren(node.item);
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this._database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, tslib_1.__spread([index + 1, 0], nodes));
            }
            else {
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) { }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
        }, 1000);
    };
    DynamicDataSource.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DynamicDataSource.ctorParameters = function () { return [
        { type: FlatTreeControl },
        { type: DynamicDatabase }
    ]; };
    return DynamicDataSource;
}());
export { DynamicDataSource };
/**
 * @title Tree with dynamic data
 */
var TreeDynamicExample = /** @class */ (function () {
    function TreeDynamicExample(database) {
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    TreeDynamicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-dynamic-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n",
                    providers: [DynamicDatabase],
                    styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    TreeDynamicExample.ctorParameters = function () { return [
        { type: DynamicDatabase }
    ]; };
    return TreeDynamicExample;
}());
export { TreeDynamicExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWR5bmFtaWMvdHJlZS1keW5hbWljLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsc0RBQXNEO0FBQ3REO0lBQ0UseUJBQW1CLElBQVksRUFBUyxLQUFTLEVBQVMsVUFBa0IsRUFDekQsU0FBaUI7UUFESSxzQkFBQSxFQUFBLFNBQVM7UUFBUywyQkFBQSxFQUFBLGtCQUFrQjtRQUN6RCwwQkFBQSxFQUFBLGlCQUFpQjtRQURqQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDekQsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUFHLENBQUM7SUFDMUMsc0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDs7O0dBR0c7QUFDSDtJQUFBO1FBQ0UsWUFBTyxHQUFHLElBQUksR0FBRyxDQUFtQjtZQUNsQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FB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LENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkEvREYsVUFBVTs7OztnQkE3Q0gsZUFBZTtnQkF5RFUsZUFBZTs7SUFvRGhELHdCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0EvRFksaUJBQWlCO0FBaUU5Qjs7R0FFRztBQUNIO0lBT0UsNEJBQVksUUFBeUI7UUFXckMsYUFBUSxHQUFHLFVBQUMsSUFBcUIsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDO1FBRWpELGlCQUFZLEdBQUcsVUFBQyxJQUFxQixJQUFLLE9BQUEsSUFBSSxDQUFDLFVBQVUsRUFBZixDQUFlLENBQUM7UUFFMUQsYUFBUSxHQUFHLFVBQUMsQ0FBUyxFQUFFLFNBQTBCLElBQUssT0FBQSxTQUFTLENBQUMsVUFBVSxFQUFwQixDQUFvQixDQUFDO1FBZHpFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsMnlCQUF3QztvQkFFeEMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDOztpQkFDN0I7Ozs7Z0JBRXVCLGVBQWU7O0lBZ0J2Qyx5QkFBQztDQUFBLEFBdkJELElBdUJDO1NBakJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvblZpZXdlciwgU2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogc3RyaW5nLCBwdWJsaWMgbGV2ZWwgPSAxLCBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgICAgICAgICAgICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2UpIHt9XG59XG5cbi8qKlxuICogRGF0YWJhc2UgZm9yIGR5bmFtaWMgZGF0YS4gV2hlbiBleHBhbmRpbmcgYSBub2RlIGluIHRoZSB0cmVlLCB0aGUgZGF0YSBzb3VyY2Ugd2lsbCBuZWVkIHRvIGZldGNoXG4gKiB0aGUgZGVzY2VuZGFudHMgZGF0YSBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhYmFzZSB7XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZSddXVxuICBdKTtcblxuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ0ZydWl0cycsICdWZWdldGFibGVzJ107XG5cbiAgLyoqIEluaXRpYWwgZGF0YSBmcm9tIGRhdGFiYXNlICovXG4gIGluaXRpYWxEYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAobmFtZSA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIDAsIHRydWUpKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuKG5vZGU6IHN0cmluZyk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChub2RlKTtcbiAgfVxuXG4gIGlzRXhwYW5kYWJsZShub2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmhhcyhub2RlKTtcbiAgfVxufVxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFTb3VyY2Uge1xuXG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PER5bmFtaWNGbGF0Tm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogRHluYW1pY0ZsYXROb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG4gIHNldCBkYXRhKHZhbHVlOiBEeW5hbWljRmxhdE5vZGVbXSkge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmRhdGFOb2RlcyA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge31cblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPER5bmFtaWNGbGF0Tm9kZVtdPiB7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwuY2hhbmdlZC5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgIGlmICgoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5hZGRlZCB8fFxuICAgICAgICAoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5yZW1vdmVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZShjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2UsIHRoaXMuZGF0YUNoYW5nZSkucGlwZShtYXAoKCkgPT4gdGhpcy5kYXRhKSk7XG4gIH1cblxuICAvKiogSGFuZGxlIGV4cGFuZC9jb2xsYXBzZSBiZWhhdmlvcnMgKi9cbiAgaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlOiBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikge1xuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIGNoYW5nZS5hZGRlZC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIHRydWUpKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICBjaGFuZ2UucmVtb3ZlZC5zbGljZSgpLnJldmVyc2UoKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgbm9kZSwgcmVtb3ZlIGZyb20gZGlzcGxheSBsaXN0XG4gICAqL1xuICB0b2dnbGVOb2RlKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSwgZXhwYW5kOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9kYXRhYmFzZS5nZXRDaGlsZHJlbihub2RlLml0ZW0pO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2Yobm9kZSk7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCBpbmRleCA8IDApIHsgLy8gSWYgbm8gY2hpbGRyZW4sIG9yIGNhbm5vdCBmaW5kIHRoZSBub2RlLCBubyBvcFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuLm1hcChuYW1lID0+XG4gICAgICAgICAgbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCBub2RlLmxldmVsICsgMSwgdGhpcy5fZGF0YWJhc2UuaXNFeHBhbmRhYmxlKG5hbWUpKSk7XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCAuLi5ub2Rlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgdGhpcy5kYXRhLmxlbmd0aFxuICAgICAgICAgICYmIHRoaXMuZGF0YVtpXS5sZXZlbCA+IG5vZGUubGV2ZWw7IGkrKywgY291bnQrKykge31cbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIGNvdW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aWZ5IHRoZSBjaGFuZ2VcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gICAgICBub2RlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBkeW5hbWljIGRhdGFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0R5bmFtaWNEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUR5bmFtaWNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEeW5hbWljRGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCBkYXRhYmFzZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFiYXNlLmluaXRpYWxEYXRhKCk7XG4gIH1cblxuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogRHluYW1pY0RhdGFTb3VyY2U7XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogRHluYW1pY0ZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogRHluYW1pY0ZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcbn1cbiJdfQ==