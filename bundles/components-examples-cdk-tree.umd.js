(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/tree'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/cdk/collections')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/tree', ['exports', '@angular/cdk/tree', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/cdk/collections'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.tree = {}), global.ng.cdk.tree, global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.cdk.collections));
}(this, (function (exports, i1, i0, i2, i3, collections) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    function CdkTreeFlatExample_cdk_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-tree-node", 3);
            i0__namespace.ɵɵelement(1, "button", 4);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("display", ctx_r0.shouldRender(node_r2) ? "flex" : "none");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r2.name, " ");
        }
    }
    function CdkTreeFlatExample_cdk_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "cdk-tree-node", 3);
            i0__namespace.ɵɵelementStart(1, "button", 5);
            i0__namespace.ɵɵlistener("click", function CdkTreeFlatExample_cdk_tree_node_2_Template_button_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var node_r3 = restoredCtx.$implicit; return node_r3.isExpanded = !node_r3.isExpanded; });
            i0__namespace.ɵɵelementStart(2, "mat-icon", 6);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("display", ctx_r1.shouldRender(node_r3) ? "flex" : "none");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵstyleProp("visibility", node_r3.expandable ? "visible" : "hidden");
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.name, " ");
        }
    }
    var TREE_DATA$1 = [
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
            name: 'Brussels sprouts',
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
            this.treeControl = new i1.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA$1);
            this.hasChild = function (_, node) { return node.expandable; };
        }
        CdkTreeFlatExample.prototype.getParentNode = function (node) {
            var nodeIndex = TREE_DATA$1.indexOf(node);
            for (var i = nodeIndex - 1; i >= 0; i--) {
                if (TREE_DATA$1[i].level === node.level - 1) {
                    return TREE_DATA$1[i];
                }
            }
            return null;
        };
        CdkTreeFlatExample.prototype.shouldRender = function (node) {
            var parent = this.getParentNode(node);
            while (parent) {
                if (!parent.isExpanded) {
                    return false;
                }
                parent = this.getParentNode(parent);
            }
            return true;
        };
        return CdkTreeFlatExample;
    }());
    CdkTreeFlatExample.ɵfac = function CdkTreeFlatExample_Factory(t) { return new (t || CdkTreeFlatExample)(); };
    CdkTreeFlatExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkTreeFlatExample, selectors: [["cdk-tree-flat-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", 1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"]], template: function CdkTreeFlatExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-tree", 0);
                i0__namespace.ɵɵtemplate(1, CdkTreeFlatExample_cdk_tree_node_1_Template, 3, 3, "cdk-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, CdkTreeFlatExample_cdk_tree_node_2_Template, 5, 7, "cdk-tree-node", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1__namespace.CdkTree, i1__namespace.CdkTreeNodeDef, i1__namespace.CdkTreeNode, i1__namespace.CdkTreeNodePadding, i2__namespace.MatButton, i1__namespace.CdkTreeNodeToggle, i3__namespace.MatIcon], styles: [".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTreeFlatExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-tree-flat-example', template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\"\n            (click)=\"node.isExpanded = !node.isExpanded\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
            }], null, null);
    })();

    function CdkTreeNestedExample_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-nested-tree-node", 3);
            i0__namespace.ɵɵelement(1, "button", 4);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r2.name, " ");
        }
    }
    function CdkTreeNestedExample_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-nested-tree-node", 3);
            i0__namespace.ɵɵelementStart(1, "button", 5);
            i0__namespace.ɵɵelementStart(2, "mat-icon", 6);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementStart(5, "div");
            i0__namespace.ɵɵelementContainer(6, 7);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.name, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵclassProp("example-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r3));
        }
    }
    var TREE_DATA = [
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
                        { name: 'Brussels sprouts' },
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
            this.treeControl = new i1.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA);
            this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        }
        return CdkTreeNestedExample;
    }());
    CdkTreeNestedExample.ɵfac = function CdkTreeNestedExample_Factory(t) { return new (t || CdkTreeNestedExample)(); };
    CdkTreeNestedExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkTreeNestedExample, selectors: [["cdk-tree-nested-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["class", "example-tree-node", 4, "cdkTreeNodeDef"], ["class", "example-tree-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["cdkTreeNodeOutlet", ""]], template: function CdkTreeNestedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-tree", 0);
                i0__namespace.ɵɵtemplate(1, CdkTreeNestedExample_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, CdkTreeNestedExample_cdk_nested_tree_node_2_Template, 7, 5, "cdk-nested-tree-node", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1__namespace.CdkTree, i1__namespace.CdkTreeNodeDef, i1__namespace.CdkNestedTreeNode, i2__namespace.MatButton, i1__namespace.CdkTreeNodeToggle, i3__namespace.MatIcon, i1__namespace.CdkTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTreeNestedExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-tree-nested-example', template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"] }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkTreeFlatExample,
        CdkTreeNestedExample,
    ];
    var CdkTreeExamplesModule = /** @class */ (function () {
        function CdkTreeExamplesModule() {
        }
        return CdkTreeExamplesModule;
    }());
    CdkTreeExamplesModule.ɵfac = function CdkTreeExamplesModule_Factory(t) { return new (t || CdkTreeExamplesModule)(); };
    CdkTreeExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkTreeExamplesModule });
    CdkTreeExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CdkTreeModule,
                i2.MatButtonModule,
                i3.MatIconModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTreeExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CdkTreeModule,
                            i2.MatButtonModule,
                            i3.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkTreeExamplesModule, { declarations: [CdkTreeFlatExample,
                CdkTreeNestedExample], imports: [i1.CdkTreeModule,
                i2.MatButtonModule,
                i3.MatIconModule], exports: [CdkTreeFlatExample,
                CdkTreeNestedExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkTreeExamplesModule = CdkTreeExamplesModule;
    exports.CdkTreeFlatExample = CdkTreeFlatExample;
    exports.CdkTreeNestedExample = CdkTreeNestedExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-tree.umd.js.map
