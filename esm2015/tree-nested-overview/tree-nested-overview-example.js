/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
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
export class TreeNestedOverviewExample {
    /**
     * @param {?} database
     */
    constructor(database) {
        this.hasNestedChild = (_, nodeData) => !nodeData.type;
        this._getChildren = (node) => node.children;
        this.nestedTreeControl = new NestedTreeControl(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        database.dataChange.subscribe(data => this.nestedDataSource.data = data);
    }
}
TreeNestedOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-nested-overview-example',
                template: "<mat-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\" class=\"example-tree\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n    <li class=\"mat-tree-node\">\n      <button mat-icon-button disabled></button>\n      {{node.filename}}:  {{node.type}}\n    </li>\n  </mat-tree-node>\n\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasNestedChild\">\n    <li>\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'toggle ' + node.filename\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.filename}}\n      </div>\n      <ul [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </ul>\n    </li>\n  </mat-nested-tree-node>\n</mat-tree>\n",
                providers: [FileDatabase],
                styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n"]
            }] }
];
/** @nocollapse */
TreeNestedOverviewExample.ctorParameters = () => [
    { type: FileDatabase }
];
if (false) {
    /** @type {?} */
    TreeNestedOverviewExample.prototype.nestedTreeControl;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.nestedDataSource;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.hasNestedChild;
    /**
     * @type {?}
     * @private
     */
    TreeNestedOverviewExample.prototype._getChildren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90cmVlLW5lc3RlZC1vdmVydmlldy90cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBS3JDLE1BQU0sT0FBTyxRQUFRO0NBSXBCOzs7SUFIQyw0QkFBcUI7O0lBQ3JCLDRCQUFpQjs7SUFDakIsd0JBQVU7Ozs7OztNQU1OLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9CLFlBQVksRUFBRTtRQUNaLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLEtBQUs7UUFDYixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRTtZQUNQLEdBQUcsRUFBRTtnQkFDSCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsSUFBSTthQUNYO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxHQUFHLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLE1BQU07S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixxQkFBcUIsRUFBRTtZQUNyQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxLQUFLO1NBQ2hCO1FBQ0QsR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsS0FBSztLQUNiO0NBQ0YsQ0FBQzs7Ozs7Ozs7QUFVRixNQUFNLE9BQU8sWUFBWTtJQUt2QjtRQUpBLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBYSxFQUFFLENBQUMsQ0FBQztRQUsvQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUpELElBQUksSUFBSSxLQUFpQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7OztJQU14RCxVQUFVOzs7Y0FFRixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Ozs7Y0FJbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUU5QyxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7Ozs7SUFNRCxhQUFhLENBQUMsR0FBeUIsRUFBRSxLQUFhO1FBQ3BELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQWEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEVBQUU7O2tCQUN4RCxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7a0JBQ2hCLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUVwQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO29CQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7aUJBQ25CO2FBQ0Y7WUFFRCxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7O1lBMUNGLFVBQVU7Ozs7OztJQUVULGtDQUFpRDs7Ozs7QUFvRG5ELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFJcEMsWUFBWSxRQUFzQjtRQU9sQyxtQkFBYyxHQUFHLENBQUMsQ0FBUyxFQUFFLFFBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUUzRCxpQkFBWSxHQUFHLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBUnZELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRXRELFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsKytCQUFnRDtnQkFFaEQsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDOzthQUMxQjs7OztZQUt1QixZQUFZOzs7O0lBSGxDLHNEQUErQzs7SUFDL0MscURBQW9EOztJQVNwRCxtREFBbUU7Ozs7O0lBRW5FLGlEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmVzdGVkVHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZU5lc3RlZERhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEpzb24gbm9kZSBkYXRhIHdpdGggbmVzdGVkIHN0cnVjdHVyZS4gRWFjaCBub2RlIGhhcyBhIGZpbGVuYW1lIGFuZCBhIHZhbHVlIG9yIGEgbGlzdCBvZiBjaGlsZHJlblxuICovXG5leHBvcnQgY2xhc3MgRmlsZU5vZGUge1xuICBjaGlsZHJlbjogRmlsZU5vZGVbXTtcbiAgZmlsZW5hbWU6IHN0cmluZztcbiAgdHlwZTogYW55O1xufVxuXG4vKipcbiAqIFRoZSBKc29uIHRyZWUgZGF0YSBpbiBzdHJpbmcuIFRoZSBkYXRhIGNvdWxkIGJlIHBhcnNlZCBpbnRvIEpzb24gb2JqZWN0XG4gKi9cbmNvbnN0IFRSRUVfREFUQSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgQXBwbGljYXRpb25zOiB7XG4gICAgQ2FsZW5kYXI6ICdhcHAnLFxuICAgIENocm9tZTogJ2FwcCcsXG4gICAgV2Vic3Rvcm06ICdhcHAnXG4gIH0sXG4gIERvY3VtZW50czoge1xuICAgIGFuZ3VsYXI6IHtcbiAgICAgIHNyYzoge1xuICAgICAgICBjb21waWxlcjogJ3RzJyxcbiAgICAgICAgY29yZTogJ3RzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbWF0ZXJpYWwyOiB7XG4gICAgICBzcmM6IHtcbiAgICAgICAgYnV0dG9uOiAndHMnLFxuICAgICAgICBjaGVja2JveDogJ3RzJyxcbiAgICAgICAgaW5wdXQ6ICd0cydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIERvd25sb2Fkczoge1xuICAgIE9jdG9iZXI6ICdwZGYnLFxuICAgIE5vdmVtYmVyOiAncGRmJyxcbiAgICBUdXRvcmlhbDogJ2h0bWwnXG4gIH0sXG4gIFBpY3R1cmVzOiB7XG4gICAgJ1Bob3RvIEJvb3RoIExpYnJhcnknOiB7XG4gICAgICBDb250ZW50czogJ2RpcicsXG4gICAgICBQaWN0dXJlczogJ2RpcidcbiAgICB9LFxuICAgIFN1bjogJ3BuZycsXG4gICAgV29vZHM6ICdqcGcnXG4gIH1cbn0pO1xuXG4vKipcbiAqIEZpbGUgZGF0YWJhc2UsIGl0IGNhbiBidWlsZCBhIHRyZWUgc3RydWN0dXJlZCBKc29uIG9iamVjdCBmcm9tIHN0cmluZy5cbiAqIEVhY2ggbm9kZSBpbiBKc29uIG9iamVjdCByZXByZXNlbnRzIGEgZmlsZSBvciBhIGRpcmVjdG9yeS4gRm9yIGEgZmlsZSwgaXQgaGFzIGZpbGVuYW1lIGFuZCB0eXBlLlxuICogRm9yIGEgZGlyZWN0b3J5LCBpdCBoYXMgZmlsZW5hbWUgYW5kIGNoaWxkcmVuIChhIGxpc3Qgb2YgZmlsZXMgb3IgZGlyZWN0b3JpZXMpLlxuICogVGhlIGlucHV0IHdpbGwgYmUgYSBqc29uIG9iamVjdCBzdHJpbmcsIGFuZCB0aGUgb3V0cHV0IGlzIGEgbGlzdCBvZiBgRmlsZU5vZGVgIHdpdGggbmVzdGVkXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlRGF0YWJhc2Uge1xuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWxlTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogRmlsZU5vZGVbXSB7IHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7IH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgLy8gUGFyc2UgdGhlIHN0cmluZyB0byBqc29uIG9iamVjdC5cbiAgICBjb25zdCBkYXRhT2JqZWN0ID0gSlNPTi5wYXJzZShUUkVFX0RBVEEpO1xuXG4gICAgLy8gQnVpbGQgdGhlIHRyZWUgbm9kZXMgZnJvbSBKc29uIG9iamVjdC4gVGhlIHJlc3VsdCBpcyBhIGxpc3Qgb2YgYEZpbGVOb2RlYCB3aXRoIG5lc3RlZFxuICAgIC8vICAgICBmaWxlIG5vZGUgYXMgY2hpbGRyZW4uXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuYnVpbGRGaWxlVHJlZShkYXRhT2JqZWN0LCAwKTtcblxuICAgIC8vIE5vdGlmeSB0aGUgY2hhbmdlLlxuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWxlIHN0cnVjdHVyZSB0cmVlLiBUaGUgYHZhbHVlYCBpcyB0aGUgSnNvbiBvYmplY3QsIG9yIGEgc3ViLXRyZWUgb2YgYSBKc29uIG9iamVjdC5cbiAgICogVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgbGlzdCBvZiBgRmlsZU5vZGVgLlxuICAgKi9cbiAgYnVpbGRGaWxlVHJlZShvYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBsZXZlbDogbnVtYmVyKTogRmlsZU5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlPEZpbGVOb2RlW10+KChhY2N1bXVsYXRvciwga2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBGaWxlTm9kZSgpO1xuICAgICAgbm9kZS5maWxlbmFtZSA9IGtleTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuID0gdGhpcy5idWlsZEZpbGVUcmVlKHZhbHVlLCBsZXZlbCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUudHlwZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvci5jb25jYXQobm9kZSk7XG4gICAgfSwgW10pO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBuZXN0ZWQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW0ZpbGVEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSB7XG4gIG5lc3RlZFRyZWVDb250cm9sOiBOZXN0ZWRUcmVlQ29udHJvbDxGaWxlTm9kZT47XG4gIG5lc3RlZERhdGFTb3VyY2U6IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPEZpbGVOb2RlPjtcblxuICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRmlsZURhdGFiYXNlKSB7XG4gICAgdGhpcy5uZXN0ZWRUcmVlQ29udHJvbCA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxGaWxlTm9kZT4odGhpcy5fZ2V0Q2hpbGRyZW4pO1xuICAgIHRoaXMubmVzdGVkRGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZSgpO1xuXG4gICAgZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLm5lc3RlZERhdGFTb3VyY2UuZGF0YSA9IGRhdGEpO1xuICB9XG5cbiAgaGFzTmVzdGVkQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlRGF0YTogRmlsZU5vZGUpID0+ICFub2RlRGF0YS50eXBlO1xuXG4gIHByaXZhdGUgX2dldENoaWxkcmVuID0gKG5vZGU6IEZpbGVOb2RlKSA9PiBub2RlLmNoaWxkcmVuO1xufVxuIl19