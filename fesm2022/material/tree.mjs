import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { signal, Injectable, inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i4 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/tree';
import { MatTreeModule, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material/tree';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER } from '@angular/cdk/a11y';

/** Flat node with expandable and level information */
class DynamicFlatNode {
    item;
    level;
    expandable;
    isLoading;
    constructor(item, level = 1, expandable = false, isLoading = signal(false)) {
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
class DynamicDatabase {
    dataMap = new Map([
        ['Fruits', ['Apple', 'Orange', 'Banana']],
        ['Vegetables', ['Tomato', 'Potato', 'Onion']],
        ['Apple', ['Fuji', 'Macintosh']],
        ['Onion', ['Yellow', 'White', 'Purple']],
    ]);
    rootLevelNodes = ['Fruits', 'Vegetables'];
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: DynamicDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: DynamicDatabase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: DynamicDatabase, decorators: [{
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
class DynamicDataSource {
    _treeControl;
    _database;
    dataChange = new BehaviorSubject([]);
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
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
        node.isLoading.set(true);
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
            node.isLoading.set(false);
        }, 1000);
    }
}
/**
 * @title Tree with dynamic data
 */
class TreeDynamicExample {
    constructor() {
        const database = inject(DynamicDatabase);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    treeControl;
    dataSource;
    getLevel = (node) => node.level;
    isExpandable = (node) => node.expandable;
    hasChild = (_, _nodeData) => _nodeData.expandable;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.0", type: TreeDynamicExample, isStandalone: true, selector: "tree-dynamic-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                [cdkTreeNodeTypeaheadLabel]=\"node.item\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    @if (node.isLoading()) {\n      <mat-progress-bar\n          mode=\"indeterminate\"\n          class=\"example-tree-progress-bar\"></mat-progress-bar>\n    }\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-dynamic-example', imports: [MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                [cdkTreeNodeTypeaheadLabel]=\"node.item\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    @if (node.isLoading()) {\n      <mat-progress-bar\n          mode=\"indeterminate\"\n          class=\"example-tree-progress-bar\"></mat-progress-bar>\n    }\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"] }]
        }], ctorParameters: () => [] });

const TREE_DATA$4 = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];
/**
 * @title Tree with flat nodes
 */
class TreeFlatOverviewExample {
    _transformer = (node, level) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
        };
    };
    treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
    treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    constructor() {
        this.dataSource.data = TREE_DATA$4;
    }
    hasChild = (_, node) => node.expandable;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeFlatOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: TreeFlatOverviewExample, isStandalone: true, selector: "tree-flat-overview-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeFlatOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-flat-overview-example', imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n" }]
        }], ctorParameters: () => [] });

const TREE_DATA$3 = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];
/**
 * @title Tree with flat nodes (childrenAccessor)
 */
class TreeFlatChildAccessorOverviewExample {
    dataSource = TREE_DATA$3;
    childrenAccessor = (node) => node.children ?? [];
    hasChild = (_, node) => !!node.children && node.children.length > 0;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeFlatChildAccessorOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: TreeFlatChildAccessorOverviewExample, isStandalone: true, selector: "tree-flat-child-accessor-overview-example", ngImport: i0, template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeFlatChildAccessorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-flat-child-accessor-overview-example', imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n" }]
        }] });

const FLAT_TREE_DATA = [
    {
        name: 'Flat Group 1',
        children: [{ name: 'Flat Leaf 1.1' }, { name: 'Flat Leaf 1.2' }, { name: 'Flat Leaf 1.3' }],
    },
    {
        name: 'Flat Group 2',
        children: [
            {
                name: 'Flat Group 2.1',
                children: [{ name: 'Flat Leaf 2.1.1' }, { name: 'Flat Leaf 2.1.2' }, { name: 'Flat Leaf 2.1.3' }],
            },
        ],
    },
];
/**
 * @title Testing with MatTreeHarness
 */
class TreeHarnessExample {
    _transformer = (node, level) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
        };
    };
    treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
    treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    constructor() {
        this.dataSource.data = FLAT_TREE_DATA;
    }
    hasChild = (_, node) => node.expandable;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: TreeHarnessExample, isStandalone: true, selector: "tree-harness-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-harness-example', imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n" }]
        }], ctorParameters: () => [] });

