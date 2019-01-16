import * as tslib_1 from "tslib";
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());
export { FileNode };
/** Flat node with expandable and level information */
var FileFlatNode = /** @class */ (function () {
    function FileFlatNode(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
    return FileFlatNode;
}());
export { FileFlatNode };
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var TREE_DATA = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());
export { FileDatabase };
/**
 * @title Tree with flat nodes
 */
var TreeFlatOverviewExample = /** @class */ (function () {
    function TreeFlatOverviewExample(database) {
        var _this = this;
        this.transformer = function (node, level) {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return observableOf(node.children); };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) { return _this.dataSource.data = data; });
    }
    TreeFlatOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'tree-flat-overview-example',
            template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n</mat-tree>\n",
            providers: [FileDatabase],
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [FileDatabase])
    ], TreeFlatOverviewExample);
    return TreeFlatOverviewExample;
}());
export { TreeFlatOverviewExample };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdHJlZS1mbGF0LW92ZXJ2aWV3L3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXJFOzs7R0FHRztBQUNIO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUVELHNEQUFzRDtBQUN0RDtJQUNFLHNCQUNTLFVBQW1CLEVBQVMsUUFBZ0IsRUFBUyxLQUFhLEVBQVMsSUFBUztRQUFwRixlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUcsQ0FBQztJQUNuRyxtQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEOztHQUVHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMvQixZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxLQUFLO1FBQ2IsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUU7WUFDUCxHQUFHLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxF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QWMsSUFBNkIsT0FBQSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUEzQixDQUEyQixDQUFDO1FBRS9GLGFBQVEsR0FBRyxVQUFDLENBQVMsRUFBRSxTQUF1QixJQUFLLE9BQUEsU0FBUyxDQUFDLFVBQVUsRUFBcEIsQ0FBb0IsQ0FBQztRQWxCdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDeEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEYsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBWlUsdUJBQXVCO1FBTm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMseXJCQUE4QztZQUU5QyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7O1NBQzFCLENBQUM7aURBTXNCLFlBQVk7T0FMdkIsdUJBQXVCLENBeUJuQztJQUFELDhCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2Z9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEZpbGUgbm9kZSBkYXRhIHdpdGggbmVzdGVkIHN0cnVjdHVyZS5cbiAqIEVhY2ggbm9kZSBoYXMgYSBmaWxlbmFtZSwgYW5kIGEgdHlwZSBvciBhIGxpc3Qgb2YgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlTm9kZSB7XG4gIGNoaWxkcmVuOiBGaWxlTm9kZVtdO1xuICBmaWxlbmFtZTogc3RyaW5nO1xuICB0eXBlOiBhbnk7XG59XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVGbGF0Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBleHBhbmRhYmxlOiBib29sZWFuLCBwdWJsaWMgZmlsZW5hbWU6IHN0cmluZywgcHVibGljIGxldmVsOiBudW1iZXIsIHB1YmxpYyB0eXBlOiBhbnkpIHt9XG59XG5cbi8qKlxuICogVGhlIGZpbGUgc3RydWN0dXJlIHRyZWUgZGF0YSBpbiBzdHJpbmcuIFRoZSBkYXRhIGNvdWxkIGJlIHBhcnNlZCBpbnRvIGEgSnNvbiBvYmplY3RcbiAqL1xuY29uc3QgVFJFRV9EQVRBID0gSlNPTi5zdHJpbmdpZnkoe1xuICBBcHBsaWNhdGlvbnM6IHtcbiAgICBDYWxlbmRhcjogJ2FwcCcsXG4gICAgQ2hyb21lOiAnYXBwJyxcbiAgICBXZWJzdG9ybTogJ2FwcCdcbiAgfSxcbiAgRG9jdW1lbnRzOiB7XG4gICAgYW5ndWxhcjoge1xuICAgICAgc3JjOiB7XG4gICAgICAgIGNvbXBpbGVyOiAndHMnLFxuICAgICAgICBjb3JlOiAndHMnXG4gICAgICB9XG4gICAgfSxcbiAgICBtYXRlcmlhbDI6IHtcbiAgICAgIHNyYzoge1xuICAgICAgICBidXR0b246ICd0cycsXG4gICAgICAgIGNoZWNrYm94OiAndHMnLFxuICAgICAgICBpbnB1dDogJ3RzJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgRG93bmxvYWRzOiB7XG4gICAgT2N0b2JlcjogJ3BkZicsXG4gICAgTm92ZW1iZXI6ICdwZGYnLFxuICAgIFR1dG9yaWFsOiAnaHRtbCdcbiAgfSxcbiAgUGljdHVyZXM6IHtcbiAgICAnUGhvdG8gQm9vdGggTGlicmFyeSc6IHtcbiAgICAgIENvbnRlbnRzOiAnZGlyJyxcbiAgICAgIFBpY3R1cmVzOiAnZGlyJ1xuICAgIH0sXG4gICAgU3VuOiAncG5nJyxcbiAgICBXb29kczogJ2pwZydcbiAgfVxufSk7XG5cbi8qKlxuICogRmlsZSBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0IGZyb20gc3RyaW5nLlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSBmaWxlIG9yIGEgZGlyZWN0b3J5LiBGb3IgYSBmaWxlLCBpdCBoYXMgZmlsZW5hbWUgYW5kIHR5cGUuXG4gKiBGb3IgYSBkaXJlY3RvcnksIGl0IGhhcyBmaWxlbmFtZSBhbmQgY2hpbGRyZW4gKGEgbGlzdCBvZiBmaWxlcyBvciBkaXJlY3RvcmllcykuXG4gKiBUaGUgaW5wdXQgd2lsbCBiZSBhIGpzb24gb2JqZWN0IHN0cmluZywgYW5kIHRoZSBvdXRwdXQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAqIHN0cnVjdHVyZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVEYXRhYmFzZSB7XG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZpbGVOb2RlW10+KFtdKTtcblxuICBnZXQgZGF0YSgpOiBGaWxlTm9kZVtdIHsgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBQYXJzZSB0aGUgc3RyaW5nIHRvIGpzb24gb2JqZWN0LlxuICAgIGNvbnN0IGRhdGFPYmplY3QgPSBKU09OLnBhcnNlKFRSRUVfREFUQSk7XG5cbiAgICAvLyBCdWlsZCB0aGUgdHJlZSBub2RlcyBmcm9tIEpzb24gb2JqZWN0LiBUaGUgcmVzdWx0IGlzIGEgbGlzdCBvZiBgRmlsZU5vZGVgIHdpdGggbmVzdGVkXG4gICAgLy8gICAgIGZpbGUgbm9kZSBhcyBjaGlsZHJlbi5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5idWlsZEZpbGVUcmVlKGRhdGFPYmplY3QsIDApO1xuXG4gICAgLy8gTm90aWZ5IHRoZSBjaGFuZ2UuXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbGUgc3RydWN0dXJlIHRyZWUuIFRoZSBgdmFsdWVgIGlzIHRoZSBKc29uIG9iamVjdCwgb3IgYSBzdWItdHJlZSBvZiBhIEpzb24gb2JqZWN0LlxuICAgKiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBsaXN0IG9mIGBGaWxlTm9kZWAuXG4gICAqL1xuICBidWlsZEZpbGVUcmVlKG9iajoge1trZXk6IHN0cmluZ106IGFueX0sIGxldmVsOiBudW1iZXIpOiBGaWxlTm9kZVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2U8RmlsZU5vZGVbXT4oKGFjY3VtdWxhdG9yLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBjb25zdCBub2RlID0gbmV3IEZpbGVOb2RlKCk7XG4gICAgICBub2RlLmZpbGVuYW1lID0ga2V5O1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLmJ1aWxkRmlsZVRyZWUodmFsdWUsIGxldmVsICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS50eXBlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yLmNvbmNhdChub2RlKTtcbiAgICB9LCBbXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGZsYXQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0ZpbGVEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUZsYXRPdmVydmlld0V4YW1wbGUge1xuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPEZpbGVGbGF0Tm9kZT47XG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8RmlsZU5vZGUsIEZpbGVGbGF0Tm9kZT47XG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxGaWxlTm9kZSwgRmlsZUZsYXROb2RlPjtcblxuICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRmlsZURhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5fZ2V0TGV2ZWwsXG4gICAgICB0aGlzLl9pc0V4cGFuZGFibGUsIHRoaXMuX2dldENoaWxkcmVuKTtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxGaWxlRmxhdE5vZGU+KHRoaXMuX2dldExldmVsLCB0aGlzLl9pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICAgIGRhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhKTtcbiAgfVxuXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IEZpbGVOb2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBGaWxlRmxhdE5vZGUoISFub2RlLmNoaWxkcmVuLCBub2RlLmZpbGVuYW1lLCBsZXZlbCwgbm9kZS50eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExldmVsID0gKG5vZGU6IEZpbGVGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBwcml2YXRlIF9pc0V4cGFuZGFibGUgPSAobm9kZTogRmlsZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgcHJpdmF0ZSBfZ2V0Q2hpbGRyZW4gPSAobm9kZTogRmlsZU5vZGUpOiBPYnNlcnZhYmxlPEZpbGVOb2RlW10+ID0+IG9ic2VydmFibGVPZihub2RlLmNoaWxkcmVuKTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogRmlsZUZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcbn1cbiJdfQ==