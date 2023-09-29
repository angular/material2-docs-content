import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import * as i1 from '@angular/cdk/tree';
import { FlatTreeControl, CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

const TREE_DATA$1 = [
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
    constructor() {
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.dataSource = new ArrayDataSource(TREE_DATA$1);
        this.hasChild = (_, node) => node.expandable;
    }
    getParentNode(node) {
        const nodeIndex = TREE_DATA$1.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA$1[i].level === node.level - 1) {
                return TREE_DATA$1[i];
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkTreeFlatExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: CdkTreeFlatExample, isStandalone: true, selector: "cdk-tree-flat-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            (click)=\"node.isExpanded = !node.isExpanded\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "trackBy"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkTreeFlatExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            (click)=\"node.isExpanded = !node.isExpanded\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }] });

const TREE_DATA = [
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
    constructor() {
        this.treeControl = new NestedTreeControl(node => node.children);
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkTreeNestedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: CdkTreeNestedExample, isStandalone: true, selector: "cdk-tree-nested-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["cdkNestedTreeNode"] }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "trackBy"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkTreeNestedExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkTreeFlatExample, CdkTreeNestedExample };
//# sourceMappingURL=tree.mjs.map
