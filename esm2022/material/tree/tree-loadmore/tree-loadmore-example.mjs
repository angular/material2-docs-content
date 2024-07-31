/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, Injectable, inject } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const LOAD_MORE = 'LOAD_MORE';
let loadMoreId = 1;
/** Nested node */
export class NestedNode {
    get children() {
        return this.childrenChange.value;
    }
    constructor(name, hasChildren = false, parent = null, isLoadMore = false) {
        this.name = name;
        this.hasChildren = hasChildren;
        this.parent = parent;
        this.isLoadMore = isLoadMore;
        this.childrenChange = new BehaviorSubject([]);
    }
}
/** Flat node with expandable and level information */
export class FlatNode {
    constructor(name, level = 1, expandable = false, parent = null, isLoadMore = false) {
        this.name = name;
        this.level = level;
        this.expandable = expandable;
        this.parent = parent;
        this.isLoadMore = isLoadMore;
    }
}
/** Number of nodes loaded at a time */
const batchSize = 3;
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
export class LoadmoreDatabase {
    constructor() {
        /** Map of node name to node */
        this.nodes = new Map();
        this.dataChange = new BehaviorSubject([]);
        /** Example data */
        this.rootNodes = ['Vegetables', 'Fruits'];
        this.childMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            [
                'Apple',
                [
                    'Gala',
                    'Braeburn',
                    'Fuji',
                    'Macintosh',
                    'Golden Delicious',
                    'Red Delicious',
                    'Empire',
                    'Granny Smith',
                    'Cameo',
                    'Baldwin',
                    'Jonagold',
                ],
            ],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    initialize() {
        const data = this.rootNodes.map(name => this._generateNode(name, null));
        this.dataChange.next(data);
    }
    /** Expand a node whose children are not loaded */
    loadChildren(name, onlyFirstTime = false) {
        if (!this.nodes.has(name) || !this.childMap.has(name)) {
            return;
        }
        const parent = this.nodes.get(name);
        const children = this.childMap.get(name);
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        const newChildrenNumber = parent.children.length + batchSize;
        const nodes = children
            .slice(0, newChildrenNumber)
            .map(name => this._generateNode(name, parent.name));
        if (newChildrenNumber < children.length) {
            // Need a new "Load More" node
            nodes.push(new NestedNode(`${LOAD_MORE}-${loadMoreId++}`, false, name, true));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    }
    _generateNode(name, parent) {
        if (!this.nodes.has(name)) {
            this.nodes.set(name, new NestedNode(name, this.childMap.has(name), parent));
        }
        return this.nodes.get(name);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: LoadmoreDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: LoadmoreDatabase }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: LoadmoreDatabase, decorators: [{
            type: Injectable
        }] });
/**
 * @title Tree with partially loaded data
 */
export class TreeLoadmoreExample {
    constructor() {
        this._database = inject(LoadmoreDatabase);
        this.nodeMap = new Map();
        this.getChildren = (node) => node.childrenChange;
        this.transformer = (node, level) => {
            const existingNode = this.nodeMap.get(node.name);
            if (existingNode) {
                return existingNode;
            }
            const newNode = new FlatNode(node.name, level, node.hasChildren, node.parent, node.isLoadMore);
            this.nodeMap.set(node.name, newNode);
            return newNode;
        };
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, node) => node.expandable;
        this.isLoadMore = (_, node) => node.isLoadMore;
        const _database = this._database;
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        // TODO(#27626): Remove treeControl. Adopt either levelAccessor or childrenAccessor.
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
        _database.initialize();
    }
    loadChildren(node) {
        this._database.loadChildren(node.name, true);
    }
    /** Load more nodes when clicking on "Load more" node. */
    loadOnClick(event, node) {
        this._loadSiblings(event.target, node);
    }
    /** Load more nodes on keyboardpress when focused on "Load more" node */
    loadOnKeypress(event, node) {
        if (event.keyCode === ENTER || event.keyCode === SPACE) {
            this._loadSiblings(event.target, node);
        }
    }
    _loadSiblings(nodeElement, node) {
        if (node.parent) {
            // Store a reference to the sibling of the "Load More" node before it is removed from the DOM
            const previousSibling = nodeElement.previousElementSibling;
            // Synchronously load data.
            this._database.loadChildren(node.parent);
            const focusDesination = previousSibling?.nextElementSibling || previousSibling;
            if (focusDesination) {
                // Restore focus.
                focusDesination.focus();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: TreeLoadmoreExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: TreeLoadmoreExample, isStandalone: true, selector: "tree-loadmore-example", providers: [LoadmoreDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\"\n    role=\"treeitem\" (click)=\"loadOnClick($event, node)\"\n    (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: TreeLoadmoreExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-loadmore-example', providers: [LoadmoreDatabase], standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\"\n    role=\"treeitem\" (click)=\"loadOnClick($event, node)\"\n    (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RixPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFbkQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzlCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUVuQixrQkFBa0I7QUFDbEIsTUFBTSxPQUFPLFVBQVU7SUFHckIsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFDUyxJQUFZLEVBQ1osY0FBYyxLQUFLLEVBQ25CLFNBQXdCLElBQUksRUFD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RSxDQUFDO1lBQ2hCLDZGQUE2RjtZQUM3RixNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsc0JBQXNCLENBQUM7WUFFM0QsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6QyxNQUFNLGVBQWUsR0FBRyxlQUFlLEVBQUUsa0JBQWtCLElBQUksZUFBZSxDQUFDO1lBRS9FLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLGlCQUFpQjtnQkFDaEIsZUFBK0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7cUhBcEZVLG1CQUFtQjt5R0FBbkIsbUJBQW1CLG9FQUxuQixDQUFDLGdCQUFnQixDQUFDLDBCQ2pJL0IsNmlDQTBCQSx1akJEeUdZLGFBQWEsK3FCQUFFLGVBQWUsMklBQUUsYUFBYTs7a0dBRzVDLG1CQUFtQjtrQkFUL0IsU0FBUzsrQkFDRSx1QkFBdUIsYUFHdEIsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUNqQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxtQkFDdkMsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0YWJsZSwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyLCBNYXRUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7RU5URVIsIFNQQUNFfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuXG5jb25zdCBMT0FEX01PUkUgPSAnTE9BRF9NT1JFJztcbmxldCBsb2FkTW9yZUlkID0gMTtcblxuLyoqIE5lc3RlZCBub2RlICovXG5leHBvcnQgY2xhc3MgTmVzdGVkTm9kZSB7XG4gIGNoaWxkcmVuQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOZXN0ZWROb2RlW10+KFtdKTtcblxuICBnZXQgY2hpbGRyZW4oKTogTmVzdGVkTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbkNoYW5nZS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGhhc0NoaWxkcmVuID0gZmFsc2UsXG4gICAgcHVibGljIHBhcmVudDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgcHVibGljIGlzTG9hZE1vcmUgPSBmYWxzZSxcbiAgKSB7fVxufVxuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmV4cG9ydCBjbGFzcyBGbGF0Tm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGxldmVsID0gMSxcbiAgICBwdWJsaWMgZXhwYW5kYWJsZSA9IGZhbHNlLFxuICAgIHB1YmxpYyBwYXJlbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIHB1YmxpYyBpc0xvYWRNb3JlID0gZmFsc2UsXG4gICkge31cbn1cblxuLyoqIE51bWJlciBvZiBub2RlcyBsb2FkZWQgYXQgYSB0aW1lICovXG5jb25zdCBiYXRjaFNpemUgPSAzO1xuXG4vKipcbiAqIEEgZGF0YWJhc2UgdGhhdCBvbmx5IGxvYWQgcGFydCBvZiB0aGUgZGF0YSBpbml0aWFsbHkuIEFmdGVyIHVzZXIgY2xpY2tzIG9uIHRoZSBgTG9hZCBtb3JlYFxuICogYnV0dG9uLCBtb3JlIGRhdGEgd2lsbCBiZSBsb2FkZWQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkbW9yZURhdGFiYXNlIHtcbiAgLyoqIE1hcCBvZiBub2RlIG5hbWUgdG8gbm9kZSAqL1xuICBub2RlcyA9IG5ldyBNYXA8c3RyaW5nLCBOZXN0ZWROb2RlPigpO1xuXG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5lc3RlZE5vZGVbXT4oW10pO1xuXG4gIC8qKiBFeGFtcGxlIGRhdGEgKi9cbiAgcm9vdE5vZGVzOiBzdHJpbmdbXSA9IFsnVmVnZXRhYmxlcycsICdGcnVpdHMnXTtcbiAgY2hpbGRNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KFtcbiAgICBbJ0ZydWl0cycsIFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYSddXSxcbiAgICBbJ1ZlZ2V0YWJsZXMnLCBbJ1RvbWF0bycsICdQb3RhdG8nLCAnT25pb24nXV0sXG4gICAgW1xuICAgICAgJ0FwcGxlJyxcbiAgICAgIFtcbiAgICAgICAgJ0dhbGEnLFxuICAgICAgICAnQnJhZWJ1cm4nLFxuICAgICAgICAnRnVqaScsXG4gICAgICAgICdNYWNpbnRvc2gnLFxuICAgICAgICAnR29sZGVuIERlbGljaW91cycsXG4gICAgICAgICdSZWQgRGVsaWNpb3VzJyxcbiAgICAgICAgJ0VtcGlyZScsXG4gICAgICAgICdHcmFubnkgU21pdGgnLFxuICAgICAgICAnQ2FtZW8nLFxuICAgICAgICAnQmFsZHdpbicsXG4gICAgICAgICdKb25hZ29sZCcsXG4gICAgICBdLFxuICAgIF0sXG4gICAgWydPbmlvbicsIFsnWWVsbG93JywgJ1doaXRlJywgJ1B1cnBsZScsICdHcmVlbicsICdTaGFsbG90JywgJ1N3ZWV0JywgJ1JlZCcsICdMZWVrJ11dLFxuICBdKTtcblxuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJvb3ROb2Rlcy5tYXAobmFtZSA9PiB0aGlzLl9nZW5lcmF0ZU5vZGUobmFtZSwgbnVsbCkpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqIEV4cGFuZCBhIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIG5vdCBsb2FkZWQgKi9cbiAgbG9hZENoaWxkcmVuKG5hbWU6IHN0cmluZywgb25seUZpcnN0VGltZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhuYW1lKSB8fCAhdGhpcy5jaGlsZE1hcC5oYXMobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2Rlcy5nZXQobmFtZSkhO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZE1hcC5nZXQobmFtZSkhO1xuXG4gICAgaWYgKG9ubHlGaXJzdFRpbWUgJiYgcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Q2hpbGRyZW5OdW1iZXIgPSBwYXJlbnQuY2hpbGRyZW4hLmxlbmd0aCArIGJhdGNoU2l6ZTtcbiAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuXG4gICAgICAuc2xpY2UoMCwgbmV3Q2hpbGRyZW5OdW1iZXIpXG4gICAgICAubWFwKG5hbWUgPT4gdGhpcy5fZ2VuZXJhdGVOb2RlKG5hbWUsIHBhcmVudC5uYW1lKSk7XG4gICAgaWYgKG5ld0NoaWxkcmVuTnVtYmVyIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAvLyBOZWVkIGEgbmV3IFwiTG9hZCBNb3JlXCIgbm9kZVxuICAgICAgbm9kZXMucHVzaChuZXcgTmVzdGVkTm9kZShgJHtMT0FEX01PUkV9LSR7bG9hZE1vcmVJZCsrfWAsIGZhbHNlLCBuYW1lLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgcGFyZW50LmNoaWxkcmVuQ2hhbmdlLm5leHQobm9kZXMpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5uZXh0KHRoaXMuZGF0YUNoYW5nZS52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZU5vZGUobmFtZTogc3RyaW5nLCBwYXJlbnQ6IHN0cmluZyB8IG51bGwpOiBOZXN0ZWROb2RlIHtcbiAgICBpZiAoIXRoaXMubm9kZXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLm5vZGVzLnNldChuYW1lLCBuZXcgTmVzdGVkTm9kZShuYW1lLCB0aGlzLmNoaWxkTWFwLmhhcyhuYW1lKSwgcGFyZW50KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubm9kZXMuZ2V0KG5hbWUpITtcbiAgfVxufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggcGFydGlhbGx5IGxvYWRlZCBkYXRhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1sb2FkbW9yZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZS5jc3MnLFxuICBwcm92aWRlcnM6IFtMb2FkbW9yZURhdGFiYXNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRyZWVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTG9hZG1vcmVFeGFtcGxlIHtcbiAgcHJpdmF0ZSBfZGF0YWJhc2UgPSBpbmplY3QoTG9hZG1vcmVEYXRhYmFzZSk7XG5cbiAgbm9kZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBGbGF0Tm9kZT4oKTtcbiAgdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxGbGF0Tm9kZT47XG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8TmVzdGVkTm9kZSwgRmxhdE5vZGU+O1xuICAvLyBGbGF0IHRyZWUgZGF0YSBzb3VyY2VcbiAgZGF0YVNvdXJjZTogTWF0VHJlZUZsYXREYXRhU291cmNlPE5lc3RlZE5vZGUsIEZsYXROb2RlPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBfZGF0YWJhc2UgPSB0aGlzLl9kYXRhYmFzZTtcblxuICAgIHRoaXMudHJlZUZsYXR0ZW5lciA9IG5ldyBNYXRUcmVlRmxhdHRlbmVyKFxuICAgICAgdGhpcy50cmFuc2Zvcm1lcixcbiAgICAgIHRoaXMuZ2V0TGV2ZWwsXG4gICAgICB0aGlzLmlzRXhwYW5kYWJsZSxcbiAgICAgIHRoaXMuZ2V0Q2hpbGRyZW4sXG4gICAgKTtcblxuICAgIC8vIFRPRE8oIzI3NjI2KTogUmVtb3ZlIHRyZWVDb250cm9sLiBBZG9wdCBlaXRoZXIgbGV2ZWxBY2Nlc3NvciBvciBjaGlsZHJlbkFjY2Vzc29yLlxuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPEZsYXROb2RlPih0aGlzLmdldExldmVsLCB0aGlzLmlzRXhwYW5kYWJsZSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBfZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICBfZGF0YWJhc2UuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogTmVzdGVkTm9kZSk6IE9ic2VydmFibGU8TmVzdGVkTm9kZVtdPiA9PiBub2RlLmNoaWxkcmVuQ2hhbmdlO1xuXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IE5lc3RlZE5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLm5vZGVNYXAuZ2V0KG5vZGUubmFtZSk7XG5cbiAgICBpZiAoZXhpc3RpbmdOb2RlKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgRmxhdE5vZGUobm9kZS5uYW1lLCBsZXZlbCwgbm9kZS5oYXNDaGlsZHJlbiwgbm9kZS5wYXJlbnQsIG5vZGUuaXNMb2FkTW9yZSk7XG4gICAgdGhpcy5ub2RlTWFwLnNldChub2RlLm5hbWUsIG5ld05vZGUpO1xuICAgIHJldHVybiBuZXdOb2RlO1xuICB9O1xuXG4gIGdldExldmVsID0gKG5vZGU6IEZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBpc0xvYWRNb3JlID0gKF86IG51bWJlciwgbm9kZTogRmxhdE5vZGUpID0+IG5vZGUuaXNMb2FkTW9yZTtcblxuICBsb2FkQ2hpbGRyZW4obm9kZTogRmxhdE5vZGUpIHtcbiAgICB0aGlzLl9kYXRhYmFzZS5sb2FkQ2hpbGRyZW4obm9kZS5uYW1lLCB0cnVlKTtcbiAgfVxuXG4gIC8qKiBMb2FkIG1vcmUgbm9kZXMgd2hlbiBjbGlja2luZyBvbiBcIkxvYWQgbW9yZVwiIG5vZGUuICovXG4gIGxvYWRPbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBub2RlOiBGbGF0Tm9kZSkge1xuICAgIHRoaXMuX2xvYWRTaWJsaW5ncyhldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQsIG5vZGUpO1xuICB9XG5cbiAgLyoqIExvYWQgbW9yZSBub2RlcyBvbiBrZXlib2FyZHByZXNzIHdoZW4gZm9jdXNlZCBvbiBcIkxvYWQgbW9yZVwiIG5vZGUgKi9cbiAgbG9hZE9uS2V5cHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIG5vZGU6IEZsYXROb2RlKSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSIHx8IGV2ZW50LmtleUNvZGUgPT09IFNQQUNFKSB7XG4gICAgICB0aGlzLl9sb2FkU2libGluZ3MoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50LCBub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sb2FkU2libGluZ3Mobm9kZUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBub2RlOiBGbGF0Tm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudCkge1xuICAgICAgLy8gU3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIHNpYmxpbmcgb2YgdGhlIFwiTG9hZCBNb3JlXCIgbm9kZSBiZWZvcmUgaXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICAgIGNvbnN0IHByZXZpb3VzU2libGluZyA9IG5vZGVFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgIC8vIFN5bmNocm9ub3VzbHkgbG9hZCBkYXRhLlxuICAgICAgdGhpcy5fZGF0YWJhc2UubG9hZENoaWxkcmVuKG5vZGUucGFyZW50KTtcblxuICAgICAgY29uc3QgZm9jdXNEZXNpbmF0aW9uID0gcHJldmlvdXNTaWJsaW5nPy5uZXh0RWxlbWVudFNpYmxpbmcgfHwgcHJldmlvdXNTaWJsaW5nO1xuXG4gICAgICBpZiAoZm9jdXNEZXNpbmF0aW9uKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgZm9jdXMuXG4gICAgICAgIChmb2N1c0Rlc2luYXRpb24gYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIExlYWYgbm9kZSAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPCEtLSBleHBhbmRhYmxlIG5vZGUgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZyBtYXRUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgICAgICAoZXhwYW5kZWRDaGFuZ2UpPVwibG9hZENoaWxkcmVuKG5vZGUpXCIgW2Nka1RyZWVOb2RlVHlwZWFoZWFkTGFiZWxdPVwibm9kZS5uYW1lXCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5uYW1lXCJcbiAgICAgICAgICAgIG1hdFRyZWVOb2RlVG9nZ2xlPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgY2xhc3M9XCJleGFtcGxlLWxvYWQtbW9yZVwiICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBpc0xvYWRNb3JlXCJcbiAgICByb2xlPVwidHJlZWl0ZW1cIiAoY2xpY2spPVwibG9hZE9uQ2xpY2soJGV2ZW50LCBub2RlKVwiXG4gICAgKGtleWRvd24pPVwibG9hZE9uS2V5cHJlc3MoJGV2ZW50LCBub2RlKVwiPlxuICAgIExvYWQgbW9yZSBvZiB7e25vZGUucGFyZW50fX0uLi5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==