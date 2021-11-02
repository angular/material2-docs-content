import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-bar";
import * as i5 from "@angular/common";
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
DynamicDatabase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: DynamicDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DynamicDatabase.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: DynamicDatabase, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: DynamicDatabase, decorators: [{
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
TreeDynamicExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: TreeDynamicExample, deps: [{ token: DynamicDatabase }], target: i0.ɵɵFactoryTarget.Component });
TreeDynamicExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: TreeDynamicExample, selector: "tree-dynamic-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"], components: [{ type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], directives: [{ type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: TreeDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-dynamic-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: DynamicDatabase }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1keW5hbWljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUVuQyxzREFBc0Q7QUFDdEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFDUyxJQUFZLEVBQ1osUUFBUSxDQUFDLEVBQ1QsYUFBYSxLQUFLLEVBQ2xCLFlBQVksS0FBSztRQUhqQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBSTtRQUNULGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUN2QixDQUFDO0NBQ0w7QUFFRDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVFLFlBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBbUI7WUFDbEMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZ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SSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGO0FBRUQ7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQVksUUFBeUI7UUFXckMsYUFBUSxHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqRCxpQkFBWSxHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUUxRCxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsU0FBMEIsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQWR6RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7b0hBTlUsa0JBQWtCLGtCQUNQLGVBQWU7d0dBRDFCLGtCQUFrQiw0REMzSS9CLDZ4QkFrQkE7Z0dEeUhhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxzQkFBc0I7MERBS1YsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvblZpZXdlciwgU2VsZWN0aW9uQ2hhbmdlLCBEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaXRlbTogc3RyaW5nLFxuICAgIHB1YmxpYyBsZXZlbCA9IDEsXG4gICAgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcbiAgICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2UsXG4gICkge31cbn1cblxuLyoqXG4gKiBEYXRhYmFzZSBmb3IgZHluYW1pYyBkYXRhLiBXaGVuIGV4cGFuZGluZyBhIG5vZGUgaW4gdGhlIHRyZWUsIHRoZSBkYXRhIHNvdXJjZSB3aWxsIG5lZWQgdG8gZmV0Y2hcbiAqIHRoZSBkZXNjZW5kYW50cyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRGF0YWJhc2Uge1xuICBkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPihbXG4gICAgWydGcnVpdHMnLCBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnXV0sXG4gICAgWydWZWdldGFibGVzJywgWydUb21hdG8nLCAnUG90YXRvJywgJ09uaW9uJ11dLFxuICAgIFsnQXBwbGUnLCBbJ0Z1amknLCAnTWFjaW50b3NoJ11dLFxuICAgIFsnT25pb24nLCBbJ1llbGxvdycsICdXaGl0ZScsICdQdXJwbGUnXV0sXG4gIF0pO1xuXG4gIHJvb3RMZXZlbE5vZGVzOiBzdHJpbmdbXSA9IFsnRnJ1aXRzJywgJ1ZlZ2V0YWJsZXMnXTtcblxuICAvKiogSW5pdGlhbCBkYXRhIGZyb20gZGF0YWJhc2UgKi9cbiAgaW5pdGlhbERhdGEoKTogRHluYW1pY0ZsYXROb2RlW10ge1xuICAgIHJldHVybiB0aGlzLnJvb3RMZXZlbE5vZGVzLm1hcChuYW1lID0+IG5ldyBEeW5hbWljRmxhdE5vZGUobmFtZSwgMCwgdHJ1ZSkpO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4obm9kZTogc3RyaW5nKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmRhdGFNYXAuZ2V0KG5vZGUpO1xuICB9XG5cbiAgaXNFeHBhbmRhYmxlKG5vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFNYXAuaGFzKG5vZGUpO1xuICB9XG59XG4vKipcbiAqIEZpbGUgZGF0YWJhc2UsIGl0IGNhbiBidWlsZCBhIHRyZWUgc3RydWN0dXJlZCBKc29uIG9iamVjdCBmcm9tIHN0cmluZy5cbiAqIEVhY2ggbm9kZSBpbiBKc29uIG9iamVjdCByZXByZXNlbnRzIGEgZmlsZSBvciBhIGRpcmVjdG9yeS4gRm9yIGEgZmlsZSwgaXQgaGFzIGZpbGVuYW1lIGFuZCB0eXBlLlxuICogRm9yIGEgZGlyZWN0b3J5LCBpdCBoYXMgZmlsZW5hbWUgYW5kIGNoaWxkcmVuIChhIGxpc3Qgb2YgZmlsZXMgb3IgZGlyZWN0b3JpZXMpLlxuICogVGhlIGlucHV0IHdpbGwgYmUgYSBqc29uIG9iamVjdCBzdHJpbmcsIGFuZCB0aGUgb3V0cHV0IGlzIGEgbGlzdCBvZiBgRmlsZU5vZGVgIHdpdGggbmVzdGVkXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEeW5hbWljRGF0YVNvdXJjZSBpbXBsZW1lbnRzIERhdGFTb3VyY2U8RHluYW1pY0ZsYXROb2RlPiB7XG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PER5bmFtaWNGbGF0Tm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogRHluYW1pY0ZsYXROb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7XG4gIH1cbiAgc2V0IGRhdGEodmFsdWU6IER5bmFtaWNGbGF0Tm9kZVtdKSB7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gdmFsdWU7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxEeW5hbWljRmxhdE5vZGU+LFxuICAgIHByaXZhdGUgX2RhdGFiYXNlOiBEeW5hbWljRGF0YWJhc2UsXG4gICkge31cblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPER5bmFtaWNGbGF0Tm9kZVtdPiB7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwuY2hhbmdlZC5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikuYWRkZWQgfHxcbiAgICAgICAgKGNoYW5nZSBhcyBTZWxlY3Rpb25DaGFuZ2U8RHluYW1pY0ZsYXROb2RlPikucmVtb3ZlZFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJlZUNvbnRyb2woY2hhbmdlIGFzIFNlbGVjdGlvbkNoYW5nZTxEeW5hbWljRmxhdE5vZGU+KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXJnZShjb2xsZWN0aW9uVmlld2VyLnZpZXdDaGFuZ2UsIHRoaXMuZGF0YUNoYW5nZSkucGlwZShtYXAoKCkgPT4gdGhpcy5kYXRhKSk7XG4gIH1cblxuICBkaXNjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiB2b2lkIHt9XG5cbiAgLyoqIEhhbmRsZSBleHBhbmQvY29sbGFwc2UgYmVoYXZpb3JzICovXG4gIGhhbmRsZVRyZWVDb250cm9sKGNoYW5nZTogU2VsZWN0aW9uQ2hhbmdlPER5bmFtaWNGbGF0Tm9kZT4pIHtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBjaGFuZ2UuYWRkZWQuZm9yRWFjaChub2RlID0+IHRoaXMudG9nZ2xlTm9kZShub2RlLCB0cnVlKSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgY2hhbmdlLnJlbW92ZWRcbiAgICAgICAgLnNsaWNlKClcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IHRoaXMudG9nZ2xlTm9kZShub2RlLCBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIG5vZGUsIHJlbW92ZSBmcm9tIGRpc3BsYXkgbGlzdFxuICAgKi9cbiAgdG9nZ2xlTm9kZShub2RlOiBEeW5hbWljRmxhdE5vZGUsIGV4cGFuZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZGF0YWJhc2UuZ2V0Q2hpbGRyZW4obm9kZS5pdGVtKTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5pbmRleE9mKG5vZGUpO1xuICAgIGlmICghY2hpbGRyZW4gfHwgaW5kZXggPCAwKSB7XG4gICAgICAvLyBJZiBubyBjaGlsZHJlbiwgb3IgY2Fubm90IGZpbmQgdGhlIG5vZGUsIG5vIG9wXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ubWFwKFxuICAgICAgICAgIG5hbWUgPT4gbmV3IER5bmFtaWNGbGF0Tm9kZShuYW1lLCBub2RlLmxldmVsICsgMSwgdGhpcy5fZGF0YWJhc2UuaXNFeHBhbmRhYmxlKG5hbWUpKSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCArIDEsIDAsIC4uLm5vZGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGkgPSBpbmRleCArIDE7XG4gICAgICAgICAgaSA8IHRoaXMuZGF0YS5sZW5ndGggJiYgdGhpcy5kYXRhW2ldLmxldmVsID4gbm9kZS5sZXZlbDtcbiAgICAgICAgICBpKyssIGNvdW50KytcbiAgICAgICAgKSB7fVxuICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgY291bnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBub3RpZnkgdGhlIGNoYW5nZVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgICAgIG5vZGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGR5bmFtaWMgZGF0YVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUR5bmFtaWNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZGF0YWJhc2U6IER5bmFtaWNEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEeW5hbWljRGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCBkYXRhYmFzZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGFiYXNlLmluaXRpYWxEYXRhKCk7XG4gIH1cblxuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPER5bmFtaWNGbGF0Tm9kZT47XG5cbiAgZGF0YVNvdXJjZTogRHluYW1pY0RhdGFTb3VyY2U7XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogRHluYW1pY0ZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBEeW5hbWljRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogRHluYW1pY0ZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5pdGVtXCIgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJub2RlLmlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhclwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==