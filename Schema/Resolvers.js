var SDK = require('../coinapi_v1')['default'];
var sdk = new SDK('39D27366-720A-417E-94C3-2DEBF8C8B22F');

const resolvers = {
  Query: {
    getAllAssets: (_, args) => {
      const assetIds = args.assetIds;
      return sdk.metadata_list_assets(assetIds).then(function (assets) {
        return assets;
      });
    },
    getLatestData: (_, args) => {
      const assetId = args.assetId;
      const timePeriod = args.timePeriod;
      const limit = args.limit;
      return sdk.ohlcv_latest_data('KRAKEN_SPOT_' + assetId + '_USD', timePeriod, limit).then(function (historicData) {
        return historicData;
      });
    },
  },
};

module.exports = { resolvers };
