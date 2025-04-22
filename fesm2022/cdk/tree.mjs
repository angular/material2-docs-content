import { ArrayDataSource } from '@angular/cdk/collections';
import * as i1 from '@angular/cdk/tree';
import { CdkTree, CdkTreeModule, FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChild, QueryList } from '@angular/core';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { timer, BehaviorSubject, combineLatest, of, isObservable, Subject } from 'rxjs';
import { mapTo, map, shareReplay, delay, take } from 'rxjs/operators';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$2 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { coerceObservable } from '@angular/cdk/coercion/private';
import { TREE_KEY_MANAGER } from '@angular/cdk/a11y';
import { SPACE, ENTER, END, HOME, H, LEFT_ARROW, L, RIGHT_ARROW, K, UP_ARROW, J, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';

function flattenNodes$1(nodes) {
    const flattenedNodes = [];
    for (const node of nodes) {
        flattenedNodes.push(node);
        if (node.children) {
            flattenedNodes.push(...flattenNodes$1(node.children));
        }
    }
    return flattenedNodes;
}
/**
 * @title Tree with flat nodes
 */
class CdkTreeFlatChildrenAccessorExample {
    tree;
    childrenAccessor = (dataNode) => timer(100).pipe(mapTo(dataNode.children ?? []));
    dataSource = new ArrayDataSource(EXAMPLE_DATA$7);
    hasChild = (_, node) => !!node.children?.length;
    getParentNode(node) {
        for (const parent of flattenNodes$1(EXAMPLE_DATA$7)) {
            if (parent.children?.includes(node)) {
                return parent;
            }
        }
        return null;
    }
    shouldRender(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            if (!this.tree.isExpanded(parent)) {
                return false;
            }
            parent = this.getParentNode(parent);
        }
        return true;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeFlatChildrenAccessorExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CdkTreeFlatChildrenAccessorExample, isStandalone: true, selector: "cdk-tree-flat-children-accessor-example", viewQueries: [{ propertyName: "tree", first: true, predicate: CdkTree, descendants: true }], ngImport: i0, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 [isExpandable]=\"true\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeFlatChildrenAccessorExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-children-accessor-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 [isExpandable]=\"true\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }], propDecorators: { tree: [{
                type: ViewChild,
                args: [CdkTree]
            }] } });
const EXAMPLE_DATA$7 = [
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
class CdkTreeFlatLevelAccessorExample {
    tree;
    levelAccessor = (dataNode) => dataNode.level;
    dataSource = new ArrayDataSource(EXAMPLE_DATA$6);
    hasChild = (_, node) => node.expandable;
    getParentNode(node) {
        const nodeIndex = EXAMPLE_DATA$6.indexOf(node);
        // Determine the node's parent by finding the first preceding node that's
        // one level shallower.
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (EXAMPLE_DATA$6[i].level === node.level - 1) {
                return EXAMPLE_DATA$6[i];
            }
        }
        return null;
    }
    shouldRender(node) {
        // This node should render if it is a root node or if all of its ancestors are expanded.
        const parent = this.getParentNode(node);
        return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeFlatLevelAccessorExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CdkTreeFlatLevelAccessorExample, isStandalone: true, selector: "cdk-tree-flat-level-accessor-example", viewQueries: [{ propertyName: "tree", first: true, predicate: CdkTree, descendants: true }], ngImport: i0, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [levelAccessor]=\"levelAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 [isExpandable]=\"node.expandable\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeFlatLevelAccessorExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-level-accessor-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [levelAccessor]=\"levelAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 [isExpandable]=\"node.expandable\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }], propDecorators: { tree: [{
                type: ViewChild,
                args: [CdkTree]
            }] } });
