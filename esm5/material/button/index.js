import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import * as i0 from "@angular/core";
export { ButtonOverviewExample, ButtonTypesExample, };
var EXAMPLES = [
    ButtonOverviewExample,
    ButtonTypesExample,
];
var ButtonExamplesModule = /** @class */ (function () {
    function ButtonExamplesModule() {
    }
    ButtonExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonExamplesModule });
    ButtonExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonExamplesModule_Factory(t) { return new (t || ButtonExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
            ]] });
    return ButtonExamplesModule;
}());
export { ButtonExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonExamplesModule, { declarations: [ButtonOverviewExample,
        ButtonTypesExample], imports: [MatButtonModule,
        MatIconModule], exports: [ButtonOverviewExample,
        ButtonTypesExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDOztBQUV2RSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGtCQUFrQixHQUNuQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0NBQ25CLENBQUM7QUFFRjtJQUFBO0tBVUM7NERBRFksb0JBQW9COzJIQUFwQixvQkFBb0Isa0JBUnRCO2dCQUNQLGVBQWU7Z0JBQ2YsYUFBYTthQUNkOytCQXBCSDtDQTBCQyxBQVZELElBVUM7U0FEWSxvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkFiL0IscUJBQXFCO1FBQ3JCLGtCQUFrQixhQUtoQixlQUFlO1FBQ2YsYUFBYSxhQVBmLHFCQUFxQjtRQUNyQixrQkFBa0I7a0RBWVAsb0JBQW9CO2NBVGhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7QnV0dG9uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi1vdmVydmlldy9idXR0b24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvblR5cGVzRXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdHlwZXMvYnV0dG9uLXR5cGVzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBCdXR0b25PdmVydmlld0V4YW1wbGUsXG4gIEJ1dHRvblR5cGVzRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCdXR0b25PdmVydmlld0V4YW1wbGUsXG4gIEJ1dHRvblR5cGVzRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==