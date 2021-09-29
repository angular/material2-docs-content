import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog with header, scrollable content and actions
 */
export class DialogContentExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
DialogContentExample.ɵfac = function DialogContentExample_Factory(t) { return new (t || DialogContentExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogContentExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogContentExample, [{
        type: Component,
        args: [{ selector: 'dialog-content-example', template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n" }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
export class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1, "Install Angular");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-content", 1);
        i0.ɵɵelementStart(3, "h3");
        i0.ɵɵtext(4, "Develop across all platforms");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h3");
        i0.ɵɵtext(8, "Speed & Performance");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "h3");
        i0.ɵɵtext(12, "Incredible tooling");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵtext(14, "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "h3");
        i0.ɵɵtext(16, "Loved by millions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p");
        i0.ɵɵtext(18, "From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h3");
        i0.ɵɵtext(20, "What is Angular?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22, "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "h3");
        i0.ɵɵtext(24, "Architecture overview");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p");
        i0.ɵɵtext(26, "Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "p");
        i0.ɵɵtext(28, "The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "p");
        i0.ɵɵtext(30, "Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "p");
        i0.ɵɵtext(32, "Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "p");
        i0.ɵɵtext(34, "Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "p");
        i0.ɵɵtext(36, "The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "p");
        i0.ɵɵtext(38, "The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵtext(40, "An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "mat-dialog-actions", 2);
        i0.ɵɵelementStart(42, "button", 3);
        i0.ɵɵtext(43, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "button", 4);
        i0.ɵɵtext(45, "Install");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(44);
        i0.ɵɵproperty("mat-dialog-close", true);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogContentExampleDialog, [{
        type: Component,
        args: [{ selector: 'dialog-content-example-dialog', template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250ZW50LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRW5EOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUvRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3RkFUVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ1ZqQyxpQ0FBMEM7UUFBdkIsaUdBQVMsZ0JBQVksSUFBQztRQUFDLDJCQUFXO1FBQUEsaUJBQVM7O3VGRFVqRCxvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDRSx3QkFBd0I7O0FBbUJwQyxNQUFNLE9BQU8sMEJBQTBCOztvR0FBMUIsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUUxQnZDLDZCQUFxQjtRQUFBLCtCQUFlO1FBQUEsaUJBQUs7UUFDekMsNkNBQTJDO1FBQ3pDLDBCQUFJO1FBQUEsNENBQTRCO1FBQUEsaUJBQUs7UUFDckMseUJBQUc7UUFBQSxrTUFDcUY7UUFBQSxpQkFBSTtRQUU1RiwwQkFBSTtRQUFBLG1DQUF1QjtRQUFBLGlCQUFLO1FBQ2hDLHlCQUFHO1FBQUEsNlJBRXFGO1FBQUEsaUJBQUk7UUFFNUYsMkJBQUk7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBSztRQUMzQiwwQkFBRztRQUFBLDZXQUdpRTtRQUFBLGlCQUFJO1FBRXhFLDJCQUFJO1FBQUEsa0NBQWlCO1FBQUEsaUJBQUs7UUFDMUIsMEJBQUc7UUFBQSxxS0FDMEQ7UUFBQSxpQkFBSTtRQUVqRSwyQkFBSTtRQUFBLGlDQUFnQjtRQUFBLGlCQUFLO1FBRXpCLDBCQUFHO1FBQUEsNlVBR3dEO1FBQUEsaUJBQUk7UUFFL0QsMkJBQUk7UUFBQSxzQ0FBcUI7UUFBQSxpQkFBSztRQUU5QiwwQkFBRztRQUFBLHFRQUV3RDtRQUFBLGlCQUFJO1FBRS9ELDBCQUFHO1FBQUEsK1ZBR3dEO1FBQUEsaUJBQUk7UUFFL0QsMEJBQUc7UUFBQSx1TUFDc0Y7UUFBQSxpQkFBSTtRQUU3RiwwQkFBRztRQUFBLG1PQUVxQjtRQUFBLGlCQUFJO1FBRTVCLDBCQUFHO1FBQUEsK0pBQ2lEO1FBQUEsaUJBQUk7UUFFeEQsMEJBQUc7UUFBQSwwUEFFZ0Q7UUFBQSxpQkFBSTtRQUV2RCwwQkFBRztRQUFBLDhKQUM2QztRQUFBLGlCQUFJO1FBRXBELDBCQUFHO1FBQUEsdVBBRWdEO1FBQUEsaUJBQUk7UUFDekQsaUJBQXFCO1FBQ3JCLDhDQUFnQztRQUM5QixrQ0FBb0M7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ25ELGtDQUE2RDtRQUFBLHdCQUFPO1FBQUEsaUJBQVM7UUFDL0UsaUJBQXFCOztRQURBLGdCQUF5QjtRQUF6Qix1Q0FBeUI7O3VGRnBDakMsMEJBQTBCO2NBSnRDLFNBQVM7MkJBQ0UsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbi8qKlxuICogQHRpdGxlIERpYWxvZyB3aXRoIGhlYWRlciwgc2Nyb2xsYWJsZSBjb250ZW50IGFuZCBhY3Rpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1jb250ZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1jb250ZW50LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRlbnRFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBEaWFsb2cgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRlbnRFeGFtcGxlRGlhbG9nIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG4iLCI8aDIgbWF0LWRpYWxvZy10aXRsZT5JbnN0YWxsIEFuZ3VsYXI8L2gyPlxuPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+XG4gIDxoMz5EZXZlbG9wIGFjcm9zcyBhbGwgcGxhdGZvcm1zPC9oMz5cbiAgPHA+TGVhcm4gb25lIHdheSB0byBidWlsZCBhcHBsaWNhdGlvbnMgd2l0aCBBbmd1bGFyIGFuZCByZXVzZSB5b3VyIGNvZGUgYW5kIGFiaWxpdGllcyB0byBidWlsZFxuICAgIGFwcHMgZm9yIGFueSBkZXBsb3ltZW50IHRhcmdldC4gRm9yIHdlYiwgbW9iaWxlIHdlYiwgbmF0aXZlIG1vYmlsZSBhbmQgbmF0aXZlIGRlc2t0b3AuPC9wPlxuXG4gIDxoMz5TcGVlZCAmYW1wOyBQZXJmb3JtYW5jZTwvaDM+XG4gIDxwPkFjaGlldmUgdGhlIG1heGltdW0gc3BlZWQgcG9zc2libGUgb24gdGhlIFdlYiBQbGF0Zm9ybSB0b2RheSwgYW5kIHRha2UgaXQgZnVydGhlciwgdmlhIFdlYlxuICAgIFdvcmtlcnMgYW5kIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gQW5ndWxhciBwdXRzIHlvdSBpbiBjb250cm9sIG92ZXIgc2NhbGFiaWxpdHkuIE1lZXQgaHVnZVxuICAgIGRhdGEgcmVxdWlyZW1lbnRzIGJ5IGJ1aWxkaW5nIGRhdGEgbW9kZWxzIG9uIFJ4SlMsIEltbXV0YWJsZS5qcyBvciBhbm90aGVyIHB1c2gtbW9kZWwuPC9wPlxuXG4gIDxoMz5JbmNyZWRpYmxlIHRvb2xpbmc8L2gzPlxuICA8cD5CdWlsZCBmZWF0dXJlcyBxdWlja2x5IHdpdGggc2ltcGxlLCBkZWNsYXJhdGl2ZSB0ZW1wbGF0ZXMuIEV4dGVuZCB0aGUgdGVtcGxhdGUgbGFuZ3VhZ2Ugd2l0aFxuICAgIHlvdXIgb3duIGNvbXBvbmVudHMgYW5kIHVzZSBhIHdpZGUgYXJyYXkgb2YgZXhpc3RpbmcgY29tcG9uZW50cy4gR2V0IGltbWVkaWF0ZSBBbmd1bGFyLXNwZWNpZmljXG4gICAgaGVscCBhbmQgZmVlZGJhY2sgd2l0aCBuZWFybHkgZXZlcnkgSURFIGFuZCBlZGl0b3IuIEFsbCB0aGlzIGNvbWVzIHRvZ2V0aGVyIHNvIHlvdSBjYW4gZm9jdXNcbiAgICBvbiBidWlsZGluZyBhbWF6aW5nIGFwcHMgcmF0aGVyIHRoYW4gdHJ5aW5nIHRvIG1ha2UgdGhlIGNvZGUgd29yay48L3A+XG5cbiAgPGgzPkxvdmVkIGJ5IG1pbGxpb25zPC9oMz5cbiAgPHA+RnJvbSBwcm90b3R5cGUgdGhyb3VnaCBnbG9iYWwgZGVwbG95bWVudCwgQW5ndWxhciBkZWxpdmVycyB0aGUgcHJvZHVjdGl2aXR5IGFuZCBzY2FsYWJsZVxuICAgIGluZnJhc3RydWN0dXJlIHRoYXQgc3VwcG9ydHMgR29vZ2xlJ3MgbGFyZ2VzdCBhcHBsaWNhdGlvbnMuPC9wPlxuXG4gIDxoMz5XaGF0IGlzIEFuZ3VsYXI/PC9oMz5cblxuICA8cD5Bbmd1bGFyIGlzIGEgcGxhdGZvcm0gdGhhdCBtYWtlcyBpdCBlYXN5IHRvIGJ1aWxkIGFwcGxpY2F0aW9ucyB3aXRoIHRoZSB3ZWIuIEFuZ3VsYXJcbiAgICBjb21iaW5lcyBkZWNsYXJhdGl2ZSB0ZW1wbGF0ZXMsIGRlcGVuZGVuY3kgaW5qZWN0aW9uLCBlbmQgdG8gZW5kIHRvb2xpbmcsIGFuZCBpbnRlZ3JhdGVkXG4gICAgYmVzdCBwcmFjdGljZXMgdG8gc29sdmUgZGV2ZWxvcG1lbnQgY2hhbGxlbmdlcy4gQW5ndWxhciBlbXBvd2VycyBkZXZlbG9wZXJzIHRvIGJ1aWxkXG4gICAgYXBwbGljYXRpb25zIHRoYXQgbGl2ZSBvbiB0aGUgd2ViLCBtb2JpbGUsIG9yIHRoZSBkZXNrdG9wPC9wPlxuXG4gIDxoMz5BcmNoaXRlY3R1cmUgb3ZlcnZpZXc8L2gzPlxuXG4gIDxwPkFuZ3VsYXIgaXMgYSBwbGF0Zm9ybSBhbmQgZnJhbWV3b3JrIGZvciBidWlsZGluZyBjbGllbnQgYXBwbGljYXRpb25zIGluIEhUTUwgYW5kIFR5cGVTY3JpcHQuXG4gIEFuZ3VsYXIgaXMgaXRzZWxmIHdyaXR0ZW4gaW4gVHlwZVNjcmlwdC4gSXQgaW1wbGVtZW50cyBjb3JlIGFuZCBvcHRpb25hbCBmdW5jdGlvbmFsaXR5IGFzIGFcbiAgc2V0IG9mIFR5cGVTY3JpcHQgbGlicmFyaWVzIHRoYXQgeW91IGltcG9ydCBpbnRvIHlvdXIgYXBwcy48L3A+XG5cbiAgPHA+VGhlIGJhc2ljIGJ1aWxkaW5nIGJsb2NrcyBvZiBhbiBBbmd1bGFyIGFwcGxpY2F0aW9uIGFyZSBOZ01vZHVsZXMsIHdoaWNoIHByb3ZpZGUgYSBjb21waWxhdGlvblxuICBjb250ZXh0IGZvciBjb21wb25lbnRzLiBOZ01vZHVsZXMgY29sbGVjdCByZWxhdGVkIGNvZGUgaW50byBmdW5jdGlvbmFsIHNldHM7IGFuIEFuZ3VsYXIgYXBwIGlzXG4gIGRlZmluZWQgYnkgYSBzZXQgb2YgTmdNb2R1bGVzLiBBbiBhcHAgYWx3YXlzIGhhcyBhdCBsZWFzdCBhIHJvb3QgbW9kdWxlIHRoYXQgZW5hYmxlc1xuICBib290c3RyYXBwaW5nLCBhbmQgdHlwaWNhbGx5IGhhcyBtYW55IG1vcmUgZmVhdHVyZSBtb2R1bGVzLjwvcD5cblxuICA8cD5Db21wb25lbnRzIGRlZmluZSB2aWV3cywgd2hpY2ggYXJlIHNldHMgb2Ygc2NyZWVuIGVsZW1lbnRzIHRoYXQgQW5ndWxhciBjYW4gY2hvb3NlIGFtb25nIGFuZFxuICBtb2RpZnkgYWNjb3JkaW5nIHRvIHlvdXIgcHJvZ3JhbSBsb2dpYyBhbmQgZGF0YS4gRXZlcnkgYXBwIGhhcyBhdCBsZWFzdCBhIHJvb3QgY29tcG9uZW50LjwvcD5cblxuICA8cD5Db21wb25lbnRzIHVzZSBzZXJ2aWNlcywgd2hpY2ggcHJvdmlkZSBzcGVjaWZpYyBmdW5jdGlvbmFsaXR5IG5vdCBkaXJlY3RseSByZWxhdGVkIHRvIHZpZXdzLlxuICBTZXJ2aWNlIHByb3ZpZGVycyBjYW4gYmUgaW5qZWN0ZWQgaW50byBjb21wb25lbnRzIGFzIGRlcGVuZGVuY2llcywgbWFraW5nIHlvdXIgY29kZSBtb2R1bGFyLFxuICByZXVzYWJsZSwgYW5kIGVmZmljaWVudC48L3A+XG5cbiAgPHA+Qm90aCBjb21wb25lbnRzIGFuZCBzZXJ2aWNlcyBhcmUgc2ltcGx5IGNsYXNzZXMsIHdpdGggZGVjb3JhdG9ycyB0aGF0IG1hcmsgdGhlaXIgdHlwZSBhbmRcbiAgcHJvdmlkZSBtZXRhZGF0YSB0aGF0IHRlbGxzIEFuZ3VsYXIgaG93IHRvIHVzZSB0aGVtLjwvcD5cblxuICA8cD5UaGUgbWV0YWRhdGEgZm9yIGEgY29tcG9uZW50IGNsYXNzIGFzc29jaWF0ZXMgaXQgd2l0aCBhIHRlbXBsYXRlIHRoYXQgZGVmaW5lcyBhIHZpZXcuIEFcbiAgdGVtcGxhdGUgY29tYmluZXMgb3JkaW5hcnkgSFRNTCB3aXRoIEFuZ3VsYXIgZGlyZWN0aXZlcyBhbmQgYmluZGluZyBtYXJrdXAgdGhhdCBhbGxvdyBBbmd1bGFyXG4gIHRvIG1vZGlmeSB0aGUgSFRNTCBiZWZvcmUgcmVuZGVyaW5nIGl0IGZvciBkaXNwbGF5LjwvcD5cblxuICA8cD5UaGUgbWV0YWRhdGEgZm9yIGEgc2VydmljZSBjbGFzcyBwcm92aWRlcyB0aGUgaW5mb3JtYXRpb24gQW5ndWxhciBuZWVkcyB0byBtYWtlIGl0IGF2YWlsYWJsZVxuICB0byBjb21wb25lbnRzIHRocm91Z2ggRGVwZW5kZW5jeSBJbmplY3Rpb24gKERJKS48L3A+XG5cbiAgPHA+QW4gYXBwJ3MgY29tcG9uZW50cyB0eXBpY2FsbHkgZGVmaW5lIG1hbnkgdmlld3MsIGFycmFuZ2VkIGhpZXJhcmNoaWNhbGx5LiBBbmd1bGFyIHByb3ZpZGVzXG4gIHRoZSBSb3V0ZXIgc2VydmljZSB0byBoZWxwIHlvdSBkZWZpbmUgbmF2aWdhdGlvbiBwYXRocyBhbW9uZyB2aWV3cy4gVGhlIHJvdXRlciBwcm92aWRlc1xuICBzb3BoaXN0aWNhdGVkIGluLWJyb3dzZXIgbmF2aWdhdGlvbmFsIGNhcGFiaWxpdGllcy48L3A+XG48L21hdC1kaWFsb2ctY29udGVudD5cbjxtYXQtZGlhbG9nLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U+Q2FuY2VsPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJ0cnVlXCIgY2RrRm9jdXNJbml0aWFsPkluc3RhbGw8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuIl19