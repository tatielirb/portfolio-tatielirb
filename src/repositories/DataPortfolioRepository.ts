import dataPortifolio from './DataInfosPortfolio.json';

export default {
  getdataPortifolio() {
    const data = dataPortifolio;

    return new Promise<any>(resolve => {
      resolve(data.result);
    });
  },
};