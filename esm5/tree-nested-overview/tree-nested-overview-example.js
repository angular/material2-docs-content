import * as tslib_1 from "tslib";
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());
export { FileNode };
/**
 * The Json tree data in string. The data could be parsed into Json object
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
 * @title Tree with nested nodes
 */
var TreeNestedOverviewExample = /** @class */ (function () {
    function TreeNestedOverviewExample(database) {
        var _this = this;
        this.hasNestedChild = function (_, nodeData) { return !nodeData.type; };
        this._getChildren = function (node) { return node.children; };
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    TreeNestedOverviewExample = tslib_1.__decorate([
        Component({
            selector: 'tree-nested-overview-example',
            template: "<mat-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\" class=\"example-tree\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n    <li class=\"mat-tree-node\">\n      <button mat-icon-button disabled></button>\n      {{node.filename}}:  {{node.type}}\n    </li>\n  </mat-tree-node>\n\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasNestedChild\">\n    <li>\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'toggle ' + node.filename\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.filename}}\n      </div>\n      <ul [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </ul>\n    </li>\n  </mat-nested-tree-node>\n</mat-tree>\n",
            providers: [FileDatabase],
            styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [FileDatabase])
    ], TreeNestedOverviewExample);
    return TreeNestedOverviewExample;
}());
export { TreeNestedOverviewExample };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90cmVlLW5lc3RlZC1vdmVydmlldy90cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXJDOztHQUVHO0FBQ0g7SUFBQTtJQUlBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQ7O0dBRUc7QUFDSCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9CLFlBQVksRUFBRTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEtBQUs7UUFDYixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRTtZQUNQLEdBQUcsRUFBRTtnQkFDSCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsSUFBSTthQUNYO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxHQUFHLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLE1BQU07S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixxQkFBcUIs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Y0M7U0FkWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05lc3RlZFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVOZXN0ZWREYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBKc29uIG5vZGUgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuIEVhY2ggbm9kZSBoYXMgYSBmaWxlbmFtZSBhbmQgYSB2YWx1ZSBvciBhIGxpc3Qgb2YgY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVOb2RlIHtcbiAgY2hpbGRyZW46IEZpbGVOb2RlW107XG4gIGZpbGVuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IGFueTtcbn1cblxuLyoqXG4gKiBUaGUgSnNvbiB0cmVlIGRhdGEgaW4gc3RyaW5nLiBUaGUgZGF0YSBjb3VsZCBiZSBwYXJzZWQgaW50byBKc29uIG9iamVjdFxuICovXG5jb25zdCBUUkVFX0RBVEEgPSBKU09OLnN0cmluZ2lmeSh7XG4gIEFwcGxpY2F0aW9uczoge1xuICAgIENhbGVuZGFyOiAnYXBwJyxcbiAgICBDaHJvbWU6ICdhcHAnLFxuICAgIFdlYnN0b3JtOiAnYXBwJ1xuICB9LFxuICBEb2N1bWVudHM6IHtcbiAgICBhbmd1bGFyOiB7XG4gICAgICBzcmM6IHtcbiAgICAgICAgY29tcGlsZXI6ICd0cycsXG4gICAgICAgIGNvcmU6ICd0cydcbiAgICAgIH1cbiAgICB9LFxuICAgIG1hdGVyaWFsMjoge1xuICAgICAgc3JjOiB7XG4gICAgICAgIGJ1dHRvbjogJ3RzJyxcbiAgICAgICAgY2hlY2tib3g6ICd0cycsXG4gICAgICAgIGlucHV0OiAndHMnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBEb3dubG9hZHM6IHtcbiAgICBPY3RvYmVyOiAncGRmJyxcbiAgICBOb3ZlbWJlcjogJ3BkZicsXG4gICAgVHV0b3JpYWw6ICdodG1sJ1xuICB9LFxuICBQaWN0dXJlczoge1xuICAgICdQaG90byBCb290aCBMaWJyYXJ5Jzoge1xuICAgICAgQ29udGVudHM6ICdkaXInLFxuICAgICAgUGljdHVyZXM6ICdkaXInXG4gICAgfSxcbiAgICBTdW46ICdwbmcnLFxuICAgIFdvb2RzOiAnanBnJ1xuICB9XG59KTtcblxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZURhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsZU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IEZpbGVOb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIC8vIFBhcnNlIHRoZSBzdHJpbmcgdG8ganNvbiBvYmplY3QuXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoVFJFRV9EQVRBKTtcblxuICAgIC8vIEJ1aWxkIHRoZSB0cmVlIG5vZGVzIGZyb20gSnNvbiBvYmplY3QuIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAgICAvLyAgICAgZmlsZSBub2RlIGFzIGNoaWxkcmVuLlxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmJ1aWxkRmlsZVRyZWUoZGF0YU9iamVjdCwgMCk7XG5cbiAgICAvLyBOb3RpZnkgdGhlIGNoYW5nZS5cbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZS4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYEZpbGVOb2RlYC5cbiAgICovXG4gIGJ1aWxkRmlsZVRyZWUob2JqOiB7W2tleTogc3RyaW5nXTogYW55fSwgbGV2ZWw6IG51bWJlcik6IEZpbGVOb2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxGaWxlTm9kZVtdPigoYWNjdW11bGF0b3IsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgRmlsZU5vZGUoKTtcbiAgICAgIG5vZGUuZmlsZW5hbWUgPSBrZXk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRGaWxlVHJlZSh2YWx1ZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KG5vZGUpO1xuICAgIH0sIFtdKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggbmVzdGVkIG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtGaWxlRGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUge1xuICBuZXN0ZWRUcmVlQ29udHJvbDogTmVzdGVkVHJlZUNvbnRyb2w8RmlsZU5vZGU+O1xuICBuZXN0ZWREYXRhU291cmNlOiBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxGaWxlTm9kZT47XG5cbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IEZpbGVEYXRhYmFzZSkge1xuICAgIHRoaXMubmVzdGVkVHJlZUNvbnRyb2wgPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8RmlsZU5vZGU+KHRoaXMuX2dldENoaWxkcmVuKTtcbiAgICB0aGlzLm5lc3RlZERhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2UoKTtcblxuICAgIGRhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5uZXN0ZWREYXRhU291cmNlLmRhdGEgPSBkYXRhKTtcbiAgfVxuXG4gIGhhc05lc3RlZENoaWxkID0gKF86IG51bWJlciwgbm9kZURhdGE6IEZpbGVOb2RlKSA9PiAhbm9kZURhdGEudHlwZTtcblxuICBwcml2YXRlIF9nZXRDaGlsZHJlbiA9IChub2RlOiBGaWxlTm9kZSkgPT4gbm9kZS5jaGlsZHJlbjtcbn1cbiJdfQ==