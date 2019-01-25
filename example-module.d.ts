import { AutocompleteOptgroupExample } from './autocomplete-optgroup/autocomplete-optgroup-example';
import { BottomSheetOverviewExampleSheet, BottomSheetOverviewExample } from './bottom-sheet-overview/bottom-sheet-overview-example';
import { CustomStepper } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
import { CdkDragDropRootElementExample } from './cdk-drag-drop-root-element/cdk-drag-drop-root-element-example';
import { CdkPlatformOverviewExample } from './cdk-platform-overview/cdk-platform-overview-example';
import { CdkPortalOverviewExample } from './cdk-portal-overview/cdk-portal-overview-example';
import { ExampleHeader } from './datepicker-custom-header/datepicker-custom-header-example';
import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DialogContentExample } from './dialog-content/dialog-content-example';
import { DialogDataExampleDialog } from './dialog-data/dialog-data-example';
import { DialogOverviewExampleDialog } from './dialog-overview/dialog-overview-example';
import { FocusMonitorDirectivesExample } from './focus-monitor-directives/focus-monitor-directives-example';
import { FocusMonitorFocusViaExample } from './focus-monitor-focus-via/focus-monitor-focus-via-example';
import { FocusMonitorOverviewExample } from './focus-monitor-overview/focus-monitor-overview-example';
import { MyTelInput } from './form-field-custom-control/form-field-custom-control-example';
import { FormFieldLabelExample } from './form-field-label/form-field-label-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import { SidenavResponsiveExample } from './sidenav-responsive/sidenav-responsive-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SnackBarComponentExample } from './snack-bar-component/snack-bar-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SnackBarPositionExample } from './snack-bar-position/snack-bar-position-example';
import { StepperEditableExample } from './stepper-editable/stepper-editable-example';
import { StepperErrorsExample } from './stepper-errors/stepper-errors-example';
import { StepperLabelPositionBottomExample } from './stepper-label-position-bottom/stepper-label-position-bottom-example';
import { StepperOptionalExample } from './stepper-optional/stepper-optional-example';
import { StepperOverviewExample } from './stepper-overview/stepper-overview-example';
import { StepperStatesExample } from './stepper-states/stepper-states-example';
import { StepperVerticalExample } from './stepper-vertical/stepper-vertical-example';
import { TableHttpExample } from './table-http/table-http-example';
import { SimpleColumn } from './table-simple-column/table-simple-column-example';
import { TextFieldAutofillMonitorExample } from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import { TextFieldAutosizeTextareaExample } from './text-field-autosize-textarea/text-field-autosize-textarea-example';
import { TreeChecklistExample } from './tree-checklist/tree-checklist-example';
import { TreeDynamicExample } from './tree-dynamic/tree-dynamic-example';
import { TreeLoadmoreExample } from './tree-loadmore/tree-loadmore-example';
export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}
export declare const EXAMPLE_COMPONENTS: {
    [key: string]: LiveExample;
};
export declare const EXAMPLE_LIST: (typeof AutocompleteOptgroupExample | typeof BottomSheetOverviewExample | typeof BottomSheetOverviewExampleSheet | typeof CustomStepper | typeof CdkDragDropRootElementExample | typeof CdkPlatformOverviewExample | typeof CdkPortalOverviewExample | typeof ExampleHeader | typeof DatepickerLocaleExample | typeof DialogContentExample | typeof DialogDataExampleDialog | typeof DialogOverviewExampleDialog | typeof FocusMonitorDirectivesExample | typeof FocusMonitorFocusViaExample | typeof FocusMonitorOverviewExample | typeof MyTelInput | typeof FormFieldLabelExample | typeof IconSvgExample | typeof SidenavResponsiveExample | typeof SlideToggleFormsExample | typeof SnackBarComponentExample | typeof SnackBarOverviewExample | typeof SnackBarPositionExample | typeof StepperEditableExample | typeof StepperErrorsExample | typeof StepperLabelPositionBottomExample | typeof StepperOptionalExample | typeof StepperOverviewExample | typeof StepperStatesExample | typeof StepperVerticalExample | typeof TableHttpExample | typeof SimpleColumn | typeof TextFieldAutofillMonitorExample | typeof TextFieldAutosizeTextareaExample | typeof TreeChecklistExample | typeof TreeDynamicExample | typeof TreeLoadmoreExample)[];
export declare class ExampleModule {
}
