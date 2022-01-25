/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
export class LoadmoreNode {
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new BehaviorSubject([]);
    }
    get children() {
        return this.childrenChange.value;
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
export class LoadmoreDatabase {
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
}
LoadmoreDatabase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: LoadmoreDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoadmoreDatabase.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: LoadmoreDatabase });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: LoadmoreDatabase, decorators: [{
            type: Injectable
        }] });
/**
 * @title Tree with partially loaded data
 */
export class TreeLoadmoreExample {
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
}
TreeLoadmoreExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: TreeLoadmoreExample, deps: [{ token: LoadmoreDatabase }], target: i0.ɵɵFactoryTarget.Component });
TreeLoadmoreExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-rc.1", type: TreeLoadmoreExample, selector: "tree-loadmore-example", providers: [LoadmoreDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [""], components: [{ type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: TreeLoadmoreExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-loadmore-example', providers: [LoadmoreDatabase], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: LoadmoreDatabase }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFakQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBRTlCLGtCQUFrQjtBQUNsQixNQUFNLE9BQU8sWUFBWTtJQU92QixZQUNTLElBQVksRUFDWixjQUFjLEtBQUssRUFDbkIscUJBQW9DLElBQUk7UUFGeEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBc0I7UUFUakQsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7SUFVdEQsQ0FBQztJQVJKLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztDQU9GO0FBRUQsc0RBQXNEO0FBQ3RELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFDUyxJQUFZLEVBQ1os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Q0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7cUhBNURVLG1CQUFtQixrQkFPQyxnQkFBZ0I7eUdBUHBDLG1CQUFtQixnREFGbkIsQ0FBQyxnQkFBZ0IsQ0FBQywwQkNyRy9CLCs1QkEwQkE7Z0dENkVhLG1CQUFtQjtrQkFOL0IsU0FBUzsrQkFDRSx1QkFBdUIsYUFHdEIsQ0FBQyxnQkFBZ0IsQ0FBQzswREFTRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IExPQURfTU9SRSA9ICdMT0FEX01PUkUnO1xuXG4vKiogTmVzdGVkIG5vZGUgKi9cbmV4cG9ydCBjbGFzcyBMb2FkbW9yZU5vZGUge1xuICBjaGlsZHJlbkNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9hZG1vcmVOb2RlW10+KFtdKTtcblxuICBnZXQgY2hpbGRyZW4oKTogTG9hZG1vcmVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuQ2hhbmdlLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGl0ZW06IHN0cmluZyxcbiAgICBwdWJsaWMgaGFzQ2hpbGRyZW4gPSBmYWxzZSxcbiAgICBwdWJsaWMgbG9hZE1vcmVQYXJlbnRJdGVtOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgKSB7fVxufVxuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBMb2FkbW9yZUZsYXROb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGl0ZW06IHN0cmluZyxcbiAgICBwdWJsaWMgbGV2ZWwgPSAxLFxuICAgIHB1YmxpYyBleHBhbmRhYmxlID0gZmFsc2UsXG4gICAgcHVibGljIGxvYWRNb3JlUGFyZW50SXRlbTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICkge31cbn1cblxuLyoqXG4gKiBBIGRhdGFiYXNlIHRoYXQgb25seSBsb2FkIHBhcnQgb2YgdGhlIGRhdGEgaW5pdGlhbGx5LiBBZnRlciB1c2VyIGNsaWNrcyBvbiB0aGUgYExvYWQgbW9yZWBcbiAqIGJ1dHRvbiwgbW9yZSBkYXRhIHdpbGwgYmUgbG9hZGVkLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVEYXRhYmFzZSB7XG4gIGJhdGNoTnVtYmVyID0gNTtcbiAgZGF0YUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9hZG1vcmVOb2RlW10+KFtdKTtcbiAgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBMb2FkbW9yZU5vZGU+KCk7XG5cbiAgLyoqIFRoZSBkYXRhICovXG4gIHJvb3RMZXZlbE5vZGVzOiBzdHJpbmdbXSA9IFsnVmVnZXRhYmxlcycsICdGcnVpdHMnXTtcbiAgZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oW1xuICAgIFsnRnJ1aXRzJywgWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJ11dLFxuICAgIFsnVmVnZXRhYmxlcycsIFsnVG9tYXRvJywgJ1BvdGF0bycsICdPbmlvbiddXSxcbiAgICBbJ0FwcGxlJywgWydGdWppJywgJ01hY2ludG9zaCddXSxcbiAgICBbJ09uaW9uJywgWydZZWxsb3cnLCAnV2hpdGUnLCAnUHVycGxlJywgJ0dyZWVuJywgJ1NoYWxsb3QnLCAnU3dlZXQnLCAnUmVkJywgJ0xlZWsnXV0sXG4gIF0pO1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucm9vdExldmVsTm9kZXMubWFwKG5hbWUgPT4gdGhpcy5fZ2VuZXJhdGVOb2RlKG5hbWUpKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKiBFeHBhbmQgYSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBub3QgbG9hZGVkICovXG4gIGxvYWRNb3JlKGl0ZW06IHN0cmluZywgb25seUZpcnN0VGltZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVNYXAuaGFzKGl0ZW0pIHx8ICF0aGlzLmRhdGFNYXAuaGFzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubm9kZU1hcC5nZXQoaXRlbSkhO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5kYXRhTWFwLmdldChpdGVtKSE7XG4gICAgaWYgKG9ubHlGaXJzdFRpbWUgJiYgcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0NoaWxkcmVuTnVtYmVyID0gcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggKyB0aGlzLmJhdGNoTnVtYmVyO1xuICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4uc2xpY2UoMCwgbmV3Q2hpbGRyZW5OdW1iZXIpLm1hcChuYW1lID0+IHRoaXMuX2dlbmVyYXRlTm9kZShuYW1lKSk7XG4gICAgaWYgKG5ld0NoaWxkcmVuTnVtYmVyIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAvLyBOZWVkIGEgbmV3IGxvYWQgbW9yZSBub2RlXG4gICAgICBub2Rlcy5wdXNoKG5ldyBMb2FkbW9yZU5vZGUoTE9BRF9NT1JFLCBmYWxzZSwgaXRlbSkpO1xuICAgIH1cblxuICAgIHBhcmVudC5jaGlsZHJlbkNoYW5nZS5uZXh0KG5vZGVzKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGFDaGFuZ2UudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVOb2RlKGl0ZW06IHN0cmluZyk6IExvYWRtb3JlTm9kZSB7XG4gICAgaWYgKHRoaXMubm9kZU1hcC5oYXMoaXRlbSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVNYXAuZ2V0KGl0ZW0pITtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IExvYWRtb3JlTm9kZShpdGVtLCB0aGlzLmRhdGFNYXAuaGFzKGl0ZW0pKTtcbiAgICB0aGlzLm5vZGVNYXAuc2V0KGl0ZW0sIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggcGFydGlhbGx5IGxvYWRlZCBkYXRhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1sb2FkbW9yZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1sb2FkbW9yZS1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtMb2FkbW9yZURhdGFiYXNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUxvYWRtb3JlRXhhbXBsZSB7XG4gIG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTG9hZG1vcmVGbGF0Tm9kZT4oKTtcbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxMb2FkbW9yZUZsYXROb2RlPjtcbiAgdHJlZUZsYXR0ZW5lcjogTWF0VHJlZUZsYXR0ZW5lcjxMb2FkbW9yZU5vZGUsIExvYWRtb3JlRmxhdE5vZGU+O1xuICAvLyBGbGF0IHRyZWUgZGF0YSBzb3VyY2VcbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPExvYWRtb3JlTm9kZSwgTG9hZG1vcmVGbGF0Tm9kZT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IExvYWRtb3JlRGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcihcbiAgICAgIHRoaXMudHJhbnNmb3JtZXIsXG4gICAgICB0aGlzLmdldExldmVsLFxuICAgICAgdGhpcy5pc0V4cGFuZGFibGUsXG4gICAgICB0aGlzLmdldENoaWxkcmVuLFxuICAgICk7XG5cbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxMb2FkbW9yZUZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBfZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICBfZGF0YWJhc2UuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogTG9hZG1vcmVOb2RlKTogT2JzZXJ2YWJsZTxMb2FkbW9yZU5vZGVbXT4gPT4gbm9kZS5jaGlsZHJlbkNoYW5nZTtcblxuICB0cmFuc2Zvcm1lciA9IChub2RlOiBMb2FkbW9yZU5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5vZGVNYXAuZ2V0KG5vZGUuaXRlbSk7XG5cbiAgICBpZiAoZXhpc3RpbmdOb2RlKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTG9hZG1vcmVGbGF0Tm9kZShcbiAgICAgIG5vZGUuaXRlbSxcbiAgICAgIGxldmVsLFxuICAgICAgbm9kZS5oYXNDaGlsZHJlbixcbiAgICAgIG5vZGUubG9hZE1vcmVQYXJlbnRJdGVtLFxuICAgICk7XG4gICAgdGhpcy5ub2RlTWFwLnNldChub2RlLml0ZW0sIG5ld05vZGUpO1xuICAgIHJldHVybiBuZXdOb2RlO1xuICB9O1xuXG4gIGdldExldmVsID0gKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpID0+IG5vZGUubGV2ZWw7XG5cbiAgaXNFeHBhbmRhYmxlID0gKG5vZGU6IExvYWRtb3JlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaXNMb2FkTW9yZSA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogTG9hZG1vcmVGbGF0Tm9kZSkgPT4gX25vZGVEYXRhLml0ZW0gPT09IExPQURfTU9SRTtcblxuICAvKiogTG9hZCBtb3JlIG5vZGVzIGZyb20gZGF0YSBzb3VyY2UgKi9cbiAgbG9hZE1vcmUoaXRlbTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2UubG9hZE1vcmUoaXRlbSk7XG4gIH1cblxuICBsb2FkQ2hpbGRyZW4obm9kZTogTG9hZG1vcmVGbGF0Tm9kZSkge1xuICAgIHRoaXMuX2RhdGFiYXNlLmxvYWRNb3JlKG5vZGUuaXRlbSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gTGVhZiBub2RlIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUuaXRlbX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8IS0tIGV4cGFuZGFibGUgbm9kZSAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUuaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwibG9hZENoaWxkcmVuKG5vZGUpXCJcbiAgICAgICAgICAgIG1hdFRyZWVOb2RlVG9nZ2xlPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLml0ZW19fVxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGlzTG9hZE1vcmVcIj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImxvYWRNb3JlKG5vZGUubG9hZE1vcmVQYXJlbnRJdGVtKVwiPlxuICAgICAgTG9hZCBtb3JlLi4uXG4gICAgPC9idXR0b24+XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=