/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function TreeNestedOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelementStart(1, "li", 4);
    i0.ɵɵelement(2, "button", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r35 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", node_r35.name, " ");
} }
function TreeNestedOverviewExample_mat_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-nested-tree-node");
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵelementStart(4, "mat-icon", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ul");
    i0.ɵɵelementContainer(8, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r36 = ctx.$implicit;
    const ctx_r34 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("aria-label", "toggle " + node_r36.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r34.treeControl.isExpanded(node_r36) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r36.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r34.treeControl.isExpanded(node_r36));
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
 * \@title Tree with nested nodes
 */
export class TreeNestedOverviewExample {
    constructor() {
        this.treeControl = new NestedTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.children));
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => !!node.children && node.children.length > 0);
        this.dataSource.data = TREE_DATA;
    }
}
TreeNestedOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            },] },
];
/** @nocollapse */
TreeNestedOverviewExample.ctorParameters = () => [];
/** @nocollapse */ TreeNestedOverviewExample.ɵfac = function TreeNestedOverviewExample_Factory(t) { return new (t || TreeNestedOverviewExample)(); };
/** @nocollapse */ TreeNestedOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeNestedOverviewExample, selectors: [["tree-nested-overview-example"]], decls: 3, vars: 3, consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["matTreeNodeOutlet", ""]], template: function TreeNestedOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeNestedOverviewExample_mat_tree_node_1_Template, 4, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeNestedOverviewExample_mat_nested_tree_node_2_Template, 9, 4, "mat-nested-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodeToggle, i2.MatButton, i1.MatNestedTreeNode, i3.MatIcon, i1.MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TreeNestedOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            }]
    }], function () { return []; }, null);
if (false) {
    /** @type {?} */
    TreeNestedOverviewExample.prototype.treeControl;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.dataSource;
    /** @type {?} */
    TreeNestedOverviewExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7SUNBN0Qsd0NBQ0U7SUFBQSw2QkFDRTtJQUNBLDRCQUEwQztJQUMxQyxZQUNGO0lBQUEsaUJBQUs7SUFDUCxpQkFBZ0I7OztJQUZaLGVBQ0Y7SUFERSw4Q0FDRjs7O0lBR0YsNENBQ0U7SUFBQSwwQkFDRTtJQUFBLDhCQUNFO0lBQUEsaUNBRUU7SUFBQSxtQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFTO0lBQ1QsWUFDRjtJQUFBLGlCQUFNO0lBQ04sMEJBQ0U7SUFBQSwyQkFBK0M7SUFDakQsaUJBQUs7SUFDUCxpQkFBSztJQUNQLGlCQUF1Qjs7OztJQVhULGVBQXlDO0lBQXpDLHVEQUF5QztJQUU3QyxlQUNGO0lBREUsMkdBQ0Y7SUFFRixlQUNGO0lBREUsOENBQ0Y7SUFDSSxlQUE4RDtJQUE5RCxtRkFBOEQ7Ozs7Ozs7QURieEUsdUJBR0M7OztJQUZDLHdCQUFhOztJQUNiLDRCQUFzQjs7O01BR2xCLFNBQVMsR0FBZTtJQUM1QjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztTQUN0QjtLQUNGLEVBQUU7UUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztpQkFDMUI7YUFDRixFQUFFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7b0JBQ2xCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjs7OztBQVVELE1BQU0sT0FBTyx5QkFBeUI7SUFJcEM7UUFIQSxnQkFBVyxHQUFHLElBQUksaUJBQWlCOzs7O1FBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7UUFDckUsZUFBVSxHQUFHLElBQUksdUJBQXVCLEVBQVksQ0FBQztRQU1yRCxhQUFROzs7OztRQUFHLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBSHBGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7Ozs7a0dBQ1kseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNqRHRDLG1DQUNFO1FBQ0EsOEZBQ0U7UUFPRiw0R0FDRTtRQWVKLGlCQUFXOztRQTFCRCwyQ0FBeUIsZ0NBQUE7UUFVWCxlQUEwQztRQUExQyxpREFBMEM7O21DRHVDckQseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7OztJQUVDLGdEQUFxRTs7SUFDckUsK0NBQXFEOztJQU1yRCw2Q0FBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05lc3RlZFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVOZXN0ZWREYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcblxuLyoqXG4gKiBGb29kIGRhdGEgd2l0aCBuZXN0ZWQgc3RydWN0dXJlLlxuICogRWFjaCBub2RlIGhhcyBhIG5hbWUgYW5kIGFuIG9wdGlvbmEgbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xuaW50ZXJmYWNlIEZvb2ROb2RlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEZvb2ROb2RlW107XG59XG5cbmNvbnN0IFRSRUVfREFUQTogRm9vZE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtuYW1lOiAnQXBwbGUnfSxcbiAgICAgIHtuYW1lOiAnQmFuYW5hJ30sXG4gICAgICB7bmFtZTogJ0ZydWl0IGxvb3BzJ30sXG4gICAgXVxuICB9LCB7XG4gICAgbmFtZTogJ1ZlZ2V0YWJsZXMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlbicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge25hbWU6ICdCcm9jY29saSd9LFxuICAgICAgICAgIHtuYW1lOiAnQnJ1c3NlbCBzcHJvdXRzJ30sXG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge25hbWU6ICdQdW1wa2lucyd9LFxuICAgICAgICAgIHtuYW1lOiAnQ2Fycm90cyd9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBuZXN0ZWQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUge1xuICB0cmVlQ29udHJvbCA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxGb29kTm9kZT4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZTxGb29kTm9kZT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFRSRUVfREFUQTtcbiAgfVxuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRm9vZE5vZGUpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiIGNsYXNzPVwiZXhhbXBsZS10cmVlXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlVG9nZ2xlPlxuICAgIDxsaSBjbGFzcz1cIm1hdC10cmVlLW5vZGVcIj5cbiAgICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAgICB7e25vZGUubmFtZX19XG4gICAgPC9saT5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPG1hdC1uZXN0ZWQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiPlxuICAgIDxsaT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtdHJlZS1ub2RlXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLm5hbWVcIj5cbiAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge3tub2RlLm5hbWV9fVxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgW2NsYXNzLmV4YW1wbGUtdHJlZS1pbnZpc2libGVdPVwiIXRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSlcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRUcmVlTm9kZU91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgPC9saT5cbiAgPC9tYXQtbmVzdGVkLXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=