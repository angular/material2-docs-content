import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import { IconHarnessExample } from './icon-harness/icon-harness-example';
import * as i0 from "@angular/core";
export { IconHarnessExample, IconOverviewExample, IconSvgExample, };
const EXAMPLES = [
    IconHarnessExample,
    IconOverviewExample,
    IconSvgExample,
];
export class IconExamplesModule {
}
IconExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: IconExamplesModule });
IconExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); }, imports: [[
            MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconExamplesModule, { declarations: [IconHarnessExample,
        IconOverviewExample,
        IconSvgExample], imports: [MatIconModule], exports: [IconHarnessExample,
        IconOverviewExample,
        IconSvgExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsY0FBYyxHQUNmLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztDQUNmLENBQUM7QUFVRixNQUFNLE9BQU8sa0JBQWtCOztzREFBbEIsa0JBQWtCO21IQUFsQixrQkFBa0Isa0JBUHBCO1lBQ1AsYUFBYTtTQUNkO3dGQUtVLGtCQUFrQixtQkFiN0Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixjQUFjLGFBS1osYUFBYSxhQVBmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsY0FBYzt1RkFXSCxrQkFBa0I7Y0FSOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0ljb25PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vaWNvbi1vdmVydmlldy9pY29uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtJY29uU3ZnRXhhbXBsZX0gZnJvbSAnLi9pY29uLXN2Zy9pY29uLXN2Zy1leGFtcGxlJztcbmltcG9ydCB7SWNvbkhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2ljb24taGFybmVzcy9pY29uLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEljb25IYXJuZXNzRXhhbXBsZSxcbiAgSWNvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgSWNvblN2Z0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgSWNvbkhhcm5lc3NFeGFtcGxlLFxuICBJY29uT3ZlcnZpZXdFeGFtcGxlLFxuICBJY29uU3ZnRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==