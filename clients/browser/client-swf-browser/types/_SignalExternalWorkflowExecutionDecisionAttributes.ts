/**
 * <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 */
export interface _SignalExternalWorkflowExecutionDecisionAttributes {
  /**
   * <p> The <code>workflowId</code> of the workflow execution to be signaled.</p>
   */
  workflowId: string;

  /**
   * <p>The <code>runId</code> of the workflow execution to be signaled.</p>
   */
  runId?: string;

  /**
   * <p> The name of the signal.The target workflow execution uses the signal name and input to process the signal.</p>
   */
  signalName: string;

  /**
   * <p> The input data to be provided with the signal. The target workflow execution uses the signal name and input data to process the signal.</p>
   */
  input?: string;

  /**
   * <p>The data attached to the event that can be used by the decider in subsequent decision tasks.</p>
   */
  control?: string;
}

export type _UnmarshalledSignalExternalWorkflowExecutionDecisionAttributes = _SignalExternalWorkflowExecutionDecisionAttributes;
