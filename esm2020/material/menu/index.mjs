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
MenuExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MenuExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MenuExamplesModule, declarations: [MenuHarnessExample,
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample], imports: [MatButtonModule, MatIconModule, MatMenuModule], exports: [MenuHarnessExample,
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample] });
MenuExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MenuExamplesModule, imports: [[MatButtonModule, MatIconModule, MatMenuModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: MenuExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatIconModule, MatMenuModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7O0FBRXZFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsaUJBQWlCLEdBQ2xCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQVFGLE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFiN0Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGlCQUFpQixhQUlQLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxhQVJ2RCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsaUJBQWlCO2dIQVNOLGtCQUFrQixZQUxwQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDOzJGQUs3QyxrQkFBa0I7a0JBTjlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7b0JBQ3hELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHtNZW51SWNvbnNFeGFtcGxlfSBmcm9tICcuL21lbnUtaWNvbnMvbWVudS1pY29ucy1leGFtcGxlJztcbmltcG9ydCB7TWVudU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge01lbnVQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vbWVudS1wb3NpdGlvbi9tZW51LXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtNZW51TmVzdGVkRXhhbXBsZX0gZnJvbSAnLi9tZW51LW5lc3RlZC9tZW51LW5lc3RlZC1leGFtcGxlJztcbmltcG9ydCB7TWVudUhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL21lbnUtaGFybmVzcy9tZW51LWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIE1lbnVIYXJuZXNzRXhhbXBsZSxcbiAgTWVudUljb25zRXhhbXBsZSxcbiAgTWVudU92ZXJ2aWV3RXhhbXBsZSxcbiAgTWVudVBvc2l0aW9uRXhhbXBsZSxcbiAgTWVudU5lc3RlZEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgTWVudUhhcm5lc3NFeGFtcGxlLFxuICBNZW51SWNvbnNFeGFtcGxlLFxuICBNZW51T3ZlcnZpZXdFeGFtcGxlLFxuICBNZW51UG9zaXRpb25FeGFtcGxlLFxuICBNZW51TmVzdGVkRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdE1lbnVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=