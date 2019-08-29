import { Component } from '@angular/core';
/**
 * @title Input with hints
 */
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-hint-example',
                    template: "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n  \n</form>\n",
                    styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
                }] }
    ];
    return InputHintExample;
}());
export { InputHintExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L2lucHV0LWhpbnQvaW5wdXQtaGludC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0lBSytCLENBQUM7O2dCQUwvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIseVdBQXNDOztpQkFFdkM7O0lBQzhCLHVCQUFDO0NBQUEsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dCB3aXRoIGhpbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWhpbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtaGludC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtaGludC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhpbnRFeGFtcGxlIHt9XG4iXX0=