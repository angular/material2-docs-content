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
        this._treeControl.expansionModel.onChange.subscribe(function (change) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWR5bmFtaWMvdHJlZS1keW5hbWljLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsc0RBQXNEO0FBQ3REO0lBQ0UseUJBQW1CLElBQVksRUFBUyxLQUFTLEVBQVMsVUFBa0IsRUFDekQsU0FBaUI7UUFESSxzQkFBQSxFQUFBLFNBQVM7UUFBUywyQkFBQSxFQUFBLGtCQUFrQjtRQUN6RCwwQkFBQSxFQUFBLGlCQUFpQjtRQURqQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDekQsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUFHLENBQUM7SUFDMUMsc0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDs7O0dBR0c7QUFDSDtJQUFBO1FBQ0UsWUFBTyxHQUFHLElBQUksR0FBRyxDQUFtQjtZQUNsQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FB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LENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkEvREYsVUFBVTs7OztnQkE3Q0gsZUFBZTtnQkF5RFUsZUFBZTs7SUFvRGhELHdCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0EvRFksaUJBQWlCO0FBaUU5Qjs7R0FFRztBQUNIO0lBT0UsNEJBQVksUUFBeUI7UUFXckMsYUFBUSxHQUFHLFVBQUMsSUFBcUIsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDO1FBRWpELGlCQUFZLEdBQUcsVUFBQyxJQUFxQixJQUFLLE9BQUEsSUFBSSxDQUFDLFVBQVUsRUFBZixDQUFlLENBQUM7UUFFMUQsYUFBUSxHQUFHLFVBQUMsQ0FBUyxFQUFFLFNBQTBCLElBQUssT0FBQSxTQUFTLENBQUMsVUFBVSxFQUFwQixDQUFvQixDQUFDO1FBZHpFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsMnlCQUF3QztvQkFFeEMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDOztpQkFDN0I7Ozs7Z0JBRXVCLGVBQWU7O0lBZ0J2Qyx5QkFBQztDQUFBLEFBdkJELElBdUJDO1NBakJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvblZpZXdlciwgU2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogc3RyaW5nLCBwdWJsaWMgbGV2ZWwgPSAxLCBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgICAgICAgICAgICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2UpIHt9XG59XG5cbi8qKlxuICogRGF0YWJhc2UgZm9yIGR5bmFtaWMgZGF0YS4gV2hlbiBleHBhbmRpbmcgYSBub2RlIGluIHRoZSB0cmVlLCB0aGUgZGF0YSBzb3VyY2Ugd2lsbCBuZWVkIHRvIGZldGNoXG4gKiB0aGUgZGVzY2VuZGFudHMgZGF0YSBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhYmFzZSB7XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZSddXVxuICBdKTtcblxuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ0ZydWl0cycsICdWZWdldGFibGVzJ107XG5cbiAgLyoqIEluaXRpYWwgZGF0YSBmcm9tIGRhdGFiYXNlICovXG4gIGluaXRpYWxEYXRhKCk6IER5bmFtaWNGbGF0Tm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5yb290TGV2ZWxOb2Rlcy5tYXAobmFtZSA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIDAsIHRydWUpKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuKG5vZGU6IHN0cmluZyk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChub2RlKTtcbiAgfVxuXG4gIGlzRXhwYW5kYWJsZShub2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmhhcyhub2RlKTtcbiAgfVxufVxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0RhdGFTb3VyY2Uge1xuXG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PER5bmFtaWNGbGF0Tm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogRHluYW1pY0ZsYXROb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG4gIHNldCBkYXRhKHZhbHVlOiBEeW5hbWljRmxhdE5vZGVbXSkge1xuICAgIHRoaXMuX3RyZWVDb250cm9sLmRhdGFOb2RlcyA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge31cblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPER5bmFtaWNGbGF0Tm9kZVtdPiB7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwub25DaGFuZ2Uuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICBpZiAoKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikuYWRkZWQgfHxcbiAgICAgICAgKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikucmVtb3ZlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVRyZWVDb250cm9sKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVyZ2UoY29sbGVjdGlvblZpZXdlci52aWV3Q2hhbmdlLCB0aGlzLmRhdGFDaGFuZ2UpLnBpcGUobWFwKCgpID0+IHRoaXMuZGF0YSkpO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBleHBhbmQvY29sbGFwc2UgYmVoYXZpb3JzICovXG4gIGhhbmRsZVRyZWVDb250cm9sKGNoYW5nZTogU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pIHtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBjaGFuZ2UuYWRkZWQuZm9yRWFjaChub2RlID0+IHRoaXMudG9nZ2xlTm9kZShub2RlLCB0cnVlKSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgY2hhbmdlLnJlbW92ZWQuc2xpY2UoKS5yZXZlcnNlKCkuZm9yRWFjaChub2RlID0+IHRoaXMudG9nZ2xlTm9kZShub2RlLCBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIG5vZGUsIHJlbW92ZSBmcm9tIGRpc3BsYXkgbGlzdFxuICAgKi9cbiAgdG9nZ2xlTm9kZShub2RlOiBEeW5hbWljRmxhdE5vZGUsIGV4cGFuZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZGF0YWJhc2UuZ2V0Q2hpbGRyZW4obm9kZS5pdGVtKTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5pbmRleE9mKG5vZGUpO1xuICAgIGlmICghY2hpbGRyZW4gfHwgaW5kZXggPCAwKSB7IC8vIElmIG5vIGNoaWxkcmVuLCBvciBjYW5ub3QgZmluZCB0aGUgbm9kZSwgbm8gb3BcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbi5tYXAobmFtZSA9PlxuICAgICAgICAgIG5ldyBEeW5hbWljRmxhdE5vZGUobmFtZSwgbm9kZS5sZXZlbCArIDEsIHRoaXMuX2RhdGFiYXNlLmlzRXhwYW5kYWJsZShuYW1lKSkpO1xuICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgMCwgLi4ubm9kZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IHRoaXMuZGF0YS5sZW5ndGhcbiAgICAgICAgICAmJiB0aGlzLmRhdGFbaV0ubGV2ZWwgPiBub2RlLmxldmVsOyBpKyssIGNvdW50KyspIHt9XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCBjb3VudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdGlmeSB0aGUgY2hhbmdlXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICAgICAgbm9kZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZHluYW1pYyBkYXRhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtZHluYW1pYy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtEeW5hbWljRGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVEeW5hbWljRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBEeW5hbWljRGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRHluYW1pY0RhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgZGF0YWJhc2UpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhYmFzZS5pbml0aWFsRGF0YSgpO1xuICB9XG5cbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+O1xuXG4gIGRhdGFTb3VyY2U6IER5bmFtaWNEYXRhU291cmNlO1xuXG4gIGdldExldmVsID0gKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogRHluYW1pY0ZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IER5bmFtaWNGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG59XG4iXX0=