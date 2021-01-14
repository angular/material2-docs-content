import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function TreeHarnessExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
} }
function TreeHarnessExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
} }
const FLAT_TREE_DATA = [
    {
        name: 'Flat Group 1',
        children: [
            { name: 'Flat Leaf 1.1' },
            { name: 'Flat Leaf 1.2' },
            { name: 'Flat Leaf 1.3' },
        ]
    }, {
        name: 'Flat Group 2',
        children: [
            {
                name: 'Flat Group 2.1',
                children: [
                    { name: 'Flat Leaf 2.1.1' },
                    { name: 'Flat Leaf 2.1.2' },
                    { name: 'Flat Leaf 2.1.3' },
                ]
            }
        ]
    },
];
/**
 * @title Testing with MatTreeHarness
 */
export class TreeHarnessExample {
    constructor() {
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = FLAT_TREE_DATA;
    }
}
TreeHarnessExample.ɵfac = function TreeHarnessExample_Factory(t) { return new (t || TreeHarnessExample)(); };
TreeHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeHarnessExample, selectors: [["tree-harness-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeHarnessExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeHarnessExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3.MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeHarnessExample, [{
        type: Component,
        args: [{
                selector: 'tree-harness-example',
                templateUrl: 'tree-harness-example.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtaGFybmVzcy90cmVlLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1oYXJuZXNzL3RyZWUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQ0E3RSx3Q0FDRTtJQUNBLDRCQUEwQztJQUMxQyxZQUNGO0lBQUEsaUJBQWdCOzs7SUFEZCxlQUNGO0lBREUsNkNBQ0Y7OztJQUVBLHdDQUNFO0lBQUEsaUNBRUU7SUFBQSxtQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFTO0lBQ1QsWUFDRjtJQUFBLGlCQUFnQjs7OztJQU5OLGVBQXlDO0lBQXpDLHNEQUF5QztJQUU3QyxlQUNGO0lBREUseUdBQ0Y7SUFFRixlQUNGO0lBREUsNkNBQ0Y7O0FEUEYsTUFBTSxjQUFjLEdBQVc7SUFDN0I7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUU7WUFDUixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDdkIsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ3ZCLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQztTQUN4QjtLQUNGLEVBQUU7UUFDRCxJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUM7b0JBQ3pCLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDO29CQUN6QixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztpQkFDMUI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBUUY7O0dBRUc7QUFLSCxNQUFNLE9BQU8sa0JBQWtCO0lBaUI3QjtRQWhCUSxpQkFBWSxHQUFHLENBQUMsSUFBVSxFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ25ELE9BQU87Z0JBQ0wsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3ZELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7UUFDSixDQUFDLENBQUE7UUFFRCxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakQsa0JBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0YsZUFBVSxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFNN0UsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFIL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7O29GQW5CVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQzdDL0IsbUNBQ0U7UUFDQSx1RkFJZ0I7UUFFaEIsdUZBUWdCO1FBQ2xCLGlCQUFXOztRQWpCRCwyQ0FBeUIsZ0NBQUE7UUFRUSxlQUFjO1FBQWQsaURBQWM7O3VGRHFDNUMsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsMkJBQTJCO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGbGF0VHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZUZsYXREYXRhU291cmNlLCBNYXRUcmVlRmxhdHRlbmVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcblxuaW50ZXJmYWNlIE5vZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogTm9kZVtdO1xufVxuXG5jb25zdCBGTEFUX1RSRUVfREFUQTogTm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZsYXQgR3JvdXAgMScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtuYW1lOiAnRmxhdCBMZWFmIDEuMSd9LFxuICAgICAge25hbWU6ICdGbGF0IExlYWYgMS4yJ30sXG4gICAgICB7bmFtZTogJ0ZsYXQgTGVhZiAxLjMnfSxcbiAgICBdXG4gIH0sIHtcbiAgICBuYW1lOiAnRmxhdCBHcm91cCAyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRmxhdCBHcm91cCAyLjEnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnRmxhdCBMZWFmIDIuMS4xJ30sXG4gICAgICAgICAge25hbWU6ICdGbGF0IExlYWYgMi4xLjInfSxcbiAgICAgICAgICB7bmFtZTogJ0ZsYXQgTGVhZiAyLjEuMyd9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuXTtcblxuaW50ZXJmYWNlIEV4YW1wbGVGbGF0Tm9kZSB7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFRyZWVIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUhhcm5lc3NFeGFtcGxlIHtcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZXIgPSAobm9kZTogTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBleHBhbmRhYmxlOiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwLFxuICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgbGV2ZWw6IGxldmVsLFxuICAgIH07XG4gIH1cblxuICB0cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RXhhbXBsZUZsYXROb2RlPihcbiAgICAgIG5vZGUgPT4gbm9kZS5sZXZlbCwgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUpO1xuXG4gIHRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcihcbiAgICAgIHRoaXMuX3RyYW5zZm9ybWVyLCBub2RlID0+IG5vZGUubGV2ZWwsIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlLCBub2RlID0+IG5vZGUuY2hpbGRyZW4pO1xuXG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBGTEFUX1RSRUVfREFUQTtcbiAgfVxuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRXhhbXBsZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTt3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLm5hbWVcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==