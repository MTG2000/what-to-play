export class SessionStorage {
  static set(key, value) {
    if (typeof value === "object") value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
  }

  static get(key) {
    const v = sessionStorage.getItem(key);
    if (v && !isNaN(v)) return +v;
    return sessionStorage.getItem(key);
  }
}
