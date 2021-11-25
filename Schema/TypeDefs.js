const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type asset {
    asset_id: String
    name: String
    price_usd: Float
  }

  type historicData {
    time_period_start: Date
    time_period_end: Date
    time_open: Date
    time_close: Date
    price_open: Float
    price_high: Float
    price_low: Float
    price_close: Float
    volume_traded: Float
    trades_count: Int
  }

  # Queries
  type Query {
    getAllAssets(assetIds: [String]): [asset]
    getLatestData(assetId: String, timePeriod: String, limit: Int): [historicData]
  }
`;

module.exports = { typeDefs };
