/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/tree/cdk-tree-nested/cdk-tree-nested-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ArrayDataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function CdkTreeNestedExample_cdk_nested_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-nested-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
} }
function CdkTreeNestedExample_cdk_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-nested-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵelementContainer(6, 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r3));
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
 * \@title Tree with nested nodes
 */
let CdkTreeNestedExample = /** @class */ (() => {
    /**
     * \@title Tree with nested nodes
     */
    class CdkTreeNestedExample {
        constructor() {
            this.treeControl = new NestedTreeControl((/**
             * @param {?} node
             * @return {?}
             */
            node => node.children));
            this.dataSource = new ArrayDataSource(TREE_DATA);
            this.hasChild = (/**
             * @param {?} _
             * @param {?} node
             * @return {?}
             */
            (_, node) => !!node.children && node.children.length > 0);
        }
    }
    CdkTreeNestedExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-tree-nested-example',
                    templateUrl: 'cdk-tree-nested-example.html',
                    styleUrls: ['cdk-tree-nested-example.css'],
                },] },
    ];
    /** @nocollapse */ CdkTreeNestedExample.ɵfac = function CdkTreeNestedExample_Factory(t) { return new (t || CdkTreeNestedExample)(); };
    /** @nocollapse */ CdkTreeNestedExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTreeNestedExample, selectors: [["cdk-tree-nested-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["class", "example-tree-node", 4, "cdkTreeNodeDef"], ["class", "example-tree-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["cdkTreeNodeOutlet", ""]], template: function CdkTreeNestedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-tree", 0);
            i0.ɵɵtemplate(1, CdkTreeNestedExample_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);
            i0.ɵɵtemplate(2, CdkTreeNestedExample_cdk_nested_tree_node_2_Template, 7, 5, "cdk-nested-tree-node", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkNestedTreeNode, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon, i1.CdkTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
    return CdkTreeNestedExample;
})();
export { CdkTreeNestedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTreeNestedExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-nested-example',
                templateUrl: 'cdk-tree-nested-example.html',
                styleUrls: ['cdk-tree-nested-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkTreeNestedExample.prototype.treeControl;
    /** @type {?} */
    CdkTreeNestedExample.prototype.dataSource;
    /** @type {?} */
    CdkTreeNestedExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7SUNBbEQsK0NBQ0U7SUFDQSw0QkFBMEM7SUFDMUMsWUFDRjtJQUFBLGlCQUF1Qjs7O0lBRHJCLGVBQ0Y7SUFERSw2Q0FDRjs7O0lBRUEsK0NBQ0U7SUFBQSxpQ0FDRTtJQUFBLG1DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNBO0lBQUEsMkJBQ0U7SUFBQSwyQkFBK0M7SUFDakQsaUJBQU07SUFDUixpQkFBdUI7Ozs7SUFURyxlQUF5QztJQUF6QyxzREFBeUM7SUFFN0QsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDQTtJQURBLDZDQUNBO0lBQUssZUFBOEQ7SUFBOUQsaUZBQThEOzs7Ozs7O0FEUHZFLHVCQUdDOzs7SUFGQyx3QkFBYTs7SUFDYiw0QkFBc0I7OztNQUdsQixTQUFTLEdBQWU7SUFDNUI7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRTtZQUNSLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztZQUNmLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUM7U0FDdEI7S0FDRixFQUFFO1FBQ0QsSUFBSSxFQUFFLFlBQVk7UUFDbEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFO29CQUNSLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztvQkFDbEIsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUM7aUJBQzNCO2FBQ0YsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0Y7Ozs7QUFLRDs7OztJQUFBLE1BS2Esb0JBQW9CO1FBTGpDO1lBTUUsZ0JBQVcsR0FBRyxJQUFJLGlCQUFpQjs7OztZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1lBQ3RFLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU1QyxhQUFROzs7OztZQUFHLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1NBQ3ZGOzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzs7K0dBQ1ksb0JBQW9CO2dGQUFwQixvQkFBb0I7WUNqRGpDLG1DQUNFO1lBQ0EsdUdBQ0U7WUFLRix1R0FDRTtZQVVKLGlCQUFXOztZQW5CRCwyQ0FBeUIsZ0NBQUE7WUFRWCxlQUEwQztZQUExQyxpREFBMEM7OytCRFJsRTtLQXNEQztTQUxZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUVDLDJDQUFzRTs7SUFDdEUsMENBQTRDOztJQUU1Qyx3Q0FBc0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FycmF5RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmVzdGVkVHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcblxuLyoqXG4gKiBGb29kIGRhdGEgd2l0aCBuZXN0ZWQgc3RydWN0dXJlLlxuICogRWFjaCBub2RlIGhhcyBhIG5hbWUgYW5kIGFuIG9wdGlvbmEgbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xuaW50ZXJmYWNlIEZvb2ROb2RlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEZvb2ROb2RlW107XG59XG5cbmNvbnN0IFRSRUVfREFUQTogRm9vZE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtuYW1lOiAnQXBwbGUnfSxcbiAgICAgIHtuYW1lOiAnQmFuYW5hJ30sXG4gICAgICB7bmFtZTogJ0ZydWl0IGxvb3BzJ30sXG4gICAgXVxuICB9LCB7XG4gICAgbmFtZTogJ1ZlZ2V0YWJsZXMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlbicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge25hbWU6ICdCcm9jY29saSd9LFxuICAgICAgICAgIHtuYW1lOiAnQnJ1c3NlbHMgc3Byb3V0cyd9LFxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnUHVtcGtpbnMnfSxcbiAgICAgICAgICB7bmFtZTogJ0NhcnJvdHMnfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggbmVzdGVkIG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlTmVzdGVkRXhhbXBsZSB7XG4gIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPEZvb2ROb2RlPiAobm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBBcnJheURhdGFTb3VyY2UoVFJFRV9EQVRBKTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEZvb2ROb2RlKSA9PiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xufVxuIiwiPGNkay10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDxjZGstbmVzdGVkLXRyZWUtbm9kZSAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8IS0tIHVzZSBhIGRpc2FibGVkIGJ1dHRvbiB0byBwcm92aWRlIHBhZGRpbmcgZm9yIHRyZWUgbGVhZiAtLT5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvY2RrLW5lc3RlZC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8Y2RrLW5lc3RlZC10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5uYW1lXCIgY2RrVHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gICAgPGRpdiBbY2xhc3MuZXhhbXBsZS10cmVlLWludmlzaWJsZV09XCIhdHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtUcmVlTm9kZU91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9jZGstbmVzdGVkLXRyZWUtbm9kZT5cbjwvY2RrLXRyZWU+XG4iXX0=