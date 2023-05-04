import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import { BadgeHarnessExample } from './badge-harness/badge-harness-example';
import * as i0 from "@angular/core";
export { BadgeOverviewExample, BadgeHarnessExample };
const EXAMPLES = [BadgeOverviewExample, BadgeHarnessExample];
class BadgeExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BadgeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: BadgeExamplesModule, declarations: [BadgeOverviewExample, BadgeHarnessExample], imports: [MatBadgeModule, MatButtonModule, MatIconModule], exports: [BadgeOverviewExample, BadgeHarnessExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BadgeExamplesModule, imports: [MatBadgeModule, MatButtonModule, MatIconModule] }); }
}
export { BadgeExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BadgeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBadgeModule, MatButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUVuRCxNQUFNLFFBQVEsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFFN0QsTUFLYSxtQkFBbUI7OEdBQW5CLG1CQUFtQjsrR0FBbkIsbUJBQW1CLGlCQVBkLG9CQUFvQixFQUFFLG1CQUFtQixhQUcvQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsYUFIeEMsb0JBQW9CLEVBQUUsbUJBQW1COytHQU85QyxtQkFBbUIsWUFKcEIsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhOztTQUk3QyxtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFML0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztvQkFDekQsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtCYWRnZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7QmFkZ2VIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9iYWRnZS1oYXJuZXNzL2JhZGdlLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7QmFkZ2VPdmVydmlld0V4YW1wbGUsIEJhZGdlSGFybmVzc0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtCYWRnZU92ZXJ2aWV3RXhhbXBsZSwgQmFkZ2VIYXJuZXNzRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCYWRnZU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==