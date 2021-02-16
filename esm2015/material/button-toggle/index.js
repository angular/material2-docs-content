import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import { ButtonToggleHarnessExample } from './button-toggle-harness/button-toggle-harness-example';
import { ButtonToggleFormsExample } from './button-toggle-forms/button-toggle-forms-example';
import * as i0 from "@angular/core";
export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, ButtonToggleHarnessExample, ButtonToggleFormsExample, };
const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonToggleHarnessExample,
    ButtonToggleFormsExample,
];
export class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
ButtonToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); }, imports: [[
            FormsModule,
            MatButtonToggleModule,
            MatIconModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample], imports: [FormsModule,
        MatButtonToggleModule,
        MatIconModule,
        ReactiveFormsModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonToggleModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOztBQUUzRixPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLDRCQUE0QixFQUM1QiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLHdCQUF3QixHQUN6QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0NBQ3pCLENBQUM7QUFhRixNQUFNLE9BQU8sMEJBQTBCOzs4REFBMUIsMEJBQTBCO21JQUExQiwwQkFBMEIsa0JBVjVCO1lBQ1AsV0FBVztZQUNYLHFCQUFxQjtZQUNyQixhQUFhO1lBQ2IsbUJBQW1CO1NBQ3BCO3dGQUtVLDBCQUEwQixtQkFsQnJDLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix3QkFBd0IsYUFLdEIsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsbUJBQW1CLGFBWnJCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix3QkFBd0I7dUZBY2IsMEJBQTBCO2NBWHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlQXBwZWFyYW5jZUV4YW1wbGVcbn0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZVxufSBmcm9tICcuL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1vdmVydmlldy9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWhhcm5lc3MvYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVGb3Jtc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1mb3Jtcy9idXR0b24tdG9nZ2xlLWZvcm1zLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRm9ybXNFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZUhhcm5lc3NFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVGb3Jtc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==