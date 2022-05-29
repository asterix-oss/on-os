/**
 * @description History module
 * @author @OpeAbidemi
 * @export
 * @class History
 */
class History {
  /**
   * @description List of apps
   */
  private apps: string[] = [];

  /**
   * @description Push app to history
   * @param app @type String
   * @memberof History
   * @returns {string[]}
   *
   */
  push(app: string) {
    return this.apps.push(app);
  }

  /**
   * @description Remove the last app from history
   * @returns {string}
   * @memberof History
   *
   */
  pop() {
    return this.apps.pop();
  }

  /**
   * @description Remove app from history
   * @returns {string}
   * @memberof History
   * @param app @type String
   * @returns {string[]}
   *
   */
  remove(app: string) {
    this.apps = this.apps.filter((a) => a !== app);
    return this.apps;
  }

  /**
   * @description Goto a specific app
   * @param app {string}
   * @returns {string[]}
   */
  goto(app: string) {
    this.remove(app);
    // return this.push(app);
  }

  /**
   * @description Clears the history
   * @returns {string[]}
   * @memberof History
   */
  clear() {
    this.apps = [];
    return this.apps;
  }

  get current() {
    return this.apps[this.apps.length - 1];
  }

  get previous() {
    return this.apps[this.apps.length - 2];
  }

  get length() {
    return this.apps.length;
  }

  get last() {
    return this.apps[0];
  }

  get first() {
    return this.apps[this.apps.length - 1];
  }

  get all() {
    return this.apps;
  }

  set all(apps: string[]) {
    this.apps = apps;
  }
}

export default History;
