import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SlideToggleConfigurableExample } from './slide-toggle-configurable/slide-toggle-configurable-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SlideToggleOverviewExample } from './slide-toggle-overview/slide-toggle-overview-example';
import * as i0 from "@angular/core";
export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleOverviewExample, };
const EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
];
export class SlideToggleExamplesModule {
}
SlideToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SlideToggleExamplesModule });
SlideToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SlideToggleExamplesModule_Factory(t) { return new (t || SlideToggleExamplesModule)(); }, imports: [[
            FormsModule,
            MatButtonModule,
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SlideToggleExamplesModule, { declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatSlideToggleModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOztBQUVqRyxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLHVCQUF1QixFQUN2QiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QiwwQkFBMEI7Q0FDM0IsQ0FBQztBQWdCRixNQUFNLE9BQU8seUJBQXlCOzs2REFBekIseUJBQXlCO2lJQUF6Qix5QkFBeUIsa0JBYjNCO1lBQ1AsV0FBVztZQUNYLGVBQWU7WUFDZixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsbUJBQW1CO1NBQ3BCO3dGQUtVLHlCQUF5QixtQkFuQnBDLDhCQUE4QjtRQUM5Qix1QkFBdUI7UUFDdkIsMEJBQTBCLGFBS3hCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLG1CQUFtQixhQWJyQiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtrREFpQmYseUJBQXlCO2NBZHJDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtcbiAgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlXG59IGZyb20gJy4vc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS9zbGlkZS10b2dnbGUtY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZX0gZnJvbSAnLi9zbGlkZS10b2dnbGUtZm9ybXMvc2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZVRvZ2dsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zbGlkZS10b2dnbGUtb3ZlcnZpZXcvc2xpZGUtdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbGlkZVRvZ2dsZUNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZU92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbGlkZVRvZ2dsZUNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZU92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=