import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
    `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
    `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
/**
 * @title SVG icons
 */
export class IconSvgExample {
    constructor(iconRegistry, sanitizer) {
        // Note that we provide the icon here as a string literal here due to a limitation in
        // Stackblitz. If you want to provide the icon from a URL, you can use:
        // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
        iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: IconSvgExample, deps: [{ token: i1.MatIconRegistry }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: IconSvgExample, isStandalone: true, selector: "icon-svg-example", ngImport: i0, template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n", dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: IconSvgExample, decorators: [{
            type: Component,
            args: [{ selector: 'icon-svg-example', standalone: true, imports: [MatIconModule], template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vaWNvbi1zdmcvaWNvbi1zdmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUUsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFdEUsTUFBTSxZQUFZLEdBQ2hCOzs7d0ZBR3NGO0lBQ3RGLGlGQUFpRjtJQUNqRjs7Q0FFRCxDQUFDO0FBRUY7O0dBRUc7QUFPSCxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFZLFlBQTZCLEVBQUUsU0FBdUI7UUFDaEUscUZBQXFGO1FBQ3JGLHVFQUF1RTtRQUN2RSxnR0FBZ0c7UUFDaEcsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO3FIQU5VLGNBQWM7eUdBQWQsY0FBYyw0RUN2QjNCLCtHQUNBLDJDRG9CWSxhQUFhOztrR0FFWixjQUFjO2tCQU4xQixTQUFTOytCQUNFLGtCQUFrQixjQUVoQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge01hdEljb25SZWdpc3RyeSwgTWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmNvbnN0IFRIVU1CVVBfSUNPTiA9XG4gIGBcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiPlxuICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgPHBhdGggZD1cIk0xIDIxaDRWOUgxdjEyem0yMi0xMWMwLTEuMS0uOS0yLTItMmgtNi4zMWwuOTUtNC41Ny4wMy0uMzJjMC0uNDEtLjE3LS43OS0uYCArXG4gIGA0NC0xLjA2TDE0LjE3IDEgNy41OSA3LjU5QzcuMjIgNy45NSA3IDguNDUgNyA5djEwYzAgMS4xLjkgMiAyIDJoOWMuODMgMCAxLjU0LS41YCArXG4gIGAxLjg0LTEuMjJsMy4wMi03LjA1Yy4wOS0uMjMuMTQtLjQ3LjE0LS43M3YtMS45MWwtLjAxLS4wMUwyMyAxMHpcIi8+XG4gIDwvc3ZnPlxuYDtcblxuLyoqXG4gKiBAdGl0bGUgU1ZHIGljb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ljb24tc3ZnLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ljb24tc3ZnLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvblN2Z0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICAvLyBOb3RlIHRoYXQgd2UgcHJvdmlkZSB0aGUgaWNvbiBoZXJlIGFzIGEgc3RyaW5nIGxpdGVyYWwgaGVyZSBkdWUgdG8gYSBsaW1pdGF0aW9uIGluXG4gICAgLy8gU3RhY2tibGl0ei4gSWYgeW91IHdhbnQgdG8gcHJvdmlkZSB0aGUgaWNvbiBmcm9tIGEgVVJMLCB5b3UgY2FuIHVzZTpcbiAgICAvLyBgaWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ3RodW1icy11cCcsIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2ljb24uc3ZnJykpO2BcbiAgICBpY29uUmVnaXN0cnkuYWRkU3ZnSWNvbkxpdGVyYWwoJ3RodW1icy11cCcsIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChUSFVNQlVQX0lDT04pKTtcbiAgfVxufVxuIiwiPG1hdC1pY29uIHN2Z0ljb249XCJ0aHVtYnMtdXBcIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgdGh1bWJzIHVwIFNWRyBpY29uXCI+PC9tYXQtaWNvbj5cbiJdfQ==