import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { MenuPositionExample } from './menu-position/menu-position-example';
import { MenuNestedExample } from './menu-nested/menu-nested-example';
import { MenuHarnessExample } from './menu-harness/menu-harness-example';
import * as i0 from "@angular/core";
export { MenuHarnessExample, MenuIconsExample, MenuOverviewExample, MenuPositionExample, MenuNestedExample, };
const EXAMPLES = [
    MenuHarnessExample,
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    MenuNestedExample,
];
export class MenuExamplesModule {
}
MenuExamplesModule.ɵfac = function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); };
MenuExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
MenuExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatIconModule,
            MatMenuModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatMenuModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuHarnessExample,
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample], imports: [MatButtonModule,
        MatIconModule,
        MatMenuModule], exports: [MenuHarnessExample,
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7O0FBRXZFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsaUJBQWlCLEdBQ2xCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQVlGLE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7b0VBQWxCLGtCQUFrQjt3RUFUcEI7WUFDUCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGFBQWE7U0FDZDt1RkFLVSxrQkFBa0I7Y0FWOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSxrQkFBa0IsbUJBakI3QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsaUJBQWlCLGFBS2YsZUFBZTtRQUNmLGFBQWE7UUFDYixhQUFhLGFBWGYsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWVudUljb25zRXhhbXBsZX0gZnJvbSAnLi9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZSc7XG5pbXBvcnQge01lbnVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtNZW51UG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL21lbnUtcG9zaXRpb24vbWVudS1wb3NpdGlvbi1leGFtcGxlJztcbmltcG9ydCB7TWVudU5lc3RlZEV4YW1wbGV9IGZyb20gJy4vbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZSc7XG5pbXBvcnQge01lbnVIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9tZW51LWhhcm5lc3MvbWVudS1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBNZW51SGFybmVzc0V4YW1wbGUsXG4gIE1lbnVJY29uc0V4YW1wbGUsXG4gIE1lbnVPdmVydmlld0V4YW1wbGUsXG4gIE1lbnVQb3NpdGlvbkV4YW1wbGUsXG4gIE1lbnVOZXN0ZWRFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIE1lbnVIYXJuZXNzRXhhbXBsZSxcbiAgTWVudUljb25zRXhhbXBsZSxcbiAgTWVudU92ZXJ2aWV3RXhhbXBsZSxcbiAgTWVudVBvc2l0aW9uRXhhbXBsZSxcbiAgTWVudU5lc3RlZEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=