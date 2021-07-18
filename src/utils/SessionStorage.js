export class SessionStorage {
  static set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    const v = sessionStorage.getItem(key);
    if (v && !isNaN(v)) return +v;
    return sessionStorage.getItem(key);
  }
}
