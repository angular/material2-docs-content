import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
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
TreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: TreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: TreeExamplesModule, declarations: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeHarnessExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample], imports: [CommonModule,
        MatLegacyButtonModule,
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
TreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: TreeExamplesModule, imports: [CommonModule,
        MatLegacyButtonModule,
        MatLegacyCheckboxModule,
        MatIconModule,
        MatLegacyInputModule,
        MatLegacyProgressBarModule,
        MatTreeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: TreeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyButtonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLHlCQUF5QixHQUMxQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtDQUMxQixDQUFDO0FBZUYsTUFBTSxPQUFPLGtCQUFrQjs7b0hBQWxCLGtCQUFrQjtxSEFBbEIsa0JBQWtCLGlCQXJCN0Isb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix5QkFBeUIsYUFLdkIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsYUFBYSxhQWhCZixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHlCQUF5QjtxSEFnQmQsa0JBQWtCLFlBWDNCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLGFBQWE7Z0dBS0osa0JBQWtCO2tCQWI5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXRMZWdhY3lDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdExlZ2FjeUlucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHtNYXRMZWdhY3lQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXByb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdFRyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtUcmVlQ2hlY2tsaXN0RXhhbXBsZX0gZnJvbSAnLi90cmVlLWNoZWNrbGlzdC90cmVlLWNoZWNrbGlzdC1leGFtcGxlJztcbmltcG9ydCB7VHJlZUR5bmFtaWNFeGFtcGxlfSBmcm9tICcuL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVGbGF0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3RyZWUtZmxhdC1vdmVydmlldy90cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi90cmVlLWhhcm5lc3MvdHJlZS1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlTG9hZG1vcmVFeGFtcGxlfSBmcm9tICcuL3RyZWUtbG9hZG1vcmUvdHJlZS1sb2FkbW9yZS1leGFtcGxlJztcbmltcG9ydCB7VHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90cmVlLW5lc3RlZC1vdmVydmlldy90cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVHJlZUNoZWNrbGlzdEV4YW1wbGUsXG4gIFRyZWVEeW5hbWljRXhhbXBsZSxcbiAgVHJlZUZsYXRPdmVydmlld0V4YW1wbGUsXG4gIFRyZWVIYXJuZXNzRXhhbXBsZSxcbiAgVHJlZUxvYWRtb3JlRXhhbXBsZSxcbiAgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUcmVlQ2hlY2tsaXN0RXhhbXBsZSxcbiAgVHJlZUR5bmFtaWNFeGFtcGxlLFxuICBUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZSxcbiAgVHJlZUhhcm5lc3NFeGFtcGxlLFxuICBUcmVlTG9hZG1vcmVFeGFtcGxlLFxuICBUcmVlTmVzdGVkT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lJbnB1dE1vZHVsZSxcbiAgICBNYXRMZWdhY3lQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRUcmVlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=