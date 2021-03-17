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
IconExamplesModule.ɵfac = function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); };
IconExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IconExamplesModule });
IconExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatIconModule,
        ]] });
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconExamplesModule, { declarations: [IconHarnessExample,
        IconOverviewExample,
        IconSvgExample], imports: [MatIconModule], exports: [IconHarnessExample,
        IconOverviewExample,
        IconSvgExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsY0FBYyxHQUNmLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztDQUNmLENBQUM7QUFVRixNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO29FQUFsQixrQkFBa0I7d0VBUHBCO1lBQ1AsYUFBYTtTQUNkO3VGQUtVLGtCQUFrQjtjQVI5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQjs7d0ZBQ1ksa0JBQWtCLG1CQWI3QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGNBQWMsYUFLWixhQUFhLGFBUGYsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtJY29uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2ljb24tb3ZlcnZpZXcvaWNvbi1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7SWNvblN2Z0V4YW1wbGV9IGZyb20gJy4vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZSc7XG5pbXBvcnQge0ljb25IYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9pY29uLWhhcm5lc3MvaWNvbi1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBJY29uSGFybmVzc0V4YW1wbGUsXG4gIEljb25PdmVydmlld0V4YW1wbGUsXG4gIEljb25TdmdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEljb25IYXJuZXNzRXhhbXBsZSxcbiAgSWNvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgSWNvblN2Z0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEljb25FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=