/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
}
if (false) {
    /** @type {?} */
    FileNode.prototype.children;
    /** @type {?} */
    FileNode.prototype.filename;
    /** @type {?} */
    FileNode.prototype.type;
}
/**
 * Flat node with expandable and level information
 */
export class FileFlatNode {
    /**
     * @param {?} expandable
     * @param {?} filename
     * @param {?} level
     * @param {?} type
     */
    constructor(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
}
if (false) {
    /** @type {?} */
    FileFlatNode.prototype.expandable;
    /** @type {?} */
    FileFlatNode.prototype.filename;
    /** @type {?} */
    FileFlatNode.prototype.level;
    /** @type {?} */
    FileFlatNode.prototype.type;
}
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 * @type {?}
 */
const TREE_DATA = JSON.stringify({
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
export class FileDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * @return {?}
     */
    initialize() {
        // Parse the string to json object.
        /** @type {?} */
        const dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        /** @type {?} */
        const data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     * @param {?} obj
     * @param {?} level
     * @return {?}
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            /** @type {?} */
            const value = obj[key];
            /** @type {?} */
            const node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
}
FileDatabase.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FileDatabase.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FileDatabase.prototype.dataChange;
}
/**
 * \@title Tree with flat nodes
 */
export class TreeFlatOverviewExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.transformer = (node, level) => {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel = (node) => node.level;
        this._isExpandable = (node) => node.expandable;
        this._getChildren = (node) => observableOf(node.children);
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => this.dataSource.data = data);
    }
}
TreeFlatOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-flat-overview-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n</mat-tree>\n",
                providers: [FileDatabase],
                styles: [""]
            }] }
];
/** @nocollapse */
TreeFlatOverviewExample.ctorParameters = () => [
    { type: FileDatabase }
];
if (false) {
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeFlattener;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.transformer;
    /**
     * @type {?}
     * @private
     */
    TreeFlatOverviewExample.prototype._getLevel;
    /**
     * @type {?}
     * @private
     */
    TreeFlatOverviewExample.prototype._isExpandable;
    /**
     * @type {?}
     * @private
     */
    TreeFlatOverviewExample.prototype._getChildren;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdHJlZS1mbGF0LW92ZXJ2aWV3L3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7OztBQU1yRSxNQUFNLE9BQU8sUUFBUTtDQUlwQjs7O0lBSEMsNEJBQXFCOztJQUNyQiw0QkFBaUI7O0lBQ2pCLHdCQUFVOzs7OztBQUlaLE1BQU0sT0FBTyxZQUFZOzs7Ozs7O0lBQ3ZCLFlBQ1MsVUFBbUIsRUFBUyxRQUFnQixFQUFTLEtBQWEsRUFBUyxJQUFTO1FBQXBGLGVBQVUsR0FBVixVQUFVLENBQVM7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQUs7SUFBRyxDQUFDO0NBQ2xHOzs7SUFERyxrQ0FBMEI7O0lBQUUsZ0NBQXVCOztJQUFFLDZCQUFvQjs7SUFBRSw0QkFBZ0I7Ozs7OztNQU16RixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMvQixZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxLQUFLO1FBQ2IsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUU7WUFDUCxHQUFHLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLEtBQUs7UUFDZCxRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxNQUFNO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IscUJBQXFCLEVBQUU7WUFDckIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztTQUNoQjtRQUNELEdBQUcsRUFBRSxLQUFLO1FBQ1YsS0FBSyxFQUFFLEtBQUs7S0FDYjtDQUNGLENBQUM7Ozs7Ozs7O0FBVUYsTUFBTSxPQUFPLFlBQVk7SUFLdkI7UUFKQSxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7UUFLL0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFKRCxJQUFJLElBQUksS0FBaUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7SUFNeEQsVUFBVTs7O2NBRUYsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOzs7O2NBSWxDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFOUMscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7O0lBTUQsYUFBYSxDQUFDLEdBQXlCLEVBQUUsS0FBYTtRQUNwRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFhLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFOztrQkFDeEQsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7O2tCQUNoQixJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFFcEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNqQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2lCQUNuQjthQUNGO1lBRUQsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7OztZQTFDRixVQUFVOzs7Ozs7SUFFVCxrQ0FBaUQ7Ozs7O0FBb0RuRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBS2xDLFlBQVksUUFBc0I7UUFTbEMsZ0JBQVcsR0FBRyxDQUFDLElBQWMsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUM5QyxPQUFPLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUE7UUFFTyxjQUFTLEdBQUcsQ0FBQyxJQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRS9DLGtCQUFhLEdBQUcsQ0FBQyxJQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXhELGlCQUFZLEdBQUcsQ0FBQyxJQUFjLEVBQTBCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9GLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxTQUF1QixFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBbEJ0RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUN4RSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFlLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRixRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMseXJCQUE4QztnQkFFOUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDOzthQUMxQjs7OztZQU11QixZQUFZOzs7O0lBSmxDLDhDQUEyQzs7SUFDM0MsZ0RBQXdEOztJQUN4RCw2Q0FBMEQ7O0lBVzFELDhDQUVDOzs7OztJQUVELDRDQUF1RDs7Ozs7SUFFdkQsZ0RBQWdFOzs7OztJQUVoRSwrQ0FBK0Y7O0lBRS9GLDJDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBGaWxlIG5vZGUgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuXG4gKiBFYWNoIG5vZGUgaGFzIGEgZmlsZW5hbWUsIGFuZCBhIHR5cGUgb3IgYSBsaXN0IG9mIGNoaWxkcmVuLlxuICovXG5leHBvcnQgY2xhc3MgRmlsZU5vZGUge1xuICBjaGlsZHJlbjogRmlsZU5vZGVbXTtcbiAgZmlsZW5hbWU6IHN0cmluZztcbiAgdHlwZTogYW55O1xufVxuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBGaWxlRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZXhwYW5kYWJsZTogYm9vbGVhbiwgcHVibGljIGZpbGVuYW1lOiBzdHJpbmcsIHB1YmxpYyBsZXZlbDogbnVtYmVyLCBwdWJsaWMgdHlwZTogYW55KSB7fVxufVxuXG4vKipcbiAqIFRoZSBmaWxlIHN0cnVjdHVyZSB0cmVlIGRhdGEgaW4gc3RyaW5nLiBUaGUgZGF0YSBjb3VsZCBiZSBwYXJzZWQgaW50byBhIEpzb24gb2JqZWN0XG4gKi9cbmNvbnN0IFRSRUVfREFUQSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgQXBwbGljYXRpb25zOiB7XG4gICAgQ2FsZW5kYXI6ICdhcHAnLFxuICAgIENocm9tZTogJ2FwcCcsXG4gICAgV2Vic3Rvcm06ICdhcHAnXG4gIH0sXG4gIERvY3VtZW50czoge1xuICAgIGFuZ3VsYXI6IHtcbiAgICAgIHNyYzoge1xuICAgICAgICBjb21waWxlcjogJ3RzJyxcbiAgICAgICAgY29yZTogJ3RzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbWF0ZXJpYWwyOiB7XG4gICAgICBzcmM6IHtcbiAgICAgICAgYnV0dG9uOiAndHMnLFxuICAgICAgICBjaGVja2JveDogJ3RzJyxcbiAgICAgICAgaW5wdXQ6ICd0cydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIERvd25sb2Fkczoge1xuICAgIE9jdG9iZXI6ICdwZGYnLFxuICAgIE5vdmVtYmVyOiAncGRmJyxcbiAgICBUdXRvcmlhbDogJ2h0bWwnXG4gIH0sXG4gIFBpY3R1cmVzOiB7XG4gICAgJ1Bob3RvIEJvb3RoIExpYnJhcnknOiB7XG4gICAgICBDb250ZW50czogJ2RpcicsXG4gICAgICBQaWN0dXJlczogJ2RpcidcbiAgICB9LFxuICAgIFN1bjogJ3BuZycsXG4gICAgV29vZHM6ICdqcGcnXG4gIH1cbn0pO1xuXG4vKipcbiAqIEZpbGUgZGF0YWJhc2UsIGl0IGNhbiBidWlsZCBhIHRyZWUgc3RydWN0dXJlZCBKc29uIG9iamVjdCBmcm9tIHN0cmluZy5cbiAqIEVhY2ggbm9kZSBpbiBKc29uIG9iamVjdCByZXByZXNlbnRzIGEgZmlsZSBvciBhIGRpcmVjdG9yeS4gRm9yIGEgZmlsZSwgaXQgaGFzIGZpbGVuYW1lIGFuZCB0eXBlLlxuICogRm9yIGEgZGlyZWN0b3J5LCBpdCBoYXMgZmlsZW5hbWUgYW5kIGNoaWxkcmVuIChhIGxpc3Qgb2YgZmlsZXMgb3IgZGlyZWN0b3JpZXMpLlxuICogVGhlIGlucHV0IHdpbGwgYmUgYSBqc29uIG9iamVjdCBzdHJpbmcsIGFuZCB0aGUgb3V0cHV0IGlzIGEgbGlzdCBvZiBgRmlsZU5vZGVgIHdpdGggbmVzdGVkXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlRGF0YWJhc2Uge1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWxlTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogRmlsZU5vZGVbXSB7IHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7IH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gUGFyc2UgdGhlIHN0cmluZyB0byBqc29uIG9iamVjdC5cbiAgICBjb25zdCBkYXRhT2JqZWN0ID0gSlNPTi5wYXJzZShUUkVFX0RBVEEpO1xuXG4gICAgLy8gQnVpbGQgdGhlIHRyZWUgbm9kZXMgZnJvbSBKc29uIG9iamVjdC4gVGhlIHJlc3VsdCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICAgIC8vICAgICBmaWxlIG5vZGUgYXMgY2hpbGRyZW4uXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRGaWxlVHJlZShkYXRhT2JqZWN0LCAwKTtcblxuICAgIC8vIE5vdGlmeSB0aGUgY2hhbmdlLlxuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWxlIHN0cnVjdHVyZSB0cmVlLiBUaGUgYHZhbHVlYCBpcyB0aGUgSnNvbiBvYmplY3QsIG9yIGEgc3ViLXRyZWUgb2YgYSBKc29uIG9iamVjdC5cbiAgICogVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgbGlzdCBvZiBgRmlsZU5vZGVgLlxuICAgKi9cbiAgYnVpbGRGaWxlVHJlZShvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsZXZlbDogbnVtYmVyKTogRmlsZU5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlPEZpbGVOb2RlW10+KChhY2N1bXVsYXRvciwga2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBGaWxlTm9kZSgpO1xuICAgICAgbm9kZS5maWxlbmFtZSA9IGtleTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuID0gdGhpcy5idWlsZEZpbGVUcmVlKHZhbHVlLCBsZXZlbCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUudHlwZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQobm9kZSk7XG4gICAgfSwgW10pO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBmbGF0IG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtGaWxlRGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVGbGF0T3ZlcnZpZXdFeGFtcGxlIHtcbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxGaWxlRmxhdE5vZGU+O1xuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPEZpbGVOb2RlLCBGaWxlRmxhdE5vZGU+O1xuICBkYXRhU291cmNlOiBNYXRUcmVlRmxhdERhdGFTb3VyY2U8RmlsZU5vZGUsIEZpbGVGbGF0Tm9kZT47XG5cbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IEZpbGVEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUZsYXR0ZW5lciA9IG5ldyBNYXRUcmVlRmxhdHRlbmVyKHRoaXMudHJhbnNmb3JtZXIsIHRoaXMuX2dldExldmVsLFxuICAgICAgdGhpcy5faXNFeHBhbmRhYmxlLCB0aGlzLl9nZXRDaGlsZHJlbik7XG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RmlsZUZsYXROb2RlPih0aGlzLl9nZXRMZXZlbCwgdGhpcy5faXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBkYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YSk7XG4gIH1cblxuICB0cmFuc2Zvcm1lciA9IChub2RlOiBGaWxlTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBuZXcgRmlsZUZsYXROb2RlKCEhbm9kZS5jaGlsZHJlbiwgbm9kZS5maWxlbmFtZSwgbGV2ZWwsIG5vZGUudHlwZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRMZXZlbCA9IChub2RlOiBGaWxlRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgcHJpdmF0ZSBfaXNFeHBhbmRhYmxlID0gKG5vZGU6IEZpbGVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIHByaXZhdGUgX2dldENoaWxkcmVuID0gKG5vZGU6IEZpbGVOb2RlKTogT2JzZXJ2YWJsZTxGaWxlTm9kZVtdPiA9PiBvYnNlcnZhYmxlT2Yobm9kZS5jaGlsZHJlbik7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBfbm9kZURhdGE6IEZpbGVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG59XG4iXX0=