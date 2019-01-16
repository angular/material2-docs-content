/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
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
 * The Json tree data in string. The data could be parsed into Json object
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
 * \@title Tree with nested nodes
 */
export class CdkTreeNestedExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.hasNestedChild = (_, nodeData) => !nodeData.type;
        this._getChildren = (node) => observableOf(node.children);
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(data => this.nestedDataSource.data = data);
    }
}
CdkTreeNestedExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-tree-nested-example',
                template: "<cdk-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\">\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <button mat-icon-button disabled></button>\n    {{node.filename}}:  {{node.type}}\n  </cdk-nested-tree-node>\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasNestedChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}}:  {{node.type}}\n    <div [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n",
                providers: [FileDatabase],
                styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n.example-tree-node {\n  display: block;\n  padding-left: 40px;\n}\n"]
            }] }
];
/** @nocollapse */
CdkTreeNestedExample.ctorParameters = () => [
    { type: FileDatabase }
];
if (false) {
    /** @type {?} */
    CdkTreeNestedExample.prototype.nestedTreeControl;
    /** @type {?} */
    CdkTreeNestedExample.prototype.nestedDataSource;
    /** @type {?} */
    CdkTreeNestedExample.prototype.hasNestedChild;
    /**
     * @type {?}
     * @private
     */
    CdkTreeNestedExample.prototype._getChildren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrLXRyZWUtbmVzdGVkL2Nkay10cmVlLW5lc3RlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFLekQsTUFBTSxPQUFPLFFBQVE7Q0FJcEI7OztJQUhDLDRCQUFxQjs7SUFDckIsNEJBQWlCOztJQUNqQix3QkFBVTs7Ozs7O01BTU4sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0IsWUFBWSxFQUFFO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztRQUNiLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxFQUFFO2dCQUNILFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsTUFBTTtLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNSLHFCQUFxQixFQUFFO1lBQ3JCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7U0FDaEI7UUFDRCxHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxLQUFLO0tBQ2I7Q0FDRixDQUFDOzs7Ozs7OztBQVVGLE1BQU0sT0FBTyxZQUFZO0lBS3ZCO1FBSkEsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFhLEVBQUUsQ0FBQyxDQUFDO1FBSy9DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBSkQsSUFBSSxJQUFJLEtBQWlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0lBTXhELFVBQVU7OztjQUVGLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7OztjQUlsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7OztJQU1ELGFBQWEsQ0FBQyxHQUF5QixFQUFFLEtBQWE7UUFDcEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBYSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBRTs7a0JBQ3hELEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDOztrQkFDaEIsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBRXBCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDakIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQkFDbkI7YUFDRjtZQUVELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOzs7WUExQ0YsVUFBVTs7Ozs7O0lBRVQsa0NBQWlEOzs7OztBQW9EbkQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUkvQixZQUFZLFFBQXNCO1FBT2xDLG1CQUFjLEdBQUcsQ0FBQyxDQUFTLEVBQUUsUUFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRTNELGlCQUFZLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFSckUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFFdEQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxvM0JBQTJDO2dCQUUzQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7O2FBQzFCOzs7O1lBS3VCLFlBQVk7Ozs7SUFIbEMsaURBQStDOztJQUMvQyxnREFBb0Q7O0lBU3BELDhDQUFtRTs7Ozs7SUFFbkUsNENBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXN0ZWRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgb2YgYXMgb2JzZXJ2YWJsZU9mfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBKc29uIG5vZGUgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuIEVhY2ggbm9kZSBoYXMgYSBmaWxlbmFtZSBhbmQgYSB2YWx1ZSBvciBhIGxpc3Qgb2YgY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVOb2RlIHtcbiAgY2hpbGRyZW46IEZpbGVOb2RlW107XG4gIGZpbGVuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IGFueTtcbn1cblxuLyoqXG4gKiBUaGUgSnNvbiB0cmVlIGRhdGEgaW4gc3RyaW5nLiBUaGUgZGF0YSBjb3VsZCBiZSBwYXJzZWQgaW50byBKc29uIG9iamVjdFxuICovXG5jb25zdCBUUkVFX0RBVEEgPSBKU09OLnN0cmluZ2lmeSh7XG4gIEFwcGxpY2F0aW9uczoge1xuICAgIENhbGVuZGFyOiAnYXBwJyxcbiAgICBDaHJvbWU6ICdhcHAnLFxuICAgIFdlYnN0b3JtOiAnYXBwJ1xuICB9LFxuICBEb2N1bWVudHM6IHtcbiAgICBhbmd1bGFyOiB7XG4gICAgICBzcmM6IHtcbiAgICAgICAgY29tcGlsZXI6ICd0cycsXG4gICAgICAgIGNvcmU6ICd0cydcbiAgICAgIH1cbiAgICB9LFxuICAgIG1hdGVyaWFsMjoge1xuICAgICAgc3JjOiB7XG4gICAgICAgIGJ1dHRvbjogJ3RzJyxcbiAgICAgICAgY2hlY2tib3g6ICd0cycsXG4gICAgICAgIGlucHV0OiAndHMnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBEb3dubG9hZHM6IHtcbiAgICBPY3RvYmVyOiAncGRmJyxcbiAgICBOb3ZlbWJlcjogJ3BkZicsXG4gICAgVHV0b3JpYWw6ICdodG1sJ1xuICB9LFxuICBQaWN0dXJlczoge1xuICAgICdQaG90byBCb290aCBMaWJyYXJ5Jzoge1xuICAgICAgQ29udGVudHM6ICdkaXInLFxuICAgICAgUGljdHVyZXM6ICdkaXInXG4gICAgfSxcbiAgICBTdW46ICdwbmcnLFxuICAgIFdvb2RzOiAnanBnJ1xuICB9XG59KTtcblxuLyoqXG4gKiBGaWxlIGRhdGFiYXNlLCBpdCBjYW4gYnVpbGQgYSB0cmVlIHN0cnVjdHVyZWQgSnNvbiBvYmplY3QgZnJvbSBzdHJpbmcuXG4gKiBFYWNoIG5vZGUgaW4gSnNvbiBvYmplY3QgcmVwcmVzZW50cyBhIGZpbGUgb3IgYSBkaXJlY3RvcnkuIEZvciBhIGZpbGUsIGl0IGhhcyBmaWxlbmFtZSBhbmQgdHlwZS5cbiAqIEZvciBhIGRpcmVjdG9yeSwgaXQgaGFzIGZpbGVuYW1lIGFuZCBjaGlsZHJlbiAoYSBsaXN0IG9mIGZpbGVzIG9yIGRpcmVjdG9yaWVzKS5cbiAqIFRoZSBpbnB1dCB3aWxsIGJlIGEganNvbiBvYmplY3Qgc3RyaW5nLCBhbmQgdGhlIG91dHB1dCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICogc3RydWN0dXJlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZURhdGFiYXNlIHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsZU5vZGVbXT4oW10pO1xuXG4gIGdldCBkYXRhKCk6IEZpbGVOb2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIC8vIFBhcnNlIHRoZSBzdHJpbmcgdG8ganNvbiBvYmplY3QuXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoVFJFRV9EQVRBKTtcblxuICAgIC8vIEJ1aWxkIHRoZSB0cmVlIG5vZGVzIGZyb20gSnNvbiBvYmplY3QuIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAgICAvLyAgICAgZmlsZSBub2RlIGFzIGNoaWxkcmVuLlxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmJ1aWxkRmlsZVRyZWUoZGF0YU9iamVjdCwgMCk7XG5cbiAgICAvLyBOb3RpZnkgdGhlIGNoYW5nZS5cbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZS4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYEZpbGVOb2RlYC5cbiAgICovXG4gIGJ1aWxkRmlsZVRyZWUob2JqOiB7W2tleTogc3RyaW5nXTogYW55fSwgbGV2ZWw6IG51bWJlcik6IEZpbGVOb2RlW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZTxGaWxlTm9kZVtdPigoYWNjdW11bGF0b3IsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgRmlsZU5vZGUoKTtcbiAgICAgIG5vZGUuZmlsZW5hbWUgPSBrZXk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRGaWxlVHJlZSh2YWx1ZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KG5vZGUpO1xuICAgIH0sIFtdKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggbmVzdGVkIG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtGaWxlRGF0YWJhc2VdXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOZXN0ZWRFeGFtcGxlIHtcbiAgbmVzdGVkVHJlZUNvbnRyb2w6IE5lc3RlZFRyZWVDb250cm9sPEZpbGVOb2RlPjtcbiAgbmVzdGVkRGF0YVNvdXJjZTogTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8RmlsZU5vZGU+O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBGaWxlRGF0YWJhc2UpIHtcbiAgICB0aGlzLm5lc3RlZFRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPEZpbGVOb2RlPih0aGlzLl9nZXRDaGlsZHJlbik7XG4gICAgdGhpcy5uZXN0ZWREYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlKCk7XG5cbiAgICBkYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHRoaXMubmVzdGVkRGF0YVNvdXJjZS5kYXRhID0gZGF0YSk7XG4gIH1cblxuICBoYXNOZXN0ZWRDaGlsZCA9IChfOiBudW1iZXIsIG5vZGVEYXRhOiBGaWxlTm9kZSkgPT4gIW5vZGVEYXRhLnR5cGU7XG5cbiAgcHJpdmF0ZSBfZ2V0Q2hpbGRyZW4gPSAobm9kZTogRmlsZU5vZGUpID0+IG9ic2VydmFibGVPZihub2RlLmNoaWxkcmVuKTtcbn1cbiJdfQ==