const EXAMPLE_DATA$6 = [
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
class CdkTreeFlatExample {
    treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
    dataSource = new ArrayDataSource(EXAMPLE_DATA$5);
    hasChild = (_, node) => node.expandable;
    getParentNode(node) {
        const nodeIndex = EXAMPLE_DATA$5.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (EXAMPLE_DATA$5[i].level === node.level - 1) {
                return EXAMPLE_DATA$5[i];
            }
        }
        return null;
    }
    shouldRender(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            if (!parent.isExpanded) {
                return false;
            }
            parent = this.getParentNode(parent);
        }
        return true;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeFlatExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CdkTreeFlatExample, isStandalone: true, selector: "cdk-tree-flat-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeFlatExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });
const EXAMPLE_DATA$5 = [
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
 * @title Tree with nested nodes and level accessor
 */
class CdkTreeNestedLevelAccessorExample {
    tree;
    levelAccessor = (dataNode) => dataNode.level;
    dataSource = new ArrayDataSource(EXAMPLE_DATA$4);
    hasChild = (_, node) => node.expandable;
    getParentNode(node) {
        const nodeIndex = EXAMPLE_DATA$4.indexOf(node);
        // Determine the node's parent by finding the first preceding node that's
        // one level shallower.
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (EXAMPLE_DATA$4[i].level === node.level - 1) {
                return EXAMPLE_DATA$4[i];
            }
        }
        return null;
    }
    shouldRender(node) {
        // This node should render if it is a root node or if all of its ancestors are expanded.
        const parent = this.getParentNode(node);
        return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeNestedLevelAccessorExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CdkTreeNestedLevelAccessorExample, isStandalone: true, selector: "cdk-tree-nested-level-accessor-example", viewQueries: [{ propertyName: "tree", first: true, predicate: CdkTree, descendants: true }], ngImport: i0, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [levelAccessor]=\"levelAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node\n    #treeNode=\"cdkNestedTreeNode\"\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n    *cdkTreeNodeDef=\"let node; when: hasChild\"\n    isExpandable\n    class=\"example-tree-node\">\n    <button\n      mat-icon-button\n      class=\"example-toggle\"\n      [attr.aria-label]=\"'Toggle ' + node.name\"\n      cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n\n.example-toggle {\n  vertical-align: middle;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", exportAs: ["cdkNestedTreeNode"] }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeNestedLevelAccessorExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-level-accessor-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [levelAccessor]=\"levelAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node\n    #treeNode=\"cdkNestedTreeNode\"\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n    *cdkTreeNodeDef=\"let node; when: hasChild\"\n    isExpandable\n    class=\"example-tree-node\">\n    <button\n      mat-icon-button\n      class=\"example-toggle\"\n      [attr.aria-label]=\"'Toggle ' + node.name\"\n      cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n\n.example-toggle {\n  vertical-align: middle;\n}\n"] }]
        }], propDecorators: { tree: [{
                type: ViewChild,
                args: [CdkTree]
            }] } });
