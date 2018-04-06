import { BottomSheetOverviewExampleSheet, BottomSheetOverviewExample } from './bottom-sheet-overview/bottom-sheet-overview-example';
import { CdkTreeFlatExample } from './cdk-tree-flat/cdk-tree-flat-example';
import { CdkTreeNestedExample } from './cdk-tree-nested/cdk-tree-nested-example';
import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DialogContentExample } from './dialog-content/dialog-content-example';
import { DialogOverviewExampleDialog } from './dialog-overview/dialog-overview-example';
import { FocusMonitorDirectivesExample } from './focus-monitor-directives/focus-monitor-directives-example';
import { FocusMonitorFocusViaExample } from './focus-monitor-focus-via/focus-monitor-focus-via-example';
import { FocusMonitorOverviewExample } from './focus-monitor-overview/focus-monitor-overview-example';
import { MyTelInput } from './form-field-custom-control/form-field-custom-control-example';
import { FormFieldLabelExample } from './form-field-label/form-field-label-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import { SidenavResponsiveExample } from './sidenav-responsive/sidenav-responsive-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { StepperOverviewExample } from './stepper-overview/stepper-overview-example';
import { TableHttpExample } from './table-http/table-http-example';
import { TextFieldAutofillMonitorExample } from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import { TextFieldAutosizeTextareaExample } from './text-field-autosize-textarea/text-field-autosize-textarea-example';
import { TreeChecklistExample } from './tree-checklist/tree-checklist-example';
import { TreeDynamicExample } from './tree-dynamic/tree-dynamic-example';
import { TreeFlatOverviewExample } from './tree-flat-overview/tree-flat-overview-example';
import { TreeLoadmoreExample } from './tree-loadmore/tree-loadmore-example';
import { TreeNestedOverviewExample } from './tree-nested-overview/tree-nested-overview-example';
export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}
export declare const EXAMPLE_COMPONENTS: {
    [key: string]: LiveExample;
};
export declare const EXAMPLE_LIST: (typeof BottomSheetOverviewExample | typeof BottomSheetOverviewExampleSheet | typeof CdkTreeFlatExample | typeof CdkTreeNestedExample | typeof DatepickerLocaleExample | typeof DialogContentExample | typeof DialogOverviewExampleDialog | typeof FocusMonitorDirectivesExample | typeof FocusMonitorFocusViaExample | typeof FocusMonitorOverviewExample | typeof MyTelInput | typeof FormFieldLabelExample | typeof IconSvgExample | typeof SidenavResponsiveExample | typeof SlideToggleFormsExample | typeof SnackBarOverviewExample | typeof StepperOverviewExample | typeof TableHttpExample | typeof TextFieldAutofillMonitorExample | typeof TextFieldAutosizeTextareaExample | typeof TreeChecklistExample | typeof TreeDynamicExample | typeof TreeFlatOverviewExample | typeof TreeLoadmoreExample | typeof TreeNestedOverviewExample)[];
export declare class ExampleModule {
}
