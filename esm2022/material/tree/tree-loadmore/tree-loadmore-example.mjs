/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
export class LoadmoreNode {
    get children() {
        return this.childrenChange.value;
    }
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
}
/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
    constructor(item, level = 1, expandable = false, loadMoreParentItem = null) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
}
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
class LoadmoreDatabase {
    constructor() {
        this.batchNumber = 5;
        this.dataChange = new BehaviorSubject([]);
        this.nodeMap = new Map();
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    initialize() {
        const data = this.rootLevelNodes.map(name => this._generateNode(name));
        this.dataChange.next(data);
    }
    /** Expand a node whose children are not loaded */
    loadMore(item, onlyFirstTime = false) {
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        const parent = this.nodeMap.get(item);
        const children = this.dataMap.get(item);
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        const newChildrenNumber = parent.children.length + this.batchNumber;
        const nodes = children.slice(0, newChildrenNumber).map(name => this._generateNode(name));
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    }
    _generateNode(item) {
        if (this.nodeMap.has(item)) {
            return this.nodeMap.get(item);
        }
        const result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: LoadmoreDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: LoadmoreDatabase }); }
}
export { LoadmoreDatabase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: LoadmoreDatabase, decorators: [{
            type: Injectable
        }] });
/**
 * @title Tree with partially loaded data
 */
