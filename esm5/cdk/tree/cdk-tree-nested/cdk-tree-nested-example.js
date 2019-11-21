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
    var node_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r7.name, " ");
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
    var node_r8 = ctx.$implicit;
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.treeControl.isExpanded(node_r8) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r8.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r6.treeControl.isExpanded(node_r8));
} }
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
        this.treeControl = new NestedTreeControl(function (node) { return node.children; });
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
    }
    CdkTreeNestedExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-tree-nested-example',
                    templateUrl: 'cdk-tree-nested-example.html',
                    styleUrls: ['cdk-tree-nested-example.css'],
                },] },
    ];
    CdkTreeNestedExample.ɵfac = function CdkTreeNestedExample_Factory(t) { return new (t || CdkTreeNestedExample)(); };
    CdkTreeNestedExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTreeNestedExample, selectors: [["cdk-tree-nested-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["class", "example-tree-node", 4, "cdkTreeNodeDef"], ["class", "example-tree-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["cdkTreeNodeOutlet", ""]], template: function CdkTreeNestedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-tree", 0);
            i0.ɵɵtemplate(1, CdkTreeNestedExample_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);
            i0.ɵɵtemplate(2, CdkTreeNestedExample_cdk_nested_tree_node_2_Template, 7, 4, "cdk-nested-tree-node", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkNestedTreeNode, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon, i1.CdkTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
    return CdkTreeNestedExample;
}());
export { CdkTreeNestedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTreeNestedExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-nested-example',
                templateUrl: 'cdk-tree-nested-example.html',
                styleUrls: ['cdk-tree-nested-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0lDQWxELCtDQUNFO0lBQ0EsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBdUI7OztJQURyQixlQUNGO0lBREUsNkNBQ0Y7OztJQUVBLCtDQUNFO0lBQUEsaUNBQ0U7SUFBQSxtQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFTO0lBQ1QsWUFDQTtJQUFBLDJCQUNFO0lBQUEsMkJBQStDO0lBQ2pELGlCQUFNO0lBQ1IsaUJBQXVCOzs7O0lBVEcsZUFBeUM7SUFBekMsc0RBQXlDO0lBRTdELGVBQ0Y7SUFERSx5R0FDRjtJQUVGLGVBQ0E7SUFEQSw2Q0FDQTtJQUFLLGVBQThEO0lBQTlELGlGQUE4RDs7QURGdkUsSUFBTSxTQUFTLEdBQWU7SUFDNUI7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRTtZQUNSLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztZQUNmLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUM7U0FDdEI7S0FDRixFQUFFO1FBQ0QsSUFBSSxFQUFFLFlBQVk7UUFDbEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFO29CQUNSLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztvQkFDbEIsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUM7aUJBQzFCO2FBQ0YsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBQTtRQU1FLGdCQUFXLEdBQUcsSUFBSSxpQkFBaUIsQ0FBWSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLGFBQVEsR0FBRyxVQUFDLENBQVMsRUFBRSxJQUFjLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQTNDLENBQTJDLENBQUM7S0FDdkY7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7OzRGQUNZLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lDakRqQyxtQ0FDRTtZQUNBLHVHQUNFO1lBS0YsdUdBQ0U7WUFVSixpQkFBVzs7WUFuQkQsMkNBQXlCLGdDQUFBO1lBUVgsZUFBMEM7WUFBMUMsaURBQTBDOzsrQkRSbEU7Q0FzREMsQUFWRCxJQVVDO1NBTFksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcnJheURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05lc3RlZFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbi8qKlxuICogRm9vZCBkYXRhIHdpdGggbmVzdGVkIHN0cnVjdHVyZS5cbiAqIEVhY2ggbm9kZSBoYXMgYSBuYW1lIGFuZCBhbiBvcHRpb25hIGxpc3Qgb2YgY2hpbGRyZW4uXG4gKi9cbmludGVyZmFjZSBGb29kTm9kZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hpbGRyZW4/OiBGb29kTm9kZVtdO1xufVxuXG5jb25zdCBUUkVFX0RBVEE6IEZvb2ROb2RlW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnRnJ1aXQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7bmFtZTogJ0FwcGxlJ30sXG4gICAgICB7bmFtZTogJ0JhbmFuYSd9LFxuICAgICAge25hbWU6ICdGcnVpdCBsb29wcyd9LFxuICAgIF1cbiAgfSwge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnR3JlZW4nLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnQnJvY2NvbGknfSxcbiAgICAgICAgICB7bmFtZTogJ0JydXNzZWwgc3Byb3V0cyd9LFxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnUHVtcGtpbnMnfSxcbiAgICAgICAgICB7bmFtZTogJ0NhcnJvdHMnfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggbmVzdGVkIG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10cmVlLW5lc3RlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlTmVzdGVkRXhhbXBsZSB7XG4gIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPEZvb2ROb2RlPiAobm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBBcnJheURhdGFTb3VyY2UoVFJFRV9EQVRBKTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEZvb2ROb2RlKSA9PiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xufVxuIiwiPGNkay10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDxjZGstbmVzdGVkLXRyZWUtbm9kZSAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8IS0tIHVzZSBhIGRpc2FibGVkIGJ1dHRvbiB0byBwcm92aWRlIHBhZGRpbmcgZm9yIHRyZWUgbGVhZiAtLT5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvY2RrLW5lc3RlZC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8Y2RrLW5lc3RlZC10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCIgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5uYW1lXCIgY2RrVHJlZU5vZGVUb2dnbGU+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gICAgPGRpdiBbY2xhc3MuZXhhbXBsZS10cmVlLWludmlzaWJsZV09XCIhdHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtUcmVlTm9kZU91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9jZGstbmVzdGVkLXRyZWUtbm9kZT5cbjwvY2RrLXRyZWU+XG4iXX0=