const EXAMPLE_DATA$4 = [
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

function flattenNodes(nodes) {
    const flattenedNodes = [];
    for (const node of nodes) {
        flattenedNodes.push(node);
        if (node.children) {
            flattenedNodes.push(...flattenNodes(node.children));
        }
    }
    return flattenedNodes;
}
/**
 * @title Tree with nested nodes using childAccessor
 */
class CdkTreeNestedChildrenAccessorExample {
    tree;
    childrenAccessor = (dataNode) => dataNode.children ?? [];
    dataSource = new ArrayDataSource(EXAMPLE_DATA$3);
    hasChild = (_, node) => !!node.children && node.children.length > 0;
    getParentNode(node) {
        for (const parent of flattenNodes(EXAMPLE_DATA$3)) {
            if (parent.children?.includes(node)) {
                return parent;
            }
        }
        return null;
    }
    shouldRender(node) {
        // This node should render if it is a root node or if all of its ancestors are expanded.
        const parent = this.getParentNode(node);
        return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeNestedChildrenAccessorExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CdkTreeNestedChildrenAccessorExample, isStandalone: true, selector: "cdk-tree-nested-children-accessor-example", viewQueries: [{ propertyName: "tree", first: true, predicate: CdkTree, descendants: true }], ngImport: i0, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n    *cdkTreeNodeDef=\"let node; when: hasChild\"\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n    isExpandable\n    class=\"example-tree-node\">\n    <button\n      mat-icon-button\n      class=\"example-toggle\"\n      [attr.aria-label]=\"'Toggle ' + node.name\"\n      cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n\n.example-toggle {\n  vertical-align: middle;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", exportAs: ["cdkNestedTreeNode"] }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeNestedChildrenAccessorExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-children-accessor-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n    *cdkTreeNodeDef=\"let node; when: hasChild\"\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n    isExpandable\n    class=\"example-tree-node\">\n    <button\n      mat-icon-button\n      class=\"example-toggle\"\n      [attr.aria-label]=\"'Toggle ' + node.name\"\n      cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n\n.example-toggle {\n  vertical-align: middle;\n}\n"] }]
        }], propDecorators: { tree: [{
                type: ViewChild,
                args: [CdkTree]
            }] } });
const EXAMPLE_DATA$3 = [
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
class CdkTreeNestedExample {
    treeControl = new NestedTreeControl(node => node.children);
    dataSource = new ArrayDataSource(EXAMPLE_DATA$2);
    hasChild = (_, node) => !!node.children && node.children.length > 0;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeNestedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CdkTreeNestedExample, isStandalone: true, selector: "cdk-tree-nested-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n    *cdkTreeNodeDef=\"let node; when: hasChild\"\n    isExpandable\n    class=\"example-tree-node\">\n    <button\n      mat-icon-button\n      class=\"example-toggle\"\n      [attr.aria-label]=\"'Toggle ' + node.name\"\n      cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n\n.example-toggle {\n  vertical-align: middle;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", exportAs: ["cdkNestedTreeNode"] }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeNestedExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n    [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n    *cdkTreeNodeDef=\"let node; when: hasChild\"\n    isExpandable\n    class=\"example-tree-node\">\n    <button\n      mat-icon-button\n      class=\"example-toggle\"\n      [attr.aria-label]=\"'Toggle ' + node.name\"\n      cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n\n.example-toggle {\n  vertical-align: middle;\n}\n"] }]
        }] });
