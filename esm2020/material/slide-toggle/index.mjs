import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SlideToggleConfigurableExample } from './slide-toggle-configurable/slide-toggle-configurable-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SlideToggleOverviewExample } from './slide-toggle-overview/slide-toggle-overview-example';
import { SlideToggleHarnessExample } from './slide-toggle-harness/slide-toggle-harness-example';
import * as i0 from "@angular/core";
export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleHarnessExample, SlideToggleOverviewExample, };
const EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleHarnessExample,
    SlideToggleOverviewExample,
];
export class SlideToggleExamplesModule {
}
SlideToggleExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SlideToggleExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SlideToggleExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: SlideToggleExamplesModule, declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatButtonModule,
        MatLegacyCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample] });
SlideToggleExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SlideToggleExamplesModule, imports: [FormsModule,
        MatButtonModule,
        MatLegacyCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SlideToggleExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        MatButtonModule,
                        MatLegacyCardModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNqRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQzs7QUFFOUYsT0FBTyxFQUNMLDhCQUE4QixFQUM5Qix1QkFBdUIsRUFDdkIseUJBQXlCLEVBQ3pCLDBCQUEwQixHQUMzQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwwQkFBMEI7Q0FDM0IsQ0FBQztBQWVGLE1BQU0sT0FBTyx5QkFBeUI7O3NIQUF6Qix5QkFBeUI7dUhBQXpCLHlCQUF5QixpQkFuQnBDLDhCQUE4QjtRQUM5Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDBCQUEwQixhQUt4QixXQUFXO1FBQ1gsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixtQkFBbUIsYUFkckIsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsMEJBQTBCO3VIQWdCZix5QkFBeUIsWUFYbEMsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsbUJBQW1COzJGQUtWLHlCQUF5QjtrQkFickMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0TGVnYWN5Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUvc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLW92ZXJ2aWV3L3NsaWRlLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9zbGlkZS10b2dnbGUtaGFybmVzcy9zbGlkZS10b2dnbGUtaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVIYXJuZXNzRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVIYXJuZXNzRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUNhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlVG9nZ2xlRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==