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
TreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TreeExamplesModule, declarations: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeHarnessExample,
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
        TreeHarnessExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample] });
TreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TreeExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatProgressBarModule,
            MatTreeModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TreeExamplesModule, decorators: [{
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
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQzs7QUFFOUYsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIseUJBQXlCLEdBQzFCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0NBQzFCLENBQUM7QUFnQkYsTUFBTSxPQUFPLGtCQUFrQjs7dUhBQWxCLGtCQUFrQjt3SEFBbEIsa0JBQWtCLGlCQXRCN0Isb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix5QkFBeUIsYUFLdkIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsYUFBYSxhQWhCZixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHlCQUF5Qjt3SEFpQmQsa0JBQWtCLFlBYnBCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsYUFBYTtTQUNkO21HQUtVLGtCQUFrQjtrQkFkOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7VHJlZUNoZWNrbGlzdEV4YW1wbGV9IGZyb20gJy4vdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVEeW5hbWljRXhhbXBsZX0gZnJvbSAnLi90cmVlLWR5bmFtaWMvdHJlZS1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90cmVlLWZsYXQtb3ZlcnZpZXcvdHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vdHJlZS1oYXJuZXNzL3RyZWUtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7VHJlZUxvYWRtb3JlRXhhbXBsZX0gZnJvbSAnLi90cmVlLWxvYWRtb3JlL3RyZWUtbG9hZG1vcmUtZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFRyZWVDaGVja2xpc3RFeGFtcGxlLFxuICBUcmVlRHluYW1pY0V4YW1wbGUsXG4gIFRyZWVGbGF0T3ZlcnZpZXdFeGFtcGxlLFxuICBUcmVlSGFybmVzc0V4YW1wbGUsXG4gIFRyZWVMb2FkbW9yZUV4YW1wbGUsXG4gIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVHJlZUNoZWNrbGlzdEV4YW1wbGUsXG4gIFRyZWVEeW5hbWljRXhhbXBsZSxcbiAgVHJlZUZsYXRPdmVydmlld0V4YW1wbGUsXG4gIFRyZWVIYXJuZXNzRXhhbXBsZSxcbiAgVHJlZUxvYWRtb3JlRXhhbXBsZSxcbiAgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVFeGFtcGxlc01vZHVsZSB7fVxuIl19