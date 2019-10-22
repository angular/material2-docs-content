import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PizzaPartyComponent, SnackBarComponentExample } from './snack-bar-component/snack-bar-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SnackBarPositionExample } from './snack-bar-position/snack-bar-position-example';
import * as i0 from "@angular/core";
export { SnackBarComponentExample, SnackBarOverviewExample, SnackBarPositionExample, PizzaPartyComponent, };
var EXAMPLES = [
    SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
var SnackBarExamplesModule = /** @class */ (function () {
    function SnackBarExamplesModule() {
    }
    SnackBarExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        MatButtonModule,
                        MatInputModule,
                        MatSelectModule,
                        MatSnackBarModule,
                    ],
                    declarations: tslib_1.__spread(EXAMPLES, [PizzaPartyComponent]),
                    exports: EXAMPLES,
                    entryComponents: [PizzaPartyComponent],
                },] },
    ];
    SnackBarExamplesModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: SnackBarExamplesModule });
    SnackBarExamplesModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function SnackBarExamplesModule_Factory(t) { return new (t || SnackBarExamplesModule)(); }, imports: [[
                FormsModule,
                MatButtonModule,
                MatInputModule,
                MatSelectModule,
                MatSnackBarModule,
            ]] });
    return SnackBarExamplesModule;
}());
export { SnackBarExamplesModule };
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(SnackBarExamplesModule, { declarations: [SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
        PizzaPartyComponent], imports: [FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SnackBarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                    MatSnackBarModule,
                ],
                declarations: tslib_1.__spread(EXAMPLES, [PizzaPartyComponent]),
                exports: EXAMPLES,
                entryComponents: [PizzaPartyComponent],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsd0JBQXdCLEVBQ3pCLE1BQU0sbURBQW1ELENBQUM7QUFDM0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGO0lBQUE7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxtQkFBTSxRQUFRLEdBQUUsbUJBQW1CLEVBQUM7b0JBQ2hELE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDdkM7O3FFQUNZLHNCQUFzQjt3SUFBdEIsc0JBQXNCLGtCQVh4QjtnQkFDUCxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxlQUFlO2dCQUNmLGlCQUFpQjthQUNsQjtpQ0FqQ0g7Q0F1Q0MsQUFiRCxJQWFDO1NBRFksc0JBQXNCO29DQUF0QixzQkFBc0IsbUJBakJqQyx3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQVdLLG1CQUFtQixhQU43QyxXQUFXO1FBQ1gsZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO1FBQ2YsaUJBQWlCLGFBWG5CLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsdUJBQXVCO21DQWVaLHNCQUFzQjtjQVpsQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLG1CQUFNLFFBQVEsR0FBRSxtQkFBbUIsRUFBQztnQkFDaEQsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7XG4gIFBpenphUGFydHlDb21wb25lbnQsXG4gIFNuYWNrQmFyQ29tcG9uZW50RXhhbXBsZVxufSBmcm9tICcuL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG4gIFBpenphUGFydHlDb21wb25lbnQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIFBpenphUGFydHlDb21wb25lbnRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbUGl6emFQYXJ0eUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19