const LOAD_MORE = 'LOAD_MORE';
let loadMoreId = 1;
/** Nested node */
class NestedNode {
    name;
    hasChildren;
    parent;
    isLoadMore;
    childrenChange = new BehaviorSubject([]);
    get children() {
        return this.childrenChange.value;
    }
    constructor(name, hasChildren = false, parent = null, isLoadMore = false) {
        this.name = name;
        this.hasChildren = hasChildren;
        this.parent = parent;
        this.isLoadMore = isLoadMore;
    }
}
/** Flat node with expandable and level information */
class FlatNode {
    name;
    level;
    expandable;
    parent;
    isLoadMore;
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
class LoadmoreDatabase {
    /** Map of node name to node */
    nodes = new Map();
    dataChange = new BehaviorSubject([]);
    /** Example data */
    rootNodes = ['Vegetables', 'Fruits'];
    childMap = new Map([
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: LoadmoreDatabase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: LoadmoreDatabase });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: LoadmoreDatabase, decorators: [{
            type: Injectable
        }] });
/**
 * @title Tree with partially loaded data
 */
class TreeLoadmoreExample {
    _database = inject(LoadmoreDatabase);
    nodeMap = new Map();
    treeControl;
    treeFlattener;
    // Flat tree data source
    dataSource;
    constructor() {
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
    getChildren = (node) => node.childrenChange;
    transformer = (node, level) => {
        const existingNode = this.nodeMap.get(node.name);
        if (existingNode) {
            return existingNode;
        }
        const newNode = new FlatNode(node.name, level, node.hasChildren, node.parent, node.isLoadMore);
        this.nodeMap.set(node.name, newNode);
        return newNode;
    };
    getLevel = (node) => node.level;
    isExpandable = (node) => node.expandable;
    hasChild = (_, node) => node.expandable;
    isLoadMore = (_, node) => node.isLoadMore;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeLoadmoreExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: TreeLoadmoreExample, isStandalone: true, selector: "tree-loadmore-example", providers: [LoadmoreDatabase], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\"\n    role=\"treeitem\" (click)=\"loadOnClick($event, node)\"\n    (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeLoadmoreExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-loadmore-example', providers: [LoadmoreDatabase], imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding matTreeNodeToggle\n                 (expandedChange)=\"loadChildren(node)\" [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n\n  <mat-tree-node class=\"example-load-more\" *matTreeNodeDef=\"let node; when: isLoadMore\"\n    role=\"treeitem\" (click)=\"loadOnClick($event, node)\"\n    (keydown)=\"loadOnKeypress($event, node)\">\n    Load more of {{node.parent}}...\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-load-more {\n    border-radius: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    cursor: pointer;\n}\n.example-load-more:focus {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.12 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.12);\n}\n.example-load-more:hover {\n    /*\n      Display a focus state for the \"Load More\" button.\n      0.04 is a common value in Material Design\n    */\n    background: rgba(0, 0, 0, 0.04);\n}\n"] }]
        }], ctorParameters: () => [] });

const TREE_DATA$2 = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];
/**
 * @title Tree with nested nodes
 */
