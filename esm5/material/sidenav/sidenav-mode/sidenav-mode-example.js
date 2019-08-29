import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @title Sidenav with configurable mode */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-mode-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav [mode]=\"mode.value\">\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                    styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"]
                }] }
    ];
    return SidenavModeExample;
}());
export { SidenavModeExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LW1vZGUvc2lkZW5hdi1tb2RlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsNENBQTRDO0FBQzVDO0lBQUE7UUFNRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNwRyxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsdW9DQUF3Qzs7aUJBRXpDOztJQUlELHlCQUFDO0NBQUEsQUFSRCxJQVFDO1NBSFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIFNpZGVuYXYgd2l0aCBjb25maWd1cmFibGUgbW9kZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1tb2RlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtbW9kZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1tb2RlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZNb2RlRXhhbXBsZSB7XG4gIG1vZGUgPSBuZXcgRm9ybUNvbnRyb2woJ292ZXInKTtcbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iXX0=