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
    const node_r7 = ctx.$implicit;
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
    const node_r8 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "toggle " + node_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.treeControl.isExpanded(node_r8) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r8.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r6.treeControl.isExpanded(node_r8));
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
export class CdkTreeNestedExample {
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
        i0.ɵɵtemplate(2, CdkTreeNestedExample_cdk_nested_tree_node_2_Template, 7, 4, "cdk-nested-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkNestedTreeNode, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon, i1.CdkTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQvY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7SUNBbEQsK0NBQ0U7SUFDQSw0QkFBMEM7SUFDMUMsWUFDRjtJQUFBLGlCQUF1Qjs7O0lBRHJCLGVBQ0Y7SUFERSw2Q0FDRjs7O0lBRUEsK0NBQ0U7SUFBQSxpQ0FDRTtJQUFBLG1DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNBO0lBQUEsMkJBQ0U7SUFBQSwyQkFBK0M7SUFDakQsaUJBQU07SUFDUixpQkFBdUI7Ozs7SUFURyxlQUF5QztJQUF6QyxzREFBeUM7SUFFN0QsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDQTtJQURBLDZDQUNBO0lBQUssZUFBOEQ7SUFBOUQsaUZBQThEOzs7Ozs7O0FEUHZFLHVCQUdDOzs7SUFGQyx3QkFBYTs7SUFDYiw0QkFBc0I7OztNQUdsQixTQUFTLEdBQWU7SUFDNUI7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRTtZQUNSLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztZQUNmLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUM7U0FDdEI7S0FDRixFQUFFO1FBQ0QsSUFBSSxFQUFFLFlBQVk7UUFDbEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFO29CQUNSLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztvQkFDbEIsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUM7aUJBQzNCO2FBQ0YsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0Y7Ozs7QUFVRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTUUsZ0JBQVcsR0FBRyxJQUFJLGlCQUFpQjs7OztRQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QyxhQUFROzs7OztRQUFHLENBQUMsQ0FBUyxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0tBQ3ZGOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7O3dGQUNZLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDakRqQyxtQ0FDRTtRQUNBLHVHQUNFO1FBS0YsdUdBQ0U7UUFVSixpQkFBVzs7UUFuQkQsMkNBQXlCLGdDQUFBO1FBUVgsZUFBMEM7UUFBMUMsaURBQTBDOztrRER5Q3JELG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFFQywyQ0FBc0U7O0lBQ3RFLDBDQUE0Qzs7SUFFNUMsd0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcnJheURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05lc3RlZFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5cbi8qKlxuICogRm9vZCBkYXRhIHdpdGggbmVzdGVkIHN0cnVjdHVyZS5cbiAqIEVhY2ggbm9kZSBoYXMgYSBuYW1lIGFuZCBhbiBvcHRpb25hIGxpc3Qgb2YgY2hpbGRyZW4uXG4gKi9cbmludGVyZmFjZSBGb29kTm9kZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hpbGRyZW4/OiBGb29kTm9kZVtdO1xufVxuXG5jb25zdCBUUkVFX0RBVEE6IEZvb2ROb2RlW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnRnJ1aXQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7bmFtZTogJ0FwcGxlJ30sXG4gICAgICB7bmFtZTogJ0JhbmFuYSd9LFxuICAgICAge25hbWU6ICdGcnVpdCBsb29wcyd9LFxuICAgIF1cbiAgfSwge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnR3JlZW4nLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnQnJvY2NvbGknfSxcbiAgICAgICAgICB7bmFtZTogJ0JydXNzZWxzIHNwcm91dHMnfSxcbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnT3JhbmdlJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7bmFtZTogJ1B1bXBraW5zJ30sXG4gICAgICAgICAge25hbWU6ICdDYXJyb3RzJ30sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIG5lc3RlZCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXRyZWUtbmVzdGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstdHJlZS1uZXN0ZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZU5lc3RlZEV4YW1wbGUge1xuICB0cmVlQ29udHJvbCA9IG5ldyBOZXN0ZWRUcmVlQ29udHJvbDxGb29kTm9kZT4gKG5vZGUgPT4gbm9kZS5jaGlsZHJlbik7XG4gIGRhdGFTb3VyY2UgPSBuZXcgQXJyYXlEYXRhU291cmNlKFRSRUVfREFUQSk7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBGb29kTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbn1cbiIsIjxjZGstdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8Y2RrLW5lc3RlZC10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCI+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L2Nkay1uZXN0ZWQtdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPGNkay1uZXN0ZWQtdHJlZS1ub2RlICpjZGtUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbYXR0ci5hcmlhLWxhYmVsXT1cIid0b2dnbGUgJyArIG5vZGUubmFtZVwiIGNka1RyZWVOb2RlVG9nZ2xlPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICAgIDxkaXYgW2NsYXNzLmV4YW1wbGUtdHJlZS1pbnZpc2libGVdPVwiIXRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSlcIj5cbiAgICAgIDxuZy1jb250YWluZXIgY2RrVHJlZU5vZGVPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvY2RrLW5lc3RlZC10cmVlLW5vZGU+XG48L2Nkay10cmVlPlxuIl19