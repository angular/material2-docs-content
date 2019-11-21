import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { SliderConfigurableExample } from './slider-configurable/slider-configurable-example';
import { SliderFormattingExample } from './slider-formatting/slider-formatting-example';
import { SliderOverviewExample } from './slider-overview/slider-overview-example';
import * as i0 from "@angular/core";
export { SliderConfigurableExample, SliderFormattingExample, SliderOverviewExample, };
var EXAMPLES = [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderOverviewExample,
];
var SliderExamplesModule = /** @class */ (function () {
    function SliderExamplesModule() {
    }
    SliderExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSliderModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    SliderExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SliderExamplesModule });
    SliderExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SliderExamplesModule_Factory(t) { return new (t || SliderExamplesModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                MatCardModule,
                MatCheckboxModule,
                MatInputModule,
                MatSliderModule,
            ]] });
    return SliderExamplesModule;
}());
export { SliderExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SliderExamplesModule, { declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SliderExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatSliderModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixxQkFBcUIsR0FDdEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGO0lBQUE7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsZUFBZTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7NERBQ1ksb0JBQW9COzJIQUFwQixvQkFBb0Isa0JBWHRCO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxlQUFlO2FBQ2hCOytCQS9CSDtDQW9DQyxBQWJELElBYUM7U0FEWSxvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkFqQi9CLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIscUJBQXFCLGFBS25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZSxhQVpqQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtrREFlVixvQkFBb0I7Y0FaaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7U2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9zbGlkZXItY29uZmlndXJhYmxlL3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlckZvcm1hdHRpbmdFeGFtcGxlfSBmcm9tICcuL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc2xpZGVyLW92ZXJ2aWV3L3NsaWRlci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgU2xpZGVyRm9ybWF0dGluZ0V4YW1wbGUsXG4gIFNsaWRlck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSxcbiAgU2xpZGVyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==