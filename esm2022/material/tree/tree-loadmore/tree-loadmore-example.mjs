/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, Injectable } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: LoadmoreDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: LoadmoreDatabase }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: LoadmoreDatabase, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: TreeLoadmoreExample, deps: [{ token: LoadmoreDatabase }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.3", type: TreeLoadmoreExample, isStandalone: true, selector: "tree-loadmore-example", providers: [LoadmoreDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\"\n    role=\"treeitem\" (click)=\"loadOnClick($event, node)\"\n    (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: TreeLoadmoreExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-loadmore-example', providers: [LoadmoreDatabase], standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\"\n    role=\"treeitem\" (click)=\"loadOnClick($event, node)\"\n    (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"] }]
        }], ctorParameters: () => [{ type: LoadmoreDatabase }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkbW9yZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdHJlZS90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlGLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVuRCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDOUIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRW5CLGtCQUFrQjtBQUNsQixNQUFNLE9BQU8sVUFBVTtJQUdyQixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRCxZQUNTLElBQVksRUFDWixjQUFjLEtBQUssRUFDbkIsU0FBd0IsSUFBSSxFQUM1QixhQUFhLEtBQUs7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFWM0IsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQVdwRCxDQUFDO0NBQ0w7QUFFRCxzREFBc0Q7QUFDdEQsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFDUyxJQUFZLEVBQ1osUUFBUSxDQUFDLEVBQ1QsYUFBYSxLQUFLLEVBQ2xCLFNBQXdCLElBQUksRUFDNUIsYUFBYSxLQUFLO1FBSmxCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFJO1FBQ1QsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQ3hCLENBQUM7Q0FDTDtBQUVELHVDQUF1QztBQUN2QyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFFcEI7OztHQUdHO0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUVFLCtCQUErQjtRQUMvQixVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFFdEMsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELG1CQUFtQjtRQUNuQixjQUFTLEdBQWEsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsYUFBUSxHQUFHLElBQUksR0FBRyxDQUFtQjtZQUNuQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdDO2dCQUNFLE9BQU87Z0JBQ1A7b0JBQ0UsTUFBTTtvQkFDTixVQUFVO29CQUNWLE1BQU07b0JBQ04sV0FBVztvQkFDWCxrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsUUFBUTtvQkFDUixjQUFjO29CQUNkLE9BQU87b0JBQ1AsU0FBUztvQkFDVCxVQUFVO2lCQUNYO2FBQ0Y7WUFDRCxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNyRixDQUFDLENBQUM7S0F1Q0o7SUFyQ0MsVUFBVTtRQUNSLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELFlBQVksQ0FBQyxJQUFZLEVBQUUsYUFBYSxHQUFHLEtBQUs7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN0RCxPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRTFDLElBQUksYUFBYSxJQUFJLE1BQU0sQ0FBQyxRQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2pELE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsUUFBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDOUQsTUFBTSxLQUFLLEdBQUcsUUFBUTthQUNuQixLQUFLLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDO2FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hDLDhCQUE4QjtZQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsU0FBUyxJQUFJLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyxhQUFhLENBQUMsSUFBWSxFQUFFLE1BQXFCO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUMvQixDQUFDO3FIQWxFVSxnQkFBZ0I7eUhBQWhCLGdCQUFnQjs7a0dBQWhCLGdCQUFnQjtrQkFENUIsVUFBVTs7QUFzRVg7O0dBRUc7QUFVSCxNQUFNLE9BQU8sbUJBQW1CO0lBTzlCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTi9DLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQTBCdEMsZ0JBQVcsR0FBRyxDQUFDLElBQWdCLEVBQTRCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxGLGdCQUFXLEdBQUcsQ0FBQyxJQUFnQixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ2hELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRCxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNqQixPQUFPLFlBQVksQ0FBQztZQUN0QixDQUFDO1lBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUVGLGFBQVEsR0FBRyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQyxpQkFBWSxHQUFHLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRW5ELGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFMUQsZUFBVSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQXZDMUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUN2QyxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7UUFFRixvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBVyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEYsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF3QkQsWUFBWSxDQUFDLElBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQseURBQXlEO0lBQ3pELFdBQVcsQ0FBQyxLQUFpQixFQUFFLElBQWM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLGNBQWMsQ0FBQyxLQUFvQixFQUFFLElBQWM7UUFDakQsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQztJQUNILENBQUM7SUFFTyxhQUFhLENBQUMsV0FBd0IsRUFBRSxJQUFjO1FBQzVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLDZGQUE2RjtZQUM3RixNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsc0JBQXNCLENBQUM7WUFFM0QsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6QyxNQUFNLGVBQWUsR0FBRyxlQUFlLEVBQUUsa0JBQWtCLElBQUksZUFBZSxDQUFDO1lBRS9FLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLGlCQUFpQjtnQkFDaEIsZUFBK0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7cUhBaEZVLG1CQUFtQjt5R0FBbkIsbUJBQW1CLG9FQUxuQixDQUFDLGdCQUFnQixDQUFDLDBCQ2pJL0IsNmlDQTBCQSx1akJEeUdZLGFBQWEsK3FCQUFFLGVBQWUsMklBQUUsYUFBYTs7a0dBRzVDLG1CQUFtQjtrQkFUL0IsU0FBUzsrQkFDRSx1QkFBdUIsYUFHdEIsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUNqQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxtQkFDdkMsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lciwgTWF0VHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge0VOVEVSLCBTUEFDRX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcblxuY29uc3QgTE9BRF9NT1JFID0gJ0xPQURfTU9SRSc7XG5sZXQgbG9hZE1vcmVJZCA9IDE7XG5cbi8qKiBOZXN0ZWQgbm9kZSAqL1xuZXhwb3J0IGNsYXNzIE5lc3RlZE5vZGUge1xuICBjaGlsZHJlbkNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TmVzdGVkTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IE5lc3RlZE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5DaGFuZ2UudmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBoYXNDaGlsZHJlbiA9IGZhbHNlLFxuICAgIHB1YmxpYyBwYXJlbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIHB1YmxpYyBpc0xvYWRNb3JlID0gZmFsc2UsXG4gICkge31cbn1cblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgRmxhdE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBsZXZlbCA9IDEsXG4gICAgcHVibGljIGV4cGFuZGFibGUgPSBmYWxzZSxcbiAgICBwdWJsaWMgcGFyZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBwdWJsaWMgaXNMb2FkTW9yZSA9IGZhbHNlLFxuICApIHt9XG59XG5cbi8qKiBOdW1iZXIgb2Ygbm9kZXMgbG9hZGVkIGF0IGEgdGltZSAqL1xuY29uc3QgYmF0Y2hTaXplID0gMztcblxuLyoqXG4gKiBBIGRhdGFiYXNlIHRoYXQgb25seSBsb2FkIHBhcnQgb2YgdGhlIGRhdGEgaW5pdGlhbGx5LiBBZnRlciB1c2VyIGNsaWNrcyBvbiB0aGUgYExvYWQgbW9yZWBcbiAqIGJ1dHRvbiwgbW9yZSBkYXRhIHdpbGwgYmUgbG9hZGVkLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZG1vcmVEYXRhYmFzZSB7XG4gIC8qKiBNYXAgb2Ygbm9kZSBuYW1lIHRvIG5vZGUgKi9cbiAgbm9kZXMgPSBuZXcgTWFwPHN0cmluZywgTmVzdGVkTm9kZT4oKTtcblxuICBkYXRhQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOZXN0ZWROb2RlW10+KFtdKTtcblxuICAvKiogRXhhbXBsZSBkYXRhICovXG4gIHJvb3ROb2Rlczogc3RyaW5nW10gPSBbJ1ZlZ2V0YWJsZXMnLCAnRnJ1aXRzJ107XG4gIGNoaWxkTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPihbXG4gICAgWydGcnVpdHMnLCBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnXV0sXG4gICAgWydWZWdldGFibGVzJywgWydUb21hdG8nLCAnUG90YXRvJywgJ09uaW9uJ11dLFxuICAgIFtcbiAgICAgICdBcHBsZScsXG4gICAgICBbXG4gICAgICAgICdHYWxhJyxcbiAgICAgICAgJ0JyYWVidXJuJyxcbiAgICAgICAgJ0Z1amknLFxuICAgICAgICAnTWFjaW50b3NoJyxcbiAgICAgICAgJ0dvbGRlbiBEZWxpY2lvdXMnLFxuICAgICAgICAnUmVkIERlbGljaW91cycsXG4gICAgICAgICdFbXBpcmUnLFxuICAgICAgICAnR3Jhbm55IFNtaXRoJyxcbiAgICAgICAgJ0NhbWVvJyxcbiAgICAgICAgJ0JhbGR3aW4nLFxuICAgICAgICAnSm9uYWdvbGQnLFxuICAgICAgXSxcbiAgICBdLFxuICAgIFsnT25pb24nLCBbJ1llbGxvdycsICdXaGl0ZScsICdQdXJwbGUnLCAnR3JlZW4nLCAnU2hhbGxvdCcsICdTd2VldCcsICdSZWQnLCAnTGVlayddXSxcbiAgXSk7XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yb290Tm9kZXMubWFwKG5hbWUgPT4gdGhpcy5fZ2VuZXJhdGVOb2RlKG5hbWUsIG51bGwpKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKiBFeHBhbmQgYSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBub3QgbG9hZGVkICovXG4gIGxvYWRDaGlsZHJlbihuYW1lOiBzdHJpbmcsIG9ubHlGaXJzdFRpbWUgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5ub2Rlcy5oYXMobmFtZSkgfHwgIXRoaXMuY2hpbGRNYXAuaGFzKG5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMubm9kZXMuZ2V0KG5hbWUpITtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRNYXAuZ2V0KG5hbWUpITtcblxuICAgIGlmIChvbmx5Rmlyc3RUaW1lICYmIHBhcmVudC5jaGlsZHJlbiEubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0NoaWxkcmVuTnVtYmVyID0gcGFyZW50LmNoaWxkcmVuIS5sZW5ndGggKyBiYXRjaFNpemU7XG4gICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlblxuICAgICAgLnNsaWNlKDAsIG5ld0NoaWxkcmVuTnVtYmVyKVxuICAgICAgLm1hcChuYW1lID0+IHRoaXMuX2dlbmVyYXRlTm9kZShuYW1lLCBwYXJlbnQubmFtZSkpO1xuICAgIGlmIChuZXdDaGlsZHJlbk51bWJlciA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgLy8gTmVlZCBhIG5ldyBcIkxvYWQgTW9yZVwiIG5vZGVcbiAgICAgIG5vZGVzLnB1c2gobmV3IE5lc3RlZE5vZGUoYCR7TE9BRF9NT1JFfS0ke2xvYWRNb3JlSWQrK31gLCBmYWxzZSwgbmFtZSwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIHBhcmVudC5jaGlsZHJlbkNoYW5nZS5uZXh0KG5vZGVzKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGFDaGFuZ2UudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVOb2RlKG5hbWU6IHN0cmluZywgcGFyZW50OiBzdHJpbmcgfCBudWxsKTogTmVzdGVkTm9kZSB7XG4gICAgaWYgKCF0aGlzLm5vZGVzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5ub2Rlcy5zZXQobmFtZSwgbmV3IE5lc3RlZE5vZGUobmFtZSwgdGhpcy5jaGlsZE1hcC5oYXMobmFtZSksIHBhcmVudCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5vZGVzLmdldChuYW1lKSE7XG4gIH1cbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIHBhcnRpYWxseSBsb2FkZWQgZGF0YVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWxvYWRtb3JlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtbG9hZG1vcmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICd0cmVlLWxvYWRtb3JlLWV4YW1wbGUuY3NzJyxcbiAgcHJvdmlkZXJzOiBbTG9hZG1vcmVEYXRhYmFzZV0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUxvYWRtb3JlRXhhbXBsZSB7XG4gIG5vZGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRmxhdE5vZGU+KCk7XG4gIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RmxhdE5vZGU+O1xuICB0cmVlRmxhdHRlbmVyOiBNYXRUcmVlRmxhdHRlbmVyPE5lc3RlZE5vZGUsIEZsYXROb2RlPjtcbiAgLy8gRmxhdCB0cmVlIGRhdGEgc291cmNlXG4gIGRhdGFTb3VyY2U6IE1hdFRyZWVGbGF0RGF0YVNvdXJjZTxOZXN0ZWROb2RlLCBGbGF0Tm9kZT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YWJhc2U6IExvYWRtb3JlRGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcihcbiAgICAgIHRoaXMudHJhbnNmb3JtZXIsXG4gICAgICB0aGlzLmdldExldmVsLFxuICAgICAgdGhpcy5pc0V4cGFuZGFibGUsXG4gICAgICB0aGlzLmdldENoaWxkcmVuLFxuICAgICk7XG5cbiAgICAvLyBUT0RPKCMyNzYyNik6IFJlbW92ZSB0cmVlQ29udHJvbC4gQWRvcHQgZWl0aGVyIGxldmVsQWNjZXNzb3Igb3IgY2hpbGRyZW5BY2Nlc3Nvci5cbiAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxGbGF0Tm9kZT4odGhpcy5nZXRMZXZlbCwgdGhpcy5pc0V4cGFuZGFibGUpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gICAgX2RhdGFiYXNlLmRhdGFDaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgX2RhdGFiYXNlLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGdldENoaWxkcmVuID0gKG5vZGU6IE5lc3RlZE5vZGUpOiBPYnNlcnZhYmxlPE5lc3RlZE5vZGVbXT4gPT4gbm9kZS5jaGlsZHJlbkNoYW5nZTtcblxuICB0cmFuc2Zvcm1lciA9IChub2RlOiBOZXN0ZWROb2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gdGhpcy5ub2RlTWFwLmdldChub2RlLm5hbWUpO1xuXG4gICAgaWYgKGV4aXN0aW5nTm9kZSkge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IEZsYXROb2RlKG5vZGUubmFtZSwgbGV2ZWwsIG5vZGUuaGFzQ2hpbGRyZW4sIG5vZGUucGFyZW50LCBub2RlLmlzTG9hZE1vcmUpO1xuICAgIHRoaXMubm9kZU1hcC5zZXQobm9kZS5uYW1lLCBuZXdOb2RlKTtcbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfTtcblxuICBnZXRMZXZlbCA9IChub2RlOiBGbGF0Tm9kZSkgPT4gbm9kZS5sZXZlbDtcblxuICBpc0V4cGFuZGFibGUgPSAobm9kZTogRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgaXNMb2FkTW9yZSA9IChfOiBudW1iZXIsIG5vZGU6IEZsYXROb2RlKSA9PiBub2RlLmlzTG9hZE1vcmU7XG5cbiAgbG9hZENoaWxkcmVuKG5vZGU6IEZsYXROb2RlKSB7XG4gICAgdGhpcy5fZGF0YWJhc2UubG9hZENoaWxkcmVuKG5vZGUubmFtZSwgdHJ1ZSk7XG4gIH1cblxuICAvKiogTG9hZCBtb3JlIG5vZGVzIHdoZW4gY2xpY2tpbmcgb24gXCJMb2FkIG1vcmVcIiBub2RlLiAqL1xuICBsb2FkT25DbGljayhldmVudDogTW91c2VFdmVudCwgbm9kZTogRmxhdE5vZGUpIHtcbiAgICB0aGlzLl9sb2FkU2libGluZ3MoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50LCBub2RlKTtcbiAgfVxuXG4gIC8qKiBMb2FkIG1vcmUgbm9kZXMgb24ga2V5Ym9hcmRwcmVzcyB3aGVuIGZvY3VzZWQgb24gXCJMb2FkIG1vcmVcIiBub2RlICovXG4gIGxvYWRPbktleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBub2RlOiBGbGF0Tm9kZSkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUiB8fCBldmVudC5rZXlDb2RlID09PSBTUEFDRSkge1xuICAgICAgdGhpcy5fbG9hZFNpYmxpbmdzKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCwgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZFNpYmxpbmdzKG5vZGVFbGVtZW50OiBIVE1MRWxlbWVudCwgbm9kZTogRmxhdE5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgIC8vIFN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBzaWJsaW5nIG9mIHRoZSBcIkxvYWQgTW9yZVwiIG5vZGUgYmVmb3JlIGl0IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBub2RlRWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAvLyBTeW5jaHJvbm91c2x5IGxvYWQgZGF0YS5cbiAgICAgIHRoaXMuX2RhdGFiYXNlLmxvYWRDaGlsZHJlbihub2RlLnBhcmVudCk7XG5cbiAgICAgIGNvbnN0IGZvY3VzRGVzaW5hdGlvbiA9IHByZXZpb3VzU2libGluZz8ubmV4dEVsZW1lbnRTaWJsaW5nIHx8IHByZXZpb3VzU2libGluZztcblxuICAgICAgaWYgKGZvY3VzRGVzaW5hdGlvbikge1xuICAgICAgICAvLyBSZXN0b3JlIGZvY3VzLlxuICAgICAgICAoZm9jdXNEZXNpbmF0aW9uIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBMZWFmIG5vZGUgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDwhLS0gZXhwYW5kYWJsZSBub2RlIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmcgbWF0VHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgICAgICAgKGV4cGFuZGVkQ2hhbmdlKT1cImxvYWRDaGlsZHJlbihub2RlKVwiIFtjZGtUcmVlTm9kZVR5cGVhaGVhZExhYmVsXT1cIm5vZGUubmFtZVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUubmFtZVwiXG4gICAgICAgICAgICBtYXRUcmVlTm9kZVRvZ2dsZT5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDxtYXQtdHJlZS1ub2RlIGNsYXNzPVwiZXhhbXBsZS1sb2FkLW1vcmVcIiAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaXNMb2FkTW9yZVwiXG4gICAgcm9sZT1cInRyZWVpdGVtXCIgKGNsaWNrKT1cImxvYWRPbkNsaWNrKCRldmVudCwgbm9kZSlcIlxuICAgIChrZXlkb3duKT1cImxvYWRPbktleXByZXNzKCRldmVudCwgbm9kZSlcIj5cbiAgICBMb2FkIG1vcmUgb2Yge3tub2RlLnBhcmVudH19Li4uXG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=