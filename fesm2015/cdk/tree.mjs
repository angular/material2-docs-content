import * as i1 from '@angular/cdk/tree';
import { FlatTreeControl, NestedTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { ArrayDataSource } from '@angular/cdk/collections';

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
}
CdkTreeFlatExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeFlatExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkTreeFlatExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: CdkTreeFlatExample, selector: "cdk-tree-flat-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            (click)=\"node.isExpanded = !node.isExpanded\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], components: [{ type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "trackBy"], exportAs: ["cdkTree"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role"], exportAs: ["cdkTreeNode"] }, { type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeFlatExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-example', template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            (click)=\"node.isExpanded = !node.isExpanded\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
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
}
CdkTreeNestedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeNestedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkTreeNestedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: CdkTreeNestedExample, selector: "cdk-tree-nested-example", ngImport: i0, template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"], components: [{ type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "trackBy"], exportAs: ["cdkTree"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["cdkNestedTreeNode"] }, { type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeNestedExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-example', template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }] });

const EXAMPLES = [CdkTreeFlatExample, CdkTreeNestedExample];
class CdkTreeExamplesModule {
}
CdkTreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeExamplesModule, declarations: [CdkTreeFlatExample, CdkTreeNestedExample], imports: [CdkTreeModule, MatButtonModule, MatIconModule], exports: [CdkTreeFlatExample, CdkTreeNestedExample] });
CdkTreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeExamplesModule, imports: [[CdkTreeModule, MatButtonModule, MatIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkTreeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkTreeModule, MatButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkTreeExamplesModule, CdkTreeFlatExample, CdkTreeNestedExample };
//# sourceMappingURL=tree.mjs.map
