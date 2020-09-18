/**
 * Describes behaviour of object that can potentially provide messages for external logging.
 */
export interface ExternalMessageable {

  /**
   * Message to log to external source.
   * If null returned, nothing needs to be logged.
   */
  getExternalLogMessage(): any | null;
}
