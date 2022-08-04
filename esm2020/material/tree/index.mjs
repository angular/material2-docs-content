import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { TreeChecklistExample } from './tree-checklist/tree-checklist-example';
import { TreeDynamicExample } from './tree-dynamic/tree-dynamic-example';
import { TreeFlatOverviewExample } from './tree-flat-overview/tree-flat-overview-example';
import { TreeHarnessExample } from './tree-harness/tree-harness-example';
import { TreeLoadmoreExample } from './tree-loadmore/tree-loadmore-example';
import { TreeNestedOverviewExample } from './tree-nested-overview/tree-nested-overview-example';
import * as i0 from "@angular/core";
export { TreeChecklistExample, TreeDynamicExample, TreeFlatOverviewExample, TreeHarnessExample, TreeLoadmoreExample, TreeNestedOverviewExample, };
const EXAMPLES = [
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeHarnessExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
];
export class TreeExamplesModule {
}
TreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: TreeExamplesModule, declarations: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeHarnessExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample], imports: [CommonModule,
        MatButtonModule,
        MatLegacyCheckboxModule,
        MatIconModule,
        MatLegacyInputModule,
        MatLegacyProgressBarModule,
        MatTreeModule], exports: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeHarnessExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample] });
TreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TreeExamplesModule, imports: [CommonModule,
        MatButtonModule,
        MatLegacyCheckboxModule,
        MatIconModule,
        MatLegacyInputModule,
        MatLegacyProgressBarModule,
        MatTreeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TreeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatLegacyCheckboxModule,
                        MatIconModule,
                        MatLegacyInputModule,
                        MatLegacyProgressBarModule,
                        MatTreeModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQix5QkFBeUIsR0FDMUIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7Q0FDMUIsQ0FBQztBQWVGLE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFyQjdCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIseUJBQXlCLGFBS3ZCLFlBQVk7UUFDWixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLGFBQWEsYUFoQmYsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix5QkFBeUI7Z0hBZ0JkLGtCQUFrQixZQVgzQixZQUFZO1FBQ1osZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixhQUFhOzJGQUtKLGtCQUFrQjtrQkFiOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRMZWdhY3lDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdExlZ2FjeUlucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHtNYXRMZWdhY3lQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXByb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdFRyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtUcmVlQ2hlY2tsaXN0RXhhbXBsZX0gZnJvbSAnLi90cmVlLWNoZWNrbGlzdC90cmVlLWNoZWNrbGlzdC1leGFtcGxlJztcbmltcG9ydCB7VHJlZUR5bmFtaWNFeGFtcGxlfSBmcm9tICcuL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVGbGF0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3RyZWUtZmxhdC1vdmVydmlldy90cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi90cmVlLWhhcm5lc3MvdHJlZS1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlTG9hZG1vcmVFeGFtcGxlfSBmcm9tICcuL3RyZWUtbG9hZG1vcmUvdHJlZS1sb2FkbW9yZS1leGFtcGxlJztcbmltcG9ydCB7VHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90cmVlLW5lc3RlZC1vdmVydmlldy90cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVHJlZUNoZWNrbGlzdEV4YW1wbGUsXG4gIFRyZWVEeW5hbWljRXhhbXBsZSxcbiAgVHJlZUZsYXRPdmVydmlld0V4YW1wbGUsXG4gIFRyZWVIYXJuZXNzRXhhbXBsZSxcbiAgVHJlZUxvYWRtb3JlRXhhbXBsZSxcbiAgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUcmVlQ2hlY2tsaXN0RXhhbXBsZSxcbiAgVHJlZUR5bmFtaWNFeGFtcGxlLFxuICBUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZSxcbiAgVHJlZUhhcm5lc3NFeGFtcGxlLFxuICBUcmVlTG9hZG1vcmVFeGFtcGxlLFxuICBUcmVlTmVzdGVkT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lJbnB1dE1vZHVsZSxcbiAgICBNYXRMZWdhY3lQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRUcmVlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=