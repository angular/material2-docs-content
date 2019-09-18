(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/tree'), require('@angular/core'), require('@angular/material/icon'), require('@angular/cdk/collections')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/tree', ['exports', '@angular/cdk/tree', '@angular/core', '@angular/material/icon', '@angular/cdk/collections'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.tree = {}), global.ng.cdk.tree, global.ng.core, global.ng.material.icon, global.ng.cdk.collections));
}(this, function (exports, tree, core, icon, collections) { 'use strict';

    var TREE_DATA = [
        {
            name: 'Fruit',
            expandable: true,
            level: 0,
        }, {
            name: 'Apple',
            expandable: false,
            level: 1,
        }, {
            name: 'Banana',
            expandable: false,
            level: 1,
        }, {
            name: 'Fruit loops',
            expandable: false,
            level: 1,
        }, {
            name: 'Vegetables',
            expandable: true,
            level: 0,
        }, {
            name: 'Green',
            expandable: true,
            level: 1,
        }, {
            name: 'Broccoli',
            expandable: false,
            level: 2,
        }, {
            name: 'Brussel sprouts',
            expandable: false,
            level: 2,
        }, {
            name: 'Orange',
            expandable: true,
            level: 1,
        }, {
            name: 'Pumpkins',
            expandable: false,
            level: 2,
        }, {
            name: 'Carrots',
            expandable: false,
            level: 2,
        }
    ];
    /**
     * @title Tree with flat nodes
     */
    var CdkTreeFlatExample = /** @class */ (function () {
        function CdkTreeFlatExample() {
            this.treeControl = new tree.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA);
            this.hasChild = function (_, node) { return node.expandable; };
        }
        CdkTreeFlatExample.prototype.getParentNode = function (node) {
            var nodeIndex = TREE_DATA.indexOf(node);
            for (var i = nodeIndex - 1; i >= 0; i--) {
                if (TREE_DATA[i].level === node.level - 1) {
                    return TREE_DATA[i];
                }
            }
            return null;
        };
        CdkTreeFlatExample.prototype.shouldRender = function (node) {
            var parent = this.getParentNode(node);
            return !parent || parent.isExpanded;
        };
        CdkTreeFlatExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-tree-flat-example',
                        template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n            (click)=\"node.isExpanded = !node.isExpanded\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n",
                        styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"]
                    }] }
        ];
        return CdkTreeFlatExample;
    }());

    var TREE_DATA$1 = [
        {
            name: 'Fruit',
            children: [
                { name: 'Apple' },
                { name: 'Banana' },
                { name: 'Fruit loops' },
            ]
        }, {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [
                        { name: 'Broccoli' },
                        { name: 'Brussel sprouts' },
                    ]
                }, {
                    name: 'Orange',
                    children: [
                        { name: 'Pumpkins' },
                        { name: 'Carrots' },
                    ]
                },
            ]
        },
    ];
    /**
     * @title Tree with nested nodes
     */
    var CdkTreeNestedExample = /** @class */ (function () {
        function CdkTreeNestedExample() {
            this.treeControl = new tree.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA$1);
            this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        }
        CdkTreeNestedExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'cdk-tree-nested-example',
                        template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n",
                        styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"]
                    }] }
        ];
        return CdkTreeNestedExample;
    }());

    var EXAMPLES = [
        CdkTreeFlatExample,
        CdkTreeNestedExample,
    ];
    var CdkTreeExamplesModule = /** @class */ (function () {
        function CdkTreeExamplesModule() {
        }
        CdkTreeExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            tree.CdkTreeModule,
                            icon.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkTreeExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkTreeFlatExample = CdkTreeFlatExample;
    exports.CdkTreeNestedExample = CdkTreeNestedExample;
    exports.CdkTreeExamplesModule = CdkTreeExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-tree.umd.js.map
