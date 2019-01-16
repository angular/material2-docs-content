import * as tslib_1 from "tslib";
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
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
var CdkTreeNestedExample = /** @class */ (function () {
    function CdkTreeNestedExample(database) {
        var _this = this;
        this.hasNestedChild = function (_, nodeData) { return !nodeData.type; };
        this._getChildren = function (node) { return observableOf(node.children); };
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    CdkTreeNestedExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-tree-nested-example',
            template: "<cdk-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\">\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <button mat-icon-button disabled></button>\n    {{node.filename}}:  {{node.type}}\n  </cdk-nested-tree-node>\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasNestedChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}}:  {{node.type}}\n    <div [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n",
            providers: [FileDatabase],
            styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n.example-tree-node {\n  display: block;\n  padding-left: 40px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [FileDatabase])
    ], CdkTreeNestedExample);
    return CdkTreeNestedExample;
}());
export { CdkTreeNestedExample };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrLXRyZWUtbmVzdGVkL2Nkay10cmVlLW5lc3RlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekQ7O0dBRUc7QUFDSDtJQUFBO0lBSUEsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFFRDs7R0FFRztBQUNILElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0IsWUFBWSxFQUFFO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxFQUFFO2dCQUNILFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsTUFBTTtLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNSLHFC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QUFELDJCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXN0ZWRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgb2YgYXMgb2JzZXJ2YWJsZU9mfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBKc29uIG5vZGUgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuIEVhY2ggbm9kZSBoYXMgYSBmaWxlbmFtZSBhbmQgYSB2YWx1ZSBvciBhIGxpc3Qgb2YgY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVOb2RlIHtcbiAgY2hpbGRyZW46IEZpbGVOb2RlW107XG4gIGZpbGVuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IGFueTtcbn1cblxuLyoqXG4gKiBUaGUgSnNvbiB0cmVlIGRhdGEgaW4gc3RyaW5nLiBUaGUgZGF0YSBjb3VsZCBiZSBwYXJzZWQgaW50byBKc29uIG9iamVjdFxuICovXG5jb25zdCBUUkVFX0RBVEEgPSBKU09OLnN0cmluZ2lmeSh7XG4gIEFwcGxpY2F0aW9uczoge1xuICAgIENhbGVuZGFyOiAnYXBwJyxcbiAgICBDaHJvbWU6ICdhcHAnLFxuICAgIFdlYnN0b3JtOiAnYXBwJ1xuICB9LFxuICBEb2N1bWVudHM6IHtcbiAgICBhbmd1bGFyOiB7XG4gICAgICBzcmM6IHtcbiAgICAgICAgY29tcGlsZXI6ICd0cycsXG4gICAgICAgIGNvcmU6ICd0cydcbiAgICAgIH1cbiAgICB9LFxuICAgIG1hdGVyaWFsMjoge1xuICAgICAgc3JjOiB7XG4gICAgICAgIGJ1dHRvbjogJ3RzJyxcbiAgICAgICAgY2hlY2tib3g6ICd0cycsXG4gICAgICAgIGlucHV0OiAndHMnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBEb3dubG9hZHM6IHtcbiAgICBPY3RvYmVyOiAncGRmJyxcbiAgICBOb3ZlbWJlcjogJ3BkZicsXG4gICAgVHV0b3JpYWw6ICdodG1sJ1xuICB9LFxuICBQaWN0dXJlczoge1xuICAgICdQaG90byBCb290aCBMaWJyYXJ5Jzoge1xuICAgICAgQ29udGVudHM6ICdkaXInLFxuICAgICAgUGljdHVyZXM6ICdkaXInXG4gICAgfSxcbiAgICBTdW46ICdwbmcnLFxuICAgIFdvb2RzOiAnanBnJ1xuICB9XG59KTtcblxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZURhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsZU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IEZpbGVOb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIC8vIFBhcnNlIHRoZSBzdHJpbmcgdG8ganNvbiBvYmplY3QuXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoVFJFRV9EQVRBKTtcblxuICAgIC8vIEJ1aWxkIHRoZSB0cmVlIG5vZGVzIGZyb20gSnNvbiBvYmplY3QuIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAgICAvLyAgICAgZmlsZSBub2RlIGFzIGNoaWxkcmVuLlxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmJ1aWxkRmlsZVRyZWUoZGF0YU9iamVjdCwgMCk7XG5cbiAgICAvLyBOb3RpZnkgdGhlIGNoYW5nZS5cbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZS4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYEZpbGVOb2RlYC5cbiAgICovXG4gIGJ1aWxkRmlsZVRyZWUob2JqOiB7W2tleTogc3RyaW5nXTogYW55fSwgbGV2ZWw6IG51bWJlcik6IEZpbGVOb2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxGaWxlTm9kZVtdPigoYWNjdW11bGF0b3IsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgRmlsZU5vZGUoKTtcbiAgICAgIG5vZGUuZmlsZW5hbWUgPSBrZXk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRGaWxlVHJlZSh2YWx1ZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KG5vZGUpO1xuICAgIH0sIFtdKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggbmVzdGVkIG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtGaWxlRGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOZXN0ZWRFeGFtcGxlIHtcbiAgbmVzdGVkVHJlZUNvbnRyb2w6IE5lc3RlZFRyZWVDb250cm9sPEZpbGVOb2RlPjtcbiAgbmVzdGVkRGF0YVNvdXJjZTogTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8RmlsZU5vZGU+O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBGaWxlRGF0YWJhc2UpIHtcbiAgICB0aGlzLm5lc3RlZFRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPEZpbGVOb2RlPih0aGlzLl9nZXRDaGlsZHJlbik7XG4gICAgdGhpcy5uZXN0ZWREYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlKCk7XG5cbiAgICBkYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHRoaXMubmVzdGVkRGF0YVNvdXJjZS5kYXRhID0gZGF0YSk7XG4gIH1cblxuICBoYXNOZXN0ZWRDaGlsZCA9IChfOiBudW1iZXIsIG5vZGVEYXRhOiBGaWxlTm9kZSkgPT4gIW5vZGVEYXRhLnR5cGU7XG5cbiAgcHJpdmF0ZSBfZ2V0Q2hpbGRyZW4gPSAobm9kZTogRmlsZU5vZGUpID0+IG9ic2VydmFibGVPZihub2RlLmNoaWxkcmVuKTtcbn1cbiJdfQ==