import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { MenuPositionExample } from './menu-position/menu-position-example';
import { MenuNestedExample } from './menu-nested/menu-nested-example';
import * as i0 from "@angular/core";
export { MenuIconsExample, MenuOverviewExample, MenuPositionExample, MenuNestedExample, };
var EXAMPLES = [
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    MenuNestedExample,
];
var MenuExamplesModule = /** @class */ (function () {
    function MenuExamplesModule() {
    }
    MenuExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
    MenuExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
            ]] });
    return MenuExamplesModule;
}());
export { MenuExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample], imports: [MatButtonModule,
        MatIconModule,
        MatMenuModule], exports: [MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuExamplesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7O0FBRXBFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixpQkFBaUIsR0FDbEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ2xCLENBQUM7QUFFRjtJQUFBO0tBV0M7MERBRFksa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBVHBCO2dCQUNQLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixhQUFhO2FBQ2Q7NkJBNUJIO0NBa0NDLEFBWEQsSUFXQztTQURZLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQWhCN0IsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsaUJBQWlCLGFBS2YsZUFBZTtRQUNmLGFBQWE7UUFDYixhQUFhLGFBVmYsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsaUJBQWlCO2tEQWFOLGtCQUFrQjtjQVY5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge01lbnVJY29uc0V4YW1wbGV9IGZyb20gJy4vbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUnO1xuaW1wb3J0IHtNZW51T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL21lbnUtb3ZlcnZpZXcvbWVudS1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7TWVudVBvc2l0aW9uRXhhbXBsZX0gZnJvbSAnLi9tZW51LXBvc2l0aW9uL21lbnUtcG9zaXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge01lbnVOZXN0ZWRFeGFtcGxlfSBmcm9tICcuL21lbnUtbmVzdGVkL21lbnUtbmVzdGVkLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBNZW51SWNvbnNFeGFtcGxlLFxuICBNZW51T3ZlcnZpZXdFeGFtcGxlLFxuICBNZW51UG9zaXRpb25FeGFtcGxlLFxuICBNZW51TmVzdGVkRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBNZW51SWNvbnNFeGFtcGxlLFxuICBNZW51T3ZlcnZpZXdFeGFtcGxlLFxuICBNZW51UG9zaXRpb25FeGFtcGxlLFxuICBNZW51TmVzdGVkRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==