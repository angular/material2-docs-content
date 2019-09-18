import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ExpansionExpandCollapseAllExample } from './expansion-expand-collapse-all/expansion-expand-collapse-all-example';
import { ExpansionOverviewExample } from './expansion-overview/expansion-overview-example';
import { ExpansionStepsExample } from './expansion-steps/expansion-steps-example';
export { ExpansionExpandCollapseAllExample, ExpansionOverviewExample, ExpansionStepsExample, };
var EXAMPLES = [
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
];
var ExpansionExamplesModule = /** @class */ (function () {
    function ExpansionExamplesModule() {
    }
    ExpansionExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatDatepickerModule,
                        MatExpansionModule,
                        MatIconModule,
                        MatInputModule,
                    ],
                    declarations: EXAMPLES,
                },] }
    ];
    return ExpansionExamplesModule;
}());
export { ExpansionExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFaEYsT0FBTyxFQUNMLGlDQUFpQyxFQUNqQyx3QkFBd0IsRUFDeEIscUJBQXFCLEdBQ3RCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRjtJQUFBO0lBV0EsQ0FBQzs7Z0JBWEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7aUJBQ3ZCOztJQUVELDhCQUFDO0NBQUEsQUFYRCxJQVdDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge1xuICBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGVcbn0gZnJvbSAnLi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlJztcbmltcG9ydCB7RXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0V4cGFuc2lvblN0ZXBzRXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24tc3RlcHMvZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUsXG4gIEV4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgRXhwYW5zaW9uU3RlcHNFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEV4cGFuc2lvbkV4cGFuZENvbGxhcHNlQWxsRXhhbXBsZSxcbiAgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlLFxuICBFeHBhbnNpb25TdGVwc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbkV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==