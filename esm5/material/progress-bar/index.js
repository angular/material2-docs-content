import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressBarBufferExample } from './progress-bar-buffer/progress-bar-buffer-example';
import { ProgressBarConfigurableExample } from './progress-bar-configurable/progress-bar-configurable-example';
import { ProgressBarDeterminateExample } from './progress-bar-determinate/progress-bar-determinate-example';
import { ProgressBarIndeterminateExample } from './progress-bar-indeterminate/progress-bar-indeterminate-example';
import { ProgressBarQueryExample } from './progress-bar-query/progress-bar-query-example';
import * as i0 from "@angular/core";
export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarIndeterminateExample, ProgressBarQueryExample, };
var EXAMPLES = [
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
];
var ProgressBarExamplesModule = /** @class */ (function () {
    function ProgressBarExamplesModule() {
    }
    ProgressBarExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatProgressBarModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    ProgressBarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressBarExamplesModule });
    ProgressBarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressBarExamplesModule_Factory(t) { return new (t || ProgressBarExamplesModule)(); }, imports: [[
                CommonModule,
                MatCardModule,
                MatProgressBarModule,
                MatRadioModule,
                MatSliderModule,
                FormsModule,
            ]] });
    return ProgressBarExamplesModule;
}());
export { ProgressBarExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressBarExamplesModule, { declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressBarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatProgressBarModule,
                    MatRadioModule,
                    MatSliderModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5Qiw2QkFBNkIsRUFDN0IsK0JBQStCLEVBQy9CLHVCQUF1QixHQUN4QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRjtJQUFBO0tBYUM7O2dCQWJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7aUVBQ1kseUJBQXlCO3FJQUF6Qix5QkFBeUIsa0JBWDNCO2dCQUNQLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixvQkFBb0I7Z0JBQ3BCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixXQUFXO2FBQ1o7b0NBM0NIO0NBZ0RDLEFBYkQsSUFhQztTQURZLHlCQUF5Qjt3RkFBekIseUJBQXlCLG1CQW5CcEMsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLHVCQUF1QixhQUtyQixZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsZUFBZTtRQUNmLFdBQVcsYUFkYix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IsdUJBQXVCO2tEQWVaLHlCQUF5QjtjQVpyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWJ1ZmZlci9wcm9ncmVzcy1iYXItYnVmZmVyLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlXG59IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGVcbn0gZnJvbSAnLi9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZVxufSBmcm9tICcuL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItcXVlcnkvcHJvZ3Jlc3MtYmFyLXF1ZXJ5LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=