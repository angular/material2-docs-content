import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ExpansionExpandCollapseAllExample } from './expansion-expand-collapse-all/expansion-expand-collapse-all-example';
import { ExpansionOverviewExample } from './expansion-overview/expansion-overview-example';
import { ExpansionStepsExample } from './expansion-steps/expansion-steps-example';
import * as i0 from "@angular/core";
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
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    ExpansionExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExpansionExamplesModule });
    ExpansionExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExpansionExamplesModule_Factory(t) { return new (t || ExpansionExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatDatepickerModule,
                MatExpansionModule,
                MatIconModule,
                MatInputModule,
            ]] });
    return ExpansionExamplesModule;
}());
export { ExpansionExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExpansionExamplesModule, { declarations: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample], imports: [MatButtonModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule], exports: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatDatepickerModule,
                    MatExpansionModule,
                    MatIconModule,
                    MatInputModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRWhGLE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsd0JBQXdCLEVBQ3hCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLHFCQUFxQjtDQUN0QixDQUFDO0FBRUY7SUFBQTtLQWFDOztnQkFiQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7K0RBQ1ksdUJBQXVCO2lJQUF2Qix1QkFBdUIsa0JBWHpCO2dCQUNQLGVBQWU7Z0JBQ2YsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsY0FBYzthQUNmO2tDQS9CSDtDQXFDQyxBQWJELElBYUM7U0FEWSx1QkFBdUI7d0ZBQXZCLHVCQUF1QixtQkFqQmxDLGlDQUFpQztRQUNqQyx3QkFBd0I7UUFDeEIscUJBQXFCLGFBS25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjLGFBWGhCLGlDQUFpQztRQUNqQyx3QkFBd0I7UUFDeEIscUJBQXFCO2tEQWVWLHVCQUF1QjtjQVpuQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge1xuICBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGVcbn0gZnJvbSAnLi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlJztcbmltcG9ydCB7RXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0V4cGFuc2lvblN0ZXBzRXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24tc3RlcHMvZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUsXG4gIEV4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgRXhwYW5zaW9uU3RlcHNFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEV4cGFuc2lvbkV4cGFuZENvbGxhcHNlQWxsRXhhbXBsZSxcbiAgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlLFxuICBFeHBhbnNpb25TdGVwc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=