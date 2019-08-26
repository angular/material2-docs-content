import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { MenuPositionExample } from './menu-position/menu-position-example';
import { NestedMenuExample } from './nested-menu/nested-menu-example';
var EXAMPLES = [
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    NestedMenuExample,
];
var MenuExamplesModule = /** @class */ (function () {
    function MenuExamplesModule() {
    }
    MenuExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], MenuExamplesModule);
    return MenuExamplesModule;
}());
export { MenuExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLElBQU0sUUFBUSxHQUFHO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ2xCLENBQUM7QUFXRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGtCQUFrQjtRQVQ5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGFBQWE7YUFDZDtZQUNELFlBQVksRUFBRSxRQUFRO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7T0FDVyxrQkFBa0IsQ0FDOUI7SUFBRCx5QkFBQztDQUFBLEFBREQsSUFDQztTQURZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWVudUljb25zRXhhbXBsZX0gZnJvbSAnLi9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZSc7XG5pbXBvcnQge01lbnVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtNZW51UG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL21lbnUtcG9zaXRpb24vbWVudS1wb3NpdGlvbi1leGFtcGxlJztcbmltcG9ydCB7TmVzdGVkTWVudUV4YW1wbGV9IGZyb20gJy4vbmVzdGVkLW1lbnUvbmVzdGVkLW1lbnUtZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBNZW51SWNvbnNFeGFtcGxlLFxuICBNZW51T3ZlcnZpZXdFeGFtcGxlLFxuICBNZW51UG9zaXRpb25FeGFtcGxlLFxuICBOZXN0ZWRNZW51RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==