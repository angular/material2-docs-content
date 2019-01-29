import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
/**
 * @title SVG icons
 */
var IconSvgExample = /** @class */ (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    IconSvgExample = tslib_1.__decorate([
        Component({
            selector: 'icon-svg-example',
            template: "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatIconRegistry, DomSanitizer])
    ], IconSvgExample);
    return IconSvgExample;
}());
export { IconSvgExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9pY29uLXN2Zy9pY29uLXN2Zy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQ7O0dBRUc7QUFNSDtJQUNFLHdCQUFZLFlBQTZCLEVBQUUsU0FBdUI7UUFDaEUsWUFBWSxDQUFDLFVBQVUsQ0FDbkIsV0FBVyxFQUNYLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUxVLGNBQWM7UUFMMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qix5REFBb0M7O1NBRXJDLENBQUM7aURBRTBCLGVBQWUsRUFBYSxZQUFZO09BRHZELGNBQWMsQ0FNMUI7SUFBRCxxQkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge01hdEljb25SZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vKipcbiAqIEB0aXRsZSBTVkcgaWNvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWNvbi1zdmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaWNvbi1zdmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ljb24tc3ZnLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEljb25TdmdFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgaWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oXG4gICAgICAgICd0aHVtYnMtdXAnLFxuICAgICAgICBzYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdhc3NldHMvaW1nL2V4YW1wbGVzL3RodW1idXAtaWNvbi5zdmcnKSk7XG4gIH1cbn1cbiJdfQ==