class TreeLoadmoreExample {
    constructor(_database) {
        this._database = _database;
        this.nodeMap = new Map();
        this.getChildren = (node) => node.childrenChange;
        this.transformer = (node, level) => {
            const existingNode = this.nodeMap.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.isLoadMore = (_, _nodeData) => _nodeData.item === LOAD_MORE;
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
        _database.initialize();
    }
    /** Load more nodes from data source */
    loadMore(item) {
        this._database.loadMore(item);
    }
    loadChildren(node) {
        this._database.loadMore(node.item, true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TreeLoadmoreExample, deps: [{ token: LoadmoreDatabase }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TreeLoadmoreExample, isStandalone: true, selector: "tree-loadmore-example", providers: [LoadmoreDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n", dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
export { TreeLoadmoreExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TreeLoadmoreExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-loadmore-example', providers: [LoadmoreDatabase], standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n" }]
        }], ctorParameters: function () { return [{ type: LoadmoreDatabase }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlGLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBRTlCLGtCQUFrQjtBQUNsQixNQUFNLE9BQU8sWUFBWTtJQUd2QixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRCxZQUNTLElBQVksRUFDWixjQUFjLEtBQUssRUFDbkIscUJBQW9DLElBQUk7UUFGeEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBc0I7UUFUakQsbUJBQWMsR0FBRyxJQUFJLGVB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SUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQXNCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs4R0E1RFUsbUJBQW1CO2tHQUFuQixtQkFBbUIsb0VBSm5CLENBQUMsZ0JBQWdCLENBQUMsMEJDdEcvQiwrNUJBMEJBLDJDRDhFWSxhQUFhLDRvQkFBRSxlQUFlLHdhQUFFLGFBQWE7O1NBRTVDLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLHVCQUF1QixhQUV0QixDQUFDLGdCQUFnQixDQUFDLGNBQ2pCLElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXIsIE1hdFRyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5jb25zdCBMT0FEX01PUkUgPSAnTE9BRF9NT1JFJztcblxuLyoqIE5lc3RlZCBub2RlICovXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVOb2RlIHtcbiAgY2hpbGRyZW5DaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvYWRtb3JlTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IExvYWRtb3JlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbkNoYW5nZS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpdGVtOiBzdHJpbmcsXG4gICAgcHVibGljIGhhc0NoaWxkcmVuID0gZmFsc2UsXG4gICAgcHVibGljIGxvYWRNb3JlUGFyZW50SXRlbTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICkge31cbn1cblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVGbGF0Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpdGVtOiBzdHJpbmcsXG4gICAgcHVibGljIGxldmVsID0gMSxcbiAgICBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgIHB1YmxpYyBsb2FkTW9yZVBhcmVudEl0ZW06IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICApIHt9XG59XG5cbi8qKlxuICogQSBkYXRhYmFzZSB0aGF0IG9ubHkgbG9hZCBwYXJ0IG9mIHRoZSBkYXRhIGluaXRpYWxseS4gQWZ0ZXIgdXNlciBjbGlja3Mgb24gdGhlIGBMb2FkIG1vcmVgXG4gKiBidXR0b24sIG1vcmUgZGF0YSB3aWxsIGJlIGxvYWRlZC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRtb3JlRGF0YWJhc2Uge1xuICBiYXRjaE51bWJlciA9IDU7XG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvYWRtb3JlTm9kZVtdPihbXSk7XG4gIG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTG9hZG1vcmVOb2RlPigpO1xuXG4gIC8qKiBUaGUgZGF0YSAqL1xuICByb290TGV2ZWxOb2Rlczogc3RyaW5nW10gPSBbJ1ZlZ2V0YWJsZXMnLCAnRnJ1aXRzJ107XG4gIGRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgWydBcHBsZScsIFsnRnVqaScsICdNYWNpbnRvc2gnXV0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZScsICdHcmVlbicsICdTaGFsbG90JywgJ1N3ZWV0JywgJ1JlZCcsICdMZWVrJ11dLFxuICBdKTtcblxuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJvb3RMZXZlbE5vZGVzLm1hcChuYW1lID0+IHRoaXMuX2dlbmVyYXRlTm9kZShuYW1lKSk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKiogRXhwYW5kIGEgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgbm90IGxvYWRlZCAqL1xuICBsb2FkTW9yZShpdGVtOiBzdHJpbmcsIG9ubHlGaXJzdFRpbWUgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5ub2RlTWFwLmhhcyhpdGVtKSB8fCAhdGhpcy5kYXRhTWFwLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm5vZGVNYXAuZ2V0KGl0ZW0pITtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZGF0YU1hcC5nZXQoaXRlbSkhO1xuICAgIGlmIChvbmx5Rmlyc3RUaW1lICYmIHBhcmVudC5jaGlsZHJlbiEubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdDaGlsZHJlbk51bWJlciA9IHBhcmVudC5jaGlsZHJlbiEubGVuZ3RoICsgdGhpcy5iYXRjaE51bWJlcjtcbiAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuLnNsaWNlKDAsIG5ld0NoaWxkcmVuTnVtYmVyKS5tYXAobmFtZSA9PiB0aGlzLl9nZW5lcmF0ZU5vZGUobmFtZSkpO1xuICAgIGlmIChuZXdDaGlsZHJlbk51bWJlciA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgLy8gTmVlZCBhIG5ldyBsb2FkIG1vcmUgbm9kZVxuICAgICAgbm9kZXMucHVzaChuZXcgTG9hZG1vcmVOb2RlKExPQURfTU9SRSwgZmFsc2UsIGl0ZW0pKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuY2hpbGRyZW5DaGFuZ2UubmV4dChub2Rlcyk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhQ2hhbmdlLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlTm9kZShpdGVtOiBzdHJpbmcpOiBMb2FkbW9yZU5vZGUge1xuICAgIGlmICh0aGlzLm5vZGVNYXAuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlTWFwLmdldChpdGVtKSE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMb2FkbW9yZU5vZGUoaXRlbSwgdGhpcy5kYXRhTWFwLmhhcyhpdGVtKSk7XG4gICAgdGhpcy5ub2RlTWFwLnNldChpdGVtLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIHBhcnRpYWxseSBsb2FkZWQgZGF0YVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWxvYWRtb3JlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZS5odG1sJyxcbiAgcHJvdmlkZXJzOiBbTG9hZG1vcmVEYXRhYmFzZV0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTG9hZG1vcmVFeGFtcGxlIHtcbiAgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBMb2FkbW9yZUZsYXROb2RlPigpO1xuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPExvYWRtb3JlRmxhdE5vZGU+O1xuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPExvYWRtb3JlTm9kZSwgTG9hZG1vcmVGbGF0Tm9kZT47XG4gIC8vIEZsYXQgdHJlZSBkYXRhIHNvdXJjZVxuICBkYXRhU291cmNlOiBNYXRUcmVlRmxhdERhdGFTb3VyY2U8TG9hZG1vcmVOb2RlLCBMb2FkbW9yZUZsYXROb2RlPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhYmFzZTogTG9hZG1vcmVEYXRhYmFzZSkge1xuICAgIHRoaXMudHJlZUZsYXR0ZW5lciA9IG5ldyBNYXRUcmVlRmxhdHRlbmVyKFxuICAgICAgdGhpcy50cmFuc2Zvcm1lcixcbiAgICAgIHRoaXMuZ2V0TGV2ZWwsXG4gICAgICB0aGlzLmlzRXhwYW5kYWJsZSxcbiAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4sXG4gICAgKTtcblxuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPExvYWRtb3JlRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICAgIF9kYXRhYmFzZS5kYXRhQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gZGF0YTtcbiAgICB9KTtcblxuICAgIF9kYXRhYmFzZS5pbml0aWFsaXplKCk7XG4gIH1cblxuICBnZXRDaGlsZHJlbiA9IChub2RlOiBMb2FkbW9yZU5vZGUpOiBPYnNlcnZhYmxlPExvYWRtb3JlTm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuQ2hhbmdlO1xuXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IExvYWRtb3JlTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubm9kZU1hcC5nZXQobm9kZS5pdGVtKTtcblxuICAgIGlmIChleGlzdGluZ05vZGUpIHtcbiAgICAgIHJldHVybiBleGlzdGluZ05vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBMb2FkbW9yZUZsYXROb2RlKFxuICAgICAgbm9kZS5pdGVtLFxuICAgICAgbGV2ZWwsXG4gICAgICBub2RlLmhhc0NoaWxkcmVuLFxuICAgICAgbm9kZS5sb2FkTW9yZVBhcmVudEl0ZW0sXG4gICAgKTtcbiAgICB0aGlzLm5vZGVNYXAuc2V0KG5vZGUuaXRlbSwgbmV3Tm9kZSk7XG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH07XG5cbiAgZ2V0TGV2ZWwgPSAobm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBfbm9kZURhdGEuZXhwYW5kYWJsZTtcblxuICBpc0xvYWRNb3JlID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBMb2FkbW9yZUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gTE9BRF9NT1JFO1xuXG4gIC8qKiBMb2FkIG1vcmUgbm9kZXMgZnJvbSBkYXRhIHNvdXJjZSAqL1xuICBsb2FkTW9yZShpdGVtOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZS5sb2FkTW9yZShpdGVtKTtcbiAgfVxuXG4gIGxvYWRDaGlsZHJlbihub2RlOiBMb2FkbW9yZUZsYXROb2RlKSB7XG4gICAgdGhpcy5fZGF0YWJhc2UubG9hZE1vcmUobm9kZS5pdGVtLCB0cnVlKTtcbiAgfVxufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBMZWFmIG5vZGUgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5pdGVtfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDwhLS0gZXhwYW5kYWJsZSBub2RlIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5pdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJsb2FkQ2hpbGRyZW4obm9kZSlcIlxuICAgICAgICAgICAgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaXNMb2FkTW9yZVwiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwibG9hZE1vcmUobm9kZS5sb2FkTW9yZVBhcmVudEl0ZW0pXCI+XG4gICAgICBMb2FkIG1vcmUuLi5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==