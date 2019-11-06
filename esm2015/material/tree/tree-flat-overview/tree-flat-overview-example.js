/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function TreeFlatOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r21 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r21.name, " ");
} }
function TreeFlatOverviewExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r22 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r22.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.treeControl.isExpanded(node_r22) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r22.name, " ");
} }
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 * @record
 */
function FoodNode() { }
if (false) {
    /** @type {?} */
    FoodNode.prototype.name;
    /** @type {?|undefined} */
    FoodNode.prototype.children;
}
/** @type {?} */
const TREE_DATA = [
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
}
/**
 * \@title Tree with flat nodes
 */
export class TreeFlatOverviewExample {
    constructor() {
        this._transformer = (/**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        });
        this.treeControl = new FlatTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable));
        this.treeFlattener = new MatTreeFlattener(this._transformer, (/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => node.expandable);
        this.dataSource.data = TREE_DATA;
    }
}
TreeFlatOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-flat-overview-example',
                templateUrl: 'tree-flat-overview-example.html',
                styleUrls: ['tree-flat-overview-example.css'],
            },] },
];
/** @nocollapse */
TreeFlatOverviewExample.ctorParameters = () => [];
/** @nocollapse */ TreeFlatOverviewExample.ɵfac = function TreeFlatOverviewExample_Factory(t) { return new (t || TreeFlatOverviewExample)(); };
/** @nocollapse */ TreeFlatOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeFlatOverviewExample, selectors: [["tree-flat-overview-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeFlatOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeFlatOverviewExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeFlatOverviewExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3.MatIcon], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TreeFlatOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-flat-overview-example',
                templateUrl: 'tree-flat-overview-example.html',
                styleUrls: ['tree-flat-overview-example.css'],
            }]
    }], function () { return []; }, null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    TreeFlatOverviewExample.prototype._transformer;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.treeFlattener;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeFlatOverviewExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZmxhdC1vdmVydmlldy90cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1mbGF0LW92ZXJ2aWV3L3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7SUNBN0Usd0NBQ0U7SUFDQSw0QkFBMEM7SUFDMUMsWUFDRjtJQUFBLGlCQUFnQjs7O0lBRGQsZUFDRjtJQURFLDhDQUNGOzs7SUFFQSx3Q0FDRTtJQUFBLGlDQUVFO0lBQUEsbUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUztJQUNULFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFOTixlQUF5QztJQUF6Qyx1REFBeUM7SUFFN0MsZUFDRjtJQURFLDJHQUNGO0lBRUYsZUFDRjtJQURFLDhDQUNGOzs7Ozs7O0FEUkYsdUJBR0M7OztJQUZDLHdCQUFhOztJQUNiLDRCQUFzQjs7O01BR2xCLFNBQVMsR0FBZTtJQUM1QjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztTQUN0QjtLQUNGLEVBQUU7UUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztpQkFDMUI7YUFDRixFQUFFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7b0JBQ2xCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjs7Ozs7QUFHRCw4QkFJQzs7O0lBSEMscUNBQW9COztJQUNwQiwrQkFBYTs7SUFDYixnQ0FBYzs7Ozs7QUFXaEIsTUFBTSxPQUFPLHVCQUF1QjtJQWlCbEM7UUFoQlEsaUJBQVk7Ozs7O1FBQUcsQ0FBQyxJQUFjLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDdkQsT0FBTztnQkFDTCxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDdkQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQztRQUNKLENBQUMsRUFBQTtRQUVELGdCQUFXLEdBQUcsSUFBSSxlQUFlOzs7O1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUs7Ozs7UUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQztRQUVqRCxrQkFBYSxHQUFHLElBQUksZ0JBQWdCLENBQ2hDLElBQUksQ0FBQyxZQUFZOzs7O1FBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSzs7OztRQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQztRQUUzRixlQUFVLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQU03RSxhQUFROzs7OztRQUFHLENBQUMsQ0FBUyxFQUFFLElBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUM7UUFIL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7OEZBQ1ksdUJBQXVCOzREQUF2Qix1QkFBdUI7UUN4RHBDLG1DQUNFO1FBQ0EsNEZBQ0U7UUFLRiw0RkFDRTtRQVFKLGlCQUFXOztRQWpCRCwyQ0FBeUIsZ0NBQUE7UUFRbEIsZUFBeUM7UUFBekMsaURBQXlDOzttQ0RnRDdDLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7Ozs7SUFFQywrQ0FNQzs7SUFFRCw4Q0FDaUQ7O0lBRWpELGdEQUMyRjs7SUFFM0YsNkNBQTZFOztJQU03RSwyQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuXG4vKipcbiAqIEZvb2QgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuXG4gKiBFYWNoIG5vZGUgaGFzIGEgbmFtZSBhbmQgYW4gb3B0aW9uYSBsaXN0IG9mIGNoaWxkcmVuLlxuICovXG5pbnRlcmZhY2UgRm9vZE5vZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogRm9vZE5vZGVbXTtcbn1cblxuY29uc3QgVFJFRV9EQVRBOiBGb29kTm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZydWl0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge25hbWU6ICdBcHBsZSd9LFxuICAgICAge25hbWU6ICdCYW5hbmEnfSxcbiAgICAgIHtuYW1lOiAnRnJ1aXQgbG9vcHMnfSxcbiAgICBdXG4gIH0sIHtcbiAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7bmFtZTogJ0Jyb2Njb2xpJ30sXG4gICAgICAgICAge25hbWU6ICdCcnVzc2VsIHNwcm91dHMnfSxcbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnT3JhbmdlJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7bmFtZTogJ1B1bXBraW5zJ30sXG4gICAgICAgICAge25hbWU6ICdDYXJyb3RzJ30sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXTtcblxuLyoqIEZsYXQgbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5pbnRlcmZhY2UgRXhhbXBsZUZsYXROb2RlIHtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZmxhdCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUZsYXRPdmVydmlld0V4YW1wbGUge1xuICBwcml2YXRlIF90cmFuc2Zvcm1lciA9IChub2RlOiBGb29kTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBleHBhbmRhYmxlOiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwLFxuICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgbGV2ZWw6IGxldmVsLFxuICAgIH07XG4gIH1cblxuICB0cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RXhhbXBsZUZsYXROb2RlPihcbiAgICAgIG5vZGUgPT4gbm9kZS5sZXZlbCwgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUpO1xuXG4gIHRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcihcbiAgICAgIHRoaXMuX3RyYW5zZm9ybWVyLCBub2RlID0+IG5vZGUubGV2ZWwsIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlLCBub2RlID0+IG5vZGUuY2hpbGRyZW4pO1xuXG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBUUkVFX0RBVEE7XG4gIH1cblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7d2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5uYW1lXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=