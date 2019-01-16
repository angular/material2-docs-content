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
var CdkTreeFlatExample = /** @class */ (function () {
    function CdkTreeFlatExample(database) {
        var _this = this;
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.transformer = function (node, level) {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return observableOf(node.children); };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    CdkTreeFlatExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-tree-flat-example',
            template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding class=\"example-tree-node\">\n    <button mat-icon-button disabled></button>\n    {{node.filename}}:  {{node.type}}\n  </cdk-tree-node>\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}}:  {{node.type}}\n  </cdk-tree-node>\n</cdk-tree>\n",
            providers: [FileDatabase],
            styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [FileDatabase])
    ], CdkTreeFlatExample);
    return CdkTreeFlatExample;
}());
export { CdkTreeFlatExample };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay10cmVlLWZsYXQvY2RrLXRyZWUtZmxhdC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXJFOzs7R0FHRztBQUNIO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUVELHNEQUFzRDtBQUN0RDtJQUNFLHNCQUNTLFVBQW1CLEVBQVMsUUFBZ0IsRUFBUyxLQUFhLEVBQVMsSUFBUztRQUFwRixlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUcsQ0FBQztJQUNuRyxtQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEOztHQUVHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMvQixZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxLQUFLO1FBQ2IsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUU7WUFDUCxHQUFHLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDWDtT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SUFBSyxPQUFBLElBQUksQ0FBQyxVQUFVLEVBQWYsQ0FBZSxDQUFDO1FBRXhELGlCQUFZLEdBQUcsVUFBQyxJQUFjLElBQTZCLE9BQUEsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztRQXBCN0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDeEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEYsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFkVSxrQkFBa0I7UUFOOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxpdEJBQXlDO1lBRXpDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQzs7U0FDMUIsQ0FBQztpREFNc0IsWUFBWTtPQUx2QixrQkFBa0IsQ0EyQjlCO0lBQUQseUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZn0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogRmlsZSBub2RlIGRhdGEgd2l0aCBuZXN0ZWQgc3RydWN0dXJlLlxuICogRWFjaCBub2RlIGhhcyBhIGZpbGVuYW1lLCBhbmQgYSB0eXBlIG9yIGEgbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVOb2RlIHtcbiAgY2hpbGRyZW46IEZpbGVOb2RlW107XG4gIGZpbGVuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IGFueTtcbn1cblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgRmlsZUZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGV4cGFuZGFibGU6IGJvb2xlYW4sIHB1YmxpYyBmaWxlbmFtZTogc3RyaW5nLCBwdWJsaWMgbGV2ZWw6IG51bWJlciwgcHVibGljIHR5cGU6IGFueSkge31cbn1cblxuLyoqXG4gKiBUaGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZSBkYXRhIGluIHN0cmluZy4gVGhlIGRhdGEgY291bGQgYmUgcGFyc2VkIGludG8gYSBKc29uIG9iamVjdFxuICovXG5jb25zdCBUUkVFX0RBVEEgPSBKU09OLnN0cmluZ2lmeSh7XG4gIEFwcGxpY2F0aW9uczoge1xuICAgIENhbGVuZGFyOiAnYXBwJyxcbiAgICBDaHJvbWU6ICdhcHAnLFxuICAgIFdlYnN0b3JtOiAnYXBwJ1xuICB9LFxuICBEb2N1bWVudHM6IHtcbiAgICBhbmd1bGFyOiB7XG4gICAgICBzcmM6IHtcbiAgICAgICAgY29tcGlsZXI6ICd0cycsXG4gICAgICAgIGNvcmU6ICd0cydcbiAgICAgIH1cbiAgICB9LFxuICAgIG1hdGVyaWFsMjoge1xuICAgICAgc3JjOiB7XG4gICAgICAgIGJ1dHRvbjogJ3RzJyxcbiAgICAgICAgY2hlY2tib3g6ICd0cycsXG4gICAgICAgIGlucHV0OiAndHMnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBEb3dubG9hZHM6IHtcbiAgICBPY3RvYmVyOiAncGRmJyxcbiAgICBOb3ZlbWJlcjogJ3BkZicsXG4gICAgVHV0b3JpYWw6ICdodG1sJ1xuICB9LFxuICBQaWN0dXJlczoge1xuICAgICdQaG90byBCb290aCBMaWJyYXJ5Jzoge1xuICAgICAgQ29udGVudHM6ICdkaXInLFxuICAgICAgUGljdHVyZXM6ICdkaXInXG4gICAgfSxcbiAgICBTdW46ICdwbmcnLFxuICAgIFdvb2RzOiAnanBnJ1xuICB9XG59KTtcblxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZURhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsZU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IEZpbGVOb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIC8vIFBhcnNlIHRoZSBzdHJpbmcgdG8ganNvbiBvYmplY3QuXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoVFJFRV9EQVRBKTtcblxuICAgIC8vIEJ1aWxkIHRoZSB0cmVlIG5vZGVzIGZyb20gSnNvbiBvYmplY3QuIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAgICAvLyAgICAgZmlsZSBub2RlIGFzIGNoaWxkcmVuLlxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmJ1aWxkRmlsZVRyZWUoZGF0YU9iamVjdCwgMCk7XG5cbiAgICAvLyBOb3RpZnkgdGhlIGNoYW5nZS5cbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZS4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYEZpbGVOb2RlYC5cbiAgICovXG4gIGJ1aWxkRmlsZVRyZWUob2JqOiB7W2tleTogc3RyaW5nXTogYW55fSwgbGV2ZWw6IG51bWJlcik6IEZpbGVOb2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxGaWxlTm9kZVtdPigoYWNjdW11bGF0b3IsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgRmlsZU5vZGUoKTtcbiAgICAgIG5vZGUuZmlsZW5hbWUgPSBrZXk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRGaWxlVHJlZSh2YWx1ZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KG5vZGUpO1xuICAgIH0sIFtdKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZmxhdCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZS1mbGF0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10cmVlLWZsYXQtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRmlsZURhdGFiYXNlXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlRmxhdEV4YW1wbGUge1xuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPEZpbGVGbGF0Tm9kZT47XG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8RmlsZU5vZGUsIEZpbGVGbGF0Tm9kZT47XG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxGaWxlTm9kZSwgRmlsZUZsYXROb2RlPjtcblxuICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRmlsZURhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIodGhpcy50cmFuc2Zvcm1lciwgdGhpcy5fZ2V0TGV2ZWwsXG4gICAgICB0aGlzLl9pc0V4cGFuZGFibGUsIHRoaXMuX2dldENoaWxkcmVuKTtcbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxGaWxlRmxhdE5vZGU+KHRoaXMuX2dldExldmVsLCB0aGlzLl9pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICAgIGRhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IEZpbGVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgdHJhbnNmb3JtZXIgPSAobm9kZTogRmlsZU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gbmV3IEZpbGVGbGF0Tm9kZSghIW5vZGUuY2hpbGRyZW4sIG5vZGUuZmlsZW5hbWUsIGxldmVsLCBub2RlLnR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TGV2ZWwgPSAobm9kZTogRmlsZUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIHByaXZhdGUgX2lzRXhwYW5kYWJsZSA9IChub2RlOiBGaWxlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBwcml2YXRlIF9nZXRDaGlsZHJlbiA9IChub2RlOiBGaWxlTm9kZSk6IE9ic2VydmFibGU8RmlsZU5vZGVbXT4gPT4gb2JzZXJ2YWJsZU9mKG5vZGUuY2hpbGRyZW4pO1xufVxuIl19