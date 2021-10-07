import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import { ButtonToggleHarnessExample } from './button-toggle-harness/button-toggle-harness-example';
import { ButtonToggleFormsExample } from './button-toggle-forms/button-toggle-forms-example';
import { ButtonToggleModeExample } from './button-toggle-mode/button-toggle-mode-example';
import * as i0 from "@angular/core";
export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, ButtonToggleHarnessExample, ButtonToggleFormsExample, ButtonToggleModeExample, };
const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonToggleHarnessExample,
    ButtonToggleFormsExample,
    ButtonToggleModeExample,
];
export class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonToggleExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonToggleExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonToggleExamplesModule, declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample], imports: [FormsModule,
        MatButtonToggleModule,
        MatIconModule,
        ReactiveFormsModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample] });
ButtonToggleExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonToggleExamplesModule, imports: [[
            FormsModule,
            MatButtonToggleModule,
            MatIconModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonToggleExamplesModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLDRCQUE0QixFQUM1QiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQWFGLE1BQU0sT0FBTywwQkFBMEI7OytIQUExQiwwQkFBMEI7Z0lBQTFCLDBCQUEwQixpQkFuQnJDLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsdUJBQXVCLGFBS3JCLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsYUFBYTtRQUNiLG1CQUFtQixhQWJyQiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLHVCQUF1QjtnSUFjWiwwQkFBMEIsWUFWNUI7WUFDUCxXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixtQkFBbUI7U0FDcEI7bUdBS1UsMEJBQTBCO2tCQVh0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlQXBwZWFyYW5jZUV4YW1wbGVcbn0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZVxufSBmcm9tICcuL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1vdmVydmlldy9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWhhcm5lc3MvYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVGb3Jtc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1mb3Jtcy9idXR0b24tdG9nZ2xlLWZvcm1zLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVNb2RlRXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLW1vZGUvYnV0dG9uLXRvZ2dsZS1tb2RlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRm9ybXNFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVNb2RlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRm9ybXNFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVNb2RlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVG9nZ2xlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19