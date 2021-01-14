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
DialogContentExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(1, "Open dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogContentExample, [{
        type: Component,
        args: [{
                selector: 'dialog-content-example',
                templateUrl: 'dialog-content-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
export class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250ZW50LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRW5EOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUvRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3RkFUVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1ZqQyxpQ0FBMEM7UUFBdkIsaUdBQVMsZ0JBQVksSUFBQztRQUFDLDJCQUFXO1FBQUEsaUJBQVM7O3VGRFVqRCxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0M7O0FBaUJELE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRRTFCdkMsNkJBQXFCO1FBQUEsK0JBQWU7UUFBQSxpQkFBSztRQUN6Qyw2Q0FDRTtRQUFBLDBCQUFJO1FBQUEsNENBQTRCO1FBQUEsaUJBQUs7UUFDckMseUJBQUc7UUFBQSxrTUFDcUY7UUFBQSxpQkFBSTtRQUU1RiwwQkFBSTtRQUFBLG1DQUF1QjtRQUFBLGlCQUFLO1FBQ2hDLHlCQUFHO1FBQUEsNlJBRXFGO1FBQUEsaUJBQUk7UUFFNUYsMkJBQUk7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBSztRQUMzQiwwQkFBRztRQUFBLDZXQUdpRTtRQUFBLGlCQUFJO1FBRXhFLDJCQUFJO1FBQUEsa0NBQWlCO1FBQUEsaUJBQUs7UUFDMUIsMEJBQUc7UUFBQSxxS0FDMEQ7UUFBQSxpQkFBSTtRQUVqRSwyQkFBSTtRQUFBLGlDQUFnQjtRQUFBLGlCQUFLO1FBRXpCLDBCQUFHO1FBQUEsNlVBR3dEO1FBQUEsaUJBQUk7UUFFL0QsMkJBQUk7UUFBQSxzQ0FBcUI7UUFBQSxpQkFBSztRQUU5QiwwQkFBRztRQUFBLHFRQUV3RDtRQUFBLGlCQUFJO1FBRS9ELDBCQUFHO1FBQUEsK1ZBR3dEO1FBQUEsaUJBQUk7UUFFL0QsMEJBQUc7UUFBQSx1TUFDc0Y7UUFBQSxpQkFBSTtRQUU3RiwwQkFBRztRQUFBLG1PQUVxQjtRQUFBLGlCQUFJO1FBRTVCLDBCQUFHO1FBQUEsK0pBQ2lEO1FBQUEsaUJBQUk7UUFFeEQsMEJBQUc7UUFBQSwwUEFFZ0Q7UUFBQSxpQkFBSTtRQUV2RCwwQkFBRztRQUFBLDhKQUM2QztRQUFBLGlCQUFJO1FBRXBELDBCQUFHO1FBQUEsdVBBRWdEO1FBQUEsaUJBQUk7UUFDekQsaUJBQXFCO1FBQ3JCLDhDQUNFO1FBQUEsa0NBQW9DO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUNuRCxrQ0FBNkQ7UUFBQSx3QkFBTztRQUFBLGlCQUFTO1FBQy9FLGlCQUFxQjs7UUFEQSxnQkFBeUI7UUFBekIsdUNBQXlCOzt1RkZwQ2pDLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgd2l0aCBoZWFkZXIsIHNjcm9sbGFibGUgY29udGVudCBhbmQgYWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctY29udGVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctY29udGVudC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250ZW50RXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2cpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRGlhbG9nIHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1jb250ZW50LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5PcGVuIGRpYWxvZzwvYnV0dG9uPlxuIiwiPGgyIG1hdC1kaWFsb2ctdGl0bGU+SW5zdGFsbCBBbmd1bGFyPC9oMj5cbjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8aDM+RGV2ZWxvcCBhY3Jvc3MgYWxsIHBsYXRmb3JtczwvaDM+XG4gIDxwPkxlYXJuIG9uZSB3YXkgdG8gYnVpbGQgYXBwbGljYXRpb25zIHdpdGggQW5ndWxhciBhbmQgcmV1c2UgeW91ciBjb2RlIGFuZCBhYmlsaXRpZXMgdG8gYnVpbGRcbiAgICBhcHBzIGZvciBhbnkgZGVwbG95bWVudCB0YXJnZXQuIEZvciB3ZWIsIG1vYmlsZSB3ZWIsIG5hdGl2ZSBtb2JpbGUgYW5kIG5hdGl2ZSBkZXNrdG9wLjwvcD5cblxuICA8aDM+U3BlZWQgJmFtcDsgUGVyZm9ybWFuY2U8L2gzPlxuICA8cD5BY2hpZXZlIHRoZSBtYXhpbXVtIHNwZWVkIHBvc3NpYmxlIG9uIHRoZSBXZWIgUGxhdGZvcm0gdG9kYXksIGFuZCB0YWtlIGl0IGZ1cnRoZXIsIHZpYSBXZWJcbiAgICBXb3JrZXJzIGFuZCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIEFuZ3VsYXIgcHV0cyB5b3UgaW4gY29udHJvbCBvdmVyIHNjYWxhYmlsaXR5LiBNZWV0IGh1Z2VcbiAgICBkYXRhIHJlcXVpcmVtZW50cyBieSBidWlsZGluZyBkYXRhIG1vZGVscyBvbiBSeEpTLCBJbW11dGFibGUuanMgb3IgYW5vdGhlciBwdXNoLW1vZGVsLjwvcD5cblxuICA8aDM+SW5jcmVkaWJsZSB0b29saW5nPC9oMz5cbiAgPHA+QnVpbGQgZmVhdHVyZXMgcXVpY2tseSB3aXRoIHNpbXBsZSwgZGVjbGFyYXRpdmUgdGVtcGxhdGVzLiBFeHRlbmQgdGhlIHRlbXBsYXRlIGxhbmd1YWdlIHdpdGhcbiAgICB5b3VyIG93biBjb21wb25lbnRzIGFuZCB1c2UgYSB3aWRlIGFycmF5IG9mIGV4aXN0aW5nIGNvbXBvbmVudHMuIEdldCBpbW1lZGlhdGUgQW5ndWxhci1zcGVjaWZpY1xuICAgIGhlbHAgYW5kIGZlZWRiYWNrIHdpdGggbmVhcmx5IGV2ZXJ5IElERSBhbmQgZWRpdG9yLiBBbGwgdGhpcyBjb21lcyB0b2dldGhlciBzbyB5b3UgY2FuIGZvY3VzXG4gICAgb24gYnVpbGRpbmcgYW1hemluZyBhcHBzIHJhdGhlciB0aGFuIHRyeWluZyB0byBtYWtlIHRoZSBjb2RlIHdvcmsuPC9wPlxuXG4gIDxoMz5Mb3ZlZCBieSBtaWxsaW9uczwvaDM+XG4gIDxwPkZyb20gcHJvdG90eXBlIHRocm91Z2ggZ2xvYmFsIGRlcGxveW1lbnQsIEFuZ3VsYXIgZGVsaXZlcnMgdGhlIHByb2R1Y3Rpdml0eSBhbmQgc2NhbGFibGVcbiAgICBpbmZyYXN0cnVjdHVyZSB0aGF0IHN1cHBvcnRzIEdvb2dsZSdzIGxhcmdlc3QgYXBwbGljYXRpb25zLjwvcD5cblxuICA8aDM+V2hhdCBpcyBBbmd1bGFyPzwvaDM+XG5cbiAgPHA+QW5ndWxhciBpcyBhIHBsYXRmb3JtIHRoYXQgbWFrZXMgaXQgZWFzeSB0byBidWlsZCBhcHBsaWNhdGlvbnMgd2l0aCB0aGUgd2ViLiBBbmd1bGFyXG4gICAgY29tYmluZXMgZGVjbGFyYXRpdmUgdGVtcGxhdGVzLCBkZXBlbmRlbmN5IGluamVjdGlvbiwgZW5kIHRvIGVuZCB0b29saW5nLCBhbmQgaW50ZWdyYXRlZFxuICAgIGJlc3QgcHJhY3RpY2VzIHRvIHNvbHZlIGRldmVsb3BtZW50IGNoYWxsZW5nZXMuIEFuZ3VsYXIgZW1wb3dlcnMgZGV2ZWxvcGVycyB0byBidWlsZFxuICAgIGFwcGxpY2F0aW9ucyB0aGF0IGxpdmUgb24gdGhlIHdlYiwgbW9iaWxlLCBvciB0aGUgZGVza3RvcDwvcD5cblxuICA8aDM+QXJjaGl0ZWN0dXJlIG92ZXJ2aWV3PC9oMz5cblxuICA8cD5Bbmd1bGFyIGlzIGEgcGxhdGZvcm0gYW5kIGZyYW1ld29yayBmb3IgYnVpbGRpbmcgY2xpZW50IGFwcGxpY2F0aW9ucyBpbiBIVE1MIGFuZCBUeXBlU2NyaXB0LlxuICBBbmd1bGFyIGlzIGl0c2VsZiB3cml0dGVuIGluIFR5cGVTY3JpcHQuIEl0IGltcGxlbWVudHMgY29yZSBhbmQgb3B0aW9uYWwgZnVuY3Rpb25hbGl0eSBhcyBhXG4gIHNldCBvZiBUeXBlU2NyaXB0IGxpYnJhcmllcyB0aGF0IHlvdSBpbXBvcnQgaW50byB5b3VyIGFwcHMuPC9wPlxuXG4gIDxwPlRoZSBiYXNpYyBidWlsZGluZyBibG9ja3Mgb2YgYW4gQW5ndWxhciBhcHBsaWNhdGlvbiBhcmUgTmdNb2R1bGVzLCB3aGljaCBwcm92aWRlIGEgY29tcGlsYXRpb25cbiAgY29udGV4dCBmb3IgY29tcG9uZW50cy4gTmdNb2R1bGVzIGNvbGxlY3QgcmVsYXRlZCBjb2RlIGludG8gZnVuY3Rpb25hbCBzZXRzOyBhbiBBbmd1bGFyIGFwcCBpc1xuICBkZWZpbmVkIGJ5IGEgc2V0IG9mIE5nTW9kdWxlcy4gQW4gYXBwIGFsd2F5cyBoYXMgYXQgbGVhc3QgYSByb290IG1vZHVsZSB0aGF0IGVuYWJsZXNcbiAgYm9vdHN0cmFwcGluZywgYW5kIHR5cGljYWxseSBoYXMgbWFueSBtb3JlIGZlYXR1cmUgbW9kdWxlcy48L3A+XG5cbiAgPHA+Q29tcG9uZW50cyBkZWZpbmUgdmlld3MsIHdoaWNoIGFyZSBzZXRzIG9mIHNjcmVlbiBlbGVtZW50cyB0aGF0IEFuZ3VsYXIgY2FuIGNob29zZSBhbW9uZyBhbmRcbiAgbW9kaWZ5IGFjY29yZGluZyB0byB5b3VyIHByb2dyYW0gbG9naWMgYW5kIGRhdGEuIEV2ZXJ5IGFwcCBoYXMgYXQgbGVhc3QgYSByb290IGNvbXBvbmVudC48L3A+XG5cbiAgPHA+Q29tcG9uZW50cyB1c2Ugc2VydmljZXMsIHdoaWNoIHByb3ZpZGUgc3BlY2lmaWMgZnVuY3Rpb25hbGl0eSBub3QgZGlyZWN0bHkgcmVsYXRlZCB0byB2aWV3cy5cbiAgU2VydmljZSBwcm92aWRlcnMgY2FuIGJlIGluamVjdGVkIGludG8gY29tcG9uZW50cyBhcyBkZXBlbmRlbmNpZXMsIG1ha2luZyB5b3VyIGNvZGUgbW9kdWxhcixcbiAgcmV1c2FibGUsIGFuZCBlZmZpY2llbnQuPC9wPlxuXG4gIDxwPkJvdGggY29tcG9uZW50cyBhbmQgc2VydmljZXMgYXJlIHNpbXBseSBjbGFzc2VzLCB3aXRoIGRlY29yYXRvcnMgdGhhdCBtYXJrIHRoZWlyIHR5cGUgYW5kXG4gIHByb3ZpZGUgbWV0YWRhdGEgdGhhdCB0ZWxscyBBbmd1bGFyIGhvdyB0byB1c2UgdGhlbS48L3A+XG5cbiAgPHA+VGhlIG1ldGFkYXRhIGZvciBhIGNvbXBvbmVudCBjbGFzcyBhc3NvY2lhdGVzIGl0IHdpdGggYSB0ZW1wbGF0ZSB0aGF0IGRlZmluZXMgYSB2aWV3LiBBXG4gIHRlbXBsYXRlIGNvbWJpbmVzIG9yZGluYXJ5IEhUTUwgd2l0aCBBbmd1bGFyIGRpcmVjdGl2ZXMgYW5kIGJpbmRpbmcgbWFya3VwIHRoYXQgYWxsb3cgQW5ndWxhclxuICB0byBtb2RpZnkgdGhlIEhUTUwgYmVmb3JlIHJlbmRlcmluZyBpdCBmb3IgZGlzcGxheS48L3A+XG5cbiAgPHA+VGhlIG1ldGFkYXRhIGZvciBhIHNlcnZpY2UgY2xhc3MgcHJvdmlkZXMgdGhlIGluZm9ybWF0aW9uIEFuZ3VsYXIgbmVlZHMgdG8gbWFrZSBpdCBhdmFpbGFibGVcbiAgdG8gY29tcG9uZW50cyB0aHJvdWdoIERlcGVuZGVuY3kgSW5qZWN0aW9uIChESSkuPC9wPlxuXG4gIDxwPkFuIGFwcCdzIGNvbXBvbmVudHMgdHlwaWNhbGx5IGRlZmluZSBtYW55IHZpZXdzLCBhcnJhbmdlZCBoaWVyYXJjaGljYWxseS4gQW5ndWxhciBwcm92aWRlc1xuICB0aGUgUm91dGVyIHNlcnZpY2UgdG8gaGVscCB5b3UgZGVmaW5lIG5hdmlnYXRpb24gcGF0aHMgYW1vbmcgdmlld3MuIFRoZSByb3V0ZXIgcHJvdmlkZXNcbiAgc29waGlzdGljYXRlZCBpbi1icm93c2VyIG5hdmlnYXRpb25hbCBjYXBhYmlsaXRpZXMuPC9wPlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG48bWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPkNhbmNlbDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwidHJ1ZVwiIGNka0ZvY3VzSW5pdGlhbD5JbnN0YWxsPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==