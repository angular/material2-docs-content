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
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cdk-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function CdkTreeFlatExample_cdk_tree_node_2_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const node_r3 = restoredCtx.$implicit; return node_r3.isExpanded = !node_r3.isExpanded; });
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
    i0.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
} }
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
 * @title Tree with flat nodes
 */
export class CdkTreeFlatExample {
    constructor() {
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = (_, node) => node.expandable;
    }
    getParentNode(node) {
        const nodeIndex = TREE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
                return TREE_DATA[i];
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
CdkTreeFlatExample.ɵfac = function CdkTreeFlatExample_Factory(t) { return new (t || CdkTreeFlatExample)(); };
CdkTreeFlatExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkTreeFlatExample, selectors: [["cdk-tree-flat-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", 1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"]], template: function CdkTreeFlatExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-tree", 0);
        i0.ɵɵtemplate(1, CdkTreeFlatExample_cdk_tree_node_1_Template, 3, 3, "cdk-tree-node", 1);
        i0.ɵɵtemplate(2, CdkTreeFlatExample_cdk_tree_node_2_Template, 5, 7, "cdk-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkTreeNode, i1.CdkTreeNodePadding, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon], styles: [".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTreeFlatExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-flat-example',
                templateUrl: 'cdk-tree-flat-example.html',
                styleUrls: ['cdk-tree-flat-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RyZWUvY2RrLXRyZWUtZmxhdC9jZGstdHJlZS1mbGF0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1mbGF0L2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQXRDLHdDQUV5QztJQUV2Qyw0QkFBMEM7SUFDMUMsWUFDRjtJQUFBLGlCQUFnQjs7OztJQUxELHlFQUFzRDtJQUluRSxlQUNGO0lBREUsNkNBQ0Y7Ozs7SUFFQSx3Q0FFeUM7SUFDdkMsaUNBR29FO0lBRDVELDZPQUE0QztJQUVsRCxtQ0FBc0M7SUFDcEMsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNGO0lBQUEsaUJBQWdCOzs7O0lBWEQseUVBQXNEO0lBSzNELGVBQTJEO0lBQTNELHVFQUEyRDtJQUYzRCxzREFBeUM7SUFJN0MsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDRjtJQURFLDZDQUNGOztBRGpCRixNQUFNLFNBQVMsR0FBc0I7SUFDbkM7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRTtRQUNELElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVCxFQUFFO1FBQ0QsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsYUFBYTtRQUNuQixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsQ0FBQztLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRTtRQUNELElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRTtRQUNELElBQUksRUFBRSxrQkFBa0I7UUFDeEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7S0FDVCxFQUFFO1FBQ0QsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsQ0FBQztLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7Q0FDRixDQUFDO0FBVUY7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQWtCO0lBTC9CO1FBTUUsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpELGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsSUFBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQXdCbEU7SUF0QkMsYUFBYSxDQUFDLElBQXFCO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQXFCO1FBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDdEIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztvRkE3QlUsa0JBQWtCO3FFQUFsQixrQkFBa0I7UUNyRS9CLG1DQUFnRTtRQUU5RCx1RkFNZ0I7UUFFaEIsdUZBWWdCO1FBQ2xCLGlCQUFXOztRQXZCRCwyQ0FBeUIsZ0NBQUE7UUFVUyxlQUFjO1FBQWQsaURBQWM7O3VGRDJEN0Msa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXJyYXlEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5jb25zdCBUUkVFX0RBVEE6IEV4YW1wbGVGbGF0Tm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZydWl0JyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAwLFxuICB9LCB7XG4gICAgbmFtZTogJ0FwcGxlJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSwge1xuICAgIG5hbWU6ICdCYW5hbmEnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAxLFxuICB9LCB7XG4gICAgbmFtZTogJ0ZydWl0IGxvb3BzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSwge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAwLFxuICB9LCB7XG4gICAgbmFtZTogJ0dyZWVuJyxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGxldmVsOiAxLFxuICB9LCB7XG4gICAgbmFtZTogJ0Jyb2Njb2xpJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSwge1xuICAgIG5hbWU6ICdCcnVzc2VscyBzcHJvdXRzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSwge1xuICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnUHVtcGtpbnMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LCB7XG4gICAgbmFtZTogJ0NhcnJvdHMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9XG5dO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmludGVyZmFjZSBFeGFtcGxlRmxhdE5vZGUge1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGlzRXhwYW5kZWQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZmxhdCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZS1mbGF0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10cmVlLWZsYXQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZUZsYXRFeGFtcGxlIHtcbiAgdHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPEV4YW1wbGVGbGF0Tm9kZT4oXG4gICAgICBub2RlID0+IG5vZGUubGV2ZWwsIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlKTtcblxuICBkYXRhU291cmNlID0gbmV3IEFycmF5RGF0YVNvdXJjZShUUkVFX0RBVEEpO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRXhhbXBsZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBFeGFtcGxlRmxhdE5vZGUpIHtcbiAgICBjb25zdCBub2RlSW5kZXggPSBUUkVFX0RBVEEuaW5kZXhPZihub2RlKTtcblxuICAgIGZvciAobGV0IGkgPSBub2RlSW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKFRSRUVfREFUQVtpXS5sZXZlbCA9PT0gbm9kZS5sZXZlbCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIFRSRUVfREFUQVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3VsZFJlbmRlcihub2RlOiBFeGFtcGxlRmxhdE5vZGUpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKG5vZGUpO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGlmICghcGFyZW50LmlzRXhwYW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKHBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCI8Y2RrLXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPGNkay10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBjZGtUcmVlTm9kZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2hvdWxkUmVuZGVyKG5vZGUpID8gJ2ZsZXgnIDogJ25vbmUnXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9jZGstdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPGNkay10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgY2RrVHJlZU5vZGVQYWRkaW5nXG4gICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInNob3VsZFJlbmRlcihub2RlKSA/ICdmbGV4JyA6ICdub25lJ1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjZGtUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLm5hbWVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm5vZGUuaXNFeHBhbmRlZCA9ICFub2RlLmlzRXhwYW5kZWRcIlxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwibm9kZS5leHBhbmRhYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9jZGstdHJlZS1ub2RlPlxuPC9jZGstdHJlZT5cbiJdfQ==