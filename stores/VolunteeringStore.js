"use strict";

import {EventEmitter} from 'events';
import * as api from '../lib/edh-api';

class VolunteeringStore extends EventEmitter {

  constructor() {
    super();
    this._volunteer_opportunities = [];
  }

  get opportunities() {
    return this._volunteer_opportunities;
  }

  set opportunities(value) {
    this._volunteer_opportunities = value;
    this.emit('change', this._volunteer_opportunities);
  }

  async fetchWithQuery(q = '') {
    if (q.length > 0) {
      try {
        let res = await fetch(api.domain + `/search/volunteering_opportunities?q=${q}&limit=50`);
        let data = await res.json();
        this.opportunities = data.volunteering_opportunities;
      } catch (err) {
        console.error(err);
      }
    }
  }

}

export default VolunteeringStore;