const EXAMPLE_DATA$2 = [
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

class FakeDataBackend {
    _getRandomDelayTime() {
        // anywhere from 100 to 500ms.
        return Math.floor(Math.random() * 400) + 100;
    }
    getChildren(id) {
        // first, find the specified ID in our tree
        const item = EXAMPLE_DATA$1.get(id);
        const children = item?.children ?? [];
        return of(children.map(childId => EXAMPLE_DATA$1.get(childId))).pipe(delay(this._getRandomDelayTime()));
    }
    getRoots() {
        return of([...EXAMPLE_DATA$1.values()].filter(datum => !datum.parent)).pipe(delay(this._getRandomDelayTime()));
    }
}
class TransformedData {
    raw;
    constructor(raw) {
        this.raw = raw;
    }
    areChildrenLoading() {
        return this.raw.childrenLoading === 'LOADING';
    }
    isExpandable() {
        return ((this.raw.childrenLoading === 'INIT' || this.raw.childrenLoading === 'LOADED') &&
            !!this.raw.childrenIds?.length);
    }
    isLeaf() {
        return !this.isExpandable() && !this.areChildrenLoading();
    }
}
class ComplexDataStore {
    _backend = new FakeDataBackend();
    _state = new BehaviorSubject({
        rootIds: [],
        rootsLoading: 'INIT',
        allData: new Map(),
        dataLoading: new Map(),
    });
    _rootIds = this.select(state => state.rootIds);
    _allData = this.select(state => state.allData);
    _loadingData = this.select(state => state.dataLoading);
    _rootsLoadingState = this.select(state => state.rootsLoading);
    areRootsLoading = this.select(this._rootIds, this._loadingData, this._rootsLoadingState, (rootIds, loading, rootsLoading) => rootsLoading !== 'LOADED' || rootIds.some(id => loading.get(id) !== 'LOADED'));
    roots = this.select(this.areRootsLoading, this._rootIds, this._allData, (rootsLoading, rootIds, data) => {
        if (rootsLoading) {
            return [];
        }
        return this._getDataByIds(rootIds, data);
    });
    getChildren(parentId) {
        return this.select(this._allData, this._loadingData, (data, loading) => {
            const parentData = data.get(parentId);
            if (parentData?.childrenLoading !== 'LOADED') {
                return [];
            }
            const childIds = parentData.childrenIds ?? [];
            if (childIds.some(id => loading.get(id) !== 'LOADED')) {
                return [];
            }
            return this._getDataByIds(childIds, data);
        });
    }
    loadRoots() {
        this._setRootsLoading();
        this._backend.getRoots().subscribe(roots => {
            this._setRoots(roots);
        });
    }
    loadChildren(parentId) {
        this._setChildrenLoading(parentId);
        this._backend.getChildren(parentId).subscribe(children => {
            this._addLoadedData(parentId, children);
        });
    }
    _setRootsLoading() {
        this._state.next({
            ...this._state.value,
            rootsLoading: 'LOADING',
        });
    }
    _setRoots(roots) {
        const currentState = this._state.value;
        this._state.next({
            ...currentState,
            rootIds: roots.map(root => root.id),
            rootsLoading: 'LOADED',
            ...this._addData(currentState, roots),
        });
    }
    _setChildrenLoading(parentId) {
        const currentState = this._state.value;
        const parentData = currentState.allData.get(parentId);
        this._state.next({
            ...currentState,
            allData: new Map([
                ...currentState.allData,
                ...(parentData ? [[parentId, { ...parentData, childrenLoading: 'LOADING' }]] : []),
            ]),
            dataLoading: new Map([
                ...currentState.dataLoading,
                ...(parentData?.childrenIds?.map(childId => [childId, 'LOADING']) ?? []),
            ]),
        });
    }
    _addLoadedData(parentId, childData) {
        const currentState = this._state.value;
        this._state.next({
            ...currentState,
            ...this._addData(currentState, childData, parentId),
        });
    }
    _addData({ allData, dataLoading }, data, parentId) {
        const parentData = parentId && allData.get(parentId);
        const allChildren = data.flatMap(datum => datum.children ?? []);
        return {
            allData: new Map([
                ...allData,
                ...data.map(datum => {
                    return [
                        datum.id,
                        {
                            id: datum.id,
                            name: datum.name,
                            parentId,
                            childrenIds: datum.children,
                            childrenLoading: 'INIT',
                        },
                    ];
                }),
                ...(parentData ? [[parentId, { ...parentData, childrenLoading: 'LOADED' }]] : []),
            ]),
            dataLoading: new Map([
                ...dataLoading,
                ...data.map(datum => [datum.id, 'LOADED']),
                ...allChildren.map(childId => [childId, 'INIT']),
            ]),
        };
    }
    _getDataByIds(ids, data) {
        return ids
            .map(id => data.get(id))
            .filter((item) => !!item)
            .map(datum => new TransformedData(datum));
    }
    select(...sourcesAndTransform) {
        const sources = sourcesAndTransform.slice(0, -1);
        const transformFn = sourcesAndTransform[sourcesAndTransform.length - 1];
        return combineLatest([...sources, this._state]).pipe(map(args => transformFn(...args)), shareReplay({ refCount: true, bufferSize: 1 }));
    }
}
/**
 * @title Complex example making use of the redux pattern.
 */
class CdkTreeComplexExample {
    _dataStore = new ComplexDataStore();
    areRootsLoading = this._dataStore.areRootsLoading;
    roots = this._dataStore.roots;
    getChildren = (node) => this._dataStore.getChildren(node.raw.id);
    trackBy = (index, node) => this.expansionKey(node);
    expansionKey = (node) => node.raw.id;
    ngOnInit() {
        this._dataStore.loadRoots();
    }
    onExpand(node, expanded) {
        if (expanded) {
            // Only perform a load on expansion.
            this._dataStore.loadChildren(node.raw.id);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeComplexExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.6", type: CdkTreeComplexExample, isStandalone: true, selector: "cdk-tree-complex-example", ngImport: i0, template: "@if (areRootsLoading | async) {\n  <mat-spinner></mat-spinner>\n} @else {\n  <cdk-tree\n      #tree\n      [dataSource]=\"roots\"\n      [childrenAccessor]=\"getChildren\"\n      [trackBy]=\"trackBy\"\n      [expansionKey]=\"expansionKey\">\n    <cdk-tree-node\n        *cdkTreeNodeDef=\"let node\"\n        cdkTreeNodePadding\n        [cdkTreeNodeTypeaheadLabel]=\"node.raw.name\"\n        [isExpandable]=\"node.isExpandable()\"\n        (expandedChange)=\"onExpand(node, $event)\">\n      <!-- Spinner when node is loading children; this replaces the expand button. -->\n      @if (node.areChildrenLoading()) {\n        <mat-spinner diameter=\"48\" mode=\"indeterminate\"></mat-spinner>\n      }\n\n      @if (!node.areChildrenLoading() && node.isExpandable()) {\n        <button\n            mat-icon-button\n            cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.raw.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n      }\n\n      <!-- Spacer for leaf nodes -->\n      @if (node.isLeaf()) {\n        <div class=\"toggle-spacer\"></div>\n      }\n\n      <span>{{node.raw.name}}</span>\n    </cdk-tree-node>\n  </cdk-tree>\n}\n", styles: ["cdk-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$2.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeComplexExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-complex-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule, CommonModule, MatProgressSpinnerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (areRootsLoading | async) {\n  <mat-spinner></mat-spinner>\n} @else {\n  <cdk-tree\n      #tree\n      [dataSource]=\"roots\"\n      [childrenAccessor]=\"getChildren\"\n      [trackBy]=\"trackBy\"\n      [expansionKey]=\"expansionKey\">\n    <cdk-tree-node\n        *cdkTreeNodeDef=\"let node\"\n        cdkTreeNodePadding\n        [cdkTreeNodeTypeaheadLabel]=\"node.raw.name\"\n        [isExpandable]=\"node.isExpandable()\"\n        (expandedChange)=\"onExpand(node, $event)\">\n      <!-- Spinner when node is loading children; this replaces the expand button. -->\n      @if (node.areChildrenLoading()) {\n        <mat-spinner diameter=\"48\" mode=\"indeterminate\"></mat-spinner>\n      }\n\n      @if (!node.areChildrenLoading() && node.isExpandable()) {\n        <button\n            mat-icon-button\n            cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.raw.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n      }\n\n      <!-- Spacer for leaf nodes -->\n      @if (node.isLeaf()) {\n        <div class=\"toggle-spacer\"></div>\n      }\n\n      <span>{{node.raw.name}}</span>\n    </cdk-tree-node>\n  </cdk-tree>\n}\n", styles: ["cdk-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });
const EXAMPLE_DATA$1 = new Map([
    {
        id: '1',
        name: 'Fruit',
        children: ['1-1', '1-2', '1-3'],
    },
    { id: '1-1', name: 'Apple', parent: '1' },
    { id: '1-2', name: 'Banana', parent: '1' },
    { id: '1-3', name: 'Fruit Loops', parent: '1' },
    {
        id: '2',
        name: 'Vegetables',
        children: ['2-1', '2-2'],
    },
    {
        id: '2-1',
        name: 'Green',
        parent: '2',
        children: ['2-1-1', '2-1-2'],
    },
    {
        id: '2-2',
        name: 'Orange',
        parent: '2',
        children: ['2-2-1', '2-2-2'],
    },
    { id: '2-1-1', name: 'Broccoli', parent: '2-1' },
    { id: '2-1-2', name: 'Brussel sprouts', parent: '2-1' },
    { id: '2-2-1', name: 'Pumpkins', parent: '2-2' },
    { id: '2-2-2', name: 'Carrots', parent: '2-2' },
].map(datum => [datum.id, datum]));

/**
 * This class manages keyboard events for trees. If you pass it a QueryList or other list of tree
 * items, it will set the active item, focus, handle expansion and typeahead correctly when
 * keyboard events occur.
 */
class VimTreeKeyManager {
    _activeItemIndex = -1;
    _activeItem = null;
    _items = [];
    _hasInitialFocused = false;
    _initialFocus() {
        if (this._hasInitialFocused) {
            return;
        }
        if (!this._items.length) {
            return;
        }
        this._focusFirstItem();
        this._hasInitialFocused = true;
    }
    // TreeKeyManagerOptions not implemented.
    constructor(items) {
        // We allow for the items to be an array or Observable because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (items instanceof QueryList) {
            this._items = items.toArray();
            items.changes.subscribe((newItems) => {
                this._items = newItems.toArray();
                this._updateActiveItemIndex(this._items);
                this._initialFocus();
            });
        }
        else if (isObservable(items)) {
            items.subscribe(newItems => {
                this._items = newItems;
                this._updateActiveItemIndex(newItems);
                this._initialFocus();
            });
        }
        else {
            this._items = items;
            this._initialFocus();
        }
    }
    destroy() {
        this.change.complete();
    }
    /** Stream that emits any time the focused item changes. */
    change = new Subject();
    /**
     * Handles a keyboard event on the tree.
     * @param event Keyboard event that represents the user interaction with the tree.
     */
    onKeydown(event) {
        const keyCode = event.keyCode;
        switch (keyCode) {
            case TAB:
                // Return early here, in order to allow Tab to actually tab out of the tree
                return;
            case DOWN_ARROW:
            case J:
                this._focusNextItem();
                break;
            case UP_ARROW:
            case K:
                this._focusPreviousItem();
                break;
            case RIGHT_ARROW:
            case L:
                this._expandCurrentItem();
                break;
            case LEFT_ARROW:
            case H:
                this._collapseCurrentItem();
                break;
            case HOME:
                this._focusFirstItem();
                break;
            case END:
                this._focusLastItem();
                break;
            case ENTER:
            case SPACE:
                this._activateCurrentItem();
                break;
        }
    }
    /** Index of the currently active item. */
    getActiveItemIndex() {
        return this._activeItemIndex;
    }
    /** The currently active item. */
    getActiveItem() {
        return this._activeItem;
    }
    focusItem(itemOrIndex, options = {}) {
        // Set default options
        options.emitChangeEvent ??= true;
        let index = typeof itemOrIndex === 'number'
            ? itemOrIndex
            : this._items.findIndex(item => item === itemOrIndex);
        if (index < 0 || index >= this._items.length) {
            return;
        }
        const activeItem = this._items[index];
        // If we're just setting the same item, don't re-call activate or focus
        if (this._activeItem !== null && activeItem === this._activeItem) {
            return;
        }
        this._activeItem = activeItem ?? null;
        this._activeItemIndex = index;
        if (options.emitChangeEvent) {
            // Emit to `change` stream as required by TreeKeyManagerStrategy interface.
            this.change.next(this._activeItem);
        }
        this._activeItem?.focus();
        this._activateCurrentItem();
    }
    _updateActiveItemIndex(newItems) {
        const activeItem = this._activeItem;
        if (activeItem) {
            const newIndex = newItems.findIndex(item => item === activeItem);
            if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                this._activeItemIndex = newIndex;
            }
        }
    }
    /** Focus the first available item. */
    _focusFirstItem() {
        this.focusItem(this._findNextAvailableItemIndex(-1));
    }
    /** Focus the last available item. */
    _focusLastItem() {
        this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
    }
    /** Focus the next available item. */
    _focusNextItem() {
        this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
    }
    /** Focus the previous available item. */
    _focusPreviousItem() {
        this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
    }
    //// Navigational methods
    _findNextAvailableItemIndex(startingIndex) {
        if (startingIndex + 1 < this._items.length) {
            return startingIndex + 1;
        }
        return startingIndex;
    }
    _findPreviousAvailableItemIndex(startingIndex) {
        if (startingIndex - 1 >= 0) {
            return startingIndex - 1;
        }
        return startingIndex;
    }
    /**
     * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
     */
    _collapseCurrentItem() {
        if (!this._activeItem) {
            return;
        }
        if (this._isCurrentItemExpanded()) {
            this._activeItem.collapse();
        }
        else {
            const parent = this._activeItem.getParent();
            if (!parent) {
                return;
            }
            this.focusItem(parent);
        }
    }
    /**
     * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
     */
    _expandCurrentItem() {
        if (!this._activeItem) {
            return;
        }
        if (!this._isCurrentItemExpanded()) {
            this._activeItem.expand();
        }
        else {
            coerceObservable(this._activeItem.getChildren())
                .pipe(take(1))
                .subscribe(children => {
                const firstChild = children[0];
                if (!firstChild) {
                    return;
                }
                this.focusItem(firstChild);
            });
        }
    }
    _isCurrentItemExpanded() {
        if (!this._activeItem) {
            return false;
        }
        return typeof this._activeItem.isExpanded === 'boolean'
            ? this._activeItem.isExpanded
            : this._activeItem.isExpanded();
    }
    _activateCurrentItem() {
        this._activeItem?.activate();
    }
}
function VimTreeKeyManagerFactory() {
    return items => new VimTreeKeyManager(items);
}
const VIM_TREE_KEY_MANAGER_PROVIDER = {
    provide: TREE_KEY_MANAGER,
    useFactory: VimTreeKeyManagerFactory,
};
/**
 * @title Tree with vim keyboard commands.
 */
class CdkTreeCustomKeyManagerExample {
    treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
    dataSource = new ArrayDataSource(EXAMPLE_DATA);
    hasChild = (_, node) => node.expandable;
    getParentNode(node) {
        const nodeIndex = EXAMPLE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (EXAMPLE_DATA[i].level === node.level - 1) {
                return EXAMPLE_DATA[i];
            }
        }
        return null;
    }
    shouldRender(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            if (!parent.isExpanded) {
                return false;
            }
            parent = this.getParentNode(parent);
        }
        return true;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeCustomKeyManagerExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CdkTreeCustomKeyManagerExample, isStandalone: true, selector: "cdk-tree-custom-key-manager-example", providers: [VIM_TREE_KEY_MANAGER_PROVIDER], ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CdkTreeCustomKeyManagerExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-custom-key-manager-example', imports: [CdkTreeModule, MatButtonModule, MatIconModule], providers: [VIM_TREE_KEY_MANAGER_PROVIDER], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 (expandedChange)=\"node.isExpanded = $event\"\n                 class=\"example-tree-node\"\n                 tabindex=\"0\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });
const EXAMPLE_DATA = [
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

export { CdkTreeComplexExample, CdkTreeCustomKeyManagerExample, CdkTreeFlatChildrenAccessorExample, CdkTreeFlatExample, CdkTreeFlatLevelAccessorExample, CdkTreeNestedChildrenAccessorExample, CdkTreeNestedExample, CdkTreeNestedLevelAccessorExample };
//# sourceMappingURL=tree.mjs.map
