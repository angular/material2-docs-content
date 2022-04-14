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
TreeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: TreeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: TreeExamplesModule, declarations: [TreeChecklistExample,
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
TreeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: TreeExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatProgressBarModule,
            MatTreeModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: TreeExamplesModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQzs7QUFFOUYsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIseUJBQXlCLEdBQzFCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0NBQzFCLENBQUM7QUFlRixNQUFNLE9BQU8sa0JBQWtCOzt1SEFBbEIsa0JBQWtCO3dIQUFsQixrQkFBa0IsaUJBckI3QixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHlCQUF5QixhQUt2QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixhQUFhLGFBaEJmLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIseUJBQXlCO3dIQWdCZCxrQkFBa0IsWUFacEI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixhQUFhO1NBQ2Q7bUdBSVUsa0JBQWtCO2tCQWI5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7TWF0VHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge1RyZWVDaGVja2xpc3RFeGFtcGxlfSBmcm9tICcuL3RyZWUtY2hlY2tsaXN0L3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlRHluYW1pY0V4YW1wbGV9IGZyb20gJy4vdHJlZS1keW5hbWljL3RyZWUtZHluYW1pYy1leGFtcGxlJztcbmltcG9ydCB7VHJlZUZsYXRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdHJlZS1mbGF0LW92ZXJ2aWV3L3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7VHJlZUhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3RyZWUtaGFybmVzcy90cmVlLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVMb2FkbW9yZUV4YW1wbGV9IGZyb20gJy4vdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlTmVzdGVkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3RyZWUtbmVzdGVkLW92ZXJ2aWV3L3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUcmVlQ2hlY2tsaXN0RXhhbXBsZSxcbiAgVHJlZUR5bmFtaWNFeGFtcGxlLFxuICBUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZSxcbiAgVHJlZUhhcm5lc3NFeGFtcGxlLFxuICBUcmVlTG9hZG1vcmVFeGFtcGxlLFxuICBUcmVlTmVzdGVkT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRyZWVDaGVja2xpc3RFeGFtcGxlLFxuICBUcmVlRHluYW1pY0V4YW1wbGUsXG4gIFRyZWVGbGF0T3ZlcnZpZXdFeGFtcGxlLFxuICBUcmVlSGFybmVzc0V4YW1wbGUsXG4gIFRyZWVMb2FkbW9yZUV4YW1wbGUsXG4gIFRyZWVOZXN0ZWRPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFRyZWVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==