class TreeNestedOverviewExample {
    treeControl = new NestedTreeControl(node => node.children);
    dataSource = new MatTreeNestedDataSource();
    constructor() {
        this.dataSource.data = TREE_DATA$2;
    }
    hasChild = (_, node) => !!node.children && node.children.length > 0;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeNestedOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: TreeNestedOverviewExample, isStandalone: true, selector: "tree-nested-overview-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node\n      *matTreeNodeDef=\"let node; when: hasChild\"\n      matTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button mat-icon-button matTreeNodeToggle\n              [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the mat-icon-button width.  -->\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n        role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatNestedTreeNode, selector: "mat-nested-tree-node", inputs: ["matNestedTreeNode", "disabled", "tabIndex"], outputs: ["activation", "expandedChange"], exportAs: ["matNestedTreeNode"] }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNodeOutlet, selector: "[matTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeNestedOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-nested-overview-example', imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node\n      *matTreeNodeDef=\"let node; when: hasChild\"\n      matTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button mat-icon-button matTreeNodeToggle\n              [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the mat-icon-button width.  -->\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n        role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }], ctorParameters: () => [] });

const TREE_DATA$1 = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];
/**
 * @title Tree with nested nodes (childrenAccessor)
 */
class TreeNestedChildAccessorOverviewExample {
    childrenAccessor = (node) => node.children ?? [];
    dataSource = TREE_DATA$1;
    hasChild = (_, node) => !!node.children && node.children.length > 0;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeNestedChildAccessorOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: TreeNestedChildAccessorOverviewExample, isStandalone: true, selector: "tree-nested-child-accessor-overview-example", ngImport: i0, template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node\n      *matTreeNodeDef=\"let node; when: hasChild\"\n      matTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button mat-icon-button matTreeNodeToggle\n              [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the mat-icon-button width.  -->\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\"\n        role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatNestedTreeNode, selector: "mat-nested-tree-node", inputs: ["matNestedTreeNode", "disabled", "tabIndex"], outputs: ["activation", "expandedChange"], exportAs: ["matNestedTreeNode"] }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNodeOutlet, selector: "[matTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeNestedChildAccessorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-nested-child-accessor-overview-example', imports: [MatTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node\">\n    {{node.name}}\n  </mat-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node\n      *matTreeNodeDef=\"let node; when: hasChild\"\n      matTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\">\n    <div class=\"mat-tree-node\">\n      <button mat-icon-button matTreeNodeToggle\n              [attr.aria-label]=\"'Toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </div>\n    <!-- There is inline padding applied to this div using styles.\n        This padding value depends on the mat-icon-button width.  -->\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\"\n        role=\"group\">\n      <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-nested-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }] });

const TREE_DATA = [
    {
        name: 'Fruit',
        expandable: true,
        level: 0,
    },
    {
        name: 'Apple',
        expandable: false,
        level: 1,
    },
    {
        name: 'Banana',
        expandable: false,
        level: 1,
    },
    {
        name: 'Fruit loops',
        expandable: false,
        level: 1,
    },
    {
        name: 'Vegetables',
        expandable: true,
        level: 0,
    },
    {
        name: 'Green',
        expandable: true,
        level: 1,
    },
    {
        name: 'Broccoli',
        expandable: false,
        level: 2,
    },
    {
        name: 'Brussels sprouts',
        expandable: false,
        level: 2,
    },
    {
        name: 'Orange',
        expandable: true,
        level: 1,
    },
    {
        name: 'Pumpkins',
        expandable: false,
        level: 2,
    },
    {
        name: 'Carrots',
        expandable: false,
        level: 2,
    },
];
/**
 * @title Tree with flat nodes
 */
class TreeLegacyKeyboardInterfaceExample {
    treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
    dataSource = new ArrayDataSource(TREE_DATA);
    hasChild = (_, node) => node.expandable;
    getParentNode(node) {
        const nodeIndex = TREE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
                return TREE_DATA[i];
            }
        }
        return null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeLegacyKeyboardInterfaceExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.0", type: TreeLegacyKeyboardInterfaceExample, isStandalone: true, selector: "tree-legacy-keyboard-interface-example", providers: [NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER], ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding\n                 isExpandable\n                 [isExpanded]=\"true\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["tabIndex", "disabled"], outputs: ["activation", "expandedChange"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatIconModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.0", ngImport: i0, type: TreeLegacyKeyboardInterfaceExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-legacy-keyboard-interface-example', imports: [MatTreeModule, MatButtonModule, MatIconModule], providers: [NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding\n                 isExpandable\n                 [isExpanded]=\"true\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TreeDynamicExample, TreeFlatChildAccessorOverviewExample, TreeFlatOverviewExample, TreeHarnessExample, TreeLegacyKeyboardInterfaceExample, TreeLoadmoreExample, TreeNestedChildAccessorOverviewExample, TreeNestedOverviewExample };
//# sourceMappingURL=tree.mjs.map
