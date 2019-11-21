import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { TreeChecklistExample } from './tree-checklist/tree-checklist-example';
import { TreeDynamicExample } from './tree-dynamic/tree-dynamic-example';
import { TreeFlatOverviewExample } from './tree-flat-overview/tree-flat-overview-example';
import { TreeLoadmoreExample } from './tree-loadmore/tree-loadmore-example';
import { TreeNestedOverviewExample } from './tree-nested-overview/tree-nested-overview-example';
import * as i0 from "@angular/core";
export { TreeChecklistExample, TreeDynamicExample, TreeFlatOverviewExample, TreeLoadmoreExample, TreeNestedOverviewExample, };
var EXAMPLES = [
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
];
var TreeExamplesModule = /** @class */ (function () {
    function TreeExamplesModule() {
    }
    TreeExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatInputModule,
                        MatProgressBarModule,
                        MatTreeModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    TreeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TreeExamplesModule });
    TreeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
                MatInputModule,
                MatProgressBarModule,
                MatTreeModule,
            ]] });
    return TreeExamplesModule;
}());
export { TreeExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatTreeModule], exports: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressBarModule,
                    MatTreeModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQzs7QUFFOUYsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixFQUNuQix5QkFBeUIsR0FDMUIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtDQUMxQixDQUFDO0FBRUY7SUFBQTtLQWNDOztnQkFkQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7MERBQ1ksa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBWnBCO2dCQUNQLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxvQkFBb0I7Z0JBQ3BCLGFBQWE7YUFDZDs2QkF2Q0g7Q0E0Q0MsQUFkRCxJQWNDO1NBRFksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBcEI3QixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCLGFBS3ZCLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGFBQWEsYUFmZixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCO2tEQWdCZCxrQkFBa0I7Y0FiOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7VHJlZUNoZWNrbGlzdEV4YW1wbGV9IGZyb20gJy4vdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVEeW5hbWljRXhhbXBsZX0gZnJvbSAnLi90cmVlLWR5bmFtaWMvdHJlZS1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90cmVlLWZsYXQtb3ZlcnZpZXcvdHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlTG9hZG1vcmVFeGFtcGxlfSBmcm9tICcuL3RyZWUtbG9hZG1vcmUvdHJlZS1sb2FkbW9yZS1leGFtcGxlJztcbmltcG9ydCB7VHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90cmVlLW5lc3RlZC1vdmVydmlldy90cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVHJlZUNoZWNrbGlzdEV4YW1wbGUsXG4gIFRyZWVEeW5hbWljRXhhbXBsZSxcbiAgVHJlZUZsYXRPdmVydmlld0V4YW1wbGUsXG4gIFRyZWVMb2FkbW9yZUV4YW1wbGUsXG4gIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVHJlZUNoZWNrbGlzdEV4YW1wbGUsXG4gIFRyZWVEeW5hbWljRXhhbXBsZSxcbiAgVHJlZUZsYXRPdmVydmlld0V4YW1wbGUsXG4gIFRyZWVMb2FkbW9yZUV4YW1wbGUsXG4gIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19