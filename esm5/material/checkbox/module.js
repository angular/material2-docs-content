import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CheckboxConfigurableExample } from './checkbox-configurable/checkbox-configurable-example';
import { CheckboxOverviewExample } from './checkbox-overview/checkbox-overview-example';
export { CheckboxConfigurableExample, CheckboxOverviewExample, };
var EXAMPLES = [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
];
var CheckboxExamplesModule = /** @class */ (function () {
    function CheckboxExamplesModule() {
    }
    CheckboxExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatCardModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CheckboxExamplesModule;
}());
export { CheckboxExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXRGLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsdUJBQXVCLEdBQ3hCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGO0lBQUE7SUFXQSxDQUFDOztnQkFYQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCw2QkFBQztDQUFBLEFBWEQsSUFXQztTQURZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7Q2hlY2tib3hDb25maWd1cmFibGVFeGFtcGxlfSBmcm9tICcuL2NoZWNrYm94LWNvbmZpZ3VyYWJsZS9jaGVja2JveC1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge0NoZWNrYm94T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDaGVja2JveENvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIENoZWNrYm94T3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZSxcbiAgQ2hlY2tib3hPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94RXhhbXBsZXNNb2R1bGUge1xufVxuIl19