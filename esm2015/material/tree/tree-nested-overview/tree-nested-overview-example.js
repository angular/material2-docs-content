import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function TreeNestedOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
} }
function TreeNestedOverviewExample_mat_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-nested-tree-node");
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "button", 5);
    i0.ɵɵelementStart(3, "mat-icon", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵelementContainer(7, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r3));
} }
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
 * @title Tree with nested nodes
 */
export class TreeNestedOverviewExample {
    constructor() {
        this.treeControl = new NestedTreeControl(node => node.children);
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
        this.dataSource.data = TREE_DATA;
    }
}
TreeNestedOverviewExample.ɵfac = function TreeNestedOverviewExample_Factory(t) { return new (t || TreeNestedOverviewExample)(); };
TreeNestedOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeNestedOverviewExample, selectors: [["tree-nested-overview-example"]], decls: 3, vars: 3, consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["role", "group"], ["matTreeNodeOutlet", ""]], template: function TreeNestedOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeNestedOverviewExample_mat_tree_node_1_Template, 2, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeNestedOverviewExample_mat_nested_tree_node_2_Template, 8, 5, "mat-nested-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodeToggle, i1.MatNestedTreeNode, i2.MatButton, i3.MatIcon, i1.MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n\n.example-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n\n.example-tree[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%]    > .mat-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeNestedOverviewExample, [{
        type: Component,
        args: [{
                selector: 'tree-nested-overview-example',
                templateUrl: 'tree-nested-overview-example.html',
                styleUrls: ['tree-nested-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQ0U3RCx3Q0FBNEQ7SUFDeEQsWUFDSjtJQUFBLGlCQUFnQjs7O0lBRFosZUFDSjtJQURJLDZDQUNKOzs7SUFFQSw0Q0FBaUU7SUFDN0QsOEJBQTJCO0lBQ3pCLGlDQUNrRDtJQUNoRCxtQ0FBc0M7SUFDcEMsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNGO0lBQUEsaUJBQU07SUFHTiw4QkFDaUI7SUFDZiwyQkFBK0M7SUFDbkQsaUJBQU07SUFDUixpQkFBdUI7Ozs7SUFiVCxlQUF5QztJQUF6QyxzREFBeUM7SUFFN0MsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDRjtJQURFLDZDQUNGO0lBR0ssZUFBOEQ7SUFBOUQsaUZBQThEOztBRFB6RSxNQUFNLFNBQVMsR0FBZTtJQUM1QjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztTQUN0QjtLQUNGLEVBQUU7UUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBQztpQkFDM0I7YUFDRixFQUFFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7b0JBQ2xCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUY7O0dBRUc7QUFNSCxNQUFNLE9BQU8seUJBQXlCO0lBSXBDO1FBSEEsZ0JBQVcsR0FBRyxJQUFJLGlCQUFpQixDQUFXLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLGVBQVUsR0FBRyxJQUFJLHVCQUF1QixFQUFZLENBQUM7UUFNckQsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBSHBGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDOztrR0FOVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ2pEdEMsbUNBQXFGO1FBSW5GLDhGQUVnQjtRQUVoQiw0R0FnQnVCO1FBQ3pCLGlCQUFXOztRQXpCRCwyQ0FBeUIsZ0NBQUE7UUFRZ0IsZUFBYztRQUFkLGlEQUFjOzt1RkR5Q3BELHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05lc3RlZFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVOZXN0ZWREYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcblxuLyoqXG4gKiBGb29kIGRhdGEgd2l0aCBuZXN0ZWQgc3RydWN0dXJlLlxuICogRWFjaCBub2RlIGhhcyBhIG5hbWUgYW5kIGFuIG9wdGlvbmFsIGxpc3Qgb2YgY2hpbGRyZW4uXG4gKi9cbmludGVyZmFjZSBGb29kTm9kZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hpbGRyZW4/OiBGb29kTm9kZVtdO1xufVxuXG5jb25zdCBUUkVFX0RBVEE6IEZvb2ROb2RlW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnRnJ1aXQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7bmFtZTogJ0FwcGxlJ30sXG4gICAgICB7bmFtZTogJ0JhbmFuYSd9LFxuICAgICAge25hbWU6ICdGcnVpdCBsb29wcyd9LFxuICAgIF1cbiAgfSwge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnR3JlZW4nLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnQnJvY2NvbGknfSxcbiAgICAgICAgICB7bmFtZTogJ0JydXNzZWxzIHNwcm91dHMnfSxcbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnT3JhbmdlJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7bmFtZTogJ1B1bXBraW5zJ30sXG4gICAgICAgICAge25hbWU6ICdDYXJyb3RzJ30sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIG5lc3RlZCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPEZvb2ROb2RlPihub2RlID0+IG5vZGUuY2hpbGRyZW4pO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPEZvb2ROb2RlPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gVFJFRV9EQVRBO1xuICB9XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBGb29kTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCIgY2xhc3M9XCJleGFtcGxlLXRyZWVcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDwhLS0gVGhlcmUgaXMgaW5saW5lIHBhZGRpbmcgYXBwbGllZCB0byB0aGlzIG5vZGUgdXNpbmcgc3R5bGVzLlxuICAgIFRoaXMgcGFkZGluZyB2YWx1ZSBkZXBlbmRzIG9uIHRoZSBtYXQtaWNvbi1idXR0b24gd2lkdGguIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlVG9nZ2xlPlxuICAgICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8bWF0LW5lc3RlZC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWF0LXRyZWUtbm9kZVwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5uYW1lXCI+XG4gICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHt7bm9kZS5uYW1lfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBUaGVyZSBpcyBpbmxpbmUgcGFkZGluZyBhcHBsaWVkIHRvIHRoaXMgZGl2IHVzaW5nIHN0eWxlcy5cbiAgICAgICAgICBUaGlzIHBhZGRpbmcgdmFsdWUgZGVwZW5kcyBvbiB0aGUgbWF0LWljb24tYnV0dG9uIHdpZHRoLiAgLS0+XG4gICAgICA8ZGl2IFtjbGFzcy5leGFtcGxlLXRyZWUtaW52aXNpYmxlXT1cIiF0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpXCJcbiAgICAgICAgICByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRUcmVlTm9kZU91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtbmVzdGVkLXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=