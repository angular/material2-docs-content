import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-bar";
import * as i5 from "@angular/material/tree";
/** Flat node with expandable and level information */
export class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']],
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    initialData() {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
DynamicDatabase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: DynamicDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DynamicDatabase.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: DynamicDatabase, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: DynamicDatabase, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export class DynamicDataSource {
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }
    disconnect(collectionViewer) { }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this._database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) {
            // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
}
/**
 * @title Tree with dynamic data
 */
export class TreeDynamicExample {
    constructor(database) {
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
}
TreeDynamicExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: TreeDynamicExample, deps: [{ token: DynamicDatabase }], target: i0.ɵɵFactoryTarget.Component });
TreeDynamicExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: TreeDynamicExample, selector: "tree-dynamic-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "directive", type: i5.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i5.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i5.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i5.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i5.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: TreeDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-dynamic-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: DynamicDatabase }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUVuQyxzREFBc0Q7QUFDdEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFDUyxJQUFZLEVBQ1osUUFBUSxDQUFDLEVBQ1QsYUFBYSxLQUFLLEVBQ2xCLFlBQVksS0FBSztRQUhqQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBSTtRQUNULGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUN2QixDQUFDO0NBQ0w7QUFFRDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVFLFlBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBbUI7WUFDbEMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNoQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBRUgsbUJBQWMsR0FBYSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztLQWNyRDtJQVpDLGlDQUFpQztJQUNqQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzttSEFyQlUsZUFBZTt1SEFBZixlQUFlLGNBREgsTUFBTTtrR0FDbEIsZUFBZTtrQkFEM0IsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7O0FBd0JoQzs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO0lBVzVCLFlBQ1UsWUFBOEMsRUFDOUMsU0FBMEI7UUFEMUIsaUJBQVksR0FBWixZQUFZLENBQWtDO1FBQzlDLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBWnBDLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBb0IsRUFBRSxDQUFDLENBQUM7SUFhckQsQ0FBQztJQVhKLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBT0QsT0FBTyxDQUFDLGdCQUFrQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFELElBQ0csTUFBMkMsQ0FBQyxLQUFLO2dCQUNqRCxNQUEyQyxDQUFDLE9BQU8sRUFDcEQ7Z0JBQ0EsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQTBDLENBQUMsQ0FBQzthQUNwRTtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRCxVQUFVLENBQUMsZ0JBQWtDLElBQVMsQ0FBQztJQUV2RCx1Q0FBdUM7SUFDdkMsaUJBQWlCLENBQUMsTUFBd0M7UUFDeEQsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixNQUFNLENBQUMsT0FBTztpQkFDWCxLQUFLLEVBQUU7aUJBQ1AsT0FBTyxFQUFFO2lCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQUMsSUFBcUIsRUFBRSxNQUFlO1FBQy9DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDMUIsaURBQWlEO1lBQ2pELE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNyRixDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLEtBQ0UsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFDakIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQ3ZELENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUNaLEdBQUU7Z0JBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNwQztZQUVELG9CQUFvQjtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGO0FBRUQ7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQVksUUFBeUI7UUFXckMsYUFBUSxHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqRCxpQkFBWSxHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUUxRCxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsU0FBMEIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQWR6RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7c0hBTlUsa0JBQWtCOzBHQUFsQixrQkFBa0IsNERDM0kvQiw2eEJBa0JBO2tHRHlIYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBTZWxlY3Rpb25DaGFuZ2UsIERhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIG1lcmdlLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNGbGF0Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpdGVtOiBzdHJpbmcsXG4gICAgcHVibGljIGxldmVsID0gMSxcbiAgICBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZSxcbiAgKSB7fVxufVxuXG4vKipcbiAqIERhdGFiYXNlIGZvciBkeW5hbWljIGRhdGEuIFdoZW4gZXhwYW5kaW5nIGEgbm9kZSBpbiB0aGUgdHJlZSwgdGhlIGRhdGEgc291cmNlIHdpbGwgbmVlZCB0byBmZXRjaFxuICogdGhlIGRlc2NlbmRhbnRzIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhYmFzZSB7XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZSddXSxcbiAgXSk7XG5cbiAgcm9vdExldmVsTm9kZXM6IHN0cmluZ1tdID0gWydGcnVpdHMnLCAnVmVnZXRhYmxlcyddO1xuXG4gIC8qKiBJbml0aWFsIGRhdGEgZnJvbSBkYXRhYmFzZSAqL1xuICBpbml0aWFsRGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdExldmVsTm9kZXMubWFwKG5hbWUgPT4gbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCAwLCB0cnVlKSk7XG4gIH1cblxuICBnZXRDaGlsZHJlbihub2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5nZXQobm9kZSk7XG4gIH1cblxuICBpc0V4cGFuZGFibGUobm9kZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5oYXMobm9kZSk7XG4gIH1cbn1cbi8qKlxuICogRmlsZSBkYXRhYmFzZSwgaXQgY2FuIGJ1aWxkIGEgdHJlZSBzdHJ1Y3R1cmVkIEpzb24gb2JqZWN0IGZyb20gc3RyaW5nLlxuICogRWFjaCBub2RlIGluIEpzb24gb2JqZWN0IHJlcHJlc2VudHMgYSBmaWxlIG9yIGEgZGlyZWN0b3J5LiBGb3IgYSBmaWxlLCBpdCBoYXMgZmlsZW5hbWUgYW5kIHR5cGUuXG4gKiBGb3IgYSBkaXJlY3RvcnksIGl0IGhhcyBmaWxlbmFtZSBhbmQgY2hpbGRyZW4gKGEgbGlzdCBvZiBmaWxlcyBvciBkaXJlY3RvcmllcykuXG4gKiBUaGUgaW5wdXQgd2lsbCBiZSBhIGpzb24gb2JqZWN0IHN0cmluZywgYW5kIHRoZSBvdXRwdXQgaXMgYSBsaXN0IG9mIGBGaWxlTm9kZWAgd2l0aCBuZXN0ZWRcbiAqIHN0cnVjdHVyZS5cbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNEYXRhU291cmNlIGltcGxlbWVudHMgRGF0YVNvdXJjZTxEeW5hbWljRmxhdE5vZGU+IHtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RHluYW1pY0ZsYXROb2RlW10+KFtdKTtcblxuICBnZXQgZGF0YSgpOiBEeW5hbWljRmxhdE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZS52YWx1ZTtcbiAgfVxuICBzZXQgZGF0YSh2YWx1ZTogRHluYW1pY0ZsYXROb2RlW10pIHtcbiAgICB0aGlzLl90cmVlQ29udHJvbC5kYXRhTm9kZXMgPSB2YWx1ZTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4sXG4gICAgcHJpdmF0ZSBfZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSxcbiAgKSB7fVxuXG4gIGNvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IE9ic2VydmFibGU8RHluYW1pY0ZsYXROb2RlW10+IHtcbiAgICB0aGlzLl90cmVlQ29udHJvbC5leHBhbnNpb25Nb2RlbC5jaGFuZ2VkLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5hZGRlZCB8fFxuICAgICAgICAoY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KS5yZW1vdmVkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5oYW5kbGVUcmVlQ29udHJvbChjaGFuZ2UgYXMgU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lcmdlKGNvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZSwgdGhpcy5kYXRhQ2hhbmdlKS5waXBlKG1hcCgoKSA9PiB0aGlzLmRhdGEpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoY29sbGVjdGlvblZpZXdlcjogQ29sbGVjdGlvblZpZXdlcik6IHZvaWQge31cblxuICAvKiogSGFuZGxlIGV4cGFuZC9jb2xsYXBzZSBiZWhhdmlvcnMgKi9cbiAgaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlOiBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikge1xuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIGNoYW5nZS5hZGRlZC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIHRydWUpKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICBjaGFuZ2UucmVtb3ZlZFxuICAgICAgICAuc2xpY2UoKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5mb3JFYWNoKG5vZGUgPT4gdGhpcy50b2dnbGVOb2RlKG5vZGUsIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgbm9kZSwgcmVtb3ZlIGZyb20gZGlzcGxheSBsaXN0XG4gICAqL1xuICB0b2dnbGVOb2RlKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSwgZXhwYW5kOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9kYXRhYmFzZS5nZXRDaGlsZHJlbihub2RlLml0ZW0pO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2Yobm9kZSk7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCBpbmRleCA8IDApIHtcbiAgICAgIC8vIElmIG5vIGNoaWxkcmVuLCBvciBjYW5ub3QgZmluZCB0aGUgbm9kZSwgbm8gb3BcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbi5tYXAoXG4gICAgICAgICAgbmFtZSA9PiBuZXcgRHluYW1pY0ZsYXROb2RlKG5hbWUsIG5vZGUubGV2ZWwgKyAxLCB0aGlzLl9kYXRhYmFzZS5pc0V4cGFuZGFibGUobmFtZSkpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgMCwgLi4ubm9kZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBsZXQgaSA9IGluZGV4ICsgMTtcbiAgICAgICAgICBpIDwgdGhpcy5kYXRhLmxlbmd0aCAmJiB0aGlzLmRhdGFbaV0ubGV2ZWwgPiBub2RlLmxldmVsO1xuICAgICAgICAgIGkrKywgY291bnQrK1xuICAgICAgICApIHt9XG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCBjb3VudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdGlmeSB0aGUgY2hhbmdlXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICAgICAgbm9kZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZHluYW1pYyBkYXRhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtZHluYW1pYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlRHluYW1pY0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRHluYW1pY0RhdGFiYXNlKSB7XG4gICAgdGhpcy50cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IER5bmFtaWNEYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIGRhdGFiYXNlKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YWJhc2UuaW5pdGlhbERhdGEoKTtcbiAgfVxuXG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RHluYW1pY0ZsYXROb2RlPjtcblxuICBkYXRhU291cmNlOiBEeW5hbWljRGF0YVNvdXJjZTtcblxuICBnZXRMZXZlbCA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IER5bmFtaWNGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBEeW5hbWljRmxhdE5vZGUpID0+IF9ub2RlRGF0YS5leHBhbmRhYmxlO1xufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLml0ZW1cIiBtYXRUcmVlTm9kZVRvZ2dsZT5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgICA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj1cIm5vZGUuaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtcHJvZ3Jlc3MtYmFyXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19