import { INITIAL_DATA, INITIAL_SETTINGS, STORAGE_KEYS } from './constants.js';
import { loadStoredData, mergeData, encrypt } from './helpers.js';

class Store {
  constructor() {
    this.settings = { ...INITIAL_SETTINGS };
    this.data = { ...INITIAL_DATA };
  }

  loadSavedData() {
    const storedData = loadStoredData({
      key: STORAGE_KEYS.data,
      defaultData: this.data,
    });
    const mergedData = mergeData({ currentData: this.data, newData: storedData });

    this.data = mergedData;
  }

  loadSavedSettings() {
    const storedData = loadStoredData({
      key: STORAGE_KEYS.settings,
      defaultData: this.settings,
    });
    const mergedData = mergeData({
      currentData: this.settings,
      newData: storedData,
    });

    this.settings = mergedData;
  }

  saveData() {
    const storeString = JSON.stringify(this.data);
    const encrypted = encrypt(storeString);

    localStorage.setItem(STORAGE_KEYS.data, encrypted);
  }

  saveSettings() {
    const storeString = JSON.stringify(this.settings);
    const encrypted = encrypt(storeString);

    localStorage.setItem(STORAGE_KEYS.settings, encrypted);
  }

  setData(data) {
    this.data = _.merge(this.data, data);
  }

  setSettings(settings) {
    this.settings = _.merge(this.settings, settings);
  }
}

export default new Store();
