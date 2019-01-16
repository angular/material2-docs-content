/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
/**
 * \@title Dialog with header, scrollable content and actions
 */
export class DialogContentExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
DialogContentExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example',
                template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/** @nocollapse */
DialogContentExample.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    DialogContentExample.prototype.dialog;
}
export class DialogContentExampleDialog {
}
DialogContentExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-content-example-dialog',
                template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n"
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVU1QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7O0lBRXhDLFVBQVU7O2NBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBRTlELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw4RUFBMEM7O2FBRTNDOzs7O1lBVE8sU0FBUzs7OztJQVdILHNDQUF3Qjs7QUFldEMsTUFBTSxPQUFPLDBCQUEwQjs7O1lBSnRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxnckhBQWlEO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIHdpdGggaGVhZGVyLCBzY3JvbGxhYmxlIGNvbnRlbnQgYW5kIGFjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1jb250ZW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRlbnRFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBEaWFsb2cgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nIHt9XG4iXX0=