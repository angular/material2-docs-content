/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/tree/cdk-tree-flat/cdk-tree-flat-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function CdkTreeFlatExample_cdk_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r0.shouldRender(node_r2) ? "flex" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
} }
function CdkTreeFlatExample_cdk_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function CdkTreeFlatExample_cdk_tree_node_2_Template_button_click_1_listener() { const node_r3 = ctx.$implicit; return node_r3.isExpanded = !node_r3.isExpanded; });
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r1.shouldRender(node_r3) ? "flex" : "none");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("visibility", node_r3.expandable ? "visible" : "hidden");
    i0.ɵɵattribute("aria-label", "toggle " + node_r3.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
} }
/** @type {?} */
const TREE_DATA = [
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
 * Flat node with expandable and level information
 * @record
 */
function ExampleFlatNode() { }
if (false) {
    /** @type {?} */
    ExampleFlatNode.prototype.expandable;
    /** @type {?} */
    ExampleFlatNode.prototype.name;
    /** @type {?} */
    ExampleFlatNode.prototype.level;
    /** @type {?|undefined} */
    ExampleFlatNode.prototype.isExpanded;
}
/**
 * \@title Tree with flat nodes
 */
let CdkTreeFlatExample = /** @class */ (() => {
    /**
     * \@title Tree with flat nodes
     */
    class CdkTreeFlatExample {
        constructor() {
            this.treeControl = new FlatTreeControl((/**
             * @param {?} node
             * @return {?}
             */
            node => node.level), (/**
             * @param {?} node
             * @return {?}
             */
            node => node.expandable));
            this.dataSource = new ArrayDataSource(TREE_DATA);
            this.hasChild = (/**
             * @param {?} _
             * @param {?} node
             * @return {?}
             */
            (_, node) => node.expandable);
        }
        /**
         * @param {?} node
         * @return {?}
         */
        getParentNode(node) {
            /** @type {?} */
            const nodeIndex = TREE_DATA.indexOf(node);
            for (let i = nodeIndex - 1; i >= 0; i--) {
                if (TREE_DATA[i].level === node.level - 1) {
                    return TREE_DATA[i];
                }
            }
            return null;
        }
        /**
         * @param {?} node
         * @return {?}
         */
        shouldRender(node) {
            /** @type {?} */
            const parent = this.getParentNode(node);
            return !parent || parent.isExpanded;
        }
    }
    CdkTreeFlatExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-tree-flat-example',
                    templateUrl: 'cdk-tree-flat-example.html',
                    styleUrls: ['cdk-tree-flat-example.css'],
                },] },
    ];
    /** @nocollapse */ CdkTreeFlatExample.ɵfac = function CdkTreeFlatExample_Factory(t) { return new (t || CdkTreeFlatExample)(); };
    /** @nocollapse */ CdkTreeFlatExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTreeFlatExample, selectors: [["cdk-tree-flat-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", 1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"]], template: function CdkTreeFlatExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-tree", 0);
            i0.ɵɵtemplate(1, CdkTreeFlatExample_cdk_tree_node_1_Template, 3, 3, "cdk-tree-node", 1);
            i0.ɵɵtemplate(2, CdkTreeFlatExample_cdk_tree_node_2_Template, 5, 7, "cdk-tree-node", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkTreeNode, i1.CdkTreeNodePadding, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon], styles: [".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"] });
    return CdkTreeFlatExample;
})();
export { CdkTreeFlatExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTreeFlatExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-flat-example',
                templateUrl: 'cdk-tree-flat-example.html',
                styleUrls: ['cdk-tree-flat-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkTreeFlatExample.prototype.treeControl;
    /** @type {?} */
    CdkTreeFlatExample.prototype.dataSource;
    /** @type {?} */
    CdkTreeFlatExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RyZWUvY2RrLXRyZWUtZmxhdC9jZGstdHJlZS1mbGF0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1mbGF0L2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNBdEMsd0NBR0U7SUFDQSw0QkFBMEM7SUFDMUMsWUFDRjtJQUFBLGlCQUFnQjs7OztJQUxELHlFQUFzRDtJQUluRSxlQUNGO0lBREUsNkNBQ0Y7OztJQUVBLHdDQUdFO0lBQUEsaUNBSUU7SUFGTSwwTEFBNEM7SUFFbEQsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUztJQUNULFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFYRCx5RUFBc0Q7SUFLM0QsZUFBMkQ7SUFBM0QsdUVBQTJEO0lBRjNELDBEQUE2QztJQUlqRCxlQUNGO0lBREUseUdBQ0Y7SUFFRixlQUNGO0lBREUsNkNBQ0Y7OztNRGpCSSxTQUFTLEdBQXNCO0lBQ25DO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsQ0FBQztLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRTtRQUNELElBQUksRUFBRSxRQUFR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LHlDQUNpRDs7SUFFakQsd0NBQTRDOztJQUU1QyxzQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FycmF5RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuY29uc3QgVFJFRV9EQVRBOiBFeGFtcGxlRmxhdE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMCxcbiAgfSwge1xuICAgIG5hbWU6ICdBcHBsZScsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnQmFuYW5hJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSwge1xuICAgIG5hbWU6ICdGcnVpdCBsb29wcycsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMCxcbiAgfSwge1xuICAgIG5hbWU6ICdHcmVlbicsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMSxcbiAgfSwge1xuICAgIG5hbWU6ICdCcm9jY29saScsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDIsXG4gIH0sIHtcbiAgICBuYW1lOiAnQnJ1c3NlbHMgc3Byb3V0cycsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDIsXG4gIH0sIHtcbiAgICBuYW1lOiAnT3JhbmdlJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAxLFxuICB9LCB7XG4gICAgbmFtZTogJ1B1bXBraW5zJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSwge1xuICAgIG5hbWU6ICdDYXJyb3RzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfVxuXTtcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5pbnRlcmZhY2UgRXhhbXBsZUZsYXROb2RlIHtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBpc0V4cGFuZGVkPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGZsYXQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtZmxhdC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdHJlZS1mbGF0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstdHJlZS1mbGF0LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVGbGF0RXhhbXBsZSB7XG4gIHRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxFeGFtcGxlRmxhdE5vZGU+KFxuICAgICAgbm9kZSA9PiBub2RlLmxldmVsLCBub2RlID0+IG5vZGUuZXhwYW5kYWJsZSk7XG5cbiAgZGF0YVNvdXJjZSA9IG5ldyBBcnJheURhdGFTb3VyY2UoVFJFRV9EQVRBKTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xuXG4gIGdldFBhcmVudE5vZGUobm9kZTogRXhhbXBsZUZsYXROb2RlKSB7XG4gICAgY29uc3Qgbm9kZUluZGV4ID0gVFJFRV9EQVRBLmluZGV4T2Yobm9kZSk7XG5cbiAgICBmb3IgKGxldCBpID0gbm9kZUluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChUUkVFX0RBVEFbaV0ubGV2ZWwgPT09IG5vZGUubGV2ZWwgLSAxKSB7XG4gICAgICAgIHJldHVybiBUUkVFX0RBVEFbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzaG91bGRSZW5kZXIobm9kZTogRXhhbXBsZUZsYXROb2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKG5vZGUpO1xuICAgIHJldHVybiAhcGFyZW50IHx8IHBhcmVudC5pc0V4cGFuZGVkO1xuICB9XG59XG4iLCI8Y2RrLXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPGNkay10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBjZGtUcmVlTm9kZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2hvdWxkUmVuZGVyKG5vZGUpID8gJ2ZsZXgnIDogJ25vbmUnXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9jZGstdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPGNkay10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgY2RrVHJlZU5vZGVQYWRkaW5nXG4gICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInNob3VsZFJlbmRlcihub2RlKSA/ICdmbGV4JyA6ICdub25lJ1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjZGtUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLmZpbGVuYW1lXCJcbiAgICAgICAgICAgIChjbGljayk9XCJub2RlLmlzRXhwYW5kZWQgPSAhbm9kZS5pc0V4cGFuZGVkXCJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cIm5vZGUuZXhwYW5kYWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvY2RrLXRyZWUtbm9kZT5cbjwvY2RrLXRyZWU+XG4iXX0=